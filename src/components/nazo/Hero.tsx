import { useState } from "react";
import { Particles } from "./Particles";

function Candle({ lit, delay }: { lit: boolean; delay: number }) {
  return (
    <div className="relative flex flex-col items-center">
      {lit ? (
        <span
          className="anim-flicker mb-1 h-4 w-2.5 rounded-full bg-gold"
          style={{
            animationDelay: `${delay}ms`,
            boxShadow: "0 0 18px 6px color-mix(in oklab, var(--gold) 55%, transparent)",
          }}
        />
      ) : (
        <span className="mb-1 h-4 w-2.5 rounded-full bg-muted-foreground/25" />
      )}
      <span className="h-8 w-1.5 rounded-full bg-blush" />
    </div>
  );
}

export function Hero() {
  const [lit, setLit] = useState(true);

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col items-center justify-center px-6 py-24 text-center"
    >
      <Particles count={18} />

      <div className="relative z-10 max-w-2xl">
        <p className="text-xs tracking-[0.35em] text-muted-foreground uppercase">
          september • 16
        </p>
        <h1 className="text-gradient-rose mt-5 text-5xl leading-[1.05] font-semibold sm:text-7xl">
          Happy Birthday, Meri Nazo ♡
        </h1>
        <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
          Meri Pasandida Aurat, on your special day.
        </p>

        {/* Cake */}
        <div className="mt-14 flex flex-col items-center">
          <button
            onClick={() => setLit(false)}
            aria-label={lit ? "Blow out the candles" : "Candles are out"}
            className="group anim-bob cursor-pointer"
            style={{ "--bob-dur": "7s" } as React.CSSProperties}
          >
            <div className="flex items-end justify-center gap-3">
              {[0, 180, 360].map((d) => (
                <Candle key={d} lit={lit} delay={d} />
              ))}
            </div>
            <div className="mt-1 w-56 rounded-t-3xl bg-cream px-4 pt-4 pb-2 shadow-[var(--shadow-soft)] sm:w-64">
              <div className="h-6 rounded-full bg-blush/70" />
            </div>
            <div className="w-56 bg-card px-4 py-3 shadow-[var(--shadow-soft)] sm:w-64">
              <div className="h-6 rounded-full bg-accent/50" />
            </div>
            <div className="w-56 rounded-b-3xl bg-cream px-4 py-4 shadow-[var(--shadow-soft)] sm:w-64">
              <div className="h-5 rounded-full bg-blush/50" />
            </div>
            <div className="mx-auto mt-2 h-2 w-40 rounded-full bg-primary/10 blur-[3px]" />
          </button>

          <p className="mt-6 min-h-14 max-w-md">
            {lit ? (
              <span className="text-sm text-muted-foreground">
                tap the cake and blow out the candles ✿
              </span>
            ) : (
              <span className="anim-ink font-hand block text-2xl text-rose sm:text-3xl">
                Meri Januu, aj hamay sath 14 mahine hogae hain… aur meri dua hai ke ye 14 mahine or apki dusri birthday sirf shurvaat ho. 🙈😘 Hum ese hi hanste, larte, pyar karte hue aglay 10–12 saal nahi, balkay puri zindagi sath guzarein. 💋❣
              </span>
            )}
          </p>
        </div>

        <a
          href="#letter"
          className="mt-12 inline-block text-sm tracking-wide text-muted-foreground transition-colors hover:text-primary"
        >
          <span className="anim-bob block" style={{ "--bob-dur": "3s" } as React.CSSProperties}>
            Neechay aein Januu... ↓
          </span>
        </a>
      </div>
    </section>
  );
}
