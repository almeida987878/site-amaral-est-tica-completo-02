import {
  ClipboardCheck,
  Droplet,
  Droplets,
  Eraser,
  HandHeart,
  Layers,
  ScanFace,
  Sparkle,
  Sparkles,
  Syringe,
  Wind,
  Waves,
  Zap,
} from "lucide-react";
import { confirmedTreatments } from "@/data/treatments";
import { Reveal } from "./ui/Reveal";
import { TreatmentCard } from "./TreatmentCard";

const icons = {
  "depilacao-a-laser": Zap,
  "estetica-facial": Sparkle,
  massagem: HandHeart,
  "avaliacao-personalizada": ClipboardCheck,
  preenchimento: Droplet,
  "limpeza-de-pele": Droplets,
  "massagem-modeladora": Waves,
  "drenagem-linfatica": Wind,
  botox: Syringe,
  bioestimuladores: Sparkles,
  peelings: Layers,
  "harmonizacao-facial": ScanFace,
  "remocao-de-tatuagem-a-laser": Eraser,
} as const;

export function Treatments() {
  return (
    <section id="tratamentos" className="bg-offwhite py-24 lg:py-32">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="eyebrow">Tratamentos</span>
          <h2 className="balance mt-4 font-display text-3xl font-semibold text-espresso sm:text-4xl">
            Tratamentos pensados para valorizar a sua beleza.
          </h2>
          <p className="mt-4 font-body text-[0.95rem] leading-relaxed text-stone">
            Cada protocolo é definido de forma personalizada, considerando suas necessidades,
            objetivos e características individuais.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {confirmedTreatments.map((treatment, index) => (
            <Reveal key={treatment.slug} delay={Math.min(index * 0.06, 0.4)}>
              <TreatmentCard
                treatment={treatment}
                icon={icons[treatment.slug as keyof typeof icons]}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
