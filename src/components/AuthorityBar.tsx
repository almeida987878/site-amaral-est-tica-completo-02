import { Gem, MapPin, Sparkles, Star, UserCheck } from "lucide-react";
import { contact } from "@/data/contact";

const items = [
  { icon: Star, label: `${contact.googleRating.toFixed(1)} no Google` },
  { icon: UserCheck, label: `${contact.googleReviewCount} avaliações` },
  { icon: Sparkles, label: "Atendimento personalizado" },
  { icon: Gem, label: "Estética avançada" },
  { icon: MapPin, label: "Localização no Sacomã – SP" },
];

export function AuthorityBar() {
  return (
    <section id="autoridade" className="border-b border-beige bg-offwhite">
      <div className="mx-auto grid max-w-content grid-cols-2 gap-y-6 px-6 py-8 sm:grid-cols-3 lg:flex lg:items-center lg:justify-between lg:gap-4 lg:px-10 lg:py-7">
        {items.map((item, index) => (
          <div
            key={item.label}
            className="flex items-center gap-2.5 lg:border-l lg:border-beige lg:pl-4 lg:first:border-l-0 lg:first:pl-0"
          >
            <item.icon className="h-4 w-4 shrink-0 text-rosegold-dark" strokeWidth={1.75} />
            <span className="font-body text-[0.8rem] font-medium tracking-wide text-charcoal sm:text-sm">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
