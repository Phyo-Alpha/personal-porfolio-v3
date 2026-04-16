import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft02Icon } from "@hugeicons/core-free-icons";
import { projects } from "@/constant/projects";
import type { ProjectCategory } from "@/constant/projects";
import { Navigation } from "@/features/home/navigation";
import { Footer } from "@/features/home/footer";
import { BentoGrid, BentoProjectCard } from "@/components/ui/bento-grid";
import { cn } from "@/lib/utils";

type FilterTab = "All" | ProjectCategory;

const TABS: FilterTab[] = ["All", "Javascript Based", "Wordpress"];

const BENTO_CLASSES = [
  "col-span-1 row-span-1 lg:col-span-2 lg:row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
];

export function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<FilterTab>("All");

  const filtered =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-border/60">
          <div
            className="pointer-events-none absolute inset-0 bg-grid mask-radial-fade opacity-60"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[320px] w-[640px] rounded-full bg-primary/20 blur-[120px]"
            aria-hidden
          />
          <div className="container relative mx-auto px-4 py-16 md:py-20 max-w-6xl">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <HugeiconsIcon icon={ArrowLeft02Icon} size={16} strokeWidth={2} />
              Back to home
            </Link>

            <div className="flex items-end justify-between gap-4 animate-reveal">
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-xs font-medium tracking-widest text-primary uppercase">
                  <span className="tabular-nums">04</span>
                  <span className="h-px w-8 bg-primary/50" aria-hidden />
                  <span>Archive</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gradient-primary">
                  All projects
                </h1>
                <p className="text-muted-foreground text-sm md:text-base">
                  A collection of things I've built — for clients, experiments,
                  and everything in between.
                </p>
              </div>
              <span className="text-muted-foreground text-sm tabular-nums">
                {filtered.length.toString().padStart(2, "0")} / {projects.length.toString().padStart(2, "0")}
              </span>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 max-w-6xl">
          {/* Filter tabs */}
          <div className="flex flex-wrap items-center gap-1 mb-10 rounded-full border border-border bg-card/40 p-1 w-fit backdrop-blur">
            {TABS.map((tab) => {
              const count =
                tab === "All"
                  ? projects.length
                  : projects.filter((p) => p.category === tab).length;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "relative px-4 py-1.5 text-sm rounded-full transition-colors",
                    activeTab === tab
                      ? "bg-primary/15 text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {tab}
                  <sup className="ml-0.5 text-[10px] opacity-60">
                    {count.toString().padStart(2, "0")}
                  </sup>
                </button>
              );
            })}
          </div>

          {/* Bento grid */}
          {filtered.length === 0 ? (
            <p className="text-muted-foreground text-sm">
              No projects in this category yet.
            </p>
          ) : (
            <BentoGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[260px] md:auto-rows-[220px]">
              {filtered.map((project, index) => {
                const patternIndex = index % 3;
                return (
                  <BentoProjectCard
                    key={project.title}
                    title={project.title}
                    category={project.category}
                    image={project.image}
                    href={project.websiteUrl ?? project.sourceUrl}
                    className={BENTO_CLASSES[patternIndex]}
                  />
                );
              })}
            </BentoGrid>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
