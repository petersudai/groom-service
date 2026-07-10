import { motion } from "framer-motion";
import type { ComponentType } from "react";
import { BathIcon, CombIcon, HeartPulseIcon, PaletteIcon, PawTrimIcon, PuppyIcon, ScissorsIcon } from "./ServiceIcons";

type Service = {
  suite: string;
  service: string;
  copy: string;
  price: string;
  featured?: boolean;
  icon: ComponentType<{ className?: string }>;
  chip: "brass" | "wine" | "sage";
};

const CHIP_STYLES = {
  brass: "bg-brass/15 text-brass-dark",
  wine: "bg-wine/15 text-wine-dark",
  sage: "bg-sage/15 text-sage-dark",
};

const SERVICES: Service[] = [
  {
    suite: "The Standard Room",
    service: "Wash & Wag",
    copy: "A proper bath, blow-dry, and brush-out for pets who just need to feel (and smell) fresh.",
    price: "From $39",
    icon: BathIcon,
    chip: "sage",
  },
  {
    suite: "The Full Suite",
    service: "Full Groom",
    copy: "The whole stay: bath, cut, brush-out, and finishing touches, done at your pet's own pace.",
    price: "From $69",
    featured: true,
    icon: ScissorsIcon,
    chip: "brass",
  },
  {
    suite: "The Penthouse",
    service: "Style Studio: Creative Color",
    copy: "Safe, pet-grade creative color and breed-bending looks for pets who like to make an entrance.",
    price: "From $95",
    icon: PaletteIcon,
    chip: "wine",
  },
  {
    suite: "The Junior Suite",
    service: "Puppy's First Visit",
    copy: "A gentle, slow-paced introduction stay built for pets under a year old.",
    price: "From $35",
    icon: PuppyIcon,
    chip: "sage",
  },
  {
    suite: "Turndown Service",
    service: "Nail & Paw Care",
    copy: "Trim, file, and pad balm, offered solo or added onto any stay.",
    price: "From $18",
    icon: PawTrimIcon,
    chip: "wine",
  },
  {
    suite: "Housekeeping",
    service: "Deshed Treatment",
    copy: "A deep-coat blowout that pulls loose undercoat before it lands on your couch.",
    price: "From $55",
    icon: CombIcon,
    chip: "brass",
  },
  {
    suite: "Extended Stay Care",
    service: "Senior & Sensitive Support",
    copy: "Extra time and Fear Free handling for seniors, rescues, and nervous first-timers.",
    price: "Add-on",
    icon: HeartPulseIcon,
    chip: "sage",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-cream px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-xl">
          <span className="font-mono text-xs tracking-[0.25em] text-brass-dark uppercase">The Suite Menu</span>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">Pick a suite, mix &amp; match.</h2>
          <p className="mt-4 text-ink-soft">
            Every stay is built around your pet's coat, temperament, and vibe. Here's the full
            rate card. Combine as many suites as you like.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.suite}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className={`relative flex flex-col rounded-3xl border-2 p-6 ${
                  service.featured ? "border-ink bg-ink text-cream" : "border-ink/12 bg-cream-dim"
                }`}
              >
                {service.featured && (
                  <span className="absolute -top-3 right-6 rounded-full bg-gold px-3 py-1 font-mono text-[0.6rem] font-bold tracking-widest text-ink uppercase">
                    Most Booked
                  </span>
                )}
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${service.featured ? "bg-cream/10 text-gold" : CHIP_STYLES[service.chip]}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <p className={`mt-5 font-mono text-[0.6rem] font-bold tracking-[0.2em] uppercase ${service.featured ? "text-cream/50" : "text-ink-soft/70"}`}>
                  {service.service}
                </p>
                <h3 className="mt-1 font-display text-xl font-semibold">{service.suite}</h3>
                <p className={`mt-2 flex-1 text-sm leading-relaxed ${service.featured ? "text-cream/70" : "text-ink-soft"}`}>
                  {service.copy}
                </p>
                <p className={`mt-4 font-mono text-xs font-bold tracking-wide ${service.featured ? "text-gold" : "text-brass-dark"}`}>
                  {service.price}
                </p>
              </motion.article>
            );
          })}

          <motion.a
            href="#book"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="group flex flex-col items-start justify-center gap-3 rounded-3xl border-2 border-dashed border-ink/30 p-6 transition-colors hover:border-brass hover:bg-cream-dim"
          >
            <span className="font-mono text-[0.65rem] tracking-widest text-ink-soft uppercase">Not sure what you need?</span>
            <span className="font-display text-xl font-semibold">Ask the concierge &rarr;</span>
            <span className="text-sm text-ink-soft">Tell us about the coat and temperament, we'll build the stay around it.</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
