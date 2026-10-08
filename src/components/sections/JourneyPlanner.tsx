"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Clock,
  MapPin,
  Compass,
  ArrowRight,
  Luggage,
  Coffee,
  Camera,
  Moon,
  Sun,
  Shield,
} from "lucide-react";
import { dataset, uniqueDestinationNames } from "@/data/atlasEngine";
import { IMAGES } from "@/data/imageCatalog";

interface TimelineDayDetail {
  dayNumber: number;
  phase: string;
  headline: string;
  summary: string;
  morning: string;
  afternoon: string;
  goldenHour: string;
  night: string;
  transitTip: string;
  image: string;
}

export default function JourneyPlanner({
  selectedDestination,
  onDestinationChange,
}: {
  selectedDestination?: string;
  onDestinationChange?: (dest: string) => void;
}) {
  const [activeDest, setActiveDest] = useState<string>(selectedDestination || "Marina Bay");
  const [activeDay, setActiveDay] = useState<number>(1);

  const currentDest = selectedDestination || activeDest;

  const baseItinerary = dataset.itineraries[0] || {
    id: "ITI001",
    day1: "Arrival",
    day2: "City Tour",
    day3: "Local Experience",
    day4: "Shopping",
    day5: "Departure",
  };

  const timelineDays: TimelineDayDetail[] = [
    {
      dayNumber: 1,
      phase: baseItinerary.day1,
      headline: `Changi VIP Terminal Arrival & Marina Bay Check-In`,
      summary:
        "Touchdown at Singapore Changi Airport; expedited biometric customs, luggage forwarding, and private Maybach escort to your waterfront hotel suite.",
      morning: "08:15 — Changi Terminal 3 private lounge greeting and expedited biometric passage.",
      afternoon: "14:30 — Arrival touchdown; private baggage escort and Maybach transfer to hotel.",
      goldenHour: "18:00 — Balcony orientation cocktail and sunset over the Marina Bay basin.",
      night: "20:00 — Welcome dinner at Odette or private waterfront terrace dining.",
      transitTip: "Luggage automatically pre-checked and delivered to suite before your arrival.",
      image: IMAGES.planner.arrivalLounge,
    },
    {
      dayNumber: 2,
      phase: baseItinerary.day2,
      headline: `Civic District Heritage & Architectural Masterworks`,
      summary:
        "An architectural expedition bridging colonial civic monuments with avant-garde contemporary icons, led by a local conservation historian.",
      morning: "09:00 — Private early-entry access to the National Gallery historic rotunda.",
      afternoon: "13:30 — Architectural walk through conserved heritage monuments and Esplanade pavilions.",
      goldenHour: "17:30 — Sunset tea ceremony atop an exclusive Marina Bay rooftop sanctuary.",
      night: "19:45 — Michelin-starred dining curated by Singapore culinary masters.",
      transitTip: "Private chauffeured executive MPV stationed throughout the day.",
      image: IMAGES.planner.cityArchitecture,
    },
    {
      dayNumber: 3,
      phase: baseItinerary.day3,
      headline: `Peranakan Living Heritage & Artisan Ceramic Ateliers`,
      summary:
        "Detour into private shophouse ateliers, ceramic tile kilns, and heritage workshops preserved across generations in Joo Chiat and Katong.",
      morning: "09:30 — Intimate majolica tile workshop with a living heritage craftsman.",
      afternoon: "14:00 — Sensory botanical walk through preserved garden estates and spice avenues.",
      goldenHour: "17:00 — Rare Nonya tea tasting session with heirloom kueh pairings.",
      night: "20:30 — Lantern-lit backstreet gastronomic safari visiting hidden heritage bistros.",
      transitTip: "Comfortable soft footwear recommended for heritage conservation shophouses.",
      image: IMAGES.planner.artisanCeramics,
    },
    {
      dayNumber: 4,
      phase: baseItinerary.day4,
      headline: `Dempsey Hill Ateliers & Twilight Botanical Sanctuary`,
      summary:
        "Unscripted wandering through conserved military barracks, avant-garde design galleries, and the UNESCO Singapore Botanic Gardens.",
      morning: "10:00 — Specialty siphon coffee atelier in a secluded Tanglin garden quarter.",
      afternoon: "13:00 — Private shopping appointments at Dover Street Market Singapore.",
      goldenHour: "17:45 — Stroll through the National Orchid Garden beneath hundred-year-old banyan canopies.",
      night: "21:00 — Bespoke cocktail synthesis at a hidden Dempsey or Keong Saik speakeasy.",
      transitTip: "Courier service available to forward boutique purchases directly to your suite.",
      image: IMAGES.planner.boutiqueShopping,
    },
    {
      dayNumber: 5,
      phase: baseItinerary.day5,
      headline: `Jewel Rain Vortex Protocol & Changi Homecoming`,
      summary:
        "Relaxed morning packing, private terminal VIP salon, and smooth departure from Changi Airport with stamped memories.",
      morning: "09:00 — Leisurely breakfast in the garden terrace; late checkout reserved.",
      afternoon: "13:00 — Executive chauffeur transfer to Changi Terminal 3 & Jewel VIP lounge.",
      goldenHour: "17:00 — Private viewing of the Jewel Rain Vortex light installation.",
      night: "20:30 — Smooth departure transition via automated biometric departure gates.",
      transitTip: "All tax refunds processed electronically by Atlas VIP concierge team.",
      image: IMAGES.planner.departureSunset,
    },
  ];

  const currentTimelineDay = timelineDays[activeDay - 1] || timelineDays[0];

  const handleDestSelect = (name: string) => {
    setActiveDest(name);
    if (onDestinationChange) onDestinationChange(name);
  };

  return (
    <section
      id="journey-planner"
      className="w-full py-24 px-6 sm:px-12 bg-[#EDE9E1] text-[#1D1D1D] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B4332]/10 text-[#1B4332] text-xs font-mono tracking-widest uppercase mb-3">
              <Calendar className="w-3.5 h-3.5 text-[#40916C]" />
              <span>SECTION 04 — VISUAL JOURNEY PLANNER</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-light tracking-tight text-[#1B4332]">
              Visual Journey <span className="italic font-normal text-[#D4A373]">Planner</span>
            </h2>
            <p className="mt-3 text-base font-subheading text-[#5A625C] max-w-xl">
              Chronological progression mapped day-by-day using verified itinerary data.
              Explore hourly pacing, time locks, and seamless transitions across Singapore.
            </p>
          </div>

          {/* Precinct Switcher */}
          <div className="flex flex-wrap gap-2">
            {uniqueDestinationNames.slice(0, 6).map((dest) => (
              <button
                key={dest}
                onClick={() => handleDestSelect(dest)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                  currentDest === dest
                    ? "bg-[#1B4332] text-[#F5F3EE] font-semibold shadow-sm"
                    : "bg-white/80 text-[#5A625C] hover:bg-white border border-[#1B4332]/10"
                }`}
              >
                {dest}
              </button>
            ))}
          </div>
        </div>

        {/* Chronological Day Stepper Bar */}
        <div className="bg-white rounded-2xl p-3 border border-[#1B4332]/10 shadow-sm mb-8 flex items-center justify-between gap-2 overflow-x-auto no-scrollbar">
          {timelineDays.map((d) => (
            <button
              key={d.dayNumber}
              onClick={() => setActiveDay(d.dayNumber)}
              className={`flex-1 min-w-[130px] py-3 px-4 rounded-xl text-left transition-all relative ${
                activeDay === d.dayNumber
                  ? "bg-[#1B4332] text-[#F5F3EE] shadow-md shadow-[#1B4332]/20"
                  : "bg-transparent hover:bg-[#F5F3EE] text-[#5A625C]"
              }`}
            >
              <div className="text-[10px] font-mono tracking-wider uppercase opacity-75">
                DAY 0{d.dayNumber}
              </div>
              <div className="text-xs font-heading font-semibold mt-0.5 truncate">
                {d.phase}
              </div>
              {activeDay === d.dayNumber && (
                <motion.div
                  layoutId="dayIndicator"
                  className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#D4A373] rounded-full"
                />
              )}
            </button>
          ))}
        </div>

        {/* Active Day Full Chronological Layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentDest}-${activeDay}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            {/* Left Column: Photographic Canvas & Summary */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-[#1B4332]/10 shadow-md space-y-6">
              <div className="relative aspect-[16/11] rounded-2xl overflow-hidden shadow-sm">
                <img
                  src={currentTimelineDay.image}
                  alt={`Day ${currentTimelineDay.dayNumber} - ${currentDest}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-mono uppercase text-[#D4A373] tracking-widest block">
                    STAGE — {currentTimelineDay.phase.toUpperCase()}
                  </span>
                  <h4 className="text-xl font-heading font-medium">
                    {currentDest} Day {currentTimelineDay.dayNumber}
                  </h4>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-heading font-semibold text-[#1B4332]">
                  {currentTimelineDay.headline}
                </h3>
                <p className="text-sm font-subheading text-[#5A625C] mt-2 leading-relaxed">
                  {currentTimelineDay.summary}
                </p>
              </div>

              {/* Transit Concierge Note */}
              <div className="p-4 rounded-xl bg-[#F5F3EE] border border-[#1B4332]/10 flex items-start gap-3 text-xs">
                <Luggage className="w-4 h-4 text-[#40916C] shrink-0 mt-0.5" />
                <div>
                  <span className="font-mono uppercase font-semibold text-[#1B4332] block">
                    CONCIERGE TRANSIT PROTOCOL:
                  </span>
                  <span className="text-[#5A625C] font-subheading">
                    {currentTimelineDay.transitTip}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Hour-by-Hour Progression */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#1B4332]/10 shadow-md">
              <div className="flex items-center justify-between border-b border-[#1B4332]/10 pb-4 mb-6">
                <div className="text-xs font-mono uppercase tracking-wider text-[#1B4332] font-semibold flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#40916C]" />
                  <span>HOUR-BY-HOUR PROGRESSION SCHEDULE</span>
                </div>
                <div className="text-xs font-mono text-[#D4A373] bg-[#1B4332] px-3 py-1 rounded-full">
                  ITINERARY CODE: {dataset.itineraries[activeDay - 1]?.id || "ITI001"}
                </div>
              </div>

              {/* 4 Time Slots */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F5F3EE] border border-[#1B4332]/10 flex items-center justify-center text-[#1B4332] shrink-0">
                    <Sun className="w-5 h-5 text-[#E76F51]" />
                  </div>
                  <div className="flex-1 pb-6 border-b border-[#1B4332]/10">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-mono font-bold text-[#1B4332]">
                        MORNING LIGHT • 08:00 – 12:00
                      </span>
                      <span className="text-[10px] font-mono text-[#40916C] uppercase">
                        Active Phase
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm font-subheading text-[#5A625C] leading-relaxed">
                      {currentTimelineDay.morning}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F5F3EE] border border-[#1B4332]/10 flex items-center justify-center text-[#1B4332] shrink-0">
                    <Coffee className="w-5 h-5 text-[#D4A373]" />
                  </div>
                  <div className="flex-1 pb-6 border-b border-[#1B4332]/10">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-mono font-bold text-[#1B4332]">
                        MIDDAY IMMERSION • 13:00 – 16:30
                      </span>
                      <span className="text-[10px] font-mono text-[#40916C] uppercase">
                        Curated Access
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm font-subheading text-[#5A625C] leading-relaxed">
                      {currentTimelineDay.afternoon}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F5F3EE] border border-[#1B4332]/10 flex items-center justify-center text-[#1B4332] shrink-0">
                    <Camera className="w-5 h-5 text-[#E76F51]" />
                  </div>
                  <div className="flex-1 pb-6 border-b border-[#1B4332]/10">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-mono font-bold text-[#1B4332]">
                        GOLDEN HOUR • 17:00 – 19:00
                      </span>
                      <span className="text-[10px] font-mono text-[#40916C] uppercase">
                        Sunset Pacing
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm font-subheading text-[#5A625C] leading-relaxed">
                      {currentTimelineDay.goldenHour}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F5F3EE] border border-[#1B4332]/10 flex items-center justify-center text-[#1B4332] shrink-0">
                    <Moon className="w-5 h-5 text-[#1B4332]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-mono font-bold text-[#1B4332]">
                        NOCTURNAL ODYSSEY • 20:00 – LATE
                      </span>
                      <span className="text-[10px] font-mono text-[#40916C] uppercase">
                        Epicurean Evening
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm font-subheading text-[#5A625C] leading-relaxed">
                      {currentTimelineDay.night}
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="mt-8 pt-4 border-t border-[#1B4332]/10 flex items-center justify-between">
                <button
                  disabled={activeDay === 1}
                  onClick={() => setActiveDay((prev) => Math.max(1, prev - 1))}
                  className="px-4 py-2 rounded-xl text-xs font-mono text-[#1B4332] disabled:opacity-30 hover:bg-[#F5F3EE] transition-colors"
                >
                  ← PREVIOUS DAY
                </button>
                <span className="text-xs font-mono text-[#5A625C]">
                  DAY 0{activeDay} OF 0{timelineDays.length}
                </span>
                <button
                  disabled={activeDay === timelineDays.length}
                  onClick={() => setActiveDay((prev) => Math.min(timelineDays.length, prev + 1))}
                  className="px-4 py-2 rounded-xl text-xs font-mono text-[#1B4332] disabled:opacity-30 hover:bg-[#F5F3EE] transition-colors"
                >
                  NEXT DAY →
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
