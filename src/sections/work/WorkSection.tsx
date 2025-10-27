// WorkSection.tsx
import { Section } from "@/components/custom/Section";
import { SectionTitle } from "@/components/custom/SectionTitle";
import { useState } from "react";
import { workExperiences } from "./work";

const highlightKeywords = (
  text: string,
  keywords: string[],
  highlightedKeywords: Set<string>,
) => {
  if (!keywords.length) return text;

  const pattern = new RegExp(`(${keywords.join("|")})`, "gi");
  const parts = text.split(pattern);

  return parts.map((part, index) => {
    const matchedKeyword = keywords.find(
      (keyword) => keyword.toLowerCase() === part.toLowerCase(),
    );

    if (
      matchedKeyword &&
      !highlightedKeywords.has(matchedKeyword.toLowerCase())
    ) {
      highlightedKeywords.add(matchedKeyword.toLowerCase());
      return (
        <span
          key={index}
          className="underline decoration-[var(--color-accent)] decoration-2 underline-offset-2"
        >
          {part}
        </span>
      );
    }
    return part;
  });
};

export const WorkSection = () => {
  const [workKey, setWorkKey] = useState<number>(0);
  const currentWork = workExperiences[workKey];
  const keywords = currentWork?.keyWords ?? [];

  return (
    <Section id="work" className="min-h-[70vh]">
      <SectionTitle>selected_work_</SectionTitle>
      <div className="flex flex-row gap-4 mx-auto">
        <ul className="text-left text-xs md:text-sm min-w-[80px] md:min-w-[150px] pt-1">
          {workExperiences.map((work, index) => (
            <li
              key={work.company}
              className="pb-4 cursor-pointer"
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
          {currentWork && (
            <>
              <div className="flex flex-col">
                <h2 className="font-semibold text-xl md:text-2xl">
                  {currentWork.jobTitle} @ {currentWork.company}
                </h2>
                <p className="text-sm tracking-wider text-gray-500">
                  {currentWork.startDate.toUpperCase()} -{" "}
                  {currentWork.endDate.toUpperCase()}
                </p>
              </div>
              <ul>
                {(() => {
                  const highlightedKeywords = new Set<string>();
                  return currentWork.keyPoints.map((point) => (
                    <li
                      key={point}
                      className="flex flex-row gap-2 font-light text-sm tracking-wide pb-3"
                    >
                      <p className="text-[var(--color-accent)]">•</p>
                      <span>
                        {highlightKeywords(
                          point,
                          keywords,
                          highlightedKeywords,
                        )}
                      </span>
                    </li>
                  ));
                })()}
              </ul>
            </>
          )}
        </div>
      </div>
    </Section>
  );
};
