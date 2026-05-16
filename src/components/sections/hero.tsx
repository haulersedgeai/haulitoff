import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, Star, CheckCircle2 } from "lucide-react";
import { PHONE_DISPLAY, PHONE_RAW } from "@/lib/utils";

export function Hero({
  eyebrow = "Tucson, AZ · Veteran-Owned",
  title = "Junk gone. Same day.",
  highlight = "On your schedule.",
  description = "Tucson's friendly, veteran-owned crew for junk removal, property cleanouts, and light demolition. Upfront pricing, eco-friendly disposal, open 7 days a week.",
  image = "/images/HO-AZ-truck-2880w.png",
}: {
  eyebrow?: string;
  title?: string;
  highlight?: string;
  description?: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden gradient-ink text-white">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(ellipse at top right, #EB6E14 0%, transparent 50%)" }} />
      <div className="container-x relative grid lg:grid-cols-2 gap-12 py-16 md:py-24 lg:py-32 items-center">
        <div className="fade-up">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <Star className="h-4 w-4 fill-brand text-brand" />
            <span className="text-xs font-semibold tracking-wide">{eyebrow}</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6 text-balance">
            {title} <span className="text-brand-light">{highlight}</span>
          </h1>
          <p className="text-lg md:text-xl text-white/85 mb-8 max-w-xl text-balance">{description}</p>
          <div className="flex flex-wrap gap-3 mb-8">
            <Button asChild size="lg"><Link href="/get-a-quote">Get a Free Quote</Link></Button>
            <Button asChild size="lg" variant="white"><a href={`tel:${PHONE_RAW}`}><Phone className="h-5 w-5" /> {PHONE_DISPLAY}</a></Button>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80">
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-brand-light" /> Licensed & insured</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-brand-light" /> Same-day service</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-brand-light" /> Upfront pricing</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-brand-light" /> 80%+ recycled</div>
          </div>
        </div>
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
          <Image src={image} alt="Haul It Off truck" fill className="object-cover" priority sizes="(min-width: 1024px) 50vw, 100vw" />
        </div>
      </div>
    </section>
  );
}
