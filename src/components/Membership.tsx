import { motion } from "framer-motion";
import { PaletteIcon } from "./ServiceIcons";

const PERKS = ["Free nail trim, every visit", "Priority weekend booking", "15% off Style Studio color", "Pause or cancel anytime"];

export default function Membership() {
  return (
    <section id="membership" className="bg-cream-dim px-6 py-16 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto flex max-w-6xl flex-col gap-6 rounded-3xl border-2 border-ink bg-ink p-8 text-cream md:flex-row md:items-center md:justify-between md:p-10"
      >
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cream/10 text-sunshine">
            <PaletteIcon className="h-6 w-6" />
          </div>
          <div>
            <span className="font-mono text-[0.65rem] tracking-widest text-sunshine uppercase">VIP Membership</span>
            <h3 className="mt-1 font-display text-2xl font-semibold">Skip the rebooking scramble.</h3>
            <p className="mt-1 max-w-sm text-sm text-cream/60">One monthly groom, member pricing on everything else. No contracts.</p>
          </div>
        </div>

        <ul className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
          {PERKS.map((perk) => (
            <li key={perk} className="flex items-center gap-2 text-sm text-cream/80">
              <svg viewBox="0 0 20 20" className="h-4 w-4 shrink-0 text-sunshine" fill="currentColor">
                <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0l-3.5-3.5a1 1 0 1 1 1.4-1.4l2.8 2.8 6.8-6.8a1 1 0 0 1 1.4 0Z" />
              </svg>
              {perk}
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-4">
          <p className="text-right">
            <span className="font-display text-3xl font-bold">$79</span>
            <span className="font-mono text-sm text-cream/60">/mo</span>
          </p>
          <a
            href="#book"
            className="rounded-full bg-berry px-6 py-3 font-display text-sm font-semibold tracking-wide whitespace-nowrap text-cream transition-transform hover:-translate-y-0.5 hover:bg-sunshine hover:text-ink"
          >
            Join VIP
          </a>
        </div>
      </motion.div>
    </section>
  );
}
