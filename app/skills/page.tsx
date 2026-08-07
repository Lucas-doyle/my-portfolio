import {
  BrainCircuit,
  Code2,
  Database,
  Cloud,
  GitBranch,
  Server,
  Boxes,
} from "lucide-react";

const groups = [
  {
    title: "AI & Machine Learning",
    icon: <BrainCircuit size={18} />,
    skills: [
      ["Python", 98],
      ["OpenAI API", 95],
      ["RAG", 95],
      ["AI Agents", 92],
      ["LangChain", 90],
      ["LangGraph", 88],
    ],
  },

  {
    title: "Frontend",
    icon: <Code2 size={18} />,
    skills: [
      ["React", 95],
      ["Next.js", 95],
      ["TypeScript", 95],
      ["JavaScript", 95],
      ["Tailwind CSS", 92],
      ["HTML / CSS", 95],
    ],
  },

  {
    title: "Backend",
    icon: <Server size={18} />,
    skills: [
      ["Python / FastAPI", 97],
      ["Node.js", 95],
      ["Django", 90],
      ["Express.js", 90],
      ["REST APIs", 95],
      ["GraphQL", 85],
    ],
  },

  {
    title: "Cloud & DevOps",
    icon: <Cloud size={18} />,
    skills: [
      ["AWS", 90],
      ["Docker", 92],
      ["CI/CD", 90],
      ["GitHub Actions", 90],
      ["Linux", 88],
      ["Vercel", 90],
    ],
  },
];

const technologies = [
  {
    name: "Python",
    icon: "Py",
  },
  {
    name: "TypeScript",
    icon: "TS",
  },
  {
    name: "React",
    icon: "R",
  },
  {
    name: "Next.js",
    icon: "N",
  },
  {
    name: "OpenAI",
    icon: "AI",
  },
  {
    name: "PostgreSQL",
    icon: "PG",
  },
  {
    name: "Docker",
    icon: "D",
  },
  {
    name: "AWS",
    icon: "AWS",
  },
  {
    name: "Git",
    icon: "Git",
  },
  {
    name: "GraphQL",
    icon: "G",
  },
];

export default function SkillsPage() {
  return (
    <section className="page">
      <div className="container-page py-16">
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

        <div className="mt-12 grid gap-x-14 gap-y-12 lg:grid-cols-2">
          {groups.map((group) => (
            <div key={group.title}>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400">
                  {group.icon}
                </div>

                <h2 className="text-sm font-semibold text-white">
                  {group.title}
                </h2>
              </div>

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

        {/* BOTTOM TECHNOLOGIES */}
        <div className="mt-16 border-t border-white/[0.07] pt-10">
          <div className="flex items-center gap-3">
            <Boxes size={18} className="text-violet-400" />

            <h2 className="text-lg font-semibold text-white">
              Other Technologies
            </h2>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {technologies.map((technology) => (
              <div
                key={technology.name}
                className="card rounded-xl p-4 transition hover:border-violet-500/30"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/10 text-xs font-bold text-violet-400">
                  {technology.icon}
                </div>

                <p className="mt-3 text-xs text-gray-400">
                  {technology.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}