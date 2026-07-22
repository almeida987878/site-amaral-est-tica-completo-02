"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ElementType } from "react";
import { cn } from "@/lib/utils";

export type TextWord = {
  text: string;
  emphasis?: boolean;
};

type RevealTextProps = {
  words: TextWord[];
  className?: string;
  emphasisClassName?: string;
  delay?: number;
  as?: ElementType;
};

export function RevealText({
  words,
  className,
  emphasisClassName,
  delay = 0,
  as: Tag = "h2",
}: RevealTextProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Tag className={className}>
      {words.map((word, index) => (
        <span key={`${word.text}-${index}`} style={{ display: "inline-block", overflow: "hidden" }}>
          <motion.span
            style={{ display: "inline-block" }}
            initial={{ y: shouldReduceMotion ? 0 : "110%", opacity: shouldReduceMotion ? 1 : 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.85,
              delay: delay + index * 0.045,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={cn(word.emphasis && emphasisClassName)}
          >
            {word.text}
          </motion.span>{" "}
        </span>
      ))}
    </Tag>
  );
}
