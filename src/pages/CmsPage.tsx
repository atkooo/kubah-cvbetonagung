import {
  Archive,
  Bell,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Edit3,
  Eye,
  FileText,
  FolderKanban,
  Gauge,
  Image,
  LayoutDashboard,
  MessageSquareText,
  MoreHorizontal,
  PenLine,
  Plus,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Upload,
} from "lucide-react";
import projectAlAkbarImage from "../assets/images/project_al_akbar_1780063109705.png";
import projectAlFalahImage from "../assets/images/project_al_falah_1780063147603.png";
import projectAlJabbarImage from "../assets/images/project_al_jabbar_1780063127068.png";
import mosqueDomeHeroImage from "../assets/images/mosque_dome_hero_1780063085853.png";
import { cn } from "../lib/classNames";

const sidebarItems = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Halaman Website", icon: FileText },
  { label: "Produk Kubah", icon: Archive },
  { label: "Portfolio", icon: FolderKanban },
  { label: "Blog & Artikel", icon: PenLine },
  { label: "Media Library", icon: Image },
  { label: "Pesan Masuk", icon: MessageSquareText },
  { label: "Pengaturan", icon: Settings },
];

const contentStats = [
  { label: "Halaman Aktif", value: "18", helper: "Homepage, produk, tentang, harga" },
  { label: "Draft Konten", value: "07", helper: "Menunggu review editorial" },
  { label: "Media Kubah", value: "124", helper: "Foto proyek dan detail panel" },
  { label: "SEO Siap", value: "91%", helper: "Meta title dan description terisi" },
];

const pageRows = [
  {
    title: "Homepage Kubah Masjid",
    type: "Landing Page",
    owner: "Admin Konten",
    status: "Published",
    updated: "31 Mei 2026",
  },
  {
    title: "Kubah Masjid Enamel",
    type: "Produk",
    owner: "Tim Produk",
    status: "Review",
    updated: "31 Mei 2026",
  },
  {
    title: "Portfolio Proyek Masjid",
    type: "Galeri",
    owner: "Tim Lapangan",
    status: "Published",
    updated: "30 Mei 2026",
  },
  {
    title: "Panduan Harga Kubah",
    type: "Artikel",
    owner: "SEO Writer",
    status: "Draft",
    updated: "29 Mei 2026",
  },
];

const mediaItems = [
  { image: mosqueDomeHeroImage, title: "Hero kubah utama", size: "1920 x 1280" },
  { image: projectAlAkbarImage, title: "Kubah enamel hijau", size: "1440 x 1080" },
  { image: projectAlFalahImage, title: "Kubah stainless gold", size: "1440 x 1080" },
  { image: projectAlJabbarImage, title: "Detail proyek masjid", size: "1440 x 1080" },
];

const editorialTasks = [
  "Lengkapi alt text semua foto portfolio",
  "Review copy CTA konsultasi WhatsApp",
  "Update FAQ material enamel dan galvalum",
  "Siapkan banner promo survey lokasi",
];

function StatusPill({ status }: { status: string }) {
  const statusClass =
    status === "Published"
      ? "border-emerald-200 bg-emerald-50 text-emerald-700"
      : status === "Review"
        ? "border-amber-200 bg-amber-50 text-amber-700"
        : "border-slate-200 bg-slate-50 text-slate-600";

  return (
    <span
      className={cn(
        "inline-flex min-w-20 items-center justify-center rounded-full border px-2.5 py-1 text-[11px] font-bold",
        statusClass,
      )}
    >
      {status}
    </span>
  );
}

