import { contact } from "@/data/contact";

export const defaultWhatsappMessage =
  "Olá, vim pelo site da Clínica Renata Amaral e gostaria de agendar uma avaliação.";

export function buildWhatsappLink(message: string = defaultWhatsappMessage) {
  return `https://wa.me/${contact.whatsappE164}?text=${encodeURIComponent(message)}`;
}

export const whatsappLink = buildWhatsappLink();
