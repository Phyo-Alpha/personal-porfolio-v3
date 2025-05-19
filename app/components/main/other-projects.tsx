import { otherProjects } from "~/constants/other-projects";
import { MiniProjectCard } from "../sub/project-card";
import { motion } from "framer-motion";

const OtherProjects = () => {
    return (
        <section id="other-projects" className="space-y-6">
            <h2 className="text-3xl font-bold ">Other Projects</h2>
            <motion.div
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {otherProjects.map((project) => (
                    <MiniProjectCard key={project.title} {...project} />
                ))}
            </motion.div>
        </section>
    )
}

export default OtherProjects;