export default function CmsPage() {
  return (
    <div className="min-h-screen bg-[#f5f2ea] font-sans text-slate-900">
      <div className="flex min-h-screen">
        <aside className="hidden w-72 shrink-0 border-r border-slate-200 bg-[#101827] text-white lg:flex lg:flex-col">
          <div className="border-b border-white/10 px-6 py-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-[#d7b85a] text-[#101827]">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-black uppercase tracking-[0.16em]">
                  Kubah CMS
                </p>
                <p className="mt-1 text-xs text-slate-300">CV Beton Agung</p>
              </div>
            </div>
          </div>

          <nav className="flex-1 space-y-1 px-4 py-5">
            {sidebarItems.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.label}
                  type="button"
                  className={cn(
                    "flex h-11 w-full items-center gap-3 rounded-md px-3 text-left text-sm font-semibold transition-colors",
                    item.active
                      ? "bg-[#d7b85a] text-[#101827]"
                      : "text-slate-300 hover:bg-white/[0.08] hover:text-white",
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="m-4 rounded-md border border-white/10 bg-white/[0.06] p-4">
            <div className="flex items-center gap-2 text-sm font-bold text-white">
              <ShieldCheck className="h-4 w-4 text-[#d7b85a]" />
              Mode UI/UX
            </div>
            <p className="mt-2 text-xs leading-5 text-slate-300">
              Prototype frontend statis untuk simulasi manajemen konten website
              kubah.
            </p>
          </div>
        </aside>

        <main className="min-w-0 flex-1">
          <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/[0.88] backdrop-blur">
            <div className="flex min-h-18 flex-col gap-4 px-5 py-4 lg:flex-row lg:items-center lg:justify-between lg:px-8">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#9b7b28]">
                  Content Management
                </p>
                <h1 className="mt-1 text-2xl font-black tracking-tight text-slate-950">
                  Dashboard Konten Website Kubah
                </h1>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <label className="relative min-w-60 flex-1 lg:flex-none">
                  <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    type="search"
                    placeholder="Cari halaman, artikel, media..."
                    className="h-10 w-full rounded-md border border-slate-200 bg-slate-50 pl-9 pr-3 text-sm outline-none transition-colors placeholder:text-slate-400 focus:border-[#c5a85c] focus:bg-white"
                  />
                </label>
                <button
                  type="button"
                  aria-label="Notifikasi"
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-600 hover:border-[#c5a85c] hover:text-slate-950"
                >
                  <Bell className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  className="inline-flex h-10 items-center gap-2 rounded-md bg-[#101827] px-4 text-sm font-bold text-white hover:bg-[#1c2a3f]"
                >
                  <Plus className="h-4 w-4" />
                  Konten Baru
                </button>
              </div>
            </div>
          </header>

          <div className="px-5 py-6 lg:px-8">
            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {contentStats.map((item) => (
                <article
                  key={item.label}
                  className="rounded-md border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                    {item.label}
                  </p>
                  <strong className="mt-3 block text-3xl font-black tracking-tight text-slate-950">
                    {item.value}
                  </strong>
                  <p className="mt-2 text-sm leading-5 text-slate-500">
                    {item.helper}
                  </p>
                </article>
              ))}
            </section>

            <section className="mt-6 grid gap-6 xl:grid-cols-12">
              <div className="xl:col-span-8">
                <div className="rounded-md border border-slate-200 bg-white shadow-sm">
                  <div className="flex flex-col gap-4 border-b border-slate-200 p-5 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h2 className="text-lg font-black text-slate-950">
                        Struktur Konten Frontend
                      </h2>
                      <p className="mt-1 text-sm text-slate-500">
                        Tampilan pengelolaan halaman kubah, produk, artikel, dan
                        portfolio.
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        className="inline-flex h-9 items-center gap-2 rounded-md border border-slate-200 bg-white px-3 text-sm font-bold text-slate-700 hover:border-[#c5a85c]"
                      >
                        <Eye className="h-4 w-4" />
                        Preview
                      </button>
                      <button
                        type="button"
                        className="inline-flex h-9 items-center gap-2 rounded-md bg-[#d7b85a] px-3 text-sm font-black text-[#101827] hover:bg-[#c6a84d]"
                      >
                        <Edit3 className="h-4 w-4" />
                        Edit UI
                      </button>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[760px] border-collapse text-left text-sm">
                      <thead className="bg-slate-50 text-xs uppercase tracking-[0.12em] text-slate-500">
                        <tr>
                          <th className="px-5 py-3 font-black">Konten</th>
                          <th className="px-5 py-3 font-black">Tipe</th>
                          <th className="px-5 py-3 font-black">PIC</th>
                          <th className="px-5 py-3 font-black">Status</th>
                          <th className="px-5 py-3 font-black">Update</th>
                          <th className="px-5 py-3 font-black">Aksi</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {pageRows.map((row) => (
                          <tr key={row.title} className="hover:bg-slate-50/80">
                            <td className="px-5 py-4">
                              <div className="font-black text-slate-950">
                                {row.title}
                              </div>
                              <div className="mt-1 text-xs text-slate-500">
                                /cms/content/{row.title.toLowerCase().replaceAll(" ", "-")}
                              </div>
                            </td>
                            <td className="px-5 py-4 text-slate-600">{row.type}</td>
                            <td className="px-5 py-4 text-slate-600">{row.owner}</td>
                            <td className="px-5 py-4">
                              <StatusPill status={row.status} />
                            </td>
                            <td className="px-5 py-4 text-slate-600">{row.updated}</td>
                            <td className="px-5 py-4">
                              <button
                                type="button"
                                aria-label={`Opsi ${row.title}`}
                                className="flex h-8 w-8 items-center justify-center rounded-md text-slate-500 hover:bg-slate-100 hover:text-slate-950"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mt-6 rounded-md border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="grid gap-5 lg:grid-cols-12">
                    <div className="lg:col-span-7">
                      <div className="flex items-center gap-2">
                        <Gauge className="h-5 w-5 text-[#9b7b28]" />
                        <h2 className="text-lg font-black text-slate-950">
                          Editor Konten Produk
                        </h2>
                      </div>
                      <div className="mt-5 grid gap-4">
                        <label className="grid gap-2">
                          <span className="text-xs font-black uppercase tracking-[0.12em] text-slate-500">
                            Judul Halaman
                          </span>
                          <input
                            value="Kubah Masjid Enamel"
                            readOnly
                            className="h-11 rounded-md border border-slate-200 bg-slate-50 px-3 text-sm font-semibold text-slate-900"
                          />
                        </label>
                        <label className="grid gap-2">
                          <span className="text-xs font-black uppercase tracking-[0.12em] text-slate-500">
                            Meta Description
                          </span>
                          <textarea
                            value="Kubah masjid enamel CV Beton Agung untuk proyek masjid yang membutuhkan warna tajam, daya tahan tinggi, dan finishing rapi."
                            readOnly
                            rows={4}
                            className="resize-none rounded-md border border-slate-200 bg-slate-50 px-3 py-3 text-sm leading-6 text-slate-700"
                          />
                        </label>
                        <div className="grid gap-4 md:grid-cols-2">
                          <label className="grid gap-2">
                            <span className="text-xs font-black uppercase tracking-[0.12em] text-slate-500">
                              Kategori
                            </span>
                            <div className="flex h-11 items-center justify-between rounded-md border border-slate-200 bg-slate-50 px-3 text-sm font-semibold text-slate-700">
                              Produk Kubah
                              <ChevronDown className="h-4 w-4 text-slate-400" />
                            </div>
                          </label>
                          <label className="grid gap-2">
                            <span className="text-xs font-black uppercase tracking-[0.12em] text-slate-500">
                              Status Publish
                            </span>
                            <div className="flex h-11 items-center justify-between rounded-md border border-slate-200 bg-slate-50 px-3 text-sm font-semibold text-slate-700">
                              Published
                              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>

                    <aside className="lg:col-span-5">
                      <div className="overflow-hidden rounded-md border border-slate-200 bg-slate-950 text-white">
                        <img
                          src={projectAlAkbarImage}
                          alt="Preview kubah masjid enamel"
                          className="aspect-4/3 w-full object-cover"
                        />
                        <div className="p-4">
                          <p className="text-xs font-black uppercase tracking-[0.14em] text-[#d7b85a]">
                            Live Preview
                          </p>
                          <h3 className="mt-2 text-xl font-black">
                            Kubah Masjid Enamel
                          </h3>
                          <p className="mt-2 text-sm leading-6 text-slate-300">
                            Preview tampilan konten sebelum masuk ke halaman
                            frontend publik.
                          </p>
                        </div>
                      </div>
                    </aside>
                  </div>
                </div>
              </div>

              <aside className="space-y-6 xl:col-span-4">
                <section className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h2 className="text-lg font-black text-slate-950">
                        Media Library
                      </h2>
                      <p className="mt-1 text-sm text-slate-500">
                        Aset visual untuk halaman kubah.
                      </p>
                    </div>
                    <button
                      type="button"
                      aria-label="Upload media"
                      className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-600 hover:border-[#c5a85c] hover:text-slate-950"
                    >
                      <Upload className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {mediaItems.map((item) => (
                      <article
                        key={item.title}
                        className="overflow-hidden rounded-md border border-slate-200 bg-slate-50"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="aspect-4/3 w-full object-cover"
                        />
                        <div className="p-3">
                          <p className="truncate text-xs font-black text-slate-950">
                            {item.title}
                          </p>
                          <p className="mt-1 text-[11px] text-slate-500">
                            {item.size}
                          </p>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>

                <section className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-2">
                    <Clock3 className="h-5 w-5 text-[#9b7b28]" />
                    <h2 className="text-lg font-black text-slate-950">
                      Checklist Editorial
                    </h2>
                  </div>
                  <div className="mt-4 space-y-3">
                    {editorialTasks.map((task, index) => (
                      <label
                        key={task}
                        className="flex items-start gap-3 rounded-md border border-slate-200 bg-slate-50 p-3 text-sm leading-5 text-slate-700"
                      >
                        <input
                          type="checkbox"
                          defaultChecked={index < 2}
                          className="mt-1 h-4 w-4 rounded border-slate-300 accent-[#d7b85a]"
                        />
                        <span>{task}</span>
                      </label>
                    ))}
                  </div>
                </section>

                <section className="rounded-md border border-slate-200 bg-[#101827] p-5 text-white shadow-sm">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-[#d7b85a]">
                    Frontend Only
                  </p>
                  <h2 className="mt-2 text-xl font-black">
                    Tidak ada integrasi backend
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    Semua elemen di halaman ini adalah rancangan UI statis untuk
                    kebutuhan presentasi alur CMS konten kubah.
                  </p>
                </section>
              </aside>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
