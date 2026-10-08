"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Car,
  Compass,
  Navigation,
  Clock,
  MapPin,
  ArrowRight,
  Shield,
  Gauge,
} from "lucide-react";

interface SingaporeTransitCorridor {
  id: string;
  name: string;
  code: string;
  destinationHub: string;
  duration: string;
  distanceKm: number;
  transitMode: string;
  corridorNotes: string;
  packagePriceSGD: number;
  targetCoords: { x: number; y: number };
}

// Changi Airport Origin Coordinates on Singapore Island SVG Map (viewBox 0 0 1000 600)
const CHANGI_COORDS = { x: 860, y: 310 };

const SINGAPORE_CORRIDORS: SingaporeTransitCorridor[] = [
  {
    id: "corridor-mbs",
    name: "Marina Bay Waterfront",
    code: "MBS",
    destinationHub: "Marina Bay Sands & Fullerton Heritage",
    duration: "20 Mins",
    distanceKm: 21,
    transitMode: "Mercedes-Maybach Presidential Saloon",
    corridorNotes: "Direct East Coast Parkway arterial corridor along the coastline directly into Marina Boulevard.",
    packagePriceSGD: 1250,
    targetCoords: { x: 580, y: 440 },
  },
  {
    id: "corridor-sentosa",
    name: "Sentosa Cove Sanctuaries",
    code: "SEN",
    destinationHub: "Capella Singapore & ONE°15 Marina",
    duration: "25 Mins",
    distanceKm: 28,
    transitMode: "Executive Lexus Royal Lounge MPV",
    corridorNotes: "Fast-track coastal expressway passing Tanjong Pagar onto the private Sentosa Gateway causeway.",
    packagePriceSGD: 1450,
    targetCoords: { x: 500, y: 520 },
  },
  {
    id: "corridor-islands",
    name: "Southern Islands Marine",
    code: "ISL",
    destinationHub: "Lazarus Island & St. John's Lagoon",
    duration: "35 Mins",
    distanceKm: 18,
    transitMode: "Private Yacht Tender & Catamaran",
    corridorNotes: "Bespoke sea passage departing ONE°15 Marina anchorage across the sheltered Singapore Strait.",
    packagePriceSGD: 1650,
    targetCoords: { x: 540, y: 560 },
  },
  {
    id: "corridor-dempsey",
    name: "Dempsey Hill Barracks",
    code: "DMP",
    destinationHub: "Dempsey Michelin Dining & Botanic Reserve",
    duration: "24 Mins",
    distanceKm: 26,
    transitMode: "Chauffeured Executive Saloon",
    corridorNotes: "Traversing the Pan Island Expressway into Tanglin's shaded botanical canopy avenues.",
    packagePriceSGD: 1350,
    targetCoords: { x: 440, y: 380 },
  },
  {
    id: "corridor-joochiat",
    name: "Joo Chiat Heritage",
    code: "JCT",
    destinationHub: "Peranakan Shophouses & Katong",
    duration: "15 Mins",
    distanceKm: 14,
    transitMode: "Private Heritage Concierge Transfer",
    corridorNotes: "Swift transit through Still Road into protected conservation shophouse avenues.",
    packagePriceSGD: 1100,
    targetCoords: { x: 720, y: 380 },
  },
  {
    id: "corridor-macritchie",
    name: "MacRitchie Rainforest",
    code: "MCR",
    destinationHub: "TreeTop Canopy Walk & Nature Reserve",
    duration: "22 Mins",
    distanceKm: 24,
    transitMode: "Eco-Electric Luxury SUV",
    corridorNotes: "Connecting eastward across Lornie Highway nature spine to pristine primary forest boardwalks.",
    packagePriceSGD: 1200,
    targetCoords: { x: 480, y: 310 },
  },
];

