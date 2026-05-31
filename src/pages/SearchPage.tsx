import { FormEvent, useMemo, useState } from "react";
import {
  ArrowRight,
  FileText,
  FolderOpen,
  MapPin,
  PackageSearch,
  Search,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FloatingActions } from "../components/home/FloatingActions";
import { Button } from "../components/ui/Button";
import { Container } from "../components/ui/Container";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import { PROJECTS_DATA } from "../data";
import { allPageRoutes } from "../siteRoutes";
import { productPages } from "../productData";
import { aboutPages } from "../aboutData";
import { blogPosts } from "../blogData";

type SearchCategory = "Semua" | "Produk" | "Portfolio" | "Blog" | "Halaman";

interface SearchItem {
  title: string;
  description: string;
  href: string;
  category: Exclude<SearchCategory, "Semua">;
  meta: string;
}

const categories: SearchCategory[] = [
  "Semua",
  "Produk",
  "Portfolio",
  "Blog",
  "Halaman",
];

function getInitialQuery() {
  return new URLSearchParams(window.location.search).get("q") || "";
}

function normalize(value: string) {
  return value.toLowerCase().trim();
}

const searchItems: SearchItem[] = [
  ...productPages.map((product) => ({
    title: product.title,
    description: product.summary,
    href: product.slug,
    category: "Produk" as const,
    meta: product.shortTitle,
  })),
  ...PROJECTS_DATA.map((project) => ({
    title: project.name,
    description: project.description,
    href: "/portfolio",
    category: "Portfolio" as const,
    meta: `${project.location} / ${project.diameter}m`,
  })),
  ...blogPosts.map((post) => ({
    title: post.title,
    description: post.excerpt,
    href: `/blog/${post.slug}`,
    category: "Blog" as const,
    meta: `${post.category} / ${post.readTime}`,
  })),
  ...aboutPages.map((page) => ({
    title: page.title,
    description: page.summary,
    href: page.path,
    category: "Halaman" as const,
    meta: page.eyebrow,
  })),
  ...allPageRoutes
    .filter((route) => !route.path.startsWith("/produk") && route.path !== "/blog")
    .map((route) => ({
      title: route.label,
      description: `Buka halaman ${route.label.toLowerCase()} CV Beton Agung.`,
      href: route.path,
      category: "Halaman" as const,
      meta: "Navigasi",
    })),
];

function getCategoryIcon(category: SearchItem["category"]) {
  if (category === "Produk") return PackageSearch;
  if (category === "Portfolio") return FolderOpen;
  if (category === "Blog") return FileText;

  return MapPin;
}

export default function SearchPage() {
  const [query, setQuery] = useState(getInitialQuery);
  const [activeCategory, setActiveCategory] = useState<SearchCategory>("Semua");

  const results = useMemo(() => {
    const normalizedQuery = normalize(query);

    return searchItems.filter((item) => {
      const matchesCategory =
        activeCategory === "Semua" || item.category === activeCategory;

      if (!matchesCategory) return false;
      if (!normalizedQuery) return true;

      const haystack = normalize(
        `${item.title} ${item.description} ${item.category} ${item.meta}`,
      );

      return haystack.includes(normalizedQuery);
    });
  }, [activeCategory, query]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedQuery = query.trim();
    const nextUrl = trimmedQuery
      ? `/search?q=${encodeURIComponent(trimmedQuery)}`
      : "/search";

    window.history.replaceState(null, "", nextUrl);
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
                Pencarian Dummy Frontend
              </span>
              <h1 className="mt-4 font-serif text-4xl font-black leading-tight tracking-tight text-[#E9D28A] md:text-6xl">
                Cari Konten CV Beton Agung
              </h1>
              <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-[#94A3B8]">
                Fitur ini berjalan di frontend memakai data lokal. Hasil
                pencarian hanya simulasi untuk produk, portfolio, blog, dan
                halaman yang sudah tersedia.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-9 flex flex-col gap-3 border border-[#C5A85C]/22 bg-[#08152c]/45 p-4 sm:flex-row"
            >
              <label className="relative flex-1">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#C5A85C]" />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  type="search"
                  placeholder="Cari: enamel, harga, renovasi, portfolio..."
                  className="w-full border border-[#C5A85C]/20 bg-[#030a16]/65 py-3 pl-11 pr-4 font-sans text-sm text-[#E2E8F0] outline-none transition-colors placeholder:text-[#94A3B8]/45 focus:border-[#C5A85C]/70"
                />
              </label>
              <Button type="submit" size="md" iconRight={<ArrowRight className="h-4 w-4" />}>
                Cari
              </Button>
            </form>
          </Container>
        </section>

        <section className="border-b border-[#C5A85C]/15 bg-[#08152c]/25 py-8">
          <Container>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  type="button"
                  size="xs"
                  variant={activeCategory === category ? "primary" : "ghost"}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-[#030a16] py-14 md:py-18">
          <Container>
            <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="font-sans text-[10px] font-black uppercase tracking-widest text-[#C5A85C]">
                  Hasil Pencarian
                </span>
                <h2 className="mt-3 font-serif text-3xl font-black tracking-tight text-[#E2E8F0] md:text-4xl">
                  {results.length} hasil ditemukan
                </h2>
              </div>
              <p className="max-w-md font-sans text-sm leading-relaxed text-[#94A3B8]">
                {query.trim()
                  ? `Query aktif: "${query.trim()}"`
                  : "Masukkan kata kunci untuk mempersempit hasil."}
              </p>
            </div>

            {results.length > 0 ? (
              <div className="grid gap-4 md:grid-cols-2">
                {results.map((item, index) => {
                  const Icon = getCategoryIcon(item.category);

                  return (
                    <ScrollReveal
                      key={`${item.href}-${item.title}`}
                      delay={(index % 4) * 0.04}
                    >
                      <a
                        href={item.href}
                        className="group flex h-full gap-4 border border-[#C5A85C]/18 bg-[#08152c]/42 p-5 transition-colors hover:border-[#C5A85C]/45"
                      >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#C5A85C]/25 bg-[#030a16]/75 text-[#C5A85C]">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex flex-wrap gap-2 font-sans text-[10px] font-black uppercase tracking-widest text-[#C5A85C]">
                            <span>{item.category}</span>
                            <span className="text-[#94A3B8]/45">/</span>
                            <span className="text-[#94A3B8]">{item.meta}</span>
                          </div>
                          <h3 className="mt-2 font-serif text-xl font-black leading-tight text-[#E2E8F0] transition-colors group-hover:text-[#E9D28A]">
                            {item.title}
                          </h3>
                          <p className="mt-3 line-clamp-2 font-sans text-sm leading-relaxed text-[#94A3B8]">
                            {item.description}
                          </p>
                        </div>
                      </a>
                    </ScrollReveal>
                  );
                })}
              </div>
            ) : (
              <div className="border border-[#C5A85C]/18 bg-[#08152c]/42 p-8 text-center">
                <Search className="mx-auto h-8 w-8 text-[#C5A85C]" />
                <h3 className="mt-4 font-serif text-2xl font-black text-[#E9D28A]">
                  Tidak ada hasil
                </h3>
                <p className="mx-auto mt-3 max-w-md font-sans text-sm leading-relaxed text-[#94A3B8]">
                  Coba gunakan kata kunci seperti enamel, galvalum, harga,
                  renovasi, portfolio, atau garansi.
                </p>
              </div>
            )}
          </Container>
        </section>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
