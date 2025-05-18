import type { ProjectItem } from "~/types";

export const noteworthyProjects: ProjectItem[] = [
    {
        image: "/projects/syl.png",
        title: "Singapore Youth League",
        description: "A platform for Singapore Youth League to manage their events and participants",
        technologies: ["Next.js", "React.js", "PayloadCMS", "TailwindCSS", "Typescript", "CRON"],
        isFeatured: true,
        liveLink: 'https://syl.sg',
    },
    {
        image: "/projects/trainee_dashboard.png",
        title: "Trainee Companion Dashboard",
        description: "A dashboard web application for managing the medical students practical training, in surgical fields and handling surgical logs management.",
        technologies: ["Nest.js", "React.js", "Tanstack", "TailwindCSS", "Typescript", "Docker", "AWS"],
        isFeatured: true,
    },
    {
        image: "/projects/nfc-chicken.png",
        title: "NFC Dashboard",
        description: "A dashboard web application for managing animals sales and transfers and deliveries between farms, tracking animals health and growth, as well as assigning personals to coordinate the activities and drivers..",
        technologies: ["Nest.js", "React.js", "Tanstack", "TailwindCSS", "Typescript", "Docker", "AWS"],
        isFeatured: true,
    },
]