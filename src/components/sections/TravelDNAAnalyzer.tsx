"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dna,
  DollarSign,
  Clock,
  Compass,
  Users,
  Check,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";
import {
  singaporePackages,
  uniqueDestinationNames,
} from "@/data/atlasEngine";
import { analytics } from "@/lib/analytics";

export default function TravelDNAAnalyzer({
  onDnaGenerated,
}: {
  onDnaGenerated?: (personality: string) => void;
}) {
  const [budgetSGD, setBudgetSGD] = useState<number>(2400);
  const [durationDays, setDurationDays] = useState<string>("5 Days");
  const [travelStyle, setTravelStyle] = useState<string>("Gastronomic Odyssey");
  const [companion, setCompanion] = useState<string>("Romantic Partner");
  const [preferredDest, setPreferredDest] = useState<string>("Marina Bay");
  const [isSynthesizing, setIsSynthesizing] = useState<boolean>(false);

  const styles = [
    { id: "Contemplative Zen", desc: "Tea ceremonies, orchid sanctuaries, quiet pacing" },
    { id: "Gastronomic Odyssey", desc: "Three-star Michelin tables, Peranakan secrets, cellar wines" },
    { id: "High-Velocity Urbanite", desc: "Marina Bay sky lounges, design galleries, executive suites" },
    { id: "Remote Sanctuary", desc: "Sentosa private beach villas, rainforest canopies, sea breezes" },
  ];

  const companions = [
    { id: "Solo Nomad", icon: "🧭" },
    { id: "Romantic Partner", icon: "🥂" },
    { id: "Clan & Family", icon: "🌿" },
    { id: "Executive Cohort", icon: "💼" },
  ];

  const durations = ["3 Days", "4 Days", "5 Days", "7 Days", "10 Days"];

  const personalityResult = useMemo(() => {
    let archetype = "The Sensorial Cartographer";
    let motto = "Measuring Singapore through texture, heritage craftsmanship, and tropical light.";

    if (budgetSGD > 3000) {
      archetype = "The Sovereign Hedonist";
      motto = "Curating private Sentosa villas where bespoke luxury feels effortless and unseen.";
    } else if (travelStyle === "Contemplative Zen") {
      archetype = "The Mindful Heritage Seeker";
      motto = "Prioritizing the quietest Peranakan shophouse courtyard and rainforest dawn boardwalks.";
    } else if (travelStyle === "High-Velocity Urbanite") {
      archetype = "The Avant-Garde Metropolis Voyager";
      motto = "Synchronized to the pulse of Marina Bay skyline architecture and hidden listening bars.";
    } else if (travelStyle === "Remote Sanctuary") {
      archetype = "The Biophilic Wayfarer";
      motto = "Seeking unfiltered equatorial canopies, Lazarus Island waters, and orchid reserves.";
    }

    const matchedPackage =
      singaporePackages.find((p) =>
        p.title.toLowerCase().includes(preferredDest.toLowerCase().split(" ")[0])
      ) || singaporePackages[0];

    const daysNumber = parseInt(durationDays) || 5;
    const dailyAllocation = Math.round(budgetSGD / daysNumber);

    return {
      archetype,
      motto,
      matchedPackage,
      dailyAllocation,
      geneticScore: 98.4,
    };
  }, [budgetSGD, durationDays, travelStyle, companion, preferredDest]);

  const handleSynthesize = () => {
    setIsSynthesizing(true);
    setTimeout(() => {
      setIsSynthesizing(false);
      analytics.dnaCalculated(personalityResult.archetype, budgetSGD);
      if (onDnaGenerated) onDnaGenerated(personalityResult.archetype);
    }, 450);
  };

  return (
    <section
      id="dna-analyzer"
      className="w-full py-24 px-6 sm:px-12 bg-[#F5F3EE] text-[#1D1D1D] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B4332]/10 text-[#1B4332] text-xs font-mono tracking-widest uppercase mb-4">
            <Dna className="w-3.5 h-3.5 text-[#40916C]" />
            <span>SECTION 01 — TRAVEL INTELLIGENCE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-light tracking-tight text-[#1B4332] leading-tight">
            Travel DNA <span className="italic font-normal text-[#D4A373]">Analyzer</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg font-subheading text-[#5A625C] leading-relaxed">
            Every journey carries a personal signature. Calibrate your five voyage
            vectors to decode your personalized travel genome and generate algorithmic
            itinerary resonance across Singapore.
          </p>
        </div>

        {/* 2-Column Responsive Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Controls */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#1B4332]/10 shadow-sm space-y-8">
            {/* 1. Budget Slider */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-mono uppercase tracking-wider text-[#1B4332] font-semibold flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-[#40916C]" />
                  <span>1. TOTAL VOYAGE BUDGET (SGD)</span>
                </label>
                <span className="text-lg font-heading font-semibold text-[#1B4332] bg-[#F5F3EE] px-3.5 py-1 rounded-lg border border-[#1B4332]/10">
                  ${budgetSGD.toLocaleString()} SGD
                </span>
              </div>
              <input
                type="range"
                min={1000}
                max={4500}
                step={50}
                value={budgetSGD}
                onChange={(e) => setBudgetSGD(Number(e.target.value))}
                className="w-full accent-[#1B4332] h-2 bg-[#EAE6DF] rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-[11px] font-mono text-[#5A625C] mt-2">
                <span>$1,000 (Essential Refined)</span>
                <span>$2,500 (Signature Balanced)</span>
                <span>$4,500+ (Ultra Sovereign)</span>
              </div>
            </div>

            {/* 2. Duration */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-[#1B4332] font-semibold flex items-center gap-2 mb-3">
                <Clock className="w-4 h-4 text-[#40916C]" />
                <span>2. EXPEDITION DURATION</span>
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                {durations.map((dur) => (
                  <button
                    key={dur}
                    onClick={() => setDurationDays(dur)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-heading font-medium transition-all ${
                      durationDays === dur
                        ? "bg-[#1B4332] text-[#F5F3EE] shadow-sm"
                        : "bg-[#F5F3EE] text-[#1D1D1D] hover:bg-[#EAE6DF]"
                    }`}
                  >
                    {dur}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Travel Style */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-[#1B4332] font-semibold flex items-center gap-2 mb-3">
                <Compass className="w-4 h-4 text-[#40916C]" />
                <span>3. TRAVEL PHILOSOPHY & STYLE</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {styles.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setTravelStyle(s.id)}
                    className={`p-3.5 rounded-xl text-left border transition-all ${
                      travelStyle === s.id
                        ? "border-[#1B4332] bg-[#1B4332]/5 text-[#1B4332]"
                        : "border-[#1B4332]/10 bg-transparent hover:bg-[#F5F3EE] text-[#5A625C]"
                    }`}
                  >
                    <div className="text-xs font-heading font-semibold text-[#1D1D1D] flex items-center justify-between">
                      <span>{s.id}</span>
                      {travelStyle === s.id && <Check className="w-3.5 h-3.5 text-[#1B4332]" />}
                    </div>
                    <p className="text-[11px] font-subheading mt-1 opacity-80">{s.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Companion */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-[#1B4332] font-semibold flex items-center gap-2 mb-3">
                <Users className="w-4 h-4 text-[#40916C]" />
                <span>4. TRAVEL COMPANION</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {companions.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setCompanion(c.id)}
                    className={`py-3 px-3 rounded-xl text-xs font-heading font-medium flex items-center justify-center gap-2 transition-all ${
                      companion === c.id
                        ? "bg-[#1B4332] text-[#F5F3EE]"
                        : "bg-[#F5F3EE] text-[#1D1D1D] hover:bg-[#EAE6DF]"
                    }`}
                  >
                    <span>{c.icon}</span>
                    <span>{c.id}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 5. Destination Precinct */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-[#1B4332] font-semibold flex items-center gap-2 mb-3">
                <Compass className="w-4 h-4 text-[#40916C]" />
                <span>5. PRIMARY SINGAPORE PRECINCT</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {uniqueDestinationNames.map((dest) => (
                  <button
                    key={dest}
                    onClick={() => setPreferredDest(dest)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-subheading transition-all ${
                      preferredDest === dest
                        ? "bg-[#D4A373] text-[#0F261C] font-semibold shadow-sm"
                        : "bg-[#F5F3EE] text-[#5A625C] hover:bg-[#EAE6DF]"
                    }`}
                  >
                    {dest}
                  </button>
                ))}
              </div>
            </div>

            {/* Recalculate Button */}
            <button
              onClick={handleSynthesize}
              disabled={isSynthesizing}
              className="w-full py-4 rounded-2xl bg-[#1B4332] hover:bg-[#143326] text-[#F5F3EE] font-heading font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <RefreshCw className="w-4 h-4 text-[#D4A373]" />
              <span>{isSynthesizing ? "Recalibrating Genome..." : "Recalculate Travel Genome"}</span>
            </button>
          </div>

          {/* Right Column: Generated Genome Profile */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${personalityResult.archetype}-${budgetSGD}-${preferredDest}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="bg-[#1B4332] text-[#F5F3EE] rounded-3xl p-7 sm:p-9 border border-[#D4A373]/30 shadow-2xl relative overflow-hidden"
              >
                {/* Header */}
                <div className="flex items-start justify-between border-b border-white/10 pb-5 mb-6">
                  <div>
                    <span className="editorial-tag text-[#D4A373]">GENOME PROFILE</span>
                    <h3 className="text-2xl font-heading font-light text-white mt-1">
                      {personalityResult.archetype}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#0F261C] border border-[#D4A373]/40 flex items-center justify-center text-[#D4A373]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-[10px] font-mono text-white/50 block">EST. DAILY PACING</span>
                    <span className="text-lg font-mono font-bold text-[#D4A373]">
                      ${personalityResult.dailyAllocation} SGD per day
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-[10px] font-mono text-white/50 block">MATCH SCORE</span>
                    <span className="text-lg font-mono font-bold text-[#40916C]">
                      {personalityResult.geneticScore.toFixed(1)}% Resonance
                    </span>
                  </div>
                </div>

                {/* Motto */}
                <div className="mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-white/50 block mb-1">
                    ETHOS & GUIDANCE:
                  </span>
                  <p className="text-xs text-white/85 font-subheading italic leading-relaxed">
                    "{personalityResult.motto}"
                  </p>
                </div>

                {/* Matched Package */}
                <div className="p-4 rounded-2xl bg-black/30 border border-[#D4A373]/30 mb-6">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono text-[#D4A373] tracking-widest uppercase">
                      MATCHED EXPEDITION
                    </span>
                    <span className="text-xs font-mono font-semibold text-white">
                      ${personalityResult.matchedPackage.priceSGD} SGD
                    </span>
                  </div>
                  <div className="text-sm font-heading font-medium text-white">
                    {personalityResult.matchedPackage.title}
                  </div>
                  <div className="text-[11px] font-mono text-white/60 mt-1">
                    Duration: {personalityResult.matchedPackage.duration} • Status: Confirmed
                  </div>
                </div>

                {/* Footer Barcode */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-white/50">
                  <span>ATLAS-DNA-{budgetSGD}-SG</span>
                  <div className="flex items-center gap-1 font-mono tracking-tighter text-[#D4A373]">
                    ||| | |||| | ||||| ||| ||||
                  </div>
                  <span>SINGAPORE BLUEPRINT</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
