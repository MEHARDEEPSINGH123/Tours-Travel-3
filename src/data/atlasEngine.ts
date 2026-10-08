import rawData from "./atlas_dataset.json";
import { IMAGES } from "./imageCatalog";
import {
  RawAtlasDataset,
  RawDestination,
  RawTravelPackage,
  RawItinerary,
  RawVisaGuide,
  RawLocalRecommendation,
  RawReview,
  DestinationStory,
  TravelExpert,
  EnrichedJournal,
  FestivalEvent,
} from "./types";

export type {
  DestinationStory,
  TravelExpert,
  EnrichedJournal,
  FestivalEvent,
};

export const dataset: RawAtlasDataset = rawData as RawAtlasDataset;

// Brand & Global Stats
export const brandInfo = {
  name: "Atlas Journey Singapore",
  tagline: "Every Journey Begins With A Plan",
};

export const platformMetrics = {
  totalDestinations: 10,
  uniqueDestinationsCount: 10,
  totalPackages: dataset.travelPackages.length,
  totalItineraries: dataset.itineraries.length,
  totalVisaGuides: dataset.visaGuides.length,
  totalRecommendations: dataset.localRecommendations.length,
  totalReviews: dataset.reviews.length,
  averagePackagePriceSGD: Math.round(
    dataset.travelPackages.reduce((acc, p) => acc + p.priceSGD, 0) / dataset.travelPackages.length
  ),
  lowestPackagePriceSGD: Math.min(...dataset.travelPackages.map((p) => p.priceSGD)),
  highestPackagePriceSGD: Math.max(...dataset.travelPackages.map((p) => p.priceSGD)),
  averageBudgetSGD: 2150,
  lowestBudgetSGD: 1200,
  highestBudgetSGD: 4200,
  averageRating: "4.94",
};

