import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { Opening } from "@/components/nazo/Opening";
import { Hero } from "@/components/nazo/Hero";
import { Letter } from "@/components/nazo/Letter";
import { Gallery } from "@/components/nazo/Gallery";
import { LoveList } from "@/components/nazo/LoveList";
import { Timeline } from "@/components/nazo/Timeline";
import { Gift } from "@/components/nazo/Gift";
import { Wish } from "@/components/nazo/Wish";
import { Finale } from "@/components/nazo/Finale";
import { MusicButton } from "@/components/nazo/MusicButton";

const title = "For Nazo — Happy Birthday ♡";
const description =
  "A little digital love letter for Nazo's birthday: memories, wishes, and all the things I love about her.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [opened, setOpened] = useState(false);

  return (
    <main>
      {!opened && <Opening onOpen={() => setOpened(true)} />}

      <div className={opened ? "opacity-100 transition-opacity duration-1000" : "opacity-0"}>
        <Hero />
        <Letter />
        <Gallery />
        <LoveList />
        <Timeline />
        <Gift />
        <Wish />
        <Finale />
        <MusicButton />
      </div>
    </main>
  );
}
