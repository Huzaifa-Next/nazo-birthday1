import { useEffect, useState } from "react";
import { useReveal } from "@/hooks/use-reveal";

/* ── EDIT ME: swap the files in public/assets/ and the captions ── */
const PHOTOS = [
  { src: "/assets/nazo-1.jpeg", caption: "One of my favorite memories. Miya Biwi. 😋", tilt: "-2.5deg", span: "sm:col-span-7 sm:row-span-2" },
  { src: "/assets/nazo-2.jpeg", caption: "Look at you just the prettiest human being ever. 😘", tilt: "2deg", span: "sm:col-span-5" },
  { src: "/assets/nazo-3.jpeg", caption: "I'd choose this moment again. 🙈", tilt: "-1.5deg", span: "sm:col-span-5" },
  { src: "/assets/nazo-4.jpeg", caption: "Apko meri yeh li v pictures kbhi achi nhi lagi lekin memory toh yeh bhi bht pyari hai. 💕", tilt: "1.8deg", span: "sm:col-span-12" },
];
/* ──────────────────────────────────────────────────────────────── */

export function Gallery() {
  const { ref, cls } = useReveal<HTMLDivElement>();
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const active = open === null ? null : PHOTOS[open]!;

  return (
    <section id="memories" className="relative px-6 py-28 sm:py-36">
      <div ref={ref} className={`${cls} mx-auto max-w-5xl`}>
        <h2 className="text-center text-3xl font-light sm:text-4xl">
          Little moments, big memories ♡
        </h2>
        <p className="mt-4 text-center text-sm text-muted-foreground">
          tap any picture to see it properly
        </p>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-12">
          {PHOTOS.map((p, i) => (
            <button
              key={p.src}
              onClick={() => setOpen(i)}
              className={`${p.span} group relative overflow-hidden rounded-3xl bg-card shadow-[var(--shadow-soft)] transition-all duration-500 hover:z-10 hover:-translate-y-2 hover:rotate-0`}
              style={{ transform: `rotate(${p.tilt})` }}
            >
              <img
                src={p.src}
                alt={p.caption}
                loading="lazy"
                className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-full sm:min-h-64"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/55 to-transparent px-5 pt-12 pb-4 text-left text-sm text-cream opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                {p.caption}
              </span>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-5 bg-foreground/75 px-5 py-10 backdrop-blur-md animate-in fade-in duration-300"
        >
          <img
            src={active.src}
            alt={active.caption}
            className="max-h-[72svh] w-auto max-w-full rounded-3xl shadow-[var(--shadow-glow)] animate-in zoom-in-95 duration-500"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="font-hand text-2xl text-cream">{active.caption}</p>
          <button
            onClick={() => setOpen(null)}
            className="rounded-full border border-cream/40 px-6 py-2 text-sm text-cream transition-colors hover:bg-cream/15"
          >
            close
          </button>
        </div>
      )}
    </section>
  );
}
