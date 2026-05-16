import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { CtaBanner } from "@/components/sections/cta-banner";
import { services, categoryLabels } from "@/content/services";

export const metadata: Metadata = {
  title: "All Services — Tucson Junk Removal, Cleanouts & Demolition",
  description: "Every junk removal, cleanout, and light demolition service we offer across Tucson and Southern Arizona. Same-day, upfront pricing, fully insured.",
};

export default function ServicesIndex() {
  const groups: { key: keyof typeof categoryLabels; items: typeof services }[] = [
    { key: "junk-removal", items: services.filter((s) => s.category === "junk-removal") },
    { key: "clean-outs", items: services.filter((s) => s.category === "clean-outs") },
    { key: "demolition", items: services.filter((s) => s.category === "demolition") },
  ];

  return (
    <>
      <Section className="bg-cream pt-12 pb-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-brand mb-3">Our Services</p>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold text-ink mb-4 text-balance">Every kind of haul. One Tucson team.</h1>
          <p className="text-lg text-muted">From single-item junk pickups to full estate cleanouts to shed and hot tub tear-downs — see everything we do across Tucson and Pima County.</p>
        </div>
      </Section>
      {groups.map((g) => (
        <Section key={g.key} className="bg-white">
          <SectionHeader eyebrow={categoryLabels[g.key]} title={`${categoryLabels[g.key]} services`} center={false} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {g.items.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group">
                <Card className="overflow-hidden h-full hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="relative aspect-[16/10] overflow-hidden bg-cream">
                    {s.image && <Image src={s.image} alt={s.title} fill className="object-cover group-hover:scale-105 transition-transform" sizes="(min-width: 1024px) 33vw, 100vw" />}
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-ink group-hover:text-brand transition-colors">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted line-clamp-3">{s.intro}</p>
                    <div className="mt-3 flex items-center gap-1 text-sm font-semibold text-brand">Learn more <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" /></div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Section>
      ))}
      <CtaBanner />
    </>
  );
}
