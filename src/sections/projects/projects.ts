export interface Project {
  shortProjectName?: string;
  projectTitle: string;
  projectDescription: string;
  imageUrl: string;
  techStack: string[];
}

export const projects: Project[] = [
  {
    shortProjectName: "hijra",
    projectTitle: "Hijra: Prayer room locator app",
    projectDescription:
      "A community based mobile app to help users find prayer rooms and ratings/details.",
    imageUrl: "/assets/projects/hijra-mockup.webp",
    techStack: ["flutter", "firebase"],
  },
  {
    shortProjectName: "ocean-odyssey",
    projectTitle: "Ocean Odyssey: Platformer game",
    projectDescription:
      "A 3D underwater platformer game with ocean based theming and multiple levels.",
    imageUrl: "/assets/projects/oceanody-gameplay-mockup.webp",
    techStack: ["unity", "c#"],
  },
  {
    shortProjectName: "portfolio-site",
    projectTitle: "Portfolio Website",
    projectDescription:
      "A personal portfolio website to showcase projects, skills and experience.",
    imageUrl: "/assets/projects/portfolio-site-mockup.webp",
    techStack: ["react", "ts", "tailwind"],
  },
];
