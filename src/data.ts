import { Project, CustomizerState, EstimateResult } from "./types";

export const PROJECTS_DATA: Project[] = [
  {
    id: "al-akbar",
    name: "Masjid Agung Al-Akbar, Surabaya",
    location: "Surabaya, Jawa Timur",
    material: "Enamel Baja (Steel Enamel) Premium",
    diameter: 28,
    height: 18,
    description: "Kubah raksasa bermotif geometris daun berwarna hijau toska khas Al-Akbar. Menggunakan lapisan enamel anti-bakar, tahan gempa, dan sistem pelat baja tahan karat premium untuk area iklim tropis berkelembaban tinggi.",
    image: "/src/assets/images/project_al_akbar_1780063109705.png",
    year: 2021,
    specifications: [
      { label: "Bahan Utama", value: "Baja Enamel Premium SPCC-SD" },
      { label: "Diameter Kubah", value: "28 Meter" },
      { label: "Tinggi Kubah", value: "18 Meter" },
      { label: "Warna Dominan", value: "Hijau Toska-Emas Turunan 3 Dimensi" },
      { label: "Sistem Rangka", value: "Sasis Space Frame Double Layer" },
      { label: "Ketahanan Cuaca", value: "Up to 30 Tahun Tanpa Memudar" }
    ]
  },
  {
    id: "al-jabbar",
    name: "Masjid Raya Al-Jabbar, Bandung",
    location: "Gedebage, Bandung, Jawa Barat",
    material: "Kubah Kaca Geometris & Stainless Gold Panel",
    diameter: 32,
    height: 24,
    description: "Pekerjaan sasis struktur super-kolosal dari kubah kaca bermotif segitiga bersinar. Menggunakan baja galvanis celup panas (HDG) anti korosi dengan lapis presisi waterproofing membran kedap air ganda.",
    image: "/src/assets/images/project_al_jabbar_1780063127068.png",
    year: 2022,
    specifications: [
      { label: "Bahan Utama", value: "Kombinasi Kaca Laminasi & Stainless Gold" },
      { label: "Diameter Kubah", value: "32 Meter" },
      { label: "Tinggi Kubah", value: "24 Meter" },
      { label: "Fitur Unggulan", value: "Pencahayaan LED Terintegrasi" },
      { label: "Rangka Pengaku", value: "Heavy Duty Truss Hollow 150x150" },
      { label: "Teknik Pasang", value: "Ereksi Segmental Crane Presisi" }
    ]
  },
  {
    id: "al-falah",
    name: "Masjid Agung Al-Falah, Jambi",
    location: "Kota Jambi, Jambi",
    material: "Gold Brass (Kuningan Bakar Jawa-Emas)",
    diameter: 16,
    height: 11,
    description: "Kubah kubah bawang elok berlapis kuningan tempa bakar nan legendaris. Detail ornamen kaligrafi khas ornamen Melayu Jambi dipahat tangan halus oleh pengrajin terbaik sasis CV Beton Agung.",
    image: "/src/assets/images/project_al_falah_1780063147603.png",
    year: 2020,
    specifications: [
      { label: "Bahan Utama", value: "Kuningan Plat 1.2mm Hand-Crafted" },
      { label: "Diameter Kubah", value: "16 Meter" },
      { label: "Tinggi Kubah", value: "11 Meter" },
      { label: "Ketebalan Logam", value: "1.2 mm - 1.5 mm" },
      { label: "Pelapis Eksterior", value: "Clear Coating Polyurethane Satin" },
      { label: "Sasis Penahan", value: "Struktur Konstruksi Pipa Schedule 40" }
    ]
  },
  {
    id: "baiturrahman",
    name: "Masjid Raya Baiturrahman, Aceh",
    location: "Banda Aceh, Nanggroe Aceh Darussalam",
    material: "Kubah Hitam Klasik Bersejarah Khas Kerajaan Aceh",
    diameter: 14,
    height: 10,
    description: "Restorasi dan pembuatan ulang kubah hitam megah tahan tsunami yang legendaris. Konstruksi tahan gempa berserat tinggi dengan serat aspal sasis baja tahan korosi angin laut samudra.",
    image: "/src/assets/images/project_baiturrahman_1780063165472.png",
    year: 2023,
    specifications: [
      { label: "Bahan Utama", value: "Baja Hitam Berlapis Bitumen Membran" },
      { label: "Diameter Kubah", value: "14 Meter" },
      { label: "Tinggi Kubah", value: "10 Meter" },
      { label: "Ketahanan Korosi", value: "Ketahanan Udara Garam Laut Maksimal" },
      { label: "Garansi Struktural", value: "25 Tahun Garansi Pasang" },
      { label: "Nilai Estetika", value: "Replika Orisinil Kesultanan Aceh Darussalam" }
    ]
  }
];

