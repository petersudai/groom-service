import { motion } from "framer-motion";

type Photo = {
  src: string;
  caption: string;
  aspect: string;
};

const PHOTOS: Photo[] = [
  { src: "https://placedog.net/500/650?id=3", caption: "Fresh from the tub", aspect: "aspect-[4/5]" },
  { src: "https://cataas.com/cat?position=center&d=1", caption: "Someone's a good boy (cat edition)", aspect: "aspect-square" },
  { src: "https://placedog.net/500/700?id=7", caption: "Penthouse color day", aspect: "aspect-[3/4]" },
  { src: "https://placedog.net/500/560?id=11", caption: "Tail wags guaranteed", aspect: "aspect-[5/4]" },
  { src: "https://cataas.com/cat?position=center&d=2", caption: "Fluffed, brushed, unbothered", aspect: "aspect-[4/5]" },
  { src: "https://placedog.net/500/650?id=22", caption: "Ready for checkout", aspect: "aspect-[4/5]" },
  { src: "https://placedog.net/500/560?id=14", caption: "First color session", aspect: "aspect-[5/4]" },
  { src: "https://placedog.net/500/700?id=9", caption: "Not a bad angle in sight", aspect: "aspect-[3/4]" },
  { src: "https://cataas.com/cat?position=center&d=3", caption: "Frequent guest", aspect: "aspect-square" },
  { src: "https://placedog.net/500/650?id=26", caption: "Bath time hero", aspect: "aspect-[4/5]" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-cream-dim px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="font-mono text-xs tracking-[0.25em] text-sage-dark uppercase">Recent Departures</span>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">Straight from checkout.</h2>
          </div>
          <p className="max-w-xs text-sm text-ink-soft">
            A few recent guests from the West Hollywood property. Follow{" "}
            <a href="#" className="font-semibold text-brass-dark underline decoration-2 underline-offset-2">
              @groomservice
            </a>{" "}
            for the daily lineup.
          </p>
        </div>

        <div className="columns-2 gap-5 sm:columns-3 lg:columns-4 [&>*]:mb-5">
          {PHOTOS.map((photo, i) => (
            <motion.figure
              key={photo.caption}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="group relative break-inside-avoid overflow-hidden rounded-2xl border-2 border-ink/10 bg-cream shadow-[0_10px_24px_-10px_rgba(36,26,44,0.3)] transition-shadow hover:shadow-[0_18px_34px_-10px_rgba(36,26,44,0.4)]"
            >
              <div className={`${photo.aspect} w-full overflow-hidden bg-line/40`}>
                <img
                  src={photo.src}
                  alt={photo.caption}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-ink/85 to-transparent px-4 pt-8 pb-3 font-caption text-lg text-cream italic transition-transform duration-300 group-hover:translate-y-0">
                {photo.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
