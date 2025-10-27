import { Section } from "@/components/custom/Section";
import { SectionTitle } from "@/components/custom/SectionTitle";
import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectDetailModal } from "./ProjectDetailModal";
import { projects } from "./projects";

export const ProjectSection = () => {
  const [selectedProject, setSelectedProject] = useState<
    null | (typeof projects)[0]
  >(null);
  return (
    <Section id="projects" className="min-h-[80vh] px-8 py-20">
      <SectionTitle>projects_</SectionTitle>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <ProjectCard
            projectTitle={project.projectTitle}
            projectDescription={project.projectDescription}
            imageUrls={project.imageUrls}
            techStack={project.techStack}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </Section>
  );
};