// 10 Curated Singapore Precincts with Verified Photography & Rich Ethos
export const SINGAPORE_PRECINCTS: DestinationStory[] = [
  {
    id: "SIN-01",
    name: "Marina Bay",
    country: "Singapore",
    code: "SIN-MBS",
    coordinates: { lat: 1.2847, lng: 103.861 },
    elevation: "5m coastal waterline",
    climateZone: "Tropical Equatorial Maritime",
    minBudgetSGD: 1800,
    maxBudgetSGD: 4200,
    avgBudgetSGD: 2850,
    bestSeason: "Year-Round Coastal Breezes",
    tagline: "Architectural Transcendence Along the Waterfront Promenade",
    leadParagraph:
      "A world-celebrated waterfront amphitheater where cantilevered sky parks, the lotus-inspired ArtScience Museum, and the historic Fullerton heritage piers meet the Singapore Strait.",
    heroImage: IMAGES.precincts["Marina Bay"].hero,
    detailImage: IMAGES.precincts["Marina Bay"].detail,
    foodImage: IMAGES.precincts["Marina Bay"].food,
    cultureImage: IMAGES.precincts["Marina Bay"].culture,
    cultureEthos:
      "Civic audacity tempered by sustainable biophilic design, celebrating Singapore's transition from colonial entrepôt to global vanguard.",
    gastronomySignature:
      "Three-Michelin-starred French gastronomy at Odette inside the National Gallery, followed by aged single-malts overlooking the Marina basin.",
    hiddenGem:
      "The private outdoor rotunda at the National Gallery Singapore at 6:45 PM as twilight turns the historic dome into brushed copper.",
    soundscapeVibe: "Gentle basin wave ripples harmonized by evening breeze through waterfront promenades.",
    flightFromSingapore: {
      duration: "20 mins from Changi Hub",
      distanceKm: 21,
      corridor: "Changi Airport Expressway to Marina Boulevard",
    },
    monthlyTemps: [27, 27, 28, 28, 28, 28, 28, 28, 27, 27, 27, 26],
    rainfallMm: [234, 112, 174, 166, 171, 130, 150, 147, 163, 153, 252, 318],
    packagesCount: 12,
  },
  {
    id: "SIN-02",
    name: "Sentosa Cove",
    country: "Singapore",
    code: "SIN-SEN",
    coordinates: { lat: 1.2494, lng: 103.8303 },
    elevation: "12m coastal ridge",
    climateZone: "Tropical Island Sanctuary",
    minBudgetSGD: 2200,
    maxBudgetSGD: 4500,
    avgBudgetSGD: 3200,
    bestSeason: "Sunny Equatorial Dry Spells",
    tagline: "Secluded Private Island Sanctuaries & Sovereign Superyacht Marinas",
    leadParagraph:
      "Guarded by historic colonial artillery trees and calm waters, Sentosa Cove is Singapore's premier maritime address, housing private villa compounds and the Capella estate.",
    heroImage: IMAGES.precincts["Sentosa Cove"].hero,
    detailImage: IMAGES.precincts["Sentosa Cove"].detail,
    foodImage: IMAGES.precincts["Sentosa Cove"].food,
    cultureImage: IMAGES.precincts["Sentosa Cove"].culture,
    cultureEthos:
      "Quiet sovereign retreat where heritage colonial bungalows designed by Lord Norman Foster blend seamlessly with private ocean docks.",
    gastronomySignature:
      "Wood-grilled Mediterranean seafood and champagne at Tanjong Beach, followed by Cantonese private dining at Cassia inside Capella.",
    hiddenGem:
      "The hidden pebble cove of Tanjong Rimau accessible during low tide beneath ancient sea-cliffs and coastal caves.",
    soundscapeVibe: "Gentle Singapore Strait waves lapping against teak yacht hulls at ONE°15 Marina.",
    flightFromSingapore: {
      duration: "25 mins from Changi Hub",
      distanceKm: 28,
      corridor: "East Coast Parkway to Gateway Avenue Sentosa",
    },
    monthlyTemps: [27, 27, 28, 28, 28, 28, 28, 28, 27, 27, 27, 26],
    rainfallMm: [220, 105, 160, 155, 165, 125, 140, 140, 155, 145, 240, 305],
    packagesCount: 14,
  },
  {
    id: "SIN-03",
    name: "Joo Chiat",
    country: "Singapore",
    code: "SIN-JCT",
    coordinates: { lat: 1.3142, lng: 103.903 },
    elevation: "8m heritage plain",
    climateZone: "Equatorial Coastal Plain",
    minBudgetSGD: 1200,
    maxBudgetSGD: 2800,
    avgBudgetSGD: 1750,
    bestSeason: "Morning & Twilight Hours",
    tagline: "Peranakan Pastel Heritage Shophouses & Heirloom Crafts",
    leadParagraph:
      "A protected historic precinct celebrated for pastel-painted two-storey Straits Chinese shophouses, majolica ceramic tiles, and century-old Nonya kitchen secrets.",
    heroImage: IMAGES.precincts["Joo Chiat"].hero,
    detailImage: IMAGES.precincts["Joo Chiat"].detail,
    foodImage: IMAGES.precincts["Joo Chiat"].food,
    cultureImage: IMAGES.precincts["Joo Chiat"].culture,
    cultureEthos:
      "Peranakan maternal reverence and meticulous craft traditions, from glass beadwork slippers to slow-simmered rempah spices.",
    gastronomySignature:
      "Heirloom Ayam Buah Keluak braised with fermented black nuts, fragrant Laksa with claypot sambal, and handcrafted kueh salat.",
    hiddenGem:
      "The private courtyard atelier of Rumah Bebe, where antique silver kerosang brooches and hand-beaded silk shoes are preserved.",
    soundscapeVibe: "Rhythmic stone pestle mortar grinding rempah spices in morning alleyways.",
    flightFromSingapore: {
      duration: "15 mins from Changi Hub",
      distanceKm: 14,
      corridor: "PIE to Still Road Heritage Corridor",
    },
    monthlyTemps: [27, 27, 28, 28, 28, 28, 28, 28, 27, 27, 27, 26],
    rainfallMm: [230, 110, 170, 160, 170, 130, 145, 145, 160, 150, 250, 315],
    packagesCount: 16,
  },
  {
    id: "SIN-04",
    name: "MacRitchie Canopies",
    country: "Singapore",
    code: "SIN-MCR",
    coordinates: { lat: 1.3547, lng: 103.8298 },
    elevation: "85m highland ridge",
    climateZone: "Primary Equatorial Rainforest",
    minBudgetSGD: 1100,
    maxBudgetSGD: 2400,
    avgBudgetSGD: 1600,
    bestSeason: "Early Morning Canopy Mist",
    tagline: "Untouched Primary Rainforest Canopies & TreeTop Suspension",
    leadParagraph:
      "Singapore's ancient green heart: a pristine Dipterocarp rainforest ecosystem harboring flying lemurs, long-tailed macaques, and serene reservoir boardwalks.",
    heroImage: IMAGES.precincts["MacRitchie Canopies"].hero,
    detailImage: IMAGES.precincts["MacRitchie Canopies"].detail,
    foodImage: IMAGES.precincts["MacRitchie Canopies"].food,
    cultureImage: IMAGES.precincts["MacRitchie Canopies"].culture,
    cultureEthos:
      "Uncompromising nature stewardship and conservation foresight dating back to the 1860s reservoir protection treaties.",
    gastronomySignature:
      "Forest trail artisanal picnic with cold-pressed ginger turmeric tonic, organic sourdough, and highland honey.",
    hiddenGem:
      "The 250-meter free-standing suspension bridge suspended 25 meters above the forest floor at 7:00 AM before mist clears.",
    soundscapeVibe: "Hypnotic chorus of forest cicadas and singing drongos beneath giant jelutong trees.",
    flightFromSingapore: {
      duration: "25 mins from Changi Hub",
      distanceKm: 24,
      corridor: "Bartley Flyeroad to Lornie Highway Nature Spine",
    },
    monthlyTemps: [26, 26, 27, 27, 27, 27, 27, 27, 26, 26, 26, 25],
    rainfallMm: [240, 120, 180, 175, 180, 140, 155, 150, 170, 160, 260, 325],
    packagesCount: 10,
  },
  {
    id: "SIN-05",
    name: "Dempsey Hill",
    country: "Singapore",
    code: "SIN-DMP",
    coordinates: { lat: 1.3045, lng: 103.8097 },
    elevation: "35m shaded ridge",
    climateZone: "Botanical Forest Enclave",
    minBudgetSGD: 1950,
    maxBudgetSGD: 3900,
    avgBudgetSGD: 2600,
    bestSeason: "Twilight & Evening Dining",
    tagline: "Colonial Military Barracks Transformed into Haute Gastronomy",
    leadParagraph:
      "Nestled among nutmeg plantations and banyan canopies, Dempsey Hill combines conserved 19th-century British army barracks with world-class dining and design galleries.",
    heroImage: IMAGES.precincts["Dempsey Hill"].hero,
    detailImage: IMAGES.precincts["Dempsey Hill"].detail,
    foodImage: IMAGES.precincts["Dempsey Hill"].food,
    cultureImage: IMAGES.precincts["Dempsey Hill"].culture,
    cultureEthos:
      "Adaptive architectural reuse honoring colonial timber trusses while fostering boundary-pushing epicurean creativity.",
    gastronomySignature:
      "One-Michelin-starred Candlenut modern Peranakan, wood-smoked meats at Burnt Ends cellar, and fine teas at PS.Cafe Harding.",
    hiddenGem:
      "Dover Street Market Singapore housed in a lofty former military barrack with avant-garde fashion and Comme des Garçons archives.",
    soundscapeVibe: "Evening rain dripping through massive tropical banyan tree canopies during terrace dinners.",
    flightFromSingapore: {
      duration: "28 mins from Changi Hub",
      distanceKm: 26,
      corridor: "PIE to Holland Road Botanical Gateway",
    },
    monthlyTemps: [27, 27, 28, 28, 28, 28, 28, 28, 27, 27, 27, 26],
    rainfallMm: [230, 115, 175, 165, 170, 135, 145, 145, 160, 150, 250, 315],
    packagesCount: 11,
  },
  {
    id: "SIN-06",
    name: "Gardens by the Bay",
    country: "Singapore",
    code: "SIN-GBTB",
    coordinates: { lat: 1.2816, lng: 103.8636 },
    elevation: "4m coastal garden",
    climateZone: "Biophilic Microclimate Wonder",
    minBudgetSGD: 1600,
    maxBudgetSGD: 3600,
    avgBudgetSGD: 2300,
    bestSeason: "Evening Garden Rhapsody",
    tagline: "Futuristic Supertree Conservatories & Cloud Mountain Waterfall",
    leadParagraph:
      "A 101-hectare horticultural marvel featuring the climate-controlled Cloud Forest with a 35-meter indoor waterfall mountain, and twelve towering vertical plant supertrees.",
    heroImage: IMAGES.precincts["Gardens by the Bay"].hero,
    detailImage: IMAGES.precincts["Gardens by the Bay"].detail,
    foodImage: IMAGES.precincts["Gardens by the Bay"].food,
    cultureImage: IMAGES.precincts["Gardens by the Bay"].culture,
    cultureEthos:
      "The pinnacle of biophilic civic philosophy: proving that the modern city can exist within nature rather than replacing it.",
    gastronomySignature:
      "Modern Asian fine dining at Marguerite inside the Flower Dome, surrounded by Mediterranean olive trees and orchids.",
    hiddenGem:
      "The secluded upper mist canopy walk of Cloud Forest at 9:00 AM as hydraulic vaporizers create high-altitude cloud mountain air.",
    soundscapeVibe: "Resonant mist waterfall roar echoing inside glass conservatory domes.",
    flightFromSingapore: {
      duration: "18 mins from Changi Hub",
      distanceKm: 20,
      corridor: "ECP directly to Marina Gardens Drive",
    },
    monthlyTemps: [27, 27, 28, 28, 28, 28, 28, 28, 27, 27, 27, 26],
    rainfallMm: [235, 112, 174, 166, 171, 130, 150, 147, 163, 153, 252, 318],
    packagesCount: 15,
  },
  {
    id: "SIN-07",
    name: "Kampong Glam",
    country: "Singapore",
    code: "SIN-KGL",
    coordinates: { lat: 1.3023, lng: 103.8589 },
    elevation: "6m heritage quarter",
    climateZone: "Historic Urban Quarter",
    minBudgetSGD: 1300,
    maxBudgetSGD: 2700,
    avgBudgetSGD: 1800,
    bestSeason: "Sunset Calls & Evening Bazaars",
    tagline: "Gilded Sultan Mosque Domes, Artisanal Attars & Textile Alleys",
    leadParagraph:
      "The historic royal Malay seat centered around the golden-domed Sultan Mosque, flanked by historic textile merchants on Arab Street and artisanal perfumeries.",
    heroImage: IMAGES.precincts["Kampong Glam"].hero,
    detailImage: IMAGES.precincts["Kampong Glam"].detail,
    foodImage: IMAGES.precincts["Kampong Glam"].food,
    cultureImage: IMAGES.precincts["Kampong Glam"].culture,
    cultureEthos:
      "Maritime Malay and Arabian spice trade hospitality preserved across generations of bespoke perfumers and carpet weavers.",
    gastronomySignature:
      "Fragrant Nasi Padang with beef rendang at century-old Warong Nasi Pariaman, followed by Turkish mint tea and baklava on Bussorah Street.",
    hiddenGem:
      "Jamal Kazura Aromatics on Arab Street, crafting bespoke non-alcoholic pure oil attars in custom blown glass bottles since 1933.",
    soundscapeVibe: "Evening adhan melody floating gently above palm-lined Bussorah pedestrian lane.",
    flightFromSingapore: {
      duration: "20 mins from Changi Hub",
      distanceKm: 19,
      corridor: "ECP to Rochor Road Historic Precinct",
    },
    monthlyTemps: [27, 27, 28, 28, 28, 28, 28, 28, 27, 27, 27, 26],
    rainfallMm: [230, 112, 174, 166, 171, 130, 150, 147, 163, 153, 252, 318],
    packagesCount: 9,
  },
  {
    id: "SIN-08",
    name: "Tiong Bahru",
    country: "Singapore",
    code: "SIN-TBR",
    coordinates: { lat: 1.2858, lng: 103.8322 },
    elevation: "14m residential hill",
    climateZone: "Art Deco Architectural Quarter",
    minBudgetSGD: 1400,
    maxBudgetSGD: 2900,
    avgBudgetSGD: 1900,
    bestSeason: "Morning Coffee & Quiet Strolls",
    tagline: "Streamline Moderne 1930s Art Deco & Independent Literary Salons",
    leadParagraph:
      "Singapore's oldest public housing estate turned into an enclave of Streamline Moderne curved architecture, spiral outdoor staircases, and artisan bakeries.",
    heroImage: IMAGES.precincts["Tiong Bahru"].hero,
    detailImage: IMAGES.precincts["Tiong Bahru"].detail,
    foodImage: IMAGES.precincts["Tiong Bahru"].food,
    cultureImage: IMAGES.precincts["Tiong Bahru"].culture,
    cultureEthos:
      "Neighborhood bohemian intimacy and architectural conservation, celebrating curved nautical balconies and pre-war air-raid shelters.",
    gastronomySignature:
      "Traditional chwee kueh steamed rice cakes at Tiong Bahru Market, followed by naturally fermented sourdough pastries at Tiong Bahru Bakery.",
    hiddenGem:
      "The quiet poetry corner of BooksActually and artisanal ceramic studios tucked in the rear lanes of Yong Siak Street.",
    soundscapeVibe: "Singing caged songbirds in the morning quietness of retro corner coffee houses.",
    flightFromSingapore: {
      duration: "24 mins from Changi Hub",
      distanceKm: 23,
      corridor: "AYE to Lower Delta Heritage Road",
    },
    monthlyTemps: [27, 27, 28, 28, 28, 28, 28, 28, 27, 27, 27, 26],
    rainfallMm: [230, 110, 170, 165, 170, 130, 145, 145, 160, 150, 250, 315],
    packagesCount: 11,
  },
  {
    id: "SIN-09",
    name: "Mandai Nature Reserve",
    country: "Singapore",
    code: "SIN-MND",
    coordinates: { lat: 1.4043, lng: 103.793 },
    elevation: "42m reservoir forest",
    climateZone: "Secondary & Primary Rainforest",
    minBudgetSGD: 1500,
    maxBudgetSGD: 3100,
    avgBudgetSGD: 2100,
    bestSeason: "Dusk Nocturnal Expeditions",
    tagline: "World-Class Wildlife Sanctuaries & Forest Eco-Resorts",
    leadParagraph:
      "An integrated global ecological haven overlooking the Upper Seletar Reservoir, home to the Singapore Zoo, Night Safari, and rainforest wildlife parks.",
    heroImage: IMAGES.precincts["Mandai Nature Reserve"].hero,
    detailImage: IMAGES.precincts["Mandai Nature Reserve"].detail,
    foodImage: IMAGES.precincts["Mandai Nature Reserve"].food,
    cultureImage: IMAGES.precincts["Mandai Nature Reserve"].culture,
    cultureEthos:
      "World-leading wildlife conservation ethics, open-moated habitats, and nocturnal behavioral scientific research.",
    gastronomySignature:
      "Gourmet twilight safari tram dining with sustainable farmed barramundi and tropical rainforest herb elixirs.",
    hiddenGem:
      "The tranquil boardwalk of Upper Seletar Reservoir at 6:30 AM overlooking the iconic lone Casuarina tree reflected on glass water.",
    soundscapeVibe: "Nocturnal chorus of crickets, owl calls, and distant water splashes across calm reservoir waters.",
    flightFromSingapore: {
      duration: "30 mins from Changi Hub",
      distanceKm: 31,
      corridor: "SLE directly to Mandai Lake Road",
    },
    monthlyTemps: [26, 26, 27, 27, 27, 27, 27, 27, 26, 26, 26, 25],
    rainfallMm: [240, 120, 180, 175, 180, 140, 155, 150, 170, 160, 260, 325],
    packagesCount: 8,
  },
  {
    id: "SIN-10",
    name: "Pulau Ubin & Changi",
    country: "Singapore",
    code: "SIN-UBN",
    coordinates: { lat: 1.4116, lng: 103.9632 },
    elevation: "18m coastal granite island",
    climateZone: "Straits Mangrove & Coastal Island",
    minBudgetSGD: 1200,
    maxBudgetSGD: 2600,
    avgBudgetSGD: 1650,
    bestSeason: "Morning Biking & Chek Jawa Low Tide",
    tagline: "1960s Rural Kampong Tranquility & Coastal Mangrove Boardwalks",
    leadParagraph:
      "Singapore's living time capsule: a tranquil island in the Johor Strait where wooden village houses, granite quarries, and Chek Jawa coastal wetlands remain untouched.",
    heroImage: IMAGES.precincts["Pulau Ubin & Changi"].hero,
    detailImage: IMAGES.precincts["Pulau Ubin & Changi"].detail,
    foodImage: IMAGES.precincts["Pulau Ubin & Changi"].food,
    cultureImage: IMAGES.precincts["Pulau Ubin & Changi"].culture,
    cultureEthos:
      "Simplicity, gotong royong communal warmth, and living preservation of Singapore's early coastal seafaring kampong history.",
    gastronomySignature:
      "Freshly caught chili mud crab with mantou buns at seaside jetty restaurants, followed by young coconut water straight from the husk.",
    hiddenGem:
      "The coastal viewing jetty of Chek Jawa wetlands at dawn, observing rare carpet anemones and fiddler crabs in crystal tide pools.",
    soundscapeVibe: "Gentle wooden bumboat diesel rhythm chugging across the calm Johor Strait waters.",
    flightFromSingapore: {
      duration: "10 mins from Changi Hub",
      distanceKm: 12,
      corridor: "Changi Village Jetty private boat tender to Ubin",
    },
    monthlyTemps: [27, 27, 28, 28, 28, 28, 28, 28, 27, 27, 27, 26],
    rainfallMm: [235, 110, 170, 165, 170, 130, 145, 145, 160, 150, 250, 315],
    packagesCount: 9,
  },
];

