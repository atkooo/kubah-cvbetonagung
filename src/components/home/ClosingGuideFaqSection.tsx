import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "../ui/Container";
import { faqItems, producerTips } from "../../homeData";

export function ClosingGuideFaqSection() {
  const [openTipIndex, setOpenTipIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  return (
    <section className="relative overflow-hidden border-b border-[#C5A85C]/15 bg-[#08152c]/30 py-16 md:py-20">
      <div className="absolute inset-x-0 top-0 h-px bg-[#C5A85C]/35" />
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <span className="font-sans text-[10px] font-black uppercase tracking-widest text-[#C5A85C]">
              Tips CV Beton Agung
            </span>
            <h2 className="mt-3 max-w-md font-serif text-3xl font-black leading-tight text-[#E2E8F0] md:text-4xl">
              Cari Produsen Kubah Masjid Terdekat?
            </h2>
            <p className="mt-5 max-w-md font-sans text-sm leading-relaxed text-[#94A3B8]">
              Mencari produsen kubah masjid yang tepat adalah langkah penting
              dalam mewujudkan impian Anda. Berikut beberapa tips utama sebelum
              menentukan pilihan.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-xl border border-[#C5A85C]/20 bg-[#030a16]/55">
              {producerTips.map((tip, index) => (
                <div
                  key={tip.title}
                  className="group/tip border-b border-[#C5A85C]/12 px-5 py-4 transition-colors hover:bg-[#08152c]/55 last:border-b-0"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenTipIndex((currentIndex) =>
                        currentIndex === index ? -1 : index,
                      )
                    }
                    aria-expanded={openTipIndex === index}
                    className="flex w-full cursor-pointer items-center justify-between gap-5 rounded-md text-left outline-none focus-visible:ring-2 focus-visible:ring-[#C5A85C]/45"
                  >
                    <span className="flex items-center gap-4">
                      <span className="font-mono text-xs font-bold text-[#C5A85C]/70 transition-colors group-hover/tip:text-[#E9D28A]">
                        0{index + 1}
                      </span>
                      <span className="font-sans text-xs font-black uppercase tracking-widest text-[#E2E8F0] transition-colors group-hover/tip:text-[#E9D28A]">
                        {tip.title}
                      </span>
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-[#C5A85C] transition-transform group-hover/tip:text-[#E9D28A] ${
                        openTipIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openTipIndex === index && (
                    <p className="mt-3 pl-8 pr-8 font-sans text-sm leading-relaxed text-[#94A3B8]">
                      {tip.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <span className="font-sans text-[10px] font-black uppercase tracking-widest text-[#C5A85C]">
              FAQ's
            </span>
            <h2 className="mt-3 font-serif text-3xl font-black text-[#E2E8F0]">
              Pertanyaan yang Sering Diajukan
            </h2>
          </div>

          <div className="mx-auto max-w-4xl overflow-hidden rounded-xl border border-[#C5A85C]/20 bg-[#030a16]/55">
            {faqItems.map((item, index) => (
              <div
                key={item.question}
                className="group/faq border-b border-[#C5A85C]/12 p-5 transition-colors hover:bg-[#08152c]/55 last:border-b-0"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenFaqIndex((currentIndex) =>
                      currentIndex === index ? -1 : index,
                    )
                  }
                  aria-expanded={openFaqIndex === index}
                  className="flex w-full cursor-pointer items-center justify-between gap-5 rounded-md text-left outline-none focus-visible:ring-2 focus-visible:ring-[#C5A85C]/45"
                >
                  <span className="font-sans text-xs font-black uppercase tracking-widest text-[#E2E8F0] transition-colors group-hover/faq:text-[#E9D28A]">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-[#C5A85C] transition-transform group-hover/faq:text-[#E9D28A] ${
                      openFaqIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaqIndex === index && (
                  <p className="mt-3 pr-8 font-sans text-sm leading-relaxed text-[#94A3B8]">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
