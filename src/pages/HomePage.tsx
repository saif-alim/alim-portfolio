import { ContactSection } from "@/sections/ContactSection";
import { HeroSection } from "@/sections/HeroSection";
import { ProjectSection } from "@/sections/projects/ProjectSection";
import { SkillsSection } from "@/sections/skills/SkillsSection";
import { WorkSection } from "@/sections/work/WorkSection";

export const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <WorkSection />
      <ProjectSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
};
