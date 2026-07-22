import { Instagram, MapPin } from "lucide-react";
import { contact } from "@/data/contact";
import { whatsappLink } from "@/lib/whatsapp";
import { Reveal } from "./ui/Reveal";
import { WhatsAppIcon } from "./ui/WhatsAppIcon";

export function Location() {
  const mapQuery = encodeURIComponent(contact.googleMapsQuery);
  const mapEmbedSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
  const mapDirectUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

  return (
    <section id="localizacao" className="bg-offwhite py-24 lg:py-32">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="eyebrow">Localização</span>
          <h2 className="balance mt-4 font-display text-3xl font-semibold text-espresso sm:text-4xl">
            Estamos no Sacomã, em São Paulo.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:items-stretch">
          <Reveal className="order-2 flex flex-col justify-between gap-8 rounded-card border border-beige bg-white p-8 shadow-card lg:order-1">
            <div>
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-beige text-rosegold-dark">
                <MapPin className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <p className="mt-5 font-body text-base font-medium text-espresso">
                {contact.addressLine1}
              </p>
              <p className="font-body text-base text-stone">{contact.addressLine2}</p>
              <p className="mt-3 font-body text-xs text-stone/80">{contact.plusCode}</p>
              <p className="mt-6 rounded-full bg-beige/70 px-4 py-2 text-center font-body text-xs font-medium text-stone">
                {contact.scheduleNote}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={mapDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-rosegold px-6 py-3.5 font-body text-sm font-semibold text-rosegold-dark transition-colors duration-350 hover:bg-rosegold hover:text-white"
              >
                Abrir no Google Maps
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine inline-flex items-center justify-center gap-2 rounded-full bg-rosegold px-6 py-3.5 font-body text-sm font-semibold text-white shadow-card transition-colors duration-350 hover:bg-rosegold-dark"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Agendar atendimento
              </a>
              <a
                href={contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-body text-sm font-medium text-stone transition-colors hover:text-rosegold-dark"
              >
                <Instagram className="h-4 w-4" strokeWidth={1.75} />
                {contact.instagramHandle}
              </a>
            </div>
          </Reveal>

          <Reveal
            delay={0.1}
            className="order-1 overflow-hidden rounded-card border border-beige shadow-soft lg:order-2"
          >
            <iframe
              title="Localização da Clínica Renata Amaral no Google Maps"
              src={mapEmbedSrc}
              className="h-80 w-full lg:h-full"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
