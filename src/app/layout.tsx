import type { Metadata, Viewport } from "next";
import { Sora, Manrope, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-subheading",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#1B4332",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Atlas Journey Singapore — Luxury Travel Intelligence Platform",
  description:
    "The premier travel operating system dedicated exclusively to Singapore. Curated luxury precincts, Marina Bay architecture, Peranakan heritage, Capella Sentosa sanctuaries, and bespoke concierge itineraries.",
  keywords: [
    "Singapore luxury travel",
    "Atlas Journey Singapore",
    "Marina Bay Sands luxury itinerary",
    "Sentosa Cove private villas",
    "Joo Chiat Peranakan heritage",
    "Dempsey Hill Michelin dining",
    "Singapore travel intelligence",
    "Changi VIP arrival transfers",
    "Singapore biophilic architecture",
    "MacRitchie rainforest canopy",
  ],
  authors: [{ name: "Atlas Journey Singapore Editorial Concierge" }],
  creator: "Atlas Journey Singapore",
  publisher: "Atlas Journey Singapore",
  metadataBase: new URL("https://atlasjourney.sg"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_SG",
    url: "https://atlasjourney.sg",
    siteName: "Atlas Journey Singapore",
    title: "Atlas Journey Singapore — Luxury Travel Intelligence Platform",
    description:
      "Every journey begins with a plan. Curating bespoke itineraries across Singapore's 10 luxury precincts, Michelin gastronomy, and private island sanctuaries.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Atlas Journey Singapore Waterfront Skyline",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atlas Journey Singapore — Luxury Travel Intelligence Platform",
    description:
      "The premier travel operating system dedicated exclusively to Singapore. Explore curated precincts, private yacht berths, and Michelin counters.",
    images: [
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Schema.org JSON-LD Structured Data for Singapore Travel Agency & Destination
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TravelAgency",
        "@id": "https://atlasjourney.sg/#organization",
        name: "Atlas Journey Singapore",
        url: "https://atlasjourney.sg",
        logo: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=400&q=80",
        description:
          "Premium travel intelligence platform and concierge operating system dedicated to Singapore luxury travel, heritage sanctuaries, and private expeditions.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "1 Marina Boulevard",
          addressLocality: "Singapore",
          postalCode: "018989",
          addressCountry: "SG",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 1.2847,
          longitude: 103.861,
        },
        telephone: "+65 6789 2200",
        priceRange: "$$$$",
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Singapore",
        },
      },
      {
        "@type": "TouristDestination",
        "@id": "https://atlasjourney.sg/#destination",
        name: "Singapore",
        description:
          "A global biophilic garden city-state celebrated for world-class architecture, Peranakan heritage, Michelin dining, and primary equatorial rainforests.",
        touristType: ["Luxury Traveler", "Cultural Explorer", "Epicurean Enthusiast", "Family Traveler"],
      },
    ],
  };

  return (
    <html
      lang="en-SG"
      className={`${sora.variable} ${manrope.variable} ${plusJakarta.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased selection:bg-[#1B4332] selection:text-[#F5F3EE]">
        {children}
      </body>
    </html>
  );
}
