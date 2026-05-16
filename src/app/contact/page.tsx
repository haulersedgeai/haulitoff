import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/ui/social-icons";
import { Section } from "@/components/ui/section";
import { QuoteForm } from "@/components/quote-form";
import { PHONE_DISPLAY, PHONE_RAW, EMAIL, ADDRESS, FB_URL, IG_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact — Tucson Junk Removal | Haul It Off AZ",
  description: "Call, text, or message us for fast junk removal across Tucson and Southern Arizona. Open 7 days a week. (520) 808-2268.",
};

export default function ContactPage() {
  return (
    <>
      <Section className="bg-cream pt-12 pb-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-brand mb-3">Get in Touch</p>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold text-ink mb-4 text-balance">Talk to a real person, fast.</h1>
          <p className="text-lg text-muted">Call, text, email, or fill out the form. Most quotes turn around in under an hour — most jobs are scheduled same-day.</p>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <a href={`tel:${PHONE_RAW}`} className="flex items-start gap-4 p-6 rounded-xl border border-border hover:border-brand hover:shadow-md transition-all bg-white">
              <Phone className="h-6 w-6 text-brand mt-1" />
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-muted">Phone</div>
                <div className="text-2xl font-bold text-ink">{PHONE_DISPLAY}</div>
                <p className="text-sm text-muted">Call or text — we answer 7 days a week.</p>
              </div>
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-start gap-4 p-6 rounded-xl border border-border hover:border-brand hover:shadow-md transition-all bg-white">
              <Mail className="h-6 w-6 text-brand mt-1" />
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-muted">Email</div>
                <div className="text-lg font-bold text-ink">{EMAIL}</div>
                <p className="text-sm text-muted">For estimates, paperwork, and PM coordination.</p>
              </div>
            </a>
            <div className="flex items-start gap-4 p-6 rounded-xl border border-border bg-white">
              <MapPin className="h-6 w-6 text-brand mt-1" />
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-muted">Address</div>
                <div className="text-lg font-bold text-ink">{ADDRESS}</div>
                <p className="text-sm text-muted">Mailing address — we come to you for every job.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 rounded-xl border border-border bg-white">
              <Clock className="h-6 w-6 text-brand mt-1" />
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-muted">Hours</div>
                <div className="text-lg font-bold text-ink">Open 7 Days a Week</div>
                <p className="text-sm text-muted">7:00 AM – 7:00 PM · Same-day & after-hours by request</p>
              </div>
            </div>
            <div className="flex gap-3">
              <a href={FB_URL} target="_blank" rel="noopener" aria-label="Facebook" className="p-3 rounded-full bg-cream hover:bg-brand hover:text-white transition-colors text-navy"><FacebookIcon className="h-5 w-5" /></a>
              <a href={IG_URL} target="_blank" rel="noopener" aria-label="Instagram" className="p-3 rounded-full bg-cream hover:bg-brand hover:text-white transition-colors text-navy"><InstagramIcon className="h-5 w-5" /></a>
            </div>
          </div>
          <QuoteForm />
        </div>
      </Section>
    </>
  );
}
