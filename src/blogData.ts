import projectAlAkbarImage from "./assets/images/project_al_akbar_1780063109705.png";
import projectAlFalahImage from "./assets/images/project_al_falah_1780063147603.png";
import projectAlJabbarImage from "./assets/images/project_al_jabbar_1780063127068.png";
import projectBaiturrahmanImage from "./assets/images/project_baiturrahman_1780063165472.png";

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  highlights: string[];
  sections: {
    heading: string;
    body: string[];
  }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "cara-memilih-material-kubah-masjid",
    title: "Cara Memilih Material Kubah Masjid yang Tepat",
    category: "Material",
    date: "31 Mei 2026",
    readTime: "5 menit",
    excerpt:
      "Panduan memilih enamel, stainless gold, galvalum, kuningan, atau tembaga berdasarkan tampilan, bobot, biaya, dan perawatan.",
    image: projectAlAkbarImage,
    imageAlt: "Kubah masjid enamel sebagai contoh pilihan material",
    highlights: [
      "Enamel cocok untuk warna tajam dan tampilan premium.",
      "Galvalum membantu menekan bobot dan biaya struktur.",
      "Stainless gold memberi aksen mewah pada kubah dan menara.",
    ],
    sections: [
      {
        heading: "Mulai dari Kebutuhan Bangunan",
        body: [
          "Material kubah tidak bisa dipilih hanya dari tampilan. Panitia perlu melihat ukuran bangunan, kekuatan ring balok, lokasi proyek, target visual, dan anggaran yang tersedia.",
          "Untuk masjid besar dengan kebutuhan warna mencolok, enamel sering menjadi pilihan kuat. Untuk renovasi atau bangunan dengan struktur terbatas, galvalum dapat menjadi opsi yang lebih ringan.",
        ],
      },
      {
        heading: "Bandingkan Karakter Material",
        body: [
          "Enamel memiliki warna stabil dan permukaan mengilap. Stainless gold memberi kesan premium dengan karakter metalik. Galvalum lebih ringan dan efisien untuk proyek skala menengah.",
          "Kuningan dan tembaga lebih cocok untuk kebutuhan visual klasik dan eksklusif, tetapi perlu perhatian lebih pada biaya awal dan detail perawatan.",
        ],
      },
      {
        heading: "Perhatikan Perawatan Jangka Panjang",
        body: [
          "Setiap material membutuhkan perawatan yang berbeda. Lokasi pesisir, area dengan debu tinggi, atau bangunan yang sulit diakses perlu dipertimbangkan sejak awal.",
          "Diskusi material sebaiknya dilakukan bersama ukuran kubah, bentuk, dan metode pemasangan agar rekomendasi lebih akurat.",
        ],
      },
    ],
  },
  {
    slug: "faktor-yang-mempengaruhi-harga-kubah-masjid",
    title: "Faktor yang Mempengaruhi Harga Kubah Masjid",
    category: "Harga",
    date: "31 Mei 2026",
    readTime: "6 menit",
    excerpt:
      "Harga kubah masjid dipengaruhi diameter, tinggi, model, material, rangka, akses lokasi, dan kebutuhan pemasangan.",
    image: projectAlJabbarImage,
    imageAlt: "Kubah masjid besar sebagai ilustrasi faktor harga",
    highlights: [
      "Diameter dan tinggi menentukan luas panel.",
      "Material finishing memengaruhi biaya produksi.",
      "Akses lokasi berpengaruh pada pemasangan dan mobilisasi.",
    ],
    sections: [
      {
        heading: "Ukuran adalah Faktor Utama",
        body: [
          "Diameter dan tinggi kubah menentukan luas permukaan panel. Kubah dengan diameter sama bisa memiliki biaya berbeda jika bentuk dan tinggi profilnya tidak sama.",
          "Model bawang, setengah bola, Madinah, dan oval memiliki kebutuhan panel serta rangka yang berbeda. Karena itu estimasi perlu membaca bentuk, bukan hanya diameter.",
        ],
      },
      {
        heading: "Material dan Rangka",
        body: [
          "Material panel seperti enamel, stainless gold, galvalum, kuningan, dan tembaga memiliki range biaya berbeda. Ketebalan, finishing, warna, dan motif juga memengaruhi nilai pekerjaan.",
          "Rangka baja atau space frame harus mengikuti bentang dan bobot material. Semakin besar diameter kubah, semakin serius kebutuhan struktur pendukungnya.",
        ],
      },
      {
        heading: "Pengiriman dan Pemasangan",
        body: [
          "Biaya tidak berhenti pada produksi panel. Pengiriman, akses jalan, ketinggian bangunan, kebutuhan perancah, crane, dan durasi kerja lapangan ikut membentuk penawaran akhir.",
          "Untuk estimasi yang lebih presisi, panitia sebaiknya mengirim foto bangunan, ukuran ring balok, lokasi proyek, dan target jadwal.",
        ],
      },
    ],
  },
  {
    slug: "tips-renovasi-kubah-masjid-lama",
    title: "Tips Renovasi Kubah Masjid Lama",
    category: "Renovasi",
    date: "31 Mei 2026",
    readTime: "4 menit",
    excerpt:
      "Renovasi kubah perlu dimulai dari pemeriksaan rangka, panel lama, titik bocor, dan kondisi dudukan kubah.",
    image: projectBaiturrahmanImage,
    imageAlt: "Kubah masjid untuk panduan renovasi",
    highlights: [
      "Cek kondisi rangka lama sebelum menentukan material baru.",
      "Dokumentasikan titik bocor dan kerusakan panel.",
      "Pastikan bentuk baru sesuai proporsi bangunan.",
    ],
    sections: [
      {
        heading: "Periksa Struktur Lama",
        body: [
          "Renovasi kubah sebaiknya diawali dengan pengecekan rangka, ring balok, sambungan, dan kondisi panel lama. Jika struktur lama masih layak, beberapa bagian bisa dipertahankan.",
          "Jika ditemukan korosi berat, deformasi, atau sambungan yang tidak aman, penguatan atau penggantian rangka perlu masuk dalam rencana pekerjaan.",
        ],
      },
      {
        heading: "Tentukan Lingkup Renovasi",
        body: [
          "Renovasi tidak selalu berarti mengganti seluruh kubah. Ada proyek yang cukup mengganti panel, memperbaiki titik bocor, atau mengubah finishing agar tampilan kembali segar.",
          "Namun untuk kubah yang sudah terlalu tua atau bentuknya tidak sesuai bangunan, penggantian total sering lebih rapi dan lebih mudah dijamin hasilnya.",
        ],
      },
      {
        heading: "Siapkan Data Visual",
        body: [
          "Foto dari beberapa sisi membantu tim membaca bentuk, akses, dan kondisi lapangan. Jika ada gambar kerja lama, data tersebut akan mempercepat estimasi.",
          "Data awal yang jelas membuat rekomendasi material dan metode pemasangan lebih realistis.",
        ],
      },
    ],
  },
  {
    slug: "perbedaan-kubah-enamel-stainless-gold-dan-galvalum",
    title: "Perbedaan Kubah Enamel, Stainless Gold, dan Galvalum",
    category: "Perbandingan",
    date: "31 Mei 2026",
    readTime: "5 menit",
    excerpt:
      "Tiga material populer untuk kubah masjid memiliki karakter tampilan, bobot, biaya, dan perawatan yang berbeda.",
    image: projectAlFalahImage,
    imageAlt: "Kubah masjid stainless gold sebagai referensi perbandingan",
    highlights: [
      "Enamel unggul pada warna dan kesan premium.",
      "Stainless gold unggul pada tampilan elegan.",
      "Galvalum unggul pada bobot ringan dan efisiensi.",
    ],
    sections: [
      {
        heading: "Kubah Enamel",
        body: [
          "Kubah enamel cocok untuk masjid yang ingin tampilan warna kuat, bersih, dan tahan lama. Panel enamel dapat dibuat dengan kombinasi warna dan motif geometris.",
          "Material ini umumnya dipilih untuk kubah utama masjid besar atau proyek yang mengutamakan visual premium.",
        ],
      },
      {
        heading: "Kubah Stainless Gold",
        body: [
          "Stainless gold memberi kesan mewah dengan permukaan metalik warna emas. Material ini efektif untuk kubah utama, kubah kecil, menara, atau aksen fasad.",
          "Karakter pantulannya perlu dipertimbangkan bersama desain bangunan agar hasil terlihat elegan dan tidak berlebihan.",
        ],
      },
      {
        heading: "Kubah Galvalum",
        body: [
          "Galvalum dikenal ringan dan efisien. Pilihan ini sering cocok untuk masjid lingkungan, mushola besar, atau renovasi yang membutuhkan beban struktur lebih rendah.",
          "Dengan finishing yang tepat, galvalum tetap bisa tampil rapi dan menyesuaikan warna bangunan.",
        ],
      },
    ],
  },
];

export function getBlogPostByPath(path: string) {
  const slug = path.replace(/^\/blog\//, "");

  if (!slug || slug === "/blog") {
    return undefined;
  }

  return blogPosts.find((post) => post.slug === slug);
}