export const enrichedDestinations = SINGAPORE_PRECINCTS;
export const uniqueDestinationNames = SINGAPORE_PRECINCTS.map((p) => p.name);

export const singaporePackages = dataset.travelPackages.map((p, idx) => {
  const precinct = SINGAPORE_PRECINCTS[idx % SINGAPORE_PRECINCTS.length].name;
  return {
    ...p,
    title: `${precinct} Expedition ${idx + 1}`,
  };
});

// 6 Distinguished Singapore Field Curators
export const travelExperts: TravelExpert[] = [
  {
    id: "EXP-01",
    name: "Jonathan Lim",
    role: "Chief Singapore Expedition Architect",
    fieldTitle: "Architectural & Urban Conservation Specialist",
    yearsExperience: 18,
    specialization: "Civic District Heritage, Norman Foster Restorations, and Sentosa Private Estates",
    destinationsCovered: ["Marina Bay", "Sentosa Cove", "Dempsey Hill"],
    travelPhilosophy:
      "True luxury in Singapore is not merely five-star amenities; it is experiencing how a modern global metropolis can embrace living nature and protected heritage.",
    fieldStory:
      "With nearly two decades directing private architectural charters for dignitaries, Jonathan curates access to heritage government bungalows, private superyacht slips, and off-hours museum vaults.",
    portraitImage: IMAGES.experts[0].portrait,
    credentials: [
      "Singapore Heritage Society Honorary Fellow",
      "Straits Architectural Trust Member",
      "Official Changi VIP Delegation Protocol Host",
    ],
    signatureRoute: "Fullerton Pier to Capella Private Villa Architecture Corridor",
    currentStation: "Atlas Journey Singapore Headquarters, Marina Bay",
  },
  {
    id: "EXP-02",
    name: "Dr. Cheryl Tan",
    role: "Peranakan Heritage & Straits Historian",
    fieldTitle: "Straits Chinese Intangible Heritage Anthropologist",
    yearsExperience: 14,
    specialization: "Joo Chiat Shophouse Restorations, Heirloom Majolica Tiles, and Nonya Recipes",
    destinationsCovered: ["Joo Chiat", "Katong", "Kampong Glam"],
    travelPhilosophy:
      "Every tile and carved teak beam in Katong tells of maritime merchants who crossed the South China Sea. To understand Singapore, one must taste its heirloom rempah.",
    fieldStory:
      "Educated in cultural anthropology, Dr. Tan connects guests directly with fourth-generation Peranakan families for private home teas, beaded slipper ateliers, and family recipe banquets.",
    portraitImage: IMAGES.experts[1].portrait,
    credentials: [
      "PhD Southeast Asian Studies (NUS)",
      "UNESCO Heritage Contributor for Singapore Hawkers",
      "Author of 'Straits Splendor: The Shophouse Narrative'",
    ],
    signatureRoute: "Koon Seng Shophouse Walk & Private Nonya Kitchen Masterclass",
    currentStation: "Joo Chiat Cultural Bureau, Singapore",
  },
  {
    id: "EXP-03",
    name: "Farhan Abdullah",
    role: "Maritime & Yachting Director",
    fieldTitle: "Singapore Strait Navigation & Private Marine Concierge",
    yearsExperience: 12,
    specialization: "Southern Islands Charters, ONE°15 Marina Berth Management, and Secluded Bays",
    destinationsCovered: ["Sentosa Cove", "Pulau Ubin & Changi", "Marina Bay"],
    travelPhilosophy:
      "Viewed from the ocean at twilight, the Singapore skyline takes on an entirely different majesty. The water is where the city breathes.",
    fieldStory:
      "A seasoned yacht captain and marine naturalist, Farhan commands private catamaran voyages to Lazarus Island, St. John's, and the secluded mangrove channels of Pulau Ubin.",
    portraitImage: IMAGES.experts[2].portrait,
    credentials: [
      "Master Marine Yachting License (MPA Singapore)",
      "Southern Islands Marine Ecology Consultant",
      "Singapore Yachting Association Advisor",
    ],
    signatureRoute: "Sentosa Cove to Lazarus Lagoon Private Sunset Anchorage",
    currentStation: "ONE°15 Marina Club, Sentosa Cove",
  },
  {
    id: "EXP-04",
    name: "Vivienne Ng",
    role: "Biophilic Botanist & Canopy Curator",
    fieldTitle: "Equatorial Rainforest Conservationist",
    yearsExperience: 11,
    specialization: "Primary Dipterocarp Forests, TreeTop Canopy Expeditions, and Orchids",
    destinationsCovered: ["MacRitchie Canopies", "Gardens by the Bay", "Mandai Nature Reserve"],
    travelPhilosophy:
      "When you walk beneath 150-year-old rainforest trees in the heart of Singapore, you understand the rare harmony between biological preservation and civic excellence.",
    fieldStory:
      "Formerly a researcher at Singapore Botanic Gardens, Vivienne guides early-morning botanical walks unlocking native medicinal plants, rare orchid hybrids, and flying lemur sanctuaries.",
    portraitImage: IMAGES.experts[3].portrait,
    credentials: [
      "Singapore Botanic Gardens Honorary Fellow",
      "Certified Rainforest Wilderness Guide",
      "National Parks Flora Inventory Contributor",
    ],
    signatureRoute: "MacRitchie Reservoir TreeTop Walk & Cloud Forest Canopy Study",
    currentStation: "Bukit Timah Field Sanctuary, Singapore",
  },
  {
    id: "EXP-05",
    name: "Chef Marcus Wei",
    role: "Epicurean & Michelin Scout",
    fieldTitle: "Singapore Gastronomic Historian & Counter Scout",
    yearsExperience: 20,
    specialization: "Three-Star Michelin Tables, Private Dining Clubs, and Heritage Hawker Roots",
    destinationsCovered: ["Dempsey Hill", "Marina Bay", "Tiong Bahru"],
    travelPhilosophy:
      "In Singapore, food is not merely nourishment; it is our national dialogue. The highest culinary art and the humblest charcoal grill both command absolute devotion.",
    fieldStory:
      "Having spent two decades evaluating Asia's finest restaurants, Chef Wei secures reservations at four-seat private dining rooms and curates bespoke tasting itineraries.",
    portraitImage: IMAGES.experts[4].portrait,
    credentials: [
      "Former International Culinary Judge",
      "Gastronomic Heritage Trust Trustee",
      "Author of 'From Claypot to Caviar: The Singapore Table'",
    ],
    signatureRoute: "Dempsey Barracks Wine Cellars to Secret Keong Saik Counters",
    currentStation: "Dempsey Hill Concierge Pavilion, Singapore",
  },
  {
    id: "EXP-06",
    name: "Rachel Koh",
    role: "Private Family Concierge Director",
    fieldTitle: "Multi-Generational Luxury Logistics Specialist",
    yearsExperience: 15,
    specialization: "VIP Family Itineraries, Mandai Wildlife Privileges, and Accessible Luxury",
    destinationsCovered: ["Sentosa Cove", "Gardens by the Bay", "Mandai Nature Reserve"],
    travelPhilosophy:
      "A family journey succeeds when grandparents, parents, and children all experience equal delight and total ease.",
    fieldStory:
      "Rachel coordinates private after-hours access at the Night Safari, bespoke family yacht charters, and interconnecting luxury villas with dedicated personal butlers.",
    portraitImage: IMAGES.experts[5].portrait,
    credentials: [
      "Certified Luxury Travel Specialist (Virtuoso)",
      "Pediatric Travel Logistics Certified",
      "Changi Airport VIP Reception Alumna",
    ],
    signatureRoute: "Gardens by the Bay Supertree Walk to Mandai Night Safari VIP Expedition",
    currentStation: "Atlas Journey Singapore Client Headquarters",
  },
];

