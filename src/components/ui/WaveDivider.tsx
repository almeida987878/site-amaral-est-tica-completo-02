type WaveDividerProps = {
  fill: string;
  className?: string;
};

export function WaveDivider({ fill, className = "" }: WaveDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={`wave-divider pointer-events-none absolute inset-x-0 bottom-0 h-14 sm:h-20 ${className}`}
    >
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="h-full w-full">
        <path
          d="M0,40 C240,90 480,10 720,35 C960,60 1200,95 1440,45 L1440,100 L0,100 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
