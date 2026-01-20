import { FeaturedProjects } from "@/features/home/featured-projects";
import { Navigation } from "@/features/home/navigation";
import { Hero } from "./features/home/hero";
import { Footer } from "@/features/home/footer";
import { Career } from "./features/home/career";

export function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <Career />
        <FeaturedProjects />
        {/* <RecentPosts /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
