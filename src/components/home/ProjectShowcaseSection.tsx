import { ArrowRight, ChevronLeft, ChevronRight, Monitor, Smartphone, Tablet } from "lucide-react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { PROJECTS_DATA } from "../../data";
import { Project } from "../../types";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";

interface ProjectShowcaseSectionProps {
  onProjectSelect: (project: Project) => void;
}

const viewportModes = [
  { label: "Desktop", icon: Monitor },
  { label: "Tablet", icon: Tablet },
  { label: "Mobile", icon: Smartphone },
];

export function ProjectShowcaseSection({
  onProjectSelect,
}: ProjectShowcaseSectionProps) {
  return (
    <section
      id="projects"
      className="overflow-x-hidden py-20 bg-[#030a16]/60 border-b border-[#C5A85C]/15"
    >
      <Container>
        <SectionHeader
          eyebrow="Galeri Hasil Karya"
          title="Project Showcase"
          description="Daftar portfolio rekayasa sasis kubah colosal megah yang rampung dipoles dengan lisensi pabrik bersertifikasi ISO."
          className="max-w-xl"
        />

        <div className="relative pt-8">
          <div className="absolute right-0 top-0 z-10 flex items-center gap-1.5 rounded-md border border-[#C5A85C]/20 bg-[#030a16]/90 p-1 shadow-[0_16px_40px_rgba(0,0,0,0.28)] backdrop-blur-md">
            {viewportModes.map(({ label, icon: Icon }) => (
              <span
                key={label}
                className="inline-flex h-8 items-center gap-1.5 rounded-sm px-2 font-sans text-[9px] font-semibold uppercase tracking-wider text-[#E2E8F0]/80"
              >
                <Icon className="h-3.5 w-3.5 text-[#C5A85C]" />
                <span className="hidden sm:inline">{label}</span>
              </span>
            ))}
          </div>

          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={18}
            slidesPerView={1.08}
            navigation={{
              prevEl: ".project-showcase-prev",
              nextEl: ".project-showcase-next",
            }}
            pagination={{ clickable: true }}
            a11y={{
              prevSlideMessage: "Proyek sebelumnya",
              nextSlideMessage: "Proyek berikutnya",
              paginationBulletMessage: "Buka proyek {{index}}",
            }}
            breakpoints={{
              640: {
                slidesPerView: 2.08,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3.15,
                spaceBetween: 22,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            className="project-showcase-swiper pb-12"
          >
            {PROJECTS_DATA.map((project, index) => (
              <SwiperSlide key={project.id} className="!h-auto py-4">
                <div
                  onClick={() => onProjectSelect(project)}
                  className="group relative flex h-full min-h-[370px] cursor-pointer flex-col justify-between overflow-hidden rounded-lg border border-[#C5A85C]/15 bg-[#08152c]/70 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.25)] transition-colors duration-300 hover:bg-[#08152c]/95 hover:border-[#C5A85C]/50"
                >
                  <span className="absolute right-4 top-4 z-10 rounded-sm border border-[#C5A85C]/30 bg-[#030a16]/90 px-2 py-1 font-mono text-[10px] font-medium text-[#C5A85C]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="relative aspect-4/3 w-full overflow-hidden rounded-md bg-[#030a16]">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="h-full w-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-[#030a16]/30" />
                    <span className="absolute bottom-3 left-3 rounded-sm border border-[#C5A85C]/35 bg-[#030a16]/90 px-2 py-0.5 font-sans text-[8px] uppercase tracking-widest text-[#C5A85C]">
                      {project.location.split(",")[1]?.trim() || project.location}
                    </span>
                  </div>

                  <div className="mt-4 flex flex-1 flex-col justify-between p-1">
                    <div>
                      <h3 className="min-h-10 font-serif text-sm font-bold leading-snug text-[#E2E8F0] line-clamp-2">
                        {project.name}
                      </h3>
                      <p className="mt-2 font-sans text-[8px] uppercase tracking-wider text-[#94A3B8]">
                        Bahan:{" "}
                        <span className="font-semibold text-[#C5A85C]">
                          {project.material.split(" (")[0]}
                        </span>
                      </p>
                      <div className="mt-4 grid grid-cols-2 gap-2 font-sans text-[10px] text-[#94A3B8]">
                        <span className="rounded-sm border border-[#C5A85C]/10 bg-[#030a16]/45 px-2 py-1.5">
                          Diameter{" "}
                          <strong className="text-[#E2E8F0]">{project.diameter}m</strong>
                        </span>
                        <span className="rounded-sm border border-[#C5A85C]/10 bg-[#030a16]/45 px-2 py-1.5">
                          Tahun <strong className="text-[#E2E8F0]">{project.year}</strong>
                        </span>
                      </div>
                    </div>

                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        onProjectSelect(project);
                      }}
                      variant="outline"
                      size="xs"
                      fullWidth
                      className="mt-5 py-2 group-hover:bg-[#C5A85C] group-hover:text-[#030a16] group-hover:border-transparent"
                      iconRight={<ArrowRight className="h-3 w-3" />}
                    >
                      Lihat Proyek
                    </Button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="pointer-events-none absolute inset-y-0 left-2 right-2 z-10 hidden items-center justify-between lg:flex">
            <button
              type="button"
              aria-label="Proyek sebelumnya"
              className="project-showcase-prev pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-[#C5A85C]/25 bg-[#030a16]/90 text-[#C5A85C] shadow-[0_14px_34px_rgba(0,0,0,0.3)] transition hover:border-[#C5A85C]/60 hover:bg-[#C5A85C] hover:text-[#030a16]"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Proyek berikutnya"
              className="project-showcase-next pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-[#C5A85C]/25 bg-[#030a16]/90 text-[#C5A85C] shadow-[0_14px_34px_rgba(0,0,0,0.3)] transition hover:border-[#C5A85C]/60 hover:bg-[#C5A85C] hover:text-[#030a16]"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
