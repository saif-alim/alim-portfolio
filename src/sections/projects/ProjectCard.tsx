import type { Project } from "./projects";

export const ProjectCard = ({
  shortProjectName,
  projectTitle,
  projectDescription,
  imageUrl,
}: Project) => (
  <div className="group border border-gray-800 rounded-xl overflow-hidden hover:border-purple-400 transition-colors duration-300">
    <div>
      <img
        src={imageUrl}
        alt={projectTitle}
        className="w-full h-48 object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
      />
    </div>
    <div className="px-3 py-2">
      <div className="text-left text-[var(--color-accent)] font-mono text-sm pb-3 tracking-wider">
        // {shortProjectName}
      </div>
      <h3 className="font-mono text-lg mb-2">{projectTitle}</h3>
      <p className="text-gray-400 font-mono text-sm">{projectDescription}</p>
    </div>
  </div>
);
