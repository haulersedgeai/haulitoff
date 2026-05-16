import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileCta } from "@/components/layout/mobile-cta";
import { BUSINESS_FULL, PHONE_DISPLAY, EMAIL, SITE_URL, FB_URL, IG_URL } from "@/lib/utils";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Haul It Off AZ — Tucson Junk Removal, Cleanouts & Demolition",
    template: "%s | Haul It Off AZ",
  },
  description: "Tucson's veteran-owned junk removal, cleanout, and light demolition team. Same-day pickup, upfront pricing, eco-friendly disposal. Call (520) 808-2268.",
  openGraph: {
    title: "Haul It Off AZ — Tucson Junk Removal",
    description: "Same-day junk removal, cleanouts, and demolition across Tucson and Southern Arizona.",
    url: SITE_URL,
    siteName: BUSINESS_FULL,
    type: "website",
  },
  alternates: { canonical: SITE_URL },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": SITE_URL,
  name: BUSINESS_FULL,
  alternateName: "Haul It Off AZ",
  description: "Veteran-owned junk removal, property cleanouts, and light demolition serving Tucson and Southern Arizona.",
  url: SITE_URL,
  telephone: PHONE_DISPLAY,
  email: EMAIL,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "7315 N Oracle Rd",
    addressLocality: "Tucson",
    addressRegion: "AZ",
    postalCode: "85704",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 32.2226, longitude: -110.9747 },
  areaServed: ["Tucson", "Oro Valley", "Marana", "Vail", "Sahuarita", "Green Valley", "Catalina Foothills", "SaddleBrooke"],
  openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "07:00", closes: "19:00" }],
  sameAs: [FB_URL, IG_URL],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "100" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="font-sans pb-16 lg:pb-0 antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileCta />
      </body>
    </html>
  );
}
