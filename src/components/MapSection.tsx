import { motion } from "framer-motion";
import { ClockIcon, PinIcon } from "./ServiceIcons";

const HOURS = [
  { day: "Monday – Friday", time: "8:00 AM – 7:00 PM" },
  { day: "Saturday", time: "9:00 AM – 6:00 PM" },
  { day: "Sunday", time: "10:00 AM – 5:00 PM" },
];

const ADDRESS = "8721 Santa Monica Blvd, West Hollywood, CA 90069";
const MAP_QUERY = encodeURIComponent(ADDRESS);

export default function MapSection() {
  return (
    <section id="visit" className="bg-cream px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-xl">
          <span className="font-mono text-xs tracking-[0.25em] text-berry-dark uppercase">Flagship Studio</span>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">Come say hi on Santa Monica Blvd.</h2>
          <p className="mt-4 text-ink-soft">
            Walk-ins welcome for nail trims, appointments recommended for everything else.
            Free parking right behind the studio.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid overflow-hidden rounded-[2rem] border-2 border-ink md:grid-cols-[0.85fr_1.15fr]"
        >
          <div className="flex flex-col justify-between bg-ink p-8 text-cream md:p-10">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-sunshine uppercase">
                <PinIcon className="h-4 w-4" />
                West Hollywood, CA
              </div>
              <p className="mt-4 font-display text-2xl leading-snug font-semibold">{ADDRESS}</p>

              <div className="mt-8 flex items-center gap-2 font-mono text-xs tracking-widest text-cream/50 uppercase">
                <ClockIcon className="h-4 w-4" />
                Studio hours
              </div>
              <dl className="mt-3 space-y-2.5">
                {HOURS.map((row) => (
                  <div key={row.day} className="flex justify-between gap-4 border-b border-dashed border-cream/15 pb-2.5 text-sm">
                    <dt className="text-cream/60">{row.day}</dt>
                    <dd className="text-right font-medium text-cream/90">{row.time}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
              <a
                href={`https://maps.google.com/?q=${MAP_QUERY}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 rounded-full bg-berry px-6 py-3 text-center font-display text-sm font-semibold tracking-wide text-cream transition-transform hover:-translate-y-0.5 hover:bg-sunshine hover:text-ink"
              >
                Get directions
              </a>
              <a
                href="#book"
                className="flex-1 rounded-full border-2 border-cream/25 px-6 py-3 text-center font-display text-sm font-semibold tracking-wide text-cream transition-colors hover:border-cream/60"
              >
                Book this studio
              </a>
            </div>
          </div>

          <div className="relative min-h-[320px] bg-cream-dim md:min-h-[420px]">
            <iframe
              title="Pawlette flagship studio location on Santa Monica Blvd, West Hollywood, CA"
              src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full grayscale-[15%]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
