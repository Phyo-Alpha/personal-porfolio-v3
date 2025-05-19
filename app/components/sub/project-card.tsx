import type { HTMLAttributes } from "react"
import { RxExternalLink, RxGithubLogo } from "react-icons/rx";
import { cn } from "~/lib/utils";
import { Folder } from "lucide-react";
import { motion } from "framer-motion";
import { slideInFromBottom } from "~/lib/motion";

interface ProjectCardProps extends HTMLAttributes<HTMLDivElement> {
    image?: string;
    title: string;
    description: string;
    technologies: string[];
    githubLink?: string;
    liveLink?: string;
    isFeatured?: boolean;
    index?: number;
}

export const ProjectCard = ({ image, title, description, technologies, githubLink, liveLink, isFeatured, index }: ProjectCardProps) => {
    return (
        <div className="from-[#082628] to-[#081315] bg-gradient-to-r clip-path-angled h-150 lg:h-96 pt-4">
            <div className="relative px-4 sm:px-6 lg:px-10 pt-6 lg:pt-10 z-10 text-[#62EBCF] min-h-full overflow-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 h-full">
                    <div className={cn("lg:col-span-6 flex flex-col",
                        (index && index % 2 === 0) ? 'lg:order-last' : 'lg:order-first'
                    )}>
                        {isFeatured && (
                            <p className="text-[#62EBCF] text-sm mb-2">Featured Project</p>
                        )}
                        <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4">
                            {liveLink ? (
                                <a
                                    href={liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#62EBCF]/80 transition-colors"
                                >
                                    {title}
                                </a>
                            ) : title}
                        </h3>
                        <div className="bg-[#0A192F] p-4 lg:p-6 rounded-lg mb-3 lg:mb-4">
                            <p className="text-gray-300 text-sm lg:text-base">{description}</p>
                        </div>
                        <ul className="flex flex-wrap gap-2 lg:gap-3 text-xs lg:text-sm mb-3 lg:mb-4">
                            {technologies.map((tech) => (
                                <li key={tech} className="text-gray-400">{tech}</li>
                            ))}
                        </ul>
                        <div className="flex flex-row gap-4 mt-auto">
                            {githubLink && (
                                <a
                                    href={githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#62EBCF] hover:text-[#62EBCF]/80 transition-colors"
                                    aria-label="GitHub Link"
                                >
                                    <RxGithubLogo size={20} />
                                </a>
                            )}
                            {liveLink && (
                                <a
                                    href={liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#62EBCF] hover:text-[#62EBCF]/80 transition-colors"
                                    aria-label="External Link"
                                >
                                    <RxExternalLink size={20} />
                                </a>
                            )}
                        </div>
                    </div>
                    <div className={cn("lg:col-span-6 h-48 md:h-72",
                        (index && index % 2 === 0) ? 'lg:order-first' : 'lg:order-last'
                    )}>
                        <a
                            href={liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block relative h-full"
                        >
                            <div className="absolute inset-0 h-fit bg-[#62EBCF]/10 rounded-lg overflow-hidden">
                                <img
                                    src={image}
                                    alt={title}
                                    className="w-full h-full object-cover lg:object-contain mix-blend-multiply filter grayscale hover:grayscale-0 transition-all duration-300"
                                />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const MiniProjectCard = ({ title, description, technologies, githubLink, liveLink }: ProjectCardProps) => {
    return (
        <motion.div
            variants={slideInFromBottom}
            className="from-[#082628] to-[#081315] bg-gradient-to-r clip-path-angled size-96 z-1 p-10 space-y-6">
            <div className="flex flex-row w-full justify-between text-[#62EBCF]">
                <Folder size={50} />
                <div className="flex flex-row gap-5">
                    {githubLink && (
                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#62EBCF] hover:text-[#62EBCF]/80 transition-colors"
                            aria-label="GitHub Link"
                        >
                            <RxGithubLogo size={32} />
                        </a>
                    )}
                    {liveLink && (
                        <a
                            href={liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#62EBCF] hover:text-[#62EBCF]/80 transition-colors"
                            aria-label="External Link"
                        >
                            <RxExternalLink size={32} />
                        </a>
                    )}
                </div>

            </div>
            <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold text-[#62EBCF]">{title}</h3>
                <p className="text-sm">{description}</p>
                <ul className="flex flex-wrap gap-2 lg:gap-3 text-xs  mb-3 lg:mb-4">
                    {technologies.map((tech) => (
                        <li key={tech} className="text-gray-400">{tech}</li>
                    ))}
                </ul>
            </div>
        </motion.div>
    )
}