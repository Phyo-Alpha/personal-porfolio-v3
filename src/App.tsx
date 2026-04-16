import { FeaturedProjects } from "@/features/home/featured-projects";
import { Navigation } from "@/features/home/navigation";
import { Hero } from "./features/home/hero";
import { Footer } from "@/features/home/footer";
import { Career } from "./features/home/career";
import { TechStackContainer } from "./features/home/tech-stack";
import { TECHNOLOGIES } from "./constant/technologies";

export function App() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <Career />
        <TechStackContainer techs={TECHNOLOGIES} />
        <FeaturedProjects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
