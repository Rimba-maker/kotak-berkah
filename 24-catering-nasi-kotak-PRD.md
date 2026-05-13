# PRD: Kotak Berkah — Catering Nasi Kotak Event

## 1. Brand Identity

**Nama Brand:** Kotak Berkah Catering
**Alasan Naming:** "Kotak" literal merujuk produk (nasi kotak), "Berkah" memberi nuansa positif & cocok dengan culture event Indonesia (pernikahan, syukuran, acara kantor). Mudah diingat, terdengar amanah.

**Tagline:** *"Rasa Rumah, Untuk Acara Spesialmu."*

**Target Audience:**
- Event organizer pernikahan & corporate
- HR / admin kantor (pesan untuk meeting & rapat)
- Keluarga untuk acara syukuran, tahlilan, ulang tahun
- Sekolah / kampus (acara wisuda, seminar)
- Range usia 25-50, decision maker pengadaan

**Brand Voice:**
- Tone: Ramah, terpercaya, profesional tapi tetap warm
- Style copywriting: Reassuring, fokus konsistensi rasa & kualitas
- Avoid: Bahasa sales pushy, overclaim

---

## 2. Tech Stack

- **Framework:** Astro 5 (SSG)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript (strict)
- **Animation:** Framer Motion via React islands
- **Deploy:** Netlify (static)
- **Images:** Unsplash + Pexels

---

## 3. Section Breakdown

| # | Section | Type | Tujuan |
|---|---------|------|--------|
| 1 | Navbar | `.astro` static | Logo, nav, CTA "Pesan via WA" |
| 2 | Hero | React island `client:load` | Statement: rasa rumahan untuk skala event |
| 3 | Paket Menu | React island `client:visible` | 3-4 paket pricing (Bronze/Silver/Gold/Platinum) |
| 4 | Menu Variants | React island `client:visible` | Detail menu per paket dengan tab |
| 5 | Kapasitas & Layanan | `.astro` static | Min order, max order, jangkauan area |
| 6 | Why Choose Us | React island `client:visible` | USP: dapur sendiri, halal, on-time |
| 7 | Portfolio Event | React island `client:visible` | Gallery foto event yang pernah dilayani |
| 8 | Testimonial | React island `client:visible` | Quote dari klien (corporate & personal) |
| 9 | Cara Pesan | `.astro` static | 4 step: konsultasi → quotation → DP → delivery |
| 10 | Form Pesan | React island `client:idle` | Quick inquiry form |
| 11 | Footer | `.astro` static | Kontak, area layanan, sertifikasi |

---

## 4. Copywriting (Bahasa Indonesia)

### Navbar
- Menu: Paket Menu • Layanan • Portfolio • Cara Pesan • Kontak
- CTA: **Pesan via WhatsApp**

### Hero
- **Headline:** Catering Yang Bikin Tamu Anda Pulang Dengan Senyuman.
- **Subheadline:** Nasi kotak premium dengan cita rasa rumahan untuk pernikahan, acara kantor, dan syukuran. Sudah melayani 1.200+ event di Jabodetabek sejak 2019.
- **CTA Primary:** Lihat Paket Menu
- **CTA Secondary:** Konsultasi Gratis

### Paket Menu
- **Heading:** Paket Yang Pas, Untuk Setiap Anggaran
- **Subheading:** Semua paket sudah termasuk kemasan eksklusif, sendok, tisu, dan air mineral.

**Paket Bronze — Rp 25.000/kotak** (min 50 box)
- Nasi putih, 1 protein utama, 1 sayur, kerupuk, buah, air mineral
- Pilihan: ayam goreng, ayam bakar, semur daging

**Paket Silver — Rp 35.000/kotak** (min 50 box) ⭐ Terlaris
- Nasi putih/uduk, 2 protein, 1 sayur, kerupuk, buah, dessert, air mineral
- Pilihan protein lebih beragam: rendang, ayam betutu, ikan dori

**Paket Gold — Rp 50.000/kotak** (min 50 box)
- Nasi (putih/uduk/kebuli), 3 protein, 2 sayur, lalapan, sambal, buah, dessert premium, air mineral
- Pilihan: rendang sapi, gulai ayam, dendeng balado, ikan kakap

