import { Section } from "@/components/custom/Section";
import { SectionTitle } from "@/components/custom/SectionTitle";
import { ProjectCard } from "./ProjectCard";
import { projects } from "./projects";

export const ProjectSection = () => {
  return (
    <Section id="projects" className="min-h-[80vh] px-8 py-20">
      <SectionTitle>Projects</SectionTitle>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <ProjectCard
            shortProjectName={project.shortProjectName}
            projectTitle={project.projectTitle}
            projectDescription={project.projectDescription}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </Section>
  );
};
