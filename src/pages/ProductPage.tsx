import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  MessageCircle,
  Ruler,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FloatingActions } from "../components/home/FloatingActions";
import { ButtonLink } from "../components/ui/Button";
import { Container } from "../components/ui/Container";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import type { ProductPageData } from "../productData";

interface ProductPageProps {
  product: ProductPageData;
}

const whatsappBaseUrl = "https://wa.me/6282324547755";

function getWhatsappHref(productTitle: string) {
  return `${whatsappBaseUrl}?text=${encodeURIComponent(
    `Halo CV Beton Agung, saya ingin konsultasi ${productTitle}.`,
  )}`;
}

export default function ProductPage({ product }: ProductPageProps) {
  const whatsappHref = getWhatsappHref(product.title);

  return (
    <div className="min-h-screen bg-[#030a16] font-serif text-[#E2E8F0] selection:bg-[#C5A85C] selection:text-[#030a16]">
      <Header />

      <main>
        <section className="relative overflow-hidden border-b border-[#C5A85C]/15 bg-[#030a16]">
          <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[linear-gradient(90deg,rgba(3,10,22,0),rgba(197,168,92,0.08))] lg:block" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-[#C5A85C]/45" />

          <Container className="relative grid gap-10 py-14 md:py-18 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <span className="font-sans text-[10px] font-black uppercase tracking-widest text-[#C5A85C]">
                {product.eyebrow}
              </span>
              <h1 className="mt-4 max-w-3xl font-serif text-4xl font-black leading-tight tracking-tight text-[#E9D28A] md:text-6xl">
                {product.title}
              </h1>
              <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-[#94A3B8]">
                {product.summary}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="md"
                  iconLeft={<MessageCircle className="h-4 w-4" />}
                >
                  Konsultasi Produk
                </ButtonLink>
                <ButtonLink
                  href="/kontak"
                  variant="outline"
                  size="md"
                  iconRight={<ArrowRight className="h-4 w-4" />}
                >
                  Minta Penawaran
                </ButtonLink>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative overflow-hidden border border-[#C5A85C]/25 bg-[#08152c]/45 shadow-[0_24px_70px_rgba(0,0,0,0.36)]">
                <img
                  src={product.heroImage}
                  alt={product.heroImageAlt}
                  className="aspect-4/3 w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,10,22,0),rgba(3,10,22,0.72))]" />
                <div className="absolute bottom-0 left-0 right-0 grid gap-3 p-5 sm:grid-cols-3">
                  {product.highlights.map((item) => (
                    <div
                      key={item.label}
                      className="border border-[#C5A85C]/22 bg-[#030a16]/82 p-4 backdrop-blur-sm"
                    >
                      <span className="font-sans text-[9px] font-black uppercase tracking-widest text-[#C5A85C]">
                        {item.label}
                      </span>
                      <p className="mt-2 font-sans text-xs font-semibold leading-relaxed text-[#E2E8F0]">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="border-b border-[#C5A85C]/15 bg-[#08152c]/25 py-14 md:py-18">
          <Container>
            <div className="grid gap-8 lg:grid-cols-12">
              <ScrollReveal className="lg:col-span-7">
                <span className="font-sans text-[10px] font-black uppercase tracking-widest text-[#C5A85C]">
                  Detail Material
                </span>
                <h2 className="mt-3 max-w-2xl font-serif text-3xl font-black tracking-tight text-[#E2E8F0] md:text-4xl">
                  Kualitas Material untuk Kubah Masjid yang Tahan Lama
                </h2>
                <p className="mt-5 font-sans text-sm leading-7 text-[#94A3B8] md:text-base">
                  {product.description}
                </p>
              </ScrollReveal>

              <ScrollReveal className="lg:col-span-5" delay={0.08}>
                <div className="border border-[#C5A85C]/22 bg-[#030a16]/58 p-6">
                  <div className="flex items-center gap-3">
                    <Ruler className="h-5 w-5 text-[#C5A85C]" />
                    <h3 className="font-sans text-sm font-black uppercase tracking-widest text-[#E2E8F0]">
                      Cocok untuk
                    </h3>
                  </div>
                  <div className="mt-5 space-y-3">
                    {product.bestFor.map((item) => (
                      <div key={item} className="flex gap-3 font-sans text-sm text-[#94A3B8]">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#C5A85C]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </Container>
        </section>

        <section className="border-b border-[#C5A85C]/15 bg-[#030a16] py-14 md:py-18">
          <Container>
            <div className="mb-9 flex max-w-3xl flex-col gap-3">
              <span className="font-sans text-[10px] font-black uppercase tracking-widest text-[#C5A85C]">
                Keunggulan Produk
              </span>
              <h2 className="font-serif text-3xl font-black tracking-tight text-[#E2E8F0] md:text-4xl">
                Alasan Memilih Kubah {product.shortTitle}
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {product.advantages.map((advantage, index) => {
                const Icon = [Sparkles, ShieldCheck, ClipboardCheck][index] || CheckCircle2;

                return (
                  <ScrollReveal key={advantage.title} delay={index * 0.07}>
                    <article className="h-full border border-[#C5A85C]/18 bg-[#08152c]/42 p-6 transition-colors hover:border-[#C5A85C]/45">
                      <Icon className="h-6 w-6 text-[#C5A85C]" />
                      <h3 className="mt-5 font-serif text-2xl font-black text-[#E9D28A]">
                        {advantage.title}
                      </h3>
                      <p className="mt-3 font-sans text-sm leading-relaxed text-[#94A3B8]">
                        {advantage.description}
                      </p>
                    </article>
                  </ScrollReveal>
                );
              })}
            </div>
          </Container>
        </section>

        <section className="border-b border-[#C5A85C]/15 bg-[#08152c]/25 py-14 md:py-18">
          <Container>
            <div className="grid gap-10 lg:grid-cols-12">
              <ScrollReveal className="lg:col-span-5">
                <span className="font-sans text-[10px] font-black uppercase tracking-widest text-[#C5A85C]">
                  Spesifikasi Umum
                </span>
                <h2 className="mt-3 font-serif text-3xl font-black tracking-tight text-[#E2E8F0] md:text-4xl">
                  Parameter Teknis Bisa Disesuaikan dengan Bangunan
                </h2>
                <p className="mt-5 font-sans text-sm leading-relaxed text-[#94A3B8]">
                  Detail ukuran, model, warna, dan struktur akhir akan mengikuti
                  hasil survey serta kebutuhan desain masjid.
                </p>
              </ScrollReveal>

              <ScrollReveal className="lg:col-span-7" delay={0.08}>
                <div className="grid gap-px overflow-hidden border border-[#C5A85C]/18 bg-[#C5A85C]/18 sm:grid-cols-2">
                  {product.specs.map((spec) => (
                    <div key={spec.label} className="bg-[#030a16] p-5">
                      <span className="font-sans text-[10px] font-black uppercase tracking-widest text-[#C5A85C]">
                        {spec.label}
                      </span>
                      <p className="mt-2 font-sans text-sm font-semibold leading-relaxed text-[#E2E8F0]">
                        {spec.value}
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </Container>
        </section>

        <section className="border-b border-[#C5A85C]/15 bg-[#030a16] py-14 md:py-18">
          <Container>
            <div className="mb-9 max-w-3xl">
              <span className="font-sans text-[10px] font-black uppercase tracking-widest text-[#C5A85C]">
                Alur Pekerjaan
              </span>
              <h2 className="mt-3 font-serif text-3xl font-black tracking-tight text-[#E2E8F0] md:text-4xl">
                Dari Survey sampai Pemasangan Kubah
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {product.process.map((step, index) => (
                <ScrollReveal key={step.title} delay={index * 0.07}>
                  <article className="h-full border border-[#C5A85C]/18 bg-[#08152c]/42 p-6">
                    <span className="font-mono text-sm font-bold text-[#C5A85C]">
                      0{index + 1}
                    </span>
                    <h3 className="mt-4 font-serif text-2xl font-black text-[#E9D28A]">
                      {step.title}
                    </h3>
                    <p className="mt-3 font-sans text-sm leading-relaxed text-[#94A3B8]">
                      {step.description}
                    </p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-[#08152c]/25 py-14 md:py-18">
          <Container>
            <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
              <ScrollReveal className="lg:col-span-5">
                <span className="font-sans text-[10px] font-black uppercase tracking-widest text-[#C5A85C]">
                  Pertanyaan Umum
                </span>
                <h2 className="mt-3 font-serif text-3xl font-black tracking-tight text-[#E2E8F0] md:text-4xl">
                  Konsultasikan Ukuran dan Material Kubah
                </h2>
                <p className="mt-5 font-sans text-sm leading-relaxed text-[#94A3B8]">
                  Kirim detail awal proyek agar tim dapat memberi rekomendasi
                  material, bentuk, dan kisaran kebutuhan pekerjaan.
                </p>
                <ButtonLink
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7"
                  iconLeft={<MessageCircle className="h-4 w-4" />}
                >
                  Chat WhatsApp
                </ButtonLink>
              </ScrollReveal>

              <ScrollReveal className="space-y-4 lg:col-span-7" delay={0.08}>
                {product.faq.map((item) => (
                  <details
                    key={item.question}
                    className="group border border-[#C5A85C]/18 bg-[#030a16]/65 p-5"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-sans text-sm font-bold text-[#E2E8F0]">
                      <span>{item.question}</span>
                      <ArrowRight className="h-4 w-4 shrink-0 text-[#C5A85C] transition-transform group-open:rotate-90" />
                    </summary>
                    <p className="mt-4 font-sans text-sm leading-relaxed text-[#94A3B8]">
                      {item.answer}
                    </p>
                  </details>
                ))}
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
