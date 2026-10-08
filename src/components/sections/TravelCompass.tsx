"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  ArrowDown,
  Wind,
  Navigation,
  Globe,
  CheckCircle2,
} from "lucide-react";
import { IMAGES } from "@/data/imageCatalog";
import { platformMetrics } from "@/data/atlasEngine";
import { analytics } from "@/lib/analytics";

export type CompassModality =
  | "Adventure"
  | "Luxury"
  | "Family"
  | "Business"
  | "Culture"
  | "Nature";

interface CompassOption {
  id: CompassModality;
  label: string;
  degrees: number;
  bearing: string;
  tagline: string;
  recommendedPrecincts: string[];
  startingBudgetSGD: number;
  sensoryNote: string;
  image: string;
}

const COMPASS_OPTIONS: CompassOption[] = [
  {
    id: "Adventure",
    label: "Adventure",
    degrees: 0,
    bearing: "000° NORTH",
    tagline: "MacRitchie TreeTop Canopy Walks & Pulau Ubin Coastal Trails",
    recommendedPrecincts: ["MacRitchie Canopies", "Pulau Ubin & Changi", "Southern Islands"],
    startingBudgetSGD: 1200,
    sensoryNote: "Morning rainforest mist, high suspension canopy views, and granite island trails.",
    image: IMAGES.dna.adventure,
  },
  {
    id: "Luxury",
    label: "Luxury",
    degrees: 60,
    bearing: "060° NORTHEAST",
    tagline: "Private Sentosa Villas, Michelin Gastronomy & Superyacht Charters",
    recommendedPrecincts: ["Sentosa Cove", "Marina Bay", "Dempsey Hill"],
    startingBudgetSGD: 2400,
    sensoryNote: "Private infinity pools, rare vintage cellars, and discreet limousine service.",
    image: IMAGES.dna.luxury,
  },
  {
    id: "Family",
    label: "Family",
    degrees: 120,
    bearing: "120° SOUTHEAST",
    tagline: "Gardens by the Bay Conservatories & Mandai Wildlife Sanctuaries",
    recommendedPrecincts: ["Gardens by the Bay", "Mandai Nature Reserve", "Sentosa Cove"],
    startingBudgetSGD: 1450,
    sensoryNote: "Indoor misty waterfalls, night safari discoveries, and tranquil family villas.",
    image: IMAGES.dna.family,
  },
  {
    id: "Business",
    label: "Business",
    degrees: 180,
    bearing: "180° SOUTH",
    tagline: "Marina Bay Skyline Suites & Executive Changi JetQuay Handover",
    recommendedPrecincts: ["Marina Bay", "Civic District", "Dempsey Hill"],
    startingBudgetSGD: 1600,
    sensoryNote: "High-floor boardroom views, private club dining, and zero-friction transit.",
    image: IMAGES.dna.business,
  },
  {
    id: "Culture",
    label: "Culture",
    degrees: 240,
    bearing: "240° SOUTHWEST",
    tagline: "Peranakan Heritage Shophouses, Arab Street Attars & Art Deco Estates",
    recommendedPrecincts: ["Joo Chiat", "Kampong Glam", "Tiong Bahru"],
    startingBudgetSGD: 1350,
    sensoryNote: "Ceramic tile workshops, fragrant attar blending, and protected 1930s architecture.",
    image: IMAGES.dna.culture,
  },
  {
    id: "Nature",
    label: "Nature",
    degrees: 300,
    bearing: "300° NORTHWEST",
    tagline: "Primary Dipterocarp Forests, Mangrove Wetlands & Botanical Collections",
    recommendedPrecincts: ["MacRitchie Canopies", "Mandai Nature Reserve", "Dempsey Hill"],
    startingBudgetSGD: 1300,
    sensoryNote: "Ancient equatorial trees, singing forest birds, and UNESCO heritage orchids.",
    image: IMAGES.dna.nature,
  },
];

