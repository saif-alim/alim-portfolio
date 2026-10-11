// WorkSection.tsx
import { Reveal } from "@/components/custom/Reveal";
import { Section } from "@/components/custom/Section";
import { SectionTitle } from "@/components/custom/SectionTitle";
import { Timeline } from "@/components/custom/Timeline";
import { workExperiences } from "./work";

export const WorkSection = () => {
  return (
    <Section id="experience">
      <SectionTitle>experience</SectionTitle>
      <div className="flex flex-col gap-16">
        {workExperiences.map((work) => (
          <div
            key={work.company}
            className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-12"
          >
            <Reveal className="flex flex-col gap-3.5 max-w-[300px]">
              <p className="text-[12px] tracking-[1.5px] text-accent-2 uppercase">
                {work.startDate} — {work.endDate}
              </p>
              <h3 className="font-medium text-[22px] leading-[1.3] text-white">
                {work.jobTitle}
              </h3>
              <p className="text-[14px] text-[#b3afc2]">
                @ {work.company}
                <br />
                <span className="text-[#7d7891]">{work.location}</span>
              </p>
            </Reveal>
            {/* Spanning 2 columns adds a column (and its gap) once they stack, too wide for small phones */}
            <Timeline
              items={work.keyPoints}
              className="col-span-2 max-[400px]:col-span-1"
            />
          </div>
        ))}
      </div>
    </Section>
  );
};