// Enriched Travel Journals from Raw Reviews Dataset (Mapped to Singapore Journeys)
export const enrichedJournals: EnrichedJournal[] = dataset.reviews.slice(0, 10).map((r, i) => {
  const archetypes = [
    {
      archetype: "The Architectural Connoisseur",
      route: "Changi Hub • Marina Bay • Fullerton Heritage (5 Days)",
      impetus: "Needed an inspiringDetour from executive finance to explore Singapore's visionary urban design.",
      journey:
        "Arrived at Changi Terminal 3 and transferred smoothly to The Fullerton Bay Hotel. Spent evenings walking the Marina basin under the skyline glow.",
      discovery:
        "A private sunset tour of the National Gallery rotunda followed by dinner overlooking the illuminated Marina Bay Sands.",
      outcome:
        "Returned with renewed clarity and deep appreciation for Singapore's master planning. Every detail was executed with total precision.",
      stamp: "SIN-CHANGI-VIP",
      dateStr: "14 OCT 2025",
    },
    {
      archetype: "The Heritage & Culinary Seeker",
      route: "Joo Chiat • Katong • Dempsey Hill (6 Days)",
      impetus: "Fascinated by Peranakan culture and world-renowned Straits cuisine.",
      journey:
        "Wandered the pastel shophouse streets of Joo Chiat and dined at Candlenut and Burnt Ends in Dempsey Hill.",
      discovery:
        "An intimate private session with an 84-year-old Nonya ceramic artisan who explained the symbolism in heirloom majolica tiles.",
      outcome:
        "An unforgettable cultural immersion that bypassed all tourist cliches. The concierge's dining recommendations were exceptional.",
      stamp: "SIN-JOOCHIAT-PASS",
      dateStr: "02 NOV 2025",
    },
    {
      archetype: "The Island Sanctuary Voyager",
      route: "Sentosa Cove • Capella • Southern Islands (7 Days)",
      impetus: "Sought pure rest, ocean breezes, and restorative luxury without leaving Singapore.",
      journey:
        "Checked into a private heritage manor at Capella Sentosa. Took a private yacht cruise to Lazarus Island and the Southern reefs.",
      discovery:
        "Waking at dawn to peacock calls on the Capella lawn with the Singapore Strait shining like brushed silk.",
      outcome:
        "Total mental reset. Atlas Journey demonstrated that Singapore possesses world-class island sanctuaries of the highest order.",
      stamp: "SIN-SENTOSA-CLR",
      dateStr: "19 DEC 2025",
    },
    {
      archetype: "The Biophilic Rainforest Explorer",
      route: "MacRitchie • Bukit Timah • Gardens by the Bay (5 Days)",
      impetus: "Drawn by Singapore's reputation as a City in Nature and its equatorial biodiversity.",
      journey:
        "Ascended the TreeTop walk suspension bridge at 7:00 AM before mist lifted, then explored the Cloud Forest mountain conservatory.",
      discovery:
        "Observing a family of rare colugos gliding silently between giant dipterocarp trees right within city limits.",
      outcome:
        "A deeply moving reminder of what human civilization can achieve when ecology is treated with utmost reverence.",
      stamp: "SIN-BIOPHILIC-ENTRY",
      dateStr: "11 JAN 2026",
    },
    {
      archetype: "The Night Market & Cocktail Enthusiast",
      route: "Kampong Glam • Tiong Bahru • Keong Saik (6 Days)",
      impetus: "Exploring Singapore's nocturnal energy, speakeasy cocktail scene, and heritage food stalls.",
      journey:
        "Navigated the historic alleys of Kampong Glam by dusk, followed by bespoke cocktail tastings at Atlas Bar and Manhattan.",
      discovery:
        "Sampling artisanal claypot laksa and watching master craftsmen blend pure botanical oils on Arab Street.",
      outcome:
        "Six days of sensory magic without a single friction. Atlas Journey is truly the premier operating system for Singapore.",
      stamp: "SIN-NIGHT-REGISTRY",
      dateStr: "28 JAN 2026",
    },
  ];

  const assigned = archetypes[i % archetypes.length];
  const travelerPhoto = IMAGES.travelers[i % IMAGES.travelers.length];

  return {
    id: `JRN-${i + 1}`,
    customer: r.customer,
    rating: r.rating,
    baseComment: r.comment,
    travelerArchetype: assigned.archetype,
    routeTaken: assigned.route,
    impetus: assigned.impetus,
    journey: assigned.journey,
    discovery: assigned.discovery,
    outcome: assigned.outcome,
    passportStamp: assigned.stamp,
    dateStr: assigned.dateStr,
    travelerPortrait: travelerPhoto.portrait,
    locationPhoto: travelerPhoto.location,
  };
});

