import type { IconType } from "react-icons";

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

export type { NavRouteItem, SocialItem, SkillItem };
