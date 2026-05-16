import Link from "next/link";
import { MapPin } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { locations } from "@/content/locations";

export function ServiceAreasSnippet() {
  return (
    <Section className="bg-cream">
      <SectionHeader
        eyebrow="Service Areas"
        title="Tucson & all of Southern Arizona."
        description="From the foothills to the suburbs. If you're in Pima County (and a few miles beyond), we'll be there."
      />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {locations.map((l) => (
          <Link key={l.slug} href={`/locations/${l.slug}`} className="flex items-center gap-2 px-4 py-3 bg-white rounded-lg border border-border hover:border-brand hover:text-brand transition-colors">
            <MapPin className="h-4 w-4 text-brand shrink-0" />
            <span className="font-semibold text-sm">{l.name}</span>
          </Link>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link href="/locations" className="inline-flex items-center gap-1 text-base font-bold text-brand hover:text-brand-dark">View all service areas →</Link>
      </div>
    </Section>
  );
}
