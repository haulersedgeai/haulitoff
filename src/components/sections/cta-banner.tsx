import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE_DISPLAY, PHONE_RAW } from "@/lib/utils";

export function CtaBanner({ title, description }: { title?: string; description?: string }) {
  return (
    <section className="gradient-sunset text-white">
      <div className="container-x py-14 md:py-20 grid lg:grid-cols-[1fr_auto] gap-8 items-center">
        <div>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold mb-3 text-balance">
            {title || "Ready to haul it off?"}
          </h2>
          <p className="text-lg text-white/90 max-w-2xl">
            {description || "Call now or get a free online quote in under 60 seconds. Most jobs scheduled same-day."}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="xl" variant="white"><a href={`tel:${PHONE_RAW}`}><Phone className="h-5 w-5" /> {PHONE_DISPLAY}</a></Button>
          <Button asChild size="xl" variant="secondary"><Link href="/get-a-quote">Get Free Quote</Link></Button>
        </div>
      </div>
    </section>
  );
}
