export interface WorkExperience {
  jobTitle: string;
  company: string;
  shortCompanyName?: string;
  startDate: string;
  endDate: string;
  keyPoints: string[];
  keyWords?: string[];
}

export const workExperiences: WorkExperience[] = [
  {
    jobTitle: "Junior Software Engineer",
    company: "Vypr Validation Ltd",
    shortCompanyName: "vypr_",
    startDate: "Jul 2024",
    endDate: "Present",
    keyPoints: [
      "Contributed to the development of a TypeScript based web application.",
      "Developed and maintained server-side logic using Node.js and Typescript, ensuring scalable and efficient API endpoints.",
      "Worked with AWS services including DynamoDB optimisations and S3 file handling.",
      "Collaborated in an Agile environment to deliver high-quality results.",
    ],
    keyWords: ["typescript", "node.js", "aws", "dynamodb", "s3", "agile"],
  },
  {
    jobTitle: "Head of Design",
    company: "Cub Magazine",
    shortCompanyName: "cub_mag_",
    startDate: "Oct 2021",
    endDate: "Mar 2022",
    keyPoints: [
      "Spearheaded design process and guided team to align with required specifications, resulting in a cohesive final design.",
      "Managed and inspired team, pushing quality of design work and helping drive impact through teams.",
      "Engaged with the team to brainstorm and create a visually striking end result.",
    ],
  },
];
