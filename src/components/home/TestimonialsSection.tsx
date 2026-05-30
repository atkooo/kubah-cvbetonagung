import { Quote } from "lucide-react";
import { A11y, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";

const testimonials = [
  {
    initials: "HZ",
    name: "H. Ahmad Zahir",
    role: "Panitia Pembangunan, Masjid Jabar",
    quote:
      "Sangat luar biasa melihat pengerjaan kubah enamel baja Masjid Raya. Kombinasi sasis spaceframe ganda dari CV Beton Agung sangat presisi. Warna panel daun hijau toskanya masih berdiri kokoh megah mengilap laksana baru meski diterpa cuaca ekstrem tropis bertahun-tahun.",
  },
  {
    initials: "AH",
    name: "H. Abdul Halim",
    role: "BKM Baitul Makmur, Sumatera",
    quote:
      "Pengerjaan kubah kuningan tempa bakar melayu digarap secara halus oleh tim drafters & pemahat terampil CV Beton Agung. Kalkulator estimasi harga mereka sangat realistis membantu pelaporan budget BKM pembangunan kami. Rekomendasi utama kontraktor kubah masjid!",
  },
  {
    initials: "MS",
    name: "Muhammad Syaiful",
    role: "Takmir Masjid An-Nur, Riau",
    quote:
      "Tim CV Beton Agung rapi sejak survei awal sampai pemasangan. Detail ukuran, pilihan warna enamel, dan jadwal kerja dijelaskan dengan jelas sehingga panitia mudah menyampaikan progres kepada jamaah.",
  },
  {
    initials: "IR",
    name: "Ir. Rahmat Fadli",
    role: "Konsultan Struktur, Kalimantan",
    quote:
      "Koordinasi teknisnya enak diajak kerja. Rangka kubah dibuat presisi, sambungan panel tertata, dan dokumentasi spesifikasi cukup lengkap untuk kebutuhan pengawasan proyek.",
  },
  {
    initials: "NS",
    name: "Nur Sakinah",
    role: "Bendahara Pembangunan, Lombok",
    quote:
      "Estimasi biaya yang diberikan realistis dan tidak bertele-tele. Pilihan material galvalum membantu kami menjaga anggaran tanpa mengorbankan tampilan kubah masjid.",
  },
  {
    initials: "AR",
    name: "Abdul Rauf",
    role: "Ketua DKM Al-Hikmah, Balikpapan",
    quote:
      "Finishing stainless gold terlihat mewah dan pemasangannya bersih. Setelah serah terima, tim tetap responsif saat kami meminta arahan perawatan rutin.",
  },
  {
    initials: "TF",
    name: "Taufik Firmansyah",
    role: "Panitia Renovasi Masjid, Jawa Tengah",
    quote:
      "Renovasi kubah lama berjalan lebih cepat dari perkiraan. Tim lapangan tertib, area kerja dijaga, dan hasil akhir sesuai desain yang kami sepakati.",
  },
  {
    initials: "YM",
    name: "Yusuf Maulana",
    role: "Pengurus Yayasan, Sulawesi Selatan",
    quote:
      "Kami butuh kubah dengan motif khusus. CV Beton Agung bisa menyesuaikan pola panel, warna, dan proporsi kubah sehingga cocok dengan fasad masjid kami.",
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-20 bg-[#030a16] border-b border-[#C5A85C]/15"
    >
      <Container>
        <SectionHeader
          eyebrow="Testimonial Rekanan"
          title="Testimonials"
          compact
          className="mb-12"
        />

        <Swiper
          modules={[Pagination, A11y, Autoplay]}
          spaceBetween={18}
          slidesPerView={1.05}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          a11y={{ paginationBulletMessage: "Buka testimonial {{index}}" }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1180: {
              slidesPerView: 3,
              spaceBetween: 28,
            },
          }}
          className="testimonial-swiper pb-16 font-serif text-xs"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.initials} className="!h-auto">
              <div className="relative flex h-full min-h-[245px] flex-col justify-between overflow-hidden rounded-lg border border-[#C5A85C]/25 bg-[#08152c]/55 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.18)] transition-colors duration-300 hover:border-[#C5A85C]/45 hover:bg-[#08152c]/80">
                <Quote className="absolute right-5 top-5 h-8 w-8 text-[#C5A85C]/10" />
                <span className="absolute left-0 top-0 h-full w-1 bg-[#C5A85C]/45" />

                <p className="relative z-10 pt-2 text-xs font-light italic leading-relaxed text-[#94A3B8]">
                  {testimonial.quote}
                </p>

                <div className="mt-5 flex items-center gap-3 border-t border-[#C5A85C]/15 pt-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#C5A85C]/35 bg-[#C5A85C]/10 font-serif font-black text-[#C5A85C] shadow-[0_0_10px_rgba(197,168,92,0.1)]">
                    {testimonial.initials}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-bold text-[#E2E8F0]">
                      {testimonial.name}
                    </h4>
                    <p className="mt-1 font-sans text-[9px] font-bold uppercase tracking-wider text-[#C5A85C]">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}
