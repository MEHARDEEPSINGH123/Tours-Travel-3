"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  Star,
  MapPin,
} from "lucide-react";
import {
  enrichedRecommendations,
  uniqueDestinationNames,
} from "@/data/atlasEngine";

type CategoryFilter = "All" | "Food" | "Attraction" | "Shopping" | "Nightlife";

export default function LocalRecommendationEngine() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");
  const [activeDest, setActiveDest] = useState<string>("Marina Bay");

  const filteredList = useMemo(() => {
    return enrichedRecommendations.filter((rec) => {
      const matchCat = activeCategory === "All" || rec.category === activeCategory;
      return matchCat;
    });
  }, [activeCategory]);

  const leadItem = filteredList[0] || enrichedRecommendations[0];
  const secondaryItems = filteredList.slice(1, 4);

  return (
    <section
      id="local-recommendations"
      className="w-full py-24 px-6 sm:px-12 bg-[#F5F3EE] text-[#1D1D1D] relative overflow-hidden border-b border-[#1B4332]/10"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B4332]/10 text-[#1B4332] text-xs font-mono tracking-widest uppercase mb-3">
              <Compass className="w-3.5 h-3.5 text-[#40916C]" />
              <span>SECTION 09 — SINGAPORE LOCAL CURATION (150 RECORDS)</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-light tracking-tight text-[#1B4332]">
              Local Recommendation <span className="italic font-normal text-[#D4A373]">Engine</span>
            </h2>
            <p className="mt-3 text-base font-subheading text-[#5A625C] max-w-xl">
              Strictly vetted establishments across Singapore Michelin counters, Peranakan ateliers,
              historic listening bars, and private tea sanctuaries. No sponsored listings.
            </p>
          </div>

          {/* Precinct Selector */}
          <div className="flex flex-wrap gap-2">
            {uniqueDestinationNames.slice(0, 6).map((d) => (
              <button
                key={d}
                onClick={() => setActiveDest(d)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                  activeDest === d
                    ? "bg-[#1B4332] text-[#F5F3EE] font-semibold shadow-sm"
                    : "bg-white text-[#5A625C] hover:bg-[#EAE6DF] border border-[#1B4332]/10"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        {/* Category Filter Bar */}
        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-3 mb-10 border-b border-[#1B4332]/10">
          {(["All", "Food", "Attraction", "Shopping", "Nightlife"] as CategoryFilter[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                activeCategory === cat
                  ? "bg-[#D4A373] text-[#0F261C] font-bold shadow-sm"
                  : "bg-white text-[#5A625C] hover:bg-[#EDE9E1] border border-[#1B4332]/10"
              }`}
            >
              {cat === "All" ? "Complete Archive" : cat}
            </button>
          ))}
        </div>

        {/* EDITORIAL MAGAZINE SPREAD */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeDest}-${activeCategory}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
          >
            {/* The Lead Monograph */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#1B4332]/10 shadow-lg flex flex-col justify-between">
              <div>
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-md mb-6">
                  <img
                    src={leadItem.image}
                    alt={leadItem.curatedTitle}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#D4A373] text-[10px] font-mono uppercase tracking-wider">
                    {leadItem.tag}
                  </div>
                  <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-white/90 text-[#1B4332] text-xs font-mono font-bold flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-[#E76F51] fill-[#E76F51]" />
                    <span>{leadItem.rating}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-[#5A625C] mb-2">
                  <MapPin className="w-3.5 h-3.5 text-[#40916C]" />
                  <span>
                    {leadItem.neighborhood} • Singapore
                  </span>
                  <span className="ml-auto text-[#1B4332] font-bold">{leadItem.priceTier}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-heading font-medium text-[#1B4332]">
                  {leadItem.curatedTitle}
                </h3>

                <p className="mt-3 text-sm font-subheading text-[#5A625C] leading-relaxed">
                  {leadItem.curatorVerdict}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1B4332]/10 flex items-center justify-between text-xs font-mono text-[#5A625C]">
                <span>RECORD: {leadItem.rawName}</span>
                <span className="text-[#40916C]">CURATED FOR ATLAS SINGAPORE GUESTS</span>
              </div>
            </div>

            {/* Asymmetric Side Columns */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-4">
              {secondaryItems.length > 0 ? (
                secondaryItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl p-5 border border-[#1B4332]/10 shadow-sm hover:shadow-md transition-all flex items-start gap-4"
                  >
                    <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                      <img
                        src={item.image}
                        alt={item.curatedTitle}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between text-[10px] font-mono text-[#5A625C] mb-0.5">
                        <span className="uppercase text-[#40916C] font-semibold">{item.tag}</span>
                        <span>{item.priceTier}</span>
                      </div>
                      <h4 className="text-sm font-heading font-semibold text-[#1B4332] truncate">
                        {item.curatedTitle}
                      </h4>
                      <p className="text-xs font-subheading text-[#5A625C] mt-1 line-clamp-2 leading-relaxed">
                        {item.curatorVerdict}
                      </p>
                    </div>
                  </div>
                ))
              ) : null}

              {/* Concierge Pullquote Banner */}
              <div className="p-6 rounded-2xl bg-[#1B4332] text-[#F5F3EE] shadow-md">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4A373] block mb-1">
                  SINGAPORE CONCIERGE ACCESS NOTE
                </span>
                <p className="text-xs font-subheading italic text-white/85 leading-relaxed">
                  "For high-demand Michelin counters such as Odette, Burnt Ends, and Candlenut, Atlas
                  liaisons confirm private reservations up to 60 days prior to your arrival."
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
