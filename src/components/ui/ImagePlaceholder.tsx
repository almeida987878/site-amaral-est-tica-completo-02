import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type ImagePlaceholderProps = {
  label: string;
  className?: string;
  tone?: "beige" | "espresso" | "rosegold";
};

const toneStyles = {
  beige: "bg-gradient-to-br from-beige via-offwhite to-white text-espresso/70 border-rosegold/40",
  espresso: "bg-gradient-to-br from-espresso via-[#3a2c26] to-ink text-beige/70 border-gold/30",
  rosegold: "bg-gradient-to-br from-rosegold/30 via-beige to-offwhite text-espresso/70 border-rosegold/50",
} as const;

export function ImagePlaceholder({ label, className, tone = "beige" }: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "relative flex min-h-[12rem] flex-col items-center justify-center gap-3 overflow-hidden border border-dashed p-6 text-center",
        toneStyles[tone],
        className
      )}
      role="img"
      aria-label={`Placeholder de imagem: ${label}`}
    >
      <span className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(circle_at_30%_20%,rgba(184,154,101,0.25),transparent_60%)]" />
      <ImageIcon className="relative h-7 w-7 opacity-70" strokeWidth={1.25} />
      <p className="relative max-w-[16ch] font-body text-xs font-medium uppercase tracking-[0.14em] opacity-80">
        {label}
      </p>
    </div>
  );
}
