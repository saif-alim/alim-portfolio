export interface ProjectStat {
  value: number;
  suffix: string;
  caption: string;
}

export interface Project {
  id: string;
  projectTitle: string;
  subtitle: string;
  date?: string;
  type: string;
  projectDescription: string;
  bullets: string[];
  stats?: ProjectStat[];
  // The first image is the cover (project card and page hero), the rest fill the screens gallery
  imageUrls: string[];
  // Gallery tile shape: phone screenshots or landscape captures
  screenShape: "portrait" | "landscape";
  techStack: string[];
  projectUrl?: string;
}

export const projects: Project[] = [
  {
    id: "stafftodo",
    projectTitle: "StaffToDo",
    subtitle: "Task Management App for Small Businesses",
    date: "Jun 2026 – Present",
    type: "Cross-platform mobile app",
    projectDescription:
      "Designing and building a cross-platform task management app for small businesses, handling everything from product design to release. Grew to 100+ daily active users across 6 paying businesses.",
    bullets: [
      "Designing and building a cross-platform task management app for small businesses, handling everything from product design to release.",
      "Built with React Native and TypeScript, using Supabase for authentication, data storage and real-time sync.",
      "Grew to 100+ daily active users across 6 paying businesses.",
    ],
    stats: [
      { value: 100, suffix: "+", caption: "daily active users" },
      { value: 6, suffix: "", caption: "paying businesses" },
    ],
    imageUrls: ["/assets/projects/stafftodo-cover.webp"],
    screenShape: "portrait",
    techStack: ["React Native", "TypeScript", "Supabase"],
    projectUrl: "https://stafftodo.com/",
  },
  {
    id: "repem",
    projectTitle: "Repem",
    subtitle: "Social Fitness Tracker",
    date: "Nov 2025 – Jan 2026",
    type: "Cross-platform mobile app + landing page",
    projectDescription:
      "Designed and built a cross-platform social fitness tracking app using Flutter and Dart, with Riverpod state management and a Next.js landing page optimised for performance and SEO.",
    bullets: [
      "Designed and built a cross-platform social fitness tracking app using Flutter and Dart.",
      "Implemented state management with Riverpod to keep business logic separate from the UI and make the app easier to test.",
      "Built a responsive landing page with Next.js and TypeScript, optimised for performance and SEO.",
    ],
    imageUrls: [
      "/assets/projects/repem-cover.webp",
      "/assets/projects/repem-mockup.webp",
    ],
    screenShape: "landscape",
    techStack: ["Flutter", "Dart", "TypeScript", "React"],
    projectUrl: "https://repemfitness.com/",
  },
  {
    id: "hijra",
    projectTitle: "Hijra",
    subtitle: "Prayer Room Locator",
    date: "Sep 2023 – Jul 2024",
    type: "Android & iOS app",
    projectDescription:
      "Designed and built Hijra, a cross-platform mobile app for finding prayer rooms, covering research, planning and release on Android and iOS.",
    bullets: [
      "Designed and built Hijra, a cross-platform mobile app for finding prayer rooms, covering research, planning and release on Android and iOS.",
      "Used Firebase Firestore to store prayer room locations and Firebase Authentication to handle user sign-in securely.",
    ],
    imageUrls: [
      "/assets/projects/hijra-cover.jpg",
      "/assets/projects/hijra-mockup.webp",
      "/assets/projects/hijra-screenshots-mockup.webp",
    ],
    screenShape: "landscape",
    techStack: ["Flutter", "Dart", "Firebase"],
    projectUrl: "https://github.com/saif-alim/prayer_room_locator",
  },
];
