import Hero from "~/components/main/hero";
import type { Route } from "../+types/root";
import { Skills } from "~/components/main/skills";
import AboutMe from "~/components/main/about";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Edward's Portfolio" },
    { name: "description", content: "Welcome to Edward's Portfolio!" },
  ];
}

export default function Home() {
  return (
    <main className="flex flex-col gap-10 items-center">
      <Hero />
      <AboutMe />
      <Skills />
    </main>
  );
}
