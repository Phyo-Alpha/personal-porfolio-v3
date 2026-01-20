import type { ExperienceItemType } from "@/features/home/work-experience";

export const Education: ExperienceItemType[] = [
  {
    id: "1",
    companyName: "University of Wollongong",
    companyLogo: "/education/uow.png",
    isCurrentEmployer: true,
    positions: [
      {
        id: "1-1",
        title: "Bachelor of Science in Computer Science (Big Data)",
        employmentPeriod: "April 2022 - March 2024",
        employmentType: "Full-time",
        description: `During my time at the University of Wollongong, I choose to pursue in Data-Science and Data Engineering branch of the major, which at the time has interesting for me. I learned about statistics, calculus, discrete mathetics, creating data-pipelines, and data-analysis processes. In addition, I also learned about machine learning and creating neural networks with deep learning, and also worked on a project with utilizing computer vision to classify the species of corns from images. It is my final year project, which is an AI-powered social media analysis platform, that make me interested in creating a full-stack web application, and during that project, I was a lead developer, and handles the backend development with Spring Boot, and Open AI integration part.`,
        icon: "code",
        skills: [
          "Python",
          "SQL",
          "Pytorch",
          "Data Engineering",
          "Machine Learning",
          "Deep Learning",
          "Computer Vision",
          "Spring Boot",
          "Open AI",
          "Data Analysis",
        ],
        isExpanded: true,
      },
    ],
  },
];
