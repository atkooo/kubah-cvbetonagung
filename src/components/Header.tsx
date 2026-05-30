import { Phone } from "lucide-react";
import { ButtonLink } from "./ui/Button";
import { Container } from "./ui/Container";

interface HeaderProps {
  onNavClick: (sectionId: string) => void;
}

export default function Header({ onNavClick }: HeaderProps) {
  const whatsappUrl = "https://wa.me/6281235567899?text=Halo%20CV%20Beton%20Agung,%20saya%20tertarik%20konsultasi%20kubah%20masjid%20eksklusif.";
  const navButtonClass =
    "rounded-full px-3.5 py-2 text-[11px] font-bold tracking-[0.16em] transition-colors hover:bg-[#08152c] hover:text-[#C5A85C] cursor-pointer";

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#C5A85C]/20 bg-[#030a16]/95 backdrop-blur-md">
      <Container className="flex items-center justify-between py-4">
        {/* Brand Headerboard */}
        <div className="flex items-center gap-3">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-full border border-[#C5A85C]/35 bg-[#08152c] shadow-[0_0_15px_rgba(197,168,92,0.15)]">
            <svg
              className="h-5 w-5 text-[#C5A85C]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10H12V2z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 2c5.52 0 10 4.48 10 10S17.52 22 12 22"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-sm font-black tracking-[0.15em] text-[#E2E8F0] uppercase">
              CV BETON AGUNG
            </span>
            <span className="font-sans text-[8px] tracking-[0.25em] text-[#C5A85C] uppercase font-semibold">
              LUXURY MOSQUE DOMES
            </span>
          </div>
        </div>

        {/* Thin Gold-Accented Navigation */}
        <nav className="hidden lg:flex items-center gap-1.5 font-sans uppercase text-[#E2E8F0]/75">
          <button
            onClick={() => onNavClick("hero")}
            className={navButtonClass}
          >
            Home
          </button>
          <button
            onClick={() => onNavClick("projects")}
            className={navButtonClass}
          >
            Premium
          </button>
          <button
            onClick={() => onNavClick("why-choose-us")}
            className={navButtonClass}
          >
            Kelebihan
          </button>
          <button
            onClick={() => onNavClick("estimator-section")}
            className={`${navButtonClass} text-[#C5A85C]`}
          >
            Estimator
          </button>
          <button
            onClick={() => onNavClick("services")}
            className={navButtonClass}
          >
            Layanan
          </button>
        </nav>

        {/* WhatsApp Callout Action (Matches Yellow Pill button in Screenshot) */}
        <ButtonLink
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          size="sm"
          iconLeft={<Phone className="h-3 w-3" />}
        >
          WhatsApp Kami Eksklusif
        </ButtonLink>
      </Container>
    </header>
  );
}
