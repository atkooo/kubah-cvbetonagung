# Project Context - CV Beton Agung Website

Dokumen ini adalah konteks kerja cepat untuk contributor/agent berikutnya. Baca ini dulu sebelum mencari context dari nol.

## Ringkasan

Project ini adalah single-page website untuk CV Beton Agung, spesialis kubah masjid premium. Aplikasi menampilkan hero, portfolio proyek, alasan memilih layanan, estimator biaya kubah interaktif, layanan, testimonial, guarantee, footer, dan modal detail proyek.

Stack utama:

- React 19 + TypeScript.
- Vite 6 untuk frontend dev/build.
- Express 4 sebagai server wrapper di `server.ts`.
- Tailwind CSS v4 via `@tailwindcss/vite`.
- `lucide-react` untuk icon.
- `motion` terpasang, tetapi saat dokumen ini dibuat belum dipakai di file yang dibaca.

## Status Operasional Lokal

- User menjalankan server sendiri di `http://localhost:3000`.
- Jangan menjalankan `npm run dev` atau server lain kecuali user meminta eksplisit.
- Untuk cek tampilan/browser, gunakan server yang sudah berjalan di `http://localhost:3000`.
- `server.ts` punya fallback port otomatis 3000 sampai 3010 jika port dipakai dan `PORT` tidak diset, tetapi aturan kerja project ini tetap: jangan start ulang server tanpa diminta.

## Perintah Project

```bash
npm install
npm run dev
npm run build
npm run start
npm run lint
npm run clean
```

Catatan:

- `npm run dev` menjalankan `tsx server.ts`.
- `npm run build` menjalankan `vite build`, lalu bundle `server.ts` ke `dist/server.cjs`.
- `npm run start` menjalankan hasil build production.
- `npm run lint` sebenarnya typecheck: `tsc --noEmit`.

## Struktur File

```text
.
├── server.ts
├── vite.config.ts
├── tsconfig.json
├── package.json
├── index.html
├── metadata.json
├── README.md
├── .env.example
├── src
│   ├── main.tsx
│   ├── App.tsx
│   ├── data.ts
│   ├── types.ts
│   ├── index.css
│   ├── assets/images
│   │   ├── mosque_dome_hero_1780063085853.png
│   │   ├── project_al_akbar_1780063109705.png
│   │   ├── project_al_jabbar_1780063127068.png
│   │   ├── project_al_falah_1780063147603.png
│   │   └── project_baiturrahman_1780063165472.png
│   ├── components
│   │   ├── Header.tsx
│   │   ├── CostCalculator.tsx
│   │   ├── ProjectModal.tsx
│   │   ├── Footer.tsx
│   │   └── ui
│   │       ├── Button.tsx
│   │       ├── Container.tsx
│   │       └── SectionHeader.tsx
│   └── lib
│       └── classNames.ts
└── docs
    └── PROJECT_CONTEXT.md
```

Ada juga folder `master/` berisi zip arsip (`cv-beton-agung.zip`) dan folder hasil/generated seperti `dist/` dan `node_modules/`. Jangan edit hasil build/manual dependency kecuali diminta.

## Entry Point dan Alur Render

- `index.html` menyediakan `<div id="root"></div>` dan load `/src/main.tsx`.
- `src/main.tsx` render `<App />` dalam `StrictMode`.
- `src/App.tsx` adalah halaman utama SPA dan mengatur state `selectedProject`.
- `Header` menerima callback `onNavClick(sectionId)` dari `App` untuk smooth scroll ke section.
- Klik card project membuka `ProjectModal`.
- Estimator berada di `CostCalculator`, memakai data dan formula dari `src/data.ts`.
- `Footer` berdiri sendiri dan menggunakan tahun berjalan dari `new Date().getFullYear()`.
- Primitive reusable berada di `src/components/ui`: `Button`, `ButtonLink`, `Container`, dan `SectionHeader`.

## Section Utama di App

ID section yang dipakai navigasi:

- `home`: wrapper halaman utama.
- `hero`: hero/landing section.
- `projects`: showcase project.
- `why-choose-us`: alasan memilih.
- `estimator-section`: section estimator.
- `services`: layanan.
- `testimonials`: testimonial.

Komponen `CostCalculator` sendiri punya wrapper `id="cost-calculator"`, tetapi tombol/nav mengarah ke `estimator-section`.

## Data dan Domain Logic

`src/data.ts` berisi:

- `PROJECTS_DATA`: portfolio 4 proyek.
- `MATERIAL_SPECS`: spesifikasi material `tembaga`, `kuningan`, `enamel`, `galvalum`.
- `SHAPE_MULTIPLIERS`: bentuk kubah `bawang`, `setengah_bola`, `madinah`, `oval`.
- `calculateEstimate(state)`: formula estimasi luas, bobot, biaya, sasis, instalasi, grade struktur, dan durasi.

`src/types.ts` berisi kontrak:

- `Project`
- `CustomizerState`
- `EstimateResult`

Jika menambah material/bentuk, update `types.ts`, `data.ts`, dan UI selector di `CostCalculator`.

## Styling dan Design System Lokal

Style utama ada di class Tailwind langsung pada JSX. `src/index.css` hanya mengimpor font Google, Tailwind, theme font, body color, dan scrollbar.

Karakter visual saat ini:

