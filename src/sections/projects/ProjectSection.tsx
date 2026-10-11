import { Reveal } from "@/components/custom/Reveal";
import { Section } from "@/components/custom/Section";
import { SectionTitle } from "@/components/custom/SectionTitle";
import { ProjectCard } from "./ProjectCard";
import { projects } from "./projects";

export const ProjectSection = () => {
  return (
    <Section id="projects">
      <SectionTitle>projects</SectionTitle>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,460px),1fr))] gap-7">
        {projects.map((project, index) => (
          <Reveal key={project.id} index={index}>
            <ProjectCard {...project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
};
