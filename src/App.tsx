import { useState } from "react";
import Header from "./components/Header";
import CostCalculator from "./components/CostCalculator";
import ProjectModal from "./components/ProjectModal";
import Footer from "./components/Footer";
import { Button, ButtonLink } from "./components/ui/Button";
import { Container } from "./components/ui/Container";
import { SectionHeader } from "./components/ui/SectionHeader";
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

        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Block text, metrics */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="font-sans text-[10px] font-bold tracking-[0.25em] text-[#C5A85C] uppercase flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C5A85C] animate-pulse" />
              Kontraktor Spesialis Kubah Masjid Premium
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#E2E8F0] leading-[1.05]">
              Membangun Warisan
              <br />
              <span className="text-[#C5A85C]">Arsitektur Premium</span>
              <br />
              Kubah Masjid
            </h1>

            <p className="font-serif text-sm md:text-base text-[#94A3B8] leading-relaxed max-w-xl font-light">
              Keunggulan dalam desain, konstruksi, dan arsitektur Islam modern.
              Kami merancang kubah bernilai seni tinggi, tahan gempa,
              menggunakan Tembaga Eropa, Kuningan Tempa tangan, serta Baja
              Enamel SPCC premium.
            </p>

            {/* Direct WhatsApp Consultation CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <ButtonLink
                href={heroWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="md"
                iconLeft={<Phone className="h-3.5 w-3.5" />}
              >
                WhatsApp Kami untuk Konsultasi Eksklusif
              </ButtonLink>
              <Button
                onClick={() => handleNavScroll("estimator-section")}
                variant="secondary"
                size="md"
                iconRight={<ChevronRight className="h-3 w-3 text-[#C5A85C]" />}
              >
                Estimator Harga
              </Button>
            </div>

            {/* Metrics horizontal panel */}
            <div className="grid grid-cols-3 gap-4 pt-8 mt-4 border-t border-[#C5A85C]/15">
              <div className="border border-[#C5A85C]/30 rounded-lg bg-[#08152c]/55 p-4 text-center shadow-[0_0_15px_rgba(197,168,92,0.02)]">
                <span className="font-serif text-2xl md:text-3xl font-black text-[#C5A85C] block">
                  25+
                </span>
                <span className="font-sans text-[9px] text-[#94A3B8] uppercase tracking-widest font-bold leading-tight block mt-1">
                  Tahun Pengalaman
                </span>
              </div>
              <div className="border border-[#C5A85C]/30 rounded-lg bg-[#08152c]/55 p-4 text-center shadow-[0_0_15px_rgba(197,168,92,0.02)]">
                <span className="font-serif text-2xl md:text-3xl font-black text-[#C5A85C] block">
                  500+
                </span>
                <span className="font-sans text-[9px] text-[#94A3B8] uppercase tracking-widest font-bold leading-tight block mt-1">
                  Proyek Selesai
                </span>
              </div>
              <div className="border border-[#C5A85C]/30 rounded-lg bg-[#08152c]/55 p-4 text-center shadow-[0_0_15px_rgba(197,168,92,0.02)]">
                <span className="font-serif text-2xl md:text-3xl font-black text-[#C5A85C] block">
                  100%
                </span>
                <span className="font-sans text-[9px] text-[#94A3B8] uppercase tracking-widest font-bold leading-tight block mt-1">
                  Kepuasan Terjamin
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
                alt="Hero kubah masjid CV Beton Agung"
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
        </Container>
      </section>

      {/* Project Showcase Section */}
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

                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
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

      {/* Why Choose Us Section */}
      <section
        id="why-choose-us"
        className="py-20 border-b border-[#C5A85C]/15 bg-[#030a16]"
      >
        <Container>
          <SectionHeader
            eyebrow="Rasi Komitmen Keunggulan"
            title="Why Choose Us"
            description="Keunggulan manufaktur segmental sasis, pengerjaan las ganda standar ASTM, serta komitmen proteksi jangka panjang."
            className="max-w-xl"
          />

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
        </Container>
      </section>

      {/* Estimator Calculator Interactive section */}
      <section
        id="estimator-section"
        className="py-20 border-b border-[#C5A85C]/15 bg-[#08152c]/30 relative"
      >
        <Container className="relative z-10">
          <SectionHeader
            eyebrow="Rancang Bangun Kustom"
            title="Customizer Parameter"
            description="Konfigurasikan diameter, ketinggian, serta tipe material ornamen secara instan untuk melahirkan anggaran pre-rencana kasar yang akurat."
            className="max-w-xl"
          />

          <CostCalculator />
        </Container>
      </section>

      {/* Our Services Section */}
      <section
        id="services"
        className="py-20 bg-[#030a16] border-b border-[#C5A85C]/15"
      >
        <Container>
          <SectionHeader
            eyebrow="Spesialisasi Profesional"
            title="Our Services"
            description="Manajemen fase lengkap dari draf visual hulu hingga instalasi crane tumpuan lokasi."
          />

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
        </Container>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-20 bg-[#030a16] border-b border-[#C5A85C]/15"
      >
        <Container>
          <SectionHeader
            eyebrow="Testimonial Rekanan"
            title="Testimonials"
            compact
            className="mb-12"
          />

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
        </Container>
      </section>

      {/* Guarantees row block */}
      <section className="py-16 bg-[#030a16] border-b border-[#C5A85C]/15">
        <Container>
          <SectionHeader title="Guarantees" compact />

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
        </Container>
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