export const MATERIAL_SPECS = {
  tembaga: {
    label: "Tembaga (Copper) Murni",
    description: "Logam klasik prestisius yang seiring waktu teroksidasi menghasilkan warna patina kehijauan artistik yang bernilai sejarah tinggi.",
    density: 12.5, // kg/m^2
    costPerSqmMin: 3200000,
    costPerSqmMax: 5000000,
    pros: ["Nilai prestise tinggi", "Makin tua semakin indah dengan patina", "Tahan korosi ekstrem"],
    cons: ["Investasi awal lebih tinggi", "Waktu pengerjaan ornamen manual sedikit lebih lama"]
  },
  kuningan: {
    label: "Kuningan (Gold Brass)",
    description: "Alternatif logam berkilau emas mewah yang megah. Tampilan metal kuning mengilap yang dipolish dengan clear polyurethane anti UV.",
    density: 13.0,
    costPerSqmMin: 3400000,
    costPerSqmMax: 5500000,
    pros: ["Kilau mirip emas 24 karat", "Sangat elegan di bawah terik matahari", "Tahan cuaca tropis"],
    cons: ["Membutuhkan coating ulang berkala setelah belasan tahun"]
  },
  enamel: {
    label: "Enamel Tegola (Baja Enamel Premium)",
    description: "Baja khusus yang dilapisi keramik kaca silika dipanaskan suhu 800°C. Warna sangat cerah tahan pudar, tahan karat, tahan api melampaui 30 tahun.",
    density: 18.0,
    costPerSqmMin: 2200000,
    costPerSqmMax: 3600000,
    pros: ["Warna dinamis bebas pudar", "Tahan panas api tinggi", "Kedap air luar biasa"],
    cons: ["Sasis pendukung harus lebih kokoh karena massa material lebih berat"]
  },
  galvalum: {
    label: "Galvalum Powder Coating",
    description: "Bahan ringan berteknologi tinggi berlapis aluminium seng presisi tinggi, dilapisi powder coating warna anti retak. Pilihan ekonomis berkualitas.",
    density: 9.5,
    costPerSqmMin: 1200000,
    costPerSqmMax: 2000000,
    pros: ["Bobot sangat ringan", "Budget bersahabat", "Banyak pilihan warna cerah"],
    cons: ["Ketahanan warna lebih pendek dibanding Enamel baja (kisaran 10-15 tahun)"]
  }
};

export const SHAPE_MULTIPLIERS = {
  bawang: {
    label: "Kubah Bawang (Onion Bulb)",
    factor: 2.3 // surface area estimate multiplier relative to flat circle r^2
  },
  setengah_bola: {
    label: "Setengah Bola (Dome Hemisphere)",
    factor: 2.0
  },
  madinah: {
    label: "Kubah Madinah (Selasar Presisi)",
    factor: 1.85
  },
  oval: {
    label: "Kubah Oval (Ellipsoid)",
    factor: 2.15
  }
};

/**
 * Calculates dynamic estimation for the dome pricing and structure.
 */
export function calculateEstimate(state: CustomizerState): EstimateResult {
  const r = state.diameter / 2;
  const areaMultiplier = SHAPE_MULTIPLIERS[state.domeShape].factor;
  
  // Calculate surface area: Area = factor * PI * r^2
  const surfaceArea = areaMultiplier * Math.PI * Math.pow(r, 2);
  
  // Material density coefficient
  const matSpec = MATERIAL_SPECS[state.material];
  const estimatedWeight = surfaceArea * matSpec.density;
  
  // Base dome material cost
  const baseCostMin = surfaceArea * matSpec.costPerSqmMin;
  const baseCostMax = surfaceArea * matSpec.costPerSqmMax;
  
  // Sasis (Spaceframe structure) estimates
  let sasisWeight = 0;
  let sasisMin = 0;
  let sasisMax = 0;
  if (state.includeSasis) {
    sasisWeight = surfaceArea * 14.5; // ~14.5 kg of steel per sqm
    sasisMin = sasisWeight * 32000; // Rp 32.0000 per kg fabrication & erection
    sasisMax = sasisWeight * 45000; // Rp 45.000 per kg heavy grade steel
  }
  
  // Installation & lifting crane cost
  let installationCost = 0;
  if (state.needsInstallation) {
    // Mobilization + Crane rental + safety crews
    const craneScaleFactor = state.diameter > 15 ? 18000000 : 8000000;
    installationCost = (surfaceArea * 180000) + craneScaleFactor;
  }
  
  const totalCostMin = baseCostMin + sasisMin + installationCost;
  const totalCostMax = baseCostMax + sasisMax + installationCost;
  
  // Technical steel grade recommended
  let structuralGrade = "Rangka Tunggal Medium (Siku/Pipa)";
  if (state.diameter > 18) {
    structuralGrade = "Double Layer Spaceframe ASTM A53 Truss";
  } else if (state.diameter > 10) {
    structuralGrade = "Single Layer Spaceframe Hollow ASTM A36";
  }
  
  // Completion duration estimate in weeks
  const baseWeeks = 6;
  const sizeWeeks = Math.ceil(state.diameter * 0.5);
  const materialExtra = state.material === "tembaga" || state.material === "kuningan" ? 3 : 0;
  const completionWeeks = baseWeeks + sizeWeeks + materialExtra;

  return {
    surfaceArea: parseFloat(surfaceArea.toFixed(1)),
    estimatedWeight: Math.round(estimatedWeight),
    costMin: Math.round(baseCostMin),
    costMax: Math.round(baseCostMax),
    sasisWeight: Math.round(sasisWeight),
    installationCost: Math.round(installationCost),
    totalCostMin: Math.round(totalCostMin),
    totalCostMax: Math.round(totalCostMax),
    structuralGrade,
    completionWeeks
  };
}
