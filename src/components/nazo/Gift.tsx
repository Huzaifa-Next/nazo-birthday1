import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { Particles } from "./Particles";

export function Gift() {
  const { ref, cls } = useReveal<HTMLDivElement>();
  const [open, setOpen] = useState(false);

  return (
    <section id="gift" className="relative overflow-hidden px-6 py-28 sm:py-36">
      {open && <Particles count={30} kinds={["heart", "sparkle"]} />}

      <div ref={ref} className={`${cls} relative z-10 mx-auto max-w-xl text-center`}>
        <h2 className="text-3xl font-light sm:text-4xl">I have one more thing for you...</h2>

        <div className="mt-14 flex justify-center">
          <div className="relative h-44 w-44">
            <span
              className={`absolute left-0 top-4 h-8 w-44 rounded-xl bg-primary ${open ? "anim-lid" : "anim-bob"}`}
              style={{ "--bob-dur": "5s" } as React.CSSProperties}
            />
            <span
              className={`absolute left-1/2 top-0 h-6 w-10 -translate-x-1/2 rounded-full border-4 border-primary ${open ? "anim-lid" : ""}`}
            />
            <span className="absolute bottom-0 left-2 h-32 w-40 rounded-2xl bg-blush shadow-[var(--shadow-soft)]" />
            <span className="absolute bottom-0 left-[74px] h-32 w-4 bg-primary/70" />
          </div>
        </div>

        {!open ? (
          <button
            onClick={() => setOpen(true)}
            className="anim-glow mt-12 rounded-full bg-primary px-9 py-4 font-medium text-primary-foreground transition-transform duration-300 hover:scale-[1.04] active:scale-[0.98]"
          >
            Open it ♡
          </button>
        ) : (
          <div className="anim-ink mt-12 space-y-5">
            <p className="text-gradient-rose text-5xl font-semibold sm:text-6xl">Mera Pyar</p>
            <p className="text-muted-foreground">
              Dikhega toh nhi lekin hai bht sara ∞.
            </p>
            <p className="font-hand text-2xl text-rose sm:text-3xl">
              And, it's a reminder that you're loved more than you can ever realize.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
