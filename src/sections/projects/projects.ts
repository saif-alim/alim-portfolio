export interface Project {
  shortProjectName?: string;
  projectTitle: string;
  projectDescription: string;
  imageUrls: string[];
  techStack: string[];
  detailedDescription?: string;
  projectUrl?: string;
}

export const projects: Project[] = [
  {
    shortProjectName: "hijra_",
    projectTitle: "Hijra: Prayer room locator app",
    projectDescription:
      "A community based mobile app to help users find prayer rooms and ratings/details.",
    imageUrls: [
      "/assets/projects/hijra-mockup.webp",
      "/assets/projects/hijra-screenshots-mockup.webp",
    ],
    techStack: ["flutter", "firebase"],
    projectUrl: "https://github.com/saif-alim/prayer_room_locator",
    detailedDescription:
      "Hijra was built to help the Muslim community locate nearby prayer rooms easily. It features a map view and list view showing nearby prayer rooms sorted by distance, user review functionality, and Firebase authentication. Users can request new prayer rooms, upload photos, and rate cleanliness and accessibility, encouraging community engagement.",
  },
  {
    shortProjectName: "ocean_odyssey_",
    projectTitle: "Ocean Odyssey: Platformer game",
    projectDescription:
      "A 3D underwater platformer game with ocean based theming and multiple levels.",
    imageUrls: [
      "/assets/projects/oceanody-gameplay-mockup.webp",
      "/assets/projects/oceanody-start-menu.webp",
      "/assets/projects/oceanody-settings.webp",
    ],
    techStack: ["unity", "c#"],
    projectUrl: "https://aamirc22.github.io/OceanOdy/build/index.html",
    detailedDescription:
      "Ocean Odyssey is a 3D platformer game developed in Unity where players navigate an underwater world filled with obstacles. The game features multiple levels, each with unique challenges and ocean-themed environments. Players control a character that can swim, jump, and interact with various objects to progress through the game. There is also a time based oxygen mechanic that adds an extra layer of challenge.",
  },
  {
    shortProjectName: "portfolio_site_",
    projectTitle: "Portfolio Website",
    projectDescription:
      "A personal portfolio website to showcase projects, skills and experience.",
    detailedDescription:
      "This portfolio website was built using React, TypeScript, and Tailwind CSS. It features a clean and modern design, with sections for showcasing projects, skills, and experience. The website is fully responsive and optimized for performance.",
    imageUrls: ["/assets/projects/portfolio-site-mockup.webp"],
    techStack: ["react", "ts", "tailwind"],
  },
];
