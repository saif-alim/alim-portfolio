export interface WorkExperience {
  jobTitle: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  keyPoints: string[];
}

export const workExperiences: WorkExperience[] = [
  {
    jobTitle: "Software Developer",
    company: "Vypr Validation Ltd",
    location: "Manchester, United Kingdom",
    startDate: "Jul 2024",
    endDate: "Present",
    keyPoints: [
      "Own features end-to-end, from reviewing product pitches, producing estimates and scoping requirements with product and design, to building, testing and releasing them. Shipped 8 features to production so far.",
      "Design and build the Node.js and TypeScript APIs behind each feature, including DynamoDB data modelling and S3 file handling.",
      "Build responsive, accessible user interfaces with React, TypeScript and Mantine, including reusable components and custom hooks with 85% test coverage using React Testing Library. Design application architecture (folder structure, separation of concerns) to keep the codebase maintainable as it grows.",
      "Develop and maintain the native Android app using Kotlin, Java, XML and Jetpack Compose, including REST API integration, local data storage and caching.",
      "Write unit tests with JUnit and Mockito and manage releases through Google Play Console, including versioning, signing and rollout strategy.",
      "Help maintain the iOS app alongside core Android and web development.",
    ],
  },
];
