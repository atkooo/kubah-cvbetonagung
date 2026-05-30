import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import { Container } from "./ui/Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#030a16] border-t border-[#C5A85C]/20 text-[#E2E8F0] py-16 px-6">
      <Container className="grid grid-cols-1 md:grid-cols-12 gap-8 font-sans text-xs">
        
        {/* Left column: Brand & About */}
        <div className="md:col-span-4 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="relative flex h-8 w-8 items-center justify-center rounded-full border border-[#C5A85C]/30 bg-[#08152c] shadow-[0_0_10px_rgba(197,168,92,0.1)]">
              <svg className="h-4.5 w-4.5 text-[#C5A85C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10H12V2z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2c5.52 0 10 4.48 10 10S17.52 22 12 22" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-sm font-black tracking-widest text-[#E2E8F0] uppercase">CV BETON AGUNG</span>
              <span className="font-sans text-[8px] tracking-[0.25em] text-[#C5A85C] uppercase font-bold">Luxury Mosque Domes</span>
            </div>
          </div>
          <p className="text-[#94A3B8] leading-relaxed text-[11px] pr-4">
            Kami adalah manufaktur spesialis konstruksi sasis baja ringan & panel kubah masjid premium dengan pengerjaan bercita rasa seni tinggi di seluruh Indonesia.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="md:col-span-2.5 flex flex-col gap-3">
          <h5 className="font-sans text-[10px] font-black tracking-[0.2em] text-[#C5A85C] uppercase">Quick Links</h5>
          <ul className="flex flex-col gap-2 text-[#94A3B8] text-[11px]">
            <li>
              <a href="#hero" className="hover:text-[#D4AF37] transition-colors">Home</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-[#D4AF37] transition-colors">Showcase Proyek</a>
            </li>
            <li>
              <a href="#why-choose-us" className="hover:text-[#D4AF37] transition-colors">Kelebihan Kami</a>
            </li>
            <li>
              <a href="#estimator-section" className="hover:text-[#D4AF37] transition-colors">Estimator Kubah</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Layanan */}
        <div className="md:col-span-2.5 flex flex-col gap-3">
          <h5 className="font-sans text-[10px] font-black tracking-[0.2em] text-[#C5A85C] uppercase">Layanan Kami</h5>
          <ul className="flex flex-col gap-2 text-[#94A3B8] text-[11px]">
            <li>
              <a href="#services" className="hover:text-[#D4AF37] transition-colors">Desain Kustom 3D</a>
            </li>
            <li>
              <a href="#services" className="hover:text-[#D4AF37] transition-colors">Konstruksi Sasis Sinyal</a>
            </li>
            <li>
              <a href="#services" className="hover:text-[#D4AF37] transition-colors">Pengecatan Enamel SPCC</a>
            </li>
            <li>
              <a href="#services" className="hover:text-[#D4AF37] transition-colors">Restorasi Kubah Klasik</a>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact Us & Address */}
        <div className="md:col-span-3 flex flex-col gap-4">
          <h5 className="font-sans text-[10px] font-black tracking-[0.2em] text-[#C5A85C] uppercase">Hubungi Kami</h5>
          <div className="flex flex-col gap-3 text-[#94A3B8] text-[11px]">
            <div className="flex gap-2">
              <MapPin className="h-4 w-4 text-[#C5A85C] shrink-0" />
              <span>Sari Beton Agung Mandiri, Jln. Soekarno-Hatta, Bandung, Jawa Barat 40286</span>
            </div>
            <div className="flex gap-2 items-center">
              <Phone className="h-4 w-4 text-[#C5A85C] shrink-0" />
              <span>+62 812-3556-7899</span>
            </div>
            <div className="flex gap-2 items-center">
              <Mail className="h-4 w-4 text-[#C5A85C] shrink-0" />
              <span>contact@vetonagung.com</span>
            </div>
          </div>

          {/* Social media icons */}
          <div className="flex gap-3 text-[#E2E8F0]/60 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A85C] transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A85C] transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A85C] transition-colors">
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>

      </Container>

      <Container className="border-t border-[#C5A85C]/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-[10px] text-[#94A3B8]/40">
        <span>Copyright © {currentYear} CV Beton Agung - Luxury Mosque Domes. All Rights Reserved.</span>
        <div className="flex gap-4">
          <a href="#" className="hover:text-[#C5A85C]">Syarat & Ketentuan</a>
          <a href="#" className="hover:text-[#C5A85C]">Kebijakan Privasi</a>
        </div>
      </Container>
    </footer>
  );
}
