import Hero from "~/components/main/hero";
import type { Route } from "../+types/root";
import { Skills } from "~/components/main/skills";
import AboutMe from "~/components/main/about";
import NoteWorthyProjects from "~/components/main/noteworth-projects";
import { Contact } from "~/components/main/contact";
import Footer from "~/components/layout/footer";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Edward's Portfolio" },
    { name: "description", content: "Welcome to Edward's Portfolio!" },
  ];
}

export default function Home() {
  return (
    <main className="flex flex-col gap-12 md:gap-22 lg:gap-32 xl:gap-52 items-center mt-12 justify-center">
      <Hero />
      <AboutMe />
      <Skills />
      <NoteWorthyProjects />
      <Contact />
      <Footer />
    </main>
  );
}
