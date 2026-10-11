import { BlinkingCursor } from "@/components/custom/BlinkingCursor";
import { CountUp } from "@/components/custom/CountUp";
import { Reveal } from "@/components/custom/Reveal";
import { Section } from "@/components/custom/Section";
import { SectionTitle } from "@/components/custom/SectionTitle";
import { Timeline } from "@/components/custom/Timeline";
import { DotField } from "@/components/DotField";
import { cn } from "@/lib/utils";
import { projects, type Project } from "@/sections/projects/projects";
import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router";

export const ProjectPage = () => {
  const { id } = useParams();
  const index = projects.findIndex((project) => project.id === id);

  if (index < 0) return <Navigate to="/#projects" replace />;

  const project = projects[index];
  return (
    // Keyed so moving on to the next project plays the page in from scratch
    <ProjectDetail
      key={project.id}
      project={project}
      nextProject={projects[(index + 1) % projects.length]}
    />
  );
};

interface ProjectDetailProps {
  project: Project;
  nextProject: Project;
}

const ProjectDetail = ({ project, nextProject }: ProjectDetailProps) => {
  const [coverUrl, ...screenUrls] = project.imageUrls;
  const isSourceLink =
    !!project.projectUrl &&
    new URL(project.projectUrl).hostname === "github.com";

  useEffect(() => {
    const siteTitle = document.title;
    document.title = `${project.projectTitle} | ${siteTitle}`;
    return () => {
      document.title = siteTitle;
    };
  }, [project.projectTitle]);

  return (
    <main>
      <section className="relative overflow-hidden">
        <DotField
          intensity="project"
          className="[mask-image:radial-gradient(ellipse_at_70%_30%,#000_20%,transparent_70%)]"
        />
        <div className="relative flex flex-col gap-[22px] max-w-content mx-auto px-7 pt-14">
          <Reveal className="self-start text-[12.5px]">
            <Link
              to="/#projects"
              className="text-[#8a85a0] transition-colors duration-200 hover:text-white"
            >
              ← cd ../projects
            </Link>
          </Reveal>

          <Reveal
            index={1}
            className="text-[13px] tracking-[1px] text-accent-2"
          >
            $ cat projects/{project.id}.md
            <BlinkingCursor className="w-2 h-[15px] ml-1.5 align-[-2px]" />
          </Reveal>

          <Reveal
            as="h1"
            index={2}
            className="font-medium tracking-[-1.5px] text-[clamp(40px,7vw,80px)] leading-none text-white m-0"
          >
            {project.projectTitle}
            <span className="text-accent-2">_</span>
          </Reveal>

          <Reveal
            index={3}
            className="font-light tracking-[1px] text-[clamp(16px,2vw,21px)] text-[#9c97b0]"
          >
            {project.subtitle}
          </Reveal>

          {project.projectUrl && (
            <Reveal index={4} className="self-start text-[13px]">
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noreferrer"
                className="text-accent-soft transition-colors duration-200 hover:text-white"
              >
                → {isSourceLink ? "view source" : "view live"}
              </a>
            </Reveal>
          )}

          <Reveal
            index={5}
            className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-px mt-[18px] border rounded-[12px] overflow-hidden bg-border"
          >
            <MetaCell label="timeline">{project.date ?? "—"}</MetaCell>
            <MetaCell label="stack" className="text-accent-soft">
              {project.techStack.join(", ")}
            </MetaCell>
            <MetaCell label="type">{project.type}</MetaCell>
          </Reveal>

          {coverUrl && (
            <Reveal
              index={6}
              className="aspect-[16/8] mt-7 border rounded-[16px] overflow-hidden bg-media"
            >
              <img
                src={coverUrl}
                alt={`${project.projectTitle} preview`}
                className="size-full object-cover"
              />
            </Reveal>
          )}
        </div>
      </section>

      <Section className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-12 pt-[100px] pb-5">
        <div className="flex flex-col gap-6">
          <SectionTitle className="mb-0 text-[clamp(26px,3.5vw,36px)]">
            overview
          </SectionTitle>
          {project.stats && (
            <Reveal index={1} className="flex gap-3 max-w-[320px]">
              {project.stats.map((stat) => (
                <div
                  key={stat.caption}
                  className="flex-1 border border-[#241f35] rounded-[10px] p-3.5 bg-[#0e0d15]"
                >
                  <div className="font-medium text-[28px] text-white">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="mt-1 text-[11px] text-[#8a85a0]">
                    {stat.caption}
                  </div>
                </div>
              ))}
            </Reveal>
          )}
        </div>
        {/* Spanning 2 columns adds a column (and its gap) once they stack, too wide for small phones */}
        <Timeline
          items={project.bullets}
          className="col-span-2 max-[400px]:col-span-1 text-[15px]"
        />
      </Section>

      {screenUrls.length > 0 && (
        <Section className="pt-[100px] pb-5">
          <SectionTitle className="mb-10 text-[clamp(26px,3.5vw,36px)]">
            screens
          </SectionTitle>
          <div
            className={cn(
              "grid gap-5",
              // auto-fill keeps a short row of phone screens at phone width instead of stretching it
              project.screenShape === "portrait"
                ? "grid-cols-[repeat(auto-fill,minmax(min(100%,220px),1fr))]"
                : "grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))]",
            )}
          >
            {screenUrls.map((url, index) => (
              <Reveal key={url} index={index}>
                <div
                  className={cn(
                    "border rounded-[16px] overflow-hidden bg-media [transition:translate_.35s_cubic-bezier(.2,.8,.2,1),border-color_.35s] hover:-translate-y-1.5 hover:border-accent",
                    project.screenShape === "portrait"
                      ? "aspect-[9/19]"
                      : "aspect-video",
                  )}
                >
                  <img
                    src={url}
                    alt={`${project.projectTitle} screen ${index + 1}`}
                    loading="lazy"
                    className="size-full object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      <Section className="pt-[110px] pb-0">
        <Reveal>
          <Link
            to={`/projects/${nextProject.id}`}
            className="flex flex-wrap items-center justify-between gap-6 border rounded-[16px] px-[clamp(22px,4vw,44px)] py-9 bg-card text-inherit [transition:translate_.35s_cubic-bezier(.2,.8,.2,1),border-color_.35s,box-shadow_.35s] hover:-translate-y-1 hover:border-accent hover:text-inherit hover:shadow-[0_24px_60px_-24px_rgba(124,58,237,0.55)]"
          >
            <div className="flex flex-col gap-2.5">
              <span className="text-[12px] tracking-[1.5px] text-accent-2">
                NEXT PROJECT
              </span>
              <span className="font-medium text-[clamp(24px,3.5vw,36px)] text-white">
                {nextProject.projectTitle}
                <span className="text-accent-2">_</span>
              </span>
              <span className="text-[13px] text-[#8a85a0]">
                {nextProject.subtitle}
              </span>
            </div>
            <span className="text-[28px] text-accent-soft">→</span>
          </Link>
        </Reveal>
      </Section>
    </main>
  );
};

interface MetaCellProps {
  label: string;
  className?: string;
  children: React.ReactNode;
}

const MetaCell = ({ label, className, children }: MetaCellProps) => (
  <div className="flex flex-col gap-1.5 px-5 py-[18px] bg-card">
    <span className="text-[11px] tracking-[1.5px] text-[#6f6a84] uppercase">
      {label}
    </span>
    <span className={cn("text-[14px] text-white", className)}>{children}</span>
  </div>
);
