import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";

/* ── EDIT ME: the little things ─────────────────────────────────── */
const THINGS = [
  { title: "Your smile", note: "It fixes days you don't even know were broken, and that smile specially when you're trying so hard to not smile." },
  { title: "The way you laugh", note: "That sound is my favorite song." },
  { title: "Your Love", note: "Makes me want to do 100 times better and treat you with so much and care like you deserve." },
  { title: "Your Eyes", note: "Can even make the dead human blush big brown eyes but works like black hole see it once you're stuck" },
  { title: "Your sexy ahh body", note: "When I’m listing things about you and don’t mention your body, then I’m fake Huzaifa, because god damn, that body is so juicy and sexy—I can’t control myself." },
  { title: "And Simply... you", note: "You are what you are and i love you so much please don't ever change you are my better half, meri januuu, mera pyara bacha, meri chanda, meri biwi. ♡" },
];
/* ──────────────────────────────────────────────────────────────── */

export function LoveList() {
  const { ref, cls } = useReveal<HTMLDivElement>();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="things" className="relative px-6 py-28 sm:py-36">
      <div ref={ref} className={`${cls} mx-auto max-w-4xl`}>
        <h2 className="text-center text-3xl font-light sm:text-4xl">Things I love about YOU ♡</h2>
        <p className="mt-4 text-center text-sm text-muted-foreground">tap a card to open it</p>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {THINGS.map((t, i) => {
            const isOpen = open === i;
            return (
              <button
                key={t.title}
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className={`anim-bob glass-card rounded-3xl px-6 py-7 text-left transition-all duration-500 hover:-translate-y-1.5 ${
                  isOpen ? "ring-1 ring-primary/40" : ""
                }`}
                style={
                  {
                    "--bob-dur": `${5.5 + (i % 3) * 1.2}s`,
                    "--bob-delay": `${i * 0.4}s`,
                    "--bob-rot": `${i % 2 ? 0.8 : -0.8}deg`,
                  } as React.CSSProperties
                }
              >
                <span className="font-display block text-xl text-foreground">{t.title}</span>
                <span
                  className={`grid overflow-hidden transition-all duration-500 ${
                    isOpen ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <span className="font-hand block min-h-0 text-xl leading-snug text-rose">
                    {t.note}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
