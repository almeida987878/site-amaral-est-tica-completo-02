import { ChevronDown } from "lucide-react";
import { faqItems } from "@/data/faq";
import { Reveal } from "./ui/Reveal";

export function FAQ() {
  return (
    <section id="faq" className="bg-beige/50 py-24 lg:py-32">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="eyebrow">Perguntas frequentes</span>
          <h2 className="balance mt-4 font-display text-3xl font-semibold text-espresso sm:text-4xl">
            Tire suas dúvidas antes de agendar.
          </h2>
        </Reveal>

        <div className="mx-auto mt-14 max-w-2xl divide-y divide-rosegold/25">
          {faqItems.map((item, index) => (
            <Reveal key={item.question} delay={Math.min(index * 0.05, 0.3)}>
              <details className="group py-5">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-lg text-espresso transition-colors duration-350 group-open:text-gold-deep hover:text-gold-deep">
                  {item.question}
                  <ChevronDown
                    className="faq-chevron h-5 w-5 shrink-0 text-gold-mid"
                    strokeWidth={1.75}
                  />
                </summary>
                <p className="mt-3 max-w-xl font-body text-sm leading-relaxed text-stone">
                  {item.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
