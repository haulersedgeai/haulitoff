import { Shield, Star, Recycle, Calendar, MapPin, Users } from "lucide-react";

const items = [
  { icon: Shield, label: "Licensed & Insured" },
  { icon: Users, label: "Veteran & Family Owned" },
  { icon: Star, label: "5-Star Local Reviews" },
  { icon: Calendar, label: "Open 7 Days a Week" },
  { icon: Recycle, label: "80%+ Recycled or Donated" },
  { icon: MapPin, label: "Serving All of Pima County" },
];

export function TrustBar() {
  return (
    <div className="bg-cream border-y border-border">
      <div className="container-x py-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-2 text-sm font-semibold text-ink">
            <item.icon className="h-5 w-5 text-brand shrink-0" />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
