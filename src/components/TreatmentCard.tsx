import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import type { Treatment } from "@/types";
import { buildWhatsappLink } from "@/lib/whatsapp";
import { ImagePlaceholder } from "./ui/ImagePlaceholder";
import { WhatsAppIcon } from "./ui/WhatsAppIcon";

type TreatmentCardProps = {
  treatment: Treatment;
  icon: LucideIcon;
};

export function TreatmentCard({ treatment, icon: Icon }: TreatmentCardProps) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-card border border-beige bg-white shadow-card transition-all duration-450 hover:-translate-y-1.5 hover:shadow-soft">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        {treatment.image ? (
          <Image
            src={treatment.image}
            alt={`Resultado real de ${treatment.name.toLowerCase()} na Clínica Renata Amaral`}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover transition-transform duration-600 group-hover:scale-105"
          />
        ) : (
          <ImagePlaceholder
            label={`Foto: ${treatment.name.toLowerCase()}`}
            tone="beige"
            className="h-full w-full transition-transform duration-600 group-hover:scale-105"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col p-7">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-beige text-rosegold-dark transition-colors duration-450 group-hover:bg-gold-light/20 group-hover:text-gold-deep">
          <Icon className="h-5 w-5" strokeWidth={1.6} />
        </span>
        <h3 className="mt-5 font-display text-xl text-espresso transition-transform duration-450 group-hover:translate-x-0.5">
          {treatment.name}
        </h3>
        <p className="mt-2.5 flex-1 font-body text-sm leading-relaxed text-stone">
          {treatment.description}
        </p>
        <div className="mt-6 flex items-center justify-between gap-3 border-t border-beige pt-5">
          <a
            href="#faq"
            className="gold-underline inline-flex items-center gap-1.5 font-body text-sm font-semibold text-rosegold-dark transition-colors hover:text-gold-deep"
          >
            Saiba mais
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-350 group-hover:translate-x-1" />
          </a>
          <a
            href={buildWhatsappLink(treatment.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Conversar no WhatsApp sobre ${treatment.name}`}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366]/10 text-[#128C4A] transition-colors hover:bg-[#25D366]/20"
          >
            <WhatsAppIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
