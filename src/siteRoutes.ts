export interface SiteRoute {
  label: string;
  path: string;
}

export const productRoutes: SiteRoute[] = [
  { label: "KUBAH MASJID ENAMEL", path: "/produk/kubah-masjid-enamel" },
  {
    label: "KUBAH MASJID STAINLESS GOLD",
    path: "/produk/kubah-masjid-stainless-gold",
  },
  { label: "KUBAH MASJID GALVALUM", path: "/produk/kubah-masjid-galvalum" },
];

export const aboutRoutes: SiteRoute[] = [
  { label: "PROFIL CV BETON AGUNG", path: "/tentang/profil-cv-beton-agung" },
  { label: "GARANSI", path: "/tentang/garansi" },
  { label: "TESTIMONI", path: "/tentang/testimoni" },
  { label: "AREA JANGKAUAN", path: "/tentang/area-jangkauan" },
  { label: "CARA PESAN", path: "/tentang/cara-pesan" },
  { label: "BLOG", path: "/blog" },
];

export const standaloneRoutes: SiteRoute[] = [
  { label: "PORTFOLIO", path: "/portfolio" },
  { label: "HARGA", path: "/harga" },
  { label: "KONTAK", path: "/kontak" },
];

export const utilityRoutes: SiteRoute[] = [
  { label: "PENCARIAN", path: "/search" },
];

export const allPageRoutes: SiteRoute[] = [
  ...productRoutes,
  ...standaloneRoutes,
  ...aboutRoutes,
  ...utilityRoutes,
];
