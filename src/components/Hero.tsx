import { motion } from "framer-motion";
import PawIcon from "./PawIcon";
import { StarIcon } from "./ServiceIcons";

const STATS = [
  { value: "4.9", label: "avg. rating" },
  { value: "18k+", label: "grooms done" },
  { value: "2019", label: "est. in WeHo" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
      <div
        className="animate-blob pointer-events-none absolute -top-24 -right-24 h-[26rem] w-[26rem] opacity-30 blur-3xl"
        style={{ background: "var(--color-sage)" }}
        aria-hidden="true"
      />
      <div
        className="animate-blob-delay pointer-events-none absolute top-52 -left-32 h-80 w-80 opacity-25 blur-3xl"
        style={{ background: "var(--color-sunshine)" }}
        aria-hidden="true"
      />
      <div
        className="animate-blob pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 opacity-20 blur-3xl"
        style={{ background: "var(--color-berry)" }}
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-[1.05fr_0.95fr] md:gap-8 md:px-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-cream-dim px-4 py-1.5 font-mono text-xs tracking-wide text-ink-soft"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-sage" />
            NOW BOOKING &middot; WEST HOLLYWOOD, CA
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl leading-[1.03] font-semibold tracking-tight text-ink sm:text-6xl md:text-[3.8rem]"
          >
            Groom
            <br />
            <span className="relative inline-block">
              boldly
              <svg
                viewBox="0 0 260 20"
                className="absolute -bottom-2 left-0 w-full text-berry"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M2 14 Q 70 4, 130 12 T 258 10" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
              </svg>
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-4 font-caption text-2xl text-berry-dark"
          >
            Where every coat is a canvas.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="mt-5 max-w-md font-body text-lg text-ink-soft"
          >
            Pawlette is the creative grooming studio for dogs and cats who
            deserve more than a rushed bath. Fear Free&ndash;certified
            handling, breed-savvy stylists, and a little bit of color magic
            for the pets who want to stand out.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#book"
              className="rounded-full bg-ink px-7 py-3.5 font-display text-sm font-semibold tracking-wide text-cream transition-transform hover:-translate-y-0.5 hover:bg-berry-dark"
            >
              Book a groom
            </a>
            <a
              href="#membership"
              className="rounded-full border-2 border-ink/15 px-7 py-3.5 font-display text-sm font-semibold tracking-wide text-ink transition-colors hover:border-sage hover:text-sage-dark"
            >
              See membership
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.44 }}
            className="mt-12 flex flex-wrap gap-x-10 gap-y-4"
          >
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl font-semibold text-ink">{stat.value}</p>
                <p className="font-mono text-[0.65rem] tracking-widest text-ink-soft uppercase">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          <div
            className="animate-blob absolute -inset-6 opacity-70"
            style={{
              background: "linear-gradient(135deg, var(--color-berry) 0%, var(--color-sunshine) 50%, var(--color-sage) 100%)",
            }}
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-ink bg-cream-dim shadow-[0_24px_60px_-20px_rgba(36,26,44,0.45)]">
            <img
              src="https://placedog.net/640/760?id=41"
              alt="A freshly groomed dog with a bright, styled coat at a Pawlette studio"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="animate-float absolute -top-5 -left-8 flex items-center gap-2 rounded-2xl border-2 border-ink bg-cream px-4 py-3 shadow-[0_10px_24px_-8px_rgba(36,26,44,0.35)]"
          >
            <div className="flex text-berry">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-3.5 w-3.5" />
              ))}
            </div>
            <span className="font-display text-sm font-bold">4.9 / 5</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="animate-float absolute -right-6 -bottom-6 flex items-center gap-2 rounded-2xl border-2 border-ink bg-ink px-4 py-3 text-cream shadow-[0_10px_24px_-8px_rgba(36,26,44,0.45)]"
            style={{ animationDelay: "1.2s" }}
          >
            <PawIcon className="h-5 w-5 text-sunshine" />
            <span className="font-mono text-xs font-bold tracking-wide">
              Fear Free
              <br />
              Certified
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
