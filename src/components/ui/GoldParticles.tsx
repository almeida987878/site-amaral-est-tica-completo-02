const particles = [
  { top: "12%", left: "18%", size: 5, delay: "0s" },
  { top: "24%", left: "78%", size: 3, delay: "0.8s" },
  { top: "42%", left: "8%", size: 4, delay: "1.6s" },
  { top: "58%", left: "88%", size: 3, delay: "0.4s" },
  { top: "72%", left: "22%", size: 5, delay: "2.1s" },
  { top: "85%", left: "65%", size: 3, delay: "1.2s" },
];

export function GoldParticles({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      {particles.map((particle, index) => (
        <span
          key={index}
          className="absolute animate-float rounded-full bg-gold-light shadow-[0_0_8px_rgba(209,179,122,0.7)]"
          style={{
            top: particle.top,
            left: particle.left,
            width: particle.size,
            height: particle.size,
            animationDelay: particle.delay,
          }}
        />
      ))}
    </div>
  );
}
