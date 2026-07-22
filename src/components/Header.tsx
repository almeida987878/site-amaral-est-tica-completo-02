"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { navLinks } from "@/data/nav";
import { contact } from "@/data/contact";
import { whatsappLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-450",
          scrolled ? "bg-offwhite/90 py-3 shadow-soft backdrop-blur-md" : "bg-transparent py-6"
        )}
      >
        <div className="mx-auto flex max-w-content items-center justify-between px-6 lg:px-10">
          <a href="#inicio" className="flex items-center gap-3">
            <span
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-full border font-display text-lg italic transition-colors duration-450",
                scrolled ? "border-rosegold text-espresso" : "border-white/70 text-white"
              )}
            >
              {contact.monogram}
            </span>
            <span className="flex flex-col leading-tight">
              <span
                className={cn(
                  "font-display text-base transition-colors duration-450",
                  scrolled ? "text-espresso" : "text-white"
                )}
              >
                {contact.brand}
              </span>
              <span
                className={cn(
                  "font-body text-[0.6rem] font-semibold uppercase tracking-[0.22em] transition-colors duration-450",
                  scrolled ? "text-rosegold-dark" : "text-white/80"
                )}
              >
                {contact.brandSuffix}
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "font-body text-sm font-medium transition-colors duration-350 hover:text-rosegold",
                  scrolled ? "text-charcoal" : "text-white/90"
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine hidden rounded-full bg-rosegold px-6 py-2.5 font-body text-sm font-semibold text-white shadow-card transition-all duration-350 hover:scale-[1.03] hover:bg-rosegold-dark lg:inline-flex"
            >
              Agendar avaliação
            </a>
            <button
              type="button"
              aria-label="Abrir menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-350 lg:hidden",
                scrolled ? "border-charcoal/20 text-charcoal" : "border-white/50 text-white"
              )}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
