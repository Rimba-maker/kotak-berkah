import { AnimatePresence, motion, LayoutGroup } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';

const testimonials = [
  {
    stars: 5,
    quote: '"Wedding kami 800 tamu, semua makanan datang on-time dan habis. Tamu pada nanyain caterernya! Rendang-nya autentik banget."',
    name: 'Sarah & Dimas',
    role: 'Wedding · Jakarta · 800 tamu',
    initial: 'S',
  },
  {
    stars: 5,
    quote: '"Order rutin tiap bulan untuk monthly meeting kantor. Konsisten enak, admin responsif, dan pengirimannya tidak pernah terlambat satu kali pun."',
    name: 'Bu Linda Susanti',
    role: 'HR Manager · PT Maju Bersama',
    initial: 'L',
  },
  {
    stars: 5,
    quote: '"Acara keluarga 200 orang, dari nasi kebuli sampai dessertnya semua mantap. Semua tamu puas, tidak ada sisa. Recommended banget!"',
    name: 'Pak Hendra Wijaya',
    role: 'Syukuran Keluarga · Bekasi',
    initial: 'H',
  },
];

const INTERVAL = 5000;

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 260 : -260, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit:  (dir: number) => ({ x: dir > 0 ? -260 : 260, opacity: 0 }),
};

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const next = useCallback((d = 1) => {
    setDir(d);
    setIndex((i) => (i + d + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const t = setInterval(() => next(1), INTERVAL);
    return () => clearInterval(t);
  }, [next]);

  const t = testimonials[index]!;

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ position: 'relative', overflow: 'hidden', minHeight: 260 }}>
        <AnimatePresence custom={dir} mode="wait">
          <motion.div
            key={index}
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            style={{
              background: 'var(--white)',
              borderRadius: 'var(--radius-card)',
              boxShadow: 'var(--shadow-card)',
              padding: '32px',
              maxWidth: 680,
              margin: '0 auto',
              textAlign: 'left',
            }}
          >
            <div style={{ color: 'var(--green-accent)', fontSize: '1.8rem', letterSpacing: 3, marginBottom: 14 }}>
              {'★'.repeat(t.stars)}
            </div>
            <p style={{ fontSize: '1.6rem', color: 'var(--text)', lineHeight: 1.75, marginBottom: 24, fontStyle: 'italic' }}>
              {t.quote}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{
                width: 44, height: 44, borderRadius: '50%', flexShrink: 0,
                background: 'var(--green-light)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.7rem', fontWeight: 700, color: 'var(--green)',
              }}>
                {t.initial}
              </div>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text)', lineHeight: 1.3 }}>{t.name}</div>
                <div style={{ fontSize: '1.3rem', color: 'var(--text-soft)' }}>{t.role}</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <LayoutGroup>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 24 }}>
          {testimonials.map((_, i) => (
            <motion.button
              key={i}
              type="button"
              layoutId={i === index ? 'active-dot' : undefined}
              onClick={() => next(i > index ? 1 : -1)}
              style={{
                width: i === index ? 28 : 10,
                height: 10,
                borderRadius: 50,
                border: 'none',
                background: i === index ? 'var(--green-accent)' : 'var(--green-light)',
                cursor: 'pointer',
                padding: 0,
                transition: 'width 0.3s ease, background 0.3s ease',
              }}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </LayoutGroup>

      {/* Prev / Next */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 20 }}>
        <button
          type="button"
          onClick={() => next(-1)}
          style={{
            width: 40, height: 40, borderRadius: '50%', border: '1.5px solid var(--green-accent)',
            background: 'transparent', color: 'var(--green-accent)', cursor: 'pointer',
            fontSize: '1.6rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.2s',
          }}
          aria-label="Sebelumnya"
        >‹</button>
        <button
          type="button"
          onClick={() => next(1)}
          style={{
            width: 40, height: 40, borderRadius: '50%', border: 'none',
            background: 'var(--green-accent)', color: 'white', cursor: 'pointer',
            fontSize: '1.6rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.2s',
          }}
          aria-label="Selanjutnya"
        >›</button>
      </div>
    </div>
  );
}
