import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft02Icon } from "@hugeicons/core-free-icons";
import { projects } from "@/constant/projects";
import type { ProjectCategory } from "@/constant/projects";
import { Navigation } from "@/features/home/navigation";
import { BentoGrid, BentoProjectCard } from "@/components/ui/bento-grid";

type FilterTab = "All" | ProjectCategory;

const TABS: FilterTab[] = ["All", "Javascript Based", "Wordpress"];

// Bento sizing pattern — cycles every 3 cards (desktop only, mobile is single column)
const BENTO_CLASSES = [
  "col-span-1 row-span-1 lg:col-span-2 lg:row-span-2", // large on desktop
  "col-span-1 row-span-1",                              // small
  "col-span-1 row-span-1",                              // small
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
      <main className="flex-1 container mx-auto px-4 py-12 max-w-6xl">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <HugeiconsIcon icon={ArrowLeft02Icon} size={16} strokeWidth={2} />
          Back to home
        </Link>

        <div className="flex items-end justify-between mb-10">
          <h1 className="text-2xl md:text-4xl font-bold">All Projects</h1>
          <span className="text-muted-foreground text-sm tabular-nums">
            {filtered.length.toString().padStart(2, "0")}
          </span>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap items-center gap-1 mb-10">
          {TABS.map((tab) => {
            const count =
              tab === "All"
                ? projects.length
                : projects.filter((p) => p.category === tab).length;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-4 py-1.5 text-sm rounded-full transition-colors ${
                  activeTab === tab
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
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
      </main>
    </div>
  );
}
