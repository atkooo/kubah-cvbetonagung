import { Award, Clock, ShieldCheck, Users } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";

const reasons = [
  {
    icon: Users,
    title: "Kepercayaan",
    description:
      "Dipercaya oleh dewan panitia masjid raya perkotaan besar & dinas pekerjaan umum nusantara untuk rekayasa sasis tumpuan kubah.",
  },
  {
    icon: Award,
    title: "Kualitas Tak Tertandingi",
    description:
      "Menggunakan las ganda berstandar ASTM dan pelat panel enamel bersertifikat yang di-oven suhu 800 derajat celcius secara presisi.",
  },
  {
    icon: Clock,
    title: "Kecepatan & Presisi",
    description:
      "Visualisasi pra-desain CAD 3D yang cepat serta fabrikasi pabrik segmental sasis presisi tinggi menggunakan CNC plasma cutter.",
  },
  {
    icon: ShieldCheck,
    title: "Garansi Jangka Panjang",
    description:
      "Kami memberikan penjaminan sasis sasis baja ganda kami hingga 20 tahun serta sertifikasi pudar panel antikaratan double layer.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section
      id="why-choose-us"
      className="py-20 border-b border-[#C5A85C]/15 bg-[#030a16]"
    >
      <Container>
        <SectionHeader
          eyebrow="Rasi Komitmen Keunggulan"
          title="Why Choose Us"
          description="Keunggulan manufaktur segmental sasis, pengerjaan las ganda standar ASTM, serta komitmen proteksi jangka panjang."
          className="max-w-xl"
        />

        <div className="border border-[#C5A85C]/30 bg-[#08152c]/55 p-8 rounded-xl shadow-[0_0_25px_rgba(197,168,92,0.03)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 font-sans text-xs">
            {reasons.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex flex-col items-center text-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#C5A85C]/10 border border-[#C5A85C]/35 text-[#C5A85C] shadow-[0_0_15px_rgba(197,168,92,0.1)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="font-serif font-bold text-sm text-[#E2E8F0]">
                  {title}
                </h4>
                <p className="text-[#94A3B8] leading-relaxed text-[11px] font-light">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
