import { motion } from "framer-motion";
import type { ComponentType } from "react";
import { BathIcon, CombIcon, HeartPulseIcon, PaletteIcon, PawTrimIcon, PuppyIcon, ScissorsIcon } from "./ServiceIcons";

type Service = {
  title: string;
  copy: string;
  price: string;
  featured?: boolean;
  icon: ComponentType<{ className?: string }>;
  chip: "berry" | "citrus" | "sage";
};

const CHIP_STYLES = {
  berry: "bg-berry/15 text-berry-dark",
  citrus: "bg-citrus/15 text-citrus-dark",
  sage: "bg-sage/15 text-sage-dark",
};

const SERVICES: Service[] = [
  {
    title: "Wash & Wag",
    copy: "A proper bath, blow-dry, and brush-out for pets who just need to feel (and smell) fresh.",
    price: "From $39",
    icon: BathIcon,
    chip: "sage",
  },
  {
    title: "Full Groom",
    copy: "The whole visit: bath, cut, brush-out, and finishing touches, done at your pet's own pace.",
    price: "From $69",
    featured: true,
    icon: ScissorsIcon,
    chip: "berry",
  },
  {
    title: "Style Studio",
    copy: "Safe, pet-grade creative color and breed-bending looks for pets who like to make an entrance.",
    price: "From $95",
    icon: PaletteIcon,
    chip: "citrus",
  },
  {
    title: "Puppy's First Visit",
    copy: "A gentle, slow-paced introduction groom built for pets under a year old.",
    price: "From $35",
    icon: PuppyIcon,
    chip: "sage",
  },
  {
    title: "Nail & Paw Care",
    copy: "Trim, file, and pad balm, offered solo or added onto any groom.",
    price: "From $18",
    icon: PawTrimIcon,
    chip: "citrus",
  },
  {
    title: "Deshed Treatment",
    copy: "A deep-coat blowout that pulls loose undercoat before it lands on your couch.",
    price: "From $55",
    icon: CombIcon,
    chip: "berry",
  },
  {
    title: "Senior & Sensitive Care",
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
          <span className="font-mono text-xs tracking-[0.25em] text-berry-dark uppercase">The Menu</span>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">Pick a service, mix &amp; match.</h2>
          <p className="mt-4 text-ink-soft">
            Every visit is built around your pet's coat, temperament, and vibe. Here's the full
            menu — combine as many as you like.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
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
                  <span className="absolute -top-3 right-6 rounded-full bg-sunshine px-3 py-1 font-mono text-[0.6rem] font-bold tracking-widest text-ink uppercase">
                    Most Booked
                  </span>
                )}
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${service.featured ? "bg-cream/10 text-sunshine" : CHIP_STYLES[service.chip]}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div className="mt-5 flex flex-wrap items-baseline gap-x-2">
                  <h3 className="font-display text-xl font-semibold">{service.title}</h3>
                </div>
                <p className={`mt-2 flex-1 text-sm leading-relaxed ${service.featured ? "text-cream/70" : "text-ink-soft"}`}>
                  {service.copy}
                </p>
                <p className={`mt-4 font-mono text-xs font-bold tracking-wide ${service.featured ? "text-sunshine" : "text-berry-dark"}`}>
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
            className="group flex flex-col items-start justify-center gap-3 rounded-3xl border-2 border-dashed border-ink/30 p-6 transition-colors hover:border-berry hover:bg-cream-dim"
          >
            <span className="font-mono text-[0.65rem] tracking-widest text-ink-soft uppercase">Not sure what you need?</span>
            <span className="font-display text-xl font-semibold">Ask a stylist &rarr;</span>
            <span className="text-sm text-ink-soft">Tell us about the coat and temperament, we'll build the visit around it.</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
