"use client";

import { useState } from "react";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import JourneyOrb from "@/components/navigation/JourneyOrb";
import TravelCompass, { CompassModality } from "@/components/sections/TravelCompass";
import TravelDNAAnalyzer from "@/components/sections/TravelDNAAnalyzer";
import GlobalRouteExplorer from "@/components/sections/GlobalRouteExplorer";
import DestinationStories from "@/components/sections/DestinationStories";
import JourneyPlanner from "@/components/sections/JourneyPlanner";
import VisaJourneyCenter from "@/components/sections/VisaJourneyCenter";
import BudgetSimulator from "@/components/sections/BudgetSimulator";
import WeatherExplorer from "@/components/sections/WeatherExplorer";
import FestivalDiscovery from "@/components/sections/FestivalDiscovery";
import LocalRecommendationEngine from "@/components/sections/LocalRecommendationEngine";
import TravelExperts from "@/components/sections/TravelExperts";
import TravelStories from "@/components/sections/TravelStories";
import AirportTransferExperience from "@/components/sections/AirportTransferExperience";
import TravelInsurance from "@/components/sections/TravelInsurance";
import VoyageDossierDrawer from "@/components/modals/VoyageDossierDrawer";
import { brandInfo, platformMetrics } from "@/data/atlasEngine";
import { ArrowUp, Compass } from "lucide-react";

export default function AtlasJourneyPlatform() {
  const [selectedCompassModality, setSelectedCompassModality] =
    useState<CompassModality>("Culture");
  const [selectedDestination, setSelectedDestination] = useState<string>("Marina Bay");
  const [activeTravelDna, setActiveTravelDna] = useState<string>("The Mindful Heritage Seeker");
  const [isDossierOpen, setIsDossierOpen] = useState<boolean>(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <SmoothScrollProvider>
      <div className="relative min-h-screen bg-[#F5F3EE] text-[#1D1D1D] font-sans antialiased selection:bg-[#1B4332] selection:text-[#F5F3EE]">
        {/* FLOATING JOURNEY ORB & FULL-SCREEN NAVIGATION */}
        <JourneyOrb
          activeCompassDNA={selectedCompassModality}
          onOpenDossier={() => setIsDossierOpen(true)}
        />

        {/* HOMEPAGE EXPERIENCE (100VH INTERACTIVE TRAVEL COMPASS — NO HERO BANNER) */}
        <TravelCompass
          selectedModality={selectedCompassModality}
          onSelectModality={(modality) => {
            setSelectedCompassModality(modality);
            if (modality === "Adventure") setSelectedDestination("MacRitchie Canopies");
            if (modality === "Luxury") setSelectedDestination("Sentosa Cove");
            if (modality === "Culture") setSelectedDestination("Joo Chiat");
            if (modality === "Nature") setSelectedDestination("Gardens by the Bay");
            if (modality === "Family") setSelectedDestination("Mandai Nature Reserve");
            if (modality === "Business") setSelectedDestination("Marina Bay");
          }}
        />

        {/* SECTION 1: TRAVEL DNA ANALYZER */}
        <TravelDNAAnalyzer
          onDnaGenerated={(personality) => setActiveTravelDna(personality)}
        />

        {/* SECTION 2: SINGAPORE TRANSIT CORRIDORS */}
        <GlobalRouteExplorer />

        {/* SECTION 3: SINGAPORE PRECINCT STORIES (ONE PER SCREEN, NO GRIDS) */}
        <DestinationStories
          onSelectForPlanner={(destName) => setSelectedDestination(destName)}
        />

        {/* SECTION 4: JOURNEY PLANNER (CHRONOLOGICAL PROGRESSION) */}
        <JourneyPlanner
          selectedDestination={selectedDestination}
          onDestinationChange={(dest) => setSelectedDestination(dest)}
        />

        {/* SECTION 5: SINGAPORE ENTRY & IMMIGRATION FAST-TRACK */}
        <VisaJourneyCenter />

        {/* SECTION 6: BUDGET SIMULATOR (6-CATEGORY CALCULATOR) */}
        <BudgetSimulator />

        {/* SECTION 7: WEATHER EXPLORER (12-MONTH EQUATORIAL CLIMATE) */}
        <WeatherExplorer />

        {/* SECTION 8: FESTIVAL DISCOVERY (SINGAPORE CULTURAL TAPESTRY) */}
        <FestivalDiscovery />

        {/* SECTION 9: LOCAL RECOMMENDATION ENGINE (EDITORIAL MAGAZINE SPREAD) */}
        <LocalRecommendationEngine />

        {/* SECTION 10: TRAVEL EXPERTS (EDITORIAL MONOGRAPHS, NO TEAM CARDS) */}
        <TravelExperts />

        {/* SECTION 11: TRAVEL STORIES (4-PART EXPEDITION JOURNALS) */}
        <TravelStories />

        {/* SECTION 12: AIRPORT TRANSFER EXPERIENCE (EXECUTIVE FLEET & CHANGI) */}
        <AirportTransferExperience />

        {/* SECTION 13: TRAVEL INSURANCE & CRISIS PROTOCOL */}
        <TravelInsurance />

        {/* PLATFORM EPILOGUE & EDITORIAL COLOPHON */}
        <footer className="w-full bg-[#0F261C] text-[#F5F3EE] py-20 px-6 sm:px-12 border-t border-[#D4A373]/20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
            <div className="space-y-4 max-w-lg">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#1B4332] border border-[#D4A373]/40 flex items-center justify-center text-[#D4A373]">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D4A373] block">
                    {brandInfo.name}
                  </span>
                  <span className="text-sm font-subheading text-white/70 italic">
                    "{brandInfo.tagline}"
                  </span>
                </div>
              </div>

              <p className="text-xs text-white/60 font-subheading leading-relaxed">
                Engineered as a luxury travel intelligence platform dedicated to Singapore.
                Synthesizing {platformMetrics.totalDestinations} curated luxury precincts,{" "}
                {platformMetrics.totalPackages} expedition packages, and{" "}
                {platformMetrics.totalReviews} verified traveler journals.
              </p>

              <div className="flex flex-wrap gap-4 text-[11px] font-mono text-white/40 pt-2">
                <span>LAT 01°21′N, LON 103°49′E SIN</span>
                <span>•</span>
                <span>CHANGI HUB OPERATIONS</span>
                <span>•</span>
                <span>SINGAPORE SANCTUARIES</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <button
                onClick={() => setIsDossierOpen(true)}
                className="px-6 py-3.5 rounded-full bg-[#D4A373] hover:bg-[#c49262] text-[#0F261C] font-heading font-semibold text-xs tracking-wider uppercase shadow-xl transition-all"
              >
                Inspect Active Trip Dossier
              </button>

              <button
                onClick={scrollToTop}
                className="w-12 h-12 rounded-full border border-white/20 hover:border-[#D4A373] hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all group"
                aria-label="Back to Top"
              >
                <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

          <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-white/40 gap-4">
            <div>
              © 2026 {brandInfo.name}. All Singapore expedition blueprints reserved.
            </div>
            <div>
              MARINA BAY • SENTOSA COVE • JOO CHIAT • MACRITCHIE • DEMPSEY HILL • GARDENS BY THE BAY
            </div>
          </div>
        </footer>

        {/* VOYAGE DOSSIER DRAWER */}
        <VoyageDossierDrawer
          isOpen={isDossierOpen}
          onClose={() => setIsDossierOpen(false)}
          selectedDest={selectedDestination}
          travelDna={activeTravelDna}
        />
      </div>
    </SmoothScrollProvider>
  );
}
