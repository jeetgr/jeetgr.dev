import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/sections/about";
import { Hero } from "@/components/sections/hero";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <>
      <Hero />
      <About />
    </>
  );
}
