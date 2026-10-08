"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  MapPin,
  Calendar,
  DollarSign,
  FileCheck,
  Plane,
  BookOpen,
  Users,
  ShieldAlert,
  X,
  Globe2,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import { uniqueDestinationNames } from "@/data/atlasEngine";

interface NavCategory {
  id: string;
  name: string;
  targetId: string;
  subtitle: string;
  icon: typeof Compass;
  badge: string;
  coordinates: string;
}

const NAV_CATEGORIES: NavCategory[] = [
  {
    id: "explore",
    name: "Explore",
    targetId: "route-explorer",
    subtitle: "Singapore regional transit corridors and Changi connectivity",
    icon: Compass,
    badge: "Corridors",
    coordinates: "01°21′N 103°49′E",
  },
  {
    id: "plan",
    name: "Plan",
    targetId: "journey-planner",
    subtitle: "Interactive day-by-day Singapore progression and pacing",
    icon: Calendar,
    badge: "Itineraries",
    coordinates: "01°17′N 103°51′E",
  },
  {
    id: "compare",
    name: "Compare",
    targetId: "budget-simulator",
    subtitle: "Real-time SGD expense engine and luxury allocation",
    icon: DollarSign,
    badge: "Simulator",
    coordinates: "01°18′N 103°50′E",
  },
  {
    id: "prepare",
    name: "Prepare",
    targetId: "weather-explorer",
    subtitle: "Equatorial climate radar, sea breezes, and packing notes",
    icon: ShieldAlert,
    badge: "Climate",
    coordinates: "01°21′N 103°49′E",
  },
  {
    id: "travel",
    name: "Travel",
    targetId: "airport-transfers",
    subtitle: "Changi Terminal 1-4 VIP intelligence and Maybach fleet",
    icon: Plane,
    badge: "Transfers",
    coordinates: "01°21′N 103°59′E",
  },
  {
    id: "guides",
    name: "Guides",
    targetId: "destination-stories",
    subtitle: "Full-screen monographs of Singapore's 10 luxury precincts",
    icon: BookOpen,
    badge: "Precincts",
    coordinates: "01°18′N 103°52′E",
  },
  {
    id: "experts",
    name: "Experts",
    targetId: "travel-experts",
    subtitle: "Singapore field curators, historians, and Michelin scouts",
    icon: Users,
    badge: "Curators",
    coordinates: "01°17′N 103°51′E",
  },
  {
    id: "entry",
    name: "Entry",
    targetId: "visa-journey",
    subtitle: "Singapore SG Arrival Card and automated biometric gates",
    icon: FileCheck,
    badge: "Clearance",
    coordinates: "01°21′N 103°59′E",
  },
  {
    id: "stories",
    name: "Stories",
    targetId: "travel-stories",
    subtitle: "Verified Singapore travel journals and guest dispatches",
    icon: BookOpen,
    badge: "Journals",
    coordinates: "01°16′N 103°50′E",
  },
];

