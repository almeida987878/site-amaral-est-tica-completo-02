export type Treatment = {
  slug: string;
  name: string;
  description: string;
  confirmed: boolean;
  whatsappMessage: string;
  image?: string;
};

export type Testimonial = {
  name: string;
  initials: string;
  quote: string;
  date?: string;
  hasPhoto: boolean;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type NavLink = {
  label: string;
  href: string;
};

export type GalleryCategory =
  | "Recepção"
  | "Sala de atendimento"
  | "Equipamentos"
  | "Produtos"
  | "Procedimentos"
  | "Bastidores"
  | "Cuidados faciais"
  | "Atendimento";
