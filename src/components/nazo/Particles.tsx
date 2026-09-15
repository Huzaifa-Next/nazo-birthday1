import { useMemo } from "react";

type Kind = "heart" | "star" | "petal" | "sparkle";

function Glyph({ kind }: { kind: Kind }) {
  if (kind === "heart")
    return (
      <svg viewBox="0 0 24 24" className="h-full w-full fill-primary/60">
        <path d="M12 21s-7.5-4.7-9.4-9A5.4 5.4 0 0 1 12 6.2 5.4 5.4 0 0 1 21.4 12c-1.9 4.3-9.4 9-9.4 9Z" />
      </svg>
    );
  if (kind === "petal")
    return (
      <svg viewBox="0 0 24 24" className="h-full w-full fill-accent/70">
        <path d="M12 2c5 4 8 7 8 11a8 8 0 0 1-16 0c0-4 3-7 8-11Z" />
      </svg>
    );
  if (kind === "star")
    return (
      <svg viewBox="0 0 24 24" className="h-full w-full fill-gold/70">
        <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2Z" />
      </svg>
    );
  return <span className="block h-full w-full rounded-full bg-lavender/70" />;
}

/** Ambient floating hearts, petals, stars and sparkles. Purely decorative. */
export function Particles({
  count = 22,
  kinds = ["heart", "petal", "sparkle", "star"] as Kind[],
  className = "",
}: {
  count?: number;
  kinds?: Kind[];
  className?: string;
}) {
  const bits = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const r = (n: number) => ((Math.sin(i * 12.9898 + n) * 43758.5453) % 1 + 1) % 1;
        return {
          id: i,
          kind: kinds[Math.floor(r(1) * kinds.length)]!,
          left: `${r(2) * 100}%`,
          size: 8 + r(3) * 18,
          dur: `${13 + r(4) * 16}s`,
          delay: `${-r(5) * 22}s`,
          x: `${(r(6) - 0.5) * 140}px`,
          op: 0.25 + r(7) * 0.5,
        };
      }),
    [count, kinds],
  );

  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {bits.map((b) => (
        <span
          key={b.id}
          className="anim-drift absolute bottom-[-12vh]"
          style={
            {
              left: b.left,
              width: b.size,
              height: b.size,
              "--drift-dur": b.dur,
              "--drift-delay": b.delay,
              "--drift-x": b.x,
              "--drift-opacity": b.op,
            } as React.CSSProperties
          }
        >
          <Glyph kind={b.kind} />
        </span>
      ))}
    </div>
  );
}

/** Twinkling star field for the night sections. */
export function StarField({ count = 60, bright = false }: { count?: number; bright?: boolean }) {
  const stars = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const r = (n: number) => ((Math.sin(i * 7.331 + n) * 24634.6345) % 1 + 1) % 1;
        return {
          id: i,
          top: `${r(1) * 100}%`,
          left: `${r(2) * 100}%`,
          size: 1.5 + r(3) * 2.5,
          dur: `${2.5 + r(4) * 4}s`,
          delay: `${r(5) * 5}s`,
        };
      }),
    [count],
  );

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((s) => (
        <span
          key={s.id}
          className={`anim-twinkle absolute rounded-full bg-cream ${bright ? "opacity-100" : ""}`}
          style={
            {
              top: s.top,
              left: s.left,
              width: s.size,
              height: s.size,
              boxShadow: bright ? "0 0 10px currentColor" : "0 0 4px currentColor",
              "--tw-dur": s.dur,
              "--tw-delay": s.delay,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