**Paket Platinum — Rp 75.000/kotak** (min 100 box)
- Full premium course: appetizer, main course (4 protein), dessert, fresh fruit, mineral water atau jus
- Cocok untuk pernikahan & corporate executive event

### Menu Variants
- **Heading:** Pilih Menu Favorit Anda
- **Subheading:** Belum ketemu yang cocok? Kami bisa custom menu sesuai request.

Tabs: Nusantara • Western • Asian Fusion • Vegetarian

Sample dishes per tab dengan foto.

### Kapasitas & Layanan
- **Heading:** Skala Kecil Sampai Ribuan Tamu
- **Body:** Kami melayani mulai dari 50 box untuk acara keluarga, sampai 3.000+ box untuk wedding dan corporate event.

3 cards:
- 📦 **Min Order:** 50 box (free delivery untuk Jakarta)
- 🚚 **Area Layanan:** Jabodetabek, Bandung, Bogor
- ⏰ **Booking:** H-3 untuk paket standar, H-7 untuk Platinum

### Why Choose Us
- **Heading:** Kenapa Klien Percaya Kami?
- 6 USP:
  1. **🏠 Dapur Sendiri, Bukan Outsource** — Kontrol kualitas dari hulu sampai hilir
  2. **✅ Halal MUI Tersertifikasi** — Aman untuk semua tamu
  3. **⏰ On-Time Guarantee** — Telat lebih dari 30 menit, refund 10%
  4. **🌡️ Food Safety Standard** — HACCP certified, suhu terjaga sampai disajikan
  5. **🎁 Free Tasting** — Untuk order 200+ box, tasting gratis sebelum hari H
  6. **👨‍🍳 Chef Berpengalaman 15+ Tahun** — Pernah handle event istana negara

### Portfolio Event
- **Heading:** Event Yang Pernah Kami Layani
- Filter: Wedding • Corporate • Government • Pendidikan • Sosial
- Grid foto event 2-3 kolom dengan caption (nama event, jumlah box, tahun)

### Testimonial
- **Heading:** Cerita Dari Klien Kami
- 3-4 testimonial dengan foto:
  - "Wedding kami 800 tamu, semua makanan datang on-time dan habis. Tamu pada nanyain caterernya!" — *Sarah & Dimas, Jakarta*
  - "Order rutin tiap bulan untuk monthly meeting kantor. Konsisten enak, admin responsif." — *Bu Linda, HR PT XYZ*
  - "Acara keluarga 200 orang, dari nasi kebuli sampai dessertnya semua mantap. Recommended!" — *Pak Hendra, Bekasi*

### Cara Pesan
- **Heading:** Cuma 4 Langkah, Pesanan Siap
- Timeline:
  1. **💬 Konsultasi** — Hubungi via WA, sampaikan tanggal & jumlah tamu
  2. **📋 Quotation** — Kami kirim penawaran detail dalam 2 jam
  3. **💳 Down Payment** — DP 30% untuk lock booking
  4. **🚚 Hari H** — Kami antar tepat waktu, siap saji

### Form Pesan
- **Heading:** Konsultasi Gratis Sekarang
- Field: Nama, WA, Tanggal Event, Jumlah Box, Paket, Catatan
- Submit: kirim langsung ke WA admin (deep link `wa.me/`)

### Footer
- Tagline: *"Setiap kotak adalah komitmen kami."*
- Kontak: WA, telp, email
- Area layanan: Jabodetabek, Bandung, Bogor
- Sertifikasi: Halal MUI, HACCP, NIB

---

## 5. Image References

