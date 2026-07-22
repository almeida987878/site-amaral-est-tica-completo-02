"use client";

import { useState } from "react";
import { whatsappLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./ui/WhatsAppIcon";

export function FloatingWhatsApp() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="fixed bottom-5 right-5 z-40 flex items-center gap-3 sm:bottom-8 sm:right-8"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <span
        role="tooltip"
        className={`hidden select-none whitespace-nowrap rounded-full bg-ink px-4 py-2 font-body text-xs font-medium text-offwhite shadow-soft transition-all duration-350 sm:block ${
          hovered ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-2 opacity-0"
        }`}
      >
        Agende sua avaliação
      </span>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar avaliação pelo WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft transition-transform duration-350 hover:scale-105 sm:h-16 sm:w-16"
      >
        <span className="absolute inset-0 -z-10 rounded-full bg-[#25D366]/60 animate-pulse-ring" />
        <WhatsAppIcon className="relative h-7 w-7 sm:h-8 sm:w-8" />
      </a>
    </div>
  );
}