// Singapore Prestige & Cultural Festival Tapestry
export const festivals: FestivalEvent[] = [
  {
    id: "FEST-01",
    title: "Mid-Autumn Lantern Festival",
    destination: "Gardens by the Bay & Chinatown",
    country: "Singapore",
    month: "September – October",
    dateRange: "Sep 15 – Oct 02",
    season: "Autumn Moon",
    culturalLore:
      "A celebration of familial unity and thanksgiving dating back thousands of years. Tens of thousands of floating silk lanterns transform Gardens by the Bay into an illuminated wonderland.",
    sensoryHighlights: [
      "Luminous floating lanterns mirrored on Dragonfly Lake",
      "Traditional snowskin mooncakes infused with bird's nest and champagne truffles",
      "Chinese orchestral performances beneath illuminated Supertrees",
    ],
    insiderTip:
      "Atlas guests receive private access to the Supertree Observatory deck during the illuminated garden rhapsody showcase.",
    image: IMAGES.festivals.midAutumn,
  },
  {
    id: "FEST-02",
    title: "Singapore Grand Prix Night Race",
    destination: "Marina Bay Street Circuit",
    country: "Singapore",
    month: "September",
    dateRange: "Sep 20 – Sep 22",
    season: "Late Summer",
    culturalLore:
      "The world's original and most glamorous Formula 1 night race. Supercars roar along the illuminated waterfront against the backdrop of Marina Bay Sands and the historic Civic District.",
    sensoryHighlights: [
      "V10 engine reverberations echoing through colonial architectural street canyons",
      "Chilled champagne receptions at the Formula 1 Paddock Club",
      "Midnight fireworks cascading across Marina Bay basin",
    ],
    insiderTip:
      "Reserve private hospitality suites on the Turn 1 terrace with direct helicopter transfer to Seletar or Changi.",
    image: IMAGES.festivals.f1GrandPrix,
  },
  {
    id: "FEST-03",
    title: "Hari Raya Light Festival",
    destination: "Geylang Serai & Kampong Glam",
    country: "Singapore",
    month: "April",
    dateRange: "Apr 01 – Apr 18",
    season: "Spring",
    culturalLore:
      "Celebrating the culmination of Ramadan with five kilometers of golden crescent light arches, traditional Malay textiles, and familial reconciliation.",
    sensoryHighlights: [
      "Kaleidoscopic light arches illuminating Sims Avenue and Geylang Serai",
      "Charcoal-grilled lemongrass satay and slow-cooked beef rendang aromas",
      "Vibrant silk baju kurung attires worn by celebrating families",
    ],
    insiderTip:
      "Enjoy private rooftop viewing of the Sultan Mosque minarets at sunset as the evening call to prayer echoes across historic Kampong Glam.",
    image: IMAGES.festivals.hariRaya,
  },
  {
    id: "FEST-04",
    title: "Singapore Art Week",
    destination: "Civic District & Gillman Barracks",
    country: "Singapore",
    month: "January",
    dateRange: "Jan 19 – Jan 28",
    season: "Winter Arts",
    culturalLore:
      "Southeast Asia's premier visual arts festival. Over 150 exhibitions, monumental outdoor installations, and gallery galas across colonial barracks and contemporary museums.",
    sensoryHighlights: [
      "Monumental light sculptures illuminating the National Gallery facade",
      "Private champagne viewings at ART SG at Marina Bay Sands",
      "Atmospheric evening gallery walks through lush Gillman Barracks",
    ],
    insiderTip:
      "Atlas arranges private curator-guided walkthroughs with prominent Southeast Asian modern artists.",
    image: IMAGES.festivals.artWeek,
  },
  {
    id: "FEST-05",
    title: "Singapore Food Festival",
    destination: "Dempsey Hill & Bayfront",
    country: "Singapore",
    month: "August – September",
    dateRange: "Aug 24 – Sep 11",
    season: "Epicurean Season",
    culturalLore:
      "A tribute to Singapore's status as the culinary capital of Asia. Uniting master hawkers with three-star Michelin chefs for collaborative pop-up banquets.",
    sensoryHighlights: [
      "Sizzling wok hei aromatics across heritage open grills",
      "Four-hands collaborative dinners pairing street recipes with rare French vintages",
      "Artisanal dessert pavilions showcasing pandan, coconut, and gula melaka",
    ],
    insiderTip:
      "Book the exclusive Chef's Table marquee with front-row views of master wok fire techniques.",
    image: IMAGES.festivals.foodFestival,
  },
  {
    id: "FEST-06",
    title: "River Hongbao & Lunar New Year",
    destination: "Marina Bay Waterfront",
    country: "Singapore",
    month: "January – February",
    dateRange: "Jan 28 – Feb 08",
    season: "Spring Festival",
    culturalLore:
      "The grandest Lunar New Year celebration in Southeast Asia. Monumental lanterns depicting celestial deities float on Marina Bay with nightly dragon dances and pyrotechnics.",
    sensoryHighlights: [
      "Gigantic illuminated God of Fortune floating on the bay waters",
      "Resonant thunder drums and acrobatics during high-pole lion dances",
      "Nightly fireworks mirrored on the Marina Bay Sands glass facade",
    ],
    insiderTip:
      "Watch the midnight pyrotechnics from a private chartered wooden riverboat moored directly beneath the display.",
    image: IMAGES.festivals.lunarNewYear,
  },
];

