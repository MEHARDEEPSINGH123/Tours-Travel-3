"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileCheck,
  ShieldCheck,
  Send,
  Stamp,
  Plane,
  CheckCircle2,
  RefreshCw,
} from "lucide-react";
import confetti from "canvas-confetti";
import { singaporeEntryProtocols } from "@/data/atlasEngine";
import { IMAGES } from "@/data/imageCatalog";

interface VisaStep {
  stepNumber: number;
  id: string;
  title: string;
  icon: typeof FileCheck;
  description: string;
  verificationItem: string;
  image: string;
}

const VISA_PIPELINE_STEPS: VisaStep[] = [
  {
    stepNumber: 1,
    id: "passport",
    title: "1. Biometric Passport Validation",
    icon: ShieldCheck,
    description: "Verification of national passport validity (minimum 6 months) and ICAO biometric chip integrity.",
    verificationItem: "Biometric e-Passport NFC Chip Scanned",
    image: IMAGES.visa.passportStamp,
  },
  {
    stepNumber: 2,
    id: "documents",
    title: "2. SG Arrival Card (SGAC) Dossier",
    icon: FileCheck,
    description: "Digital health & customs declaration submitted electronically within 3 days prior to touchdown at Changi.",
    verificationItem: "Official SGAC Digital Health QR Code Issued",
    image: IMAGES.visa.documentsFold,
  },
  {
    stepNumber: 3,
    id: "submission",
    title: "3. ICA Ministry Gateway Handshake",
    icon: Send,
    description: "Transmission to the Singapore Immigration & Checkpoints Authority (ICA) automated database.",
    verificationItem: "ICA Border Registry Verification Confirmed",
    image: IMAGES.visa.consularApproval,
  },
  {
    stepNumber: 4,
    id: "approval",
    title: "4. Automated Clearance Protocol",
    icon: Stamp,
    description: "Pre-clearance authorization issued with direct access to Changi Automated Clearance Initiative (ACI).",
    verificationItem: "Automated Biometric Iris Lane Authorized",
    image: IMAGES.visa.biometricGate,
  },
  {
    stepNumber: 5,
    id: "travel",
    title: "5. Changi Terminal Fast-Track Touchdown",
    icon: Plane,
    description: "Paperless border crossing completed in under 15 seconds followed by private baggage escort to your limousine.",
    verificationItem: "Cleared for International Boarding & VIP Handover",
    image: IMAGES.visa.boardingPassMoment,
  },
];

