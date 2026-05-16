import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Testimonials } from "@/components/sections/testimonials";
import { services, servicesBySlug, categoryLabels } from "@/content/services";
import { PHONE_DISPLAY, PHONE_RAW } from "@/lib/utils";
import { locations } from "@/content/locations";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = servicesBySlug[slug];
  if (!s) return {};
  return { title: s.metaTitle, description: s.metaDescription };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = servicesBySlug[slug];
  if (!s) notFound();

  const related = s.relatedSlugs.map((r) => servicesBySlug[r]).filter(Boolean);
  const topLocations = locations.slice(0, 8);

  return (
    <>
      <section className="gradient-ink text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(ellipse at top right, #EB6E14 0%, transparent 50%)" }} />
        <div className="container-x relative grid lg:grid-cols-2 gap-12 py-14 md:py-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-4 py-1.5 mb-5">
              <span className="text-xs font-semibold tracking-wide uppercase">{categoryLabels[s.category]}</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-5 text-balance">{s.h1}</h1>
            <p className="text-lg text-white/85 mb-7 text-balance">{s.intro}</p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg"><Link href="/get-a-quote">Get a Free Quote</Link></Button>
              <Button asChild size="lg" variant="white"><a href={`tel:${PHONE_RAW}`}><Phone className="h-5 w-5" /> {PHONE_DISPLAY}</a></Button>
            </div>
          </div>
          {s.image && (
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image src={s.image} alt={s.title} fill className="object-cover" priority sizes="(min-width: 1024px) 50vw, 100vw" />
            </div>
          )}
        </div>
      </section>

      <Section className="bg-white">
        <div className="grid lg:grid-cols-[2fr_1fr] gap-10">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-ink mb-6">What's included</h2>
            <ul className="space-y-3">
              {s.whatsIncluded.map((item) => (
                <li key={item} className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-brand mt-0.5 shrink-0" /><span className="text-ink">{item}</span></li>
              ))}
            </ul>

            {s.items && (
              <div className="mt-12 grid md:grid-cols-2 gap-6">
                {s.items.map((g) => (
                  <Card key={g.group} className="p-6">
                    <h3 className="text-lg font-bold text-ink mb-4">{g.group}</h3>
                    <ul className="space-y-2">
                      {g.list.map((it) => <li key={it} className="text-sm text-ink flex items-start gap-2"><span className="text-brand">•</span> {it}</li>)}
                    </ul>
                  </Card>
                ))}
              </div>
            )}

            {s.faq && (
              <div className="mt-12">
                <h2 className="font-display text-3xl md:text-4xl font-extrabold text-ink mb-6">Common questions</h2>
                <Accordion type="single" collapsible>
                  {s.faq.map((f, i) => (
                    <AccordionItem key={i} value={`item-${i}`}>
                      <AccordionTrigger>{f.q}</AccordionTrigger>
                      <AccordionContent>{f.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            )}
          </div>

          <aside className="space-y-6">
            <div className="bg-cream rounded-xl p-6 border border-border">
              <h3 className="font-bold text-ink mb-3">Schedule today</h3>
              <p className="text-sm text-muted mb-4">Most jobs scheduled same-day. Call, text, or use the form.</p>
              <div className="space-y-2">
                <Button asChild size="md" className="w-full"><Link href="/get-a-quote">Free Online Quote</Link></Button>
                <Button asChild size="md" variant="secondary" className="w-full"><a href={`tel:${PHONE_RAW}`}>Call {PHONE_DISPLAY}</a></Button>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-border">
              <h3 className="font-bold text-ink mb-3">Service areas</h3>
              <ul className="text-sm space-y-1.5">
                {topLocations.map((l) => (
                  <li key={l.slug}><Link href={`/locations/${l.slug}`} className="text-muted hover:text-brand">→ {l.name}</Link></li>
                ))}
                <li><Link href="/locations" className="text-brand font-semibold">View all locations →</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      {related.length > 0 && (
        <Section className="bg-cream">
          <SectionHeader eyebrow="Related" title="You might also need" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((r) => (
              <Link key={r.slug} href={`/services/${r.slug}`} className="group">
                <Card className="p-6 h-full hover:shadow-md transition-all hover:-translate-y-0.5">
                  <h3 className="text-lg font-bold text-ink group-hover:text-brand">{r.title}</h3>
                  <p className="mt-2 text-sm text-muted line-clamp-2">{r.intro}</p>
                  <div className="mt-3 flex items-center gap-1 text-sm font-semibold text-brand">Learn more <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" /></div>
                </Card>
              </Link>
            ))}
          </div>
        </Section>
      )}

      <Testimonials />
      <CtaBanner />
    </>
  );
}
