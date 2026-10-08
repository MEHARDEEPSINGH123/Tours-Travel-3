"use client";

import { useState } from "react";
import {
  Sun,
  Thermometer,
  Shirt,
  Wind,
} from "lucide-react";
import { enrichedDestinations, DestinationStory } from "@/data/atlasEngine";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function WeatherExplorer() {
  const [selectedDestName, setSelectedDestName] = useState<string>("Marina Bay");
  const [selectedMonthIndex, setSelectedMonthIndex] = useState<number>(3);

  const dest: DestinationStory =
    enrichedDestinations.find((d) => d.name === selectedDestName) || enrichedDestinations[0];

  const currentTemp = dest.monthlyTemps[selectedMonthIndex];
  const currentRain = dest.rainfallMm[selectedMonthIndex];

  const getWeatherRecommendation = (temp: number, rain: number) => {
    if (rain > 220) {
      return {
        comfortLevel: "Equatorial Monsoon Showers & Cool Evenings",
        advisory: "Spectacular misty Cloud Forest visits, museum gallery afternoons, and atmospheric evening dining.",
        wardrobe: "Breathable moisture-wicking linens, compact luxury umbrella, and water-resistant footwear.",
        seasonBadge: "Monsoon Season Refresh",
      };
    } else {
      return {
        comfortLevel: "Warm Island Sun & Gentle Coastal Breezes",
        advisory: "Peak outdoor comfort for Sentosa yachting, botanical garden walks, and rooftop cocktails.",
        wardrobe: "Lightweight cotton shirts, pure linen trousers, UV sunglasses, and panama hat.",
        seasonBadge: "Prime Coastal Season",
      };
    }
  };

  const currentRec = getWeatherRecommendation(currentTemp, currentRain);

  return (
    <section
      id="weather-explorer"
      className="w-full py-24 px-6 sm:px-12 bg-[#F5F3EE] text-[#1D1D1D] relative overflow-hidden border-b border-[#1B4332]/10"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B4332]/10 text-[#1B4332] text-xs font-mono tracking-widest uppercase mb-3">
              <Sun className="w-3.5 h-3.5 text-[#E76F51]" />
              <span>SECTION 07 — SINGAPORE METEOROLOGICAL OBSERVATORY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-light tracking-tight text-[#1B4332]">
              Weather <span className="italic font-normal text-[#D4A373]">Explorer</span>
            </h2>
            <p className="mt-3 text-base font-subheading text-[#5A625C] max-w-xl">
              Precision climate radar tracking 12-month equatorial temperature curves,
              coastal breezes, and seasonal packing advisories across Singapore.
            </p>
          </div>

          {/* Precinct Selector */}
          <div className="flex flex-wrap gap-2">
            {enrichedDestinations.map((d) => (
              <button
                key={d.name}
                onClick={() => setSelectedDestName(d.name)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                  selectedDestName === d.name
                    ? "bg-[#1B4332] text-[#F5F3EE] font-semibold shadow-sm"
                    : "bg-white text-[#5A625C] hover:bg-[#EAE6DF] border border-[#1B4332]/10"
                }`}
              >
                {d.name}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Best Season Banner */}
        <div className="bg-[#1B4332] text-[#F5F3EE] rounded-3xl p-6 sm:p-8 mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#0F261C] border border-[#D4A373]/40 flex items-center justify-center text-[#D4A373]">
              <Sun className="w-6 h-6 text-[#D4A373]" />
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#D4A373]">
                SINGAPORE EQUATORIAL CLIMATE PROFILE
              </div>
              <h3 className="text-2xl font-heading font-medium text-white mt-0.5">
                {dest.name} • {dest.bestSeason}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono">
            <div>
              <span className="text-white/50 block">CLIMATE ZONE:</span>
              <span className="font-bold text-[#D4A373]">{dest.climateZone}</span>
            </div>
            <div>
              <span className="text-white/50 block">ELEVATION:</span>
              <span className="font-bold text-[#40916C]">{dest.elevation}</span>
            </div>
          </div>
        </div>

        {/* 12-MONTH CLIMATE MATRIX */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#1B4332]/10 shadow-sm space-y-8">
          <div className="flex items-center justify-between border-b border-[#1B4332]/10 pb-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#1B4332] font-semibold flex items-center gap-2">
              <Thermometer className="w-4 h-4 text-[#E76F51]" />
              <span>12-MONTH TEMPERATURE (°C) & RAINFALL (MM)</span>
            </span>
            <span className="text-xs font-mono text-[#5A625C]">
              SELECT ANY MONTH FOR WARDROBE ADVISORY
            </span>
          </div>

          {/* Month Bars */}
          <div className="grid grid-cols-6 sm:grid-cols-12 gap-2 sm:gap-3 items-end h-64 pt-6">
            {MONTHS.map((month, idx) => {
              const temp = dest.monthlyTemps[idx];
              const rain = dest.rainfallMm[idx];
              const isSelected = selectedMonthIndex === idx;
              const barHeightPct = Math.min(100, Math.max(15, (rain / 350) * 100));

              return (
                <button
                  key={month}
                  onClick={() => setSelectedMonthIndex(idx)}
                  className={`flex flex-col items-center justify-end h-full p-2 rounded-2xl transition-all relative group ${
                    isSelected
                      ? "bg-[#1B4332] text-white shadow-lg"
                      : "bg-[#F5F3EE] hover:bg-[#EDE9E1] text-[#1D1D1D]"
                  }`}
                >
                  <div
                    className={`text-[11px] font-mono font-bold mb-2 ${
                      isSelected ? "text-[#D4A373]" : "text-[#1B4332]"
                    }`}
                  >
                    {temp}°C
                  </div>

                  <div
                    style={{ height: `${barHeightPct}%` }}
                    className={`w-full max-w-[24px] rounded-lg transition-all ${
                      isSelected
                        ? "bg-[#40916C]"
                        : "bg-[#1B4332]/20 group-hover:bg-[#1B4332]/35"
                    }`}
                  />

                  <div className="text-[10px] font-mono uppercase tracking-wider mt-3 font-semibold">
                    {month}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Month Advisory Strip */}
          <div className="pt-6 border-t border-[#1B4332]/10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-2xl bg-[#F5F3EE] border border-[#1B4332]/10">
              <span className="text-[10px] font-mono uppercase text-[#5A625C] tracking-wider block">
                SELECTED MONTH — {MONTHS[selectedMonthIndex].toUpperCase()}
              </span>
              <div className="text-xl font-heading font-semibold text-[#1B4332] mt-1">
                {currentTemp}°C • {currentRain} mm Rain
              </div>
              <span className="text-xs text-[#40916C] font-mono mt-1 block">
                {currentRec.comfortLevel}
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#F5F3EE] border border-[#1B4332]/10">
              <span className="text-[10px] font-mono uppercase text-[#5A625C] tracking-wider block">
                EXPEDITION RECOMMENDATION
              </span>
              <p className="text-xs font-subheading text-[#5A625C] mt-1 leading-relaxed">
                {currentRec.advisory}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F5F3EE] border border-[#1B4332]/10">
              <span className="text-[10px] font-mono uppercase text-[#5A625C] tracking-wider block flex items-center gap-1.5">
                <Shirt className="w-3.5 h-3.5 text-[#1B4332]" />
                <span>PACKING & WARDROBE ADVISORY</span>
              </span>
              <p className="text-xs font-subheading text-[#5A625C] mt-1 leading-relaxed">
                {currentRec.wardrobe}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
