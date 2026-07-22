import Image from "next/image";
import { Instagram } from "lucide-react";
import { contact } from "@/data/contact";
import { Reveal } from "./ui/Reveal";

const results = [
  {
    src: "/images/resultado-nariz-1.jpeg",
    alt: "Resultado real de preenchimento facial, antes e depois",
  },
  {
    src: "/images/resultado-nariz-2.jpeg",
    alt: "Resultado real de preenchimento facial, antes e depois",
  },
  {
    src: "/images/resultado-facial-1.jpeg",
    alt: "Resultado real de harmonização facial, antes e depois",
  },
  {
    src: "/images/preenchimento-labial-2.jpeg",
    alt: "Resultado real de preenchimento labial, antes e depois",
  },
  {
    src: "/images/resultado-labial-perfil.jpeg",
    alt: "Resultado real de preenchimento labial, antes e depois",
  },
  {
    src: "/images/resultado-botox-testa.jpeg",
    alt: "Resultado real de Botox na testa, antes e depois",
  },
];

export function BeforeAfterSlider() {
  return (
    <section id="resultados" className="bg-offwhite py-24 lg:py-32">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="eyebrow">Resultados</span>
          <h2 className="balance mt-4 font-display text-3xl font-semibold text-espresso sm:text-4xl">
            Resultados que podem ser percebidos nos detalhes.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {results.map((result, index) => (
            <Reveal
              key={result.src}
              delay={index * 0.08}
              className="group relative aspect-[3/4] overflow-hidden rounded-card shadow-card"
            >
              <Image
                src={result.src}
                alt={result.alt}
                fill
                sizes="(min-width: 1024px) 22vw, 45vw"
                className="object-cover transition-transform duration-600 group-hover:scale-105"
              />
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-lg text-center font-body text-xs leading-relaxed text-stone">
          Os resultados podem variar de acordo com as características, hábitos e organismo de
          cada pessoa. Imagens reais de antes e depois, divulgadas com autorização da clínica.
        </p>

        <div className="mt-8 flex justify-center">
          <a
            href={contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-rosegold px-7 py-3.5 font-body text-sm font-semibold text-rosegold-dark transition-colors duration-350 hover:bg-rosegold hover:text-white"
          >
            <Instagram className="h-4 w-4" strokeWidth={1.75} />
            Ver mais resultados no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
