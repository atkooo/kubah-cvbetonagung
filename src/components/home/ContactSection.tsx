import { FormEvent } from "react";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { Button, ButtonLink } from "../ui/Button";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";

const whatsappBaseUrl = "https://wa.me/6282324547755";
const googleMapsEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.817861037238!2d111.45600847475643!3d0.027492364399217428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31fe1fc45b29279d%3A0xf960aac0a31c0369!2sCV.%20beton%20agung!5e0!3m2!1sid!2sid!4v1780159269689!5m2!1sid!2sid";

export function ContactSection() {
  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const location = String(formData.get("location") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const whatsappMessage = [
      "Halo CV Beton Agung, saya ingin konsultasi kubah masjid.",
      name && `Nama: ${name}`,
      location && `Lokasi: ${location}`,
      message && `Kebutuhan: ${message}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `${whatsappBaseUrl}?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank",
    );
  };

  return (
    <section
      id="contact"
      className="py-20 bg-[#030a16] border-b border-[#C5A85C]/15"
    >
      <Container>
        <SectionHeader
          eyebrow="Hubungi Kami"
          title="Kontak CV Beton Agung"
          description="Konsultasikan kebutuhan kubah masjid, pilihan material, ukuran, dan rencana pemasangan dengan tim kami."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="h-full rounded-xl border border-[#C5A85C]/25 bg-[#08152c]/45 p-6 md:p-8">
              <h3 className="font-serif text-2xl font-black text-[#E9D28A]">
                Siap Diskusi Proyek?
              </h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-[#94A3B8]">
                Kirim detail singkat proyek Anda. Kami akan membantu memberi
                arahan awal terkait bentuk kubah, material, dan estimasi
                pengerjaan.
              </p>

              <div className="mt-8 flex flex-col gap-4 font-sans text-sm">
                <div className="flex gap-3 rounded-lg border border-[#C5A85C]/15 bg-[#030a16]/45 p-4">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#C5A85C]" />
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-widest text-[#C5A85C]">
                      Alamat
                    </span>
                    <p className="mt-1 text-[#E2E8F0]/85">
                      Jl. Lintas Kalimantan Poros Tengah, KM. 07, Sungai Ukoi,
                      Kec. Sintang, Kabupaten Sintang, Kalimantan Barat 78661
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <a
                    href="tel:+6282324547755"
                    className="flex gap-3 rounded-lg border border-[#C5A85C]/15 bg-[#030a16]/45 p-4 transition-colors hover:border-[#C5A85C]/45"
                  >
                    <Phone className="h-5 w-5 shrink-0 text-[#C5A85C]" />
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-widest text-[#C5A85C]">
                        Telepon
                      </span>
                      <span className="mt-1 block text-[#E2E8F0]/85">
                        0823-2454-7755
                      </span>
                    </div>
                  </a>

                  <a
                    href="mailto:contact@cvbetonagung.com"
                    className="flex gap-3 rounded-lg border border-[#C5A85C]/15 bg-[#030a16]/45 p-4 transition-colors hover:border-[#C5A85C]/45"
                  >
                    <Mail className="h-5 w-5 shrink-0 text-[#C5A85C]" />
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-widest text-[#C5A85C]">
                        Email
                      </span>
                      <span className="mt-1 block break-all text-[#E2E8F0]/85">
                        contact@cvbetonagung.com
                      </span>
                    </div>
                  </a>
                </div>
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
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={handleContactSubmit}
              className="rounded-xl border border-[#C5A85C]/25 bg-[#08152c]/45 p-6 md:p-8"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <label className="font-sans text-xs font-bold uppercase tracking-widest text-[#C5A85C]">
                  Nama
                  <input
                    name="name"
                    type="text"
                    placeholder="Nama Anda"
                    className="mt-2 w-full rounded-lg border border-[#C5A85C]/20 bg-[#030a16]/65 px-4 py-3 text-sm normal-case tracking-normal text-[#E2E8F0] outline-none transition-colors placeholder:text-[#94A3B8]/45 focus:border-[#C5A85C]/70"
                  />
                </label>

                <label className="font-sans text-xs font-bold uppercase tracking-widest text-[#C5A85C]">
                  Lokasi Proyek
                  <input
                    name="location"
                    type="text"
                    placeholder="Kota / Kabupaten"
                    className="mt-2 w-full rounded-lg border border-[#C5A85C]/20 bg-[#030a16]/65 px-4 py-3 text-sm normal-case tracking-normal text-[#E2E8F0] outline-none transition-colors placeholder:text-[#94A3B8]/45 focus:border-[#C5A85C]/70"
                  />
                </label>
              </div>

              <label className="mt-5 block font-sans text-xs font-bold uppercase tracking-widest text-[#C5A85C]">
                Kebutuhan
                <textarea
                  name="message"
                  rows={7}
                  placeholder="Contoh: rencana kubah diameter 8 meter, material enamel, lokasi Bandung."
                  className="mt-2 w-full resize-none rounded-lg border border-[#C5A85C]/20 bg-[#030a16]/65 px-4 py-3 text-sm normal-case leading-relaxed tracking-normal text-[#E2E8F0] outline-none transition-colors placeholder:text-[#94A3B8]/45 focus:border-[#C5A85C]/70"
                />
              </label>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-sans text-xs leading-relaxed text-[#94A3B8]">
                  Form ini akan membuka WhatsApp dengan pesan yang sudah
                  tersusun otomatis.
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
          </div>

          <div className="lg:col-span-12">
            <div className="overflow-hidden rounded-xl border border-[#C5A85C]/25 bg-[#08152c]/45 shadow-[0_18px_45px_rgba(0,0,0,0.2)]">
              <iframe
                src={googleMapsEmbedUrl}
                title="Lokasi CV Beton Agung di Google Maps"
                className="h-[320px] w-full md:h-[420px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
