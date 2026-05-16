import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/ui/section";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Gallery — Tucson Junk Removal & Demolition Photos",
  description: "Real photos from real Tucson jobs — junk removal, cleanouts, shed and hot tub demolitions across Pima County.",
};

const images = [
  { src: "/images/HO-AZ-truck-2880w.png", alt: "Haul It Off truck", label: "Our truck on the road in Tucson" },
  { src: "/images/HO1-1920w.png", alt: "Cleanout crew", label: "Garage cleanout crew" },
  { src: "/images/HO2-1920w.png", alt: "Hauling job", label: "Loading up a full load" },
  { src: "/images/HO5-1920w.png", alt: "Appliance removal", label: "Appliance removal job" },
  { src: "/images/Before-1920w.png", alt: "Before cleanout", label: "Before: full garage cleanout" },
  { src: "/images/After-1920w.png", alt: "After cleanout", label: "After: same garage, hours later" },
  { src: "/images/Junk-1920w.png", alt: "Junk pile", label: "Junk pile, ready for removal" },
  { src: "/images/Dumpster_HO-1920w.png", alt: "Dumpster service", label: "Commercial removal" },
  { src: "/images/hot-tub-removal-1920w.jpg", alt: "Hot tub removal", label: "Hot tub tear-down" },
  { src: "/images/HO2-f21be245-1920w.png", alt: "Shed demolition", label: "Shed demolition" },
  { src: "/images/HO4-9e55c51e-1920w.png", alt: "Demolition", label: "Light demolition" },
  { src: "/images/IMG_1269-1920w.jpg", alt: "Job photo", label: "On the job" },
  { src: "/images/IMG_1270-1920w.jpg", alt: "Job photo", label: "Mattress and furniture pickup" },
  { src: "/images/IMG_1271-1920w.jpg", alt: "Job photo", label: "Cleanout in progress" },
  { src: "/images/IMG_1272-1920w.jpg", alt: "Job photo", label: "Wrapping up a job" },
  { src: "/images/Desert-1920w.png", alt: "Desert backdrop", label: "Yard waste hauling" },
  { src: "/images/Screenshot_2025-11-07_at_8.34.42-PM-1920w.png", alt: "Interior demo", label: "Interior demo prep" },
  { src: "/images/Screenshot_2025-11-07_at_8.37.04-PM-1920w.png", alt: "Interior demo", label: "Bathroom tear-out" },
];

export default function GalleryPage() {
  return (
    <>
      <Section className="bg-cream pt-12 pb-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-brand mb-3">Gallery</p>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold text-ink mb-4 text-balance">Real jobs. Real photos.</h1>
          <p className="text-lg text-muted">Before, after, and everything in between — straight from Tucson driveways.</p>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img) => (
            <div key={img.src} className="group relative aspect-square overflow-hidden rounded-xl bg-cream">
              <Image src={img.src} alt={img.alt} fill className="object-cover group-hover:scale-105 transition-transform" sizes="(min-width: 1024px) 25vw, 50vw" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-xs font-semibold text-white">{img.label}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