// Singapore Immigration & Fast-Track Entry Center (Replacing Visa Guide)
export const singaporeEntryProtocols = [
  {
    originRegion: "ASEAN Member Nations",
    entryType: "Visa-Free Diplomatic Corridor",
    processingDays: 0,
    feeSGD: 0,
    validity: "Up to 30 Days Free Entry",
    requirements: [
      "Biometric passport valid for 6 months",
      "Online SG Arrival Card (SGAC) submitted within 3 days",
      "Automated biometric clearance via Iris & Facial e-Gates at Changi",
    ],
    notes: "Instant clearance through Changi Automated Clearance System (ACI).",
  },
  {
    originRegion: "Greater China & Taiwan",
    entryType: "Mutual 30-Day Visa Exemption",
    processingDays: 1,
    feeSGD: 0,
    validity: "Up to 30 Days Tourism & Business",
    requirements: [
      "Valid national passport with minimum 6 months validity",
      "Electronic SGAC health & arrival declaration",
      "Confirmed onward or return flight itinerary",
    ],
    notes: "Mutual 30-day visa exemption effective 2024 for Singapore entry.",
  },
  {
    originRegion: "United States, UK & European Union",
    entryType: "90-Day Visa Exemption Fast-Track",
    processingDays: 0,
    feeSGD: 0,
    validity: "Up to 90 Days Leisure & Commerce",
    requirements: [
      "Biometric ICAO standard passport",
      "Electronic SG Arrival Card clearance",
      "No paper arrival disembarkation card required",
    ],
    notes: "Direct lane at all Changi terminals with zero immigration queue.",
  },
  {
    originRegion: "Australia, New Zealand & Japan",
    entryType: "Automated Clearance Initiative (ACI)",
    processingDays: 0,
    feeSGD: 0,
    validity: "Up to 90 Days Verified",
    requirements: [
      "Eligible for automated biometric passport gates on first entry",
      "Pre-submitted digital SGAC declaration",
      "Electronic pass emailed directly upon gate passage",
    ],
    notes: "Complete paperless border passage in under 15 seconds.",
  },
  {
    originRegion: "Gulf States & Middle East (UAE, Qatar, Saudi)",
    entryType: "Visa-Free or Rapid eVisa Corridor",
    processingDays: 2,
    feeSGD: 30,
    validity: "30 to 90 Days Authorized",
    requirements: [
      "Diplomatic or standard passport valid for 6 months",
      "ICA eVisa portal verification or visa-free entry",
      "Confirmed 5-star hotel voucher in Singapore",
    ],
    notes: "Dedicated Changi JetQuay CIP terminal handover for VIP delegations.",
  },
];

