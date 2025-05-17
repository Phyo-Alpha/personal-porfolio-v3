import type { NavRouteItem, SocialItem } from "../../types";
import {
    RxGithubLogo,
    RxLinkedinLogo,
} from "react-icons/rx";

const topBarRoutes: NavRouteItem[] = [
    {
        label: "Home",
        url: "#home"
    },
    {
        label: "About",
        url: "#about"
    },
    {
        label: "Projects",
        url: "#projects"
    },
    {
        label: "Contact",
        url: "#contact"
    }
]

const Socials: SocialItem[] = [
    {
        label: "LinkedIn",
        url: 'https://www.linkedin.com/in/edward-phyo/',
        icon: RxLinkedinLogo
    },
    {
        label: "Github",
        url: 'https://github.com/edward-phyo',
        icon: RxGithubLogo
    }
]

export { topBarRoutes, Socials };