export default function VisaJourneyCenter() {
  const [selectedRegionIndex, setSelectedRegionIndex] = useState<number>(0);
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simulationComplete, setSimulationComplete] = useState<boolean>(false);

  const selectedProtocol =
    singaporeEntryProtocols[selectedRegionIndex] || singaporeEntryProtocols[0];

  const currentStep = VISA_PIPELINE_STEPS[activeStageIndex];

  const runSimulation = () => {
    setIsSimulating(true);
    setSimulationComplete(false);
    setActiveStageIndex(0);

    let stage = 0;
    const interval = setInterval(() => {
      stage += 1;
      if (stage < VISA_PIPELINE_STEPS.length) {
        setActiveStageIndex(stage);
      } else {
        clearInterval(interval);
        setIsSimulating(false);
        setSimulationComplete(true);
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#1B4332", "#40916C", "#D4A373", "#E76F51"],
        });
      }
    }, 600);
  };

  return (
    <section
      id="visa-journey"
      className="w-full py-24 px-6 sm:px-12 bg-[#F5F3EE] text-[#1D1D1D] relative overflow-hidden border-b border-[#1B4332]/10"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B4332]/10 text-[#1B4332] text-xs font-mono tracking-widest uppercase mb-3">
              <FileCheck className="w-3.5 h-3.5 text-[#40916C]" />
              <span>SECTION 05 — SINGAPORE ENTRY & IMMIGRATION FAST-TRACK</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-light tracking-tight text-[#1B4332]">
              Entry & Clearance <span className="italic font-normal text-[#D4A373]">Center</span>
            </h2>
            <p className="mt-3 text-base font-subheading text-[#5A625C] max-w-xl">
              Immigration clarity without bureaucratic confusion. Track the five essential
              phases of Singapore entry clearance from electronic declaration to Changi e-gate clearance.
            </p>
          </div>

          {/* Origin Region Switcher */}
          <div className="flex flex-wrap gap-2">
            {singaporeEntryProtocols.map((p, pIdx) => (
              <button
                key={p.originRegion}
                onClick={() => {
                  setSelectedRegionIndex(pIdx);
                  setSimulationComplete(false);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                  selectedRegionIndex === pIdx
                    ? "bg-[#1B4332] text-[#F5F3EE] font-semibold shadow-sm"
                    : "bg-white text-[#5A625C] hover:bg-[#EAE6DF] border border-[#1B4332]/10"
                }`}
              >
                {p.originRegion.split(" ")[0]} {p.originRegion.split(" ")[1] || ""}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Country Metrics Bar */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#1B4332]/10 shadow-sm mb-12 grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
          <div>
            <span className="text-[10px] font-mono uppercase text-[#5A625C] tracking-wider block">
              ORIGIN REGION CORRIDOR
            </span>
            <span className="text-xl font-heading font-semibold text-[#1B4332] mt-0.5 block truncate">
              {selectedProtocol.originRegion}
            </span>
            <span className="text-xs text-[#40916C] font-mono mt-0.5 block">
              {selectedProtocol.entryType}
            </span>
          </div>

          <div>
            <span className="text-[10px] font-mono uppercase text-[#5A625C] tracking-wider block">
              CLEARANCE SPEED
            </span>
            <span className="text-2xl font-mono font-bold text-[#1B4332] mt-0.5 block">
              {selectedProtocol.processingDays === 0 ? "Instant e-Gate" : `${selectedProtocol.processingDays} Business Days`}
            </span>
            <span className="text-xs text-[#5A625C] font-subheading mt-0.5 block">
              Automated Clearance Initiative (ACI)
            </span>
          </div>

          <div>
            <span className="text-[10px] font-mono uppercase text-[#5A625C] tracking-wider block">
              AUTHORIZED DURATION
            </span>
            <span className="text-2xl font-mono font-bold text-[#D4A373] mt-0.5 block">
              {selectedProtocol.validity}
            </span>
            <span className="text-xs text-[#5A625C] font-subheading mt-0.5 block">
              Singapore electronic pass issued
            </span>
          </div>

          <div className="flex justify-start md:justify-end">
            <button
              onClick={runSimulation}
              disabled={isSimulating}
              className="px-5 py-3 rounded-2xl bg-[#1B4332] hover:bg-[#153427] text-[#F5F3EE] font-heading font-semibold text-xs tracking-wider uppercase flex items-center gap-2 shadow-sm transition-all"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>{isSimulating ? "Verifying..." : "Simulate Clearance"}</span>
            </button>
          </div>
        </div>

        {/* 5-STAGE VISUAL CORRIDOR */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-10">
          {VISA_PIPELINE_STEPS.map((step, idx) => {
            const Icon = step.icon;
            const isPassed = activeStageIndex > idx || simulationComplete;
            const isCurrent = activeStageIndex === idx && !simulationComplete;

            return (
              <button
                key={step.id}
                onClick={() => setActiveStageIndex(idx)}
                className={`p-5 rounded-2xl text-left border transition-all relative ${
                  isCurrent
                    ? "bg-[#1B4332] text-[#F5F3EE] border-[#1B4332] shadow-md shadow-[#1B4332]/20"
                    : isPassed
                    ? "bg-[#1B4332]/10 border-[#1B4332]/20 text-[#1B4332]"
                    : "bg-white border-[#1B4332]/10 text-[#5A625C] hover:bg-[#EDE9E1]"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                      isCurrent
                        ? "bg-white/10 text-[#D4A373]"
                        : isPassed
                        ? "bg-[#1B4332] text-white"
                        : "bg-[#F5F3EE] text-[#5A625C]"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  {isPassed && <CheckCircle2 className="w-4 h-4 text-[#40916C]" />}
                  {isCurrent && (
                    <span className="w-2 h-2 rounded-full bg-[#E76F51]" />
                  )}
                </div>

                <div className="text-[10px] font-mono tracking-widest uppercase opacity-75">
                  PHASE 0{step.stepNumber}
                </div>
                <div className="text-xs font-heading font-semibold mt-1">
                  {step.title.split(". ")[1]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Active Step Theater */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedProtocol.originRegion}-${currentStep.id}-${simulationComplete}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl p-6 sm:p-10 border border-[#1B4332]/10 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Step Image */}
            <div className="lg:col-span-5 relative aspect-[16/11] rounded-2xl overflow-hidden shadow-md">
              <img
                src={currentStep.image}
                alt={currentStep.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4A373] block">
                  SINGAPORE IMMIGRATION PROTOCOL
                </span>
                <span className="text-base font-heading font-medium">
                  {selectedProtocol.originRegion} Clearance
                </span>
              </div>
            </div>

            {/* Step Details & Verification */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="editorial-tag text-[#40916C]">
                  PHASE 0{currentStep.stepNumber} INTEL — SINGAPORE GATEWAY
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-medium text-[#1B4332] mt-1">
                  {currentStep.title}
                </h3>
                <p className="text-sm font-subheading text-[#5A625C] mt-2 leading-relaxed">
                  {currentStep.description}
                </p>
              </div>

              {/* Protocol Note */}
              <div className="p-4 rounded-xl bg-[#F5F3EE] border border-[#1B4332]/10 text-xs">
                <span className="font-mono uppercase font-semibold text-[#1B4332] block mb-1">
                  ICA REGISTRATION NOTE:
                </span>
                <p className="text-[#5A625C] font-subheading">
                  {selectedProtocol.notes}
                </p>
              </div>

              {/* Requirements Checklist */}
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#1B4332] font-semibold block mb-2">
                  VERIFIED APPLICATION PREREQUISITES:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProtocol.requirements.map((req, rIdx) => (
                    <div
                      key={rIdx}
                      className="flex items-center gap-2 p-2.5 rounded-lg bg-[#F5F3EE]/60 text-xs text-[#1D1D1D]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#40916C] shrink-0" />
                      <span className="truncate">{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Success Badge */}
              {simulationComplete && (
                <div className="p-4 rounded-2xl bg-[#1B4332] text-[#F5F3EE] flex items-center justify-between shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#40916C] flex items-center justify-center text-white">
                      <Stamp className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-[#D4A373] block">
                        CLEARANCE SIMULATION COMPLETED
                      </span>
                      <span className="text-[11px] text-white/80">
                        Biometrics verified. Ready for Changi Terminal arrival and automated gate passage.
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
