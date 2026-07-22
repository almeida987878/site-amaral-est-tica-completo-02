import { Instagram } from "lucide-react";
import { contact } from "@/data/contact";
import { footerLinks } from "@/data/nav";
import { whatsappLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./ui/WhatsAppIcon";

export function Footer() {
  return (
    <footer className="bg-ink py-16 text-offwhite/80">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-rosegold/50 font-display text-lg italic text-offwhite">
                {contact.monogram}
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-display text-base text-offwhite">{contact.brand}</span>
                <span className="font-body text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-rosegold">
                  {contact.brandSuffix}
                </span>
              </span>
            </div>
            <p className="mt-6 max-w-xs font-body text-sm leading-relaxed text-offwhite/60">
              Estética avançada com cuidado, tecnologia e naturalidade no Sacomã, São Paulo.
            </p>
          </div>

          <div>
            <h3 className="eyebrow !text-rosegold/80">Contato</h3>
            <ul className="mt-4 space-y-3 font-body text-sm">
              <li>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  {contact.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Instagram className="h-4 w-4" strokeWidth={1.75} />
                  {contact.instagramHandle}
                </a>
              </li>
            </ul>
            <p className="mt-5 font-body text-sm leading-relaxed text-offwhite/60">
              {contact.addressLine1}
              <br />
              {contact.addressLine2}
            </p>
          </div>

          <div>
            <h3 className="eyebrow !text-rosegold/80">Links rápidos</h3>
            <ul className="mt-4 space-y-3 font-body text-sm">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow !text-rosegold/80">Horário</h3>
            <p className="mt-4 max-w-[20ch] font-body text-sm leading-relaxed text-offwhite/60">
              {contact.scheduleNote}
            </p>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-center font-body text-xs text-offwhite/40">
          © 2026 {contact.legalName}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