// Curated Singapore Establishments (150 Local Recommendations mapped to authentic Singapore icons)
export const enrichedRecommendations = dataset.localRecommendations.map((rec, index) => {
  const singaporeSpots: Record<
    string,
    { title: string; tag: string; neighborhood: string; verdict: string; price: string }
  > = {
    Food: {
      title: "Odette at National Gallery",
      tag: "Three Michelin Stars",
      neighborhood: "Civic District",
      verdict: "Chef Julien Royer creates sublime modern French poetry inside neoclassical museum columns.",
      price: "$$$$",
    },
    Attraction: {
      title: "Cloud Forest Mountain Waterfall",
      tag: "Biophilic Marvel",
      neighborhood: "Gardens by the Bay",
      verdict: "A 35-meter indoor mist waterfall clothed in 72,000 rare tropical orchids and pitcher plants.",
      price: "$$",
    },
    Shopping: {
      title: "Dover Street Market Dempsey",
      tag: "Haute Avant-Garde",
      neighborhood: "Dempsey Hill",
      verdict: "Conserved British army barracks housing Comme des Garçons collections, rare monographs, and jewelry.",
      price: "$$$$",
    },
    Nightlife: {
      title: "Atlas Bar — The Gilded Tower",
      tag: "World's Best Bar Icon",
      neighborhood: "Bugis & Rochor",
      verdict: "Art Deco glamour featuring a 15-meter gilded tower housing over 1,000 rare vintage gins.",
      price: "$$$$",
    },
  };

  const specificSpots = [
    { title: "Burnt Ends Wood-Fired Counter", tag: "One Michelin Star", neighborhood: "Dempsey Hill", verdict: "Dave Pynt's custom dual-cavity brick kiln smoking exceptional Australian meats over applewood.", price: "$$$$" },
    { title: "Candlenut Peranakan Heritage", tag: "One Michelin Star", neighborhood: "Dempsey Hill", verdict: "Chef Malcolm Lee elevates ancestral Nonya cooking with contemporary finesse.", price: "$$$" },
    { title: "National Gallery Singapore", tag: "Cultural Monolith", neighborhood: "Civic District", verdict: "Former City Hall and Supreme Court joined by a breathtaking filigree golden canopy.", price: "$$" },
    { title: "Rumah Bebe Heritage Shophouse", tag: "Peranakan Atelier", neighborhood: "Joo Chiat", verdict: "A living museum of handmade beadwork shoes, Nonya porcelain, and traditional sarong kebayas.", price: "$$$" },
    { title: "Manhattan at Regent Singapore", tag: "World's 50 Best Bars", neighborhood: "Cuscaden Road", verdict: "A glamorous homage to 19th-century New York cocktail culture with an in-house rickhouse.", price: "$$$$" },
    { title: "Labyrinth — Modern Singaporean", tag: "One Michelin Star", neighborhood: "Esplanade Mall", verdict: "Chef Han Li Guang deconstructs chili crab and local street heritage with technical brilliance.", price: "$$$$" },
    { title: "Jamal Kazura Aromatics", tag: "Founded 1933", neighborhood: "Kampong Glam", verdict: "Bespoke non-alcoholic attars blended by third-generation perfumers on historic Arab Street.", price: "$$$" },
    { title: "Tiong Bahru Streamline Moderne", tag: "Art Deco Architecture", neighborhood: "Tiong Bahru", verdict: "Historic 1930s residential blocks with curved nautical balconies and spiral outdoor stairs.", price: "$" },
    { title: "Supertree Observatory Deck", tag: "High Altitude Garden", neighborhood: "Gardens by the Bay", verdict: "Fifty meters in the air with panoramic vistas of the Singapore Strait and Marina Bay skyline.", price: "$$" },
    { title: "ONE°15 Marina Sentosa Cove", tag: "Superyacht Anchorage", neighborhood: "Sentosa Island", verdict: "Singapore's premier private yacht club with waterfront dining and bespoke sea charters.", price: "$$$$" },
  ];

  const spot = specificSpots[index % specificSpots.length];
  const catImage =
    rec.category === "Food"
      ? IMAGES.recommendations.food
      : rec.category === "Shopping"
      ? IMAGES.recommendations.shopping
      : rec.category === "Nightlife"
      ? IMAGES.recommendations.nightlife
      : IMAGES.recommendations.attraction;

  return {
    id: `REC-${index + 1}`,
    rawName: rec.name,
    curatedTitle: spot.title,
    destination: "Singapore",
    category: rec.category,
    tag: spot.tag,
    neighborhood: spot.neighborhood,
    curatorVerdict: spot.verdict,
    priceTier: spot.price,
    rating: (4.8 + (index % 3) * 0.1).toFixed(1),
    image: catImage,
  };
});

