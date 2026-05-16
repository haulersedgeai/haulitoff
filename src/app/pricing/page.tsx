import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui/section";
import { CheckCircle2, Truck } from "lucide-react";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Pricing — Upfront, Flat-Rate Tucson Junk Removal",
  description: "How junk removal pricing works at Haul It Off. Volume-based, flat-quote, no hidden fees. Tucson and Southern Arizona.",
};

const tiers = [
  { name: "Single Item", fill: "1/16 truck", desc: "One mattress, one couch, a fridge — quick pickups.", from: "from $99" },
  { name: "Min Load", fill: "1/8 truck", desc: "A few pieces of furniture or some yard debris.", from: "from $149" },
  { name: "1/4 Truck", fill: "Small project", desc: "Single-room cleanout or small garage clear.", from: "from $249" },
  { name: "1/2 Truck", fill: "Medium project", desc: "Garage cleanout, deck removal, large furniture set.", from: "from $399" },
  { name: "3/4 Truck", fill: "Big project", desc: "Full estate room, hot tub removal, shed teardown.", from: "from $549" },
  { name: "Full Truck", fill: "Whole job", desc: "Full house cleanout, big construction debris haul.", from: "from $699" },
];

export default function PricingPage() {
  return (
    <>
      <Section className="bg-cream pt-12 pb-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-brand mb-3">Pricing</p>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold text-ink mb-4 text-balance">No hidden fees. Ever.</h1>
          <p className="text-lg text-muted">Tucson junk removal pricing based on volume — the amount of space your stuff takes up in our truck. Firm quote before we lift a finger.</p>
        </div>
      </Section>

      <Section className="bg-white">
        <SectionHeader eyebrow="Volume Pricing" title="Pay only for what we haul." description="Prices start at the volumes below. Final quote depends on what's being hauled (e.g. concrete and yard waste price differently)." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className="bg-cream rounded-xl p-6 border border-border">
              <Truck className="h-6 w-6 text-brand mb-3" />
              <div className="text-2xl font-bold text-ink">{t.name}</div>
              <div className="text-sm font-semibold text-brand mb-1">{t.fill}</div>
              <p className="text-sm text-muted mb-4">{t.desc}</p>
              <div className="text-xl font-extrabold text-navy">{t.from}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-cream">
        <SectionHeader eyebrow="What's Included" title="Every quote covers everything." />
        <div className="max-w-2xl mx-auto">
          <ul className="space-y-3">
            {[
              "Two-person crew with truck",
              "All lifting and loading",
              "Stairs, side yards, attics, garages — no extra charges",
              "Final sweep of the area",
              "Donation routing and eco-friendly disposal",
              "Same-day or next-day appointments",
              "Firm, written quote before any work begins",
            ].map((b) => (
              <li key={b} className="flex items-start gap-3 bg-white p-4 rounded-lg border border-border"><CheckCircle2 className="h-5 w-5 text-brand mt-0.5 shrink-0" /><span className="text-ink">{b}</span></li>
            ))}
          </ul>
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
