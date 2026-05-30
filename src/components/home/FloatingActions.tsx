import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle, X } from "lucide-react";

const whatsappBaseUrl = "https://wa.me/6282324547755";

export function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showWhatsappPopup, setShowWhatsappPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > window.innerHeight * 0.65);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed bottom-6 z-40 transition-[right] duration-300 ${
          showBackToTop ? "right-20" : "right-6"
        }`}
      >
        {showWhatsappPopup && (
          <div className="absolute bottom-16 right-0 w-[min(calc(100vw-3rem),20rem)] overflow-hidden rounded-lg border border-[#C5A85C]/45 bg-[#030a16]/95 shadow-[0_20px_44px_rgba(0,0,0,0.38),0_0_24px_rgba(197,168,92,0.18)] backdrop-blur-md">
            <div className="flex items-start justify-between gap-4 border-b border-[#C5A85C]/20 px-4 py-3">
              <div>
                <p className="font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-[#C5A85C]">
                  Konsultasi WhatsApp
                </p>
                <p className="mt-1 font-sans text-xs leading-relaxed text-[#E2E8F0]/82">
                  Mulai chat dengan pesan konsultasi yang sudah disiapkan.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowWhatsappPopup(false)}
                aria-label="Tutup popup WhatsApp"
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#C5A85C]/30 text-[#E2E8F0]/75 transition-colors hover:border-[#C5A85C]/60 hover:text-[#E9D28A]"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
            <div className="p-4">
              <a
                href={`${whatsappBaseUrl}?text=${encodeURIComponent(
                  "Halo CV Beton Agung, saya ingin konsultasi kubah masjid.",
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowWhatsappPopup(false)}
                className="flex w-full items-center justify-center gap-2 rounded-full border border-[#F3D778]/70 bg-[linear-gradient(135deg,#F8E6A2_0%,#D7B85A_48%,#B98D32_100%)] px-4 py-3 font-sans text-[10px] font-bold uppercase tracking-widest text-[#030a16] shadow-[0_10px_22px_rgba(0,0,0,0.25),0_0_16px_rgba(197,168,92,0.18)] transition-all hover:brightness-110"
              >
                <MessageCircle className="h-4 w-4" />
                Chat Sekarang
              </a>
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={() => setShowWhatsappPopup((isOpen) => !isOpen)}
          aria-label="Buka popup WhatsApp"
          aria-expanded={showWhatsappPopup}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-[#F3D778]/70 bg-[linear-gradient(135deg,#F8E6A2_0%,#D7B85A_48%,#B98D32_100%)] text-[#030a16] shadow-[0_12px_26px_rgba(0,0,0,0.32),0_0_18px_rgba(197,168,92,0.24)] transition-all hover:-translate-y-0.5 hover:brightness-110"
        >
          <MessageCircle className="h-5 w-5" />
        </button>
      </div>

      <button
        type="button"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        aria-label="Kembali ke atas"
        className={`fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-[#F3D778]/70 bg-[linear-gradient(135deg,#F8E6A2_0%,#D7B85A_48%,#B98D32_100%)] text-[#030a16] shadow-[0_12px_26px_rgba(0,0,0,0.32),0_0_18px_rgba(197,168,92,0.24)] transition-all hover:brightness-110 ${
          showBackToTop
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </>
  );
}