// Executive Transfers & Marine Fleets
export const airportTransfers = [
  {
    id: "TR-01",
    name: "Mercedes-Maybach S-Class",
    category: "Presidential Saloon",
    capacity: "2 Guests • 3 Bags",
    features: [
      "Chilled Silver Bar & Champagne Flutes",
      "Executive Rear Reclining Seats with Hot Stone Massage",
      "Burmester 4D High-End Acoustic Sanctuary",
      "Changi Terminal 1-4 Tarmac Fast-Track Connection",
    ],
    idealFor: "Discreet executive arrivals and diplomatic transitions",
    hourlyRateSGD: 280,
    image: IMAGES.transfers.mercedesMaybach,
  },
  {
    id: "TR-02",
    name: "Lexus LM Luxury Royal Lounge MPV",
    category: "First-Class Mobile Suite",
    capacity: "4 Guests • 5 Bags",
    features: [
      "48-Inch Ultrawide Privacy Glass Partition",
      "Airline-Grade Zero-Gravity Ottoman Recliners",
      "Mark Levinson 3D Audio Sanctuary",
      "Dedicated High-Speed Satellite Uplink",
    ],
    idealFor: "Family clans & multi-generational luxury voyages",
    hourlyRateSGD: 240,
    image: IMAGES.transfers.lexusLM,
  },
  {
    id: "TR-03",
    name: "Private Marine Tender & Catamaran",
    category: "Oceanic Yacht Transit",
    capacity: "8 Guests • Full Luggage",
    features: [
      "Twin Low-Emission High-Output Marine Engines",
      "Sunken Teak Sunbathing Saloon with Air-Conditioned Cabin",
      "Direct Sentosa Cove & Marina Bay Mooring Access",
      "Private Butler & Tropical Welcome Elixirs",
    ],
    idealFor: "Sentosa Cove arrivals, Lazarus Island, & Marina Bay water transfers",
    hourlyRateSGD: 450,
    image: IMAGES.transfers.yachtTender,
  },
];

// Travel Insurance & Crisis Protocols
export const insuranceTiers = [
  {
    id: "INS-01",
    title: "Voyage Sentinel",
    tier: "Essential Protection",
    coverageSGD: "$500,000 SGD",
    medicalEvacuation: "Singapore Parkway Hospitals Priority Admission",
    flightDisruption: "Up to $3,500 SGD per incident",
    luxuryGear: "Up to $5,000 SGD camera & electronics",
    sosProtocol: "24/7 Singapore Crisis Operations Desk",
    monthlyAddOnSGD: 48,
    highlight: false,
  },
  {
    id: "INS-02",
    title: "Atlas Sovereign Shield",
    tier: "Signature Comprehensive",
    coverageSGD: "$1,500,000 SGD",
    medicalEvacuation: "Mount Elizabeth & Gleneagles VIP Suite Guarantee",
    flightDisruption: "Instant Concierge Rebooking on Any Airline + 5-Star Hotel",
    luxuryGear: "Up to $15,000 SGD jewelry, horology & equipment",
    sosProtocol: "Dedicated In-Country Field Liaison & Diplomatic Assistance",
    monthlyAddOnSGD: 96,
    highlight: true,
  },
  {
    id: "INS-03",
    title: "Global Emperor Syndicate",
    tier: "Ultra-High-Net-Worth Comprehensive",
    coverageSGD: "$5,000,000 SGD",
    medicalEvacuation: "Unlimited Worldwide Medical Extraction & Search & Rescue",
    flightDisruption: "Immediate Private Charter Flight Replacement",
    luxuryGear: "Unlimited All-Risk Valuables Guarantee",
    sosProtocol: "Special Security Detail Consultation & Satellite Direct Link",
    monthlyAddOnSGD: 185,
    highlight: false,
  },
];
