import { createFileRoute } from "@tanstack/react-router";

import { Hero } from "@/components/sections/hero";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <Hero />;
}
