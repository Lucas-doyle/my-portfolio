export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  features: string[];
};

export const projects: Project[] = [
  {
    slug: "ai-knowledge-assistant",
    title: "AI Knowledge Assistant",
    category: "AI / RAG",
    description:
      "Enterprise knowledge assistant powered by LLMs, semantic search and Retrieval-Augmented Generation.",
    longDescription:
      "An AI-powered knowledge platform designed to help users retrieve useful information from large collections of enterprise content. The system combines LLMs, embeddings, vector search and a modern full-stack interface to produce contextual answers.",
    image: "/images/ai-assistant.png",
    technologies: [
      "Python",
      "FastAPI",
      "Next.js",
      "TypeScript",
      "OpenAI",
      "LangChain",
      "Pinecone",
    ],
    features: [
      "Retrieval-Augmented Generation",
      "Semantic search",
      "Vector embeddings",
      "Streaming AI responses",
      "Context-aware answers",
    ],
  },

  {
    slug: "ai-workflow-automation",
    title: "AI Workflow Automation",
    category: "AI Agents",
    description:
      "Multi-agent automation platform for reducing repetitive business workflows.",
    longDescription:
      "An intelligent automation platform that coordinates multiple AI agents to execute structured workflows. The architecture combines LangGraph, LLM function calling and backend services to automate repetitive processes.",
    image: "/images/workflow-ai.png",
    technologies: [
      "Python",
      "FastAPI",
      "LangGraph",
      "OpenAI",
      "Next.js",
      "PostgreSQL",
      "AWS",
    ],
    features: [
      "Multi-agent orchestration",
      "Function calling",
      "Workflow execution",
      "Real-time status updates",
      "Cloud deployment",
    ],
  },

  {
    slug: "saas-analytics-platform",
    title: "SaaS Analytics Platform",
    category: "Full Stack",
    description:
      "Scalable SaaS analytics platform with dashboards, APIs and real-time operational insights.",
    longDescription:
      "A full-stack SaaS analytics platform designed around operational visibility. The system processes business data and presents it through responsive dashboards, charts and API-driven interfaces.",
    image: "/images/analytics.png",
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "TypeScript",
      "Redis",
    ],
    features: [
      "Interactive analytics",
      "Real-time dashboards",
      "REST APIs",
      "Database optimization",
      "Caching",
    ],
  },

  {
    slug: "real-time-operations",
    title: "Real-Time Operations",
    category: "Web Apps",
    description:
      "Operational monitoring platform providing real-time visibility into large-scale business activity.",
    longDescription:
      "A real-time web application for teams that need immediate visibility into operational activity. WebSockets and API services allow dashboards to update without requiring manual refreshes.",
    image: "/images/saas-platform.png",
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "PostgreSQL",
      "WebSockets",
    ],
    features: [
      "Live operational data",
      "WebSocket updates",
      "Interactive dashboards",
      "Responsive interface",
      "API integrations",
    ],
  },

  {
    slug: "developer-api-platform",
    title: "Developer API Platform",
    category: "Backend",
    description:
      "Production API platform built around REST, GraphQL and scalable backend services.",
    longDescription:
      "A backend-focused platform designed to support high-traffic applications. The architecture emphasizes clean API boundaries, scalability, service separation, database performance and reliable deployment.",
    image: "/images/api-platform.png",
    technologies: [
      "Python",
      "FastAPI",
      "Node.js",
      "GraphQL",
      "PostgreSQL",
      "Docker",
    ],
    features: [
      "REST APIs",
      "GraphQL",
      "Microservices",
      "Authentication",
      "Automated testing",
      "CI/CD",
    ],
  },

  {
    slug: "ai-productivity-platform",
    title: "AI Productivity Platform",
    category: "AI / SaaS",
    description:
      "Modern AI SaaS platform combining intelligent assistance with workflow automation.",
    longDescription:
      "A modern AI productivity experience combining a responsive frontend, backend APIs and Generative AI services. The platform focuses on making complex workflows easier to complete through intelligent assistance.",
    image: "/images/profile-working.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Python",
      "OpenAI",
      "AWS",
    ],
    features: [
      "AI-assisted workflows",
      "Streaming responses",
      "Modern SaaS interface",
      "Cloud deployment",
      "Scalable architecture",
    ],
  },
];