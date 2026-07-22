import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

type StarRatingProps = {
  rating?: number;
  className?: string;
  size?: number;
};

export function StarRating({ rating = 5, className, size = 16 }: StarRatingProps) {
  return (
    <div className={cn("flex items-center gap-0.5", className)} aria-label={`${rating} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={i < Math.round(rating) ? "fill-gold text-gold" : "fill-transparent text-beige"}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}