export default function TravelCompass({
  selectedModality,
  onSelectModality,
}: {
  selectedModality: CompassModality;
  onSelectModality: (modality: CompassModality) => void;
}) {
  const currentOption =
    COMPASS_OPTIONS.find((c) => c.id === selectedModality) || COMPASS_OPTIONS[0];

  const scrollToNextSection = () => {
    const el = document.getElementById("dna-analyzer");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full min-h-screen bg-[#0F261C] text-[#F5F3EE] flex flex-col justify-between overflow-hidden select-none">
      {/* Background Cartographic Astrolabe Grid */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#D4A373_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-[#D4A373]/30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] rounded-full border border-[#D4A373]/15 border-dashed" />
      </div>

      {/* Atmospheric Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#40916C]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-[#D4A373]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* TOP HEADER */}
      <header className="relative z-20 px-6 sm:px-12 pt-8 pb-4 flex items-center justify-between border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border border-[#D4A373]/40 bg-[#1B4332] flex items-center justify-center text-[#D4A373]">
            <Compass className="w-4 h-4 text-[#D4A373]" />
          </div>
          <div>
            <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[#D4A373] block">
              ATLAS JOURNEY SINGAPORE
            </span>
            <span className="text-xs text-white/70 font-mono">
              LAT 01°21′N • LON 103°49′E • SINGAPORE PLATFORM
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6 text-xs font-mono text-white/70">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#40916C]" />
            <span>SINGAPORE SANCTUARIES & HERITAGE ACTIVE</span>
          </div>
          <div className="text-[#D4A373]">
            <span>10 CURATED LUXURY PRECINCTS</span>
          </div>
        </div>
      </header>

      {/* CENTRAL INTERACTIVE TRAVEL COMPASS */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-6 sm:px-12 py-8 my-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Column: Headline and Modality Matrix */}
        <div className="w-full lg:w-1/2 text-left">
          {/* Replaced four-pointed sparkle icon with elegant minimal geometric emblem */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#D4A373]/30 text-[#D4A373] text-[11px] font-mono tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A373]" />
            <span>VOYAGE ORIENTATION</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-light tracking-tight text-white leading-[1.1] mb-6">
            Where will your{" "}
            <span className="italic font-normal text-[#D4A373] underline decoration-[#40916C]/50 decoration-wavy">
              Singapore story
            </span>{" "}
            begin?
          </h1>

          <p className="text-base sm:text-lg text-white/75 font-subheading leading-relaxed max-w-xl mb-8">
            Atlas Journey is engineered exclusively for Singapore. Calibrate the navigational
            compass to align your voyage modality with tailored precincts, heritage architecture,
            and private culinary reservations.
          </p>

          {/* Compass Modality Buttons */}
          <div className="space-y-3">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#D4A373]/90 flex items-center gap-2">
              <Navigation className="w-3.5 h-3.5" />
              <span>SELECT COMPASS BEARING:</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {COMPASS_OPTIONS.map((opt) => {
                const isSelected = opt.id === selectedModality;
                return (
                  <button
                    key={opt.id}
                    onClick={() => {
                      onSelectModality(opt.id);
                      analytics.compassSelected(opt.id);
                    }}
                    className={`group relative px-4 py-3 rounded-xl border text-left transition-all duration-300 ${
                      isSelected
                        ? "bg-[#1B4332] border-[#D4A373] shadow-lg"
                        : "bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/10"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-mono text-white/50 group-hover:text-[#D4A373] transition-colors">
                        {opt.bearing.split(" ")[0]}
                      </span>
                      {isSelected && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D4A373]" />
                      )}
                    </div>
                    <div className="text-sm font-heading font-medium text-white group-hover:text-[#D4A373] transition-colors">
                      {opt.label}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: 360° Rotating Celestial Compass Dial & Resonance Card */}
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] flex items-center justify-center">
            {/* Outer Compass Housing */}
            <div className="absolute inset-0 rounded-full border-2 border-[#D4A373]/30 bg-gradient-to-b from-white/[0.04] to-black/40 backdrop-blur-md" />

            {/* Rotating Cardinal Ring */}
            <div className="absolute inset-4 rounded-full border border-white/15 flex items-center justify-center">
              <span className="absolute top-2 text-[11px] font-mono font-bold tracking-wider text-[#E76F51]">
                N • 000°
              </span>
              <span className="absolute right-3 text-[11px] font-mono text-white/60">
                E • 090°
              </span>
              <span className="absolute bottom-2 text-[11px] font-mono text-white/60">
                S • 180°
              </span>
              <span className="absolute left-3 text-[11px] font-mono text-white/60">
                W • 270°
              </span>
            </div>

            <div className="absolute inset-14 rounded-full border border-[#D4A373]/20 border-dashed" />
            <div className="absolute inset-24 rounded-full border border-white/10" />

            {/* Needle */}
            <motion.div
              animate={{ rotate: currentOption.degrees }}
              transition={{ type: "spring", stiffness: 60, damping: 14 }}
              className="relative w-full h-full flex items-center justify-center pointer-events-none z-10"
            >
              <div className="absolute top-8 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[90px] border-b-[#E76F51]" />
              <div className="absolute bottom-8 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[80px] border-t-[#D4A373]" />
              <div className="w-8 h-8 rounded-full bg-[#1B4332] border-2 border-[#D4A373] shadow-lg flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-[#F5F3EE]" />
              </div>
            </motion.div>

            <div className="absolute bottom-6 px-3 py-1 rounded-full bg-black/60 border border-[#D4A373]/30 text-[10px] font-mono text-[#D4A373] tracking-widest uppercase">
              BEARING: {currentOption.bearing}
            </div>
          </div>

          {/* Dynamic Resonance Manifest Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentOption.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="mt-6 w-full max-w-md p-5 rounded-2xl bg-white/[0.06] border border-[#D4A373]/30 backdrop-blur-xl relative overflow-hidden"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4A373]">
                    CALIBRATED ARCHETYPE
                  </span>
                  <h3 className="text-xl font-heading font-medium text-white">
                    {currentOption.label} Expedition
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono uppercase text-white/50 block">
                    PACKAGES FROM
                  </span>
                  <span className="text-base font-mono font-semibold text-[#D4A373]">
                    ${currentOption.startingBudgetSGD.toLocaleString()} SGD
                  </span>
                </div>
              </div>

              <p className="text-xs text-white/70 font-subheading leading-relaxed mb-4">
                {currentOption.tagline}
              </p>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-white/80">
                  <span className="text-[#D4A373] text-[10px] font-mono uppercase">
                    PRECINCTS:
                  </span>
                  <span className="font-medium text-white">
                    {currentOption.recommendedPrecincts.join(" • ")}
                  </span>
                </div>
                <button
                  onClick={scrollToNextSection}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#40916C] hover:bg-[#347858] text-[11px] font-semibold text-white tracking-wide transition-colors"
                >
                  <span>Synthesize DNA</span>
                  <ArrowDown className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="relative z-20 px-6 sm:px-12 py-5 flex items-center justify-between border-t border-white/10 text-xs font-mono text-white/50">
        <div className="flex items-center gap-2">
          <Wind className="w-3.5 h-3.5 text-[#D4A373]" />
          <span>SINGAPORE METEOROLOGICAL RADAR: EQUATORIAL COASTAL CLEARANCE</span>
        </div>

        <button
          onClick={scrollToNextSection}
          className="group flex items-center gap-2 text-white/70 hover:text-[#D4A373] transition-colors"
        >
          <span>PROCEED TO TRAVEL DNA ANALYZER</span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
        </button>
      </footer>
    </section>
  );
}
