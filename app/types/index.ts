import type { IconType } from "react-icons";

type SectionItem = {
    sectionName: string;
    content: React.ReactNode;
}

type NavRouteItem = {
    label: string;
    url: string;
}

type SocialItem = NavRouteItem & {
    icon: IconType;
}

type SkillItem = {
    name: string;
    image: string;
    width: number;
    height: number;
}

type ProjectExperienceItem = {
    text: string;
    number: number;
}

type ProjectItem = {
    image?: string;
    title: string;
    description: string;
    technologies: string[];
    githubLink?: string;
    liveLink?: string;
    isFeatured?: boolean;
}

export type { NavRouteItem, SocialItem, SkillItem, SectionItem, ProjectItem };
