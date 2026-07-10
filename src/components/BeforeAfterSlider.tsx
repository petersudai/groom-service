import { useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";

type Pair = {
  photo: string;
  label: string;
};

// Same photo on both sides of the divider, on purpose — the "before" is a
// color-graded version of the identical image, not a different dog. That
// guarantees continuity while these are sample/placeholder shots; a real
// property would swap in matched arrival-and-departure photos of the same stay.
const PAIRS: Pair[] = [
  { photo: "https://placedog.net/700/700?id=25", label: "Deshed & full groom" },
  { photo: "https://placedog.net/700/700?id=54", label: "Bold color styling" },
  { photo: "https://placedog.net/700/700?id=8", label: "Breed-standard trim" },
];

function Slider({ pair }: { pair: Pair }) {
  const [split, setSplit] = useState(50);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const track = trackRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setSplit(Math.min(100, Math.max(0, pct)));
  }, []);

  return (
    <div
      ref={trackRef}
      className="group relative aspect-square w-full touch-none overflow-hidden rounded-[2rem] border-4 border-ink select-none"
      onPointerDown={(e) => {
        dragging.current = true;
        (e.target as HTMLElement).setPointerCapture(e.pointerId);
        updateFromClientX(e.clientX);
      }}
      onPointerMove={(e) => {
        if (dragging.current) updateFromClientX(e.clientX);
      }}
      onPointerUp={() => {
        dragging.current = false;
      }}
    >
      <img
        src={pair.photo}
        alt="Departure — after grooming (sample photo)"
        className="absolute inset-0 h-full w-full object-cover saturate-[1.2] contrast-[1.08] brightness-[1.03]"
        draggable={false}
      />
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - split}% 0 0)` }}>
        <img
          src={pair.photo}
          alt="Arrival — before grooming (sample photo)"
          className="h-full w-full object-cover grayscale-[65%] brightness-[0.82] contrast-[0.95]"
          draggable={false}
        />
        <span className="absolute top-4 left-4 rounded-full bg-ink/80 px-3 py-1 font-mono text-[0.65rem] tracking-widest text-cream uppercase backdrop-blur-sm">
          Arrival
        </span>
      </div>
      <span className="absolute top-4 right-4 rounded-full bg-cream/85 px-3 py-1 font-mono text-[0.65rem] tracking-widest text-ink uppercase backdrop-blur-sm">
        Departure
      </span>

      <div className="pointer-events-none absolute inset-y-0" style={{ left: `${split}%` }}>
        <div className="absolute inset-y-0 w-1 -translate-x-1/2 bg-cream shadow-[0_0_0_2px_var(--color-ink)]" />
        <div className="absolute top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-ink bg-cream text-ink shadow-[0_6px_16px_-4px_rgba(36,26,44,0.5)]">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M8 8l-4 4 4 4M16 8l4 4-4 4" />
          </svg>
        </div>
      </div>

      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-ink/85 px-4 py-1.5 font-display text-xs font-semibold tracking-wide text-cream backdrop-blur-sm">
        {pair.label}
      </p>
    </div>
  );
}

export default function BeforeAfterSlider() {
  return (
    <section className="bg-cream-dim px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-xl">
          <span className="font-mono text-xs tracking-[0.25em] text-brass-dark uppercase">Arrival &amp; Departure</span>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">Drag to see the checkout glow-up.</h2>
          <p className="mt-4 text-ink-soft">
            Sample photos shown below &mdash; every property swaps these for real arrival-and-departure
            shots from its own guests. Slide across to see how it works.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PAIRS.map((pair) => (
            <motion.div
              key={pair.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55 }}
            >
              <Slider pair={pair} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
