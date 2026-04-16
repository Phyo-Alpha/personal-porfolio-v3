import type { ReactNode } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  GithubIcon,
  ArrowUpRight01Icon,
  Link04Icon,
} from "@hugeicons/core-free-icons";
import { Link } from "@tanstack/react-router";
import { projects } from "@/constant/projects";
import { SectionHeader } from "@/components/ui/section-header";

function ProjectFrame({
  href,
  className,
  children,
}: {
  href?: string;
  className?: string;
  children: ReactNode;
}) {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }
  return <div className={className}>{children}</div>;
}

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="container mx-auto px-4 py-20 md:py-28">
      <SectionHeader
        number="03"
        subtitle="Projects"
        title="Featured work"
        action={
          <Link
            to="/projects"
            className="group inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
          >
            View all projects
            <HugeiconsIcon
              icon={ArrowUpRight01Icon}
              size={15}
              strokeWidth={2}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        }
      />

      <div className="mt-14 space-y-24">
        {featured.map((project, index) => {
          const isEven = index % 2 === 1;

          return (
            <article
              key={project.title}
              className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
                isEven ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              {/* Image side with browser frame */}
              {project.image && (
                <div className="group relative">
                  <div className="absolute -inset-4 rounded-3xl bg-primary/15 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" aria-hidden />
                  <ProjectFrame
                    href={project.websiteUrl ?? project.sourceUrl}
                    className="relative block overflow-hidden rounded-xl border border-border bg-card shadow-xl transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-2xl group-hover:shadow-primary/10"
                  >
                    {/* Browser chrome */}
                    <div className="flex items-center gap-1.5 border-b border-border/80 bg-muted/40 px-4 py-2.5">
                      <span className="size-2.5 rounded-full bg-red-400/80" />
                      <span className="size-2.5 rounded-full bg-yellow-400/80" />
                      <span className="size-2.5 rounded-full bg-green-400/80" />
                      <div className="ml-3 flex flex-1 items-center gap-1.5 rounded-md bg-background/60 px-2 py-1 text-xs text-muted-foreground">
                        <HugeiconsIcon
                          icon={Link04Icon}
                          size={11}
                          strokeWidth={2}
                        />
                        <span className="truncate">
                          {project.websiteUrl
                            ? new URL(project.websiteUrl).host
                            : "localhost"}
                        </span>
                      </div>
                    </div>
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="size-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </ProjectFrame>
                </div>
              )}

              {/* Text side */}
              <div className="flex flex-col gap-5">
                <span className="inline-flex w-fit items-center gap-2 text-xs font-medium tracking-widest text-primary uppercase">
                  <span className="tabular-nums">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <span className="h-px w-6 bg-primary/50" aria-hidden />
                  {project.category}
                </span>

                <h3 className="text-2xl font-bold leading-tight sm:text-3xl">
                  {project.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border bg-card/60 px-2.5 py-1 text-xs text-muted-foreground backdrop-blur"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  {project.websiteUrl && (
                    <a
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-primary/40"
                    >
                      Visit website
                      <HugeiconsIcon
                        icon={ArrowUpRight01Icon}
                        size={14}
                        strokeWidth={2}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  )}
                  {project.sourceUrl && (
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/50"
                    >
                      <HugeiconsIcon
                        icon={GithubIcon}
                        size={15}
                        strokeWidth={2}
                      />
                      Source
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
