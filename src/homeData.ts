import { productRoutes } from "./siteRoutes";
import projectAlAkbarImage from "./assets/images/project_al_akbar_1780063109705.png";
import projectAlFalahImage from "./assets/images/project_al_falah_1780063147603.png";
import projectBaiturrahmanImage from "./assets/images/project_baiturrahman_1780063165472.png";

export const homeProductTypes = [
  {
    title: "Kubah Masjid Enamel",
    description:
      "CV Beton Agung memproduksi kubah masjid enamel berkualitas tinggi. Terbuat dari plat baja berlapis enamel yang diproses suhu tinggi, kubah ini tahan cuaca dan tidak mudah pudar, cocok untuk masjid dengan warna mencolok dan rapi.",
    image: projectAlAkbarImage,
    imageAlt: "Contoh kubah masjid enamel",
    href: productRoutes[0].path,
    cta: "Detail Enamel",
  },
  {
    title: "Kubah Masjid Galvalum",
    description:
      "Kubah masjid galvalum memakai material ringan namun tetap kuat. Pilihan ini cocok untuk bangunan masjid baru, renovasi, dan proyek yang membutuhkan pemasangan efisien dengan perawatan sederhana.",
    image: projectBaiturrahmanImage,
    imageAlt: "Contoh kubah masjid galvalum",
    href: productRoutes[2].path,
    cta: "Detail Panel Galvalum",
  },
  {
    title: "Kubah Masjid Stainless Gold",
    description:
      "CV Beton Agung juga mengerjakan panel stainless berwarna gold untuk tampilan mewah dan elegan. Material ini memberi kesan premium, tahan korosi, dan sesuai untuk masjid dengan konsep arsitektur modern.",
    image: projectAlFalahImage,
    imageAlt: "Contoh kubah masjid stainless gold",
    href: productRoutes[1].path,
    cta: "Detail Panel Stainless",
  },
];

export const homeDomeModels = [
  {
    name: "Kubah Masjid Bawang",
    description:
      "Profil tinggi dengan lengkung membulat dan puncak tegas untuk tampilan klasik yang megah.",
  },
  {
    name: "Kubah Masjid Setengah Bola",
    description:
      "Bentuk rendah dan simetris, cocok untuk masjid modern yang mengutamakan proporsi bersih.",
  },
  {
    name: "Kubah Masjid Madinah",
    description:
      "Siluet ramping bernuansa Timur Tengah dengan karakter elegan dan mudah dikenali.",
  },
  {
    name: "Kubah Masjid Pinang",
    description:
      "Model lancip memanjang dengan garis vertikal kuat untuk kesan tinggi dan ringan.",
  },
];

export const producerTips = [
  {
    title: "Cek Portfolio Proyek Sebelumnya",
    description:
      "Portfolio membantu melihat kualitas pengerjaan, kerapian finishing, variasi bentuk kubah, dan pengalaman vendor pada ukuran proyek yang mirip dengan kebutuhan Anda.",
  },
  {
    title: "Pilih yang Menyediakan Material Berkualitas",
    description:
      "Material menentukan daya tahan kubah terhadap panas, hujan, korosi, dan perubahan warna. Pastikan spesifikasi bahan dijelaskan sejak awal.",
  },
  {
    title: "Tanyakan Garansi",
    description:
      "Garansi memberi kejelasan tanggung jawab setelah pemasangan, terutama untuk struktur, sambungan panel, kebocoran, dan ketahanan finishing.",
  },
  {
    title: "Cari yang Fleksibel dengan Kebutuhan Custom",
    description:
      "Setiap masjid punya karakter arsitektur berbeda. Produsen yang fleksibel bisa menyesuaikan bentuk, warna, ornamen, dan ukuran sesuai desain bangunan.",
  },
  {
    title: "Pastikan Legalitas dan Reputasi Perusahaan",
    description:
      "Legalitas dan reputasi membantu memastikan proses kerja lebih jelas, komunikasi lebih tertib, dan proyek ditangani oleh tim yang dapat dipertanggungjawabkan.",
  },
];

export const faqItems = [
  {
    question: "Apa itu CV Beton Agung?",
    answer:
      "CV Beton Agung adalah penyedia jasa pembuatan kubah masjid berkualitas tinggi. Kami menyediakan berbagai jenis kubah masjid dengan desain modern, bahan premium, dan daya tahan yang teruji.",
  },
  {
    question: "Apa saja jenis bahan kubah masjid yang tersedia di CV Beton Agung?",
    answer:
      "Pilihan material utama meliputi enamel, stainless gold, galvalum, serta opsi material lain yang dapat disesuaikan dengan kebutuhan desain dan anggaran proyek.",
  },
  {
    question: "Apakah CV Beton Agung melayani pembuatan kubah model custom?",
    answer:
      "Ya. Model kubah dapat dibuat mengikuti referensi desain, bentuk bangunan masjid, ukuran diameter, tinggi kubah, dan karakter visual yang diinginkan.",
  },
  {
    question: "Apakah CV Beton Agung menyediakan jasa pemasangan kubah masjid?",
    answer:
      "Ya. Layanan dapat mencakup produksi, pengiriman, dan pemasangan kubah masjid sesuai kebutuhan proyek dan kondisi lokasi.",
  },
  {
    question: "Apakah ada garansi untuk kubah masjid yang dibuat?",
    answer:
      "Garansi dapat disesuaikan berdasarkan jenis material, spesifikasi rangka, dan lingkup pekerjaan yang disepakati dalam penawaran proyek.",
  },
  {
    question: "Apakah CV Beton Agung melayani pengiriman dan pemasangan di seluruh Indonesia?",
    answer:
      "Ya. Tim dapat melayani proyek lintas daerah dengan koordinasi teknis, estimasi pengiriman, dan jadwal pemasangan yang disesuaikan.",
  },
];
