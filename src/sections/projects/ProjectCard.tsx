import type { Project } from "./projects";

interface ProjectCardProps extends Project {
  onClick?: () => void;
}

export const ProjectCard = ({
  projectTitle,
  projectDescription,
  imageUrls,
  techStack,
  onClick,
}: ProjectCardProps) => {
  const formattedTechStack = "{" + techStack.join(", ") + "}";
  return (
    <div
      onClick={onClick}
      className="relative group border border-gray-800 rounded-xl overflow-hidden hover:border-[var(--color-accent)] transition-colors duration-300"
    >
      <div>
        <img
          src={imageUrls[0]}
          alt={projectTitle}
          className="w-full h-48 object-cover md:grayscale opacity-80 md:group-hover:opacity-100 md:group-hover:grayscale-0 md:transition-all md:duration-500"
        />
      </div>
      <div className="relative px-3 py-2">
        <div className="absolute top-2 left-2 text-left text-[var(--color-accent)] text-sm pb-3 tracking-wider">
          {formattedTechStack}
        </div>
        <h3 className=" text-lg mb-2 pt-8">{projectTitle}</h3>
        <p className="text-gray-400  text-sm pb-4">{projectDescription}</p>
      </div>
    </div>
  );
};
