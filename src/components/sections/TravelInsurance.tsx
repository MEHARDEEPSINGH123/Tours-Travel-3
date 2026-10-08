"use client";

import { useState } from "react";
import {
  ShieldAlert,
  PhoneCall,
  Activity,
  Camera,
  AlertCircle,
  Radio,
} from "lucide-react";
import { insuranceTiers } from "@/data/atlasEngine";

export default function TravelInsurance() {
  const [selectedTierId, setSelectedTierId] = useState<string>("INS-02");
  const [sosSimulated, setSosSimulated] = useState<boolean>(false);

  const activeTier =
    insuranceTiers.find((t) => t.id === selectedTierId) || insuranceTiers[1];

  const handleSimulateSOS = () => {
    setSosSimulated(true);
  };

  return (
    <section
      id="travel-insurance"
      className="w-full py-24 px-6 sm:px-12 bg-[#F5F3EE] text-[#1D1D1D] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B4332]/10 text-[#1B4332] text-xs font-mono tracking-widest uppercase mb-3">
            <ShieldAlert className="w-3.5 h-3.5 text-[#E76F51]" />
            <span>SECTION 13 — EXPEDITION SAFETY & CRISIS PROTOCOL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-light tracking-tight text-[#1B4332]">
            Travel <span className="italic font-normal text-[#D4A373]">Insurance</span>
          </h2>
          <p className="mt-3 text-base font-subheading text-[#5A625C] leading-relaxed">
            Uncompromising hospital extraction at Mount Elizabeth and Gleneagles, luxury
            gear protection, and a 24/7 emergency operations desk located in Singapore.
          </p>
        </div>

        {/* 3-Tier Policy Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {insuranceTiers.map((tier) => {
            const isSelected = selectedTierId === tier.id;
            return (
              <button
                key={tier.id}
                onClick={() => setSelectedTierId(tier.id)}
                className={`p-7 rounded-3xl text-left border transition-all relative flex flex-col justify-between ${
                  isSelected
                    ? "bg-[#1B4332] text-[#F5F3EE] border-[#1B4332] shadow-2xl shadow-[#1B4332]/25 scale-[1.02]"
                    : "bg-white text-[#1D1D1D] border-[#1B4332]/10 hover:border-[#1B4332]/30 shadow-sm"
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-[#D4A373] text-[#0F261C] text-[10px] font-mono font-bold uppercase tracking-wider shadow-sm">
                    MOST RECOMMENDED
                  </div>
                )}

                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest opacity-75 mb-1">
                    {tier.tier}
                  </div>
                  <h3
                    className={`text-2xl font-heading font-semibold ${
                      isSelected ? "text-white" : "text-[#1B4332]"
                    }`}
                  >
                    {tier.title}
                  </h3>

                  <div className="my-6">
                    <span className="text-[10px] font-mono uppercase block opacity-60">
                      TOTAL MEDICAL INDEMNITY
                    </span>
                    <div
                      className={`text-3xl font-mono font-bold mt-1 ${
                        isSelected ? "text-[#D4A373]" : "text-[#1B4332]"
                      }`}
                    >
                      {tier.coverageSGD}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-3 text-xs pt-4 border-t border-current/10">
                    <div className="flex items-start gap-2">
                      <Activity className="w-4 h-4 text-[#40916C] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold block">Hospital & Evacuation:</span>
                        <span className="opacity-80">{tier.medicalEvacuation}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-[#E76F51] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold block">Disruption Guarantee:</span>
                        <span className="opacity-80">{tier.flightDisruption}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <Camera className="w-4 h-4 text-[#D4A373] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold block">Valuables & Equipment:</span>
                        <span className="opacity-80">{tier.luxuryGear}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-current/10 flex items-center justify-between">
                  <div className="text-xs font-mono">
                    <span className="text-lg font-bold">${tier.monthlyAddOnSGD}</span>{" "}
                    <span>SGD per journey</span>
                  </div>
                  <div
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold ${
                      isSelected
                        ? "bg-[#D4A373] text-[#0F261C]"
                        : "bg-[#F5F3EE] text-[#1B4332]"
                    }`}
                  >
                    {isSelected ? "Selected Tier" : "Select Tier"}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* 24/7 Global SOS Emergency Desk */}
        <div className="bg-[#1B4332] text-[#F5F3EE] rounded-3xl p-6 sm:p-10 border border-[#D4A373]/30 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F261C] border border-[#D4A373]/30 text-xs font-mono text-[#D4A373]">
                <Radio className="w-3.5 h-3.5 text-[#E76F51]" />
                <span>24/7 CRISIS OPERATIONS DESK</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-medium text-white">
                Singapore Emergency Operations & Medical Fast-Track
              </h3>
              <p className="text-xs sm:text-sm font-subheading text-white/80 leading-relaxed">
                Should you encounter an unexpected health incident or emergency, pressing the
                Atlas SOS button dispatches our medical concierge liaison to coordinate
                immediate private admissions within 90 seconds.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={handleSimulateSOS}
                className="px-6 py-4 rounded-2xl bg-[#E76F51] hover:bg-[#d65f42] text-white font-heading font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-3 shadow-lg transition-all"
              >
                <PhoneCall className="w-4 h-4" />
                <span>{sosSimulated ? "SOS Beacon Active" : "Test 24/7 Crisis Beacon"}</span>
              </button>
            </div>
          </div>

          {/* SOS Active Simulation */}
          {sosSimulated && (
            <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
              <div className="p-3 rounded-xl bg-black/40 border border-white/10">
                <span className="text-white/50 block">COORDINATES:</span>
                <span className="text-[#D4A373] font-bold">1.3521° N, 103.8198° E (SINGAPORE)</span>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/10">
                <span className="text-white/50 block">CONCIERGE STATUS:</span>
                <span className="text-[#40916C] font-bold">CONNECTED • MOUNT ELIZABETH PRIORITY</span>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/10">
                <span className="text-white/50 block">HOTLINE DIRECT:</span>
                <span className="text-white font-bold">+65 6789 2200 (24/7 PRIORITY)</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
