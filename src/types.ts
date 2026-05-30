export interface Project {
  id: string;
  name: string;
  location: string;
  material: string;
  diameter: number;
  height: number;
  description: string;
  image: string;
  year: number;
  specifications: {
    label: string;
    value: string;
  }[];
}

export interface CustomizerState {
  domeShape: "bawang" | "setengah_bola" | "madinah" | "oval";
  diameter: number;
  height: number;
  material: "tembaga" | "kuningan" | "enamel" | "galvalum";
  includeSasis: boolean;
  needsInstallation: boolean;
}

export interface EstimateResult {
  surfaceArea: number;
  estimatedWeight: number; // in kg
  costMin: number; // in IDR
  costMax: number; // in IDR
  sasisWeight: number; // in kg
  installationCost: number; // in IDR
  totalCostMin: number;
  totalCostMax: number;
  structuralGrade: string;
  completionWeeks: number;
}
