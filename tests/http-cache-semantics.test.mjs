import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { describe, it } from 'node:test';

// Exercise Astro's actual installed dependency, including the pnpm patch.
const requireFromAstro = createRequire(import.meta.resolve('astro/package.json'));
const CachePolicy = requireFromAstro('http-cache-semantics');

const request = {
  url: 'https://cache.example/menu',
  method: 'GET',
  headers: { host: 'cache.example', 'accept-language': 'id' },
};

// RFC 9111 section 5.2: client max-stale cannot waive origin validation rules.
// Upstream tracking: https://github.com/kornelski/http-cache-semantics/pull/63
// GHSA-ch52-4w7c-c8xp is disputed; these tests prove the narrower policy defects.
describe('CachePolicy.evaluateRequest', () => {
  it('should require origin validation despite a client max-stale directive', () => {
    const policy = cachedResponse('max-age=1, no-cache');
    const result = policy.evaluateRequest({
      ...request,
      headers: { ...request.headers, 'cache-control': 'max-stale=1000' },
    });

    assert.equal(result.response, undefined);
    assert.equal(result.revalidation.synchronous, true);
  });

  for (const directive of ['no-store', 'private', 'must-revalidate', 'proxy-revalidate', 's-maxage=0', 'No-Cache']) {
    it(`should reject stale shared-cache reuse with ${directive}`, () => {
      const policy = cachedResponse(`max-age=1, ${directive}`);

      assert.equal(policy.satisfiesWithoutRevalidation({
        ...request,
        headers: { ...request.headers, 'cache-control': 'max-stale=1000' },
      }), false);
    });
  }

  it('should keep normal client-authorized stale reuse working', () => {
    const policy = cachedResponse('max-age=1');

    assert.equal(policy.satisfiesWithoutRevalidation({
      ...request,
      headers: { ...request.headers, 'cache-control': 'max-stale=1000' },
    }), true);
  });

  it('should distinguish private cache reuse from shared cache restrictions', () => {
    const policy = cachedResponse('max-age=1, private, proxy-revalidate', {}, { shared: false });

    assert.equal(policy.satisfiesWithoutRevalidation({
      ...request,
      headers: { ...request.headers, 'cache-control': 'max-stale=1000' },
    }), true);
  });

  it('should retain the shared cache cookie safeguard unless explicitly public', () => {
    const restricted = cachedResponse('max-age=1', { 'set-cookie': 'session=personal' });
    const publicResponse = cachedResponse('max-age=1, public', { 'set-cookie': 'session=public' });
    const incoming = { ...request, headers: { ...request.headers, 'cache-control': 'max-stale=1000' } };

    assert.equal(restricted.satisfiesWithoutRevalidation(incoming), false);
    assert.equal(publicResponse.satisfiesWithoutRevalidation(incoming), true);
  });

  it('should reuse fresh responses without prematurely applying stale-only rules', () => {
    for (const directive of ['must-revalidate', 'proxy-revalidate', 's-maxage=60']) {
      const policy = cachedResponse(`max-age=60, ${directive}`);

      assert.equal(policy.satisfiesWithoutRevalidation(request), true);
    }
  });

  it('should preserve origin validation after restoring a serialized policy', () => {
    const original = cachedResponse('max-age=1, no-cache');
    const restored = CachePolicy.fromObject(original.toObject());
    const now = restored.now();
    restored.now = () => now;

    assert.equal(restored.satisfiesWithoutRevalidation({
      ...request,
      headers: { ...request.headers, 'cache-control': 'max-stale=1000' },
    }), false);
  });
});

describe('CachePolicy stale fallback', () => {
  it('should not background-revalidate a response requiring origin validation', () => {
    const policy = cachedResponse('max-age=1, no-cache, stale-while-revalidate=100');

    assert.equal(policy.useStaleWhileRevalidate(), false);
  });

  it('should not bypass origin validation when revalidation returns an error', () => {
    const policy = cachedResponse('max-age=1, no-cache, stale-if-error=100');
    const result = policy.revalidatedPolicy(request, { status: 503, headers: {} });

    assert.equal(result.modified, true);
  });

  it('should preserve incoming request validation requirements after an origin error', () => {
    const policy = cachedResponse('max-age=1, stale-if-error=100');
    const directives = [
      { 'cache-control': 'no-cache' },
      { 'cache-control': 'No-Cache' },
      { pragma: 'no-cache' },
      { pragma: 'No-Cache' },
    ];

    for (const headers of directives) {
      const incoming = { ...request, headers: { ...request.headers, ...headers } };
      const evaluation = policy.evaluateRequest(incoming);

      assert.equal(evaluation.response, undefined);
      assert.equal(evaluation.revalidation.synchronous, true);
      assert.equal(policy.revalidatedPolicy(incoming, { status: 503, headers: {} }).modified, true);
    }
  });

  it('should not reuse an error fallback across different request identities', () => {
    const policy = cachedResponse('max-age=1, stale-if-error=100', { vary: 'accept-language' });
    const variants = [
      { ...request, url: 'https://cache.example/private' },
      { ...request, method: 'POST' },
      { ...request, headers: { ...request.headers, host: 'other.example' } },
      { ...request, headers: { ...request.headers, 'accept-language': 'en' } },
    ];

    for (const variant of variants) {
      assert.equal(policy.revalidatedPolicy(variant, { status: 503, headers: {} }).modified, true);
    }
  });

  it('should require an explicit positive stale-if-error allowance', () => {
    const policy = cachedResponse('max-age=60');

    assert.equal(policy.revalidatedPolicy(request, { status: 503, headers: {} }).modified, true);
  });

  it('should retain a matching response within its explicit error fallback window', () => {
    const policy = cachedResponse('max-age=1, stale-if-error=100');

    assert.equal(policy.revalidatedPolicy(request, { status: 503, headers: {} }).modified, false);
  });
});

// Helpers
function cachedResponse(cacheControl, headers = {}, options = {}) {
  const policy = new CachePolicy(request, {
    status: 200,
    headers: { age: '10', 'cache-control': cacheControl, ...headers },
  }, options);
  const now = policy.now();
  policy.now = () => now;
  return policy;
}
