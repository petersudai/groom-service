type LogoProps = {
  variant?: "light" | "dark";
};

export default function Logo({ variant = "light" }: LogoProps) {
  const captionClass = variant === "light" ? "text-ink-soft" : "text-cream/50";

  return (
    <div className="flex items-center gap-2.5">
      <svg viewBox="0 0 56 56" className="h-9 w-9 shrink-0" aria-hidden="true">
        <circle cx="28" cy="28" r="26" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3.4 3.4" />
        <ellipse cx="28" cy="33" rx="9.5" ry="7.6" fill="var(--color-ink)" />
        <ellipse cx="16" cy="20" rx="4.2" ry="5.3" fill="var(--color-berry)" transform="rotate(-18 16 20)" />
        <ellipse cx="25.5" cy="13.5" rx="4.5" ry="5.6" fill="var(--color-sunshine)" transform="rotate(-4 25.5 13.5)" />
        <ellipse cx="35" cy="14.5" rx="4.5" ry="5.6" fill="var(--color-sage)" transform="rotate(10 35 14.5)" />
        <ellipse cx="42.5" cy="22.5" rx="4.2" ry="5.3" fill="var(--color-citrus)" transform="rotate(24 42.5 22.5)" />
      </svg>
      <span className="font-display text-lg leading-tight font-semibold tracking-tight">
        Pawlette
        <span className={`block text-[0.63rem] font-mono font-normal tracking-[0.28em] uppercase ${captionClass}`}>
          Grooming Studio
        </span>
      </span>
    </div>
  );
}