| Section | Source | URL / Search Term | Alt Text | Dimensi |
|---------|--------|-------------------|----------|---------|
| Hero | Pexels | https://www.pexels.com/search/indonesian%20food%20rice%20box/ | "Nasi kotak premium tertata rapi" | 1920x1080 |
| Paket Bronze | Pexels | https://www.pexels.com/search/nasi%20kotak/ | "Paket bronze nasi kotak" | 800x600 |
| Paket Silver | Unsplash | https://unsplash.com/s/photos/indonesian-rice-meal | "Paket silver dengan rendang" | 800x600 |
| Paket Gold | Unsplash | https://unsplash.com/s/photos/nasi-kebuli-rice | "Paket gold premium" | 800x600 |
| Paket Platinum | Pexels | https://www.pexels.com/search/wedding%20food%20catering/ | "Paket platinum executive" | 800x600 |
| Menu Nusantara | Unsplash | https://unsplash.com/s/photos/rendang-padang | "Menu nusantara rendang" | 600x400 |
| Menu Western | Pexels | https://www.pexels.com/search/grilled%20chicken%20rice/ | "Menu western grilled" | 600x400 |
| Kapasitas - Kitchen | Pexels | https://www.pexels.com/search/commercial%20kitchen%20catering/ | "Dapur produksi catering" | 1200x800 |
| Why Us - Chef | Unsplash | https://unsplash.com/s/photos/chef-cooking-asian | "Chef memasak profesional" | 800x600 |
| Why Us - Delivery | Pexels | https://www.pexels.com/search/food%20delivery%20catering/ | "Pengantaran tepat waktu" | 800x600 |
| Portfolio Wedding | Unsplash | https://unsplash.com/s/photos/wedding-buffet-indonesia | "Catering wedding event" | 1200x800 |
| Portfolio Corporate | Pexels | https://www.pexels.com/search/corporate%20catering%20event/ | "Corporate event catering" | 1200x800 |
| Testimonial avatars | Pexels | https://www.pexels.com/search/indonesian%20professional%20portrait/ | Portrait klien | 200x200 |

---

## 6. Animation Spec (Framer Motion)

### Hero (React island, `client:load`)
```tsx
const heroReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, staggerChildren: 0.15 }
  }
}

// Counter animation untuk "1.200+ event"
// Pakai useMotionValue + useTransform + animate()
import { animate, useMotionValue, useTransform } from "framer-motion"
```

### Paket Menu (React island, `client:visible`)
- Pricing cards reveal stagger `staggerChildren: 0.1`
- Card "Terlaris" badge: bounce on enter, glow pulse infinite
- Card hover: lift `y: -10`, scale `1.02`, border glow
- Best-value card slightly scaled up dari card lain (`scale: 1.05`)

### Menu Variants (React island, `client:visible`)
- Tab switch: `AnimatePresence` mode `wait` dengan fade + slide
- Dish cards reveal grid stagger

### Kapasitas Cards (React island, `client:visible`)
- 3 cards reveal dari bawah dengan stagger
- Icon scale pop on visible: `scale: [0, 1.2, 1]`, spring transition

### Why Choose Us (React island, `client:visible`)
- 6 cards alternating reveal (left-right-left-right)
- Number badge counter animation `0 → target` saat scroll into view

### Portfolio Event (React island, `client:visible`)
- Filter chip active state: smooth color transition
- Image grid filter: `AnimatePresence` + `layout` prop untuk smooth reflow
- Image hover: zoom `scale: 1.08` + overlay slide-up dengan info

### Testimonial Carousel (React island, `client:visible`)
- Auto-rotate every 5s
- Slide transition pakai `AnimatePresence` direction-aware
- Dots indicator dengan smooth `layoutId` animation

### Cara Pesan Timeline (React island, `client:visible`)
- Vertical line draw via SVG `pathLength` 
- Step numbers reveal sequentially `staggerChildren: 0.3`
- Active step (jika hover) highlight ring

### Form Submit Button
- `whileHover={{ scale: 1.03 }}`
- `whileTap={{ scale: 0.97 }}`
- Loading state: button width animate, spinner appear

### Scroll Reveal Pattern (reusable)
```tsx
const trustworthyFade = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } }
}
```

### Hydration Strategy
- `client:load` → Hero
- `client:visible` → Paket, Menu, Why Us, Portfolio, Testimonial
- `client:idle` → Form (defer sampai browser idle)
- Sisanya static

---

## 7. SEO Meta

- **Title:** Kotak Berkah Catering — Nasi Kotak Premium Jabodetabek
- **Description:** Catering nasi kotak premium untuk wedding, corporate event, & syukuran. Halal MUI, on-time guarantee, 1.200+ event sejak 2019. Konsultasi gratis WA.
- **Keywords:** catering nasi kotak, catering jakarta, catering wedding, nasi kotak premium, catering kantor jabodetabek
- **OG Image:** Flat lay nasi kotak premium dengan logo (1200x630)
- **Schema:** `FoodEstablishment` + `Menu` + `Review` schema
