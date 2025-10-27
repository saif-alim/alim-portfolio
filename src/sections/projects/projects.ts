export interface Project {
  shortProjectName: string;
  projectTitle: string;
  projectDescription: string;
  imageUrl: string;
}

export const projects: Project[] = [
  {
    shortProjectName: "hijra",
    projectTitle: "Hijra: Prayer room locator app",
    projectDescription:
      "React Native app where users answer “steers” to earn points redeemable for gift cards.",
    imageUrl: "/assets/projects/hijra-mockup.webp",
  },
  {
    shortProjectName: "ocean-odyssey",
    projectTitle: "Ocean Odyssey: Platformer game",
    projectDescription:
      "Built with Next.js and Tailwind, inspired by developer aesthetics and terminal interfaces.",
    imageUrl: "/assets/projects/oceanody-gameplay-mockup.webp",
  },
  {
    shortProjectName: "portfolio-site",
    projectTitle: "Portfolio Website",
    projectDescription:
      "Static TypeScript site with a lightweight admin panel for managing store locations.",
    imageUrl: "/assets/projects/portfolio-site-mockup.webp",
  },
];
