import { site } from "./site";

export type Job = {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
};

export const experience: Job[] = [
  {
    company: "Tines",
    role: "AI Full Stack Software Engineer",
    period: "2025 — Present",
    location: site.location,
    description:
      "Building production AI applications, intelligent workflows and scalable full-stack systems serving thousands of users.",
    achievements: [
      "Designed AI applications using OpenAI GPT-4, FastAPI, Next.js and TypeScript serving 10,000+ monthly users.",
      "Built RAG systems and multi-agent workflows using LangChain, LangGraph, OpenAI embeddings and Pinecone.",
      "Reduced manual workflows by 60% through LLM-powered automation.",
      "Built scalable backend services using FastAPI, Node.js and PostgreSQL.",
      "Implemented authentication, payment processing, monitoring and AWS deployment pipelines.",
      "Improved AI response times by 40% through caching, prompt engineering and streaming.",
    ],
  },
  {
    company: "Ding",
    role: "Senior Full Stack Software Engineer",
    period: "2022 — 2025",
    location: site.location,
    description:
      "Led development of enterprise-scale web applications, APIs and real-time analytics systems.",
    achievements: [
      "Led development using React, Next.js, Node.js, Express and PostgreSQL.",
      "Designed RESTful and GraphQL APIs for high-traffic production environments.",
      "Built real-time dashboards and analytics systems.",
      "Improved application performance by 30% through database optimization and service refactoring.",
      "Introduced automated testing and CI/CD pipelines.",
      "Mentored junior developers and conducted architecture reviews.",
    ],
  },
  {
    company: "Flipdish",
    role: "Software Engineer",
    period: "2018 — 2022",
    location: site.location,
    description:
      "Developed full-stack applications, APIs and backend services across web and mobile products.",
    achievements: [
      "Developed applications using Python, Django, Flask, React and Node.js.",
      "Built API integrations and data-processing systems.",
      "Improved system stability through monitoring and automated testing.",
      "Participated in Agile development, sprint planning and code reviews.",
      "Worked closely with designers, product managers and engineering teams.",
      "Enhanced frontend performance and accessibility.",
    ],
  },
];

export const education = {
  degree: "BSc in Computer Science",
  school: "University College Dublin",
  period: "2014 — 2018",
  location: site.location,
} as const;
