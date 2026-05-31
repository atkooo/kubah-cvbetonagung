import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  MapPin,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FloatingActions } from "../components/home/FloatingActions";
import { ButtonLink } from "../components/ui/Button";
import { Container } from "../components/ui/Container";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import type { AboutPageData } from "../aboutData";

interface AboutPageProps {
  page: AboutPageData;
}

const whatsappHref = `https://wa.me/6282324547755?text=${encodeURIComponent(
  "Halo CV Beton Agung, saya ingin konsultasi pembuatan kubah masjid.",
)}`;

export default function AboutPage({ page }: AboutPageProps) {
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
                {page.eyebrow}
              </span>
              <h1 className="mt-4 max-w-3xl font-serif text-4xl font-black leading-tight tracking-tight text-[#E9D28A] md:text-6xl">
                {page.title}
              </h1>
              <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-[#94A3B8]">
                {page.summary}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink
                  href="/kontak"
                  size="md"
                  iconRight={<ArrowRight className="h-4 w-4" />}
                >
                  Hubungi Kami
                </ButtonLink>
                <ButtonLink
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="md"
                  iconLeft={<MessageCircle className="h-4 w-4" />}
                >
                  WhatsApp
                </ButtonLink>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative overflow-hidden border border-[#C5A85C]/25 bg-[#08152c]/45 shadow-[0_24px_70px_rgba(0,0,0,0.36)]">
                <img
                  src={page.image}
                  alt={page.imageAlt}
                  className="aspect-4/3 w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,10,22,0.05),rgba(3,10,22,0.78))]" />
                <div className="absolute bottom-0 left-0 right-0 grid gap-3 p-5 sm:grid-cols-3">
                  {page.stats.map((item) => (
                    <div
                      key={`${item.label}-${item.value}`}
                      className="border border-[#C5A85C]/22 bg-[#030a16]/82 p-4 backdrop-blur-sm"
                    >
                      <span className="font-sans text-[9px] font-black uppercase tracking-widest text-[#C5A85C]">
                        {item.label}
                      </span>
                      <strong className="mt-2 block font-serif text-xl font-black text-[#E9D28A]">
                        {item.value}
                      </strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="border-b border-[#C5A85C]/15 bg-[#08152c]/25 py-14 md:py-18">
          <Container>
            <div className="grid gap-5 lg:grid-cols-3">
              {page.sections.map((section, index) => {
                const Icon = [ShieldCheck, ClipboardList, MapPin][index] || CheckCircle2;

                return (
                  <ScrollReveal key={section.title} delay={index * 0.07}>
                    <article className="h-full border border-[#C5A85C]/18 bg-[#030a16]/58 p-6 transition-colors hover:border-[#C5A85C]/45">
                      <Icon className="h-6 w-6 text-[#C5A85C]" />
                      <h2 className="mt-5 font-serif text-2xl font-black text-[#E9D28A]">
                        {section.title}
                      </h2>
                      <p className="mt-3 font-sans text-sm leading-relaxed text-[#94A3B8]">
                        {section.description}
                      </p>
                      <div className="mt-5 space-y-3">
                        {section.points.map((point) => (
                          <div
                            key={point}
                            className="flex gap-3 font-sans text-sm leading-relaxed text-[#E2E8F0]/85"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#C5A85C]" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </article>
                  </ScrollReveal>
                );
              })}
            </div>
          </Container>
        </section>

        {page.timeline && (
          <section className="border-b border-[#C5A85C]/15 bg-[#030a16] py-14 md:py-18">
            <Container>
              <div className="mb-9 max-w-3xl">
                <span className="font-sans text-[10px] font-black uppercase tracking-widest text-[#C5A85C]">
                  Alur Kerja
                </span>
                <h2 className="mt-3 font-serif text-3xl font-black tracking-tight text-[#E2E8F0] md:text-4xl">
                  Tahapan yang Mudah Dipantau Panitia
                </h2>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {page.timeline.map((item, index) => (
                  <ScrollReveal key={item.title} delay={index * 0.06}>
                    <article className="h-full border border-[#C5A85C]/18 bg-[#08152c]/42 p-6">
                      <span className="font-mono text-sm font-bold text-[#C5A85C]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-4 font-serif text-2xl font-black text-[#E9D28A]">
                        {item.title}
                      </h3>
                      <p className="mt-3 font-sans text-sm leading-relaxed text-[#94A3B8]">
                        {item.description}
                      </p>
                    </article>
                  </ScrollReveal>
                ))}
              </div>
            </Container>
          </section>
        )}

        {page.faq && (
          <section className="border-b border-[#C5A85C]/15 bg-[#030a16] py-14 md:py-18">
            <Container>
              <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
                <div className="lg:col-span-5">
                  <span className="font-sans text-[10px] font-black uppercase tracking-widest text-[#C5A85C]">
                    Pertanyaan Umum
                  </span>
                  <h2 className="mt-3 font-serif text-3xl font-black tracking-tight text-[#E2E8F0] md:text-4xl">
                    Informasi Tambahan
                  </h2>
                </div>

                <ScrollReveal className="space-y-4 lg:col-span-7" delay={0.08}>
                  {page.faq.map((item) => (
                    <details
                      key={item.question}
                      className="group border border-[#C5A85C]/18 bg-[#08152c]/42 p-5"
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
        )}

        <section className="bg-[#08152c]/25 py-14 md:py-18">
          <Container>
            <div className="grid gap-8 border border-[#C5A85C]/22 bg-[#030a16]/65 p-6 md:p-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <span className="font-sans text-[10px] font-black uppercase tracking-widest text-[#C5A85C]">
                  Konsultasi Kubah Masjid
                </span>
                <h2 className="mt-3 font-serif text-3xl font-black text-[#E9D28A] md:text-4xl">
                  Siapkan Data Awal Proyek Anda
                </h2>
                <p className="mt-4 max-w-2xl font-sans text-sm leading-relaxed text-[#94A3B8]">
                  Kirim lokasi, diameter, foto bangunan, dan material pilihan.
                  Tim CV Beton Agung akan membantu memberi arahan awal.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:justify-end">
                <ButtonLink href="/kontak" size="md">
                  Form Kontak
                </ButtonLink>
                <ButtonLink
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="md"
                >
                  WhatsApp
                </ButtonLink>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
