import { useState, useEffect } from "react";
import { EstimateResult, CustomizerState } from "../types";
import { calculateEstimate, MATERIAL_SPECS, SHAPE_MULTIPLIERS } from "../data";
import { Calculator, Check } from "lucide-react";

export default function CostCalculator() {
  // Config state
  const [state, setState] = useState<CustomizerState>({
    domeShape: "bawang",
    diameter: 12,
    height: 8,
    material: "enamel",
    includeSasis: true,
    needsInstallation: true
  });

  const [result, setResult] = useState<EstimateResult | null>(null);

  // Recalculate estimates when configurator switches change
  useEffect(() => {
    const estimates = calculateEstimate(state);
    setResult(estimates);
  }, [state]);

  // Handle shape change (suggest heights matching shape proportions)
  const handleShapeChange = (shape: "bawang" | "setengah_bola" | "madinah" | "oval") => {
    let idealHeight = state.diameter * 0.65;
    if (shape === "setengah_bola") idealHeight = state.diameter * 0.5;
    else if (shape === "madinah") idealHeight = state.diameter * 0.75;
    else if (shape === "oval") idealHeight = state.diameter * 0.85;

    setState(prev => ({
      ...prev,
      domeShape: shape,
      height: Math.round(idealHeight * 10) / 10
    }));
  };

  const formatIDR = (num: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0
    }).format(num);
  };

  // WhatsApp redirection
  const handleExportWhatsApp = () => {
    const whatsappMsg = `Halo CV Beton Agung,\n\nSaya ingin berkonsultasi mengenai rancangan kubah kustom berikut:\n\n` + 
      `🏛️ *Spesifikasi Kubah*:\n` +
      `- Bentuk: ${SHAPE_MULTIPLIERS[state.domeShape].label}\n` +
      `- Diameter: ${state.diameter} Meter\n` +
      `- Tinggi Sasis: ${state.height} Meter\n` +
      `- Luas Permukaan: ${result?.surfaceArea} m²\n` +
      `- Material Panel: ${MATERIAL_SPECS[state.material].label}\n` +
      `- Termasuk Sasis Struktur: ${state.includeSasis ? "Ya" : "Tidak"}\n` +
      `- Termasuk Transport & Pasang: ${state.needsInstallation ? "Ya" : "Tidak"}\n\n` +
      `Estimated Sasis Grade: ${result?.structuralGrade}\n` +
      `Estimasi Budget Kasar: ${formatIDR(result?.totalCostMin || 0)} - ${formatIDR(result?.totalCostMax || 0)}\n\n` +
      `Mohon dihubungi oleh kontraktor / staf arsitek drafters untuk survey lokasi lebih lanjut. Terima kasih.`;

    const whatsappUrl = `https://wa.me/6281235567899?text=${encodeURIComponent(whatsappMsg)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div id="cost-calculator" className="w-full border border-[#C5A85C]/25 bg-[#08152c]/50 p-6 md:p-8 rounded-xl backdrop-blur-sm shadow-[0_0_30px_rgba(197,168,92,0.03)]">
      <div className="flex items-center gap-3 mb-8 pb-4 border-b border-[#C5A85C]/15">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#C5A85C]/10 border border-[#C5A85C]/35 text-[#C5A85C]">
          <Calculator className="h-4.5 w-4.5" />
        </div>
        <div>
          <h3 className="font-serif text-lg font-black tracking-tight text-[#E2E8F0]">
            Estimator Dimensi & Konstruksi
          </h3>
          <p className="font-sans text-[10px] uppercase tracking-[0.1em] text-[#94A3B8]">
            Formulasi sasis arsitektur, parameter panel, dan simulasi anggaran kustom
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Form controls - Configuration (7/12 width) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          
          {/* Shape Selector */}
          <div>
            <label className="block font-sans text-[9px] font-black tracking-[0.2em] text-[#C5A85C] uppercase mb-3">
              01. Konstruksi Profil Kubah (Islamic Shape)
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
              {(Object.keys(SHAPE_MULTIPLIERS) as Array<keyof typeof SHAPE_MULTIPLIERS>).map((shape) => (
                <button
                  key={shape}
                  type="button"
                  onClick={() => handleShapeChange(shape)}
                  className={`flex flex-col items-center justify-between p-4 rounded-lg transition-all border ${
                    state.domeShape === shape
                      ? "border-[#C5A85C] bg-[#C5A85C] text-[#030a16] shadow-[0_0_15px_rgba(197,168,92,0.2)]"
                      : "border-[#C5A85C]/15 bg-[#030a16]/45 text-[#94A3B8] hover:border-[#C5A85C]/40 hover:text-[#E2E8F0]"
                  }`}
                >
                  {/* Miniature Wireframe SVG icon for shape profile */}
                  <svg className="h-9 w-9 mb-2.5 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 40 40">
                    {shape === "setengah_bola" && (
                      <path d="M5,30 A15,15 0 0,1 35,30 Z M5,30 L35,30" strokeWidth="1.5" strokeLinecap="round" />
                    )}
                    {shape === "bawang" && (
                      <path d="M5,30 C3,30 8,18 20,5 C32,18 37,30 35,30 Z M5,30 L35,30" strokeWidth="1.5" strokeLinecap="round" />
                    )}
                    {shape === "madinah" && (
                      <path d="M7,30 A13,11 0 0,1 33,30 L33,30 L7,30" strokeWidth="1.5" strokeLinecap="round" />
                    )}
                    {shape === "oval" && (
                      <path d="M12,30 A8,16 0 0,1 28,30 Z M12,30 L28,30" strokeWidth="1.5" strokeLinecap="round" />
                    )}
                    <line x1="20" y1="5" x2="20" y2="30" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,2" />
                  </svg>
                  <span className="font-sans text-[10px] uppercase font-bold tracking-wider leading-tight">
                    {SHAPE_MULTIPLIERS[shape].label.split(" (")[0]}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Sizing sliders (Diameter & Height) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Diameter Slider */}
            <div className="bg-[#030a16]/50 p-4 border border-[#C5A85C]/15 rounded-lg">
              <div className="flex justify-between items-baseline mb-1">
                <label className="font-sans text-[9px] font-bold tracking-wider text-[#E2E8F0] uppercase">
                  Diameter Lingkar (Ø)
                </label>
                <span className="font-mono text-xs font-bold text-[#C5A85C]">
                  {state.diameter} Meter
                </span>
              </div>
              <p className="font-sans text-[10px] text-[#94A3B8] mb-3">
                Lebar tumpuan cincin beton penahan sasis.
              </p>
              <input
                type="range"
                min="3"
                max="40"
                step="1"
                value={state.diameter}
                onChange={(e) => {
                  const d = parseInt(e.target.value);
                  setState(prev => ({
                    ...prev,
                    diameter: d,
                    height: Math.round((d * (SHAPE_MULTIPLIERS[prev.domeShape].factor - 1.35)) * 10) / 10
                  }));
                }}
                className="w-full accent-[#C5A85C] cursor-pointer"
              />
              <div className="flex justify-between text-[9px] text-[#94A3B8]/40 font-mono mt-1">
                <span>3m</span>
                <span>20m</span>
                <span>40m</span>
              </div>
            </div>

            {/* Height Slider */}
            <div className="bg-[#030a16]/50 p-4 border border-[#C5A85C]/15 rounded-lg">
              <div className="flex justify-between items-baseline mb-1">
                <label className="font-sans text-[9px] font-bold tracking-wider text-[#E2E8F0] uppercase">
                  Tinggi Sasis (H)
                </label>
                <span className="font-mono text-xs font-bold text-[#C5A85C]">
                  {state.height} Meter
                </span>
              </div>
              <p className="font-sans text-[10px] text-[#94A3B8] mb-3">
                Elevasi tegak lurus ke mahkota tertinggi.
              </p>
              <input
                type="range"
                min={Math.max(2, Math.round(state.diameter * 0.3))}
                max={Math.min(30, Math.round(state.diameter * 1.5))}
                step="0.5"
                value={state.height}
                onChange={(e) => setState(prev => ({ ...prev, height: parseFloat(e.target.value) }))}
                className="w-full accent-[#C5A85C] cursor-pointer"
              />
              <div className="flex justify-between text-[9px] text-[#94A3B8]/40 font-mono mt-1">
                <span>{Math.max(2, Math.round(state.diameter * 0.3))}m</span>
                <span>{Math.min(30, Math.round(state.diameter * 1.5))}m Max</span>
              </div>
            </div>
          </div>

          {/* Material selection with technical pros/cons info */}
          <div>
            <label className="block font-sans text-[9px] font-black tracking-[0.2em] text-[#C5A85C] uppercase mb-3">
              02. Material Finishing Panel (Finishing Skin)
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
              {(Object.keys(MATERIAL_SPECS) as Array<keyof typeof MATERIAL_SPECS>).map((materialKey) => (
                <button
                  key={materialKey}
                  type="button"
                  onClick={() => setState(prev => ({ ...prev, material: materialKey }))}
                  className={`flex flex-col justify-between text-left p-4 rounded-lg transition-all border ${
                    state.material === materialKey
                      ? "border-[#C5A85C] bg-[#08152c] text-[#E2E8F0] shadow-[0_0_15px_rgba(197,168,92,0.1)]"
                      : "border-[#C5A85C]/15 bg-[#030a16]/45 text-[#94A3B8] hover:border-[#C5A85C]/35 hover:text-[#E2E8F0]"
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-1.5">
                    <span className="font-sans font-bold text-xs text-[#E2E8F0]">
                      {MATERIAL_SPECS[materialKey].label}
                    </span>
                    {state.material === materialKey && <Check className="h-4 w-4 text-[#C5A85C]" />}
                  </div>
                  <p className="font-sans text-[10px] text-[#94A3B8]/70 line-clamp-2 leading-relaxed">
                    {MATERIAL_SPECS[materialKey].description}
                  </p>
                </button>
              ))}
            </div>

            {/* Chosen Material Features Summary */}
            <div className="border border-[#C5A85C]/20 bg-[#030a16]/70 p-4 rounded-lg font-sans text-[10px] text-[#E2E8F0]/90">
              <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#C5A85C] font-bold mb-2">
                <span>Karakteristik Material Terpilih:</span>
                <span className="border border-[#C5A85C]/30 px-2 py-0.5 text-[9px] uppercase font-bold tracking-wider rounded">
                  {MATERIAL_SPECS[state.material].label.split(" (")[0]}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div>
                  <span className="text-[#C5A85C] font-semibold block uppercase text-[8px] tracking-widest mb-1">PROS</span>
                  <ul className="list-disc list-inside space-y-0.5 text-[#94A3B8]">
                    {MATERIAL_SPECS[state.material].pros.map((pro, idx) => (
                      <li key={idx} className="truncate">{pro}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className="text-[#94A3B8]/50 font-semibold block uppercase text-[8px] tracking-widest mb-1">NOTES</span>
                  <ul className="list-disc list-inside space-y-0.5 text-[#94A3B8]/95">
                    {MATERIAL_SPECS[state.material].cons.map((con, idx) => (
                      <li key={idx} className="truncate">{con}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Toggle Switches (Sasis Support frame and Crane crew) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="flex items-center justify-between p-4 bg-[#030a16]/50 border border-[#C5A85C]/15 rounded-lg cursor-pointer hover:bg-[#030a16]/85 transition-colors select-none">
              <div className="flex flex-col pr-2">
                <span className="font-sans text-[10px] font-bold text-[#E2E8F0] uppercase tracking-wider">
                  Rangka Baja Spaceframe
                </span>
                <span className="font-sans text-[10px] text-[#94A3B8] mt-0.5">
                  Struktur sasis pipa truss pendukung kubah panel.
                </span>
              </div>
              <input
                type="checkbox"
                checked={state.includeSasis}
                onChange={(e) => setState(prev => ({ ...prev, includeSasis: e.target.checked }))}
                className="h-4 w-4 accent-[#C5A85C] cursor-pointer"
              />
            </label>

            <label className="flex items-center justify-between p-4 bg-[#030a16]/50 border border-[#C5A85C]/15 rounded-lg cursor-pointer hover:bg-[#030a16]/85 transition-colors select-none">
              <div className="flex flex-col pr-2">
                <span className="font-sans text-[10px] font-bold text-[#E2E8F0] uppercase tracking-wider">
                  Mobilisasi & Pasang Baru
                </span>
                <span className="font-sans text-[10px] text-[#94A3B8] mt-0.5">
                  Termasuk handling lifting crane dwi-struktur.
                </span>
              </div>
              <input
                type="checkbox"
                checked={state.needsInstallation}
                onChange={(e) => setState(prev => ({ ...prev, needsInstallation: e.target.checked }))}
                className="h-4 w-4 accent-[#C5A85C] cursor-pointer"
              />
            </label>
          </div>

        </div>

        {/* Right Section - Diagnostic Output & Budgeting Result (5/12 width) */}
        <div className="lg:col-span-5 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#C5A85C]/15 pl-0 lg:pl-8 pt-6 lg:pt-0">
          <div>
            <span className="font-sans text-[9px] font-black tracking-[0.2em] text-[#C5A85C] uppercase block mb-1">
              Diagnostic Analisis Proyek
            </span>
            <h4 className="font-serif text-xl font-bold text-[#E2E8F0] mb-6">
              Rekomendasi Konstruksi
            </h4>

            {ifResultAvailable()}

          </div>

          {/* CTA Export Trigger buttons */}
          <div className="flex flex-col gap-3 mt-8 border-t border-[#C5A85C]/15 pt-6">
            <button
              onClick={handleExportWhatsApp}
              type="button"
              className="w-full flex items-center justify-center gap-2 rounded-full bg-[#C5A85C] hover:bg-[#D4AF37] px-5 py-3 font-sans text-[10px] uppercase tracking-widest font-bold text-[#030a16] transition-all hover:shadow-[0_0_15px_rgba(197,168,92,0.3)] cursor-pointer"
            >
              Export Spesifikasi (WhatsApp)
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  function ifResultAvailable() {
    if (!result) return null;

    const totalWeight = result.estimatedWeight + result.sasisWeight;

    return (
      <div className="flex flex-col gap-5">
        {/* Metric diagnostic cards */}
        <div className="grid grid-cols-2 gap-4 font-sans text-[#E2E8F0]">
          <div className="border-b border-[#C5A85C]/15 pb-3">
            <span className="text-[9px] uppercase tracking-wider text-[#94A3B8] block">Luas Selimut Kubah</span>
            <span className="text-xl font-light font-serif text-[#E2E8F0] block mt-0.5">{result.surfaceArea} m²</span>
          </div>
          <div className="border-b border-[#C5A85C]/15 pb-3">
            <span className="text-[9px] uppercase tracking-wider text-[#94A3B8] block">Estimasi Bobot Pasang</span>
            <span className="text-xl font-light font-serif text-[#E2E8F0] block mt-0.5">
              ~{totalWeight.toLocaleString("id-ID")} kg
            </span>
          </div>
          <div className="border-b border-[#C5A85C]/15 pb-3 font-sans">
            <span className="text-[9px] uppercase tracking-wider text-[#94A3B8] block font-sans">Grade Rangka</span>
            <span className="text-[11px] font-bold text-[#C5A85C] block mt-1 leading-snug">
              {result.structuralGrade}
            </span>
          </div>
          <div className="border-b border-[#C5A85C]/15 pb-3">
            <span className="text-[9px] uppercase tracking-wider text-[#94A3B8] block">Durasi Penyelesaian</span>
            <span className="text-xl font-light font-serif text-[#E2E8F0] block mt-0.5">± {result.completionWeeks} Minggu</span>
          </div>
        </div>

        {/* Budget Readout visual box */}
        <div className="mt-4 bg-[#030a16]/80 p-5 border border-[#C5A85C]/25 rounded-xl shadow-[0_0_15px_rgba(197,168,92,0.02)]">
          <div className="flex justify-between items-baseline mb-2">
            <span className="font-sans text-[9px] font-black tracking-widest text-[#C5A85C] uppercase">
              Proyeksi Rencana Anggaran
            </span>
            <span className="font-mono text-[8px] text-[#94A3B8]/50 block uppercase">
              IDR PRE-DESIGN
            </span>
          </div>
          <p className="font-sans text-[10px] text-[#94A3B8] leading-relaxed mb-4">
            Perkiraan kasarnya bertumpu pada panel premium {MATERIAL_SPECS[state.material].label.split(" (")[0]} dengan {state.includeSasis ? "sasis sasis baja pipa ganda," : "belum termasuk sasis,"} dan {state.needsInstallation ? "instalasi crane." : "pengiriman ex-work pabrik."}
          </p>

          <div className="flex flex-col gap-1.5 pt-3 border-t border-[#C5A85C]/15">
            <span className="font-serif text-2xl font-black text-[#E2E8F0] tracking-tight">
              {formatIDR(result.totalCostMin)}
            </span>
            <span className="font-sans text-[9px] uppercase tracking-wider text-[#94A3B8]/40">s/d</span>
            <span className="font-serif text-xl font-bold text-[#C5A85C] tracking-tight">
              {formatIDR(result.totalCostMax)}
            </span>
          </div>

          <p className="font-sans text-[8px] text-[#94A3B8]/35 leading-relaxed mt-4 border-t border-[#C5A85C]/10 pt-3">
            *Kalkulasi ini merupakan visualisasi awal. DED (Detail Engineering Design) final dirumuskan bersama konsultan sipil penanggung jawab pasca survey lokasi.
          </p>
        </div>
      </div>
    );
  }
}
