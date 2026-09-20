import { Boxes } from "lucide-react";
import { skillGroups, technologies } from "@/data/skills";

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
          {skillGroups.map((group) => {
            const GroupIcon = group.icon;

            return (
              <div key={group.title}>
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400">
                    <GroupIcon size={18} />
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
            );
          })}
        </div>

        <div className="mt-16 border-t border-white/[0.07] pt-10">
          <div className="flex items-center gap-3">
            <Boxes
              size={18}
              className="text-violet-400"
            />

            <h2 className="text-lg font-semibold text-white">
              Other Technologies
            </h2>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {technologies.map((technology, index) => {
              const Icon = technology.icon;
              const isLastTwo = index >= technologies.length - 2;

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
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.05]">
                    <Icon
                      size={20}
                      style={{
                        color: technology.color,
                      }}
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-medium leading-4 text-gray-300">
                      {technology.name}
                    </p>

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
