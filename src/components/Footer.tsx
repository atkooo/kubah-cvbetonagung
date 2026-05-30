import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import { aboutRoutes, productRoutes, standaloneRoutes } from "../siteRoutes";
import { Container } from "./ui/Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#030a16] border-t border-[#C5A85C]/20 text-[#E2E8F0] py-20 px-6">
      <Container className="grid grid-cols-1 gap-12 font-sans text-xs md:grid-cols-12 md:gap-x-14 lg:gap-x-20">
        {/* Left column: Brand & About */}
        <div className="md:col-span-4 flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <img
              src="/assets/logo/logo.png"
              alt="CV Beton Agung"
              className="h-10 w-10 object-contain"
            />
            <div className="flex flex-col">
              <span className="font-serif text-sm font-black tracking-widest text-[#E2E8F0] uppercase">CV BETON AGUNG</span>
              <span className="font-sans text-[8px] tracking-[0.25em] text-[#C5A85C] uppercase font-bold">TERPERCAYA DAN BERINTEGRITAS</span>
            </div>
          </div>
          <p className="text-[#94A3B8] leading-relaxed text-[12px] pr-4 max-w-sm">
            CV Beton Agung melayani pembuatan kubah masjid dari desain, pemilihan material, rangka, hingga pemasangan untuk proyek masjid di berbagai daerah.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="md:col-span-2 flex flex-col gap-5">
          <h5 className="font-sans text-[11px] font-black tracking-[0.28em] leading-snug text-[#C5A85C] uppercase">Quick Links</h5>
          <ul className="flex flex-col gap-3 text-[#94A3B8] text-[13px] leading-snug">
            <li>
              <a href="/" className="hover:text-[#D4AF37] transition-colors">Home</a>
            </li>
            <li>
              <a href={standaloneRoutes[0].path} className="hover:text-[#D4AF37] transition-colors">Portfolio</a>
            </li>
            <li>
              <a href={standaloneRoutes[1].path} className="hover:text-[#D4AF37] transition-colors">Harga</a>
            </li>
            <li>
              <a href={aboutRoutes[0].path} className="hover:text-[#D4AF37] transition-colors">Profil CV Beton Agung</a>
            </li>
            <li>
              <a href={standaloneRoutes[2].path} className="hover:text-[#D4AF37] transition-colors">Kontak</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Produk */}
        <div className="md:col-span-2 flex flex-col gap-5">
          <h5 className="font-sans text-[11px] font-black tracking-[0.28em] leading-snug text-[#C5A85C] uppercase">Produk Kubah</h5>
          <ul className="flex flex-col gap-3 text-[#94A3B8] text-[13px] leading-snug">
            {productRoutes.map((route) => (
              <li key={route.path}>
                <a href={route.path} className="hover:text-[#D4AF37] transition-colors">
                  {route.label.replace("KUBAH MASJID ", "Kubah Masjid ")}
                </a>
              </li>
            ))}
            <li>
              <a href={aboutRoutes[4].path} className="hover:text-[#D4AF37] transition-colors">Cara Pesan</a>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact Us & Address */}
        <div className="md:col-span-4 flex flex-col gap-5">
          <h5 className="font-sans text-[11px] font-black tracking-[0.28em] leading-snug text-[#C5A85C] uppercase">Hubungi Kami</h5>
          <div className="flex flex-col gap-5 text-[#94A3B8] text-[13px] leading-relaxed">
            <div className="flex gap-4">
              <MapPin className="h-5 w-5 text-[#C5A85C] shrink-0" />
              <span>Jl. Lintas Kalimantan Poros Tengah, KM. 07, Sungai Ukoi, Kec. Sintang, Kabupaten Sintang, Kalimantan Barat 78661</span>
            </div>
            <div className="flex gap-4 items-center">
              <Phone className="h-5 w-5 text-[#C5A85C] shrink-0" />
              <a href="tel:+6282324547755" className="hover:text-[#D4AF37] transition-colors">0823-2454-7755</a>
            </div>
            <div className="flex gap-4 items-center">
              <Mail className="h-5 w-5 text-[#C5A85C] shrink-0" />
              <a href="mailto:contact@cvbetonagung.com" className="hover:text-[#D4AF37] transition-colors">contact@cvbetonagung.com</a>
            </div>
          </div>

          {/* Social media icons */}
          <div className="flex gap-5 text-[#E2E8F0]/60 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A85C] transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A85C] transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A85C] transition-colors">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>

      </Container>

      <Container className="border-t border-[#C5A85C]/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-[10px] text-[#94A3B8]/40">
        <span>Copyright © {currentYear} CV Beton Agung. All Rights Reserved.</span>
        <div className="flex gap-4">
          <a href={aboutRoutes[1].path} className="hover:text-[#C5A85C]">Garansi</a>
          <a href={aboutRoutes[5].path} className="hover:text-[#C5A85C]">Blog</a>
        </div>
      </Container>
    </footer>
  );
}
