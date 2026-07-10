import { motion } from "framer-motion";
import PawIcon from "./PawIcon";

const DETAILS = [
  { label: "Call or text", value: "(323) 555-0142", href: "tel:+13235550142" },
  { label: "Email", value: "hello@groomservice.co", href: "mailto:hello@groomservice.co" },
  { label: "Flagship property", value: "8721 Santa Monica Blvd, West Hollywood, CA 90069", href: "https://maps.google.com/?q=8721+Santa+Monica+Blvd,+West+Hollywood,+CA+90069" },
  { label: "Follow along", value: "@groomservice", href: "#" },
];

export default function CTA() {
  return (
    <section id="book" className="relative overflow-hidden bg-ink px-6 py-24 text-cream md:px-10 md:py-32">
      <div
        className="pointer-events-none absolute -top-32 -right-20 h-96 w-96 rounded-full opacity-25 blur-3xl"
        style={{ background: "var(--color-brass)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--color-sage)" }}
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-4xl text-center"
      >
        <span className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.25em] text-gold uppercase">
          <PawIcon className="h-4 w-4" />
          Open Every Day
        </span>
        <h2 className="mt-4 font-display text-4xl leading-[1.05] font-semibold tracking-tight sm:text-5xl md:text-6xl">
          Let&rsquo;s get you checked in.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-cream/70">
          First-timer or long-time regular, reserve online in under a minute. Every first stay
          comes with a free nail trim, and loyalty program guests never have to remember when
          the last one was.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="tel:+13235550142"
            className="rounded-full bg-brass px-8 py-4 font-display text-sm font-semibold tracking-wide text-cream transition-transform hover:-translate-y-0.5 hover:bg-gold hover:text-ink"
          >
            Reserve now &rarr;
          </a>
          <a
            href="mailto:hello@groomservice.co"
            className="rounded-full border-2 border-cream/25 px-8 py-4 font-display text-sm font-semibold tracking-wide text-cream transition-colors hover:border-cream/60"
          >
            Send an email
          </a>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-cream/15 bg-cream/15 sm:grid-cols-2 lg:grid-cols-4">
          {DETAILS.map((detail) => (
            <a
              key={detail.label}
              href={detail.href}
              target={detail.href.startsWith("http") ? "_blank" : undefined}
              rel={detail.href.startsWith("http") ? "noreferrer" : undefined}
              className="group bg-ink p-5 text-left transition-colors hover:bg-cream/5"
            >
              <span className="block font-mono text-[0.65rem] tracking-widest text-cream/45 uppercase">{detail.label}</span>
              <span className="mt-1.5 block text-sm font-medium break-words text-cream/90 group-hover:text-gold">{detail.value}</span>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
