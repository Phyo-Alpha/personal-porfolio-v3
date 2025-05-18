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

export type { NavRouteItem, SocialItem, SkillItem, SectionItem };
