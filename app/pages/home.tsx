import Hero from "~/components/main/hero";
import type { Route } from "../+types/root";
import { Skills } from "~/components/main/skills";
import { StarsCanvas } from "~/components/sub/stars";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Edward's Portfolio" },
    { name: "description", content: "Welcome to Edward's Portfolio!" },
  ];
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <StarsCanvas />
    </main>
  );
}
