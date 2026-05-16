import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Phone, MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Testimonials } from "@/components/sections/testimonials";
import { locations, locationsBySlug } from "@/content/locations";
import { services } from "@/content/services";
import { PHONE_DISPLAY, PHONE_RAW } from "@/lib/utils";

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const l = locationsBySlug[slug];
  if (!l) return {};
  return { title: l.metaTitle, description: l.metaDescription };
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const l = locationsBySlug[slug];
  if (!l) notFound();

  const topServices = ["junk-removal", "furniture-removal", "appliance-removal", "estate-cleanouts", "garage-cleanouts", "shed-demolition", "hot-tub-removal", "construction-debris-removal"]
    .map((s) => services.find((x) => x.slug === s)!)
    .filter(Boolean);

  return (
    <>
      <section className="gradient-ink text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(ellipse at top right, #EB6E14 0%, transparent 50%)" }} />
        <div className="container-x relative py-14 md:py-20">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-4 py-1.5 mb-5">
            <MapPin className="h-4 w-4 text-brand-light" />
            <span className="text-xs font-semibold tracking-wide uppercase">{l.county}</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold leading-tight mb-5 text-balance">
            Junk Removal in {l.fullName}
          </h1>
          <p className="text-lg text-white/85 mb-7 max-w-3xl text-balance">{l.intro}</p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg"><Link href="/get-a-quote">Get a Free {l.name} Quote</Link></Button>
            <Button asChild size="lg" variant="white"><a href={`tel:${PHONE_RAW}`}><Phone className="h-5 w-5" /> {PHONE_DISPLAY}</a></Button>
          </div>
        </div>
      </section>

      <Section className="bg-white">
        <div className="grid lg:grid-cols-[2fr_1fr] gap-10">
          <div>
            <h2 className="font-display text-3xl font-extrabold text-ink mb-4">All services available in {l.name}</h2>
            <p className="text-muted mb-6">Our trucks run through {l.name} as part of our regular daily route — most appointments scheduled same-day or next-day.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {topServices.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="group flex items-center gap-3 p-4 bg-cream border border-border hover:border-brand rounded-lg transition-colors">
                  <CheckCircle2 className="h-5 w-5 text-brand shrink-0" />
                  <span className="font-semibold text-ink group-hover:text-brand text-sm">{s.title}</span>
                </Link>
              ))}
            </div>

            <h2 className="font-display text-3xl font-extrabold text-ink mt-12 mb-4">Neighborhoods we serve in {l.name}</h2>
            <div className="flex flex-wrap gap-2">
              {l.neighborhoods.map((n) => (
                <span key={n} className="px-3 py-1.5 bg-cream rounded-full text-sm font-medium text-ink border border-border">{n}</span>
              ))}
            </div>

            <h2 className="font-display text-3xl font-extrabold text-ink mt-12 mb-4">Working near {l.name} landmarks</h2>
            <p className="text-muted mb-4">From small pickups to big estate cleanouts, our crews work near every corner of {l.name}:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {l.landmarks.map((lm) => (
                <li key={lm} className="flex items-center gap-2 text-ink"><MapPin className="h-4 w-4 text-brand" /> {lm}</li>
              ))}
            </ul>
          </div>

          <aside className="space-y-6">
            <div className="bg-cream rounded-xl p-6 border border-border">
              <h3 className="font-bold text-ink mb-3">Schedule in {l.name}</h3>
              <p className="text-sm text-muted mb-4">Same-day appointments in most of {l.county}. Call or text photos for the fastest quote.</p>
              <div className="space-y-2">
                <Button asChild size="md" className="w-full"><Link href="/get-a-quote">Free Online Quote</Link></Button>
                <Button asChild size="md" variant="secondary" className="w-full"><a href={`tel:${PHONE_RAW}`}>Call {PHONE_DISPLAY}</a></Button>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-border">
              <h3 className="font-bold text-ink mb-3">Nearby areas</h3>
              <ul className="text-sm space-y-1.5">
                {locations.filter((x) => x.slug !== l.slug && x.county === l.county).slice(0, 8).map((x) => (
                  <li key={x.slug}><Link href={`/locations/${x.slug}`} className="text-muted hover:text-brand">→ {x.name}</Link></li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <Testimonials />
      <CtaBanner title={`Ready to clear out in ${l.name}?`} />
    </>
  );
}
