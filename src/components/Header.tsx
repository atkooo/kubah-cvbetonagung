import { useState } from "react";
import { ChevronDown, Phone, Search, Menu, X } from "lucide-react";
import { aboutRoutes, productRoutes, standaloneRoutes } from "../siteRoutes";
import { ButtonLink } from "./ui/Button";
import { Container } from "./ui/Container";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProductOpen, setIsMobileProductOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);

  const whatsappUrl =
    "https://wa.me/6282324547755?text=Halo%20CV%20Beton%20Agung,%20saya%20tertarik%20konsultasi%20kubah%20masjid%20eksklusif.";
  const currentPath = window.location.pathname.replace(/\/$/, "") || "/";
  const navLinkClass =
    "relative inline-flex items-center gap-1.5 px-3 py-2.5 text-[12px] font-bold tracking-[0.12em] transition-colors hover:text-[#E9D28A] after:absolute after:bottom-1 after:left-3 after:right-3 after:h-px after:origin-left after:scale-x-0 after:bg-[#C5A85C] after:transition-transform hover:after:scale-x-100";
  const activeNavLinkClass = "text-[#D8BD72] after:scale-x-100";
  const dropdownLinkClass =
    "block whitespace-nowrap px-6 py-3.5 text-[12px] font-black tracking-[0.16em] text-[#1e2a47] transition-colors hover:bg-[#F3D778]/20 hover:text-[#030a16]";
  const isActive = (path: string) => currentPath === path;
  const hasActiveChild = (paths: string[]) => paths.includes(currentPath);

  return (
    <>
      <header
        id="site-header"
        className="sticky top-0 z-40 h-20.5 w-full border-b border-[#C5A85C]/20 bg-[#030a16]/95 shadow-[0_8px_24px_rgba(0,0,0,0.25)] backdrop-blur-md"
      >
        <Container className="flex h-full items-center justify-between gap-5">
          {/* Brand Headerboard */}
          <div className="flex items-center gap-3">
            <img
              src="/assets/logo/logo.png"
              alt="CV Beton Agung"
              className="h-11 w-11 object-contain"
            />
            <div className="flex flex-col">
              <span className="font-serif text-sm font-black tracking-[0.12em] text-[#E2E8F0] uppercase">
                CV BETON AGUNG
              </span>
              <span className="font-sans text-[8px] tracking-[0.2em] text-[#C5A85C] uppercase font-semibold">
                TERPERCAYA DAN BERINTEGRITAS
              </span>
            </div>
          </div>

          <nav className="hidden items-center gap-2 font-sans uppercase text-[#E2E8F0]/75 lg:flex">
            <a
              href="/"
              className={`${navLinkClass} ${
                isActive("/") ? activeNavLinkClass : ""
              }`}
            >
              HOME
            </a>

            <div className="group relative">
              <button
                type="button"
                className={`${navLinkClass} ${
                  hasActiveChild(productRoutes.map((route) => route.path))
                    ? activeNavLinkClass
                    : ""
                }`}
              >
                PRODUK <ChevronDown className="h-3.5 w-3.5" />
              </button>
              <div className="invisible absolute left-0 top-full min-w-92 translate-y-2 border border-[#C5A85C]/10 bg-white py-2 opacity-0 shadow-[0_18px_40px_rgba(0,0,0,0.22)] transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                {productRoutes.map((route) => (
                  <a
                    key={route.path}
                    href={route.path}
                    className={dropdownLinkClass}
                  >
                    {route.label}
                  </a>
                ))}
              </div>
            </div>

            {standaloneRoutes
              .filter((route) => route.path !== "/kontak")
              .map((route) => (
                <a
                  key={route.path}
                  href={route.path}
                  className={`${navLinkClass} ${
                    isActive(route.path) ? activeNavLinkClass : ""
                  }`}
                >
                  {route.label}
                </a>
              ))}

            <div className="group relative">
              <button
                type="button"
                className={`${navLinkClass} ${
                  hasActiveChild(aboutRoutes.map((route) => route.path))
                    ? activeNavLinkClass
                    : ""
                }`}
              >
                TENTANG <ChevronDown className="h-3.5 w-3.5" />
              </button>
              <div className="invisible absolute left-0 top-full min-w-58 translate-y-2 border border-[#C5A85C]/10 bg-white py-2 opacity-0 shadow-[0_18px_40px_rgba(0,0,0,0.22)] transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                {aboutRoutes.map((route) => (
                  <a
                    key={route.path}
                    href={route.path}
                    className={dropdownLinkClass}
                  >
                    {route.label}
                  </a>
                ))}
              </div>
            </div>

            <a
              href="/kontak"
              className={`${navLinkClass} ${
                isActive("/kontak") ? activeNavLinkClass : ""
              }`}
            >
              KONTAK
            </a>

            <a
              href="/search"
              aria-label="Cari"
              className="flex h-10 w-10 items-center justify-center text-[#E2E8F0]/80 transition-colors hover:text-[#E9D28A]"
            >
              <Search className="h-5 w-5" />
            </a>
          </nav>

          {/* Actions side */}
          <div className="flex items-center gap-3">
            {/* WhatsApp Callout Action */}
            <div className="hidden lg:block">
              <ButtonLink
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="xs"
                className="px-4 py-2 text-[9px] tracking-[0.08em]"
                iconLeft={<Phone className="h-3 w-3" />}
              >
                WhatsApp Kami
              </ButtonLink>
            </div>

            {/* Hamburger Menu Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-[#C5A85C]/20 text-[#E2E8F0] hover:bg-[#C5A85C]/10 lg:hidden"
              aria-label="Buka Menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-[#030a16] p-6 lg:hidden">
          {/* Drawer Header */}
          <div className="flex items-center justify-between border-b border-[#C5A85C]/15 pb-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/logo/logo.png"
                alt="CV Beton Agung"
                className="h-11 w-11 object-contain"
              />
              <div className="flex flex-col">
                <span className="font-serif text-sm font-black tracking-[0.12em] text-[#E2E8F0] uppercase">
                  CV BETON AGUNG
                </span>
                <span className="font-sans text-[8px] tracking-[0.2em] text-[#C5A85C] uppercase font-semibold">
                  TERPERCAYA DAN BERINTEGRITAS
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-[#C5A85C]/20 text-[#E2E8F0] hover:bg-[#C5A85C]/10"
              aria-label="Tutup Menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Drawer Body (Scrollable) */}
          <div className="mt-6 flex-1 flex flex-col gap-6 overflow-y-auto pb-8">
            {/* Search Input for Mobile */}
            <form action="/search" method="GET" className="relative w-full">
              <input
                type="text"
                name="q"
                placeholder="Cari kubah..."
                className="w-full rounded-md border border-[#C5A85C]/35 bg-[#08152c]/50 py-2.5 pl-4 pr-10 text-xs text-[#E2E8F0] placeholder-[#E2E8F0]/40 focus:border-[#C5A85C] focus:outline-none"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#C5A85C]"
              >
                <Search className="h-4 w-4" />
              </button>
            </form>

            {/* Nav Links */}
            <nav className="flex flex-col gap-1 font-sans text-sm font-bold uppercase tracking-wider text-[#E2E8F0]/90">
              <a
                href="/"
                className={`flex py-3 border-b border-[#C5A85C]/10 ${isActive("/") ? "text-[#D8BD72]" : ""}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                HOME
              </a>

              {/* Produk Accordion */}
              <div className="border-b border-[#C5A85C]/10">
                <button
                  type="button"
                  onClick={() => setIsMobileProductOpen(!isMobileProductOpen)}
                  className="flex w-full items-center justify-between py-3 text-left"
                >
                  <span>PRODUK</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${isMobileProductOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isMobileProductOpen && (
                  <div className="flex flex-col gap-2 pl-4 pb-3 text-xs lowercase font-semibold tracking-normal text-[#E2E8F0]/70">
                    {productRoutes.map((route) => (
                      <a
                        key={route.path}
                        href={route.path}
                        className={`block py-2 uppercase tracking-wide hover:text-[#E9D28A] ${isActive(route.path) ? "text-[#D8BD72]" : ""}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {route.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {standaloneRoutes
                .filter((route) => route.path !== "/kontak")
                .map((route) => (
                  <a
                    key={route.path}
                    href={route.path}
                    className={`flex py-3 border-b border-[#C5A85C]/10 ${isActive(route.path) ? "text-[#D8BD72]" : ""}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {route.label}
                  </a>
                ))}

              {/* Tentang Accordion */}
              <div className="border-b border-[#C5A85C]/10">
                <button
                  type="button"
                  onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                  className="flex w-full items-center justify-between py-3 text-left"
                >
                  <span>TENTANG</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${isMobileAboutOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isMobileAboutOpen && (
                  <div className="flex flex-col gap-2 pl-4 pb-3 text-xs lowercase font-semibold tracking-normal text-[#E2E8F0]/70">
                    {aboutRoutes.map((route) => (
                      <a
                        key={route.path}
                        href={route.path}
                        className={`block py-2 uppercase tracking-wide hover:text-[#E9D28A] ${isActive(route.path) ? "text-[#D8BD72]" : ""}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {route.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="/kontak"
                className={`flex py-3 border-b border-[#C5A85C]/10 ${isActive("/kontak") ? "text-[#D8BD72]" : ""}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                KONTAK
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
