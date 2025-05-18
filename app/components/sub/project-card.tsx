import type { HTMLAttributes } from "react"
import { RxExternalLink, RxGithubLogo } from "react-icons/rx";
import { cn } from "~/lib/utils";

interface ProjectCardProps extends HTMLAttributes<HTMLDivElement> {
    image: string;
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
        <div className="from-[#082628] to-[#081315] bg-gradient-to-r clip-path-angled h-96">
            <div className="relative px-10 pt-10 z-10 text-[#62EBCF] h-full overflow-auto">
                <div className="grid grid-cols-12 gap-4 h-full">
                    <div className={cn("col-span-6 flex flex-col",
                        (index && index % 2 === 0) ? 'order-last' : 'order-first'
                    )}>
                        {isFeatured && (
                            <p className="text-[#62EBCF] text-sm mb-2">Featured Project</p>
                        )}
                        <h3 className="text-2xl font-bold mb-4">
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
                        <div className="bg-[#0A192F] p-6 rounded-lg mb-4">
                            <p className="text-gray-300">{description}</p>
                        </div>
                        <ul className="flex flex-wrap gap-3 text-sm mb-4">
                            {technologies.map((tech) => (
                                <li key={tech} className="text-gray-400">{tech}</li>
                            ))}
                        </ul>
                        <div className="flex flex-row gap-4">
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
                    <div className={cn("col-span-6",
                        (index && index % 2 === 0) ? 'order-first' : 'order-last'
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
                                    className="w-full h-fit object-contain mix-blend-multiply filter grayscale hover:grayscale-0 transition-all duration-300"
                                />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}