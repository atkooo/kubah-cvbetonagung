import projectAlAkbarImage from "./assets/images/project_al_akbar_1780063109705.png";
import projectAlFalahImage from "./assets/images/project_al_falah_1780063147603.png";
import projectAlJabbarImage from "./assets/images/project_al_jabbar_1780063127068.png";
import projectBaiturrahmanImage from "./assets/images/project_baiturrahman_1780063165472.png";

export interface AboutPageData {
  path: string;
  eyebrow: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  stats: {
    label: string;
    value: string;
  }[];
  sections: {
    title: string;
    description: string;
    points: string[];
  }[];
  timeline?: {
    title: string;
    description: string;
  }[];
  faq?: {
    question: string;
    answer: string;
  }[];
}

export const aboutPages: AboutPageData[] = [
  {
    path: "/tentang/profil-cv-beton-agung",
    eyebrow: "Profil Perusahaan",
    title: "CV Beton Agung",
    summary:
      "CV Beton Agung adalah penyedia jasa pembuatan kubah masjid yang berfokus pada kualitas material, kerapian finishing, dan komunikasi proyek yang jelas sejak konsultasi awal.",
    image: projectAlAkbarImage,
    imageAlt: "Referensi kubah masjid karya CV Beton Agung",
    stats: [
      { label: "Fokus Layanan", value: "Kubah Masjid" },
      { label: "Lingkup Kerja", value: "Produksi & Pasang" },
      { label: "Area", value: "Lintas Daerah" },
    ],
    sections: [
      {
        title: "Spesialis Kubah Masjid",
        description:
          "Tim menangani kebutuhan kubah utama, kubah menara, renovasi kubah lama, dan pekerjaan panel dengan pilihan material yang disesuaikan pada desain serta anggaran.",
        points: [
          "Kubah enamel, stainless gold, galvalum, dan material custom",
          "Desain bentuk mengikuti arsitektur masjid",
          "Pengerjaan dapat mencakup rangka, panel, pengiriman, dan pemasangan",
        ],
      },
      {
        title: "Cara Kerja",
        description:
          "Setiap proyek dimulai dari pemahaman kebutuhan bangunan, ukuran, kondisi lokasi, dan target visual agar rekomendasi material tidak sekadar menarik, tetapi juga masuk akal secara teknis.",
        points: [
          "Konsultasi kebutuhan dan ukuran awal",
          "Rekomendasi material berdasarkan lokasi dan budget",
          "Koordinasi teknis sebelum produksi dan pemasangan",
        ],
      },
      {
        title: "Komitmen Kualitas",
        description:
          "CV Beton Agung menekankan sambungan panel yang rapi, struktur yang sesuai kebutuhan bentang, dan finishing yang siap menghadapi iklim tropis.",
        points: [
          "Kontrol kerapian panel dan detail sambungan",
          "Pemilihan rangka sesuai diameter dan model kubah",
          "Arahan perawatan setelah serah terima",
        ],
      },
    ],
    timeline: [
      {
        title: "Konsultasi",
        description:
          "Panitia menyampaikan lokasi, ukuran, material pilihan, dan referensi bentuk kubah.",
      },
      {
        title: "Rekomendasi Teknis",
        description:
          "Tim memberi arahan material, model, pembagian panel, dan estimasi awal pekerjaan.",
      },
      {
        title: "Produksi dan Pemasangan",
        description:
          "Pekerjaan dilanjutkan setelah spesifikasi, jadwal, dan lingkup kerja disepakati.",
      },
    ],
  },
  {
    path: "/tentang/garansi",
    eyebrow: "Garansi Pekerjaan",
    title: "Garansi Kubah Masjid",
    summary:
      "Garansi diberikan untuk membantu panitia mendapatkan kejelasan tanggung jawab pekerjaan setelah serah terima, terutama pada struktur, panel, sambungan, dan finishing sesuai spesifikasi proyek.",
    image: projectAlJabbarImage,
    imageAlt: "Detail panel kubah masjid untuk informasi garansi",
    stats: [
      { label: "Cakupan", value: "Struktur" },
      { label: "Cakupan", value: "Panel" },
      { label: "Cakupan", value: "Finishing" },
    ],
    sections: [
      {
        title: "Cakupan Garansi",
        description:
          "Detail garansi disesuaikan dengan material, ukuran kubah, kondisi struktur bangunan, dan lingkup pekerjaan yang disepakati dalam penawaran.",
        points: [
          "Pemeriksaan sambungan panel dan titik rawan bocor",
          "Evaluasi struktur rangka sesuai spesifikasi pekerjaan",
          "Arahan perawatan finishing berdasarkan material",
        ],
      },
      {
        title: "Kondisi yang Perlu Diperhatikan",
        description:
          "Garansi bekerja paling baik ketika penggunaan bangunan dan perawatan mengikuti rekomendasi teknis yang diberikan setelah pemasangan.",
        points: [
          "Kerusakan akibat perubahan struktur bangunan perlu dicek ulang",
          "Benturan, pembongkaran pihak lain, atau modifikasi tanpa koordinasi tidak termasuk cakupan umum",
          "Lingkungan pesisir atau area ekstrem membutuhkan perawatan lebih rutin",
        ],
      },
      {
        title: "Proses Klaim",
        description:
          "Panitia dapat mengirim dokumentasi foto, video, lokasi titik masalah, dan nomor proyek agar tim dapat melakukan pengecekan awal.",
        points: [
          "Kirim bukti visual dan keterangan lokasi",
          "Tim mengevaluasi penyebab dan cakupan pekerjaan",
          "Jika diperlukan, jadwal pemeriksaan lapangan akan disusun",
        ],
      },
    ],
    faq: [
      {
        question: "Apakah semua material mendapat garansi yang sama?",
        answer:
          "Durasi dan cakupan garansi dapat berbeda karena karakter enamel, stainless gold, dan galvalum tidak sama.",
      },
      {
        question: "Apakah garansi mencakup kebocoran?",
        answer:
          "Cakupan kebocoran bergantung pada sumber masalah dan lingkup pekerjaan yang disepakati sejak awal.",
      },
    ],
  },
  {
    path: "/tentang/testimoni",
    eyebrow: "Testimoni Rekanan",
    title: "Pengalaman Panitia dan Mitra Proyek",
    summary:
      "Masukan dari panitia pembangunan, takmir, konsultan, dan pengurus yayasan menjadi acuan untuk menjaga kualitas komunikasi, ketepatan spesifikasi, dan kerapian hasil akhir.",
    image: projectAlFalahImage,
    imageAlt: "Kubah masjid stainless gold sebagai referensi testimoni",
    stats: [
      { label: "Respon", value: "Cepat" },
      { label: "Koordinasi", value: "Jelas" },
      { label: "Finishing", value: "Rapi" },
    ],
    sections: [
      {
        title: "Dipercaya Panitia Pembangunan",
        description:
          "Banyak keputusan proyek kubah melibatkan panitia, pengurus masjid, dan donatur. Karena itu komunikasi teknis dibuat mudah dipahami tanpa menghilangkan detail penting.",
        points: [
          "Estimasi dan spesifikasi dijelaskan sejak awal",
          "Pilihan material disesuaikan dengan kebutuhan bangunan",
          "Dokumentasi proyek membantu pelaporan ke panitia",
        ],
      },
      {
        title: "Masukan dari Lapangan",
        description:
          "Setiap proyek memberi pembelajaran tentang akses lokasi, pola koordinasi, cuaca, dan detail pemasangan yang perlu dijaga.",
        points: [
          "Tim lapangan menjaga area kerja tetap tertib",
          "Pemasangan dilakukan dengan kontrol sambungan",
          "Perawatan setelah pemasangan tetap dikomunikasikan",
        ],
      },
      {
        title: "Kutipan Testimoni",
        description:
          "Berikut ringkasan pengalaman yang sering disampaikan rekanan setelah proses pengerjaan selesai.",
        points: [
          "Warna dan finishing sesuai desain yang disepakati",
          "Rangka dan panel terasa presisi saat diperiksa",
          "Tim responsif ketika diminta arahan teknis lanjutan",
        ],
      },
    ],
  },
  {
    path: "/tentang/area-jangkauan",
    eyebrow: "Area Layanan",
    title: "Jangkauan Produksi dan Pemasangan",
    summary:
      "CV Beton Agung melayani konsultasi, produksi, pengiriman, dan pemasangan kubah masjid lintas daerah dengan penyesuaian jadwal, akses lokasi, dan kebutuhan mobilisasi.",
    image: projectBaiturrahmanImage,
    imageAlt: "Kubah masjid untuk layanan area jangkauan",
    stats: [
      { label: "Layanan", value: "Nasional" },
      { label: "Koordinasi", value: "Jarak Jauh" },
      { label: "Survey", value: "Terjadwal" },
    ],
    sections: [
      {
        title: "Layanan Lintas Daerah",
        description:
          "Kebutuhan proyek dapat dikoordinasikan dari awal melalui WhatsApp, telepon, atau email sebelum tim menyusun jadwal survey dan rencana pekerjaan.",
        points: [
          "Kalimantan, Jawa, Sumatera, Sulawesi, Bali, Nusa Tenggara, dan wilayah lain",
          "Koordinasi teknis dapat dimulai dari gambar dan ukuran awal",
          "Pengiriman panel disesuaikan dengan akses lokasi",
        ],
      },
      {
        title: "Data Awal yang Dibutuhkan",
        description:
          "Semakin jelas data awal yang dikirim, semakin cepat tim membaca kebutuhan proyek dan memberi rekomendasi awal.",
        points: [
          "Lokasi lengkap masjid atau titik Google Maps",
          "Diameter ring balok dan perkiraan tinggi kubah",
          "Foto bangunan, gambar kerja, atau referensi desain",
        ],
      },
      {
        title: "Mobilisasi Lapangan",
        description:
          "Akses jalan, ketinggian bangunan, kebutuhan perancah, dan kondisi cuaca menjadi bagian dari perencanaan pemasangan.",
        points: [
          "Survey membantu menentukan metode angkat dan pemasangan",
          "Material dikemas untuk memudahkan distribusi ke lokasi",
          "Jadwal kerja disusun mengikuti kesiapan bangunan",
        ],
      },
    ],
  },
  {
    path: "/tentang/cara-pesan",
    eyebrow: "Cara Pesan",
    title: "Alur Pemesanan Kubah Masjid",
    summary:
      "Proses pemesanan dibuat bertahap agar panitia mendapatkan gambaran material, desain, estimasi, jadwal, dan lingkup pekerjaan sebelum produksi dimulai.",
    image: projectAlAkbarImage,
    imageAlt: "Kubah masjid enamel untuk panduan cara pesan",
    stats: [
      { label: "Langkah", value: "01" },
      { label: "Survey", value: "Opsional" },
      { label: "Produksi", value: "Terjadwal" },
    ],
    sections: [
      {
        title: "Hubungi Tim",
        description:
          "Mulai dari konsultasi singkat melalui WhatsApp atau form kontak. Sampaikan lokasi proyek, ukuran awal, material incaran, dan referensi visual.",
        points: [
          "Nama panitia atau pengurus yang bisa dihubungi",
          "Lokasi proyek dan target waktu pengerjaan",
          "Pilihan material atau contoh kubah yang diinginkan",
        ],
      },
      {
        title: "Konsultasi dan Estimasi",
        description:
          "Tim meninjau kebutuhan teknis dan memberi rekomendasi awal terkait material, model kubah, struktur, serta kisaran pekerjaan.",
        points: [
          "Diameter, tinggi, dan bentuk kubah dibahas bersama",
          "Rekomendasi material disesuaikan dengan budget",
          "Estimasi dibuat berdasarkan lingkup pekerjaan",
        ],
      },
      {
        title: "Kesepakatan dan Produksi",
        description:
          "Setelah spesifikasi disepakati, pekerjaan masuk ke tahap produksi panel, rangka, pengiriman, dan pemasangan sesuai jadwal.",
        points: [
          "Detail warna, motif, dan bentuk dikunci sebelum produksi",
          "Jadwal pengiriman disesuaikan dengan kesiapan bangunan",
          "Serah terima dilakukan setelah pengecekan akhir",
        ],
      },
    ],
    timeline: [
      {
        title: "Kirim Detail",
        description:
          "Panitia mengirim ukuran, lokasi, foto bangunan, dan material pilihan.",
      },
      {
        title: "Terima Rekomendasi",
        description:
          "Tim memberi masukan teknis dan estimasi awal berdasarkan data proyek.",
      },
      {
        title: "Mulai Produksi",
        description:
          "Produksi dimulai setelah spesifikasi, pembayaran, dan jadwal disepakati.",
      },
      {
        title: "Pemasangan",
        description:
          "Tim memasang rangka dan panel sesuai metode kerja di lokasi.",
      },
    ],
  },
  {
    path: "/blog",
    eyebrow: "Blog CV Beton Agung",
    title: "Panduan Memilih Kubah Masjid",
    summary:
      "Kumpulan artikel ringkas untuk membantu panitia memahami material, model, estimasi, dan perawatan kubah masjid sebelum mengambil keputusan proyek.",
    image: projectAlJabbarImage,
    imageAlt: "Referensi blog kubah masjid",
    stats: [
      { label: "Topik", value: "Material" },
      { label: "Topik", value: "Desain" },
      { label: "Topik", value: "Biaya" },
    ],
    sections: [
      {
        title: "Cara Memilih Material Kubah Masjid",
        description:
          "Material menentukan bobot, daya tahan, tampilan, dan kebutuhan perawatan. Enamel cocok untuk warna kuat, stainless gold untuk tampilan mewah, dan galvalum untuk solusi ringan yang efisien.",
        points: [
          "Pilih enamel untuk warna cerah dan tampilan premium",
          "Pilih stainless gold untuk aksen elegan",
          "Pilih galvalum untuk proyek yang butuh bobot ringan",
        ],
      },
      {
        title: "Hal yang Mempengaruhi Harga Kubah",
        description:
          "Harga tidak hanya ditentukan diameter. Bentuk, tinggi, material, rangka, akses lokasi, dan kebutuhan pemasangan juga memengaruhi nilai pekerjaan.",
        points: [
          "Diameter dan tinggi menentukan luas panel",
          "Material dan finishing memengaruhi biaya produksi",
          "Akses lokasi memengaruhi biaya mobilisasi",
        ],
      },
      {
        title: "Tips Renovasi Kubah Lama",
        description:
          "Renovasi perlu diawali pemeriksaan struktur lama, titik bocor, kondisi panel, dan kesesuaian bentuk baru dengan bangunan masjid.",
        points: [
          "Dokumentasikan kondisi kubah lama dari beberapa sisi",
          "Cek dudukan kubah dan ring balok",
          "Tentukan apakah rangka lama masih layak dipakai",
        ],
      },
    ],
    faq: [
      {
        question: "Apakah blog ini akan dibuat menjadi artikel terpisah?",
        answer:
          "Struktur saat ini sudah siap dikembangkan menjadi halaman artikel detail untuk kebutuhan SEO berikutnya.",
      },
      {
        question: "Apa topik berikutnya yang paling penting?",
        answer:
          "Topik harga, perbandingan material, dan cara menghitung diameter kubah biasanya paling dicari panitia pembangunan.",
      },
    ],
  },
];

export function getAboutPageByPath(path: string) {
  return aboutPages.find((page) => page.path === path);
}
