import { Reveal } from "@/components/custom/Reveal";
import { Section } from "@/components/custom/Section";
import { SectionTitle } from "@/components/custom/SectionTitle";
import { currentlyPursuing, skillGroups } from "./skills";

export const SkillsSection = () => {
  return (
    <Section id="skills">
      <SectionTitle className="mb-12">skills</SectionTitle>

      <Reveal
        index={1}
        className="border rounded-[14px] bg-card px-[clamp(20px,4vw,40px)] py-8 text-[14px] leading-[2]"
      >
        <div className="text-[#7d7891]">
          const <span className="text-white">stack</span> = {"{"}
        </div>
        {skillGroups.map((group) => (
          <div
            key={group.key}
            className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1.5 my-1.5 pl-7 sm:grid sm:grid-cols-[200px_1fr]"
          >
            <span className="min-w-[200px] text-accent-soft">{group.key}:</span>
            <span className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="border border-[#2c2741] rounded-[6px] px-2.5 text-[12.5px] leading-[28px] text-[#dcd8e8] transition-colors duration-200 hover:border-accent-2 hover:bg-accent/15 hover:text-white"
                >
                  {item}
                </span>
              ))}
            </span>
          </div>
        ))}
        <div className="text-[#7d7891]">{"};"}</div>
        <div className="mt-[18px] text-[13px] text-[#8a85a0]">
          // currently pursuing:{" "}
          <span className="text-white">{currentlyPursuing}</span>
        </div>
      </Reveal>
    </Section>
  );
};
