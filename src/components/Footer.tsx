import { useState } from "react";
import Logo from "./Logo";

export default function Footer() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <footer className="bg-ink px-6 pt-16 pb-8 text-cream/70 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 border-b border-dashed border-cream/20 pb-12 md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <div className="text-cream/90">
              <Logo variant="dark" />
            </div>
            <p className="mt-4 max-w-xs text-sm text-cream/50">
              The boutique grooming hotel for modern pets. Fear Free certified, one property on Santa Monica Blvd.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs tracking-widest text-cream/40 uppercase">Property</p>
            <nav className="mt-4 flex flex-col gap-2.5 text-sm">
              <a href="#services" className="hover:text-gold">The Suites</a>
              <a href="#membership" className="hover:text-gold">Loyalty Program</a>
              <a href="#gallery" className="hover:text-gold">Gallery</a>
              <a href="#about" className="hover:text-gold">Our Story</a>
              <a href="#reviews" className="hover:text-gold">Guestbook</a>
            </nav>
          </div>

          <div>
            <p className="font-mono text-xs tracking-widest text-cream/40 uppercase">Company</p>
            <nav className="mt-4 flex flex-col gap-2.5 text-sm">
              <a href="#visit" className="hover:text-gold">Visit the property</a>
              <a href="#book" className="hover:text-gold">Reserve a stay</a>
              <a href="mailto:hello@groomservice.co" className="hover:text-gold">Franchise &amp; multi-location inquiries</a>
              <a href="mailto:hello@groomservice.co" className="hover:text-gold">Careers</a>
            </nav>
          </div>

          <div>
            <p className="font-mono text-xs tracking-widest text-cream/40 uppercase">Get the scoop</p>
            <p className="mt-4 text-sm text-cream/50">Grooming tips, new property openings, and the occasional good-dog photo.</p>
            {submitted ? (
              <p className="mt-3 font-display text-sm font-semibold text-gold">You&rsquo;re on the list. 🐾</p>
            ) : (
              <form
                className="mt-3 flex gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <input
                  type="email"
                  required
                  placeholder="you@email.com"
                  aria-label="Email address"
                  className="min-w-0 flex-1 rounded-full border border-cream/20 bg-cream/5 px-4 py-2.5 text-sm text-cream placeholder:text-cream/35 focus:border-gold focus:outline-none"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-full bg-cream px-4 py-2.5 font-display text-xs font-bold tracking-wide text-ink transition-colors hover:bg-gold"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-6 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-cream/40">&copy; {new Date().getFullYear()} Groom Service Hospitality Co.</p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs tracking-wide">
            <a href="#" className="hover:text-gold">Instagram</a>
            <a href="#" className="hover:text-gold">TikTok</a>
            <a href="#" className="hover:text-gold">Facebook</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
