"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ShieldCheck,
  Stamp,
} from "lucide-react";
import confetti from "canvas-confetti";
import { singaporePackages } from "@/data/atlasEngine";
import { analytics } from "@/lib/analytics";

export default function VoyageDossierDrawer({
  isOpen,
  onClose,
  selectedDest,
  travelDna,
}: {
  isOpen: boolean;
  onClose: () => void;
  selectedDest: string;
  travelDna: string;
}) {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const matchedPackage =
    singaporePackages.find((p) =>
      p.title.toLowerCase().includes(selectedDest.toLowerCase().split(" ")[0])
    ) || singaporePackages[0];

  const handleConfirmVoyage = () => {
    setIsConfirmed(true);
    analytics.voyageDossierSealed(selectedDest, travelDna);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.5 },
      colors: ["#1B4332", "#40916C", "#D4A373", "#E76F51"],
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative z-10 w-full max-w-lg bg-[#0F261C] text-[#F5F3EE] h-full shadow-2xl flex flex-col justify-between overflow-y-auto border-l border-[#D4A373]/30"
          >
            {/* Header */}
            <div className="p-6 sm:p-8 border-b border-white/10 flex items-center justify-between">
              <div>
                <span className="editorial-tag text-[#D4A373]">ATLAS JOURNEY SINGAPORE</span>
                <h3 className="text-xl sm:text-2xl font-heading font-medium text-white mt-1">
                  Voyage Command Dossier
                </h3>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full border border-white/20 hover:border-white flex items-center justify-center text-white/80 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8 space-y-6 flex-1">
              <div className="p-5 rounded-2xl bg-white/[0.05] border border-[#D4A373]/30 space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-[10px] font-mono text-white/50 uppercase">
                    PRIMARY SINGAPORE PRECINCT
                  </span>
                  <span className="text-sm font-heading font-bold text-white">
                    {selectedDest.toUpperCase()}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                  <div>
                    <span className="text-white/50 block text-[10px]">CALIBRATED DNA:</span>
                    <span className="text-[#D4A373] font-semibold">{travelDna}</span>
                  </div>
                  <div>
                    <span className="text-white/50 block text-[10px]">PACKAGE TIER:</span>
                    <span className="text-[#40916C] font-semibold">
                      ${matchedPackage.priceSGD} SGD ({matchedPackage.duration})
                    </span>
                  </div>
                </div>
              </div>

              {/* Passport Check */}
              <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-white/70 font-semibold flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#40916C]" />
                    <span>SINGAPORE ENTRY STATUS</span>
                  </span>
                  <span className="text-[10px] font-mono text-[#40916C] px-2 py-0.5 rounded bg-[#40916C]/10 border border-[#40916C]/30">
                    VERIFIED
                  </span>
                </div>
                <p className="text-xs text-white/70 font-subheading leading-relaxed">
                  Singapore Electronic Biometric Clearance. Automated pre-clearance scheduled
                  for Singapore Changi departure and arrival corridors.
                </p>
              </div>

              {/* Confirmation */}
              {isConfirmed ? (
                <div className="p-6 rounded-2xl bg-[#1B4332] border border-[#D4A373] text-center space-y-3 shadow-xl">
                  <div className="w-12 h-12 rounded-full bg-[#D4A373] text-[#0F261C] mx-auto flex items-center justify-center">
                    <Stamp className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-heading font-semibold text-white">
                    Voyage Blueprint Sealed
                  </h4>
                  <p className="text-xs font-subheading text-white/80">
                    Dossier stamped and transmitted to Atlas Journey VIP Concierge in Singapore.
                    Precinct coordination locked.
                  </p>
                  <div className="text-[10px] font-mono text-[#D4A373] pt-2">
                    REF: ATLAS-SG-{selectedDest.toUpperCase().replace(/\s+/g, "-")}-2026
                  </div>
                </div>
              ) : (
                <button
                  onClick={handleConfirmVoyage}
                  className="w-full py-4 rounded-2xl bg-[#D4A373] hover:bg-[#c49262] text-[#0F261C] font-heading font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-xl transition-all"
                >
                  <Stamp className="w-4 h-4" />
                  <span>Seal & Confirm Voyage Dossier</span>
                </button>
              )}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/50">
              <span>ATLAS JOURNEY SINGAPORE • PLATFORM V4.8</span>
              <span>24/7 CONCIERGE READY</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
