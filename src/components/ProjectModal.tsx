import { X, Calendar, Minimize, Maximize2 } from "lucide-react";
import { Project } from "../types";
import { Button, ButtonLink } from "./ui/Button";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const whatsappMsg = `Halo CV Beton Agung, saya sangat mengagumi hasil pengerjaan proyek kubah di "${project.name}" (${project.location}). Saya ingin menanyakan estimasi harga dan spesifikasi teknis sejenis untuk proyek masjid baru kami.`;
  const whatsappUrl = `https://wa.me/6282324547755?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#030a16]/90 backdrop-blur-md"
      onClick={onClose}
    >
      {/* Modal Card */}
      <div
        className="relative w-full max-w-4xl overflow-hidden border border-[#C5A85C]/35 bg-[#08152c] shadow-[0_0_50px_rgba(197,168,92,0.15)] rounded-xl md:grid md:grid-cols-2"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Side: Large Project Image */}
        <div className="relative h-64 md:h-full bg-[#030a16]">
          <img
            src={project.image}
            alt={project.name}
            className="h-full w-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#030a16] via-[#030a16]/30 to-transparent" />
          <div className="absolute bottom-4 left-4 border border-[#C5A85C]/40 bg-[#030a16]/90 px-3.5 py-1.5 font-sans text-[10px] uppercase tracking-widest text-[#C5A85C] rounded">
            {project.location}
          </div>
        </div>

        {/* Right Side: Specifications and Description */}
        <div className="flex flex-col p-6 md:p-8 justify-between max-h-[85vh] overflow-y-auto">
          {/* Header & Dismiss Button */}
          <div>
            <div className="flex items-start justify-between pb-4 border-b border-[#C5A85C]/15">
              <div>
                <span className="font-sans text-[9px] font-black tracking-[0.2em] text-[#C5A85C] uppercase block">
                  Studi Kasus Proyek Eksklusif
                </span>
                <h3 className="font-serif text-xl md:text-2xl font-black text-[#E2E8F0] mt-1 leading-tight">
                  {project.name}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="rounded-full border border-[#C5A85C]/25 bg-[#030a16] p-1.5 text-[#C5A85C] hover:bg-[#C5A85C] hover:text-[#030a16] transition-colors cursor-pointer"
                aria-label="Tutup Detail"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Description */}
            <p className="font-sans text-xs text-[#94A3B8] leading-relaxed mt-4 font-light">
              {project.description}
            </p>

            {/* Quick Specs Icons */}
            <div className="grid grid-cols-3 gap-2 py-4 mt-6 border-t border-b border-[#C5A85C]/15">
              <div className="flex flex-col items-center p-2 bg-[#030a16]/50 border border-[#C5A85C]/15 rounded-lg text-center">
                <Calendar className="h-4 w-4 text-[#C5A85C] mb-1 animate-pulse" />
                <span className="font-sans text-[8px] text-[#94A3B8] uppercase tracking-wider">
                  Tahun Selesai
                </span>
                <span className="font-sans text-[10px] font-bold text-[#E2E8F0]">
                  {project.year}
                </span>
              </div>
              <div className="flex flex-col items-center p-2 bg-[#030a16]/50 border border-[#C5A85C]/15 rounded-lg text-center">
                <Minimize className="h-4 w-4 text-[#C5A85C] mb-1" />
                <span className="font-sans text-[8px] text-[#94A3B8] uppercase tracking-wider">
                  Diameter
                </span>
                <span className="font-sans text-[10px] font-bold text-[#E2E8F0]">
                  {project.diameter} m
                </span>
              </div>
              <div className="flex flex-col items-center p-2 bg-[#030a16]/50 border border-[#C5A85C]/15 rounded-lg text-center">
                <Maximize2 className="h-4 w-4 text-[#C5A85C] mb-1" />
                <span className="font-sans text-[8px] text-[#94A3B8] uppercase tracking-wider">
                  Tinggi
                </span>
                <span className="font-sans text-[10px] font-bold text-[#E2E8F0]">
                  {project.height} m
                </span>
              </div>
            </div>

            {/* Comprehensive Technical List */}
            <div className="mt-6">
              <h4 className="font-sans text-[9px] font-black tracking-widest text-[#C5A85C] uppercase mb-3">
                Spesifikasi Teknis Konstruksi
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 font-sans text-[11px]">
                {project.specifications.map((spec, i) => (
                  <div
                    key={i}
                    className="flex justify-between py-1 border-b border-[#C5A85C]/10"
                  >
                    <span className="text-[#94A3B8]">{spec.label}</span>
                    <span className="font-bold text-[#E2E8F0]">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#C5A85C]/15">
            <ButtonLink
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center"
            >
              Konsultasi Kubah Ini (WhatsApp)
            </ButtonLink>
            <Button onClick={onClose} variant="ghost">
              Kembali
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
