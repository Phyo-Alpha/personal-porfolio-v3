import { aboutMe } from "~/constants/aboutMe";
import SpaceCard from "../space-card";
import { useState } from "react";
import { cn } from "~/lib/utils";

const AboutMe = () => {
    const [selectedSection, setSelectedSection] = useState<string>(aboutMe[0].sectionName);

    return (
        <SpaceCard>
            <div className="grid grid-cols-12 gap-4 divide-x h-full">
                <div className="col-span-2 flex flex-col gap-5">
                    {aboutMe.map((item) => (
                        <button
                            key={item.sectionName}
                            className={cn(
                                "font-bold border-b-2 py-2 text-left w-fit",
                                selectedSection === item.sectionName
                                    ? "border-[#62EBCF] text-[#62EBCF]"
                                    : "border-transparent hover:border-[#62EBCF]/50 hover:text-[#62EBCF]/50"
                            )}
                            onClick={() => setSelectedSection(item.sectionName)}
                        >
                            {item.sectionName}
                        </button>
                    ))}
                </div>
                <div className="col-span-10 pl-5 pb-10">
                    {aboutMe.map((item) => (
                        <div
                            key={item.sectionName}
                            className={cn(
                                "transition-opacity duration-300",
                                selectedSection === item.sectionName ? "opacity-100" : "hidden opacity-0"
                            )}
                        >
                            <div className="mt-4">{item.content}</div>
                        </div>
                    ))}
                </div>
            </div>
        </SpaceCard>
    )
}

export default AboutMe;