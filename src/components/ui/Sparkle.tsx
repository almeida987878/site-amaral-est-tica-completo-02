import { cn } from "@/lib/utils";

type SparkleProps = {
  glyph?: "✦" | "✧" | "❋" | "◇";
  className?: string;
};

export function Sparkle({ glyph = "✦", className }: SparkleProps) {
  return (
    <span className={cn("sparkle select-none", className)} aria-hidden="true">
      {glyph}
    </span>
  );
}
