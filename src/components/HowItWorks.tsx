import { CalendarCheck, ClipboardList, Sparkles, TrendingUp } from "lucide-react";
import { Reveal } from "./ui/Reveal";

const steps = [
  {
    number: "01",
    icon: CalendarCheck,
    title: "Agende sua avaliação",
    description: "Escolha o melhor momento e fale diretamente com a equipe pelo WhatsApp.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Receba uma análise personalizada",
    description: "Converse sobre suas necessidades, expectativas e objetivos.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Realize o tratamento indicado",
    description: "O atendimento é conduzido com cuidado, atenção e segurança.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Acompanhe sua evolução",
    description: "Receba orientações e acompanhe a evolução dos seus resultados.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-offwhite py-24 lg:py-32">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="eyebrow">Como funciona</span>
          <h2 className="balance mt-4 font-display text-3xl font-semibold text-espresso sm:text-4xl">
            Seu cuidado começa com uma avaliação.
          </h2>
        </Reveal>

        <div className="relative mt-20">
          <div className="absolute left-8 top-6 hidden h-[calc(100%-3rem)] w-px bg-gradient-to-b from-transparent via-gold-light/50 to-transparent lg:left-0 lg:top-8 lg:h-px lg:w-full lg:bg-gradient-to-r lg:block" />
          <div className="grid gap-12 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, index) => (
              <Reveal
                key={step.number}
                delay={index * 0.1}
                className="group relative flex gap-5 lg:flex-col lg:gap-0"
              >
                <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-rosegold bg-offwhite shadow-card transition-all duration-450 group-hover:border-gold-light group-hover:shadow-soft">
                  <step.icon
                    className="h-6 w-6 text-rosegold-dark transition-colors duration-450 group-hover:text-gold-deep"
                    strokeWidth={1.5}
                  />
                </div>
                <div className="lg:mt-6">
                  <span className="font-display text-sm italic text-gold-deep">
                    {step.number}
                  </span>
                  <h3 className="mt-1 font-display text-lg text-espresso lg:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-xs font-body text-sm leading-relaxed text-stone">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
