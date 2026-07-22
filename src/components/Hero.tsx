"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";
import { contact } from "@/data/contact";
import { StarRating } from "./ui/StarRating";
import { RevealText } from "./ui/RevealText";
import { GoldParticles } from "./ui/GoldParticles";
import { WaveDivider } from "./ui/WaveDivider";

const trustPoints = [
  "Atendimento humanizado",
  "Procedimentos realizados com cuidado",
  "Equipamentos modernos",
];

const headlineWords = [
  { text: "Realce" },
  { text: "sua" },
  { text: "beleza", emphasis: true },
  { text: "com" },
  { text: "tecnologia," },
  { text: "segurança" },
  { text: "e" },
  { text: "resultados" },
  { text: "reais." },
];

const buttonGroup = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.9 } },
};

const buttonItem = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, 60]);

  return (
    <section id="inicio" ref={sectionRef} className="relative overflow-hidden bg-ink">
      <div className="grid lg:min-h-[100svh] lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative order-1 h-[64vh] overflow-hidden sm:h-[70vh] lg:order-2 lg:h-auto"
        >
          <span className="glow-behind" />
          <motion.div style={{ y: photoY }} className="absolute inset-0 scale-110">
            <Image
              src="/images/renata-amaral-retrato.jpeg"
              alt="Renata Amaral, especialista da Clínica Renata Amaral Estética Avançada"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[center_18%]"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/5 to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-ink/25" />
          <GoldParticles className="absolute inset-0" />

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="glass absolute inset-x-5 bottom-5 flex items-center justify-between gap-3 rounded-card px-5 py-4 sm:inset-x-8 sm:bottom-8 lg:inset-x-10 lg:bottom-10"
          >
            <div>
              <p className="font-display text-base text-white sm:text-lg">
                {contact.specialistName}
              </p>
              <p className="mt-0.5 font-body text-xs font-light text-white/80">
                Cuidado personalizado em cada atendimento
              </p>
            </div>
            <StarRating rating={contact.googleRating} size={13} />
          </motion.div>
        </motion.div>

        <div className="relative order-2 flex flex-col justify-center overflow-hidden bg-gradient-to-br from-ink via-espresso to-ink px-6 py-16 lg:order-1 lg:px-14 lg:py-20 xl:px-16">
          <span className="pointer-events-none absolute -left-16 top-0 h-64 w-64 rounded-full bg-rosegold/15 blur-3xl" />
          <span className="pointer-events-none absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-gold/10 blur-3xl" />

          <div className="relative max-w-xl">
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="eyebrow inline-flex items-center gap-2 !text-white/80"
            >
              <span className="sparkle text-gold-light">✦</span>
              Estética avançada · Sacomã, São Paulo
            </motion.span>

            <RevealText
              words={headlineWords}
              as="h1"
              className="balance mt-5 font-display text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-[3.4rem]"
              emphasisClassName="font-medium italic text-gold-light"
            />

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-md font-body text-base font-light leading-relaxed text-white/85 sm:text-lg"
            >
              Tratamentos personalizados para quem deseja elevar sua autoestima por meio da
              estética avançada, com cuidado, precisão e naturalidade.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={buttonGroup}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <motion.a
                variants={buttonItem}
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine group relative inline-flex items-center rounded-full bg-rosegold px-8 py-4 font-body text-sm font-semibold text-white shadow-soft transition-transform duration-350 hover:scale-[1.03]"
              >
                <span className="relative z-10">Agendar avaliação</span>
              </motion.a>
              <motion.a
                variants={buttonItem}
                href="#tratamentos"
                className="inline-flex items-center rounded-full border border-white/40 px-8 py-4 font-body text-sm font-semibold text-white transition-colors duration-350 hover:border-gold-light hover:bg-white/10"
              >
                Conheça os tratamentos
              </motion.a>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3"
            >
              {trustPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2 font-body text-sm text-white/85"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-gold-light" strokeWidth={2} />
                  {point}
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="glass mt-8 inline-flex items-center gap-3 rounded-full py-2.5 pl-3 pr-5"
            >
              <StarRating rating={contact.googleRating} size={14} />
              <span className="font-body text-xs font-medium text-white/90">
                {contact.googleRating.toFixed(1)} estrelas · {contact.googleReviewCount} avaliações
                no Google
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-4 hidden justify-center lg:flex">
        <a
          href="#autoridade"
          aria-label="Rolar para baixo"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white/80 transition-colors duration-350 hover:border-gold-light animate-bounce"
        >
          <ChevronDown className="h-5 w-5" />
        </a>
      </div>

      <WaveDivider fill="#FAF8F6" />
    </section>
  );
}
