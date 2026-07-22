import { BadgeCheck } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { contact } from "@/data/contact";
import { Reveal } from "./ui/Reveal";
import { StarRating } from "./ui/StarRating";

export function Testimonials() {
  return (
    <section id="avaliacoes" className="bg-beige/60 py-24 lg:py-36">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="eyebrow">Depoimentos</span>
          <h2 className="balance mt-4 font-display text-3xl font-semibold text-espresso sm:text-4xl">
            O que nossas clientes dizem.
          </h2>
          <div className="glass-light mt-5 inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 shadow-card">
            <StarRating rating={contact.googleRating} size={15} />
            <span className="font-body text-xs font-semibold text-charcoal">
              {contact.googleRating.toFixed(1)} no Google · {contact.googleReviewCount} avaliações
            </span>
          </div>
        </Reveal>

        <div className="mt-20 flex snap-x snap-mandatory gap-8 overflow-x-auto pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0">
          {testimonials.map((testimonial, index) => (
            <Reveal
              key={`${testimonial.name}-${index}`}
              delay={index * 0.08}
              variant="scale"
              className="min-w-[85%] shrink-0 snap-center sm:min-w-[60%] lg:min-w-0"
            >
              <div className="group relative flex h-full flex-col overflow-hidden rounded-card bg-white px-8 py-10 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-soft">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-2 -top-8 select-none font-display text-[7rem] leading-none text-rosegold/10"
                >
                  “
                </span>
                <p className="relative flex-1 font-display text-xl italic leading-relaxed text-charcoal">
                  {testimonial.quote}
                </p>
                <div className="relative mt-8 flex items-center gap-3 border-t border-beige pt-6">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-beige font-body text-xs font-semibold text-rosegold-dark">
                    {testimonial.initials}
                  </span>
                  <div>
                    <p className="font-body text-sm font-semibold text-espresso">
                      {testimonial.name}
                    </p>
                    <div className="mt-1 flex items-center gap-1.5">
                      <StarRating rating={5} size={12} />
                      <BadgeCheck className="h-3.5 w-3.5 text-gold-mid" strokeWidth={1.75} />
                      <span className="font-body text-[0.65rem] text-stone">Google</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
