import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";
import { Reveal } from "./ui/Reveal";
import { Stats } from "./Stats";

const highlights = [
  "Atendimento individualizado",
  "Protocolos personalizados",
  "Ambiente acolhedor",
  "Cuidado em cada etapa",
  "Acompanhamento da evolução",
  "Busca por resultados naturais",
];

export function About() {
  return (
    <section id="sobre" className="bg-offwhite py-24 lg:py-32">
      <div className="mx-auto grid max-w-content gap-20 px-6 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10">
        <Reveal y={20}>
          <div className="relative mx-auto max-w-sm lg:mx-0">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-card">
              <Image
                src="/images/renata-amaral-retrato-2.jpeg"
                alt="Renata Amaral, especialista da Clínica Renata Amaral Estética Avançada"
                fill
                sizes="(min-width: 1024px) 24rem, 90vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-8 w-36 shrink-0 overflow-hidden rounded-soft border-4 border-offwhite shadow-card sm:w-44">
              <div className="relative aspect-square w-full">
                <Image
                  src="/images/recepcao-clinica.jpeg"
                  alt="Detalhe da recepção da clínica"
                  fill
                  sizes="11rem"
                  className="object-cover"
                />
              </div>
            </div>
            <span className="pointer-events-none absolute -left-6 -top-6 hidden h-24 w-24 rounded-full bg-rosegold/20 blur-xl sm:block" />
            <div className="absolute -left-4 bottom-10 hidden rounded-full bg-espresso px-5 py-2.5 shadow-soft sm:flex sm:items-center">
              <p className="font-body text-[0.65rem] font-medium uppercase tracking-[0.14em] text-beige">
                Estética, cuidado e naturalidade
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <span className="eyebrow">Sobre a clínica</span>
          <h2 className="balance mt-4 max-w-lg font-display text-3xl font-semibold leading-tight text-espresso sm:text-4xl">
            Cuidado, tecnologia e beleza em perfeita harmonia.
          </h2>
          <div className="mt-6 max-w-lg space-y-4 font-body text-[0.95rem] leading-relaxed text-stone">
            <p>
              Na Clínica Renata Amaral Estética Avançada, cada atendimento começa com uma
              análise cuidadosa das necessidades de cada cliente.
            </p>
            <p>
              Nosso propósito é proporcionar uma experiência acolhedora, segura e
              personalizada, utilizando técnicas e tecnologias voltadas para resultados
              naturais e para a valorização da beleza individual.
            </p>
          </div>

          <ul className="mt-8 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-2.5 font-body text-sm text-charcoal">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-rosegold-dark" strokeWidth={1.75} />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 max-w-lg">
            <Stats />
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine mt-10 inline-flex items-center rounded-full bg-espresso px-8 py-4 font-body text-sm font-semibold text-offwhite shadow-card transition-all duration-350 hover:scale-[1.02] hover:bg-ink"
          >
            Agendar uma avaliação
          </a>
        </Reveal>
      </div>
    </section>
  );
}
