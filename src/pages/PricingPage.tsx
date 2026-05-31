import {
  ArrowRight,
  Calculator,
  CheckCircle2,
  ClipboardList,
  MessageCircle,
  Ruler,
  Truck,
} from "lucide-react";
import CostCalculator from "../components/CostCalculator";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FloatingActions } from "../components/home/FloatingActions";
import { ButtonLink } from "../components/ui/Button";
import { Container } from "../components/ui/Container";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import { MATERIAL_SPECS } from "../data";

const whatsappHref = `https://wa.me/6282324547755?text=${encodeURIComponent(
  "Halo CV Beton Agung, saya ingin konsultasi harga kubah masjid.",
)}`;

const costFactors = [
  {
    title: "Diameter dan Tinggi Kubah",
    description:
      "Semakin besar diameter dan tinggi kubah, semakin luas kebutuhan panel, rangka, serta waktu produksi.",
    icon: Ruler,
  },
  {
    title: "Material Finishing",
    description:
      "Enamel, stainless gold, galvalum, kuningan, dan tembaga memiliki karakter biaya serta metode pengerjaan berbeda.",
    icon: ClipboardList,
  },
  {
    title: "Rangka dan Pemasangan",
    description:
      "Kebutuhan rangka, akses lokasi, metode angkat, pengiriman, dan pemasangan ikut membentuk total penawaran.",
    icon: Truck,
  },
];

const pricingSteps = [
  "Kirim ukuran diameter, tinggi perkiraan, dan lokasi proyek.",
  "Pilih material awal atau kirim referensi kubah yang diinginkan.",
  "Gunakan estimator untuk melihat gambaran anggaran kasar.",
  "Tim menyusun rekomendasi teknis dan penawaran setelah data cukup.",
];

