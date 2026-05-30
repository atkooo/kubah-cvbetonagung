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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-serif text-xs">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.initials}
              className="border border-[#C5A85C]/25 bg-[#08152c]/55 p-8 relative flex flex-col justify-between rounded-xl shadow-[0_0_20px_rgba(197,168,92,0.03)]"
            >
              <span className="font-serif text-6xl text-[#C5A85C]/10 absolute top-2 left-4 pointer-events-none">
                “
              </span>
              <p className="text-[#94A3B8] leading-relaxed italic relative z-10 pt-4 text-xs font-light">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-3.5 mt-6 border-t border-[#C5A85C]/15 pt-4">
                <div className="h-9 w-9 bg-[#C5A85C]/10 text-[#C5A85C] font-serif font-black flex items-center justify-center border border-[#C5A85C]/35 rounded-full shadow-[0_0_10px_rgba(197,168,92,0.1)]">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-serif font-bold text-[#E2E8F0] text-xs">
                    {testimonial.name}
                  </h4>
                  <p className="font-sans text-[9px] tracking-wider text-[#C5A85C] uppercase font-bold">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
