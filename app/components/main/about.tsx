import { aboutMe } from "~/constants/aboutMe";
import SpaceCard from "../space-card";
import { useState, useRef } from "react";
import { cn } from "~/lib/utils";

interface TabButtonProps {
    sectionName: string;
    isSelected: boolean;
    onClick: () => void;
}

const MobileTabButton = ({ sectionName, isSelected, onClick }: TabButtonProps) => {
    return (
        <button
            className={cn(
                "font-bold py-2 text-center w-full transition-all duration-300",
                isSelected
                    ? "border-[#62EBCF] text-[#62EBCF] text-lg scale-125"
                    : "border-transparent text-white text-sm"
            )}
            onClick={onClick}
        >
            {sectionName}
        </button>
    );
};

const DesktopTabButton = ({ sectionName, isSelected, onClick }: TabButtonProps) => {
    return (
        <button
            className={cn(
                "font-bold border-b-2 py-2 text-left transition-all duration-200 w-32",
                isSelected
                    ? "border-[#62EBCF] text-[#62EBCF] text-lg scale-105"
                    : "border-transparent text-white hover:border-[#62EBCF]/50 hover:text-[#62EBCF]/50 text-base"
            )}
            onClick={onClick}
        >
            {sectionName}
        </button>
    );
};

const MobileTabs = ({ selectedSection, setSelectedSection }: { selectedSection: string; setSelectedSection: (section: string) => void }) => {
    const currentIndex = aboutMe.findIndex(item => item.sectionName === selectedSection);
    const tabsRef = useRef<HTMLDivElement>(null);

    const handlePrev = () => {
        if (currentIndex > 0) {
            const newSection = aboutMe[currentIndex - 1].sectionName;
            setSelectedSection(newSection);
            if (tabsRef.current) {
                tabsRef.current.scrollTo({
                    left: (currentIndex - 1) * tabsRef.current.offsetWidth,
                    behavior: 'smooth'
                });
            }
        }
    };

    const handleNext = () => {
        if (currentIndex < aboutMe.length - 1) {
            const newSection = aboutMe[currentIndex + 1].sectionName;
            setSelectedSection(newSection);
            if (tabsRef.current) {
                tabsRef.current.scrollTo({
                    left: (currentIndex + 1) * tabsRef.current.offsetWidth,
                    behavior: 'smooth'
                });
            }
        }
    };

    return (
        <div className="relative flex items-center justify-between min-h-20">
            <button
                onClick={handlePrev}
                className={cn(
                    "text-[#62EBCF]/50 text-xl p-2",
                    currentIndex === 0 && "opacity-50 cursor-not-allowed"
                )}
                disabled={currentIndex === 0}
            >
                &#10094;
            </button>

            <div
                ref={tabsRef}
                className="flex-1 overflow-hidden"
            >
                <div className="flex transition-transform duration-300">
                    {aboutMe.map((item) => (
                        <div
                            key={item.sectionName}
                            className="w-full flex-shrink-0 px-4"
                        >
                            <MobileTabButton
                                sectionName={item.sectionName}
                                isSelected={selectedSection === item.sectionName}
                                onClick={() => setSelectedSection(item.sectionName)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <button
                onClick={handleNext}
                className={cn(
                    "text-[#62EBCF]/50 text-xl p-2",
                    currentIndex === aboutMe.length - 1 && "opacity-50 cursor-not-allowed"
                )}
                disabled={currentIndex === aboutMe.length - 1}
            >
                &#10095;
            </button>
        </div>
    );
};

const DesktopTabs = ({ selectedSection, setSelectedSection }: { selectedSection: string; setSelectedSection: (section: string) => void }) => {
    return (
        <div className="flex flex-col gap-5">
            {aboutMe.map((item) => (
                <DesktopTabButton
                    key={item.sectionName}
                    sectionName={item.sectionName}
                    isSelected={selectedSection === item.sectionName}
                    onClick={() => setSelectedSection(item.sectionName)}
                />
            ))}
        </div>
    );
};

const AboutMe = () => {
    const [selectedSection, setSelectedSection] = useState<string>(aboutMe[0].sectionName);

    return (
        <SpaceCard id="about" className="h-128 lg:h-96">
            <div className="flex flex-col lg:grid lg:grid-cols-12 gap-4 divide-y divide-x-0 lg:divide-x lg:divide-y-0 h-full">
                <div className="lg:col-span-2 pb-4 md:pb-0">
                    <div className="block lg:hidden">
                        <MobileTabs
                            selectedSection={selectedSection}
                            setSelectedSection={setSelectedSection}
                        />
                    </div>
                    <div className="hidden lg:block">
                        <DesktopTabs
                            selectedSection={selectedSection}
                            setSelectedSection={setSelectedSection}
                        />
                    </div>
                </div>
                <div className="md:col-span-10 md:pl-5 pb-10">
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