import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { CtaBanner } from "@/components/sections/cta-banner";
import { locations } from "@/content/locations";

export const metadata: Metadata = {
  title: "Service Areas — Junk Removal Across Tucson & Southern Arizona",
  description: "Every city, town, and neighborhood we serve across Tucson, Pima County, and Southern Arizona. Same-day pickup in most areas.",
};

export default function LocationsIndex() {
  const byCounty = locations.reduce<Record<string, typeof locations>>((acc, l) => {
    (acc[l.county] ||= []).push(l);
    return acc;
  }, {});

  return (
    <>
      <Section className="bg-cream pt-12 pb-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-brand mb-3">Service Areas</p>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold text-ink mb-4 text-balance">Serving all of Tucson & Southern Arizona.</h1>
          <p className="text-lg text-muted">From downtown Tucson to the SaddleBrooke fairways, Dove Mountain to Sahuarita Lake. Browse every neighborhood we serve.</p>
        </div>
      </Section>

      {Object.entries(byCounty).map(([county, items]) => (
        <Section key={county} className="bg-white">
          <SectionHeader eyebrow={county} title={`${items.length} communities in ${county}`} center={false} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((l) => (
              <Link key={l.slug} href={`/locations/${l.slug}`} className="group bg-cream hover:bg-white border border-border hover:border-brand rounded-xl p-5 transition-all hover:shadow-md">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-brand mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-bold text-ink group-hover:text-brand">{l.name}</h3>
                    <p className="text-xs text-muted mt-1 capitalize">{l.type}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Section>
      ))}

      <CtaBanner />
    </>
  );
}
