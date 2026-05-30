import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { ButtonLink } from "../ui/Button";
import { Container } from "../ui/Container";

const heroWhatsappUrl =
  "https://wa.me/6282324547755?text=Halo%20CV%20Beton%20Agung,%20saya%20tertarik%2520untuk%20berkonsultasi%20mengenai%20pembuatan%20kubah%2520masjid%20eksklusif.";

const heroStats = [
  { value: 25, suffix: "+", label: "Tahun Pengalaman" },
  { value: 500, suffix: "+", label: "Proyek Selesai" },
  { value: 100, suffix: "%", label: "Kepuasan Terjamin" },
];

function AnimatedStatValue({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setDisplayValue(value);
      return;
    }

    let animationFrame = 0;
    const duration = 1400;
    const startTime = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setDisplayValue(Math.round(value * easedProgress));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [value]);

  return (
    <>
      {displayValue}
      {suffix}
    </>
  );
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-82px)] w-full overflow-hidden border-b border-[#C5A85C]/60 bg-[#030a16]"
    >
      <img
        src="/src/assets/images/mosque_dome_hero_1780063085853.png"
        alt="Kubah masjid premium CV Beton Agung"
        className="absolute inset-0 h-full w-full object-cover object-[72%_center] opacity-70 mask-[linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.18)_18%,rgba(0,0,0,0.72)_34%,black_48%)]"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#030a16_0%,rgba(3,10,22,0.98)_28%,rgba(3,10,22,0.72)_48%,rgba(3,10,22,0.2)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,#030a16_0%,rgba(3,10,22,0.18)_34%,rgba(3,10,22,0)_100%)]" />
      <div className="absolute inset-y-0 left-[26%] hidden w-44 bg-[linear-gradient(90deg,rgba(3,10,22,0.78),rgba(3,10,22,0))] blur-xl md:block" />
      <div className="absolute inset-y-0 left-0 hidden w-52 border-r border-[#C5A85C]/10 bg-[radial-gradient(circle_at_28px_28px,rgba(197,168,92,0.12)_1px,transparent_1.6px)] bg-size-[22px_22px] opacity-40 lg:block" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#C5A85C]/70" />

      <Container className="relative z-10 flex min-h-[calc(100vh-82px)] flex-col justify-center py-10 md:py-12">
        <div className="max-w-2xl">
          <h1 className="max-w-xl text-4xl font-black leading-[1.04] tracking-tight text-[#E9D28A] sm:text-5xl md:text-[64px]">
            Wujudkan
            <br />
            <span className="text-[#F1D98C]">Kubah Masjid yang Kokoh</span>
            <br />
            dan Indah
          </h1>

          <p className="mt-6 max-w-md font-sans text-sm leading-relaxed text-[#E2E8F0]/90 md:text-base">
            CV Beton Agung melayani pembuatan kubah masjid dari desain,
            material, rangka, hingga pemasangan. Rapi, kuat, dan sesuai
            kebutuhan proyek.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <ButtonLink
              href={heroWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="md"
              iconLeft={<Phone className="h-3.5 w-3.5" />}
            >
              WhatsApp Kami untuk Konsultasi Eksklusif
            </ButtonLink>
          </div>
        </div>

        <div className="mt-12 grid max-w-xl grid-cols-3 gap-3 self-start md:absolute md:bottom-10 md:right-6 md:mt-0 md:max-w-none lg:right-12">
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-md border border-[#C5A85C]/65 bg-[#030a16]/58 px-4 py-3 text-center shadow-[0_14px_30px_rgba(0,0,0,0.22)] backdrop-blur-sm"
            >
              <span className="block font-serif text-3xl font-black leading-none text-[#E9D28A] md:text-4xl">
                <AnimatedStatValue value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="mt-1 block font-sans text-[9px] font-semibold uppercase leading-tight text-[#E2E8F0]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
