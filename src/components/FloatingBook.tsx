import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Sections that already surface their own booking CTA in the same bottom-right
// corner this button occupies — surface one CTA at a time instead of stacking.
const CLASH_SELECTORS = ["#membership", "footer"];

export default function FloatingBook() {
  const [pastHero, setPastHero] = useState(false);
  const [clashing, setClashing] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const targets = CLASH_SELECTORS.map((sel) => document.querySelector(sel)).filter(
      (el): el is Element => el !== null,
    );
    if (targets.length === 0) return;

    const seen = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) seen.add(entry.target);
          else seen.delete(entry.target);
        }
        setClashing(seen.size > 0);
      },
      { rootMargin: "0px 0px -15% 0px" },
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const visible = pastHero && !clashing;

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#book"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed right-5 bottom-5 z-40 rounded-full bg-brass px-6 py-3.5 font-display text-sm font-semibold tracking-wide text-cream shadow-[0_12px_28px_-8px_rgba(224,68,123,0.6)] md:hidden"
        >
          Reserve Now
        </motion.a>
      )}
    </AnimatePresence>
  );
}
