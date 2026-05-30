import { ArrowRight } from "lucide-react";
import { homeProductTypes } from "../../homeData";
import { ButtonLink } from "../ui/Button";
import { Container } from "../ui/Container";

export function ProductTypesSection() {
  return (
    <section className="relative overflow-hidden border-b border-[#C5A85C]/15 bg-[#08152c]/30 py-16 md:py-20">
      <div className="absolute inset-x-0 top-0 h-px bg-[#C5A85C]/35" />
      <div className="absolute inset-y-0 right-0 hidden w-1/3 bg-[linear-gradient(90deg,rgba(8,21,44,0),rgba(197,168,92,0.06))] lg:block" />
      <Container>
        <div className="relative">
          <div className="mb-12 grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <span className="font-sans text-[10px] font-black uppercase tracking-widest text-[#C5A85C]">
                Jenis Kubah Masjid yang Kami Produksi
              </span>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl font-black tracking-tight text-[#E2E8F0] md:text-4xl">
                Pilihan Material Kubah Masjid untuk Berbagai Kebutuhan Proyek
              </h2>
            </div>
            <p className="font-sans text-sm leading-relaxed text-[#94A3B8] lg:col-span-5">
              Tiga kategori utama ini menjadi pintu masuk menuju halaman SEO
              produk. Setiap material punya karakter visual, bobot, dan
              kebutuhan perawatan yang berbeda.
            </p>
          </div>

          <div className="space-y-8">
            {homeProductTypes.map((product, index) => (
              <article
                key={product.href}
                className={`group relative overflow-hidden rounded-xl border border-[#C5A85C]/18 bg-[#030a16]/52 p-4 shadow-[0_18px_44px_rgba(0,0,0,0.22)] transition-all hover:border-[#C5A85C]/42 hover:bg-[#08152c]/60 md:grid md:grid-cols-12 md:items-center md:gap-8 md:p-6 ${
                  index % 2 === 1 ? "md:[&>div:first-child]:col-start-8" : ""
                }`}
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(197,168,92,0.58),transparent)] opacity-60" />
                <div className="mx-auto w-full md:col-span-5 md:row-start-1">
                  <div className="relative overflow-hidden rounded-lg border border-[#C5A85C]/25 bg-[#030a16] shadow-[0_18px_44px_rgba(0,0,0,0.28),0_0_20px_rgba(197,168,92,0.08)]">
                    <img
                      src={product.image}
                      alt={product.imageAlt}
                      className="aspect-4/3 w-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,10,22,0),rgba(3,10,22,0.58))]" />
                    <span className="absolute bottom-4 left-4 border border-[#C5A85C]/45 bg-[#030a16]/85 px-3 py-1 font-sans text-[9px] font-black uppercase tracking-widest text-[#C5A85C]">
                      Material 0{index + 1}
                    </span>
                  </div>
                </div>

                <div
                  className={`mx-auto mt-6 max-w-xl md:row-start-1 md:mt-0 ${
                    index % 2 === 1
                      ? "md:col-span-7 md:col-start-1"
                      : "md:col-span-7 md:col-start-6"
                  }`}
                >
                  <span className="font-mono text-xs font-bold text-[#C5A85C]/75">
                    0{index + 1}
                  </span>
                  <h3 className="mt-3 font-serif text-2xl font-black tracking-tight text-[#E2E8F0] md:text-3xl">
                    {product.title}
                  </h3>
                  <p className="mt-4 font-sans text-sm leading-relaxed text-[#94A3B8]">
                    {product.description}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <ButtonLink
                      href={product.href}
                      size="xs"
                      iconRight={<ArrowRight className="h-3 w-3" />}
                    >
                      {product.cta}
                    </ButtonLink>
                    <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-[#E2E8F0]/55">
                      Halaman Produk SEO
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
