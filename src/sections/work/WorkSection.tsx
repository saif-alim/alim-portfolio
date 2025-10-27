import { Section } from "@/components/custom/Section";
import { SectionTitle } from "@/components/custom/SectionTitle";
import { useState } from "react";
import { workExperiences } from "./work";

export const WorkSection = () => {
  const [workKey, setWorkKey] = useState<number>(0);

  return (
    <Section id="work" className="min-h-[70vh]">
      <SectionTitle>selected_work_</SectionTitle>
      <div className="flex flex-row gap-4 mx-auto">
        <ul className="text-left text-xs md:text-sm min-w-[80px] md:min-w-[150px] pt-1">
          {workExperiences.map((work, index) => (
            <li
              key={work.company}
              className="pb-4"
              onClick={() => setWorkKey(index)}
            >
              <p
                className={`${workKey === index ? "text-[var(--color-accent)]" : ""} select-none`}
              >
                // {work.shortCompanyName ?? work.company}
              </p>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-2 text-left">
          {workExperiences[workKey] && (
            <>
              <div className="flex flex-col">
                <h2 className="font-semibold text-xl md:text-2xl">
                  {workExperiences[workKey].jobTitle} @{" "}
                  {workExperiences[workKey].company}
                </h2>
                <p className="text-sm tracking-wider text-gray-500">
                  {workExperiences[workKey].startDate.toUpperCase()} -{" "}
                  {workExperiences[workKey].endDate.toUpperCase()}
                </p>
              </div>
              <ul>
                {workExperiences[workKey].keyPoints.map((point) => (
                  <li
                    key={point}
                    className="flex flex-row gap-2 font-light text-sm tracking-wide pb-3"
                  >
                    <p className="text-[var(--color-accent)]">•</p>
                    {point}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </Section>
  );
};
