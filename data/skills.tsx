import type { ComponentType } from "react";
import {
  BrainCircuit,
  CloudCog,
  Server,
  PanelsTopLeft,
  Boxes,
  Sparkles,
  Gem,
  Search,
  Waypoints,
  Workflow,
  Link2,
  WandSparkles,
  Library,
  PenLine,
  MessageSquareCode,
  Bot,
  Radio,
  DatabaseZap,
  TreePine,
  Component,
  Palette,
  TrendingUp,
  Gauge,
  TestTube,
  RefreshCw,
  GitPullRequest,
} from "lucide-react";
import {
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiVercel,
} from "react-icons/si";

function LayersIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 2 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12 9 5 9-5" />
      <path d="m3 17 9 5 9-5" />
    </svg>
  );
}

type IconComponent = ComponentType<{
  size?: number;
  className?: string;
  style?: { color?: string };
}>;

export type SkillGroup = {
  title: string;
  icon: IconComponent;
  skills: [string, number][];
};

export type Technology = {
  name: string;
  category: string;
  icon: IconComponent;
  color: string;
};

export const skillGroups: SkillGroup[] = [
  {
    title: "AI & Machine Learning",
    icon: BrainCircuit,
    skills: [
      ["Python", 98],
      ["OpenAI API", 96],
      ["AI Agents", 94],
      ["LangGraph", 90],
      ["Vector Databases", 91],
      ["Function Calling", 93],
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: CloudCog,
    skills: [
      ["AWS", 92],
      ["Docker", 93],
      ["Kubernetes", 85],
      ["CI/CD", 91],
      ["GitHub Actions", 90],
      ["Linux", 88],
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: [
      ["Node.js", 95],
      ["FastAPI", 97],
      ["Django", 92],
      ["Express.js", 90],
      ["REST APIs", 96],
      ["Microservices", 90],
    ],
  },
  {
    title: "Frontend Development",
    icon: PanelsTopLeft,
    skills: [
      ["React", 97],
      ["Next.js", 96],
      ["TypeScript", 97],
      ["HTML5", 92],
      ["CSS3", 92],
      ["Tailwind CSS", 92],
    ],
  },
];

export const technologies: Technology[] = [
  {
    name: "Claude API",
    category: "AI & Machine Learning",
    icon: Sparkles,
    color: "#D97757",
  },
  {
    name: "Gemini API",
    category: "AI & Machine Learning",
    icon: Gem,
    color: "#4285F4",
  },
  {
    name: "Large Language Models (LLMs)",
    category: "AI & Machine Learning",
    icon: BrainCircuit,
    color: "#A78BFA",
  },
  {
    name: "Retrieval-Augmented Generation (RAG)",
    category: "AI & Machine Learning",
    icon: LayersIcon,
    color: "#60A5FA",
  },
  {
    name: "Semantic Search",
    category: "AI & Machine Learning",
    icon: Search,
    color: "#38BDF8",
  },
  {
    name: "Embeddings",
    category: "AI & Machine Learning",
    icon: Waypoints,
    color: "#C084FC",
  },
  {
    name: "Model Context Protocol",
    category: "AI & Machine Learning",
    icon: Workflow,
    color: "#818CF8",
  },
  {
    name: "LangChain",
    category: "AI & Machine Learning",
    icon: Link2,
    color: "#22C55E",
  },
  {
    name: "Prompt Optimization",
    category: "AI & Machine Learning",
    icon: WandSparkles,
    color: "#F59E0B",
  },
  {
    name: "LlamaIndex",
    category: "AI & Machine Learning",
    icon: Library,
    color: "#F97316",
  },
  {
    name: "Prompt Engineering",
    category: "AI & Machine Learning",
    icon: PenLine,
    color: "#EAB308",
  },
  {
    name: "OpenAI Assistants API",
    category: "AI & Machine Learning",
    icon: MessageSquareCode,
    color: "#FFFFFF",
  },
  {
    name: "Agentic AI Systems",
    category: "AI & Machine Learning",
    icon: Bot,
    color: "#8B5CF6",
  },
  {
    name: "GraphQL",
    category: "API & Backend",
    icon: SiGraphql,
    color: "#E10098",
  },
  {
    name: "WebSockets",
    category: "Backend Development",
    icon: Radio,
    color: "#38BDF8",
  },
  {
    name: "SQL",
    category: "Databases",
    icon: DatabaseZap,
    color: "#60A5FA",
  },
  {
    name: "PostgreSQL",
    category: "Databases",
    icon: SiPostgresql,
    color: "#4169E1",
  },
  {
    name: "MongoDB",
    category: "Databases",
    icon: SiMongodb,
    color: "#47A248",
  },
  {
    name: "Redis",
    category: "Databases",
    icon: SiRedis,
    color: "#DC382D",
  },
  {
    name: "Pinecone",
    category: "Vector Databases",
    icon: TreePine,
    color: "#16A34A",
  },
  {
    name: "Weaviate",
    category: "Vector Databases",
    icon: Component,
    color: "#F97316",
  },
  {
    name: "ChromaDB",
    category: "Vector Databases",
    icon: Palette,
    color: "#8B5CF6",
  },
  {
    name: "Vercel",
    category: "Cloud & Deployment",
    icon: SiVercel,
    color: "#FFFFFF",
  },
  {
    name: "System Design",
    category: "Software Engineering",
    icon: Boxes,
    color: "#60A5FA",
  },
  {
    name: "Distributed Systems",
    category: "Software Engineering",
    icon: Workflow,
    color: "#06B6D4",
  },
  {
    name: "Scalability",
    category: "Software Engineering",
    icon: TrendingUp,
    color: "#22C55E",
  },
  {
    name: "Performance Optimization",
    category: "Software Engineering",
    icon: Gauge,
    color: "#F59E0B",
  },
  {
    name: "Testing",
    category: "Software Engineering",
    icon: TestTube,
    color: "#14B8A6",
  },
  {
    name: "Agile / Scrum",
    category: "Software Engineering",
    icon: RefreshCw,
    color: "#3B82F6",
  },
  {
    name: "Code Reviews",
    category: "Software Engineering",
    icon: GitPullRequest,
    color: "#F97316",
  },
];
