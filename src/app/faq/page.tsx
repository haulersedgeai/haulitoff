import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui/section";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "FAQ — Tucson Junk Removal Questions Answered",
  description: "How fast, how much, what we take, how we work. Every common Tucson junk removal question, answered straight.",
};

const groups = [
  {
    label: "Scheduling & Service",
    faqs: [
      { q: "How fast can you come?", a: "Most of the time same day or next day across Tucson, Oro Valley, Marana, and Vail. Call us before noon and we'll usually have a crew at your door before evening." },
      { q: "Are you open weekends?", a: "Yes — open 7 days a week, including Sundays and most holidays. After-hours by request." },
      { q: "Do I need to be home?", a: "Not always. Lots of clients leave the items outside, send photos, and pay over the phone after we're done. We send before/after photos every time." },
      { q: "Do I need to move items to the curb?", a: "No. Just point. Our two-person crew handles every step — stairs, attics, side yards, basements." },
      { q: "How far do you travel?", a: "Tucson, all of Pima County, plus parts of Santa Cruz and Cochise counties (Tubac, Sonoita, Benson)." },
    ],
  },
  {
    label: "Pricing",
    faqs: [
      { q: "How is pricing calculated?", a: "Mostly by how much truck space your stuff takes up (volume). We also account for stairs, hazardous items, and heavy materials like concrete. Quotes are always firm and given before we lift a finger." },
      { q: "Is there a minimum charge?", a: "Yes, a small minimum to cover the truck and crew. We're happy to do single-item pickups — call for a price." },
      { q: "Do you charge for estimates?", a: "Estimates are always free. Online quotes are firm if photos are accurate; on-site quotes are firm after the walk-around." },
      { q: "Do you accept credit cards?", a: "Yes — Visa, Mastercard, Amex, Discover, plus cash, check, Venmo, and Zelle." },
    ],
  },
  {
    label: "What We Take",
    faqs: [
      { q: "Will you take a single item?", a: "Absolutely. Single mattress, lone couch, one fridge — all good." },
      { q: "Do you take hazardous materials?", a: "Not directly. We can't take wet paint, gasoline, asbestos, propane tanks, or medical waste. We can refer you to local hazmat services." },
      { q: "Do you take construction debris?", a: "Yes — drywall, lumber, tile, and small loads of concrete." },
      { q: "Do you take electronics?", a: "Yes. TVs, monitors, computers, and other e-waste are routed to certified Arizona recyclers." },
    ],
  },
  {
    label: "Demolition & Cleanouts",
    faqs: [
      { q: "Do you do shed demolitions?", a: "Yes — wood, metal, plastic, all sizes. Concrete pad removal available as an add-on." },
      { q: "Hot tub removal?", a: "Yes. We disconnect, dismantle, and haul. Above-ground, in-ground, or inflatable." },
      { q: "Hoarder cleanouts?", a: "Yes — with discretion, patience, and PPE. Multi-day projects are normal, and we work at the homeowner's pace." },
      { q: "Foreclosure or eviction cleanouts?", a: "Yes — usually 24–48 hour turnaround for property managers and realtors. Photo documentation included." },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <Section className="bg-cream pt-12 pb-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-brand mb-3">FAQ</p>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold text-ink mb-4 text-balance">Common questions, straight answers.</h1>
          <p className="text-lg text-muted">Don't see your question? Call us at (520) 808-2268 — we always pick up.</p>
        </div>
      </Section>

      {groups.map((g) => (
        <Section key={g.label} className="bg-white">
          <SectionHeader eyebrow="Frequently Asked" title={g.label} center={false} />
          <Accordion type="single" collapsible className="max-w-3xl">
            {g.faqs.map((f, i) => (
              <AccordionItem key={i} value={`${g.label}-${i}`}>
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Section>
      ))}
      <CtaBanner />
    </>
  );
}
