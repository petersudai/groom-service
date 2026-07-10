import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";

type Stat = {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  static?: boolean;
};

const STATS: Stat[] = [
  { value: 4.9, decimals: 1, suffix: "★", label: "average studio rating" },
  { value: 18, suffix: "k+", label: "grooms completed" },
  { value: 2300, suffix: "+", label: "five-star reviews" },
  { value: 2019, label: "founded in West Hollywood", static: true },
];

function CountUp({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(stat.static ? stat.value.toFixed(0) : "0");

  useEffect(() => {
    if (!inView || stat.static) return;
    const controls = animate(0, stat.value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(v.toFixed(stat.decimals ?? 0)),
    });
    return () => controls.stop();
  }, [inView, stat.value, stat.decimals, stat.static]);

  return (
    <span ref={ref} className="font-display text-4xl font-bold text-ink md:text-5xl">
      {stat.prefix}
      {display}
      {stat.suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="bg-cream px-6 py-20 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mx-auto grid max-w-6xl grid-cols-2 gap-8 rounded-3xl border-2 border-ink/10 bg-cream-dim px-8 py-12 md:grid-cols-4"
      >
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <CountUp stat={stat} />
            <p className="mt-2 font-mono text-[0.65rem] tracking-widest text-ink-soft uppercase">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
