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

const groups = [
  {
    title: "AI & Machine Learning",
    icon: <BrainCircuit size={18} />,
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
    icon: <CloudCog size={18} />,
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
    icon: <Server size={18} />,
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
    icon: <PanelsTopLeft size={18} />,
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

const technologies = [
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

/*
 * Small custom layers icon used for RAG.
 */
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

export default function SkillsPage() {
  return (
    <section className="page">
      <div className="container-page py-16">

        {/* PAGE INTRO */}
        <p className="section-eyebrow">
          Technologies
        </p>

        <h1 className="section-heading mt-2">
          My Skills
        </h1>

        <p className="section-description">
          Technologies I work with to build intelligent, scalable
          and production-ready products.
        </p>

        {/* MAIN SKILL GROUPS */}
        <div className="mt-12 grid gap-x-14 gap-y-12 lg:grid-cols-2">

          {groups.map((group) => (
            <div key={group.title}>

              {/* GROUP TITLE */}
              <div className="mb-6 flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400">
                  {group.icon}
                </div>

                <h2 className="text-sm font-semibold text-white">
                  {group.title}
                </h2>

              </div>

              {/* SKILL BARS */}
              <div className="space-y-5">

                {group.skills.map(([skill, level]) => (
                  <div key={skill}>

                    <div className="mb-2 flex justify-between">

                      <span className="text-xs text-gray-400">
                        {skill}
                      </span>

                      <span className="text-[10px] text-gray-600">
                        {level}%
                      </span>

                    </div>

                    <div className="h-1.5 rounded-full bg-white/10">

                      <div
                        className="h-full rounded-full bg-violet-600"
                        style={{
                          width: `${level}%`,
                        }}
                      />

                    </div>

                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>

        {/* OTHER TECHNOLOGIES */}
        <div className="mt-16 border-t border-white/[0.07] pt-10">

          {/* SECTION TITLE */}
          <div className="flex items-center gap-3">

            <Boxes
              size={18}
              className="text-violet-400"
            />

            <h2 className="text-lg font-semibold text-white">
              Other Technologies
            </h2>

          </div>

          {/* TECHNOLOGY GRID */}
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">

            {technologies.map((technology, index) => {

              const Icon = technology.icon;

              /*
               * Center the final two cards on large screens.
               *
               * There are 30 technologies.
               * 4 columns = 28 items + 2 remaining items.
               *
               * Final two:
               *   column 2
               *   column 3
               */
              const isLastTwo =
                index >= technologies.length - 2;

              return (
                <div
                  key={technology.name}
                  className={`card flex min-h-[76px] items-center gap-3 rounded-xl px-4 py-3 transition-all duration-300 hover:border-violet-500/30 hover:bg-white/[0.03] ${
                    isLastTwo
                      ? index === technologies.length - 2
                        ? "lg:col-start-2"
                        : "lg:col-start-3"
                      : ""
                  }`}
                >

                  {/* ICON */}
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.05]">

                    <Icon
                      size={20}
                      style={{
                        color: technology.color,
                      }}
                    />

                  </div>

                  {/* TEXT */}
                  <div className="min-w-0">

                    {/* TECHNOLOGY NAME */}
                    <p className="text-xs font-medium leading-4 text-gray-300">
                      {technology.name}
                    </p>

                    {/* TECHNOLOGY CATEGORY */}
                    <p className="mt-1 text-[10px] leading-4 text-gray-600">
                      {technology.category}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}