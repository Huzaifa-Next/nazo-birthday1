import { useReveal } from "@/hooks/use-reveal";
import { Particles } from "./Particles";

export function Finale() {
  const { ref, cls } = useReveal<HTMLDivElement>();

  return (
    <section id="finale" className="relative overflow-hidden px-6 py-32 text-center sm:py-40">
      <Particles count={26} kinds={["heart", "sparkle"]} />

      <div ref={ref} className={`${cls} relative z-10 mx-auto max-w-2xl`}>
        <h2 className="text-gradient-rose text-4xl leading-tight font-semibold sm:text-6xl">
          Happy Birthday, Meri Pyari Nazo. ♡
        </h2>

        <p className="mt-10 text-lg leading-relaxed text-foreground/80 sm:text-xl">
          If I could give you one thing this year,
          <br />
          I'd give you the ability to see yourself
          <br />
          through my eyes.
        </p>

        <p className="mt-8 text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Maybe then you'd finally understand
          <br />
          just how special you are to me.
        </p>

        <p className="mt-14 font-hand text-4xl text-rose sm:text-5xl">I love you so so so much. 💋💋</p>
        <p className="mt-6 text-sm tracking-[0.25em] text-muted-foreground uppercase">
          — from your boy
        </p>
      </div>
    </section>
  );
}
