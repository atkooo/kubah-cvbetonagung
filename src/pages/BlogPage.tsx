import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  MessageCircle,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FloatingActions } from "../components/home/FloatingActions";
import { ButtonLink } from "../components/ui/Button";
import { Container } from "../components/ui/Container";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import { blogPosts } from "../blogData";
import type { BlogPost } from "../blogData";

interface BlogPageProps {
  post?: BlogPost;
}

const whatsappHref = `https://wa.me/6282324547755?text=${encodeURIComponent(
  "Halo CV Beton Agung, saya ingin konsultasi setelah membaca artikel blog.",
)}`;

export default function BlogPage({ post }: BlogPageProps) {
  if (post) {
    const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

    return (
      <div className="min-h-screen bg-[#030a16] font-serif text-[#E2E8F0] selection:bg-[#C5A85C] selection:text-[#030a16]">
        <Header />

        <main>
          <section className="relative overflow-hidden border-b border-[#C5A85C]/15 bg-[#030a16]">
            <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[linear-gradient(90deg,rgba(3,10,22,0),rgba(197,168,92,0.08))] lg:block" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-[#C5A85C]/45" />

            <Container className="relative py-12 md:py-16">
              <ButtonLink
                href="/blog"
                variant="ghost"
                size="xs"
                iconLeft={<ArrowLeft className="h-3 w-3" />}
              >
                Kembali ke Blog
              </ButtonLink>

              <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-end">
                <div className="lg:col-span-7">
                  <span className="font-sans text-[10px] font-black uppercase tracking-widest text-[#C5A85C]">
                    {post.category}
                  </span>
                  <h1 className="mt-4 max-w-4xl font-serif text-4xl font-black leading-tight tracking-tight text-[#E9D28A] md:text-6xl">
                    {post.title}
                  </h1>
                  <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-[#94A3B8]">
                    {post.excerpt}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3 font-sans text-xs text-[#94A3B8]">
                    <span className="inline-flex items-center gap-2 border border-[#C5A85C]/18 bg-[#08152c]/45 px-3 py-2">
                      <Calendar className="h-4 w-4 text-[#C5A85C]" />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center gap-2 border border-[#C5A85C]/18 bg-[#08152c]/45 px-3 py-2">
                      <Clock className="h-4 w-4 text-[#C5A85C]" />
                      {post.readTime}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="relative overflow-hidden border border-[#C5A85C]/25 bg-[#08152c]/45 shadow-[0_24px_70px_rgba(0,0,0,0.36)]">
                    <img
                      src={post.image}
                      alt={post.imageAlt}
                      className="aspect-4/3 w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,10,22,0),rgba(3,10,22,0.62))]" />
                  </div>
                </div>
              </div>
            </Container>
          </section>

          <section className="border-b border-[#C5A85C]/15 bg-[#08152c]/25 py-12">
            <Container>
              <div className="grid gap-3 md:grid-cols-3">
                {post.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex gap-3 border border-[#C5A85C]/18 bg-[#030a16]/58 p-5 font-sans text-sm leading-relaxed text-[#E2E8F0]/85"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#C5A85C]" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </Container>
          </section>

          <section className="border-b border-[#C5A85C]/15 bg-[#030a16] py-14 md:py-18">
            <Container>
              <article className="mx-auto max-w-3xl">
                {post.sections.map((section, index) => (
                  <ScrollReveal key={section.heading} delay={index * 0.05}>
                    <section className="border-b border-[#C5A85C]/12 py-8 first:pt-0 last:border-b-0 last:pb-0">
                      <span className="font-mono text-sm font-bold text-[#C5A85C]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h2 className="mt-3 font-serif text-3xl font-black text-[#E9D28A]">
                        {section.heading}
                      </h2>
                      <div className="mt-5 space-y-5 font-sans text-base leading-8 text-[#94A3B8]">
                        {section.body.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </section>
                  </ScrollReveal>
                ))}
              </article>
            </Container>
          </section>

          <section className="border-b border-[#C5A85C]/15 bg-[#08152c]/25 py-14 md:py-18">
            <Container>
              <div className="mb-8 max-w-3xl">
                <span className="font-sans text-[10px] font-black uppercase tracking-widest text-[#C5A85C]">
                  Artikel Terkait
                </span>
                <h2 className="mt-3 font-serif text-3xl font-black tracking-tight text-[#E2E8F0] md:text-4xl">
                  Lanjut Baca Panduan Lainnya
                </h2>
              </div>

              <BlogGrid posts={relatedPosts} />
            </Container>
          </section>

          <BlogCta />
        </main>

        <Footer />
        <FloatingActions />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030a16] font-serif text-[#E2E8F0] selection:bg-[#C5A85C] selection:text-[#030a16]">
      <Header />

      <main>
        <section className="relative overflow-hidden border-b border-[#C5A85C]/15 bg-[#030a16]">
          <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[linear-gradient(90deg,rgba(3,10,22,0),rgba(197,168,92,0.08))] lg:block" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-[#C5A85C]/45" />

          <Container className="relative py-14 md:py-18">
            <div className="max-w-3xl">
              <span className="font-sans text-[10px] font-black uppercase tracking-widest text-[#C5A85C]">
                Blog CV Beton Agung
              </span>
              <h1 className="mt-4 font-serif text-4xl font-black leading-tight tracking-tight text-[#E9D28A] md:text-6xl">
                Panduan Kubah Masjid
              </h1>
              <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-[#94A3B8]">
                Artikel ringkas untuk membantu panitia memahami material,
                harga, renovasi, perawatan, dan proses pemesanan kubah masjid.
              </p>
            </div>
          </Container>
        </section>

        <section className="border-b border-[#C5A85C]/15 bg-[#08152c]/25 py-14 md:py-18">
          <Container>
            <div className="mb-9 grid gap-6 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <span className="font-sans text-[10px] font-black uppercase tracking-widest text-[#C5A85C]">
                  Artikel Terbaru
                </span>
                <h2 className="mt-3 max-w-2xl font-serif text-3xl font-black tracking-tight text-[#E2E8F0] md:text-4xl">
                  Baca Detail Artikel Sesuai Kebutuhan Proyek
                </h2>
              </div>
              <p className="font-sans text-sm leading-relaxed text-[#94A3B8] lg:col-span-5">
                Klik salah satu artikel untuk membuka halaman detail. Setiap
                artikel berisi poin keputusan praktis untuk panitia pembangunan.
              </p>
            </div>

            <BlogGrid posts={blogPosts} />
          </Container>
        </section>

        <BlogCta />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}

function BlogGrid({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {posts.map((post, index) => (
        <ScrollReveal key={post.slug} delay={(index % 4) * 0.06}>
          <article className="group flex h-full flex-col overflow-hidden border border-[#C5A85C]/18 bg-[#030a16]/58 transition-colors hover:border-[#C5A85C]/45">
            <a href={`/blog/${post.slug}`} className="relative overflow-hidden bg-[#030a16]">
              <img
                src={post.image}
                alt={post.imageAlt}
                className="aspect-4/3 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,10,22,0),rgba(3,10,22,0.68))]" />
              <span className="absolute bottom-4 left-4 border border-[#C5A85C]/35 bg-[#030a16]/85 px-3 py-1 font-sans text-[9px] font-black uppercase tracking-widest text-[#C5A85C]">
                {post.category}
              </span>
            </a>

            <div className="flex flex-1 flex-col p-5">
              <div className="flex flex-wrap gap-2 font-sans text-[10px] uppercase tracking-wider text-[#94A3B8]">
                <span>{post.date}</span>
                <span className="text-[#C5A85C]">/</span>
                <span>{post.readTime}</span>
              </div>

              <h3 className="mt-3 font-serif text-xl font-black leading-tight text-[#E2E8F0]">
                <a href={`/blog/${post.slug}`} className="transition-colors hover:text-[#E9D28A]">
                  {post.title}
                </a>
              </h3>
              <p className="mt-3 line-clamp-3 font-sans text-sm leading-relaxed text-[#94A3B8]">
                {post.excerpt}
              </p>

              <ButtonLink
                href={`/blog/${post.slug}`}
                variant="outline"
                size="xs"
                className="mt-6"
                iconRight={<ArrowRight className="h-3 w-3" />}
              >
                Baca Detail
              </ButtonLink>
            </div>
          </article>
        </ScrollReveal>
      ))}
    </div>
  );
}

function BlogCta() {
  return (
    <section className="bg-[#030a16] py-14 md:py-18">
      <Container>
        <div className="grid gap-8 border border-[#C5A85C]/22 bg-[#08152c]/42 p-6 md:p-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <span className="font-sans text-[10px] font-black uppercase tracking-widest text-[#C5A85C]">
              Konsultasi Setelah Membaca
            </span>
            <h2 className="mt-3 font-serif text-3xl font-black text-[#E9D28A] md:text-4xl">
              Butuh Rekomendasi untuk Proyek Masjid Anda?
            </h2>
            <p className="mt-4 max-w-2xl font-sans text-sm leading-relaxed text-[#94A3B8]">
              Kirim ukuran, lokasi, dan material yang sedang dipertimbangkan.
              Tim CV Beton Agung akan bantu arahkan pilihan yang paling masuk
              akal untuk bangunan Anda.
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
              iconLeft={<MessageCircle className="h-4 w-4" />}
            >
              WhatsApp
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
