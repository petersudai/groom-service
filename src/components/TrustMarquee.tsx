import PawIcon from "./PawIcon";

const ITEMS = [
  "Fear Free Certified",
  "4.9★ on Google",
  "Cage-Free Studio",
  "Creative Color Certified",
  "Dogs & Cats Welcome",
  "Open 7 Days",
  "Member Rebooking 96%",
  "Est. 2019 · West Hollywood",
];

export default function TrustMarquee() {
  const loop = [...ITEMS, ...ITEMS];

  return (
    <div className="relative overflow-hidden border-y-2 border-ink bg-ink py-3.5">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex items-center" aria-hidden={copy === 1}>
            {loop.map((item, i) => (
              <li
                key={`${copy}-${i}`}
                className="flex items-center gap-3 px-6 font-display text-sm font-semibold tracking-wide whitespace-nowrap text-cream"
              >
                <PawIcon className="h-4 w-4 text-sunshine" />
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
