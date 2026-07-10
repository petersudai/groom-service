import { motion } from "framer-motion";

type Stylist = {
  name: string;
  role: string;
  cert: string;
  photo: string;
  accent: "brass" | "wine" | "sage";
};

const TEAM: Stylist[] = [
  {
    name: "Talia Marsh",
    role: "Founder & General Manager",
    cert: "Fear Free Certified",
    photo: "https://images.unsplash.com/photo-1589566856690-fc68ac16845c?w=480&h=600&fit=crop&crop=faces&auto=format&q=80",
    accent: "brass",
  },
  {
    name: "Marcus Ihejirika",
    role: "Senior Groomer",
    cert: "Deshedding Specialist",
    photo: "https://images.unsplash.com/photo-1529511026851-6fe7f6c908a3?w=480&h=600&fit=crop&crop=faces&auto=format&q=80",
    accent: "sage",
  },
  {
    name: "Ren Ostrowski",
    role: "Creative Color Artist",
    cert: "IPG Certified",
    photo: "https://images.unsplash.com/photo-1542578951838-47d40e8b4f0d?w=480&h=600&fit=crop&crop=faces&auto=format&q=80",
    accent: "wine",
  },
  {
    name: "Bella Suárez",
    role: "Puppy & Senior Care",
    cert: "Fear Free Certified",
    photo: "https://images.unsplash.com/photo-1760124146304-6a2dbafb4853?w=480&h=600&fit=crop&crop=faces&auto=format&q=80",
    accent: "brass",
  },
];

const ACCENT_BAR: Record<Stylist["accent"], string> = {
  brass: "bg-brass",
  wine: "bg-wine",
  sage: "bg-sage",
};

export default function Team() {
  return (
    <section className="bg-cream-dim px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-xl">
          <span className="font-mono text-xs tracking-[0.25em] text-sage-dark uppercase">The Concierge Team</span>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">Trained hands, calm energy.</h2>
          <p className="mt-4 text-ink-soft">
            Every Groom Service concierge is Fear Free&ndash;trained and certified in their
            specialty, from deshedding to bold creative color.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((person, i) => (
            <motion.article
              key={person.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="overflow-hidden rounded-3xl border-2 border-ink/10 bg-cream"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <img src={person.photo} alt={person.name} className="h-full w-full object-cover" loading="lazy" />
                <span className={`absolute top-0 left-0 h-1.5 w-full ${ACCENT_BAR[person.accent]}`} />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold">{person.name}</h3>
                <p className="text-sm text-ink-soft">{person.role}</p>
                <p className="mt-2 font-mono text-[0.6rem] tracking-widest text-ink-soft/70 uppercase">{person.cert}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
