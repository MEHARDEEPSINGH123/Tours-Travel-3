"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Stamp,
  Star,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { enrichedJournals, EnrichedJournal } from "@/data/atlasEngine";

export default function TravelStories() {
  const [activeJournalIndex, setActiveJournalIndex] = useState<number>(0);

  const journal: EnrichedJournal = enrichedJournals[activeJournalIndex] || enrichedJournals[0];

  const handlePrev = () => {
    setActiveJournalIndex((prev) => (prev === 0 ? enrichedJournals.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveJournalIndex((prev) => (prev === enrichedJournals.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="travel-stories"
      className="w-full py-24 px-6 sm:px-12 bg-[#F5F3EE] text-[#1D1D1D] relative overflow-hidden border-b border-[#1B4332]/10"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B4332]/10 text-[#1B4332] text-xs font-mono tracking-widest uppercase mb-3">
              <BookOpen className="w-3.5 h-3.5 text-[#40916C]" />
              <span>SECTION 11 — EXPEDITION JOURNALS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-light tracking-tight text-[#1B4332]">
              Travel <span className="italic font-normal text-[#D4A373]">Stories</span>
            </h2>
            <p className="mt-3 text-base font-subheading text-[#5A625C] max-w-xl">
              Authentic field dispatches structured across Before, Journey, Discovery,
              and Outcome. Mapped directly to verified traveler logs in Singapore.
            </p>
          </div>

          {/* Stepper Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-[#1B4332]/20 bg-white hover:bg-[#1B4332] text-[#1B4332] hover:text-white flex items-center justify-center transition-all shadow-sm"
              aria-label="Previous journal"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <span className="font-mono text-xs font-semibold text-[#1B4332]">
              LOG 0{activeJournalIndex + 1} OF 0{enrichedJournals.length}
            </span>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-[#1B4332]/20 bg-white hover:bg-[#1B4332] text-[#1B4332] hover:text-white flex items-center justify-center transition-all shadow-sm"
              aria-label="Next journal"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 4-PART EXPEDITION JOURNAL DOCUMENT */}
        <AnimatePresence mode="wait">
          <motion.div
            key={journal.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="bg-white rounded-3xl p-6 sm:p-10 border border-[#1B4332]/10 shadow-lg space-y-8"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#1B4332]/10 pb-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#D4A373] shadow-md shrink-0">
                  <img
                    src={journal.travelerPortrait}
                    alt={journal.customer}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-heading font-semibold text-[#1B4332]">
                      {journal.customer}
                    </h3>
                    <div className="flex items-center gap-0.5 text-[#E76F51]">
                      {Array.from({ length: journal.rating }).map((_, rIdx) => (
                        <Star key={rIdx} className="w-3.5 h-3.5 fill-[#E76F51]" />
                      ))}
                    </div>
                  </div>
                  <div className="text-xs font-mono text-[#5A625C] mt-0.5">
                    ARCHETYPE: {journal.travelerArchetype} • {journal.routeTaken}
                  </div>
                </div>
              </div>

              {/* Passport Stamp */}
              <div className="px-4 py-2 rounded-xl bg-[#1B4332] text-[#D4A373] border border-[#D4A373]/30 flex items-center gap-2 text-xs font-mono shadow-sm">
                <Stamp className="w-4 h-4 text-[#E76F51]" />
                <span>IMMIGRATION STAMP: [{journal.passportStamp}]</span>
              </div>
            </div>

            {/* 4-Part Narrative Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-5 rounded-2xl bg-[#F5F3EE] border border-[#1B4332]/10 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#40916C] font-semibold block mb-2">
                    01 — THE IMPETUS (BEFORE)
                  </span>
                  <p className="text-xs sm:text-sm font-subheading text-[#1D1D1D] leading-relaxed">
                    {journal.impetus}
                  </p>
                </div>
                <div className="text-[10px] font-mono text-[#5A625C] mt-4 pt-2 border-t border-[#1B4332]/10">
                  Departure Catalyst
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#F5F3EE] border border-[#1B4332]/10 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4A373] font-semibold block mb-2">
                    02 — SENSORY TRANSIT (JOURNEY)
                  </span>
                  <p className="text-xs sm:text-sm font-subheading text-[#1D1D1D] leading-relaxed">
                    {journal.journey}
                  </p>
                </div>
                <div className="text-[10px] font-mono text-[#5A625C] mt-4 pt-2 border-t border-[#1B4332]/10">
                  En Route Passage
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#F5F3EE] border border-[#1B4332]/10 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#E76F51] font-semibold block mb-2">
                    03 — FIELD EPIPHANY (DISCOVERY)
                  </span>
                  <p className="text-xs sm:text-sm font-subheading text-[#1D1D1D] leading-relaxed">
                    {journal.discovery}
                  </p>
                </div>
                <div className="text-[10px] font-mono text-[#5A625C] mt-4 pt-2 border-t border-[#1B4332]/10">
                  Transcendent Moment
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#1B4332] text-white flex flex-col justify-between shadow-md">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4A373] font-semibold block mb-2">
                    04 — HOMECOMING (OUTCOME)
                  </span>
                  <p className="text-xs sm:text-sm font-subheading text-white/90 leading-relaxed">
                    {journal.outcome}
                  </p>
                </div>
                <div className="text-[10px] font-mono text-white/50 mt-4 pt-2 border-t border-white/10">
                  Permanent Recalibration
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-[#1B4332]/10 flex items-center justify-between text-xs font-mono text-[#5A625C]">
              <span>AUTHENTIC LOG: "{journal.baseComment}"</span>
              <span>VERIFIED GUEST IDENTIFIER • {journal.dateStr}</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
