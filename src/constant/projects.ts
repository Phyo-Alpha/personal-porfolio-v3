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
  },
  {
    title: "Singapore Youth League",
    description:
      "A sport website, for youth football leagues in singapore, integrated with Payload CMS, for customizing contents in the website, sport radar api to get matches data, and teams and CRON background process to populate the matches in the website with MongoDB.",
    tags: [
      "Next js",
      "React",
      "Typescript",
      "MongoDB",
      "Payload CMS",
      "Vercel",
    ],
    image: "/projects/syl.png",
    websiteUrl: "https://syl.sg",
  },
  {
    title: "Triton Analytics AI Analysis Site",
    description:
      "An AI powered analytics websites, which retreives data integrate popular social media, and collected their data, and pipe them to AI agents workflows which will analyze time-series data, and return hidden insights, actionable recommandations, and trends in a report.",
    tags: [
      "Vite",
      "React",
      "Typescript",
      "Nest Js",
      "Postgres",
      "Mastra AI",
      "Open AI",
    ],
    image: "/projects/triton_analytics.png",
  },
];

export type { Project };
export { projects };
