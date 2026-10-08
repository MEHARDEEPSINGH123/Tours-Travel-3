"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Compass,
  MapPin,
  Quote,
  CheckCircle,
} from "lucide-react";
import { travelExperts, TravelExpert } from "@/data/atlasEngine";

export default function TravelExperts() {
  const [selectedExpertIndex, setSelectedExpertIndex] = useState<number>(0);

  const expert: TravelExpert = travelExperts[selectedExpertIndex] || travelExperts[0];

  return (
    <section
      id="travel-experts"
      className="w-full py-24 px-6 sm:px-12 bg-[#0A1711] text-[#F5F3EE] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#D4A373] text-xs font-mono tracking-widest uppercase mb-3">
            <Users className="w-3.5 h-3.5 text-[#40916C]" />
            <span>SECTION 10 — SINGAPORE FIELD CURATORS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-light tracking-tight text-white">
            Travel <span className="italic font-normal text-[#D4A373]">Experts</span>
          </h2>
          <p className="mt-3 text-base font-subheading text-white/70 max-w-xl">
            Straits historians, biophilic botanists, yacht captains, and Michelin scouts.
            Meet the distinguished curators orchestrating bespoke Singapore journeys.
          </p>
        </div>

        {/* Expert Ribbon */}
        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-3 mb-10 border-b border-white/10">
          {travelExperts.map((exp, idx) => (
            <button
              key={exp.id}
              onClick={() => setSelectedExpertIndex(idx)}
              className={`px-4 py-2.5 rounded-xl text-left shrink-0 transition-all border ${
                selectedExpertIndex === idx
                  ? "bg-[#D4A373] text-[#0F261C] border-[#D4A373] font-bold shadow-lg"
                  : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:text-white"
              }`}
            >
              <div className="text-[10px] font-mono tracking-wider uppercase opacity-75">
                CURATOR 0{idx + 1}
              </div>
              <div className="text-xs font-heading font-medium mt-0.5 whitespace-nowrap">
                {exp.name}
              </div>
            </button>
          ))}
        </div>

        {/* Full Editorial Monograph Profile Layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={expert.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
          >
            {/* Left: Large Portrait */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-[#D4A373]/30 group">
                <img
                  src={expert.portraitImage}
                  alt={expert.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#D4A373] mb-1">
                    {expert.fieldTitle}
                  </div>
                  <h3 className="text-2xl font-heading font-medium text-white">{expert.name}</h3>
                  <div className="text-xs font-mono text-white/60 mt-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#40916C]" />
                    <span>Station: {expert.currentStation}</span>
                  </div>
                </div>

                <div className="absolute top-5 right-5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-mono text-[#D4A373]">
                  {expert.yearsExperience} Years in Field
                </div>
              </div>
            </div>

            {/* Right: Narrative Story, Philosophy & Credentials */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="editorial-tag text-[#40916C]">{expert.role}</span>
                <h3 className="text-2xl sm:text-3xl font-heading font-light text-white mt-1">
                  {expert.specialization}
                </h3>
              </div>

              {/* The Travel Philosophy Pull-Quote */}
              <div className="p-6 rounded-2xl bg-white/[0.05] border-l-4 border-[#D4A373] border-t border-r border-b border-white/10 relative">
                <Quote className="w-6 h-6 text-[#D4A373]/40 absolute top-4 right-4" />
                <p className="text-sm sm:text-base font-subheading italic text-white/90 leading-relaxed">
                  {expert.travelPhilosophy}
                </p>
              </div>

              {/* Field Story */}
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-white/50 block mb-2">
                  BACKGROUND & CURATORIAL DOSSIER:
                </span>
                <p className="text-sm font-subheading text-white/75 leading-relaxed">
                  {expert.fieldStory}
                </p>
              </div>

              {/* Credentials & Coverage */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                  <span className="text-[10px] font-mono uppercase text-[#D4A373] tracking-wider block mb-2">
                    ACCREDITATIONS & FELLOWSHIPS:
                  </span>
                  <ul className="space-y-1.5 text-xs text-white/80 font-subheading">
                    {expert.credentials.map((cred, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#40916C] shrink-0 mt-0.5" />
                        <span className="truncate">{cred}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                  <span className="text-[10px] font-mono uppercase text-[#D4A373] tracking-wider block mb-2">
                    SIGNATURE CURATED ROUTE:
                  </span>
                  <p className="text-xs font-subheading text-white/80 leading-relaxed">
                    {expert.signatureRoute}
                  </p>
                  <div className="mt-3 pt-2 border-t border-white/10 flex items-center gap-1.5 text-[11px] font-mono text-[#40916C]">
                    <span>PRECINCTS:</span>
                    <span>{expert.destinationsCovered.join(" • ")}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
