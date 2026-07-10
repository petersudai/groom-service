import { motion } from "framer-motion";
import PawIcon from "./PawIcon";

const BADGES = [
  { label: "Fear Free Certified", rotate: -6 },
  { label: "IPG Certified", rotate: 4 },
  { label: "Creative Color Cert.", rotate: -3 },
  { label: "Dogs & Cats", rotate: 5 },
];

export default function About() {
  return (
    <section id="about" className="bg-cream px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs tracking-[0.25em] text-berry-dark uppercase">Our Story</span>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">One studio. One obsession with color.</h2>
          <p className="mt-6 text-ink-soft">
            Pawlette started in 2019 when Talia Marsh, a color specialist who spent a decade
            behind a salon chair, decided pets deserved the same craft she gave people &mdash;
            minus the rush, plus a lot more tail-wagging. What began as a one-chair studio on
            Santa Monica Blvd is now a small team of Fear Free&ndash;certified stylists, all
            trained under her, still working out of that same West Hollywood storefront.
          </p>
          <p className="mt-4 text-ink-soft">
            Every pet gets handled at their own pace &mdash; slower for the nervous ones, playful
            for the regulars &mdash; and every stylist is certified in low-stress handling before
            they touch a single clipper.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {BADGES.map((badge) => (
              <span
                key={badge.label}
                style={{ transform: `rotate(${badge.rotate}deg)` }}
                className="inline-flex items-center gap-2 rounded-full border-2 border-dashed border-ink/25 bg-cream-dim px-4 py-2 font-mono text-xs font-bold tracking-wide text-ink-soft"
              >
                <PawIcon className="h-3.5 w-3.5 text-sage-dark" />
                {badge.label}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mx-auto w-full max-w-sm rounded-3xl border-2 border-ink bg-ink p-8 text-cream"
        >
          <div className="flex items-center justify-between border-b border-dashed border-cream/25 pb-4">
            <span className="font-mono text-[0.65rem] tracking-[0.3em] text-sunshine uppercase">Stylist ID</span>
            <PawIcon className="h-5 w-5 text-berry" />
          </div>
          <p className="mt-5 font-display text-2xl font-semibold">Talia Marsh</p>
          <p className="font-mono text-xs text-cream/60">Founder &amp; Lead Stylist</p>

          <dl className="mt-6 space-y-3 font-mono text-xs">
            <div className="flex justify-between border-b border-cream/10 pb-2">
              <dt className="text-cream/50">Location</dt>
              <dd className="text-right text-cream/85">West Hollywood, CA</dd>
            </div>
            <div className="flex justify-between border-b border-cream/10 pb-2">
              <dt className="text-cream/50">Specialty</dt>
              <dd className="text-right text-cream/85">Creative Color &amp; Deshedding</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-cream/50">Status</dt>
              <dd className="text-right text-sage">Now booking</dd>
            </div>
          </dl>

          <div className="absolute -right-4 -bottom-4 flex h-16 w-16 rotate-12 items-center justify-center rounded-full border-2 border-berry bg-ink font-mono text-[0.55rem] leading-tight text-berry">
            <span className="text-center">
              FEAR
              <br />
              FREE
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