export default function JourneyOrb({
  activeCompassDNA,
  onOpenDossier,
}: {
  activeCompassDNA?: string;
  onOpenDossier?: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [singaporeTime, setSingaporeTime] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Singapore",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setSingaporeTime(new Intl.DateTimeFormat("en-SG", options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const scrollToSection = (targetId: string) => {
    setIsOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const filteredCategories = NAV_CATEGORIES.filter(
    (c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* FLOATING JOURNEY ORB HUD */}
      <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 flex items-center gap-3">
        {onOpenDossier && (
          <button
            onClick={onOpenDossier}
            className="hidden md:flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#1B4332] text-[#F5F3EE] text-xs font-semibold tracking-wider uppercase border border-[#D4A373]/30 shadow-2xl hover:bg-[#163628] transition-all"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A373]" />
            <span>Trip Dossier</span>
          </button>
        )}

        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-3 px-4 py-3 rounded-full bg-[#0F261C] text-[#F5F3EE] border border-[#D4A373]/40 shadow-2xl backdrop-blur-xl transition-all hover:border-[#D4A373]"
          aria-label="Open Journey Navigation System"
        >
          <div className="relative w-8 h-8 rounded-full bg-[#1B4332] border border-[#D4A373]/50 flex items-center justify-center">
            <Globe2 className="w-4 h-4 text-[#D4A373]" />
          </div>

          <div className="text-left hidden sm:block pr-1">
            <div className="text-[10px] tracking-widest uppercase font-semibold text-[#D4A373] flex items-center gap-1.5">
              <span>JOURNEY ORB</span>
              <span className="inline-block w-1 h-1 rounded-full bg-[#40916C]" />
              <span className="text-[9px] text-[#F5F3EE]/70 font-mono">SIN {singaporeTime || "12:00"}</span>
            </div>
            <div className="text-xs font-heading font-medium tracking-wide text-white group-hover:text-[#D4A373] transition-colors">
              Navigate Platform
            </div>
          </div>
        </button>
      </div>

      {/* FULL-SCREEN NAVIGATION PORTAL OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-[#0F261C] text-[#F5F3EE] flex flex-col justify-between overflow-y-auto"
          >
            {/* Top Bar Navigation */}
            <div className="border-b border-[#D4A373]/20 px-6 sm:px-12 py-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-[#D4A373]/40 flex items-center justify-center bg-[#1B4332] text-[#D4A373]">
                  <Globe2 className="w-5 h-5 text-[#D4A373]" />
                </div>
                <div>
                  <div className="text-xs tracking-[0.25em] uppercase font-semibold text-[#D4A373]">
                    Atlas Journey Singapore
                  </div>
                  <div className="text-sm font-subheading text-white/70">
                    Travel Intelligence Platform • Singapore Gateway
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="hidden lg:flex items-center gap-6 text-xs font-mono text-white/70">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#D4A373]" />
                    <span>SGT {singaporeTime} UTC+8</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#40916C]" />
                    <span>1.3521° N, 103.8198° E SIN</span>
                  </div>
                  {activeCompassDNA && (
                    <div className="px-2.5 py-1 rounded bg-[#1B4332] text-[#D4A373] border border-[#D4A373]/30">
                      DNA: {activeCompassDNA}
                    </div>
                  )}
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="w-11 h-11 rounded-full border border-white/20 hover:border-[#D4A373] hover:bg-white/10 flex items-center justify-center transition-all group"
                  aria-label="Close navigation"
                >
                  <X className="w-5 h-5 text-white/80 group-hover:text-white" />
                </button>
              </div>
            </div>

            {/* Central Portal Matrix */}
            <div className="max-w-7xl mx-auto w-full px-6 sm:px-12 py-10 my-auto">
              <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <span className="editorial-tag text-[#D4A373]">VOYAGE DIRECTORY</span>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-light text-white tracking-tight mt-1">
                    Select Your <span className="font-normal italic text-[#D4A373]">Journey Mode</span>
                  </h2>
                </div>

                <div className="w-full md:w-72">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search directory..."
                    className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/15 focus:border-[#D4A373] text-sm text-white placeholder-white/40 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* 9 Portals */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredCategories.map((cat, idx) => {
                  const Icon = cat.icon;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => scrollToSection(cat.targetId)}
                      className="group text-left p-6 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#D4A373] hover:bg-white/[0.08] transition-all relative overflow-hidden"
                    >
                      <div className="flex items-start justify-between relative z-10 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-[#1B4332] border border-[#D4A373]/30 flex items-center justify-center text-[#D4A373]">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-mono tracking-widest text-[#D4A373] uppercase px-2.5 py-1 rounded bg-black/40 border border-[#D4A373]/20">
                          {cat.badge}
                        </span>
                      </div>

                      <div className="relative z-10">
                        <div className="flex items-center justify-between">
                          <h3 className="text-2xl font-heading font-medium text-white group-hover:text-[#D4A373] transition-colors">
                            {cat.name}
                          </h3>
                          <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-[#D4A373] transition-colors" />
                        </div>
                        <p className="text-xs text-white/70 font-subheading mt-2 line-clamp-2 leading-relaxed">
                          {cat.subtitle}
                        </p>
                        <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-white/50">
                          <span>SECTION 0{idx + 1}</span>
                          <span>{cat.coordinates}</span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Singapore Precincts Ribbon */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="text-[11px] font-mono tracking-wider uppercase text-[#D4A373] mb-3">
                  CURATED SINGAPORE PRECINCTS:
                </div>
                <div className="flex flex-wrap gap-2">
                  {uniqueDestinationNames.map((dest) => (
                    <button
                      key={dest}
                      onClick={() => scrollToSection("destination-stories")}
                      className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-[#1B4332] text-xs text-white/80 hover:text-white border border-white/10 hover:border-[#D4A373] transition-all"
                    >
                      {dest}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-[#D4A373]/20 px-6 sm:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/50">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#40916C]" />
                <span>ATLAS JOURNEY SINGAPORE • INTELLIGENCE GATEWAY</span>
              </div>
              <div>
                <span>PRESS ESC OR CLICK CLOSE TO RETURN</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
