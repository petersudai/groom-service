import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronIcon } from "./ServiceIcons";

const FAQS = [
  {
    q: "Do you groom cats too?",
    a: "Yes — every property is set up for both dogs and cats, with concierges trained specifically in low-stress cat handling.",
  },
  {
    q: "What if my pet is anxious or reactive?",
    a: "That's exactly what Fear Free certification is for. We slow down, use calming handling techniques, and if needed, split a stay across two shorter visits instead of one stressful one.",
  },
  {
    q: "How does the loyalty program billing work?",
    a: "The program bills monthly to the card on file and can be paused or cancelled anytime from your account — no contracts, no cancellation fees.",
  },
  {
    q: "Can I bring my own shampoo or products?",
    a: "Absolutely. Let your stylist know when you book and we'll use whatever your vet or groomer has recommended.",
  },
  {
    q: "Do you require vaccination records?",
    a: "Yes, current rabies and distemper (or FVRCP for cats) records are required and can be uploaded when you book online.",
  },
  {
    q: "What's your cancellation policy?",
    a: "We ask for 24 hours' notice. Loyalty program guests get one grace no-show per quarter, no questions asked.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-cream-dim px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <span className="font-mono text-xs tracking-[0.25em] text-brass-dark uppercase">Front Desk FAQ</span>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">Questions, answered.</h2>
        </div>

        <div className="divide-y divide-ink/10 rounded-3xl border-2 border-ink/10 bg-cream">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-base font-semibold">{item.q}</span>
                  <ChevronIcon className={`h-5 w-5 shrink-0 text-ink-soft transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-sm leading-relaxed text-ink-soft">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
