import { Star, Quote } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";

const reviews = [
  { name: "Jennie A.", text: "Arrived exactly when they said they would. Extremely professional, polite, efficient, and trustworthy — handled everything with great care. Pleasant to deal with the whole way. HIGHLY recommend. A+" },
  { name: "Kimberly V.", text: "Abraham and Ivan were friendly and efficient! From the first phone call to job completion, communication was top-notch. They got us on their schedule the next day during an out-of-state move. Very fair price." },
  { name: "Paul C.", text: "I've used Haul It Off twice in the last three months. They navigate the job requirements great, complete the job at hand, and are very professional. Highly recommend." },
  { name: "Stephen G.", text: "We were left with a complete disaster after a rental move-out. Overwhelming mess. Abraham and his crew had it done in a day. Personable, caring, and extremely hard working." },
  { name: "Lee F.", text: "Hauled everything I needed out efficiently and took the utmost care to confirm all items before they took them. Even moved my furniture to the new place (2nd-floor apartment). Kind, fast, thorough. 10+ out of 10!" },
  { name: "Millie L.", text: "100% recommend. Quick and so very kind. Extremely reasonable pricing. 2nd time using their pickup. AMAZING as always — they go ABOVE & BEYOND. Loyal customer!" },
];

export function Testimonials() {
  return (
    <Section className="bg-cream">
      <SectionHeader
        eyebrow="Real Tucson Reviews"
        title="5 stars, again and again."
        description="What our Tucson neighbors say after we leave their place cleaner than we found it."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <div key={r.name} className="bg-white rounded-xl p-6 shadow-sm border border-border relative">
            <Quote className="absolute top-4 right-4 h-8 w-8 text-brand/20" />
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-brand text-brand" />)}
            </div>
            <p className="text-sm text-ink leading-relaxed mb-4">{r.text}</p>
            <p className="text-sm font-bold text-navy">— {r.name}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
