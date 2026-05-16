import type { Metadata } from "next";
import { Phone, Star, CheckCircle2 } from "lucide-react";
import { Section } from "@/components/ui/section";
import { QuoteForm } from "@/components/quote-form";
import { Button } from "@/components/ui/button";
import { PHONE_DISPLAY, PHONE_RAW } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Get a Free Quote — Tucson Junk Removal | Haul It Off AZ",
  description: "Free, no-pressure quote in under a minute. Send photos for the fastest estimate. Most jobs scheduled same-day. Tucson and Southern Arizona.",
};

export default function QuotePage() {
  return (
    <>
      <Section className="bg-cream pt-12 pb-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-brand mb-3">Free Quote</p>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold text-ink mb-4 text-balance">60 seconds. No pressure. No spam.</h1>
          <p className="text-lg text-muted">Send a few details and (ideally) a photo or two. We'll come back fast with a firm, upfront quote — by text or call, your pick.</p>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-ink mb-4">Why send photos?</h2>
            <ul className="space-y-3 mb-6">
              {[
                "Faster, more accurate quote",
                "Often a firm price before we drive over",
                "Helps us bring the right crew size",
                "Plan the right truck and route",
                "No surprises on arrival",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-brand mt-0.5 shrink-0" /><span className="text-ink">{b}</span></li>
              ))}
            </ul>
            <div className="bg-cream border border-border rounded-xl p-6">
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-brand text-brand" />)}
              </div>
              <p className="font-bold text-ink mb-2">"They got us on their schedule the next day during an out-of-state move."</p>
              <p className="text-sm text-muted">— Kimberly V., Tucson</p>
            </div>
            <div className="mt-6">
              <p className="text-sm text-muted mb-2">Prefer to talk? Just call:</p>
              <Button asChild size="lg" variant="secondary"><a href={`tel:${PHONE_RAW}`}><Phone className="h-5 w-5" /> {PHONE_DISPLAY}</a></Button>
            </div>
          </div>
          <QuoteForm />
        </div>
      </Section>
    </>
  );
}
