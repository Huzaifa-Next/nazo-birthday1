import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { StarField } from "./Particles";

export function Wish() {
  const { ref, cls } = useReveal<HTMLDivElement>();
  const [wished, setWished] = useState(false);

  return (
    <section
      id="wish"
      className="relative isolate overflow-hidden px-6 py-32 text-center sm:py-40"
      style={{ background: "var(--gradient-night)" }}
    >
      <StarField count={70} bright={wished} />

      {/* moon */}
      <span
        aria-hidden
        className="anim-bob absolute right-8 top-14 h-24 w-24 rounded-full bg-cream/90 sm:right-24 sm:h-32 sm:w-32"
        style={
          {
            boxShadow: "0 0 70px 24px color-mix(in oklab, var(--cream) 32%, transparent)",
            "--bob-dur": "9s",
          } as React.CSSProperties
        }
      />

      {wished && (
        <span
          aria-hidden
          className="anim-shoot absolute left-0 top-24 h-0.5 w-40 rounded-full bg-cream"
          style={{ boxShadow: "0 0 16px 4px color-mix(in oklab, var(--cream) 60%, transparent)" }}
        />
      )}

      {wished && (
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          {Array.from({ length: 18 }).map((_, i) => (
            <span
              key={i}
              className="anim-drift absolute bottom-0 h-1.5 w-1.5 rounded-full bg-gold"
              style={
                {
                  left: `${(i * 37) % 100}%`,
                  "--drift-dur": `${5 + (i % 5)}s`,
                  "--drift-delay": `${i * 0.18}s`,
                  "--drift-x": `${((i % 7) - 3) * 24}px`,
                  "--drift-opacity": 0.9,
                } as React.CSSProperties
              }
            />
          ))}
        </div>
      )}

      <div ref={ref} className={`${cls} relative z-10 mx-auto max-w-xl text-night-foreground`}>
        <h2 className="text-3xl font-light sm:text-5xl">Make a wish, Nazo ✨</h2>

        {!wished ? (
          <button
            onClick={() => setWished(true)}
            className="mt-12 rounded-full border border-night-foreground/35 bg-night-foreground/10 px-9 py-4 font-medium text-night-foreground backdrop-blur-sm transition-all duration-300 hover:scale-[1.04] hover:bg-night-foreground/20"
          >
            Make a Wish ♡
          </button>
        ) : (
          <p className="anim-ink mt-12 font-hand text-3xl leading-snug sm:text-4xl">
            I hope every beautiful thing you deserve finds its way to you.
          </p>
        )}
      </div>
    </section>
  );
}
