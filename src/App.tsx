import { useState } from "react";
import Header from "./components/Header";
import CostCalculator from "./components/CostCalculator";
import ProjectModal from "./components/ProjectModal";
import Footer from "./components/Footer";
import { PROJECTS_DATA } from "./data";
import { Project } from "./types";
import {
  ShieldCheck,
  Award,
  Clock,
  Users,
  Compass,
  Wrench,
  Sparkles,
  History,
  CheckCircle2,
  Leaf,
  Calendar,
  Phone,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const heroWhatsappUrl =
    "https://wa.me/6281235567899?text=Halo%20CV%20Beton%20Agung,%20saya%20tertarik%2520untuk%20berkonsultasi%20mengenai%20pembuatan%20kubah%2520masjid%20eksklusif.";

  // Internal smooth navigation anchor handler
  const handleNavScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="home"
      className="min-h-screen bg-[#030a16] font-serif text-[#E2E8F0] selection:bg-[#C5A85C] selection:text-[#030a16]"
    >
      {/* Top Header */}
      <Header onNavClick={handleNavScroll} />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative w-full border-b border-[#C5A85C]/15 overflow-hidden py-16 md:py-24 bg-[#030a16]"
      >
        {/* Subtle luminous halo backgrounds */}
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#C5A85C]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#08152c]/40 rounded-full blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Block text, metrics */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="font-sans text-[10px] font-bold tracking-[0.25em] text-[#C5A85C] uppercase flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C5A85C] animate-pulse" />
              Kontraktor Spesialis Kubah Masjid Premium
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#E2E8F0] leading-[1.05]">
              Crafting Architectural
              <br />
              <span className="text-[#C5A85C]">Legacies: Premium</span>
              <br />
              Mosque Domes
            </h1>

            <p className="font-serif text-sm md:text-base text-[#94A3B8] leading-relaxed max-w-xl font-light">
              Excellence in Design, Construction, and Modern Islamic
              Architecture. Kami merancang kubah bernilai seni tinggi tahan
              gempa menggunakan Tembaga Eropa, Kuningan Tempa tangan, serta Baja
              Enamel SPCC premium.
            </p>

            {/* Direct WhatsApp Consultation CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <a
                href={heroWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border border-transparent bg-[#C5A85C] hover:bg-[#D4AF37] px-6 py-3.5 font-sans text-[10px] tracking-widest font-bold uppercase text-[#030a16] transition-all hover:shadow-[0_0_20px_rgba(197,168,92,0.3)] shadow-sm"
              >
                <Phone className="h-3.5 w-3.5" />
                <span>WhatsApp Kami untuk Konsultasi Eksklusif</span>
              </a>
              <button
                onClick={() => handleNavScroll("estimator-section")}
                className="flex items-center justify-center gap-1.5 rounded-full border border-[#C5A85C]/35 bg-[#08152c] px-6 py-3.5 font-sans text-[10px] tracking-widest font-bold uppercase text-[#E2E8F0] hover:bg-[#0c2142] hover:border-[#C5A85C]/50 transition-colors"
              >
                <span>Estimator Harga</span>
                <ChevronRight className="h-3 w-3 text-[#C5A85C]" />
              </button>
            </div>

            {/* Metrics horizontal panel */}
            <div className="grid grid-cols-3 gap-4 pt-8 mt-4 border-t border-[#C5A85C]/15">
              <div className="border border-[#C5A85C]/30 rounded-lg bg-[#08152c]/55 p-4 text-center shadow-[0_0_15px_rgba(197,168,92,0.02)]">
                <span className="font-serif text-2xl md:text-3xl font-black text-[#C5A85C] block">
                  25+
                </span>
                <span className="font-sans text-[9px] text-[#94A3B8] uppercase tracking-widest font-bold leading-tight block mt-1">
                  Years of Excellence
                </span>
              </div>
              <div className="border border-[#C5A85C]/30 rounded-lg bg-[#08152c]/55 p-4 text-center shadow-[0_0_15px_rgba(197,168,92,0.02)]">
                <span className="font-serif text-2xl md:text-3xl font-black text-[#C5A85C] block">
                  500+
                </span>
                <span className="font-sans text-[9px] text-[#94A3B8] uppercase tracking-widest font-bold leading-tight block mt-1">
                  Projects Completed
                </span>
              </div>
              <div className="border border-[#C5A85C]/30 rounded-lg bg-[#08152c]/55 p-4 text-center shadow-[0_0_15px_rgba(197,168,92,0.02)]">
                <span className="font-serif text-2xl md:text-3xl font-black text-[#C5A85C] block">
                  100%
                </span>
                <span className="font-sans text-[9px] text-[#94A3B8] uppercase tracking-widest font-bold leading-tight block mt-1">
                  Satisfaction Guaranteed
                </span>
              </div>
            </div>
          </div>

          {/* Right dome image representation */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Elegant golden radial aura glow behind the dome copy */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,168,92,0.12)_0%,transparent_70%)] pointer-events-none" />
            {/* Design halo rings */}
            <div className="absolute h-80 w-80 border border-[#C5A85C]/10 rounded-full pointer-events-none animate-[pulse_6s_infinite]" />
            <div className="absolute h-96 w-96 border border-[#C5A85C]/5 rounded-full pointer-events-none" />

            <div className="relative aspect-[4/3] w-full max-w-md overflow-hidden border border-[#C5A85C]/30 bg-[#08152c] p-1.5 shadow-[0_0_35px_rgba(197,168,92,0.15)] rounded-lg">
              <img
                src="/src/assets/images/mosque_dome_hero_1780063085853.png"
                alt="CV Beton Agung Mosque Dome Hero"
                className="h-full w-full object-cover rounded-md"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030a16]/80 via-transparent to-transparent rounded-md" />
              {/* Overlapping asymmetric card element */}
              <div className="absolute bottom-4 right-4 bg-[#08152c] p-4 border border-[#C5A85C]/30 rounded-md shadow-lg text-left max-w-[200px]">
                <p className="text-[9px] font-sans font-black uppercase tracking-wider text-[#C5A85C]">
                  Studi Desain
                </p>
                <p className="text-xs font-bold font-serif text-[#E2E8F0] mt-0.5 leading-snug">
                  Kubah Tembaga Klasik Modern
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Showcase Section */}
      <section
        id="projects"
        className="py-20 bg-[#030a16]/60 border-b border-[#C5A85C]/15"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="font-sans text-[10px] font-black tracking-widest text-[#C5A85C] uppercase block mb-1">
              Galeri Hasil Karya
            </span>
            <h2 className="font-serif text-3xl font-black text-[#E2E8F0] tracking-tight">
              Project Showcase
            </h2>
            <div className="h-0.5 w-16 bg-[#C5A85C] mx-auto mt-3 rounded-full opacity-60" />
            <p className="font-serif text-xs text-[#94A3B8] leading-relaxed mt-3 max-w-sm mx-auto font-light">
              Daftar portfolio rekayasa sasis kubah colosal megah yang rampung
              dipoles dengan lisensi pabrik bersertifikasi ISO.
            </p>
          </div>

          {/* Project card grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROJECTS_DATA.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative flex flex-col justify-between border border-[#C5A85C]/15 bg-[#08152c]/40 p-4 rounded-lg transition-all hover:bg-[#08152c]/90 hover:border-[#C5A85C]/50 hover:shadow-[0_0_20px_rgba(197,168,92,0.1)] cursor-pointer"
              >
                {/* Image container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#030a16] rounded-md">
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

                {/* Information */}
                <div className="flex flex-col flex-1 justify-between p-1 mt-4">
                  <div>
                    <h3 className="font-serif text-xs font-bold text-[#E2E8F0] leading-snug line-clamp-2 min-h-[32px]">
                      {project.name}
                    </h3>
                    <p className="font-sans text-[8px] text-[#94A3B8] mt-1.5 uppercase tracking-wider">
                      Bahan:{" "}
                      <span className="text-[#C5A85C] font-semibold">
                        {project.material.split(" (")[0]}
                      </span>
                    </p>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                    type="button"
                    className="mt-4 flex items-center justify-center gap-1.5 rounded-full border border-[#C5A85C]/50 bg-transparent py-2 text-center font-sans text-[9px] font-bold uppercase tracking-widest text-[#C5A85C] group-hover:bg-[#C5A85C] group-hover:text-[#030a16] group-hover:border-transparent transition-all cursor-pointer"
                  >
                    <span>Lihat Proyek</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        id="why-choose-us"
        className="py-20 border-b border-[#C5A85C]/15 bg-[#030a16]"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="font-sans text-[10px] font-black tracking-widest text-[#C5A85C] uppercase block mb-1">
              Rasi Komitmen Keunggulan
            </span>
            <h2 className="font-serif text-3xl font-black text-[#E2E8F0] tracking-tight">
              Why Choose Us
            </h2>
            <div className="h-0.5 w-16 bg-[#C5A85C] mx-auto mt-3 rounded-full opacity-60" />
            <p className="font-serif text-xs text-[#94A3B8] mt-3 font-light max-w-md mx-auto leading-relaxed">
              Keunggulan manufaktur segmental sasis, pengerjaan las ganda
              standar ASTM, serta komitmen proteksi jangka panjang.
            </p>
          </div>

          {/* Styled containment frame matching user screenshot */}
          <div className="border border-[#C5A85C]/30 bg-[#08152c]/55 p-8 rounded-xl shadow-[0_0_25px_rgba(197,168,92,0.03)]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 font-sans text-xs">
              <div className="flex flex-col items-center text-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#C5A85C]/10 border border-[#C5A85C]/35 text-[#C5A85C] shadow-[0_0_15px_rgba(197,168,92,0.1)]">
                  <Users className="h-5 w-5" />
                </div>
                <h4 className="font-serif font-bold text-sm text-[#E2E8F0]">
                  Kepercayaan
                </h4>
                <p className="text-[#94A3B8] leading-relaxed text-[11px] font-light">
                  Dipercaya oleh dewan panitia masjid raya perkotaan besar &
                  dinas pekerjaan umum nusantara untuk rekayasa sasis tumpuan
                  kubah.
                </p>
              </div>

              <div className="flex flex-col items-center text-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#C5A85C]/10 border border-[#C5A85C]/35 text-[#C5A85C] shadow-[0_0_15px_rgba(197,168,92,0.1)]">
                  <Award className="h-5 w-5" />
                </div>
                <h4 className="font-serif font-bold text-sm text-[#E2E8F0]">
                  Kualitas Tak Tertandingi
                </h4>
                <p className="text-[#94A3B8] leading-relaxed text-[11px] font-light">
                  Menggunakan las ganda berstandar ASTM dan pelat panel enamel
                  bersertifikat yang di-oven suhu 800 derajat celcius secara
                  presisi.
                </p>
              </div>

              <div className="flex flex-col items-center text-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#C5A85C]/10 border border-[#C5A85C]/35 text-[#C5A85C] shadow-[0_0_15px_rgba(197,168,92,0.1)]">
                  <Clock className="h-5 w-5" />
                </div>
                <h4 className="font-serif font-bold text-sm text-[#E2E8F0]">
                  Kecepatan & Presisi
                </h4>
                <p className="text-[#94A3B8] leading-relaxed text-[11px] font-light">
                  Visualisasi pra-desain CAD 3D yang cepat serta fabrikasi
                  pabrik segmental sasis presisi tinggi menggunakan CNC plasma
                  cutter.
                </p>
              </div>

              <div className="flex flex-col items-center text-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#C5A85C]/10 border border-[#C5A85C]/35 text-[#C5A85C] shadow-[0_0_15px_rgba(197,168,92,0.1)]">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h4 className="font-serif font-bold text-sm text-[#E2E8F0]">
                  Garansi Jangka Panjang
                </h4>
                <p className="text-[#94A3B8] leading-relaxed text-[11px] font-light">
                  Kami memberikan penjaminan sasis sasis baja ganda kami hingga
                  20 tahun serta sertifikasi pudar panel antikaratan double
                  layer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Estimator Calculator Interactive section */}
      <section
        id="estimator-section"
        className="py-20 border-b border-[#C5A85C]/15 bg-[#08152c]/30 relative"
      >
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="font-sans text-[10px] font-black tracking-widest text-[#C5A85C] uppercase block mb-1">
              Rancang Bangun Kustom
            </span>
            <h2 className="font-serif text-3xl font-black text-[#E2E8F0] tracking-tight">
              Customizer Parameter
            </h2>
            <div className="h-0.5 w-16 bg-[#C5A85C] mx-auto mt-3 rounded-full opacity-60" />
            <p className="font-serif text-xs text-[#94A3B8] mt-3 leading-relaxed font-light max-w-sm mx-auto">
              Konfigurasikan diameter, ketinggian, serta tipe material ornamen
              secara instan untuk melahirkan anggaran pre-rencana kasar yang
              akurat.
            </p>
          </div>

          <CostCalculator />
        </div>
      </section>

      {/* Our Services Section */}
      <section
        id="services"
        className="py-20 bg-[#030a16] border-b border-[#C5A85C]/15"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="font-sans text-[10px] font-black tracking-widest text-[#C5A85C] uppercase block mb-1">
              Spesialisasi Profesional
            </span>
            <h2 className="font-serif text-3xl font-black text-[#E2E8F0] tracking-tight">
              Our Services
            </h2>
            <div className="h-0.5 w-16 bg-[#C5A85C] mx-auto mt-3 rounded-full opacity-60" />
            <p className="font-serif text-xs text-[#94A3B8] mt-3 font-light leading-relaxed">
              Manajemen fase lengkap dari draf visual hulu hingga instalasi
              crane tumpuan lokasi.
            </p>
          </div>

          {/* Servicemenu list layout columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans text-xs">
            <div className="flex gap-4 p-6 bg-[#08152c]/40 border border-[#C5A85C]/20 rounded-lg shadow-[0_0_15px_rgba(197,168,92,0.02)] transition-all hover:bg-[#08152c]/85 hover:border-[#C5A85C]/45">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C5A85C]/10 border border-[#C5A85C]/35 text-[#C5A85C]">
                <Compass className="h-5 w-5" />
              </div>
              <div className="flex flex-col gap-1.5">
                <h4 className="font-serif text-sm font-bold text-[#E2E8F0]">
                  Desain Kustom Eksklusif
                </h4>
                <p className="text-[#94A3B8] leading-relaxed text-[11px] font-light">
                  Visualisasi render resolusi tinggi lengkap dengan perhitungan
                  beban struktur tumpuan beton yang divalidasi insinyur sipil.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-[#08152c]/40 border border-[#C5A85C]/20 rounded-lg shadow-[0_0_15px_rgba(197,168,92,0.02)] transition-all hover:bg-[#08152c]/85 hover:border-[#C5A85C]/45">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C5A85C]/10 border border-[#C5A85C]/35 text-[#C5A85C]">
                <Wrench className="h-5 w-5" />
              </div>
              <div className="flex flex-col gap-1.5">
                <h4 className="font-serif text-sm font-bold text-[#E2E8F0]">
                  Konstruksi Kubah Presisi
                </h4>
                <p className="text-[#94A3B8] leading-relaxed text-[11px] font-light">
                  Fabrikasi sasis spaceframe pipa seamless berketahanan torsi
                  tinggi, dilapisi zinc-chromate primer antikarat double layer.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-[#08152c]/40 border border-[#C5A85C]/20 rounded-lg shadow-[0_0_15px_rgba(197,168,92,0.02)] transition-all hover:bg-[#08152c]/85 hover:border-[#C5A85C]/45">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C5A85C]/10 border border-[#C5A85C]/35 text-[#C5A85C]">
                <History className="h-5 w-5" />
              </div>
              <div className="flex flex-col gap-1.5">
                <h4 className="font-serif text-sm font-bold text-[#E2E8F0]">
                  Restorasi Kubah Bersejarah
                </h4>
                <p className="text-[#94A3B8] leading-relaxed text-[11px] font-light">
                  Pekerjaan pembongkaran kubah lama rapuh, perampingan sasis,
                  peredaman kebocoran sealant, hingga penggantian panel baru.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-[#08152c]/40 border border-[#C5A85C]/20 rounded-lg shadow-[0_0_15px_rgba(197,168,92,0.02)] transition-all hover:bg-[#08152c]/85 hover:border-[#C5A85C]/45">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C5A85C]/10 border border-[#C5A85C]/35 text-[#C5A85C]">
                <Sparkles className="h-5 w-5" />
              </div>
              <div className="flex flex-col gap-1.5">
                <h4 className="font-serif text-sm font-bold text-[#C5A85C]">
                  Material Premium & Finishing Mewah
                </h4>
                <p className="text-[#94A3B8] leading-relaxed text-[11px] font-light">
                  Supplier tangan pertama bahan impor berkualitas tinggi seperti
                  Plat Kuningan, Tembaga Eropa, dan Baja Enamel SPCC
                  bersertifikat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-20 bg-[#030a16] border-b border-[#C5A85C]/15"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-sm mx-auto mb-12">
            <span className="font-sans text-[10px] font-black tracking-widest text-[#C5A85C] uppercase block mb-1">
              Testimonial Rekanan
            </span>
            <h2 className="font-serif text-3xl font-black text-[#E2E8F0] tracking-tight">
              Testimonials
            </h2>
            <div className="h-0.5 w-12 bg-[#C5A85C] mx-auto mt-2 rounded-full opacity-60" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-serif text-xs">
            {/* Testi 1 */}
            <div className="border border-[#C5A85C]/25 bg-[#08152c]/55 p-8 relative flex flex-col justify-between rounded-xl shadow-[0_0_20px_rgba(197,168,92,0.03)]">
              <span className="font-serif text-6xl text-[#C5A85C]/10 absolute top-2 left-4 pointer-events-none">
                “
              </span>
              <p className="text-[#94A3B8] leading-relaxed italic relative z-10 pt-4 text-xs font-light">
                Sangat luar biasa melihat pengerjaan kubah enamel baja Masjid
                Raya. Kombinasi sasis spaceframe ganda dari CV Beton Agung
                sangat presisi. Warna panel daun hijau toskanya masih berdiri
                kokoh megah mengilap laksana baru meski diterpa cuaca ekstrem
                tropis bertahun-tahun.
              </p>
              <div className="flex items-center gap-3.5 mt-6 border-t border-[#C5A85C]/15 pt-4">
                <div className="h-9 w-9 bg-[#C5A85C]/10 text-[#C5A85C] font-serif font-black flex items-center justify-center border border-[#C5A85C]/35 rounded-full shadow-[0_0_10px_rgba(197,168,92,0.1)]">
                  HZ
                </div>
                <div>
                  <h4 className="font-serif font-bold text-[#E2E8F0] text-xs">
                    H. Ahmad Zahir
                  </h4>
                  <p className="font-sans text-[9px] tracking-wider text-[#C5A85C] uppercase font-bold">
                    Panitia Pembangunan, Masjid Jabar
                  </p>
                </div>
              </div>
            </div>

            {/* Testi 2 */}
            <div className="border border-[#C5A85C]/25 bg-[#08152c]/55 p-8 relative flex flex-col justify-between rounded-xl shadow-[0_0_20px_rgba(197,168,92,0.03)]">
              <span className="font-serif text-6xl text-[#C5A85C]/10 absolute top-2 left-4 pointer-events-none">
                “
              </span>
              <p className="text-[#94A3B8] leading-relaxed italic relative z-10 pt-4 text-xs font-light">
                Pengerjaan kubah kuningan tempa bakar melayu digarap secara
                halus oleh tim drafters & pemahat terampil CV Beton Agung.
                Kalkulator estimasi harga mereka sangat realistis membantu
                pelaporan budget BKM pembangunan kami. Rekomendasi utama
                kontraktor kubah masjid!
              </p>
              <div className="flex items-center gap-3.5 mt-6 border-t border-[#C5A85C]/15 pt-4">
                <div className="h-9 w-9 bg-[#C5A85C]/10 text-[#C5A85C] font-serif font-black flex items-center justify-center border border-[#C5A85C]/35 rounded-full shadow-[0_0_10px_rgba(197,168,92,0.1)]">
                  AH
                </div>
                <div>
                  <h4 className="font-serif font-bold text-[#E2E8F0] text-xs">
                    H. Abdul Halim
                  </h4>
                  <p className="font-sans text-[9px] tracking-wider text-[#C5A85C] uppercase font-bold">
                    BKM Baitul Makmur, Sumatera
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees row block */}
      <section className="py-16 bg-[#030a16] border-b border-[#C5A85C]/15">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-sm mx-auto mb-8">
            <h3 className="font-serif text-2xl font-black text-[#E2E8F0] tracking-tight uppercase">
              Guarantees
            </h3>
            <div className="h-0.5 w-12 bg-[#C5A85C] mx-auto mt-2 rounded-full opacity-60" />
          </div>

          <div className="border border-[#C5A85C]/30 bg-[#08152c]/40 p-4 rounded-xl shadow-[0_0_20px_rgba(197,168,92,0.05)]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans text-xs">
              <div className="flex items-center justify-center gap-3.5 p-4 border border-[#C5A85C]/15 bg-[#08152c]/60 rounded-md">
                <CheckCircle2 className="h-5 w-5 text-[#C5A85C] shrink-0 animate-pulse" />
                <div>
                  <span className="font-serif font-black text-[#E2E8F0] uppercase tracking-wider block text-[10px]">
                    Garansi Struktur 20 Tahun
                  </span>
                  <span className="text-[10px] text-[#94A3B8]">
                    Kekuatan sasis integral bersertifikat sipil
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3.5 p-4 border border-[#C5A85C]/15 bg-[#08152c]/60 rounded-md">
                <Leaf className="h-5 w-5 text-[#C5A85C] shrink-0" />
                <div>
                  <span className="font-serif font-black text-[#E2E8F0] uppercase tracking-wider block text-[10px]">
                    Material Tahan Cuaca
                  </span>
                  <span className="text-[10px] text-[#94A3B8]">
                    Diproteksi zinc-chromate primer ganda
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3.5 p-4 border border-[#C5A85C]/15 bg-[#08152c]/60 rounded-md">
                <Calendar className="h-5 w-5 text-[#C5A85C] shrink-0" />
                <div>
                  <span className="font-serif font-black text-[#E2E8F0] uppercase tracking-wider block text-[10px]">
                    Pengerjaan Sesuai Jadwal
                  </span>
                  <span className="text-[10px] text-[#94A3B8]">
                    Jaminan timelines terikat pasal kerja sama
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer component */}
      <Footer />

      {/* Modal Lightbox for Project Analysis */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
