# Kotak Berkah Catering

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Menurut `24-catering-nasi-kotak-PRD.md`: keluarga yang menyiapkan syukuran, tahlilan, ulang tahun, dan pernikahan; HR/admin kantor; event organizer; serta sekolah/kampus. Pemesan berusia sekitar 25–50 tahun dan mengambil keputusan pengadaan konsumsi acara. Prioritas segmen tunggal belum ditetapkan; desain harus melayani kebutuhan keluarga dan institusi tanpa mengarang prioritas bisnis.

## Product Purpose

Website catering nasi kotak untuk membantu pemesan memahami isi paket, harga per kotak, minimum pemesanan, pilihan menu dan ketentuan acara, lalu berkonsultasi melalui WhatsApp.

## Positioning

Posisi yang dinyatakan PRD: cita rasa rumahan untuk acara spesial, dengan pilihan paket dan menu untuk kebutuhan acara berbeda. Ini adalah brief produk, bukan bukti keunggulan eksklusif atau klaim terverifikasi.

## Operating Context

Pemesan perlu mencocokkan tanggal acara, jumlah kotak, lokasi, anggaran, dan menu. Alur PRD: konsultasi → penawaran → DP → pengiriman. Bahasa utama Indonesia. Website statis berbasis Astro; redesign menggunakan TypeScript DOM dan CSS native tanpa React islands.

## Capabilities and Constraints

- Baseline paket dari PRD: Bronze Rp25.000/kotak, Silver Rp35.000/kotak, Gold Rp50.000/kotak, minimum 50 kotak; Platinum Rp75.000/kotak, minimum 100 kotak. Isi paket mengikuti PRD, tidak diubah untuk memenuhi komposisi desain.
- Kategori menu pada PRD: Nusantara, Western, Asian Fusion, Vegetarian; kebutuhan custom disampaikan melalui konsultasi, bukan dijanjikan otomatis tersedia.
- Website memiliki kategori menu, filter galeri, pilihan paket, dan formulir yang membuka WhatsApp dengan kebutuhan acara.
- PRD menyatakan booking H-3 untuk standar, H-7 untuk Platinum, DP 30%, serta layanan Jabodetabek/Bandung. Ketentuan ini adalah baseline PRD dan belum diverifikasi secara komersial.
- Nomor WhatsApp yang dipakai implementasi: 6282268116531. Label telepon footer sekarang diselaraskan dengan tujuan tautan. Status nomor sebagai kontak resmi usaha tetap perlu dipastikan pemilik sebelum publikasi.
- Tidak ada backend pembayaran atau pemesanan terkonfirmasi. Website tidak boleh mengklaim reservasi tanggal, penerimaan pesanan, atau pembayaran berhasil hanya karena WhatsApp dibuka.
- Toolchain keamanan: Astro 7.3.8, Tailwind 4.3.3, dan pnpm 11.28.5; CI menggunakan Node 22 dan package manager yang sama. `compressHTML: true` mempertahankan perilaku whitespace sebelum migrasi Astro 7.
- `pnpm-workspace.yaml` menetapkan override bersyarat untuk esbuild yang terdampak dan patch lokal `http-cache-semantics@4.3.0`. esbuild tidak ada pada graph dependency aktif saat verifikasi ini; override menjaga resolusi versi terdampak jika kembali diperlukan.
- Patch cache di `patches/http-cache-semantics@4.3.0.patch` menangani aturan revalidation, stale fallback, dan pemisahan identitas request, termasuk permintaan `Cache-Control: no-cache`/`Pragma: no-cache`. Tracking upstream: https://github.com/kornelski/http-cache-semantics/pull/63. GHSA-ch52-4w7c-c8xp masih diperdebatkan dan belum memiliki rilis patch resmi; update 4.3.0 saja tidak membuktikan perilaku tersebut aman.
- `npm test` menjalankan 18 regression test terhadap dependency cache yang benar-benar dipakai Astro. CI menjalankannya sebelum job deployment. Saat memperbarui library cache, hapus patch hanya setelah versi upstream memenuhi test yang sama dan regenerasikan lockfile; jangan mengabaikan advisory untuk mendapatkan audit bersih.

## Brand Commitments

Nama: Kotak Berkah Catering. Tagline PRD: “Rasa Rumah, Untuk Acara Spesialmu.” Suara: ramah, hangat, profesional, tidak pushy dan tidak overclaim.

Pengguna meminta redesign total dengan dunia visual baru, bukan penyempurnaan identitas hijau-krem sebelumnya. Pengguna meminta alur dan rekomendasi asli Impeccable, bukan daftar brand dari katalog getdesign.md. Pengguna mengizinkan peningkatan PRD dan penggantian foto, termasuk kurasi Pexels, serta meminta lebih banyak gambar yang sesuai produk.

## Evidence on Hand

- PRD: `24-catering-nasi-kotak-PRD.md`.
- Implementasi website: `src/pages/index.astro`, `src/styles/global.css`, `src/scripts/landing.ts`, dan `src/data/photography.ts`.
- Implementasi memakai 32 foto Pexels lokal dengan provenance di `public/images/curated/sources.json` dan pada masing-masing WebP. Foto ilustratif tidak membuktikan hasil produksi, pelanggan, dapur, atau acara Kotak Berkah.
- Bukti sertifikasi Halal/HACCP, 1.200+ event, kapasitas 3.000+ kotak, garansi, pengalaman chef, nama acara dan testimoni belum tersedia di materi proyek yang diperiksa. Jangan mengarang atau memperkuat bukti tersebut. Materi asli boleh dipasok pemilik; foto stok hanya ilustrasi yang jelas statusnya.

## Product Principles

- Produk nasi kotak harus terbaca, bukan tersamarkan sebagai restoran fine dining atau layanan kopi.
- Informasi isi, harga, minimum pesanan, dan konsultasi harus mudah ditemukan.
- Banyak foto harus memperjelas makanan dan kebutuhan acara; jangan memperbanyak stok acak atau mengklaimnya sebagai dokumentasi usaha.
- Pertahankan fakta dan fungsi produk ketika mengganti keseluruhan bahasa visual.
- Tidak menciptakan klaim pelanggan, sertifikasi, jaminan, atau kebijakan baru demi persuasi.

## Accessibility & Inclusion

Bahasa Indonesia yang jelas, navigasi keyboard, fokus terlihat, label form yang terhubung, kontras yang memadai, target sentuh yang nyaman, dan penghormatan reduced motion. Informasi inti harus tetap terlihat tanpa menunggu animasi atau hover.
