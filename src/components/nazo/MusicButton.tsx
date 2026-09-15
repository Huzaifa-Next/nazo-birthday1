import { useRef, useState } from "react";

/** Small corner player. Replace public/assets/music.mp3 with your song. */
export function MusicButton() {
  const audio = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [missing, setMissing] = useState(false);

  const toggle = async () => {
    const el = audio.current;
    if (!el) return;
    try {
      if (playing) {
        el.pause();
        setPlaying(false);
      } else {
        await el.play();
        setPlaying(true);
      }
    } catch {
      setMissing(true);
    }
  };

  return (
    <>
      <audio ref={audio} src="/assets/music.mp3" loop preload="none" onError={() => setMissing(true)} />
      <button
        onClick={toggle}
        aria-pressed={playing}
        aria-label={playing ? "Pause our song" : "Play our song"}
        className="glass-card fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full px-4 py-2.5 text-sm text-foreground transition-transform duration-300 hover:scale-[1.05]"
      >
        <span className={playing ? "anim-bob text-rose" : "text-rose"}>♫</span>
        <span className="tracking-wide">
          {missing ? "add music.mp3" : playing ? "playing" : "Our song"}
        </span>
      </button>
    </>
  );
}
