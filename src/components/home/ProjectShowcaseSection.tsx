import { ArrowRight } from "lucide-react";
import { PROJECTS_DATA } from "../../data";
import { Project } from "../../types";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";

interface ProjectShowcaseSectionProps {
  onProjectSelect: (project: Project) => void;
}

export function ProjectShowcaseSection({
  onProjectSelect,
}: ProjectShowcaseSectionProps) {
  return (
    <section
      id="projects"
      className="py-20 bg-[#030a16]/60 border-b border-[#C5A85C]/15"
    >
      <Container>
        <SectionHeader
          eyebrow="Galeri Hasil Karya"
          title="Project Showcase"
          description="Daftar portfolio rekayasa sasis kubah colosal megah yang rampung dipoles dengan lisensi pabrik bersertifikasi ISO."
          className="max-w-xl"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROJECTS_DATA.map((project) => (
            <div
              key={project.id}
              onClick={() => onProjectSelect(project)}
              className="group relative flex flex-col justify-between border border-[#C5A85C]/15 bg-[#08152c]/40 p-4 rounded-lg transition-all hover:bg-[#08152c]/90 hover:border-[#C5A85C]/50 hover:shadow-[0_0_20px_rgba(197,168,92,0.1)] cursor-pointer"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden bg-[#030a16] rounded-md">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-102"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#030a16]/30" />
                <span className="absolute bottom-3 left-3 border border-[#C5A85C]/35 bg-[#030a16]/90 px-2 py-0.5 font-sans text-[8px] uppercase tracking-widest text-[#C5A85C] rounded-sm">
                  {project.location.split(",")[1]?.trim() || project.location}
                </span>
              </div>

              <div className="flex flex-col flex-1 justify-between p-1 mt-4">
                <div>
                  <h3 className="font-serif text-xs font-bold text-[#E2E8F0] leading-snug line-clamp-2 min-h-8">
                    {project.name}
                  </h3>
                  <p className="font-sans text-[8px] text-[#94A3B8] mt-1.5 uppercase tracking-wider">
                    Bahan:{" "}
                    <span className="text-[#C5A85C] font-semibold">
                      {project.material.split(" (")[0]}
                    </span>
                  </p>
                </div>

                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    onProjectSelect(project);
                  }}
                  variant="outline"
                  size="xs"
                  fullWidth
                  className="mt-4 py-2 group-hover:bg-[#C5A85C] group-hover:text-[#030a16] group-hover:border-transparent"
                  iconRight={<ArrowRight className="h-3 w-3" />}
                >
                  Lihat Proyek
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
