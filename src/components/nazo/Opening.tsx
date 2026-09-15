import { useState } from "react";
import { Particles, StarField } from "./Particles";

export function Opening({ onOpen }: { onOpen: () => void }) {
  const [opened, setOpened] = useState(false);
  const [leaving, setLeaving] = useState(false);

  const open = () => {
    setOpened(true);
    window.setTimeout(() => setLeaving(true), 2100);
    window.setTimeout(onOpen, 3000);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden transition-all duration-900 ${
        leaving ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      style={{ background: "var(--gradient-dawn)" }}
    >
      <div className="absolute inset-0 opacity-40">
        <StarField count={40} />
      </div>
      <Particles count={opened ? 46 : 16} />

      <div className="relative z-10 mx-auto max-w-xl px-6 text-center">
        {!opened ? (
          <div className="anim-ink">
            <p className="font-hand text-4xl text-rose sm:text-5xl">Sun na januu...</p>
            <h1 className="mt-6 text-3xl leading-tight font-light text-foreground sm:text-4xl">
              I made a little something for you. 🙈
            </h1>
            <button
              onClick={open}
              className="anim-glow mt-12 rounded-full bg-primary px-9 py-4 text-base font-medium tracking-wide text-primary-foreground transition-transform duration-300 hover:scale-[1.04] active:scale-[0.98]"
            >
              Open Your Surprise ♡
            </button>
            <p className="mt-8 text-xs tracking-[0.25em] text-muted-foreground uppercase">
              just for you
            </p>
          </div>
        ) : (
          <div className="anim-ink">
            <h1 className="text-gradient-rose text-5xl leading-tight font-semibold sm:text-7xl">
              Happy Birthday, Meri Januuuuu 💋
            </h1>
            <p className="mt-6 font-hand text-2xl text-muted-foreground">
              let me show you something...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
