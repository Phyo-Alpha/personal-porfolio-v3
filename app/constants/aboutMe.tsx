import type { SectionItem } from "~/types";
import { AboutMeMainContent } from "./about/main";
import { AboutMeExperiences } from "./about/experiences";
import { WorkExperiences } from "./about/work-experiences";

export const aboutMe: SectionItem[] = [
    {
        sectionName: "About Me",
        content: <AboutMeMainContent />,
    },
    {
        sectionName: "Projects Experiences",
        content: <AboutMeExperiences />,
    },
    {
        sectionName: "Work Experiences",
        content: <WorkExperiences />,
    }
]