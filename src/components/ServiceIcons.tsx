type IconProps = { className?: string };

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function BathIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M4 12h16v2a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-2Z" />
      <path d="M6 12V6a2 2 0 0 1 2-2c1.2 0 1.6 1 1.3 2" />
      <path d="M3 12h18M8 21v1M16 21v1" />
    </svg>
  );
}

export function ScissorsIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="6" cy="6" r="2.4" />
      <circle cx="6" cy="18" r="2.4" />
      <path d="M8.2 7.4 20 18M8.2 16.6 20 6" />
    </svg>
  );
}

export function PaletteIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 3a9 8 0 1 0 0 16c1 0 1.6-.7 1.6-1.5s-.5-1-.5-1.7c0-.7.6-1.3 1.4-1.3H16a5 4.5 0 0 0 5-4.5C21 6 17 3 12 3Z" />
      <circle cx="8" cy="10.5" r="1.1" fill="currentColor" />
      <circle cx="12" cy="8" r="1.1" fill="currentColor" />
      <circle cx="16" cy="10.5" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function PuppyIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 20s-7-4.4-9.3-9A5.4 5.4 0 0 1 12 6a5.4 5.4 0 0 1 9.3 5c-2.3 4.6-9.3 9-9.3 9Z" />
      <path d="M6 12h2.5l1.5-3 2 5 1.5-2H18" />
    </svg>
  );
}

export function PawTrimIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <ellipse cx="12" cy="16" rx="5" ry="4" />
      <ellipse cx="6" cy="9" rx="2" ry="2.6" />
      <ellipse cx="11" cy="6.5" rx="2.1" ry="2.8" />
      <ellipse cx="17" cy="9" rx="2" ry="2.6" />
    </svg>
  );
}

export function CombIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M4 9h16v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9Z" />
      <path d="M6 14v6M9.5 14v6M13 14v6M16.5 14v6" />
    </svg>
  );
}

export function HeartPulseIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 3 5 6v5c0 4.5 3 7.5 7 10 4-2.5 7-5.5 7-10V6l-7-3Z" />
      <path d="M9.5 12l1.8 1.8L15 10" />
    </svg>
  );
}

export function StarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.5l2.9 6.3 6.8.7-5.1 4.7 1.5 6.8-6.1-3.5-6.1 3.5 1.5-6.8-5.1-4.7 6.8-.7L12 2.5Z" />
    </svg>
  );
}

export function PinIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.6" />
    </svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.2 2" />
    </svg>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 3 5 6v5c0 4.5 3 7.5 7 10 4-2.5 7-5.5 7-10V6l-7-3Z" />
      <path d="M9.5 12l1.8 1.8L15 10" />
    </svg>
  );
}

export function ChevronIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}
