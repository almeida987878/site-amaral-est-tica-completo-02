import { Sparkles } from "lucide-react";
import { Reveal } from "./ui/Reveal";

const highlights = [
  "Recepção pensada para acolher",
  "Ambiente reservado e privativo",
  "Identidade visual cuidada em cada detalhe",
];

export function Space() {
  return (
    <section id="espaco" className="bg-beige/40 py-24 lg:py-32">
      <div className="mx-auto grid max-w-content gap-16 px-6 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10">
        <Reveal>
          <span className="eyebrow">Nosso espaço</span>
          <h2 className="balance mt-4 max-w-lg font-display text-3xl font-semibold leading-tight text-espresso sm:text-4xl">
            Um ambiente pensado para o seu conforto.
          </h2>
          <p className="mt-6 max-w-lg font-body text-[0.95rem] leading-relaxed text-stone">
            Da recepção ao consultório, cada detalhe do espaço da Clínica Renata Amaral
            Estética Avançada foi planejado para receber você com tranquilidade, privacidade
            e cuidado — desde o primeiro momento em que você chega.
          </p>

          <ul className="mt-8 flex flex-col gap-3">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2.5 font-body text-sm text-charcoal"
              >
                <Sparkles className="h-4 w-4 shrink-0 text-rosegold-dark" strokeWidth={1.75} />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} y={20}>
          <div className="relative mx-auto max-w-sm lg:mx-0 lg:ml-auto">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-card">
              <video
                src="/videos/recepcao-clinica.mp4"
                autoPlay
                loop
                muted
                playsInline
                aria-label="Recepção da Clínica Renata Amaral Estética Avançada"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-8 w-32 shrink-0 overflow-hidden rounded-soft border-4 border-offwhite shadow-card sm:w-40">
              <div className="relative aspect-[3/4] w-full">
                <video
                  src="/videos/logo-parede.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  aria-label="Identidade visual da Clínica Renata Amaral Estética Avançada"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
            <span className="pointer-events-none absolute -right-6 -top-6 hidden h-24 w-24 rounded-full bg-gold/15 blur-xl sm:block" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
