import { useMemo, useState } from "react";
import {
  ArrowRight,
  Building2,
  Calendar,
  CheckCircle2,
  MapPin,
  Ruler,
} from "lucide-react";
import Header from "../components/Header";
import ProjectModal from "../components/ProjectModal";
import Footer from "../components/Footer";
import { FloatingActions } from "../components/home/FloatingActions";
import { Button, ButtonLink } from "../components/ui/Button";
import { Container } from "../components/ui/Container";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import { PROJECTS_DATA } from "../data";
import type { Project } from "../types";

const materialFilters = ["Semua", "Enamel", "Kuningan", "Stainless", "Galvalum"];

function getMaterialGroup(material: string) {
  const normalized = material.toLowerCase();

  if (normalized.includes("enamel")) return "Enamel";
  if (normalized.includes("kuningan") || normalized.includes("brass")) return "Kuningan";
  if (normalized.includes("stainless") || normalized.includes("gold")) return "Stainless";
  if (normalized.includes("galvalum")) return "Galvalum";

  return "Lainnya";
}

const stats = [
  { label: "Proyek Referensi", value: `${PROJECTS_DATA.length}+` },
  {
    label: "Diameter Terbesar",
    value: `${Math.max(...PROJECTS_DATA.map((project) => project.diameter))}m`,
  },
  {
    label: "Area Proyek",
    value: `${new Set(PROJECTS_DATA.map((project) => project.location.split(",").pop()?.trim())).size}+`,
  },
];

