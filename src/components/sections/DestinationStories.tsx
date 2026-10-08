"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Utensils,
  Gem,
  Volume2,
  Compass,
  ArrowRight,
  Shield,
} from "lucide-react";
import { enrichedDestinations, DestinationStory } from "@/data/atlasEngine";

export default function DestinationStories({
  onSelectForPlanner,
}: {
  onSelectForPlanner?: (destName: string) => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const dest: DestinationStory = enrichedDestinations[currentIndex] || enrichedDestinations[0];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? enrichedDestinations.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === enrichedDestinations.length - 1 ? 0 : prev + 1));
  };

  const handlePlanVoyage = () => {
    if (onSelectForPlanner) onSelectForPlanner(dest.name);
    const el = document.getElementById("journey-planner");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="destination-stories"
      className="w-full min-h-screen bg-[#F5F3EE] text-[#1D1D1D] relative flex flex-col justify-between overflow-hidden py-16 px-6 sm:px-12 border-b border-[#1B4332]/10"
    >
      {/* Background Subtle Watermark */}
      <div className="absolute top-12 left-12 text-[120px] font-heading font-extrabold text-[#1B4332]/[0.03] select-none pointer-events-none">
        {dest.name.toUpperCase()}
      </div>

      {/* Top Editorial Monograph Header */}
      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B4332]/10 text-[#1B4332] text-xs font-mono tracking-widest uppercase mb-2">
            <Compass className="w-3.5 h-3.5 text-[#40916C]" />
            <span>SECTION 03 — SINGAPORE PRECINCT MONOGRAPHS</span>
          </div>
          <div className="text-xs font-mono text-[#5A625C]">
            INDEX 0{currentIndex + 1} OF 0{enrichedDestinations.length} — SINGAPORE
          </div>
        </div>

        {/* Stepper Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-[#1B4332]/20 hover:border-[#1B4332] bg-white flex items-center justify-center text-[#1B4332] hover:bg-[#1B4332] hover:text-white transition-all shadow-sm"
            aria-label="Previous precinct"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="font-mono text-xs font-semibold text-[#1B4332] min-w-16 text-center">
            {currentIndex + 1} of {enrichedDestinations.length}
          </span>
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-[#1B4332]/20 hover:border-[#1B4332] bg-white flex items-center justify-center text-[#1B4332] hover:bg-[#1B4332] hover:text-white transition-all shadow-sm"
            aria-label="Next precinct"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Full-Screen Editorial Spread */}
      <div className="max-w-7xl mx-auto w-full relative z-10 my-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={dest.name}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            {/* Left Column: Photographic Trio */}
            <div className="lg:col-span-7 relative">
              <div className="relative aspect-[16/11] rounded-3xl overflow-hidden shadow-2xl border border-[#1B4332]/10 group">
                <img
                  src={dest.heroImage}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Overlaid Editorial Captions */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-[#D4A373] uppercase mb-1">
                    <MapPin className="w-3.5 h-3.5 text-[#E76F51]" />
                    <span>
                      {dest.name}, Singapore • Code: {dest.code}
                    </span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-heading font-medium tracking-tight text-white">
                    {dest.tagline}
                  </h3>
                </div>

                <div className="absolute top-5 right-5 px-3 py-1.5 rounded-full bg-[#1B4332]/85 backdrop-blur-md text-[#D4A373] border border-[#D4A373]/30 text-xs font-mono">
                  {dest.bestSeason}
                </div>
              </div>

              {/* Secondary Duo Photos */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-[#1B4332]/10 shadow-sm">
                  <img
                    src={dest.foodImage}
                    alt={`${dest.name} Gastronomy`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[9px] font-mono tracking-widest uppercase text-[#D4A373] block">
                      GASTRONOMY
                    </span>
                    <span className="text-xs font-heading font-medium line-clamp-1">
                      {dest.gastronomySignature.split(",")[0]}
                    </span>
                  </div>
                </div>

                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-[#1B4332]/10 shadow-sm">
                  <img
                    src={dest.cultureImage}
                    alt={`${dest.name} Culture`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[9px] font-mono tracking-widest uppercase text-[#D4A373] block">
                      HERITAGE & SANCTUARY
                    </span>
                    <span className="text-xs font-heading font-medium line-clamp-1">
                      {dest.cultureEthos.split("—")[0]}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Dossier */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="editorial-tag text-[#40916C]">SINGAPORE PRECINCT MANIFEST</span>
                <h3 className="text-4xl sm:text-5xl font-heading font-light text-[#1B4332] mt-1 tracking-tight">
                  {dest.name}
                </h3>
                <p className="mt-4 text-base font-subheading text-[#5A625C] leading-relaxed">
                  {dest.leadParagraph}
                </p>
              </div>

              {/* 4 Fact Pillars */}
              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-[#1B4332]/10 shadow-sm flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#1B4332]/10 text-[#1B4332] flex items-center justify-center shrink-0 mt-0.5">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#1B4332] font-semibold">
                      HERITAGE & ETHOS
                    </h4>
                    <p className="text-xs font-subheading text-[#5A625C] mt-1 leading-relaxed">
                      {dest.cultureEthos}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#1B4332]/10 shadow-sm flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#D4A373]/20 text-[#1B4332] flex items-center justify-center shrink-0 mt-0.5">
                    <Utensils className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#1B4332] font-semibold">
                      GASTRONOMY SIGNATURE
                    </h4>
                    <p className="text-xs font-subheading text-[#5A625C] mt-1 leading-relaxed">
                      {dest.gastronomySignature}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#1B4332]/10 shadow-sm flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#E76F51]/15 text-[#E76F51] flex items-center justify-center shrink-0 mt-0.5">
                    <Gem className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#1B4332] font-semibold">
                      SANCTUARY HIDDEN GEM
                    </h4>
                    <p className="text-xs font-subheading text-[#5A625C] mt-1 leading-relaxed">
                      {dest.hiddenGem}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#1B4332]/10 shadow-sm flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#40916C]/15 text-[#40916C] flex items-center justify-center shrink-0 mt-0.5">
                    <Volume2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#1B4332] font-semibold">
                      SENSORY SOUNDSCAPE
                    </h4>
                    <p className="text-xs font-subheading text-[#5A625C] mt-1 leading-relaxed">
                      {dest.soundscapeVibe}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="p-5 rounded-2xl bg-[#1B4332] text-[#F5F3EE] flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#D4A373] block">
                    CURATED EXPEDITION BUDGET
                  </span>
                  <span className="text-lg font-mono font-bold text-white">
                    ${dest.minBudgetSGD.toLocaleString()} – ${dest.maxBudgetSGD.toLocaleString()} SGD
                  </span>
                </div>

                <button
                  onClick={handlePlanVoyage}
                  className="px-5 py-3 rounded-xl bg-[#D4A373] hover:bg-[#c49262] text-[#0F261C] font-heading font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <span>Plan This Journey</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Precinct Selector Ribbon */}
      <div className="max-w-7xl mx-auto w-full relative z-10 pt-8 border-t border-[#1B4332]/10 mt-8">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2">
          {enrichedDestinations.map((d, idx) => (
            <button
              key={d.name}
              onClick={() => setCurrentIndex(idx)}
              className={`px-4 py-2 rounded-full text-xs font-mono shrink-0 transition-all ${
                currentIndex === idx
                  ? "bg-[#1B4332] text-[#F5F3EE] font-bold shadow-sm"
                  : "bg-white text-[#5A625C] hover:bg-[#EAE6DF] border border-[#1B4332]/10"
              }`}
            >
              0{idx + 1}. {d.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
