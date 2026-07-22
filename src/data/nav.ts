import type { NavLink } from "@/types";

export const navLinks: NavLink[] = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Resultados", href: "#resultados" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Localização", href: "#localizacao" },
  { label: "FAQ", href: "#faq" },
];

export const footerLinks: NavLink[] = [
  ...navLinks,
  { label: "Política de Privacidade", href: "/privacidade" },
];
