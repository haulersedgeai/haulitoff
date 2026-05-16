import type { Metadata } from "next";
import Image from "next/image";
import { Section, SectionHeader } from "@/components/ui/section";
import { CtaBanner } from "@/components/sections/cta-banner";
import { TrustBar } from "@/components/sections/trust-bar";
import { Shield, Heart, Recycle, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — Veteran-Owned Tucson Junk Removal",
  description: "Haul It Off is a veteran-owned, family-run Tucson junk removal team. Eco-friendly, transparent pricing, and a focus on lifelong customer relationships.",
};

export default function AboutPage() {
  return (
    <>
      <Section className="bg-cream pt-12">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-brand mb-3">Our Story</p>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold text-ink mb-4 text-balance">A Tucson crew you can call by name.</h1>
          <p className="text-lg text-muted">Veteran-owned. Family-run. Born and raised in Tucson. Built to set a new standard for what junk removal looks like in Southern Arizona.</p>
        </div>
      </Section>

      <TrustBar />

      <Section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <Image src="/images/HO1-1920w.png" alt="Haul It Off crew" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
          </div>
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-ink mb-4">Started in Tucson. Still in Tucson.</h2>
            <p className="text-muted mb-4">Haul It Off Junk Removal was started by a veteran with a simple idea: deliver a level of professionalism, communication, and care that the junk removal industry doesn't usually offer. No hidden fees. No no-shows. No surprise upcharges.</p>
            <p className="text-muted mb-4">Today we're a small, tight-knit family-run crew working full-time across Tucson, Oro Valley, Marana, Vail, Sahuarita, Green Valley, and every community in between. We're the team your neighbor already called.</p>
            <p className="text-muted">When you book us, you don't get an anonymous call center. You get Abraham, Ivan, and the rest of the crew — people who answer their phones, show up when they say they will, and treat your home like our own.</p>
          </div>
        </div>
      </Section>

      <Section className="bg-cream">
        <SectionHeader eyebrow="What we stand for" title="Four things we will not compromise on." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Shield, title: "Honesty First", body: "Firm quotes upfront. The price we tell you is the price you pay. Always." },
            { icon: Heart, title: "Care for People", body: "Every job is a relationship. We work judgment-free with every customer and situation." },
            { icon: Recycle, title: "Eco First", body: "We donate or recycle 80%+ of every load. Tucson's desert deserves better than landfill." },
            { icon: Award, title: "Tucson Roots", body: "Locally owned. Locally operated. Family-run. We work for our community first." },
          ].map((v) => (
            <div key={v.title} className="bg-white rounded-xl p-6 border border-border">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-brand/10 text-brand mb-4"><v.icon className="h-6 w-6" /></div>
              <h3 className="text-lg font-bold text-ink mb-2">{v.title}</h3>
              <p className="text-sm text-muted">{v.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
