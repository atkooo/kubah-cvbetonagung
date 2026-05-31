import { FormEvent } from "react";
import {
  ArrowRight,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FloatingActions } from "../components/home/FloatingActions";
import { Button, ButtonLink } from "../components/ui/Button";
import { Container } from "../components/ui/Container";
import { ScrollReveal } from "../components/ui/ScrollReveal";

const whatsappBaseUrl = "https://wa.me/6282324547755";
const phoneDisplay = "0823-2454-7755";
const email = "contact@cvbetonagung.com";
const address =
  "Jl. Lintas Kalimantan Poros Tengah, KM. 07, Sungai Ukoi, Kec. Sintang, Kabupaten Sintang, Kalimantan Barat 78661";
const googleMapsEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.817861037238!2d111.45600847475643!3d0.027492364399217428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31fe1fc45b29279d%3A0xf960aac0a31c0369!2sCV.%20beton%20agung!5e0!3m2!1sid!2sid!4v1780159269689!5m2!1sid!2sid";

const contactMethods = [
  {
    label: "WhatsApp",
    value: phoneDisplay,
    href: `${whatsappBaseUrl}?text=${encodeURIComponent(
      "Halo CV Beton Agung, saya ingin konsultasi kubah masjid.",
    )}`,
    icon: MessageCircle,
    cta: "Mulai Chat",
  },
  {
    label: "Telepon",
    value: phoneDisplay,
    href: "tel:+6282324547755",
    icon: Phone,
    cta: "Hubungi",
  },
  {
    label: "Email",
    value: email,
    href: `mailto:${email}`,
    icon: Mail,
    cta: "Kirim Email",
  },
];

