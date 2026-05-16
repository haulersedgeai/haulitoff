import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/ui/social-icons";
import { PHONE_DISPLAY, PHONE_RAW, EMAIL, ADDRESS, BUSINESS_FULL, FB_URL, IG_URL } from "@/lib/utils";
import { services, categoryLabels } from "@/content/services";
import { locations } from "@/content/locations";

export function Footer() {
  const topServices = services.filter((s) => !s.slug.includes("hub")).slice(0, 8);
  const topLocations = locations.slice(0, 10);

  return (
    <footer className="bg-navy-dark text-white">
      <div className="container-x py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="font-display text-xl font-extrabold mb-3">
            <span className="text-brand-light">HAUL</span> IT OFF <span className="text-brand-light">AZ</span>
          </div>
          <p className="text-sm text-white/80 mb-4">
            Tucson's veteran-owned junk removal and demolition team. Family-run, fully licensed and insured, eco-friendly disposal — open 7 days a week.
          </p>
          <div className="space-y-2 text-sm">
            <a href={`tel:${PHONE_RAW}`} className="flex items-center gap-2 hover:text-brand-light transition-colors"><Phone className="h-4 w-4" /> {PHONE_DISPLAY}</a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-brand-light transition-colors"><Mail className="h-4 w-4" /> {EMAIL}</a>
            <div className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /> <span>{ADDRESS}</span></div>
          </div>
          <div className="flex gap-3 mt-4">
            <a href={FB_URL} target="_blank" rel="noopener" aria-label="Facebook" className="p-2 rounded-full bg-white/10 hover:bg-brand transition-colors"><FacebookIcon className="h-4 w-4" /></a>
            <a href={IG_URL} target="_blank" rel="noopener" aria-label="Instagram" className="p-2 rounded-full bg-white/10 hover:bg-brand transition-colors"><InstagramIcon className="h-4 w-4" /></a>
          </div>
        </div>

        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-brand-light mb-4">Services</div>
          <ul className="space-y-2 text-sm">
            {topServices.map((s) => (
              <li key={s.slug}><Link href={`/services/${s.slug}`} className="text-white/80 hover:text-white transition-colors">{s.title}</Link></li>
            ))}
            <li><Link href="/services" className="text-brand-light font-semibold hover:text-white transition-colors">All Services →</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-brand-light mb-4">Service Areas</div>
          <ul className="space-y-2 text-sm">
            {topLocations.map((l) => (
              <li key={l.slug}><Link href={`/locations/${l.slug}`} className="text-white/80 hover:text-white transition-colors">{l.name}</Link></li>
            ))}
            <li><Link href="/locations" className="text-brand-light font-semibold hover:text-white transition-colors">All Locations →</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-brand-light mb-4">Company</div>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="text-white/80 hover:text-white transition-colors">About</Link></li>
            <li><Link href="/why-choose-us" className="text-white/80 hover:text-white transition-colors">Why Choose Us</Link></li>
            <li><Link href="/pricing" className="text-white/80 hover:text-white transition-colors">Pricing</Link></li>
            <li><Link href="/items-we-take" className="text-white/80 hover:text-white transition-colors">Items We Take</Link></li>
            <li><Link href="/gallery" className="text-white/80 hover:text-white transition-colors">Gallery</Link></li>
            <li><Link href="/reviews" className="text-white/80 hover:text-white transition-colors">Reviews</Link></li>
            <li><Link href="/faq" className="text-white/80 hover:text-white transition-colors">FAQ</Link></li>
            <li><Link href="/contact" className="text-white/80 hover:text-white transition-colors">Contact</Link></li>
            <li><Link href="/get-a-quote" className="text-brand-light font-semibold hover:text-white transition-colors">Get a Free Quote →</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div>© {new Date().getFullYear()} {BUSINESS_FULL}. All rights reserved. Veteran-owned · Family-owned · Licensed & Insured.</div>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