export default function PortfolioPage() {
  const [selectedMaterial, setSelectedMaterial] = useState("Semua");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (selectedMaterial === "Semua") {
      return PROJECTS_DATA;
    }

    return PROJECTS_DATA.filter(
      (project) => getMaterialGroup(project.material) === selectedMaterial,
    );
  }, [selectedMaterial]);

  const featuredProject = PROJECTS_DATA[0];

  return (
    <div className="min-h-screen bg-[#030a16] font-serif text-[#E2E8F0] selection:bg-[#C5A85C] selection:text-[#030a16]">
      <Header />

      <main>
        <section className="relative overflow-hidden border-b border-[#C5A85C]/15 bg-[#030a16]">
          <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[linear-gradient(90deg,rgba(3,10,22,0),rgba(197,168,92,0.08))] lg:block" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-[#C5A85C]/45" />

          <Container className="relative grid gap-10 py-14 md:py-18 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <span className="font-sans text-[10px] font-black uppercase tracking-widest text-[#C5A85C]">
                Portfolio CV Beton Agung
              </span>
              <h1 className="mt-4 max-w-3xl font-serif text-4xl font-black leading-tight tracking-tight text-[#E9D28A] md:text-6xl">
                Hasil Pengerjaan Kubah Masjid
              </h1>
              <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-[#94A3B8]">
                Kumpulan referensi proyek kubah masjid dengan variasi material,
                ukuran, bentuk, dan karakter arsitektur. Gunakan halaman ini
                untuk melihat kualitas finishing dan cakupan pengerjaan tim.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink
                  href="/kontak"
                  size="md"
                  iconRight={<ArrowRight className="h-4 w-4" />}
                >
                  Konsultasi Proyek
                </ButtonLink>
                <ButtonLink href="#daftar-portfolio" variant="outline" size="md">
                  Lihat Portfolio
                </ButtonLink>
              </div>
            </div>

            <div className="lg:col-span-6">
              <button
                type="button"
                onClick={() => setSelectedProject(featuredProject)}
                className="group relative w-full overflow-hidden border border-[#C5A85C]/25 bg-[#08152c]/45 text-left shadow-[0_24px_70px_rgba(0,0,0,0.36)]"
              >
                <img
                  src={featuredProject.image}
                  alt={featuredProject.name}
                  className="aspect-4/3 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,10,22,0.05),rgba(3,10,22,0.82))]" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="font-sans text-[10px] font-black uppercase tracking-widest text-[#C5A85C]">
                    Proyek Unggulan
                  </span>
                  <h2 className="mt-2 max-w-xl font-serif text-2xl font-black text-[#E2E8F0] md:text-3xl">
                    {featuredProject.name}
                  </h2>
                  <div className="mt-4 flex flex-wrap gap-2 font-sans text-[10px] uppercase tracking-wider text-[#E2E8F0]/85">
                    <span className="border border-[#C5A85C]/25 bg-[#030a16]/80 px-3 py-1">
                      {featuredProject.location}
                    </span>
                    <span className="border border-[#C5A85C]/25 bg-[#030a16]/80 px-3 py-1">
                      Diameter {featuredProject.diameter}m
                    </span>
                  </div>
                </div>
              </button>
            </div>
          </Container>
        </section>

        <section className="border-b border-[#C5A85C]/15 bg-[#08152c]/25 py-10">
          <Container>
            <div className="grid gap-4 md:grid-cols-3">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="border border-[#C5A85C]/18 bg-[#030a16]/55 p-5"
                >
                  <span className="font-sans text-[10px] font-black uppercase tracking-widest text-[#C5A85C]">
                    {item.label}
                  </span>
                  <strong className="mt-2 block font-serif text-4xl font-black text-[#E9D28A]">
                    {item.value}
                  </strong>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section
          id="daftar-portfolio"
          className="border-b border-[#C5A85C]/15 bg-[#030a16] py-14 md:py-18"
        >
          <Container>
            <div className="mb-9 grid gap-6 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <span className="font-sans text-[10px] font-black uppercase tracking-widest text-[#C5A85C]">
                  Daftar Portfolio
                </span>
                <h2 className="mt-3 max-w-2xl font-serif text-3xl font-black tracking-tight text-[#E2E8F0] md:text-4xl">
                  Referensi Proyek Berdasarkan Material dan Ukuran
                </h2>
              </div>

              <div className="flex flex-wrap gap-2 lg:col-span-5 lg:justify-end">
                {materialFilters.map((filter) => (
                  <Button
                    key={filter}
                    type="button"
                    variant={selectedMaterial === filter ? "primary" : "ghost"}
                    size="xs"
                    onClick={() => setSelectedMaterial(filter)}
                  >
                    {filter}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <ScrollReveal key={project.id} delay={(index % 3) * 0.06}>
                  <article className="group flex h-full flex-col overflow-hidden border border-[#C5A85C]/18 bg-[#08152c]/42 transition-colors hover:border-[#C5A85C]/45">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="relative overflow-hidden bg-[#030a16] text-left"
                    >
                      <img
                        src={project.image}
                        alt={project.name}
                        className="aspect-4/3 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,10,22,0),rgba(3,10,22,0.68))]" />
                      <span className="absolute left-4 top-4 border border-[#C5A85C]/35 bg-[#030a16]/85 px-3 py-1 font-mono text-[10px] font-bold text-[#C5A85C]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="absolute bottom-4 left-4 border border-[#C5A85C]/35 bg-[#030a16]/85 px-3 py-1 font-sans text-[9px] font-black uppercase tracking-widest text-[#C5A85C]">
                        {getMaterialGroup(project.material)}
                      </span>
                    </button>

                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-serif text-xl font-black leading-tight text-[#E2E8F0]">
                        {project.name}
                      </h3>
                      <p className="mt-3 line-clamp-3 font-sans text-sm leading-relaxed text-[#94A3B8]">
                        {project.description}
                      </p>

                      <div className="mt-5 grid gap-2 font-sans text-xs text-[#94A3B8]">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 shrink-0 text-[#C5A85C]" />
                          <span>{project.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Building2 className="h-4 w-4 shrink-0 text-[#C5A85C]" />
                          <span>{project.material}</span>
                        </div>
                      </div>

                      <div className="mt-5 grid grid-cols-3 gap-2 font-sans text-[10px] text-[#94A3B8]">
                        <span className="border border-[#C5A85C]/12 bg-[#030a16]/45 p-2">
                          <Ruler className="mb-1 h-3.5 w-3.5 text-[#C5A85C]" />
                          {project.diameter}m
                        </span>
                        <span className="border border-[#C5A85C]/12 bg-[#030a16]/45 p-2">
                          <CheckCircle2 className="mb-1 h-3.5 w-3.5 text-[#C5A85C]" />
                          {project.height}m
                        </span>
                        <span className="border border-[#C5A85C]/12 bg-[#030a16]/45 p-2">
                          <Calendar className="mb-1 h-3.5 w-3.5 text-[#C5A85C]" />
                          {project.year}
                        </span>
                      </div>

                      <Button
                        type="button"
                        variant="outline"
                        size="xs"
                        fullWidth
                        className="mt-6"
                        onClick={() => setSelectedProject(project)}
                        iconRight={<ArrowRight className="h-3 w-3" />}
                      >
                        Lihat Detail
                      </Button>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-[#08152c]/25 py-14 md:py-18">
          <Container>
            <div className="grid gap-8 border border-[#C5A85C]/22 bg-[#030a16]/65 p-6 md:p-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <span className="font-sans text-[10px] font-black uppercase tracking-widest text-[#C5A85C]">
                  Mulai Proyek Baru
                </span>
                <h2 className="mt-3 font-serif text-3xl font-black text-[#E9D28A] md:text-4xl">
                  Ingin Membuat Kubah dengan Referensi Serupa?
                </h2>
                <p className="mt-4 max-w-2xl font-sans text-sm leading-relaxed text-[#94A3B8]">
                  Kirim lokasi, ukuran ring balok, diameter perkiraan, dan
                  material pilihan. Tim akan membantu membaca kebutuhan awal
                  sebelum masuk ke estimasi.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:justify-end">
                <ButtonLink href="/kontak" size="md">
                  Minta Penawaran
                </ButtonLink>
                <ButtonLink href="/harga" variant="outline" size="md">
                  Cek Harga
                </ButtonLink>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
      <FloatingActions />

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
