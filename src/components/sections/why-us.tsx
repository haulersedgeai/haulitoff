import { Clock, DollarSign, Recycle, ShieldCheck, Truck, Heart } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";

const items = [
  { icon: Clock, title: "Open 7 Days a Week", body: "Junk doesn't wait, so we don't either. Monday morning, Sunday evening, holidays — when you're ready, we're ready." },
  { icon: DollarSign, title: "Upfront, Flat Pricing", body: "Firm quote before we lift a finger. No hidden fees, no surprise charges, no upsells. The price you hear is the price you pay." },
  { icon: Recycle, title: "Eco-Friendly Disposal", body: "We donate and recycle 80%+ of every load. Tucson is home — we don't fill the desert with junk that could be reused." },
  { icon: ShieldCheck, title: "Licensed & Insured", body: "Full liability and workers' comp coverage. Your property is protected from the moment we pull up to the moment we leave." },
  { icon: Truck, title: "Two-Person Crew + Truck", body: "We bring the labor, the dollies, and the 20-yard truck. You point — we lift, load, and haul. You never have to touch it." },
  { icon: Heart, title: "Veteran & Family-Owned", body: "Founded by a Tucson local. Family-run today. Every customer is a neighbor, every job builds a long-term relationship." },
];

export function WhyUs() {
  return (
    <Section className="bg-white">
      <SectionHeader
        eyebrow="Why Tucson Picks Us"
        title="The friendly, fair, and fast junk crew."
        description="The standard for junk removal in the Old Pueblo. We're not the biggest — we're the most careful."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.title} className="bg-cream rounded-xl p-6 border border-border">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-brand/10 text-brand mb-4">
              <item.icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-ink mb-2">{item.title}</h3>
            <p className="text-sm text-muted">{item.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
