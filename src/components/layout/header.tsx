"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE_DISPLAY, PHONE_RAW, BUSINESS_NAME } from "@/lib/utils";
import { services, categoryLabels } from "@/content/services";

const navItems = [
  { href: "/services", label: "Services", hasDropdown: true },
  { href: "/locations", label: "Locations" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const grouped = {
    "junk-removal": services.filter((s) => s.category === "junk-removal"),
    "clean-outs": services.filter((s) => s.category === "clean-outs"),
    "demolition": services.filter((s) => s.category === "demolition"),
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border">
      <div className="container-x flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-display text-xl md:text-2xl font-extrabold tracking-tight">
            <span className="text-brand">HAUL</span>
            <span className="text-navy"> IT OFF</span>
            <span className="text-brand"> AZ</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div key={item.href} className="relative" onMouseEnter={() => item.hasDropdown && setServicesOpen(true)} onMouseLeave={() => item.hasDropdown && setServicesOpen(false)}>
              <Link href={item.href} className="px-4 py-2 text-sm font-semibold text-ink hover:text-brand transition-colors flex items-center gap-1">
                {item.label}
                {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
              </Link>
              {item.hasDropdown && servicesOpen && (
                <div className="absolute top-full left-0 -translate-x-1/4 w-[720px] bg-white shadow-xl rounded-xl border border-border p-6 grid grid-cols-3 gap-6">
                  {Object.entries(grouped).map(([cat, items]) => (
                    <div key={cat}>
                      <div className="text-xs font-bold uppercase tracking-wider text-brand mb-3">{categoryLabels[cat as keyof typeof categoryLabels]}</div>
                      <ul className="space-y-2">
                        {items.map((s) => (
                          <li key={s.slug}>
                            <Link href={`/services/${s.slug}`} className="text-sm text-ink hover:text-brand transition-colors">
                              {s.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href={`tel:${PHONE_RAW}`} className="flex items-center gap-2 text-sm font-bold text-navy hover:text-brand transition-colors">
            <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
          </a>
          <Button asChild size="md"><Link href="/get-a-quote">Free Quote</Link></Button>
        </div>

        <button className="lg:hidden p-2" aria-label="Menu" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-white">
          <div className="container-x py-4 space-y-1">
            <Link onClick={() => setMobileOpen(false)} href="/services" className="block py-3 font-semibold text-ink">Services</Link>
            <Link onClick={() => setMobileOpen(false)} href="/locations" className="block py-3 font-semibold text-ink">Locations</Link>
            <Link onClick={() => setMobileOpen(false)} href="/about" className="block py-3 font-semibold text-ink">About</Link>
            <Link onClick={() => setMobileOpen(false)} href="/reviews" className="block py-3 font-semibold text-ink">Reviews</Link>
            <Link onClick={() => setMobileOpen(false)} href="/faq" className="block py-3 font-semibold text-ink">FAQ</Link>
            <Link onClick={() => setMobileOpen(false)} href="/contact" className="block py-3 font-semibold text-ink">Contact</Link>
            <div className="pt-3 grid grid-cols-2 gap-2">
              <Button asChild variant="secondary" size="md"><a href={`tel:${PHONE_RAW}`}>Call Now</a></Button>
              <Button asChild size="md"><Link href="/get-a-quote">Free Quote</Link></Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
