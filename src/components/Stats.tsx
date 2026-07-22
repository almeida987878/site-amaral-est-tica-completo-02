const stats = [
  { value: "17+", label: "Avaliações" },
  { value: "5,0", label: "Nota no Google" },
  { value: "1", label: "Atendimento pensado exclusivamente para você" },
];

export function Stats() {
  return (
    <div className="grid grid-cols-3 gap-4 border-t border-rosegold/30 pt-8 sm:gap-8">
      {stats.map((stat) => (
        <div key={stat.label}>
          <p className="tabular font-display text-3xl font-semibold text-espresso sm:text-4xl">
            {stat.value}
          </p>
          <p className="mt-1 font-body text-xs font-medium leading-snug text-stone sm:text-sm">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
