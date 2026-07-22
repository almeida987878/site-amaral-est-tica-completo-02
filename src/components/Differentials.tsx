import type { LucideIcon } from "lucide-react";
import { ClipboardList, HeartHandshake, Home, Leaf, ShieldCheck, Sparkles } from "lucide-react";
import { Reveal } from "./ui/Reveal";

const differentials: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Sparkles,
    title: "Tecnologia avançada",
    description:
      "Recursos selecionados para proporcionar mais precisão, segurança e conforto durante os atendimentos.",
  },
  {
    icon: HeartHandshake,
    title: "Atendimento humanizado",
    description: "Você é ouvida, acolhida e acompanhada durante toda a sua experiência.",
  },
  {
    icon: ClipboardList,
    title: "Protocolos personalizados",
    description: "Cada atendimento é planejado de acordo com suas necessidades e seus objetivos.",
  },
  {
    icon: Leaf,
    title: "Resultados naturais",
    description: "Procedimentos pensados para valorizar sua beleza sem perder sua identidade.",
  },
  {
    icon: Home,
    title: "Ambiente acolhedor",
    description: "Um espaço planejado para proporcionar tranquilidade, conforto e privacidade.",
  },
  {
    icon: ShieldCheck,
    title: "Cuidado em todas as etapas",
    description: "Da avaliação inicial ao acompanhamento da evolução, cada detalhe recebe atenção.",
  },
];

export function Differentials() {
  return (
    <section className="bg-beige/60 py-24 lg:py-32">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="eyebrow">Diferenciais</span>
          <h2 className="balance mt-4 font-display text-3xl font-semibold text-espresso sm:text-4xl">
            Uma experiência de cuidado em cada detalhe.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {differentials.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <div className="group h-full border-t border-rosegold/40 pt-6 transition-all duration-450 hover:-translate-y-1 hover:border-gold-light">
                <item.icon
                  className="h-7 w-7 text-rosegold-dark transition-all duration-450 group-hover:text-gold-deep group-hover:drop-shadow-[0_0_10px_rgba(209,179,122,0.55)]"
                  strokeWidth={1.4}
                />
                <h3 className="mt-5 font-display text-xl text-espresso transition-transform duration-450 group-hover:translate-x-0.5">
                  {item.title}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-stone">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
