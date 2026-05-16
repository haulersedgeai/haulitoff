import type { Metadata } from "next";
import { Star, Quote } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Reviews — Tucson's 5-Star Junk Removal Crew",
  description: "Real reviews from real Tucson customers. 5-star service across Tucson, Oro Valley, Marana, Vail, and Sahuarita.",
};

const reviews = [
  { name: "Jennie A.", area: "Tucson", text: "Recently I had the pleasure of using this junk removal service. Arrived exactly when they said they would, were extremely professional, polite, efficient, trustworthy, and handled everything with great care. Plus, they were very pleasant to deal with — making the whole process smooth and stress-free. I HIGHLY recommend their service to anyone in need of junk removal. A+" },
  { name: "Kimberly V.", area: "Tucson", text: "We are so impressed with Haul It Off Junk Removal! Abraham and Ivan were friendly and efficient! From the first phone call to the completion of the job, communication and professionalism were top-notch! They managed to get us on their schedule the next day, which was incredibly helpful as we were in the middle of packing up for an out-of-state move. Their help eliminated a lot of stress for us at a very fair price." },
  { name: "Paul C.", area: "Oro Valley", text: "Abraham and his crew at Haul It Off Junk Removal are great! I've used them twice over the last three months and they do a great job navigating the job requirements and completing the job at hand. They're very professional and I highly recommend them." },
  { name: "Stephen G.", area: "Marana", text: "We were left with a complete disaster when people moved out of a rental. Overwhelming mess that would have taken me months to get rid of. Abraham and his crew had it done in a day. I cannot tell you how relieved we were. Personable, caring, and extremely hard working crew. Great job guys." },
  { name: "Lee F.", area: "Tucson", text: "Abraham and his teammate hauled away everything I needed out of my apartment efficiently and took the utmost care in making sure to confirm all items before they took them. They even moved my furniture to the new place (2nd-floor apartment). They were kind, fast, and thorough. 10+ out of 10 would recommend!" },
  { name: "Millie L.", area: "Sahuarita", text: "100% recommend these guys! They are quick and so very kind. They are extremely reasonable with their pricing too! 2nd time having some junk and trash picked up and will continue using their pickup service. UPDATE: AMAZING as always! These guys go ABOVE & BEYOND!! Loyal customer here!" },
  { name: "Ivan V.", area: "Tucson", text: "Amazing experience with Haul It Off Junk Removal. They provided outstanding customer service, time, manners, and their team is excellent. They'll provide any information you need with no issue. I'd recommend for any type of junk removal and/or demolition projects." },
  { name: "Kiley H.", area: "Vail", text: "These guys came and completely TORE UP what they needed to get done on a short notice! Reasonably priced and super friendly! 10/10!" },
];

export default function ReviewsPage() {
  return (
    <>
      <Section className="bg-cream pt-12 pb-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-brand mb-3">Reviews</p>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold text-ink mb-4 text-balance">100+ five-star Tucson neighbors.</h1>
          <p className="text-lg text-muted">Here's what real customers say after we leave their place cleaner than we found it.</p>
        </div>
      </Section>

      <Section className="bg-white">
        <SectionHeader eyebrow="Real Reviews" title="What Tucson is saying." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-cream rounded-xl p-7 border border-border relative">
              <Quote className="absolute top-5 right-5 h-8 w-8 text-brand/20" />
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-brand text-brand" />)}
              </div>
              <p className="text-ink leading-relaxed mb-4">{r.text}</p>
              <p className="text-sm font-bold text-navy">— {r.name} · {r.area}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBanner title="Be our next 5-star review." />
    </>
  );
}
