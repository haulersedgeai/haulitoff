import type { Metadata } from "next";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = { title: "Privacy Policy", description: "How Haul It Off AZ collects, uses, and protects your information." };

export default function PrivacyPage() {
  return (
    <Section className="bg-white">
      <div className="max-w-3xl prose-sm">
        <h1 className="font-display text-4xl md:text-5xl font-extrabold text-ink mb-6">Privacy Policy</h1>
        <p className="text-sm text-muted mb-6">Last updated: 2026-05-16</p>
        <p className="text-ink mb-4">Haul It Off Junk Removal ("we", "us") operates haulitoffaz.com and provides junk removal services across Tucson and Southern Arizona. This policy explains what we collect and how we use it.</p>
        <h2 className="font-display text-xl font-bold text-ink mt-8 mb-3">Information We Collect</h2>
        <p className="text-ink mb-4">When you request a quote, we collect name, phone, email, service address, photos you provide, and any details about the job. Phone calls and texts may be logged.</p>
        <h2 className="font-display text-xl font-bold text-ink mt-8 mb-3">How We Use Information</h2>
        <ul className="list-disc pl-6 text-ink space-y-1">
          <li>To respond with a quote and schedule your service</li>
          <li>To coordinate the day-of pickup or job</li>
          <li>To send service-related follow-ups (we don't sell your data)</li>
        </ul>
        <h2 className="font-display text-xl font-bold text-ink mt-8 mb-3">Cookies & Analytics</h2>
        <p className="text-ink mb-4">We use basic analytics to understand site traffic. No personal information is sold to advertisers.</p>
        <h2 className="font-display text-xl font-bold text-ink mt-8 mb-3">Contact</h2>
        <p className="text-ink">Questions? Email Haulitoffaz@gmail.com or call (520) 808-2268.</p>
      </div>
    </Section>
  );
}
