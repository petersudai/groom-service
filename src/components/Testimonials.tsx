import { motion } from "framer-motion";
import { StarIcon } from "./ServiceIcons";

const REVIEWS = [
  {
    quote:
      "Our Shepherd sheds like it's a full-time job. First deshed treatment here and the difference in one visit was unreal.",
    name: "Marisol T.",
    pet: "Loki, German Shepherd",
    city: "West Hollywood, CA",
  },
  {
    quote:
      "He's nervous with strangers and the stylist just... got him to relax. First groomer he hasn't shaken through in three years.",
    name: "Danny R.",
    pet: "Biscuit, Bichon mix",
    city: "Beverly Hills, CA",
  },
  {
    quote: "Asked for something fun for her birthday and she came out looking like a walking rainbow. Whole block stopped us.",
    name: "Priya N.",
    pet: "Mochi, Poodle",
    city: "Silver Lake, CA",
  },
  {
    quote: "The loyalty program pays for itself. I stopped tracking appointments and just show up; they text me first.",
    name: "Owen K.",
    pet: "Peaches, Tabby cat",
    city: "Culver City, CA",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-cream px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="font-mono text-xs tracking-[0.25em] text-brass-dark uppercase">From the Guestbook</span>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">Guests check out happy.</h2>
          </div>
          <div className="flex items-center gap-2 rounded-full border-2 border-ink/10 bg-cream-dim px-5 py-2.5">
            <div className="flex text-brass">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-4 w-4" />
              ))}
            </div>
            <span className="font-display text-sm font-bold">4.9 average · 2,300+ Google reviews</span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {REVIEWS.map((review, i) => (
            <motion.figure
              key={review.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="paper-edge flex flex-col justify-between rounded-2xl border-2 border-ink/10 bg-cream-dim p-6"
            >
              <div>
                <div className="flex gap-1 text-brass">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <StarIcon key={idx} className="h-4 w-4" />
                  ))}
                </div>
                <p className="mt-4 font-display text-lg leading-snug">&ldquo;{review.quote}&rdquo;</p>
              </div>
              <figcaption className="mt-6 border-t border-dashed border-ink/15 pt-4 font-mono text-xs text-ink-soft">
                {review.name} &middot; {review.pet}
                <br />
                {review.city}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
