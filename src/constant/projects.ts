type ProjectCategory = "Javascript Based" | "Wordpress";

interface Project {
  title: string;
  description: string;
  tags: string[];
  category: ProjectCategory;
  companyLogo?: string;
  featured?: boolean;
  image?: string;
  websiteUrl?: string;
  sourceUrl?: string;
}

const projects: Project[] = [
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
    category: "Javascript Based",
    featured: true,
  },

  {
    title: "FAS: Singapore Football Association Website",
    description:
      "The main website of FAS is a football association in Singapore, and is a member of the Asian Football Confederation (AFC), and the Oceania Football Confederation (OFC).",
    tags: ["Wordpress", "PHP", "Javascript", "HTML", "CSS"],
    category: "Wordpress",
    featured: true,
    image: "/projects/fas.png",
    websiteUrl: "https://fas.org.sg/",
  },
  {
    title: "AURA Medical Clinic",
    description:
      "A website for AURA Medical Clinic, a medical clinic that provides medical aesthetics services.",
    tags: ["Wordpress", "PHP", "Javascript", "HTML", "CSS"],
    category: "Wordpress",
    image: "/projects/aura_medical.png",
    websiteUrl: "https://auramedical.sg",
  },
  {
    title: "Syspex: Packaging and Warehouse",
    description:
      "Syspex is Southeast Asia’s leading distributor of packaging and warehousing solutions. We protect the worldwide movement and storage of goods with less waste, enhanced safety and sustainability.",
    tags: ["Wordpress", "PHP", "Javascript", "HTML", "CSS"],
    category: "Wordpress",
    image: "/projects/syspex.png",
    websiteUrl: "https://www.syspex.com/",
    featured: true,
  },
  {
    title: "Beyond Massage",
    description: "A website for Beyond Massage, a massage service.",
    tags: ["Wordpress", "PHP", "Javascript", "HTML", "CSS"],
    category: "Wordpress",
    image: "/projects/beyond-massage.png",
    websiteUrl: "https://beyondmassage.co/",
  },
  {
    title: "Chek Eldar Care",
    description:
      "A dashboard built to manage the care of the elderly in the community.",
    tags: ["Vite", "React", "Typescript", "Nest Js", "Postgres"],
    category: "Javascript Based",
    image: "/projects/chek.png",
  },
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
    category: "Javascript Based",
    featured: true,
  },
  {
    title: "Triton Analytics AI Analysis Site",
    description:
      "Built to monitor, records and analyze social media of TRITON POKER SERIES. It is an AI powered analytics websites, which retreives data integrate popular social media, and collected their data, and pipe them to AI agents workflows which will analyze time-series data, and return hidden insights, actionable recommandations, and trends in a report.",
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
    category: "Javascript Based",
    featured: true,
  },
];

export type { Project, ProjectCategory };

export { projects };
