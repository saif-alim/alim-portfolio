export interface SkillGroup {
  key: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    key: "languages",
    items: [
      "TypeScript",
      "JavaScript",
      "Python",
      "Java",
      "Kotlin",
      "Dart",
      "SQL",
      "PHP",
    ],
  },
  {
    key: "frontendMobile",
    items: [
      "React",
      "React Native",
      "Next.js",
      "Mantine",
      "Flutter",
      "HTML",
      "CSS",
    ],
  },
  {
    key: "backendCloud",
    items: [
      "Node.js",
      "AWS (DynamoDB, S3)",
      "Firebase (Firestore, Remote Config, Crashlytics)",
      "Supabase",
    ],
  },
  {
    key: "testingTools",
    items: ["JUnit", "Mockito", "React Testing Library", "Git", "Figma"],
  },
];

export const currentlyPursuing = "AWS Certified Developer - Associate";
