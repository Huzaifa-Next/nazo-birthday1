import { useReveal } from "@/hooks/use-reveal";

const LINES = [
  "Nazo,",
  "I don't think a website could ever properly explain how special you are to me, but I wanted to try anyway...",
  "Meri Pyari Januuu — Ap meri zindagi ka woh hisa ho jiske bina ab main apni zindagi soch bhi nahi sakta. Ap sirf meri aurat nahi ho, ap meri favourite person, meri khushi, mera sukoon, aur mera ghar ho. ♡",
  "Apka wo ludo mai blkl gawar hona inni pyari bari ankho se meri taraf dekhna k mai kuch karunga phir hamara pehli baar akele milna or ab miya biwi ki tarah larna januuuuu yeh saal jo apne mujhe diya hai meri zindagi ka best saal hai",
  "Thank you for being you.",
  "Thank you for all the little moments.",
  "And most importantly, thank you for being someone I can call mine.",
  "Happy Birthday, my girl. 🙈💗💋😘",
];
/* ─────────────────────────────────────────────────────────────── */

function Line({ text, index }: { text: string; index: number }) {
  const { ref, cls } = useReveal<HTMLParagraphElement>(0.6);
  return (
    <p
      ref={ref}
      className={`${cls} font-hand text-2xl leading-relaxed text-foreground/85 sm:text-3xl`}
      style={{ "--reveal-delay": `${index * 60}ms` } as React.CSSProperties}
    >
      {text}
    </p>
  );
}

export function Letter() {
  const { ref, cls } = useReveal<HTMLHeadingElement>();

  return (
    <section id="letter" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-2xl">
        <h2 ref={ref} className={`${cls} text-center text-3xl font-light sm:text-4xl`}>
          A little something I wanted to tell you...
        </h2>

        <div className="glass-card mt-14 rounded-4xl px-7 py-12 sm:px-14 sm:py-16">
          <div className="space-y-7">
            {LINES.map((l, i) => (
              <Line key={i} text={l} index={i} />
            ))}
          </div>
          <p className="mt-12 text-right font-hand text-xl text-rose">— from your boy</p>
        </div>
      </div>
    </section>
  );
}
