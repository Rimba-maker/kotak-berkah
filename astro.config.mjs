import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://Rimba-maker.github.io',
  base: '/kotak-berkah',
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',
});