function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const name = String(formData.get("name") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const location = String(formData.get("location") || "").trim();
  const diameter = String(formData.get("diameter") || "").trim();
  const material = String(formData.get("material") || "").trim();
  const message = String(formData.get("message") || "").trim();

  const whatsappMessage = [
    "Halo CV Beton Agung, saya ingin konsultasi pembuatan kubah masjid.",
    name && `Nama: ${name}`,
    phone && `No. HP: ${phone}`,
    location && `Lokasi proyek: ${location}`,
    diameter && `Perkiraan diameter: ${diameter}`,
    material && `Material pilihan: ${material}`,
    message && `Catatan: ${message}`,
  ]
    .filter(Boolean)
    .join("\n");

  window.open(
    `${whatsappBaseUrl}?text=${encodeURIComponent(whatsappMessage)}`,
    "_blank",
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#030a16] font-serif text-[#E2E8F0] selection:bg-[#C5A85C] selection:text-[#030a16]">
      <Header />

      <main>
        <section className="relative overflow-hidden border-b border-[#C5A85C]/15 bg-[#030a16] py-16 md:py-20">
          <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[linear-gradient(90deg,rgba(3,10,22,0),rgba(197,168,92,0.08))] lg:block" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-[#C5A85C]/45" />

          <Container className="relative">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <span className="font-sans text-[10px] font-black uppercase tracking-widest text-[#C5A85C]">
                  Kontak CV Beton Agung
                </span>
                <h1 className="mt-4 max-w-3xl font-serif text-4xl font-black leading-tight tracking-tight text-[#E9D28A] md:text-5xl">
                  Konsultasi Kubah Masjid untuk Proyek Anda
                </h1>
                <p className="mt-5 max-w-2xl font-sans text-sm leading-relaxed text-[#94A3B8] md:text-base">
                  Sampaikan ukuran, lokasi, pilihan material, dan kebutuhan
                  pemasangan. Tim kami akan membantu memberi arahan awal untuk
                  desain, spesifikasi, dan estimasi pekerjaan.
                </p>
              </div>

              <div className="grid gap-3 font-sans text-sm sm:grid-cols-2 lg:col-span-5">
                <div className="border border-[#C5A85C]/20 bg-[#08152c]/45 p-5">
                  <Clock className="h-5 w-5 text-[#C5A85C]" />
                  <span className="mt-4 block text-[10px] font-black uppercase tracking-widest text-[#C5A85C]">
                    Jam Layanan
                  </span>
                  <p className="mt-2 text-[#E2E8F0]/85">
                    Senin - Sabtu, 08.00 - 17.00 WIB
                  </p>
                </div>
                <div className="border border-[#C5A85C]/20 bg-[#08152c]/45 p-5">
                  <MapPin className="h-5 w-5 text-[#C5A85C]" />
                  <span className="mt-4 block text-[10px] font-black uppercase tracking-widest text-[#C5A85C]">
                    Area Layanan
                  </span>
                  <p className="mt-2 text-[#E2E8F0]/85">
                    Melayani produksi dan pemasangan lintas daerah.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="border-b border-[#C5A85C]/15 bg-[#08152c]/25 py-12">
          <Container>
            <div className="grid gap-4 md:grid-cols-3">
              {contactMethods.map(({ label, value, href, icon: Icon, cta }) => (
                <a
                  key={label}
                  href={href}
                  target={label === "WhatsApp" ? "_blank" : undefined}
                  rel={label === "WhatsApp" ? "noopener noreferrer" : undefined}
                  className="group flex min-h-34 flex-col justify-between border border-[#C5A85C]/18 bg-[#030a16]/55 p-5 font-sans transition-colors hover:border-[#C5A85C]/55"
                >
                  <div className="flex items-start justify-between gap-4">
                    <Icon className="h-5 w-5 text-[#C5A85C]" />
                    <ArrowRight className="h-4 w-4 text-[#C5A85C]/60 transition-transform group-hover:translate-x-1" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#C5A85C]">
                      {label}
                    </span>
                    <p className="mt-2 break-words text-sm font-semibold text-[#E2E8F0]">
                      {value}
                    </p>
                    <span className="mt-3 inline-block text-[10px] font-bold uppercase tracking-widest text-[#94A3B8]">
                      {cta}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </Container>
        </section>

        <section className="border-b border-[#C5A85C]/15 bg-[#030a16] py-16 md:py-20">
          <Container>
            <div className="grid gap-8 lg:grid-cols-12">
              <ScrollReveal className="lg:col-span-5">
                <div className="border border-[#C5A85C]/22 bg-[#08152c]/45 p-6 md:p-8">
                  <span className="font-sans text-[10px] font-black uppercase tracking-widest text-[#C5A85C]">
                    Alamat Kantor
                  </span>
                  <h2 className="mt-4 font-serif text-3xl font-black text-[#E9D28A]">
                    CV Beton Agung
                  </h2>
                  <p className="mt-4 font-sans text-sm leading-relaxed text-[#94A3B8]">
                    {address}
                  </p>

                  <div className="mt-8 space-y-4 font-sans text-sm">
                    <a
                      href="tel:+6282324547755"
                      className="flex items-center gap-3 border border-[#C5A85C]/15 bg-[#030a16]/45 p-4 transition-colors hover:border-[#C5A85C]/45"
                    >
                      <Phone className="h-5 w-5 shrink-0 text-[#C5A85C]" />
                      <span>{phoneDisplay}</span>
                    </a>
                    <a
                      href={`mailto:${email}`}
                      className="flex items-center gap-3 border border-[#C5A85C]/15 bg-[#030a16]/45 p-4 transition-colors hover:border-[#C5A85C]/45"
                    >
                      <Mail className="h-5 w-5 shrink-0 text-[#C5A85C]" />
                      <span className="break-all">{email}</span>
                    </a>
                  </div>

                  <ButtonLink
                    href={`${whatsappBaseUrl}?text=${encodeURIComponent(
                      "Halo CV Beton Agung, saya ingin konsultasi kubah masjid.",
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8"
                    iconLeft={<MessageCircle className="h-4 w-4" />}
                  >
                    Chat WhatsApp
                  </ButtonLink>
                </div>
              </ScrollReveal>

              <ScrollReveal className="lg:col-span-7" delay={0.08}>
                <form
                  onSubmit={handleContactSubmit}
                  className="border border-[#C5A85C]/22 bg-[#08152c]/45 p-6 md:p-8"
                >
                  <span className="font-sans text-[10px] font-black uppercase tracking-widest text-[#C5A85C]">
                    Form Konsultasi
                  </span>
                  <h2 className="mt-4 font-serif text-3xl font-black text-[#E9D28A]">
                    Kirim Detail Proyek
                  </h2>

                  <div className="mt-7 grid gap-5 sm:grid-cols-2">
                    <label className="font-sans text-xs font-bold uppercase tracking-widest text-[#C5A85C]">
                      Nama
                      <input
                        name="name"
                        type="text"
                        placeholder="Nama Anda"
                        className="mt-2 w-full border border-[#C5A85C]/20 bg-[#030a16]/65 px-4 py-3 text-sm normal-case tracking-normal text-[#E2E8F0] outline-none transition-colors placeholder:text-[#94A3B8]/45 focus:border-[#C5A85C]/70"
                      />
                    </label>

                    <label className="font-sans text-xs font-bold uppercase tracking-widest text-[#C5A85C]">
                      No. HP
                      <input
                        name="phone"
                        type="tel"
                        placeholder="Nomor aktif"
                        className="mt-2 w-full border border-[#C5A85C]/20 bg-[#030a16]/65 px-4 py-3 text-sm normal-case tracking-normal text-[#E2E8F0] outline-none transition-colors placeholder:text-[#94A3B8]/45 focus:border-[#C5A85C]/70"
                      />
                    </label>

                    <label className="font-sans text-xs font-bold uppercase tracking-widest text-[#C5A85C]">
                      Lokasi Proyek
                      <input
                        name="location"
                        type="text"
                        placeholder="Kota / Kabupaten"
                        className="mt-2 w-full border border-[#C5A85C]/20 bg-[#030a16]/65 px-4 py-3 text-sm normal-case tracking-normal text-[#E2E8F0] outline-none transition-colors placeholder:text-[#94A3B8]/45 focus:border-[#C5A85C]/70"
                      />
                    </label>

                    <label className="font-sans text-xs font-bold uppercase tracking-widest text-[#C5A85C]">
                      Diameter
                      <input
                        name="diameter"
                        type="text"
                        placeholder="Contoh: 8 meter"
                        className="mt-2 w-full border border-[#C5A85C]/20 bg-[#030a16]/65 px-4 py-3 text-sm normal-case tracking-normal text-[#E2E8F0] outline-none transition-colors placeholder:text-[#94A3B8]/45 focus:border-[#C5A85C]/70"
                      />
                    </label>
                  </div>

                  <label className="mt-5 block font-sans text-xs font-bold uppercase tracking-widest text-[#C5A85C]">
                    Material
                    <select
                      name="material"
                      className="mt-2 w-full border border-[#C5A85C]/20 bg-[#030a16]/65 px-4 py-3 text-sm normal-case tracking-normal text-[#E2E8F0] outline-none transition-colors focus:border-[#C5A85C]/70"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Pilih material
                      </option>
                      <option value="Enamel">Enamel</option>
                      <option value="Stainless Gold">Stainless Gold</option>
                      <option value="Galvalum">Galvalum</option>
                      <option value="Belum ditentukan">Belum ditentukan</option>
                    </select>
                  </label>

                  <label className="mt-5 block font-sans text-xs font-bold uppercase tracking-widest text-[#C5A85C]">
                    Catatan
                    <textarea
                      name="message"
                      rows={6}
                      placeholder="Tuliskan kebutuhan bentuk kubah, jumlah unit, target waktu, atau referensi desain."
                      className="mt-2 w-full resize-none border border-[#C5A85C]/20 bg-[#030a16]/65 px-4 py-3 text-sm normal-case leading-relaxed tracking-normal text-[#E2E8F0] outline-none transition-colors placeholder:text-[#94A3B8]/45 focus:border-[#C5A85C]/70"
                    />
                  </label>

                  <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="font-sans text-xs leading-relaxed text-[#94A3B8]">
                      Tombol ini membuka WhatsApp dengan detail proyek yang
                      sudah tersusun otomatis.
                    </p>
                    <Button
                      type="submit"
                      size="md"
                      iconRight={<Send className="h-4 w-4" />}
                    >
                      Kirim Pesan
                    </Button>
                  </div>
                </form>
              </ScrollReveal>
            </div>
          </Container>
        </section>

        <section className="bg-[#08152c]/25 py-16">
          <Container>
            <div className="overflow-hidden border border-[#C5A85C]/25 bg-[#030a16] shadow-[0_18px_45px_rgba(0,0,0,0.2)]">
              <iframe
                src={googleMapsEmbedUrl}
                title="Lokasi CV Beton Agung di Google Maps"
                className="h-[340px] w-full md:h-[460px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Container>
        </section>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
