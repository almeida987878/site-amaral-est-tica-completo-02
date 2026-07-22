import { whatsappLink } from "@/lib/whatsapp";
import { Reveal } from "./ui/Reveal";
import { RevealText } from "./ui/RevealText";
import { WaveDivider } from "./ui/WaveDivider";

const headlineWords = [
  { text: "Sua" },
  { text: "autoestima" },
  { text: "merece" },
  { text: "esse", emphasis: true },
  { text: "cuidado.", emphasis: true },
];

export function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-rosegold-dark via-espresso to-ink py-28 lg:py-36">
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-rosegold/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-16 h-80 w-80 rounded-full bg-gold-light/15 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-[100px]" />

      <div className="relative mx-auto max-w-content px-6 text-center lg:px-10">
        <Reveal>
          <span className="sparkle mx-auto block text-2xl text-gold-light">✦</span>
          <RevealText
            words={headlineWords}
            as="h2"
            className="balance mx-auto mt-4 max-w-2xl font-display text-3xl font-semibold text-white sm:text-4xl lg:text-5xl"
            emphasisClassName="italic text-gold-light"
          />
          <span className="mx-auto mt-6 block h-px w-16 bg-gradient-to-r from-transparent via-gold-light to-transparent" />
          <p className="mx-auto mt-6 max-w-lg font-body text-base font-light text-white/85">
            Agende uma avaliação e descubra quais cuidados podem ser mais indicados para você.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine mt-9 inline-flex items-center rounded-full bg-white px-10 py-5 font-body text-base font-semibold text-espresso shadow-soft transition-transform duration-350 hover:scale-[1.03]"
          >
            Agendar pelo WhatsApp
          </a>
          <p className="mt-4 font-body text-sm text-white/70">Fale diretamente com nossa equipe.</p>
          <p className="mt-8 font-body text-xs uppercase tracking-[0.14em] text-white/60">
            Atendimentos realizados com horário reservado.
          </p>
        </Reveal>
      </div>

      <WaveDivider fill="#FAF8F6" />
    </section>
  );
}
