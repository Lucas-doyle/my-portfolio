import {
  MapPin,
  BriefcaseBusiness,
  GraduationCap,
} from "lucide-react";
import { education, experience } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <section className="page">
      <div className="container-page py-16">
        <p className="section-eyebrow">
          Career
        </p>

        <h1 className="section-heading mt-2">
          Experience
        </h1>

        <p className="section-description">
          Seven years of building scalable software, AI systems and
          cloud-native products across full-stack engineering roles.
        </p>

        <div className="relative mt-12">
          <div className="absolute bottom-0 left-[7px] top-0 w-px bg-white/10" />

          <div className="space-y-8">
            {experience.map((job) => (
              <article
                key={job.company}
                className="relative pl-9"
              >
                <div className="absolute left-0 top-5 h-4 w-4 rounded-full border-4 border-[#050816] bg-violet-600" />

                <div className="card rounded-xl p-6 md:p-7">
                  <div className="flex flex-col justify-between gap-4 md:flex-row">
                    <div>
                      <p className="text-[11px] font-medium text-violet-400">
                        {job.period}
                      </p>

                      <h2 className="mt-2 text-xl font-bold text-white">
                        {job.role}
                      </h2>

                      <p className="mt-1 text-sm text-gray-300">
                        {job.company}
                      </p>
                    </div>

                    <div className="flex h-fit items-center gap-2 text-[11px] text-gray-500">
                      <MapPin size={13} />
                      {job.location}
                    </div>
                  </div>

                  <p className="mt-5 text-xs leading-6 text-gray-500">
                    {job.description}
                  </p>

                  <div className="mt-5 space-y-3">
                    {job.achievements.map((item) => (
                      <div
                        key={item}
                        className="flex gap-3 text-xs leading-6 text-gray-500"
                      >
                        <BriefcaseBusiness
                          size={13}
                          className="mt-1 shrink-0 text-violet-400"
                        />

                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <div className="card rounded-xl p-7">
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400">
                <GraduationCap size={19} />
              </div>

              <div>
                <p className="text-[11px] text-violet-400">
                  Education
                </p>

                <h2 className="mt-1 text-lg font-bold text-white">
                  {education.degree}
                </h2>

                <p className="mt-1 text-xs text-gray-400">
                  {education.school}
                </p>

                <p className="mt-1 text-[11px] text-gray-600">
                  {education.period} · {education.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
