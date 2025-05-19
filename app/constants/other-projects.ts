import type { ProjectItem } from "~/types";

export const otherProjects: ProjectItem[] = [
    {
        title: "Singapore Primier League",
        description: "A platform for Singapore Primier League to manage their events and participants",
        technologies: ["Wordpress", "PHP", "Javascript", "HTML", "CSS"],
        isFeatured: true,
        liveLink: 'https://sp.sg',
    },
    {
        title: "CKP Dashboard",
        description: "A dashboard web application made for CKP partners group to facilitate transactions of invoices between companies and suppliers",
        technologies: ["Nest.js", "React.js", "Tanstack", "TailwindCSS", "Typescript", "Docker"],
        isFeatured: true,
        liveLink: "https://ckpartners.com.my"
    },
    {
        title: "Happie-Token",
        description: "A website made for companies to sell their products vouchers to redeem at their stores, with shop page and dashboard for managing.",
        technologies: ["Next.js", "React.js", "TailwindCSS", "Typescript", "Docker"],
        isFeatured: true,
        liveLink: "https://happietoken.com"
    },
]