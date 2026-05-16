import type { Metadata } from "next";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = { title: "Terms of Service", description: "Terms governing the use of haulitoffaz.com and Haul It Off AZ services." };

export default function TermsPage() {
  return (
    <Section className="bg-white">
      <div className="max-w-3xl">
        <h1 className="font-display text-4xl md:text-5xl font-extrabold text-ink mb-6">Terms of Service</h1>
        <p className="text-sm text-muted mb-6">Last updated: 2026-05-16</p>
        <p className="text-ink mb-4">By using haulitoffaz.com or booking services with Haul It Off Junk Removal, you agree to the following terms.</p>
        <h2 className="font-display text-xl font-bold text-ink mt-8 mb-3">Service Quotes</h2>
        <p className="text-ink mb-4">Online quotes are estimates based on the information you provide. Final pricing is confirmed on-site before any work begins.</p>
        <h2 className="font-display text-xl font-bold text-ink mt-8 mb-3">Payment</h2>
        <p className="text-ink mb-4">Payment is due upon completion. We accept major credit cards, cash, check, Venmo, and Zelle.</p>
        <h2 className="font-display text-xl font-bold text-ink mt-8 mb-3">Items We Won't Accept</h2>
        <p className="text-ink mb-4">We cannot take hazardous waste, biohazards, asbestos, propane, gasoline, or wet paint. See our Items We Take page for full details.</p>
        <h2 className="font-display text-xl font-bold text-ink mt-8 mb-3">Cancellations</h2>
        <p className="text-ink mb-4">Please call as soon as possible to cancel or reschedule. We don't charge cancellation fees for reasonable notice.</p>
        <h2 className="font-display text-xl font-bold text-ink mt-8 mb-3">Contact</h2>
        <p className="text-ink">Questions about these terms? Call (520) 808-2268 or email Haulitoffaz@gmail.com.</p>
      </div>
    </Section>
  );
}
