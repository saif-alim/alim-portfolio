import type { Project } from "./projects";

export const ProjectCard = ({
  projectTitle,
  projectDescription,
  imageUrl,
  techStack,
}: Project) => {
  const formattedTechStack = "{" + techStack.join(", ") + "}";
  return (
    <div className="relative group border border-gray-800 rounded-xl overflow-hidden hover:border-[var(--color-accent)] transition-colors duration-300">
      <div>
        <img
          src={imageUrl}
          alt={projectTitle}
          className="w-full h-48 object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
        />
      </div>
      <div className="relative px-3 py-2">
        <div className="absolute top-2 left-2 text-left text-[var(--color-accent)] font-mono text-sm pb-3 tracking-wider">
          {formattedTechStack}
        </div>
        <h3 className="font-mono text-lg mb-2 pt-8">{projectTitle}</h3>
        <p className="text-gray-400 font-mono text-sm pb-4">
          {projectDescription}
        </p>
      </div>
      {/* <p className="absolute bottom-3 left-3 font-mono text-sm text-[var(--color-accent)]">
      {`{flutter, dart}`}
    </p> */}
    </div>
  );
};