- Background gelap: `#030a16`, secondary `#08152c`.
- Aksen emas: `#C5A85C`, hover `#D4AF37`.
- Teks terang: `#E2E8F0`.
- Teks muted: `#94A3B8`.
- Font serif display: Playfair Display.
- Font sans: Inter.
- Font mono: JetBrains Mono.
- Banyak elemen memakai border emas transparan dan rounded `lg/xl/full`.

Saat edit UI, jaga konsistensi warna, font, dan ukuran teks yang sudah ada. Jangan mengganti tema total kecuali user meminta redesign.

Primitive UI yang sudah tersedia:

- `Button`: untuk aksi `<button>`, mendukung `variant`, `size`, `fullWidth`, `iconLeft`, dan `iconRight`.
- `ButtonLink`: untuk CTA berbasis `<a>` dengan API visual sama seperti `Button`.
- `Container`: wrapper standar `mx-auto max-w-7xl px-6`.
- `SectionHeader`: blok heading section dengan eyebrow, title, description, dan mode `compact`.
- `cn` di `src/lib/classNames.ts`: helper kecil untuk menggabungkan class statis.

Gunakan primitive ini untuk CTA/header section baru sebelum menulis ulang class panjang di JSX.

## Asset

Gambar yang dipakai berada di `src/assets/images`. Saat ini path gambar ditulis sebagai absolute Vite dev path, contoh:

```ts
image: "/src/assets/images/project_al_akbar_1780063109705.png"
```

Untuk perubahan kecil, ikuti pola existing. Jika ingin membuat build production lebih robust, pertimbangkan import asset dari TypeScript, tetapi itu perubahan arsitektur kecil dan sebaiknya dilakukan hanya saat memang perlu.

## WhatsApp dan Kontak

Nomor WhatsApp utama di beberapa tempat:

- `Header.tsx`: `6281235567899`.
- `App.tsx` hero CTA: `6281235567899`.
- `ProjectModal.tsx`: `6281235567899`.
- `CostCalculator.tsx`: `6281235567899`.
- `Footer.tsx`: tampilan `+62 812-3556-7899`.

Jika nomor berubah, update semua lokasi agar konsisten.

Catatan typo yang sudah ada:

- `Footer.tsx` email tertulis `contact@vetonagung.com`. Pastikan ke user dulu jika ingin mengubah ke domain lain.
- Beberapa copywriting memakai istilah/kalimat hiperbolik dan ada typo seperti `sasis sasis`; jangan ubah copy besar-besaran tanpa arahan user.

## Server

`server.ts`:

- Membuat Express app.
- Parse JSON dengan `express.json()`.
- Mode development memakai Vite middleware mode.
- HMR/watch default aktif di development.
- File watcher memakai polling default agar perubahan dari `/mnt/d` WSL/Windows ikut terdeteksi.
- Jika perlu mematikan HMR/watch, jalankan dengan `DISABLE_HMR=true`.
- Jika polling terlalu berat, jalankan dengan `USE_POLLING=false`.
- Production serve `dist` dan fallback SPA ke `dist/index.html`.
- Listen `0.0.0.0`.
- Default port `3000`, auto fallback sampai `3010` jika `PORT` tidak diset.

`vite.config.ts`:

- Plugin React dan Tailwind.
- Alias `@` ke root project.
- HMR/watch default aktif, bisa dimatikan dengan `DISABLE_HMR=true`.
- Polling default aktif, bisa dimatikan dengan `USE_POLLING=false`.

## Do

- Baca `docs/PROJECT_CONTEXT.md` dulu sebelum eksplorasi besar.
- Gunakan `rg` atau `rg --files` untuk pencarian cepat.
- Pakai server user di `http://localhost:3000` untuk verifikasi visual.
- Jalankan `npm run lint` setelah edit TypeScript/React jika masuk akal.
- Jaga perubahan tetap scoped pada permintaan user.
- Ikuti pola komponen existing: data di `data.ts`, type di `types.ts`, UI per komponen.
- Gunakan `lucide-react` untuk icon baru jika tersedia.
- Jaga responsive layout mobile dan desktop.
- Jangan revert perubahan user yang sudah ada di worktree.

## Don't

- Jangan menjalankan `npm run dev`/start server lagi tanpa instruksi eksplisit.
- Jangan edit `node_modules/`, `dist/`, atau zip di `master/` kecuali diminta.
- Jangan melakukan redesign total, mengganti palette, atau memindahkan arsitektur tanpa kebutuhan jelas.
- Jangan mengganti semua copywriting hanya karena menemukan typo kecil, kecuali user meminta polishing/copyedit.
- Jangan menambah dependency baru untuk masalah sederhana.
- Jangan memakai command destruktif seperti `git reset --hard` atau checkout file tanpa izin user.
- Jangan menganggap `.env.example` dipakai runtime saat ini; env yang tampak relevan untuk server lokal adalah `PORT`, `NODE_ENV`, `DISABLE_HMR`, dan `USE_POLLING`.

## Kondisi Worktree Saat Dokumentasi Dibuat

Saat dokumen ini dibuat, `git status --short` menunjukkan ada perubahan belum commit pada:

- `server.ts`
- `src/App.tsx`

Perubahan itu dianggap milik user/pekerjaan sebelumnya. Jangan revert tanpa instruksi eksplisit.
