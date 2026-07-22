"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";
import { navLinks } from "@/data/nav";
import { contact } from "@/data/contact";
import { whatsappLink } from "@/lib/whatsapp";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-ink/50 backdrop-blur-sm lg:hidden"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
            className="fixed inset-y-0 right-0 z-[70] flex w-[85vw] max-w-sm flex-col justify-between bg-offwhite px-8 py-8 shadow-soft lg:hidden"
          >
            <div>
              <div className="mb-10 flex items-center justify-between">
                <span className="font-display text-lg text-espresso">{contact.brand}</span>
                <button
                  type="button"
                  aria-label="Fechar menu"
                  onClick={onClose}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/15 text-charcoal transition-colors hover:border-rosegold hover:text-rosegold"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className="font-display text-2xl italic text-espresso transition-colors hover:text-rosegold"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine inline-flex items-center justify-center rounded-full bg-rosegold px-6 py-3.5 text-center font-body text-sm font-semibold text-white shadow-card transition-colors hover:bg-rosegold-dark"
            >
              Agendar avaliação
            </a>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
