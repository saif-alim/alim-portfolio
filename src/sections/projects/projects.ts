export interface Project {
  shortProjectName: string;
  projectTitle: string;
  projectDescription: string;
  imageUrl: string;
}

export const projects: Project[] = [
  {
    shortProjectName: "steers",
    projectTitle: "Reward-based Q&A Platform",
    projectDescription:
      "React Native app where users answer “steers” to earn points redeemable for gift cards.",
    imageUrl: "/assets/placeholder.webp",
  },
  {
    shortProjectName: "portfolio",
    projectTitle: "Personal Portfolio Website",
    projectDescription:
      "Built with Next.js and Tailwind, inspired by developer aesthetics and terminal interfaces.",
    imageUrl: "/assets/placeholder.webp",
  },
  {
    shortProjectName: "restaurant-site",
    projectTitle: "Restaurant Website",
    projectDescription:
      "Static TypeScript site with a lightweight admin panel for managing store locations.",
    imageUrl: "/assets/placeholder.webp",
  },
];
