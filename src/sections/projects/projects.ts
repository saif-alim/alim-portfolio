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
    shortProjectName: "repem_",
    projectTitle: "REPEM: Social fitness tracker",
    projectDescription:
      "A social fitness tracking app that helps users log workouts, stay consistent, and motivate friends.",
    detailedDescription:
      "REPEM is a social fitness tracking app designed to help users build consistency and accountability in their workouts. Users can log exercises, track progress over time, and share activity updates with friends. The app focuses on simplicity and motivation, combining personal fitness tracking with light social features to encourage regular training and healthy habits. Built with Flutter, REPEM provides a clean, cross-platform experience with an emphasis on performance and intuitive UI.",
    imageUrls: ["/assets/projects/repem-mockup.webp"],
    techStack: ["flutter", "dart"],
  },
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

];
