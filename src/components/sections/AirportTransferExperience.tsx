"use client";

import { useState } from "react";
import {
  Car,
  Navigation,
  Check,
} from "lucide-react";
import { airportTransfers } from "@/data/atlasEngine";

interface AirportRoute {
  id: string;
  airport: string;
  destinationHub: string;
  distanceKm: number;
  durationMinutes: number;
  terminalGuide: string;
  vipProtocol: string;
}

const AIRPORT_ROUTES: AirportRoute[] = [
  {
    id: "sin-mbs",
    airport: "Changi Terminal 3 VIP Apron",
    destinationHub: "Marina Bay Sands & Raffles Hotel",
    distanceKm: 21,
    durationMinutes: 22,
    terminalGuide: "Jewel Rain Vortex priority viewing; automated biometric clearance with zero customs queue.",
    vipProtocol: "Chauffeur stationed at JetQuay Private Apron gate with chilled towels.",
  },
  {
    id: "sin-sentosa",
    airport: "Changi Terminal 2 Executive Salon",
    destinationHub: "Capella Singapore & Sentosa Cove",
    distanceKm: 28,
    durationMinutes: 25,
    terminalGuide: "Dedicated automated iris recognition lanes with direct tarmac baggage handover.",
    vipProtocol: "Lexus LM with heated massage loungers waiting at executive lane 2.",
  },
  {
    id: "sin-dempsey",
    airport: "Changi Terminal 1 First Lounge",
    destinationHub: "Dempsey Hill & Tanglin Barracks",
    distanceKm: 26,
    durationMinutes: 24,
    terminalGuide: "Expedited baggage collection and personal concierge escort through arrival corridors.",
    vipProtocol: "Mercedes-Maybach air-conditioned terminal curbside handover.",
  },
  {
    id: "sin-joochiat",
    airport: "Changi Terminal 4 Heritage Hub",
    destinationHub: "Joo Chiat & Katong Shophouse Enclave",
    distanceKm: 14,
    durationMinutes: 15,
    terminalGuide: "Direct passage along East Coast arterial corridors into conservation shophouse districts.",
    vipProtocol: "Private heritage concierge greeting with fresh young coconut water.",
  },
  {
    id: "sin-yacht",
    airport: "Marina South Pier • ONE°15",
    destinationHub: "Lazarus Lagoon & Southern Reefs",
    distanceKm: 18,
    durationMinutes: 35,
    terminalGuide: "Direct transfer from limousine to private 45-foot catamaran tender berth.",
    vipProtocol: "Private marine skipper greeting with chilled champagne and sunbathing saloon access.",
  },
];

export default function AirportTransferExperience() {
  const [selectedRouteId, setSelectedRouteId] = useState<string>("sin-mbs");
  const [selectedVehicleId, setSelectedVehicleId] = useState<string>("TR-01");

  const currentRoute =
    AIRPORT_ROUTES.find((r) => r.id === selectedRouteId) || AIRPORT_ROUTES[0];
  const currentVehicle =
    airportTransfers.find((v) => v.id === selectedVehicleId) || airportTransfers[0];

  return (
    <section
      id="airport-transfers"
      className="w-full py-24 px-6 sm:px-12 bg-[#091811] text-[#F5F3EE] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#D4A373] text-xs font-mono tracking-widest uppercase mb-3">
              <Car className="w-3.5 h-3.5 text-[#40916C]" />
              <span>SECTION 12 — GROUND FLEET & CHANGI INTELLIGENCE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-light tracking-tight text-white">
              Airport Transfer <span className="italic font-normal text-[#D4A373]">Experience</span>
            </h2>
            <p className="mt-3 text-base font-subheading text-white/70 max-w-xl">
              From the tarmac of Changi Airport to your suite at Capella or Marina Bay Sands.
              Bespoke luxury fleet, automated terminal clearances, and dedicated chauffeurs.
            </p>
          </div>

          {/* Route Selector Tabs */}
          <div className="flex flex-wrap gap-2">
            {AIRPORT_ROUTES.map((route) => (
              <button
                key={route.id}
                onClick={() => setSelectedRouteId(route.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all ${
                  selectedRouteId === route.id
                    ? "bg-[#D4A373] text-[#0F261C] font-bold shadow-md"
                    : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {route.destinationHub.split(" & ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Part Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Column: Airport Guide Card */}
          <div className="lg:col-span-5 bg-white/[0.04] border border-[#D4A373]/30 rounded-3xl p-6 sm:p-8 backdrop-blur-xl space-y-6">
            <div className="border-b border-white/10 pb-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4A373]">
                ACTIVE AIRPORT CORRIDOR
              </span>
              <h3 className="text-xl sm:text-2xl font-heading font-light text-white mt-1">
                {currentRoute.airport}
              </h3>
              <div className="text-xs font-mono text-[#40916C] mt-1 flex items-center gap-1.5">
                <Navigation className="w-3.5 h-3.5" />
                <span>TERMINUS: {currentRoute.destinationHub}</span>
              </div>
            </div>

            {/* Distance & Time */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/10">
                <span className="text-[10px] font-mono text-white/50 block">DRIVE DISTANCE</span>
                <span className="text-lg font-mono font-bold text-white mt-0.5 block">
                  {currentRoute.distanceKm} KM
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/10">
                <span className="text-[10px] font-mono text-white/50 block">EST. TIME</span>
                <span className="text-lg font-mono font-bold text-[#D4A373] mt-0.5 block">
                  {currentRoute.durationMinutes} MINS
                </span>
              </div>
            </div>

            {/* Terminal Guide Note */}
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-white/50 block mb-1">
                CHANGI VIP PROTOCOL:
              </span>
              <p className="text-xs font-subheading text-white/80 leading-relaxed">
                {currentRoute.terminalGuide}
              </p>
            </div>

            {/* Chauffeur Protocol */}
            <div className="p-4 rounded-2xl bg-[#1B4332] border border-[#D4A373]/30 text-xs">
              <span className="font-mono uppercase text-[#D4A373] font-semibold block mb-1">
                CHAUFFEUR HANDOVER:
              </span>
              <p className="text-white/90 font-subheading leading-relaxed">
                {currentRoute.vipProtocol}
              </p>
            </div>
          </div>

          {/* Right Column: Vehicle Selection */}
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-[#D4A373] font-semibold mb-2">
              SELECT EXECUTIVE FLEET VEHICLE:
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {airportTransfers.map((v) => {
                const isSelected = selectedVehicleId === v.id;
                return (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVehicleId(v.id)}
                    className={`p-4 rounded-2xl text-left border transition-all relative ${
                      isSelected
                        ? "bg-[#1B4332] border-[#D4A373] shadow-lg shadow-[#1B4332]/30"
                        : "bg-white/[0.04] border-white/10 hover:border-white/20 hover:bg-white/[0.07]"
                    }`}
                  >
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-3">
                      <img
                        src={v.image}
                        alt={v.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-black/70 text-[9px] font-mono text-[#D4A373]">
                        ${v.hourlyRateSGD} SGD/hr
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[9px] font-mono uppercase text-white/50">
                        {v.category}
                      </span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-[#D4A373]" />}
                    </div>

                    <h4 className="text-sm font-heading font-semibold text-white truncate">
                      {v.name}
                    </h4>

                    <div className="text-[11px] font-mono text-white/60 mt-1">
                      {v.capacity}
                    </div>

                    <p className="text-[10px] font-subheading text-white/70 mt-1.5 line-clamp-2">
                      {v.idealFor}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