export default function GlobalRouteExplorer() {
  const [activeCorridorId, setActiveCorridorId] = useState<string>("corridor-mbs");

  const activeCorridor =
    SINGAPORE_CORRIDORS.find((c) => c.id === activeCorridorId) || SINGAPORE_CORRIDORS[0];

  const getCurvePath = (target: { x: number; y: number }) => {
    const startX = CHANGI_COORDS.x;
    const startY = CHANGI_COORDS.y;
    const endX = target.x;
    const endY = target.y;

    const midX = (startX + endX) / 2;
    const midY = Math.min(startY, endY) - 40;

    return `M ${startX} ${startY} Q ${midX} ${midY} ${endX} ${endY}`;
  };

  return (
    <section
      id="route-explorer"
      className="w-full py-24 px-6 sm:px-12 bg-[#091811] text-[#F5F3EE] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B4332] border border-[#40916C]/40 text-[#40916C] text-xs font-mono tracking-widest uppercase mb-4">
              <Navigation className="w-3.5 h-3.5 text-[#D4A373]" />
              <span>SECTION 02 — SINGAPORE TRANSIT CORRIDORS</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-heading font-light tracking-tight text-white leading-tight">
              Singapore Transit <span className="italic font-normal text-[#D4A373]">Corridors</span>
            </h2>

            <p className="mt-3 text-base font-subheading text-white/70 max-w-xl">
              Radiating from Singapore Changi International Hub. Seamless private highway
              and yacht connections linking the airport to Marina Bay, Sentosa Cove, and
              protected rainforest reserves.
            </p>
          </div>

          {/* Corridor Selectors */}
          <div className="flex flex-wrap gap-2">
            {SINGAPORE_CORRIDORS.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCorridorId(c.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2 ${
                  activeCorridorId === c.id
                    ? "bg-[#D4A373] text-[#0F261C] font-bold shadow-md"
                    : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                <span>Changi → {c.code}</span>
                <span className="text-[10px] opacity-75">({c.duration})</span>
              </button>
            ))}
          </div>
        </div>

        {/* 2-Part Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Custom SVG Vector Singapore Map Canvas */}
          <div className="lg:col-span-8 bg-[#0F261C] rounded-3xl p-4 sm:p-8 border border-white/10 shadow-2xl relative overflow-hidden backdrop-blur-md">
            {/* Telemetry watermark */}
            <div className="text-[10px] font-mono text-[#40916C] tracking-widest uppercase flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#40916C]" />
              <span>CHANGI AIRPORT RADIAL TRANSIT NETWORK</span>
            </div>

            {/* SVG Singapore Island Map */}
            <div className="w-full aspect-[16/10] relative">
              <svg
                viewBox="0 0 1000 600"
                className="w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Stylized Island Silhouette of Singapore */}
                <path
                  d="M180 280 C260 220 380 200 520 220 C640 210 760 230 880 270 C920 290 940 330 900 360 C840 400 760 430 680 460 C580 490 480 500 380 480 C280 460 200 420 160 360 C140 330 150 300 180 280 Z"
                  fill="rgba(27, 67, 50, 0.35)"
                  stroke="rgba(212, 163, 115, 0.25)"
                  strokeWidth="1.5"
                />

                {/* Sentosa Island Silhouette */}
                <ellipse
                  cx="500"
                  cy="530"
                  rx="60"
                  ry="25"
                  fill="rgba(27, 67, 50, 0.5)"
                  stroke="rgba(212, 163, 115, 0.3)"
                  strokeWidth="1"
                />

                {/* Inactive Corridor Lines */}
                {SINGAPORE_CORRIDORS.map((c) => {
                  if (c.id === activeCorridorId) return null;
                  const pathD = getCurvePath(c.targetCoords);
                  return (
                    <g key={c.id} opacity="0.3">
                      <path
                        d={pathD}
                        stroke="#40916C"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                      />
                      <circle
                        cx={c.targetCoords.x}
                        cy={c.targetCoords.y}
                        r="4"
                        fill="#D4A373"
                      />
                    </g>
                  );
                })}

                {/* Active Corridor Line */}
                {(() => {
                  const activePathD = getCurvePath(activeCorridor.targetCoords);
                  return (
                    <g>
                      <path
                        d={activePathD}
                        stroke="#E76F51"
                        strokeWidth="4"
                        strokeOpacity="0.25"
                        strokeLinecap="round"
                      />
                      <motion.path
                        d={activePathD}
                        stroke="#D4A373"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                      />

                      <circle
                        cx={activeCorridor.targetCoords.x}
                        cy={activeCorridor.targetCoords.y}
                        r="6"
                        fill="#E76F51"
                      />

                      <text
                        x={activeCorridor.targetCoords.x - 20}
                        y={activeCorridor.targetCoords.y - 14}
                        fill="#FFFFFF"
                        fontSize="13"
                        fontFamily="var(--font-heading)"
                        fontWeight="600"
                      >
                        {activeCorridor.name}
                      </text>
                      <text
                        x={activeCorridor.targetCoords.x - 20}
                        y={activeCorridor.targetCoords.y + 22}
                        fill="#D4A373"
                        fontSize="10"
                        fontFamily="monospace"
                      >
                        {activeCorridor.distanceKm} KM • {activeCorridor.duration}
                      </text>
                    </g>
                  );
                })()}

                {/* Changi Airport Origin Point */}
                <g>
                  <circle
                    cx={CHANGI_COORDS.x}
                    cy={CHANGI_COORDS.y}
                    r="10"
                    fill="#1B4332"
                    stroke="#D4A373"
                    strokeWidth="2"
                  />
                  <circle
                    cx={CHANGI_COORDS.x}
                    cy={CHANGI_COORDS.y}
                    r="4"
                    fill="#40916C"
                  />
                  <text
                    x={CHANGI_COORDS.x - 40}
                    y={CHANGI_COORDS.y + 28}
                    fill="#D4A373"
                    fontSize="11"
                    fontWeight="bold"
                    fontFamily="monospace"
                  >
                    CHANGI HUB (SIN)
                  </text>
                </g>
              </svg>
            </div>

            {/* Bottom Status */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10 text-[11px] font-mono text-white/50">
              <div className="flex items-center gap-2">
                <Car className="w-3.5 h-3.5 text-[#D4A373]" />
                <span>TRANSIT PATH: {activeCorridor.corridorNotes}</span>
              </div>
              <div className="hidden sm:block text-[#D4A373]">
                SINGAPORE HIGHWAY PROTOCOL
              </div>
            </div>
          </div>

          {/* Right: Transit Telemetry Deck */}
          <div className="lg:col-span-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCorridor.id}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.25 }}
                className="bg-white/[0.04] border border-[#D4A373]/30 rounded-3xl p-6 sm:p-8 backdrop-blur-xl space-y-6"
              >
                <div className="border-b border-white/10 pb-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4A373]">
                    PRECINCT DISPATCH
                  </span>
                  <h3 className="text-2xl font-heading font-light text-white mt-0.5">
                    Changi → {activeCorridor.name}
                  </h3>
                  <div className="text-xs font-mono text-[#40916C] mt-1">
                    {activeCorridor.destinationHub}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-black/30 border border-white/10">
                    <span className="text-[10px] font-mono text-white/50 block">CHAUFFEUR TIME</span>
                    <span className="text-base font-mono font-bold text-white mt-1 block">
                      {activeCorridor.duration}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-black/30 border border-white/10">
                    <span className="text-[10px] font-mono text-white/50 block">DRIVE DISTANCE</span>
                    <span className="text-base font-mono font-bold text-[#D4A373] mt-1 block">
                      {activeCorridor.distanceKm} KM
                    </span>
                  </div>
                </div>

                {/* Assigned Vehicle */}
                <div>
                  <span className="text-[10px] font-mono uppercase text-white/50 block mb-1">
                    ASSIGNED CONCIERGE FLEET:
                  </span>
                  <div className="text-sm font-heading font-medium text-white">
                    {activeCorridor.transitMode}
                  </div>
                  <p className="text-xs text-white/70 font-subheading mt-1 leading-relaxed">
                    Personalized tarmac greeting at Changi with direct baggage forwarding to your suite.
                  </p>
                </div>

                {/* Link to Destination Stories */}
                <div className="p-4 rounded-2xl bg-[#1B4332] border border-[#D4A373]/30 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-[#D4A373] uppercase tracking-wider block">
                      CURATED PRECINCT JOURNEY
                    </span>
                    <span className="text-xs text-white font-medium">
                      Packages from ${activeCorridor.packagePriceSGD} SGD
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      const el = document.getElementById("destination-stories");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="p-2.5 rounded-xl bg-[#D4A373] text-[#0F261C] hover:bg-[#c49262] transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
