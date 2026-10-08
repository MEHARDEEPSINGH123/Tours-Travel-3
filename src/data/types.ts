export interface RawBrand {
  name: string;
  tagline: string;
}

export interface RawDestination {
  id: string;
  name: string;
  country: string;
  budgetSGD: number;
  bestSeason: string;
}

export interface RawTravelPackage {
  id: string;
  title: string;
  duration: string;
  priceSGD: number;
  availability: string;
}

export interface RawItinerary {
  id: string;
  day1: string;
  day2: string;
  day3: string;
  day4: string;
  day5: string;
}

export interface RawVisaGuide {
  country: string;
  processingDays: number;
  feeSGD: number;
}

export interface RawLocalRecommendation {
  destination: string;
  category: "Food" | "Attraction" | "Shopping" | "Nightlife" | string;
  name: string;
}

export interface RawReview {
  customer: string;
  rating: number;
  comment: string;
}

export interface RawAtlasDataset {
  brand: RawBrand;
  destinations: RawDestination[];
  travelPackages: RawTravelPackage[];
  itineraries: RawItinerary[];
  visaGuides: RawVisaGuide[];
  localRecommendations: RawLocalRecommendation[];
  reviews: RawReview[];
}

export interface DestinationStory {
  id: string;
  name: string;
  country: string;
  code: string;
  coordinates: { lat: number; lng: number };
  elevation: string;
  climateZone: string;
  minBudgetSGD: number;
  maxBudgetSGD: number;
  avgBudgetSGD: number;
  bestSeason: string;
  tagline: string;
  leadParagraph: string;
  heroImage: string;
  detailImage: string;
  foodImage: string;
  cultureImage: string;
  cultureEthos: string;
  gastronomySignature: string;
  hiddenGem: string;
  soundscapeVibe: string;
  flightFromSingapore: {
    duration: string;
    distanceKm: number;
    corridor: string;
  };
  monthlyTemps: number[]; // Jan - Dec
  rainfallMm: number[];   // Jan - Dec
  packagesCount: number;
}

export interface TravelExpert {
  id: string;
  name: string;
  role: string;
  fieldTitle: string;
  yearsExperience: number;
  specialization: string;
  destinationsCovered: string[];
  travelPhilosophy: string;
  fieldStory: string;
  portraitImage: string;
  credentials: string[];
  signatureRoute: string;
  currentStation: string;
}

export interface EnrichedJournal {
  id: string;
  customer: string;
  rating: number;
  baseComment: string;
  travelerArchetype: string;
  routeTaken: string;
  impetus: string;
  journey: string;
  discovery: string;
  outcome: string;
  passportStamp: string;
  dateStr: string;
  travelerPortrait: string;
  locationPhoto: string;
}

export interface FestivalEvent {
  id: string;
  title: string;
  destination: string;
  country: string;
  month: string;
  dateRange: string;
  season: string;
  culturalLore: string;
  sensoryHighlights: string[];
  insiderTip: string;
  image: string;
}
