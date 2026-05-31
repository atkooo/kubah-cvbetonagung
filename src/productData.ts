import projectAlAkbarImage from "./assets/images/project_al_akbar_1780063109705.png";
import projectAlFalahImage from "./assets/images/project_al_falah_1780063147603.png";
import projectBaiturrahmanImage from "./assets/images/project_baiturrahman_1780063165472.png";

export interface ProductPageData {
  slug: string;
  title: string;
  eyebrow: string;
  shortTitle: string;
  metaDescription: string;
  heroImage: string;
  heroImageAlt: string;
  summary: string;
  description: string;
  bestFor: string[];
  highlights: {
    label: string;
    value: string;
  }[];
  advantages: {
    title: string;
    description: string;
  }[];
  specs: {
    label: string;
    value: string;
  }[];
  process: {
    title: string;
    description: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
}

export const productPages: ProductPageData[] = [
  {
    slug: "/produk/kubah-masjid-enamel",
    title: "Kubah Masjid Enamel",
    eyebrow: "Produk Kubah Masjid Premium",
    shortTitle: "Enamel",
    metaDescription:
      "Kubah masjid enamel CV Beton Agung untuk proyek masjid yang membutuhkan warna tajam, daya tahan tinggi, dan finishing rapi.",
    heroImage: projectAlAkbarImage,
    heroImageAlt: "Kubah masjid enamel dengan panel hijau dan aksen emas",
    summary:
      "Pilihan kubah dengan warna kuat, permukaan mengilap, dan ketahanan cuaca yang baik untuk masjid modern maupun renovasi besar.",
    description:
      "Kubah masjid enamel dibuat dari plat baja yang dilapisi enamel melalui proses pemanasan suhu tinggi. Material ini dikenal stabil terhadap panas, hujan, dan paparan sinar matahari sehingga cocok untuk bangunan masjid yang mengutamakan tampilan warna bersih dalam jangka panjang.",
    bestFor: [
      "Masjid raya dan masjid agung",
      "Proyek dengan motif warna custom",
      "Bangunan yang membutuhkan tampilan megah dan rapi",
      "Area dengan paparan panas dan hujan tinggi",
    ],
    highlights: [
      { label: "Karakter", value: "Warna cerah tahan pudar" },
      { label: "Finishing", value: "Panel enamel mengilap" },
      { label: "Perawatan", value: "Mudah dibersihkan" },
    ],
    advantages: [
      {
        title: "Warna Stabil",
        description:
          "Lapisan enamel menjaga warna tetap tajam dan tidak mudah kusam untuk tampilan kubah yang konsisten.",
      },
      {
        title: "Tahan Cuaca Tropis",
        description:
          "Material dirancang menghadapi panas, hujan, dan kelembapan dengan sambungan panel yang dibuat rapat.",
      },
      {
        title: "Motif Lebih Fleksibel",
        description:
          "Panel dapat disusun dengan kombinasi warna dan motif geometris sesuai desain arsitektur masjid.",
      },
    ],
    specs: [
      { label: "Material utama", value: "Plat baja berlapis enamel" },
      { label: "Pilihan warna", value: "Hijau, biru, putih, gold, custom" },
      { label: "Model kubah", value: "Bawang, setengah bola, Madinah, oval" },
      { label: "Rangka", value: "Galvanis atau space frame sesuai bentang" },
      { label: "Lingkup kerja", value: "Produksi, pengiriman, dan pemasangan" },
      { label: "Cocok untuk", value: "Kubah utama dan kubah menara" },
    ],
    process: [
      {
        title: "Survey dan Ukur",
        description:
          "Tim memeriksa ukuran ring balok, bentuk bangunan, akses lokasi, dan kebutuhan struktur.",
      },
      {
        title: "Desain Panel",
        description:
          "Motif, warna, diameter, tinggi, dan sistem rangka disesuaikan dengan konsep masjid.",
      },
      {
        title: "Produksi dan Pasang",
        description:
          "Panel diproduksi bertahap, dikirim ke lokasi, lalu dipasang dengan kontrol sambungan dan finishing.",
      },
    ],
    faq: [
      {
        question: "Apakah kubah enamel bisa memakai warna custom?",
        answer:
          "Bisa. Warna dan motif dapat disesuaikan dengan desain masjid, selama spesifikasi warna tersedia dan sesuai proses produksi.",
      },
      {
        question: "Apakah kubah enamel cocok untuk ukuran besar?",
        answer:
          "Cocok. Untuk diameter besar, sistem rangka dan pembagian panel perlu dihitung agar struktur tetap kuat dan pemasangan rapi.",
      },
    ],
  },
  {
    slug: "/produk/kubah-masjid-stainless-gold",
    title: "Kubah Masjid Stainless Gold",
    eyebrow: "Produk Kubah Masjid Elegan",
    shortTitle: "Stainless Gold",
    metaDescription:
      "Kubah masjid stainless gold CV Beton Agung untuk tampilan mewah, modern, tahan korosi, dan cocok untuk masjid berkonsep premium.",
    heroImage: projectAlFalahImage,
    heroImageAlt: "Kubah masjid stainless gold dengan kilau emas",
    summary:
      "Material kubah berkarakter mewah dengan kilau emas yang kuat, cocok untuk masjid modern, Islamic center, dan area fasad yang ingin tampil premium.",
    description:
      "Kubah masjid stainless gold menggunakan panel stainless berwarna emas untuk menghadirkan tampilan elegan dan bersih. Material ini dipilih ketika proyek membutuhkan visual premium, permukaan metalik, dan ketahanan korosi yang baik.",
    bestFor: [
      "Masjid modern dengan konsep premium",
      "Kubah menara dan kubah aksen",
      "Bangunan yang membutuhkan kesan gold elegan",
      "Area perkotaan dan fasad yang mudah terlihat",
    ],
    highlights: [
      { label: "Karakter", value: "Kilau emas premium" },
      { label: "Finishing", value: "Panel stainless gold" },
      { label: "Kesan visual", value: "Mewah dan modern" },
    ],
    advantages: [
      {
        title: "Tampilan Mewah",
        description:
          "Warna gold memberi aksen kuat pada bangunan masjid tanpa perlu ornamen yang terlalu ramai.",
      },
      {
        title: "Tahan Korosi",
        description:
          "Stainless memiliki ketahanan korosi yang baik, terutama jika detail sambungan dan perawatan dibuat benar.",
      },
      {
        title: "Cocok untuk Aksen Arsitektur",
        description:
          "Material ini efektif untuk kubah utama, kubah kecil, atau elemen menara yang menjadi fokus visual.",
      },
    ],
    specs: [
      { label: "Material utama", value: "Panel stainless warna gold" },
      { label: "Tampilan", value: "Gold reflektif atau satin sesuai kebutuhan" },
      { label: "Model kubah", value: "Bawang, Madinah, oval, custom" },
      { label: "Rangka", value: "Pipa galvanis atau struktur sesuai ukuran" },
      { label: "Lingkup kerja", value: "Produksi dan pemasangan panel" },
      { label: "Cocok untuk", value: "Kubah utama, menara, dan aksen fasad" },
    ],
    process: [
      {
        title: "Konsultasi Visual",
        description:
          "Tim membantu menyesuaikan tingkat kilau, bentuk kubah, dan komposisi panel dengan desain bangunan.",
      },
      {
        title: "Pembuatan Rangka",
        description:
          "Struktur dibuat mengikuti diameter dan tinggi kubah agar panel stainless terpasang presisi.",
      },
      {
        title: "Pemasangan Panel",
        description:
          "Panel dipasang dengan memperhatikan arah pantulan, kerapian sambungan, dan perlindungan finishing.",
      },
    ],
    faq: [
      {
        question: "Apakah stainless gold bisa dipakai untuk kubah utama?",
        answer:
          "Bisa. Material ini dapat digunakan untuk kubah utama selama desain rangka dan panel disesuaikan dengan ukuran proyek.",
      },
      {
        question: "Apakah warna gold mudah kusam?",
        answer:
          "Ketahanan tampilan dipengaruhi kualitas material, lingkungan lokasi, dan perawatan berkala. Tim akan menyesuaikan rekomendasi berdasarkan kondisi proyek.",
      },
    ],
  },
  {
    slug: "/produk/kubah-masjid-galvalum",
    title: "Kubah Masjid Galvalum",
    eyebrow: "Produk Kubah Masjid Efisien",
    shortTitle: "Galvalum",
    metaDescription:
      "Kubah masjid galvalum CV Beton Agung untuk kebutuhan kubah ringan, ekonomis, cepat dipasang, dan cocok untuk masjid baru maupun renovasi.",
    heroImage: projectBaiturrahmanImage,
    heroImageAlt: "Kubah masjid galvalum dengan finishing gelap elegan",
    summary:
      "Solusi kubah ringan dan efisien untuk proyek masjid yang membutuhkan bobot lebih rendah, biaya lebih terkendali, dan proses pemasangan praktis.",
    description:
      "Kubah masjid galvalum memakai material ringan berbasis lapisan aluminium dan seng. Material ini cocok untuk banyak proyek karena bobotnya lebih ringan, pilihan warnanya fleksibel, dan kebutuhan struktur dapat dibuat lebih efisien.",
    bestFor: [
      "Masjid lingkungan dan mushola besar",
      "Renovasi kubah lama",
      "Proyek dengan struktur bangunan terbatas",
      "Kebutuhan budget yang lebih efisien",
    ],
    highlights: [
      { label: "Karakter", value: "Ringan dan praktis" },
      { label: "Finishing", value: "Powder coating atau cat khusus" },
      { label: "Efisiensi", value: "Budget lebih terkendali" },
    ],
    advantages: [
      {
        title: "Bobot Ringan",
        description:
          "Galvalum membantu mengurangi beban pada struktur bangunan, terutama untuk renovasi atau bangunan skala menengah.",
      },
      {
        title: "Pemasangan Efisien",
        description:
          "Panel dan rangka dapat dibuat modular sehingga proses produksi dan pemasangan lebih praktis.",
      },
      {
        title: "Biaya Kompetitif",
        description:
          "Pilihan ini cocok untuk proyek yang membutuhkan tampilan kubah rapi dengan anggaran yang lebih terukur.",
      },
    ],
    specs: [
      { label: "Material utama", value: "Panel galvalum" },
      { label: "Finishing", value: "Powder coating atau cat eksterior" },
      { label: "Model kubah", value: "Setengah bola, bawang, pinang, custom" },
      { label: "Rangka", value: "Rangka ringan galvanis atau pipa" },
      { label: "Lingkup kerja", value: "Produksi, pengiriman, dan pemasangan" },
      { label: "Cocok untuk", value: "Masjid lingkungan, mushola, renovasi" },
    ],
    process: [
      {
        title: "Cek Struktur Eksisting",
        description:
          "Untuk renovasi, tim mengecek kondisi dudukan kubah dan kebutuhan penguatan sebelum produksi.",
      },
      {
        title: "Produksi Modular",
        description:
          "Panel dibuat berdasarkan ukuran dan warna yang disepakati agar pemasangan lebih tertib di lokasi.",
      },
      {
        title: "Instalasi",
        description:
          "Pemasangan dilakukan dengan fokus pada kerapian panel, sambungan kedap air, dan finishing akhir.",
      },
    ],
    faq: [
      {
        question: "Apakah kubah galvalum cocok untuk renovasi?",
        answer:
          "Cocok, terutama ketika bangunan membutuhkan material yang lebih ringan. Kondisi struktur lama tetap perlu diperiksa sebelum pemasangan.",
      },
      {
        question: "Bisakah warna kubah galvalum disesuaikan?",
        answer:
          "Bisa. Pilihan warna dapat disesuaikan dengan konsep masjid dan jenis finishing yang digunakan.",
      },
    ],
  },
];

export function getProductPageByPath(path: string) {
  return productPages.find((product) => product.slug === path);
}
