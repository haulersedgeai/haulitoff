import type { Metadata } from "next";
import { WhyUs } from "@/components/sections/why-us";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Why Choose Us — Tucson's Friendly Junk Removal Crew",
  description: "Veteran-owned, family-run, eco-first, fully insured. The reasons Tucson keeps calling us back for junk removal and cleanouts.",
};

export default function WhyChooseUsPage() {
  return (
    <>
      <Section className="bg-cream pt-12 pb-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-brand mb-3">Why Us</p>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold text-ink mb-4 text-balance">Tucson knows our trucks for a reason.</h1>
          <p className="text-lg text-muted">A small, careful, locally-owned crew built on the things that big national chains skip — clear pricing, prompt arrival, eco-friendly disposal, and a genuine smile when we knock on your door.</p>
        </div>
      </Section>
      <WhyUs />
      <Process />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
