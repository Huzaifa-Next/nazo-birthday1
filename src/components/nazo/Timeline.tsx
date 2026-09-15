import { useReveal } from "@/hooks/use-reveal";


const STEPS = [
  { label: "The beginning", text: "Api ne call nhi uthayi us se shuru hua apko pehli baar dekhna apse baat krna." },
  { label: "That one unforgettable day", text: "Jb ap akeli mere pass ayi thi 25 august 2:21 kya sukoon tha kya maja tha." },
  { label: "One of my favorite moments", text: "Tere sath toh favourite moment hi itne hein k choose krna impossible hai lekin 1 moment toh waha toh moments hein unginnat or jab yaad kro tb khush ho apki khirkhi k januuu apni zindagi k best moments waha guzaray hein maine apke gaal khichna apko inna pyar krna hath pakarna ap kaato mujhe nakhun maaro." },
  { label: "Today", text: "Celebrating you. ♡" },
];
/* ──────────────────────────────────────────────────────────────── */

function Step({ step, i }: { step: (typeof STEPS)[number]; i: number }) {
  const { ref, cls } = useReveal<HTMLLIElement>(0.4);
  return (
    <li ref={ref} className={`${cls} relative pl-14`}>
      <span
        className="anim-bob absolute left-[14px] top-2 grid h-6 w-6 -translate-x-1/2 place-items-center rounded-full bg-primary text-[10px] text-primary-foreground"
        style={
          {
            boxShadow: "0 0 18px 4px color-mix(in oklab, var(--rose) 40%, transparent)",
            "--bob-dur": `${4 + i}s`,
          } as React.CSSProperties
        }
      >
        ♥
      </span>
      <p className="text-xs tracking-[0.22em] text-muted-foreground uppercase">{step.label}</p>
      <p className="mt-2 font-hand text-2xl text-foreground/85 sm:text-3xl">{step.text}</p>
    </li>
  );
}

export function Timeline() {
  const { ref, cls } = useReveal<HTMLHeadingElement>();

  return (
    <section id="timeline" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-2xl">
        <h2 ref={ref} className={`${cls} text-center text-3xl font-light sm:text-4xl`}>
          Somewhere between then and now...
        </h2>

        <ol className="relative mt-16 space-y-16">
          <span
            aria-hidden
            className="absolute left-[14px] top-2 bottom-2 w-px"
            style={{
              background:
                "linear-gradient(to bottom, transparent, color-mix(in oklab, var(--rose) 55%, transparent), color-mix(in oklab, var(--lavender) 65%, transparent), transparent)",
              boxShadow: "0 0 12px 1px color-mix(in oklab, var(--rose) 30%, transparent)",
            }}
          />
          {STEPS.map((s, i) => (
            <Step key={s.label} step={s} i={i} />
          ))}
        </ol>
      </div>
    </section>
  );
}
