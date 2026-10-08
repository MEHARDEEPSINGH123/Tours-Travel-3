"use client";

import { useState, useMemo } from "react";
import {
  DollarSign,
  PieChart,
  Plane,
  Hotel,
  Utensils,
  Ticket,
  Car,
  ShoppingBag,
  TrendingDown,
} from "lucide-react";
import { platformMetrics } from "@/data/atlasEngine";

interface BudgetPreset {
  name: string;
  flights: number;
  hotels: number;
  food: number;
  activities: number;
  transport: number;
  shopping: number;
}

const PRESETS: BudgetPreset[] = [
  {
    name: "Refined Essential",
    flights: 550,
    hotels: 750,
    food: 450,
    activities: 250,
    transport: 180,
    shopping: 220,
  },
  {
    name: "Signature Sovereign",
    flights: 950,
    hotels: 1400,
    food: 850,
    activities: 500,
    transport: 320,
    shopping: 480,
  },
  {
    name: "Ultra Imperial",
    flights: 1800,
    hotels: 2600,
    food: 1500,
    activities: 950,
    transport: 650,
    shopping: 1200,
  },
];

export default function BudgetSimulator() {
  const [flights, setFlights] = useState<number>(850);
  const [hotels, setHotels] = useState<number>(1250);
  const [food, setFood] = useState<number>(750);
  const [activities, setActivities] = useState<number>(450);
  const [transport, setTransport] = useState<number>(280);
  const [shopping, setShopping] = useState<number>(420);

  const totalEstimateSGD = useMemo(() => {
    return flights + hotels + food + activities + transport + shopping;
  }, [flights, hotels, food, activities, transport, shopping]);

  const categories = [
    { name: "Flights & Transit", value: flights, setter: setFlights, max: 2500, icon: Plane, color: "#D4A373" },
    { name: "Luxury Hotels", value: hotels, setter: setHotels, max: 3500, icon: Hotel, color: "#40916C" },
    { name: "Dining & Wine", value: food, setter: setFood, max: 2000, icon: Utensils, color: "#E76F51" },
    { name: "Curated Activities", value: activities, setter: setActivities, max: 1500, icon: Ticket, color: "#8ECAE6" },
    { name: "Chauffeur Transport", value: transport, setter: setTransport, max: 1000, icon: Car, color: "#219EBC" },
    { name: "Boutique Shopping", value: shopping, setter: setShopping, max: 2000, icon: ShoppingBag, color: "#FB8500" },
  ];

  const applyPreset = (preset: BudgetPreset) => {
    setFlights(preset.flights);
    setHotels(preset.hotels);
    setFood(preset.food);
    setActivities(preset.activities);
    setTransport(preset.transport);
    setShopping(preset.shopping);
  };

  return (
    <section
      id="budget-simulator"
      className="w-full py-24 px-6 sm:px-12 bg-[#0F261C] text-[#F5F3EE] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#D4A373] text-xs font-mono tracking-widest uppercase mb-3">
              <DollarSign className="w-3.5 h-3.5" />
              <span>SECTION 06 — EXPEDITION BUDGET SIMULATOR</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-light tracking-tight text-white">
              Budget <span className="italic font-normal text-[#D4A373]">Simulator</span>
            </h2>
            <p className="mt-3 text-base font-subheading text-white/70 max-w-xl">
              Calibrate your capital allocation across flights, luxury suites, Michelin
              gastronomy, and private ground transport in Singapore.
            </p>
          </div>

          {/* Quick Presets */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase text-white/50 mr-2">TIER PRESETS:</span>
            {PRESETS.map((p) => (
              <button
                key={p.name}
                onClick={() => applyPreset(p)}
                className="px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-xs font-mono text-white transition-all"
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 6 Interactive Sliders */}
          <div className="lg:col-span-7 bg-white/[0.04] border border-white/10 rounded-3xl p-6 sm:p-9 backdrop-blur-xl space-y-6">
            <div className="text-xs font-mono uppercase tracking-wider text-[#D4A373] font-semibold border-b border-white/10 pb-3">
              CAPITAL ALLOCATION SLIDERS (SGD)
            </div>

            <div className="space-y-6">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const percentage = Math.round((cat.value / totalEstimateSGD) * 100);

                return (
                  <div key={cat.name} className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2 text-white">
                        <Icon className="w-4 h-4 text-[#D4A373]" />
                        <span className="font-heading font-medium">{cat.name}</span>
                        <span className="text-[10px] font-mono text-white/40">
                          ({percentage}% of voyage)
                        </span>
                      </div>
                      <span className="font-mono font-bold text-white text-sm">
                        ${cat.value.toLocaleString()} SGD
                      </span>
                    </div>

                    <input
                      type="range"
                      min={100}
                      max={cat.max}
                      step={50}
                      value={cat.value}
                      onChange={(e) => cat.setter(Number(e.target.value))}
                      className="w-full accent-[#D4A373] h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Financial Ledger */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-b from-[#1B4332] to-[#143326] border border-[#D4A373]/30 rounded-3xl p-7 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4A373]">
                    TOTAL ESTIMATED EXPENDITURE
                  </span>
                  <div className="text-4xl sm:text-5xl font-mono font-bold text-white mt-1">
                    ${totalEstimateSGD.toLocaleString()}
                    <span className="text-lg font-light text-[#D4A373] ml-2">SGD</span>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-black/30 border border-[#D4A373]/30 flex items-center justify-center text-[#D4A373]">
                  <PieChart className="w-5 h-5" />
                </div>
              </div>

              {/* Expense Proportion Bar */}
              <div className="mb-6">
                <span className="text-[10px] font-mono uppercase text-white/50 block mb-2">
                  EXPENSE PROPORTION BREAKDOWN:
                </span>
                <div className="h-3 rounded-full bg-black/40 overflow-hidden flex w-full">
                  {categories.map((cat) => {
                    const widthPct = (cat.value / totalEstimateSGD) * 100;
                    return (
                      <div
                        key={cat.name}
                        style={{ width: `${widthPct}%`, backgroundColor: cat.color }}
                        title={`${cat.name}: ${Math.round(widthPct)}%`}
                        className="h-full transition-all duration-300"
                      />
                    );
                  })}
                </div>
              </div>

              {/* Daily Allocation Estimation */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10 text-xs font-mono">
                <div>
                  <span className="text-white/50 block">AVG PER DAY (5 DAYS):</span>
                  <span className="font-bold text-[#D4A373] text-sm">
                    ${Math.round(totalEstimateSGD / 5).toLocaleString()} SGD
                  </span>
                </div>
                <div>
                  <span className="text-white/50 block">DATASET BENCHMARK:</span>
                  <span className="font-bold text-[#40916C] text-sm">
                    ${platformMetrics.averageBudgetSGD.toLocaleString()} SGD
                  </span>
                </div>
              </div>
            </div>

            {/* Concierge Heuristic Box */}
            <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-5 text-xs text-white/80 space-y-3">
              <div className="flex items-center gap-2 text-[#D4A373] font-mono uppercase text-[11px] font-semibold">
                <TrendingDown className="w-4 h-4" />
                <span>ATLAS CONCIERGE ALLOCATION NOTE</span>
              </div>
              <p className="font-subheading text-white/70 leading-relaxed">
                By reserving Marina Bay and Capella suites mid-week, guests gain complimentary
                access to private wine cellars and dedicated round-trip Changi Maybach transfers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
