import { noteworthyProjects } from "~/constants/noteworthy-projects";
import { ProjectCard } from "../sub/project-card";

const NoteWorthyProjects = () => {
    return (
        <section id="projects" className="space-y-10 w-4/5">
            <h2 className="text-4xl font-bold">NoteWorthy Projects</h2>
            {noteworthyProjects.map((project, index) => (
                <ProjectCard key={project.title} {...project} index={index + 1} />
            ))}
        </section>
    )
}

export default NoteWorthyProjects;