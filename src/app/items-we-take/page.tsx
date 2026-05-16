import type { Metadata } from "next";
import { CheckCircle2, X } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Items We Take — Tucson Junk Removal | Haul It Off",
  description: "Everything we'll haul away in Tucson — and the short list of things we can't take. Residential, commercial, construction debris.",
};

const takeRes = ["Sofas, sectionals, recliners", "Mattresses, box springs, bed frames", "Dressers, armoires, cabinets", "Tables and chairs", "Refrigerators, freezers", "Washers, dryers, dishwashers", "Stoves, ovens, microwaves", "TVs, monitors, computers", "Printers, scanners, electronics", "Yard waste, brush, palm fronds", "Patio furniture and grills", "Carpets, rugs, area rugs", "Boxes and packing material", "Clothing and textiles", "Holiday decor", "Bikes and sports equipment", "Children's toys and play sets", "Pianos (call first)", "Pool tables (call first)"];
const takeCom = ["Office furniture (desks, chairs)", "Cubicles and partitions", "Filing cabinets", "Servers and IT equipment", "Printers, copiers, fax machines", "Restaurant equipment", "Retail fixtures and displays", "Warehouse pallets and racks", "Hospitality (hotel/motel) furniture", "Construction debris (drywall, lumber, tile)", "Small concrete loads", "Roofing shingles and tear-off material", "Carpet tear-out"];
const dont = ["Wet paint cans", "Asbestos materials", "Medical or biohazard waste", "Animal waste or feces", "Propane tanks (full or empty)", "Vehicles, boats, RVs", "Gasoline, oil, automotive fluids", "Pesticides and chemicals", "Fluorescent tubes (we recycle separately)"];

export default function ItemsPage() {
  return (
    <>
      <Section className="bg-cream pt-12 pb-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-brand mb-3">Items We Take</p>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold text-ink mb-4 text-balance">If it can fit in a truck, we probably take it.</h1>
          <p className="text-lg text-muted">Quick reference for what Tucson's junk removal crew hauls — and the short list of things we can't touch.</p>
        </div>
      </Section>

      <Section className="bg-white">
        <SectionHeader eyebrow="Residential" title="What we take from homes" center={false} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {takeRes.map((i) => <div key={i} className="flex items-start gap-2 p-3 bg-cream rounded-lg border border-border"><CheckCircle2 className="h-5 w-5 text-brand mt-0.5 shrink-0" /><span className="text-ink text-sm">{i}</span></div>)}
        </div>
      </Section>

      <Section className="bg-cream">
        <SectionHeader eyebrow="Commercial" title="What we take from businesses" center={false} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {takeCom.map((i) => <div key={i} className="flex items-start gap-2 p-3 bg-white rounded-lg border border-border"><CheckCircle2 className="h-5 w-5 text-brand mt-0.5 shrink-0" /><span className="text-ink text-sm">{i}</span></div>)}
        </div>
      </Section>

      <Section className="bg-white">
        <SectionHeader eyebrow="What We Don't Take" title="The short list of no's" center={false} />
        <p className="text-muted mb-6">For hazardous materials below, we'll point you to the right Tucson facility.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {dont.map((i) => <div key={i} className="flex items-start gap-2 p-3 bg-red-50 border border-red-100 rounded-lg"><X className="h-5 w-5 text-red-500 mt-0.5 shrink-0" /><span className="text-ink text-sm">{i}</span></div>)}
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
