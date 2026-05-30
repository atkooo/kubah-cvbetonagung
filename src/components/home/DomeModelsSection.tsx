import { homeDomeModels } from "../../homeData";
import { Container } from "../ui/Container";
import { ScrollReveal } from "../ui/ScrollReveal";

export function DomeModelsSection() {
  return (
    <section className="relative overflow-hidden border-b border-[#C5A85C]/15 bg-[#030a16] py-16 md:py-20">
      <Container>
        <div className="relative">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <span className="font-sans text-[10px] font-black uppercase tracking-widest text-[#C5A85C]">
              Model Kubah
            </span>
            <h2 className="mt-3 font-serif text-3xl font-black tracking-tight text-[#E2E8F0] md:text-4xl">
              Pilih Model Kubah Sesuai Keinginan
            </h2>
            <p className="mt-4 font-sans text-sm leading-relaxed text-[#94A3B8]">
              Setiap bentuk dapat disesuaikan dengan ukuran bangunan, karakter
              fasad, dan material kubah yang dipilih.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {homeDomeModels.map((model, index) => (
              <ScrollReveal key={model.name} className="h-full" delay={index * 0.07}>
                <article className="group relative h-full min-h-[17rem] overflow-hidden rounded-xl border border-[#C5A85C]/18 bg-[#08152c]/45 p-6 transition-all hover:border-[#C5A85C]/45 hover:bg-[#08152c]/70">
                  <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(197,168,92,0.55),transparent)]" />
                  <span className="font-mono text-xs font-bold text-[#C5A85C]/70">
                    0{index + 1}
                  </span>

                  <div className="mt-7 flex h-24 items-end justify-center">
                    <div
                      className={`relative border border-[#C5A85C]/55 bg-[linear-gradient(135deg,rgba(248,230,162,0.9),rgba(197,168,92,0.42)_48%,rgba(8,21,44,0.65))] shadow-[0_0_28px_rgba(197,168,92,0.16)] ${
                        index === 0
                          ? "h-24 w-24 rounded-t-[70%] rounded-b-2xl"
                          : index === 1
                            ? "h-18 w-28 rounded-t-full rounded-b-md"
                            : index === 2
                              ? "h-24 w-20 rounded-t-[80%] rounded-b-lg"
                              : "h-26 w-18 rounded-t-[90%] rounded-b-lg"
                      }`}
                    >
                      <div className="absolute -top-4 left-1/2 h-5 w-2 -translate-x-1/2 rounded-full bg-[#C5A85C]" />
                      <div className="absolute -top-6 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full border border-[#C5A85C] bg-[#030a16]" />
                    </div>
                  </div>

                  <h3 className="mt-8 font-serif text-lg font-black leading-snug text-[#E2E8F0]">
                    {model.name}
                  </h3>
                  <p className="mt-3 font-sans text-xs leading-relaxed text-[#94A3B8]">
                    {model.description}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.1}>
            <div className="mx-auto mt-10 max-w-3xl rounded-lg border border-[#C5A85C]/20 bg-[#08152c]/35 px-6 py-5 text-center">
              <p className="font-sans text-sm italic leading-relaxed text-[#E2E8F0]/82">
                Jika Anda mempunyai model atau desain sendiri, kami dapat
                menggunakannya atau menyesuaikan model sesuai kebutuhan proyek.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
