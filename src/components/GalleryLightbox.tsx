"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import { ImagePlaceholder } from "./ui/ImagePlaceholder";

type GalleryLightboxProps = {
  items: { category: string; image?: string }[];
  activeIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export function GalleryLightbox({ items, activeIndex, onClose, onNavigate }: GalleryLightboxProps) {
  const isOpen = activeIndex !== null;

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && activeIndex !== null) {
        onNavigate((activeIndex + 1) % items.length);
      }
      if (e.key === "ArrowLeft" && activeIndex !== null) {
        onNavigate((activeIndex - 1 + items.length) % items.length);
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, activeIndex, items.length, onClose, onNavigate]);

  return (
    <AnimatePresence>
      {isOpen && activeIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/92 p-4 backdrop-blur-md sm:p-10"
          role="dialog"
          aria-modal="true"
          aria-label={`Imagem: ${items[activeIndex].category}`}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {items[activeIndex].image ? (
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-card">
                <Image
                  src={items[activeIndex].image as string}
                  alt={items[activeIndex].category}
                  fill
                  sizes="(min-width: 640px) 42rem, 90vw"
                  className="object-cover"
                />
              </div>
            ) : (
              <ImagePlaceholder
                label={items[activeIndex].category}
                tone="espresso"
                className="aspect-[4/3] w-full rounded-card"
              />
            )}
            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar"
              className="absolute -top-4 right-0 flex h-11 w-11 items-center justify-center rounded-full bg-white text-charcoal shadow-soft sm:-right-4"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate((activeIndex - 1 + items.length) % items.length)}
              aria-label="Imagem anterior"
              className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-charcoal shadow-soft"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate((activeIndex + 1) % items.length)}
              aria-label="Próxima imagem"
              className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-charcoal shadow-soft"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
