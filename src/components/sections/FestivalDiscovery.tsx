"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  MapPin,
  Clock,
  Compass,
  ArrowRight,
  Eye,
  CheckCircle,
} from "lucide-react";
import { festivals, FestivalEvent } from "@/data/atlasEngine";

export default function FestivalDiscovery() {
  const [activeFestivalIndex, setActiveFestivalIndex] = useState<number>(0);

  const activeFestival: FestivalEvent = festivals[activeFestivalIndex] || festivals[0];

  return (
    <section
      id="festival-discovery"
      className="w-full py-24 px-6 sm:px-12 bg-[#0F261C] text-[#F5F3EE] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#D4A373] text-xs font-mono tracking-widest uppercase mb-3">
            <Calendar className="w-3.5 h-3.5 text-[#40916C]" />
            <span>SECTION 08 — SINGAPORE FESTIVAL TAPESTRY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-light tracking-tight text-white">
            Festival <span className="italic font-normal text-[#D4A373]">Discovery</span>
          </h2>
          <p className="mt-3 text-base font-subheading text-white/70 leading-relaxed">
            Time your voyage to coincide with Singapore's premier cultural galas, night races,
            illuminated lantern showcases, and international art weeks.
          </p>
        </div>

        {/* Chronological Ribbon */}
        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-4 mb-10 border-b border-white/10">
          {festivals.map((fest, idx) => (
            <button
              key={fest.id}
              onClick={() => setActiveFestivalIndex(idx)}
              className={`px-5 py-3 rounded-2xl text-left shrink-0 transition-all border ${
                activeFestivalIndex === idx
                  ? "bg-[#D4A373] text-[#0F261C] border-[#D4A373] font-semibold shadow-lg"
                  : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:text-white"
              }`}
            >
              <div className="text-[10px] font-mono tracking-wider uppercase opacity-75">
                {fest.month}
              </div>
              <div className="text-xs font-heading font-medium mt-0.5 whitespace-nowrap">
                {fest.title.split(" (")[0]}
              </div>
            </button>
          ))}
        </div>

        {/* Storytelling Spread */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFestival.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            {/* Festival Large Editorial Imagery */}
            <div className="lg:col-span-7 relative">
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                <img
                  src={activeFestival.image}
                  alt={activeFestival.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-[#D4A373] uppercase mb-1">
                    <MapPin className="w-3.5 h-3.5 text-[#E76F51]" />
                    <span>
                      {activeFestival.destination}, Singapore
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-heading font-medium text-white">
                    {activeFestival.title}
                  </h3>
                </div>

                <div className="absolute top-5 left-5 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#D4A373]/40 text-xs font-mono text-[#D4A373]">
                  {activeFestival.dateRange} • {activeFestival.season}
                </div>
              </div>
            </div>

            {/* Cultural Lore & Sensory Manifest */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="editorial-tag text-[#D4A373]">CULTURAL HERITAGE & ORIGIN</span>
                <p className="mt-2 text-base font-subheading text-white/85 leading-relaxed">
                  {activeFestival.culturalLore}
                </p>
              </div>

              {/* Sensory Highlights */}
              <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#D4A373] font-semibold block">
                  SENSORY TEXTURES & MEMORIES:
                </span>
                <ul className="space-y-2 text-xs text-white/80 font-subheading">
                  {activeFestival.sensoryHighlights.map((hl, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E76F51] mt-1.5 shrink-0" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Concierge Protocol Tip */}
              <div className="p-4 rounded-xl bg-[#1B4332] border border-[#D4A373]/30 text-xs">
                <span className="font-mono uppercase text-[#D4A373] font-semibold block mb-1">
                  ATLAS PROTOCOL & PRIVILEGED ACCESS:
                </span>
                <p className="text-white/80 font-subheading leading-relaxed">
                  {activeFestival.insiderTip}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
