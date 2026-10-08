/**
 * Web Analytics & Event Tracking Engine for Atlas Journey Singapore
 * Standardized GA4 & DataLayer event schema for high-conversion travel intelligence.
 */

export interface AnalyticsEvent {
  event: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  [key: string]: any;
}

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

export function trackEvent({ event, category, action, label, value, ...rest }: AnalyticsEvent) {
  if (typeof window === "undefined") return;

  const payload = {
    event,
    event_category: category,
    event_action: action,
    event_label: label,
    value,
    timestamp: new Date().toISOString(),
    ...rest,
  };

  // Push to Google Tag Manager DataLayer
  if (window.dataLayer) {
    window.dataLayer.push(payload);
  }

  // Call gtag if initialized
  if (typeof window.gtag === "function") {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value,
      ...rest,
    });
  }

  // Debug logging in development
  if (process.env.NODE_ENV !== "production") {
    console.log("[Atlas Analytics]", event, payload);
  }
}

export const analytics = {
  compassSelected: (modality: string) => {
    trackEvent({
      event: "compass_selection",
      category: "Engagement",
      action: "select_modality",
      label: modality,
    });
  },

  dnaCalculated: (personality: string, budgetSGD: number) => {
    trackEvent({
      event: "dna_calculated",
      category: "Lead Qualification",
      action: "synthesize_genome",
      label: personality,
      value: budgetSGD,
    });
  },

  corridorInspected: (corridorName: string) => {
    trackEvent({
      event: "corridor_inspected",
      category: "Route Telemetry",
      action: "view_corridor",
      label: corridorName,
    });
  },

  precinctViewed: (precinctName: string) => {
    trackEvent({
      event: "precinct_viewed",
      category: "Content Storytelling",
      action: "view_monograph",
      label: precinctName,
    });
  },

  budgetAdjusted: (totalBudgetSGD: number) => {
    trackEvent({
      event: "budget_simulated",
      category: "Financial Planning",
      action: "adjust_sliders",
      value: totalBudgetSGD,
    });
  },

  voyageDossierSealed: (precinct: string, dna: string) => {
    trackEvent({
      event: "conversion_voyage_sealed",
      category: "Conversion",
      action: "seal_dossier",
      label: `${precinct} - ${dna}`,
    });
  },
};
