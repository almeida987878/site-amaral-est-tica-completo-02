"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealVariant = "fade-up" | "blur" | "scale" | "image";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
  variant?: RevealVariant;
};

const variantHidden: Record<RevealVariant, { scale?: number; filter?: string }> = {
  "fade-up": {},
  blur: { filter: "blur(14px)" },
  scale: { scale: 0.94 },
  image: { scale: 1.06, filter: "blur(10px)" },
};

const variantDuration: Record<RevealVariant, number> = {
  "fade-up": 0.7,
  blur: 0.9,
  scale: 0.8,
  image: 1.1,
};

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  once = true,
  variant = "fade-up",
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const hidden = variantHidden[variant];

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : y,
      scale: shouldReduceMotion ? 1 : hidden.scale ?? 1,
      filter: shouldReduceMotion ? "blur(0px)" : hidden.filter ?? "blur(0px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: variantDuration[variant], delay, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
