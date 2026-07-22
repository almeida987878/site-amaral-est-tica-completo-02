"use client";

import { useState } from "react";
import Image from "next/image";
import { Eye, Instagram } from "lucide-react";
import { contact } from "@/data/contact";
import { Reveal } from "./ui/Reveal";
import { GalleryLightbox } from "./GalleryLightbox";

const items = [
  {
    category: "Recepção",
    image: "/images/recepcao-clinica.jpeg",
    ratio: "aspect-[3/4]",
  },
  {
    category: "Equipamentos",
    image: "/images/stock-laser-perna.jpeg",
    ratio: "aspect-[4/3]",
  },
  {
    category: "Sala de atendimento",
    image: "/images/sala-atendimento.jpg",
    ratio: "aspect-square",
  },
  {
    category: "Procedimentos",
    image: "/images/preenchimento-labial-glam.jpeg",
    ratio: "aspect-[3/4]",
  },
  {
    category: "Produtos",
    image: "/images/produtos-prateleira.jpg",
    ratio: "aspect-[4/5]",
  },
  {
    category: "Cuidados faciais",
    image: "/images/stock-seringa-testa.jpeg",
    ratio: "aspect-[4/5]",
  },
  {
    category: "Bastidores",
    image: "/images/logo-parede-dourado.jpeg",
    ratio: "aspect-[2/3]",
  },
  {
    category: "Atendimento",
    image: "/images/stock-massagem-ombros.jpeg",
    ratio: "aspect-[4/3]",
  },
];

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="bg-beige/50 py-24 lg:py-32">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="eyebrow inline-flex items-center gap-2">
            <span className="sparkle">✧</span>
            Galeria
          </span>
          <h2 className="balance mt-4 font-display text-3xl font-semibold text-espresso sm:text-4xl">
            Bastidores de um cuidado pensado em cada detalhe.
          </h2>
        </Reveal>

        <div className="mt-14 columns-2 gap-4 sm:columns-3 sm:gap-5 lg:columns-4">
          {items.map((item, index) => (
            <Reveal
              key={item.category}
              delay={Math.min(index * 0.06, 0.36)}
              variant="image"
              className="mb-4 break-inside-avoid sm:mb-5"
            >
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`group relative block w-full ${item.ratio} overflow-hidden rounded-soft text-left shadow-card transition-shadow duration-450 hover:shadow-soft`}
              >
                <Image
                  src={item.image}
                  alt={item.category}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.08]"
                />
                <span className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-ink/0 opacity-0 transition-all duration-450 group-hover:bg-ink/45 group-hover:opacity-100">
                  <Eye className="h-5 w-5 text-white" strokeWidth={1.5} />
                  <span className="font-body text-xs font-medium uppercase tracking-[0.14em] text-white">
                    {item.category}
                  </span>
                </span>
                <span className="pointer-events-none absolute inset-0 rounded-soft ring-1 ring-inset ring-white/0 transition-all duration-450 group-hover:ring-gold-light/40" />
              </button>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href={contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine inline-flex items-center gap-2 rounded-full bg-espresso px-7 py-3.5 font-body text-sm font-semibold text-offwhite shadow-card transition-colors duration-350 hover:bg-ink"
          >
            <Instagram className="h-4 w-4" strokeWidth={1.75} />
            Acompanhe nossos resultados no Instagram
          </a>
        </div>
      </div>

      <GalleryLightbox
        items={items}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </section>
  );
}
