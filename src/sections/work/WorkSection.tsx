import { Section } from "@/components/custom/Section";
import { useState } from "react";
import { workExperiences } from "./work";

export const WorkSection = () => {
  const [workKey, setWorkKey] = useState<number>(0);

  return (
    <Section id="work">
      <div className="w-2xl mx-auto">
        <h1 className="font-medium text-left tracking-widest text-3xl md:text-4xl leading-none m-0 pb-5">
          Selected work
        </h1>
        <div className="flex flex-row gap-4 mx-auto">
          <ul className="text-left text-sm min-w-[150px]">
            {workExperiences.map((work, index) => (
              <li
                key={work.company}
                className="pb-4"
                onClick={() => setWorkKey(index)}
              >
                <p
                  className={`${workKey === index ? "text-[var(--color-accent)]" : ""} select-none`}
                >
                  // {work.company}
                </p>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2 text-left">
            {workExperiences[workKey] && (
              <>
                <div className="flex flex-col">
                  <h2 className="font-semibold text-2xl">
                    {workExperiences[workKey].jobTitle} @{" "}
                    {workExperiences[workKey].company}
                  </h2>
                  <p className="font-medium text-gray-500">
                    {workExperiences[workKey].startDate} -{" "}
                    {workExperiences[workKey].endDate}
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
      </div>
    </Section>
  );
};
