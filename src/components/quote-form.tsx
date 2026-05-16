"use client";
import { useActionState } from "react";
import { submitQuote, type QuoteState } from "@/app/actions/quote";
import { Button } from "@/components/ui/button";
import { services } from "@/content/services";
import { CheckCircle2, AlertCircle } from "lucide-react";

export function QuoteForm() {
  const [state, action, pending] = useActionState<QuoteState, FormData>(submitQuote, null);

  if (state?.ok) {
    return (
      <div className="bg-white rounded-xl p-8 border-2 border-brand text-center">
        <CheckCircle2 className="h-12 w-12 text-brand mx-auto mb-3" />
        <h3 className="text-2xl font-bold text-ink mb-2">Quote received!</h3>
        <p className="text-muted">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={action} className="bg-white rounded-xl p-6 md:p-8 border border-border shadow-sm space-y-4">
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label="Name *"><input name="name" required className="input" placeholder="Jane Doe" /></Field>
        <Field label="Phone *"><input name="phone" required type="tel" className="input" placeholder="(520) 555-0123" /></Field>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label="Email"><input name="email" type="email" className="input" placeholder="you@example.com" /></Field>
        <Field label="Address / Area"><input name="address" className="input" placeholder="Neighborhood or full address" /></Field>
      </div>
      <Field label="Service Needed">
        <select name="service" className="input" defaultValue="">
          <option value="" disabled>Choose a service</option>
          <optgroup label="Junk Removal">{services.filter((s) => s.category === "junk-removal").map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}</optgroup>
          <optgroup label="Clean Outs">{services.filter((s) => s.category === "clean-outs").map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}</optgroup>
          <optgroup label="Demolition">{services.filter((s) => s.category === "demolition").map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}</optgroup>
          <option value="Other">Other / Not sure</option>
        </select>
      </Field>
      <Field label="Tell us what you've got"><textarea name="message" rows={4} className="input" placeholder="Couch, two chairs, lots of yard waste from monsoon..." /></Field>
      <Field label="Photos (optional, up to 5)">
        <input name="photos" type="file" multiple accept="image/*" className="input" />
        <p className="text-xs text-muted mt-1">Photos make quotes faster and more accurate.</p>
      </Field>

      {state?.ok === false && (
        <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 border border-red-200 p-3 rounded-lg">
          <AlertCircle className="h-4 w-4" /> {state.message}
        </div>
      )}

      <Button type="submit" size="lg" disabled={pending} className="w-full">
        {pending ? "Sending..." : "Get My Free Quote"}
      </Button>
      <p className="text-xs text-muted text-center">No spam. We'll text or call back fast.</p>

      <style>{`.input { width: 100%; border: 1px solid #E5E7EB; background: white; border-radius: 0.5rem; padding: 0.625rem 0.875rem; font-size: 0.875rem; color: #1A1A2E; outline: none; transition: border 0.15s; } .input:focus { border-color: #EB6E14; box-shadow: 0 0 0 3px rgba(235,110,20,0.1); }`}</style>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-ink mb-1.5 block">{label}</span>
      {children}
    </label>
  );
}
