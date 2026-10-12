export type Photo = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  source: string;
  credit: string;
  category: 'nusantara' | 'western' | 'asian' | 'vegetarian' | 'ingredients' | 'occasion' | 'packaging';
};

// Stock illustrations, not documentation of Kotak Berkah production or clients.
// Source, licensing, and processing provenance: /images/curated/sources.json.
export const heroPhotoId = 'nasi-kotak-ayam';

export const photos: Photo[] = [
  {
    "id": "rendang",
    "src": "/images/curated/rendang.webp",
    "alt": "Rendang sapi di piring putih dengan irisan cabai merah di meja kayu",
    "width": 1200,
    "height": 860,
    "source": "https://www.pexels.com/photo/delicious-rendang-beef-plate-with-sides-37081040/",
    "credit": "Teguh S / Pexels",
    "category": "nusantara"
  },
  {
    "id": "nasi-padang",
    "src": "/images/curated/nasi-padang.webp",
    "alt": "Rendang dan beberapa lauk nasi Padang tersaji bersama di meja",
    "width": 898,
    "height": 1350,
    "source": "https://www.pexels.com/photo/authentic-nasi-padang-with-beef-rendang-37339493/",
    "credit": "anggit priyandani / Pexels",
    "category": "nusantara"
  },
  {
    "id": "nasi-goreng",
    "src": "/images/curated/nasi-goreng.webp",
    "alt": "Nasi goreng dengan telur ceplok, udang, ayam, kerupuk, dan sayuran",
    "width": 1200,
    "height": 824,
    "source": "https://www.pexels.com/photo/indonesian-nasi-goreng-with-sides-37173549/",
    "credit": "Noval Gani / Pexels",
    "category": "nusantara"
  },
  {
    "id": "sate-ayam",
    "src": "/images/curated/sate-ayam.webp",
    "alt": "Sate ayam berbumbu dengan sambal dan hidangan pendamping",
    "width": 1080,
    "height": 1350,
    "source": "https://www.pexels.com/photo/delicious-indonesian-sate-ayam-with-sides-37106992/",
    "credit": "Tamba Budiarsana / Pexels",
    "category": "nusantara"
  },
  {
    "id": "nasi-ayam-panggang",
    "src": "/images/curated/nasi-ayam-panggang.webp",
    "alt": "Sepiring nasi putih, ayam panggang, dan sayuran di meja kayu",
    "width": 1200,
    "height": 800,
    "source": "https://www.pexels.com/photo/plate-of-rice-with-grilled-chicken-and-vegetables-36982101/",
    "credit": "rakhmat suwandi / Pexels",
    "category": "nusantara"
  },
  {
    "id": "nasi-kuning",
    "src": "/images/curated/nasi-kuning.webp",
    "alt": "Nasi kuning dengan paha ayam, telur, kerupuk, dan sayuran",
    "width": 1200,
    "height": 800,
    "source": "https://www.pexels.com/photo/indonesian-nasi-kuning-with-traditional-sides-37113558/",
    "credit": "Man Fong Wong / Pexels",
    "category": "nusantara"
  },
  {
    "id": "nasi-uduk",
    "src": "/images/curated/nasi-uduk.webp",
    "alt": "Nasi uduk di tengah piring besar dengan ayam, ikan, dan lauk pendamping",
    "width": 1200,
    "height": 800,
    "source": "https://www.pexels.com/photo/traditional-indonesian-nasi-uduk-platter-32909265/",
    "credit": "FOX ^.ᆽ.^= ∫ / Pexels",
    "category": "nusantara"
  },
  {
    "id": "ayam-geprek",
    "src": "/images/curated/ayam-geprek.webp",
    "alt": "Nasi dan ayam geprek dengan lauk di piring yang terkena cahaya matahari",
    "width": 900,
    "height": 1350,
    "source": "https://www.pexels.com/photo/authentic-indonesian-smashed-chicken-dish-37320399/",
    "credit": "Umar ben / Pexels",
    "category": "nusantara"
  },
  {
    "id": "ayam-betutu",
    "src": "/images/curated/ayam-betutu.webp",
    "alt": "Ayam betutu dan nasi di atas daun pisang dengan bumbu di sekeliling piring",
    "width": 1200,
    "height": 800,
    "source": "https://www.pexels.com/photo/traditional-balinese-ayam-betutu-dish-artfully-prepared-37106528/",
    "credit": "Tamba Budiarsana / Pexels",
    "category": "nusantara"
  },
  {
    "id": "ayam-penyet",
    "src": "/images/curated/ayam-penyet.webp",
    "alt": "Hidangan ayam penyet, nasi, sambal, dan lauk dalam nampan kayu",
    "width": 899,
    "height": 1350,
    "source": "https://www.pexels.com/photo/traditional-indonesian-meal-with-ayam-penyet-37076558/",
    "credit": "Tiya Nh / Pexels",
    "category": "nusantara"
  },
  {
    "id": "meja-nusantara",
    "src": "/images/curated/meja-nusantara.webp",
    "alt": "Beberapa hidangan Nusantara dengan nasi dan lauk tersaji di meja kayu",
    "width": 902,
    "height": 1350,
    "source": "https://www.pexels.com/photo/delicious-traditional-indonesian-cuisine-display-37095601/",
    "credit": "Ellisa Agustina / Pexels",
    "category": "nusantara"
  },
  {
    "id": "nasi-lauk",
    "src": "/images/curated/nasi-lauk.webp",
    "alt": "Nasi putih, lauk berkuah kuning, sayuran, kerupuk, dan sambal dilihat dari atas",
    "width": 1200,
    "height": 675,
    "source": "https://www.pexels.com/photo/traditional-indonesian-cuisine-on-table-setting-37090657/",
    "credit": "Fadli Octora Channel / Pexels",
    "category": "nusantara"
  },
  {
    "id": "ayam-sayuran",
    "src": "/images/curated/ayam-sayuran.webp",
    "alt": "Potongan ayam dengan kentang, buncis, selada, dan mentimun di piring putih",
    "width": 1012,
    "height": 1350,
    "source": "https://www.pexels.com/photo/healthy-plate-with-vegetables-and-grilled-chicken-29269622/",
    "credit": "Diet Guide / Pexels",
    "category": "western"
  },
  {
    "id": "pasta-jamur",
    "src": "/images/curated/pasta-jamur.webp",
    "alt": "Pasta berbentuk pita dengan saus krim, jamur, dan daun basil",
    "width": 1200,
    "height": 800,
    "source": "https://www.pexels.com/photo/a-close-up-shot-of-a-pasta-dish-on-a-plate-6213755/",
    "credit": "Vladimir Gladkov / Pexels",
    "category": "western"
  },
  {
    "id": "pasta-ayam",
    "src": "/images/curated/pasta-ayam.webp",
    "alt": "Pasta dengan potongan ayam dan brokoli dalam mangkuk putih di meja kayu",
    "width": 1200,
    "height": 800,
    "source": "https://www.pexels.com/photo/close-up-photo-of-chicken-pasta-with-broccoli-in-a-white-bowl-9760214/",
    "credit": "Biel Heinrich / Pexels",
    "category": "western"
  },
  {
    "id": "katsu-nasi",
    "src": "/images/curated/katsu-nasi.webp",
    "alt": "Chicken katsu berlapis saus dengan nasi goreng di piring putih",
    "width": 1011,
    "height": 1350,
    "source": "https://www.pexels.com/photo/top-view-of-chicken-katsu-with-fried-rice-29160666/",
    "credit": "Nadin Sh / Pexels",
    "category": "asian"
  },
  {
    "id": "ayam-teriyaki",
    "src": "/images/curated/ayam-teriyaki.webp",
    "alt": "Potongan ayam teriyaki di atas nasi dengan wijen dan daun bawang",
    "width": 1012,
    "height": 1350,
    "source": "https://www.pexels.com/photo/delicious-teriyaki-chicken-rice-bowl-close-up-28442544/",
    "credit": "Nadin Sh / Pexels",
    "category": "asian"
  },
  {
    "id": "mi-goreng",
    "src": "/images/curated/mi-goreng.webp",
    "alt": "Mi goreng dengan sayuran tersaji hangat di piring putih",
    "width": 900,
    "height": 1350,
    "source": "https://www.pexels.com/photo/hot-chow-mein-noodles-in-white-ceramic-plate-7138913/",
    "credit": "Boluwatife Olatunji / Pexels",
    "category": "asian"
  },
  {
    "id": "nasi-ayam-hainan",
    "src": "/images/curated/nasi-ayam-hainan.webp",
    "alt": "Nasi ayam Hainan dengan saus, mentimun, dan buah segar di meja terang",
    "width": 1200,
    "height": 742,
    "source": "https://www.pexels.com/photo/delicious-hainanese-chicken-rice-and-fresh-fruits-30120281/",
    "credit": "Change C.C / Pexels",
    "category": "asian"
  },
  {
    "id": "gado-gado",
    "src": "/images/curated/gado-gado.webp",
    "alt": "Gado-gado dengan sayuran, telur, dan saus kacang di piring putih",
    "width": 900,
    "height": 1350,
    "source": "https://www.pexels.com/photo/indonesian-gado-gado-salad-with-peanut-sauce-31336123/",
    "credit": "Dovinda Rd / Pexels",
    "category": "vegetarian"
  },
  {
    "id": "nasi-tempe",
    "src": "/images/curated/nasi-tempe.webp",
    "alt": "Nasi dengan tempe, orek tempe, dan telur dadar di piring putih",
    "width": 1200,
    "height": 800,
    "source": "https://www.pexels.com/photo/indonesian-tempeh-and-rice-dish-on-plate-36982092/",
    "credit": "rakhmat suwandi / Pexels",
    "category": "vegetarian"
  },
  {
    "id": "sayur-tahu",
    "src": "/images/curated/sayur-tahu.webp",
    "alt": "Dua mangkuk mi dengan tahu, jamur, wortel, dan sayuran hijau",
    "width": 1200,
    "height": 900,
    "source": "https://www.pexels.com/photo/vegetable-salad-3026808/",
    "credit": "Ella Olsson / Pexels",
    "category": "vegetarian"
  },
  {
    "id": "salad-sayuran",
    "src": "/images/curated/salad-sayuran.webp",
    "alt": "Mangkuk salad berisi sayuran segar dan alpukat di meja putih",
    "width": 1200,
    "height": 800,
    "source": "https://www.pexels.com/photo/photo-of-vegetable-salad-in-bowls-1640770/",
    "credit": "Ella Olsson / Pexels",
    "category": "vegetarian"
  },
  {
    "id": "cabai-segar",
    "src": "/images/curated/cabai-segar.webp",
    "alt": "Cabai merah dan hijau segar dilihat dari dekat",
    "width": 900,
    "height": 1350,
    "source": "https://www.pexels.com/photo/pile-of-red-and-green-chili-peppers-2893882/",
    "credit": "Mark Stebnicki / Pexels",
    "category": "ingredients"
  },
  {
    "id": "beras",
    "src": "/images/curated/beras.webp",
    "alt": "Butiran beras putih di atas permukaan abu-abu",
    "width": 1200,
    "height": 797,
    "source": "https://www.pexels.com/photo/close-up-of-rice-17502263/",
    "credit": "Mari M / Pexels",
    "category": "ingredients"
  },
  {
    "id": "sayuran-segar",
    "src": "/images/curated/sayuran-segar.webp",
    "alt": "Kacang panjang, terong, dan lobak segar di atas meja kayu",
    "width": 1200,
    "height": 801,
    "source": "https://www.pexels.com/photo/vegetables-on-brown-wooden-surface-754315/",
    "credit": "C k / Pexels",
    "category": "ingredients"
  },
  {
    "id": "acara-taman",
    "src": "/images/curated/acara-taman.webp",
    "alt": "Ilustrasi stok meja hidangan dan bunga untuk resepsi di taman",
    "width": 1200,
    "height": 801,
    "source": "https://www.pexels.com/photo/wedding-reception-catering-on-table-in-garden-19869792/",
    "credit": "Jonathan Borba / Pexels",
    "category": "occasion"
  },
  {
    "id": "rapat-kantor",
    "src": "/images/curated/rapat-kantor.webp",
    "alt": "Ilustrasi stok peserta rapat duduk bersama di meja kantor",
    "width": 1200,
    "height": 800,
    "source": "https://www.pexels.com/photo/a-group-of-people-having-a-meeting-in-the-office-7845319/",
    "credit": "RDNE Stock project / Pexels",
    "category": "occasion"
  },
  {
    "id": "belajar-bersama",
    "src": "/images/curated/belajar-bersama.webp",
    "alt": "Ilustrasi stok mahasiswa belajar bersama di meja dekat jendela",
    "width": 1200,
    "height": 800,
    "source": "https://www.pexels.com/photo/students-studying-together-7683730/",
    "credit": "RDNE Stock project / Pexels",
    "category": "occasion"
  },
  {
    "id": "kumpul-keluarga",
    "src": "/images/curated/kumpul-keluarga.webp",
    "alt": "Ilustrasi stok keluarga dengan anak-anak menikmati piknik di taman",
    "width": 1200,
    "height": 801,
    "source": "https://www.pexels.com/photo/a-family-having-a-picnic-7669127/",
    "credit": "Kampus Production / Pexels",
    "category": "occasion"
  },
  {
    "id": "nasi-kotak-ayam",
    "src": "/images/curated/nasi-kotak-ayam.webp",
    "alt": "Nasi putih, ayam goreng, dan mentimun dalam kotak makanan terbuka",
    "width": 1200,
    "height": 800,
    "source": "https://www.pexels.com/photo/delicious-indonesian-ayam-penyet-with-rice-37303556/",
    "credit": "Umar ben / Pexels",
    "category": "packaging"
  },
  {
    "id": "kotak-nasi-sayuran",
    "src": "/images/curated/kotak-nasi-sayuran.webp",
    "alt": "Nasi putih, ayam suwir, brokoli, wortel, dan mentimun dalam wadah makanan",
    "width": 1200,
    "height": 900,
    "source": "https://www.pexels.com/photo/healthy-lunch-box-with-rice-and-vegetables-32287751/",
    "credit": "David Balbino / Pexels",
    "category": "packaging"
  }
];
