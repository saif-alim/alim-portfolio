import { Link } from "react-router";
import type { Project } from "./projects";

export const ProjectCard = ({
  id,
  projectTitle,
  subtitle,
  date,
  projectDescription,
  imageUrls,
  techStack,
}: Project) => {
  const formattedTechStack = "{" + techStack.join(", ").toLowerCase() + "}";
  return (
    <Link
      to={`/projects/${id}`}
      className="flex flex-col h-full border rounded-[14px] overflow-hidden bg-card text-inherit [transition:translate_.35s_cubic-bezier(.2,.8,.2,1),border-color_.35s,box-shadow_.35s] hover:-translate-y-1.5 hover:border-accent hover:text-inherit hover:shadow-[0_24px_60px_-24px_rgba(124,58,237,0.55)]"
    >
      <div className="aspect-[16/10] bg-media">
        {imageUrls.length > 0 ? (
          <img
            src={imageUrls[0]}
            alt=""
            loading="lazy"
            className="size-full object-cover"
          />
        ) : (
          <div
            aria-hidden="true"
            className="flex items-center justify-center size-full font-medium tracking-[2px] text-[clamp(22px,4vw,32px)] text-[#3a3550]"
          >
            {projectTitle}
            <span className="text-accent/70">_</span>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2.5 px-6 pt-[22px] pb-[26px]">
        <div className="flex flex-wrap justify-between gap-3 text-[12px]">
          <span className="text-accent-2">{formattedTechStack}</span>
          <span className="text-[#6f6a84]">{date}</span>
        </div>
        <h3 className="font-medium text-[19px] text-white">
          {projectTitle}
          <span className="font-normal text-[#8a85a0]">: {subtitle}</span>
        </h3>
        <p className="m-0 text-[13px] leading-[1.7] text-pretty text-[#a9a5b9]">
          {projectDescription}
        </p>
        <div className="mt-1.5 text-[12px] text-accent-soft">
          read case study →
        </div>
      </div>
    </Link>
  );
};
