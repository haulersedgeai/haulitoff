import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { services } from "@/content/services";

const featured = [
  "junk-removal",
  "clean-outs",
  "demolition",
  "furniture-removal",
  "appliance-removal",
  "hot-tub-removal",
  "shed-demolition",
  "estate-cleanouts",
  "construction-debris-removal",
];

export function ServicesGrid() {
  const list = featured.map((slug) => services.find((s) => s.slug === slug)!).filter(Boolean);
  return (
    <Section className="bg-white">
      <SectionHeader
        eyebrow="What We Do"
        title="Anything that takes up space — gone."
        description="From a single mattress to a full estate cleanout, one tear-down shed to a kitchen gut. Tucson's crew of choice."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((s) => (
          <Link key={s.slug} href={`/services/${s.slug}`} className="group">
            <Card className="overflow-hidden h-full hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="relative aspect-[16/10] overflow-hidden bg-cream">
                {s.image && <Image src={s.image} alt={s.title} fill className="object-cover group-hover:scale-105 transition-transform" sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" />}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-ink group-hover:text-brand transition-colors">{s.title}</h3>
                <p className="mt-2 text-sm text-muted line-clamp-2">{s.intro}</p>
                <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-brand">
                  Learn more <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link href="/services" className="inline-flex items-center gap-1 text-base font-bold text-brand hover:text-brand-dark">
          See all services <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
}
