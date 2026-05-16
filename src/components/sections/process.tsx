import { Section, SectionHeader } from "@/components/ui/section";

const steps = [
  { n: "01", title: "Get a Free Quote", body: "Call us, text photos, or use the online form. We respond fast with a no-pressure estimate — usually within minutes." },
  { n: "02", title: "Pick a Time", body: "Same-day, next-day, or whenever fits your schedule. Two-hour arrival windows, real-time updates from the crew." },
  { n: "03", title: "Point. We Haul.", body: "Our two-person crew shows up on time, confirms the final price, and does all the lifting. You don't move a thing." },
  { n: "04", title: "Sweep & Done", body: "We sweep up, route donations and recyclables, and leave your space cleaner than we found it. Easy as that." },
];

export function Process() {
  return (
    <Section className="bg-navy text-white">
      <SectionHeader
        eyebrow="How It Works"
        title="From clutter to clean in 4 steps."
        description="No long forms, no weird quotes, no surprise charges. Just call and we'll handle the rest."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s) => (
          <div key={s.n} className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6">
            <div className="font-display text-5xl font-extrabold text-brand-light mb-3">{s.n}</div>
            <h3 className="text-lg font-bold mb-2">{s.title}</h3>
            <p className="text-sm text-white/75">{s.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
