import { HugeiconsIcon } from "@hugeicons/react";
import { GithubIcon, ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { Link } from "@tanstack/react-router";
import { projects } from "@/constant/projects";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function FeaturedProjects() {
  return (
    <section id="projects" className="container mx-auto px-4 py-16">
      <div className="flex items-center justify-between mb-16">
        <h2 className="text-3xl font-bold">Featured Projects</h2>
        <Link
          to="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors group"
        >
          View all
          <HugeiconsIcon
            icon={ArrowUpRight01Icon}
            size={15}
            strokeWidth={2}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          />
        </Link>
      </div>

      <div className="flex flex-col">
        {projects
          .filter((project) => project.featured)
          .map((project, index) => {
            const isEven = index % 2 === 1;

            return (
              <div key={index}>
                <div
                  className={`flex flex-col md:flex-row items-start gap-12 py-16 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Text side */}
                  <div className="flex-1 flex flex-col gap-6">
                    <h3 className="text-2xl font-bold leading-tight">
                      {project.title}
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs border border-border rounded-full text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-6 pt-2">
                      {project.sourceUrl && (
                        <a
                          href={project.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#E07B54] hover:bg-[#cc6e49] text-white text-sm font-medium rounded transition-colors"
                        >
                          <HugeiconsIcon
                            icon={GithubIcon}
                            size={16}
                            strokeWidth={2}
                          />
                          View Github
                        </a>
                      )}
                      {project.websiteUrl && (
                        <a
                          href={project.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            buttonVariants({ variant: "outline" }),
                            "inline-flex items-center gap-1.5 text-sm text-foreground hover:text-primary transition-colors group"
                          )}
                        >
                          Visit Website
                          <HugeiconsIcon
                            icon={ArrowUpRight01Icon}
                            size={16}
                            strokeWidth={2}
                            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                          />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Image side */}
                  {project.image && (
                    <div className="flex-1 w-full">
                      <div className="relative border border-border rounded-lg overflow-hidden bg-card">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="size-full object-contain object-top"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {index < projects.length - 1 && (
                  <div className="border-t border-border" />
                )}
              </div>
            );
          })}
      </div>
    </section>
  );
}