function formatIDR(value: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#030a16] font-serif text-[#E2E8F0] selection:bg-[#C5A85C] selection:text-[#030a16]">
      <Header />

      <main>
        <section className="relative overflow-hidden border-b border-[#C5A85C]/15 bg-[#030a16]">
          <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[linear-gradient(90deg,rgba(3,10,22,0),rgba(197,168,92,0.08))] lg:block" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-[#C5A85C]/45" />

          <Container className="relative grid gap-10 py-14 md:py-18 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <span className="font-sans text-[10px] font-black uppercase tracking-widest text-[#C5A85C]">
                Harga Kubah Masjid
              </span>
              <h1 className="mt-4 max-w-3xl font-serif text-4xl font-black leading-tight tracking-tight text-[#E9D28A] md:text-6xl">
                Estimasi Biaya Pembuatan Kubah Masjid
              </h1>
              <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-[#94A3B8]">
                Gunakan halaman ini untuk memahami faktor harga dan membuat
                simulasi awal berdasarkan bentuk, diameter, material, rangka,
                serta kebutuhan pemasangan.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink
                  href="#estimator-harga"
                  size="md"
                  iconLeft={<Calculator className="h-4 w-4" />}
                >
                  Buka Estimator
                </ButtonLink>
                <ButtonLink
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="md"
                  iconLeft={<MessageCircle className="h-4 w-4" />}
                >
                  Tanya Harga
                </ButtonLink>
              </div>
            </div>

            <div className="grid gap-3 font-sans text-sm sm:grid-cols-3 lg:col-span-5 lg:grid-cols-1">
              {pricingSteps.slice(0, 3).map((step, index) => (
                <div
                  key={step}
                  className="border border-[#C5A85C]/18 bg-[#08152c]/45 p-5"
                >
                  <span className="font-mono text-xs font-bold text-[#C5A85C]">
                    0{index + 1}
                  </span>
                  <p className="mt-3 leading-relaxed text-[#E2E8F0]/85">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="border-b border-[#C5A85C]/15 bg-[#08152c]/25 py-14 md:py-18">
          <Container>
            <div className="mb-9 max-w-3xl">
              <span className="font-sans text-[10px] font-black uppercase tracking-widest text-[#C5A85C]">
                Faktor Harga
              </span>
              <h2 className="mt-3 font-serif text-3xl font-black tracking-tight text-[#E2E8F0] md:text-4xl">
                Harga Final Mengikuti Spesifikasi Proyek
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {costFactors.map(({ title, description, icon: Icon }, index) => (
                <ScrollReveal key={title} delay={index * 0.07}>
                  <article className="h-full border border-[#C5A85C]/18 bg-[#030a16]/58 p-6 transition-colors hover:border-[#C5A85C]/45">
                    <Icon className="h-6 w-6 text-[#C5A85C]" />
                    <h3 className="mt-5 font-serif text-2xl font-black text-[#E9D28A]">
                      {title}
                    </h3>
                    <p className="mt-3 font-sans text-sm leading-relaxed text-[#94A3B8]">
                      {description}
                    </p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </Container>
        </section>

        <section className="border-b border-[#C5A85C]/15 bg-[#030a16] py-14 md:py-18">
          <Container>
            <div className="grid gap-10 lg:grid-cols-12">
              <ScrollReveal className="lg:col-span-5">
                <span className="font-sans text-[10px] font-black uppercase tracking-widest text-[#C5A85C]">
                  Range Material
                </span>
                <h2 className="mt-3 font-serif text-3xl font-black tracking-tight text-[#E2E8F0] md:text-4xl">
                  Acuan Harga Panel per Meter Persegi
                </h2>
                <p className="mt-5 font-sans text-sm leading-relaxed text-[#94A3B8]">
                  Angka berikut adalah acuan dari estimator internal untuk
                  membantu membaca perbedaan karakter biaya tiap material.
                  Penawaran resmi tetap mengikuti survey dan spesifikasi final.
                </p>
              </ScrollReveal>

              <ScrollReveal className="lg:col-span-7" delay={0.08}>
                <div className="grid gap-px overflow-hidden border border-[#C5A85C]/18 bg-[#C5A85C]/18 sm:grid-cols-2">
                  {Object.entries(MATERIAL_SPECS).map(([key, material]) => (
                    <div key={key} className="bg-[#08152c]/52 p-5">
                      <span className="font-sans text-[10px] font-black uppercase tracking-widest text-[#C5A85C]">
                        {material.label.split(" (")[0]}
                      </span>
                      <strong className="mt-2 block font-serif text-xl font-black text-[#E9D28A]">
                        {formatIDR(material.costPerSqmMin)} -{" "}
                        {formatIDR(material.costPerSqmMax)}
                      </strong>
                      <p className="mt-3 font-sans text-xs leading-relaxed text-[#94A3B8]">
                        {material.description}
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </Container>
        </section>

        <section
          id="estimator-harga"
          className="border-b border-[#C5A85C]/15 bg-[#08152c]/25 py-14 md:py-18"
        >
          <Container>
            <div className="mb-9 grid gap-6 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <span className="font-sans text-[10px] font-black uppercase tracking-widest text-[#C5A85C]">
                  Estimator Interaktif
                </span>
                <h2 className="mt-3 max-w-2xl font-serif text-3xl font-black tracking-tight text-[#E2E8F0] md:text-4xl">
                  Simulasikan Ukuran, Material, dan Kebutuhan Pemasangan
                </h2>
              </div>
              <p className="font-sans text-sm leading-relaxed text-[#94A3B8] lg:col-span-5">
                Hasil estimator adalah gambaran awal untuk diskusi. Untuk
                penawaran yang dapat dipakai sebagai dasar keputusan proyek,
                tim tetap perlu mengecek data teknis dan kondisi lokasi.
              </p>
            </div>

            <CostCalculator />
          </Container>
        </section>

        <section className="bg-[#030a16] py-14 md:py-18">
          <Container>
            <div className="grid gap-8 lg:grid-cols-12">
              <ScrollReveal className="lg:col-span-5">
                <span className="font-sans text-[10px] font-black uppercase tracking-widest text-[#C5A85C]">
                  Cara Mendapat Penawaran
                </span>
                <h2 className="mt-3 font-serif text-3xl font-black tracking-tight text-[#E2E8F0] md:text-4xl">
                  Kirim Data Awal agar Estimasi Lebih Akurat
                </h2>
              </ScrollReveal>

              <ScrollReveal className="lg:col-span-7" delay={0.08}>
                <div className="space-y-3">
                  {pricingSteps.map((step, index) => (
                    <div
                      key={step}
                      className="flex gap-4 border border-[#C5A85C]/18 bg-[#08152c]/42 p-5 font-sans text-sm leading-relaxed text-[#E2E8F0]/85"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#C5A85C]" />
                      <div>
                        <span className="block text-[10px] font-black uppercase tracking-widest text-[#C5A85C]">
                          Langkah {index + 1}
                        </span>
                        <p className="mt-1">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href="/kontak" size="md">
                    Form Konsultasi
                  </ButtonLink>
                  <ButtonLink
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    size="md"
                    iconRight={<ArrowRight className="h-4 w-4" />}
                  >
                    Chat WhatsApp
                  </ButtonLink>
                </div>
              </ScrollReveal>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
