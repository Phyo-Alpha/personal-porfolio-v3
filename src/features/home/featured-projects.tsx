import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { GithubIcon, LinkIcon } from "@hugeicons/core-free-icons";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  websiteUrl?: string;
  sourceUrl?: string;
}

const projects: Project[] = [
  {
    title: "Singapore Business Federation Survey Dashboard",
    description:
      "An enterprise-grade dashboard for (SBF) “Future-Ready Business” initiative, to manage surveys, business advisor assignments, and consultation hours, while quantifying business readiness using six SBF-defined indices to support nationwide digital transformation efforts.",
    tags: [
      "Next js",
      "React",
      "Elysia JS",
      "Postgres SQL",
      "Tailwind CSS",
      "Shadcn UI",
      "Drizzle ORM",
      "Typescript",
    ],
    image: "/projects/sbf.png",
    websiteUrl: "#",
  },
];

export function FeaturedProjects() {
  return (
    <section id="projects" className="container mx-auto px-4 py-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold">Featured Projects</h2>
        <Button variant="ghost" size="sm">
          view more
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col overflow-hidden pt-0">
            {project.image && (
              <div className="relative w-full h-96 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-2xl">{project.title}</CardTitle>
              <CardDescription className="mt-2">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-2 mt-auto">
                {project.websiteUrl && (
                  <Button variant="outline" size="sm" className="gap-2" asChild>
                    <a
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <HugeiconsIcon icon={LinkIcon} strokeWidth={2} />
                      Website
                    </a>
                  </Button>
                )}
                {project.sourceUrl && (
                  <Button variant="outline" size="sm" className="gap-2" asChild>
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <HugeiconsIcon icon={GithubIcon} strokeWidth={2} />
                      Source
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
