import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import { site, siteStats } from "@/data/site";
import { education, experience } from "@/data/experience";

function SmallIcon({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-violet-500/20 bg-violet-500/10 text-violet-400">
      {children}
    </div>
  );
}

function FeatureItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4">
      <SmallIcon>{icon}</SmallIcon>

      <div>
        <h3 className="text-sm font-semibold text-white">
          {title}
        </h3>

        <p className="mt-1 text-xs leading-5 text-gray-500">
          {description}
        </p>
      </div>
    </div>
  );
}

function Stat({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="px-2 text-center">
      <p className="text-3xl font-bold text-violet-500">
        {number}
      </p>

      <p className="mt-1 text-xs text-gray-500">
        {label}
      </p>
    </div>
  );
}

const currentRole = experience[0];

export default function AboutPage() {
  return (
    <div className="page">
      <section className="container-page homepage-container py-12">
        <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
          <div>
            <p className="text-xs font-medium text-violet-400">
              About Me
            </p>

            <h1 className="mt-3 max-w-[520px] text-[34px] font-bold leading-[1.15] text-white md:text-[42px]">
              Building products and
              <br />
              <span className="text-violet-500">
                experiences that matter.
              </span>
            </h1>

            <p className="mt-5 max-w-[520px] text-sm leading-7 text-gray-400">
              {site.summary}
            </p>

            <p className="mt-3 max-w-[520px] text-sm leading-7 text-gray-500">
              {site.focus}
            </p>

            <div className="mt-7 space-y-5">
              <FeatureItem
                title={`${site.yearsExperience} Years Experience`}
                description="Building scalable web applications, SaaS platforms, and AI-powered products."
                icon={
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <rect x="4" y="5" width="16" height="15" rx="2" />
                    <path d="M8 3v4" />
                    <path d="M16 3v4" />
                    <path d="M4 10h16" />
                  </svg>
                }
              />

              <FeatureItem
                title="AI & Full Stack Engineering"
                description="From frontend experiences to backend APIs, RAG systems, AI agents, and cloud infrastructure."
                icon={
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <circle cx="12" cy="12" r="3" />
                    <circle cx="12" cy="12" r="8" />
                    <path d="M12 2v3" />
                    <path d="M12 19v3" />
                    <path d="M2 12h3" />
                    <path d="M19 12h3" />
                  </svg>
                }
              />

              <FeatureItem
                title="Clean & Scalable Code"
                description="Focused on maintainable architecture, performance optimization, testing, and reliable systems."
                icon={
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <path d="M12 3 4 7v6c0 4.5 3.4 7 8 8 4.6-1 8-3.5 8-8V7l-8-4Z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                }
              />

              <FeatureItem
                title="Collaborative Team Player"
                description="Experienced working with product, design, and engineering teams to deliver business-focused solutions."
                icon={
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <circle cx="9" cy="8" r="3" />
                    <circle cx="17" cy="9" r="2" />
                    <path d="M3 20a6 6 0 0 1 12 0" />
                    <path d="M14 17a5 5 0 0 1 7 3" />
                  </svg>
                }
              />
            </div>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-violet-600 px-5 py-3 text-xs font-semibold text-white shadow-lg shadow-violet-900/20 transition hover:bg-violet-500"
              >
                <Mail size={14} />
                Let&apos;s work together
              </Link>
            </div>
          </div>

          <div className="relative min-w-0 overflow-hidden">
            <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-700/20 blur-[100px]" />

            <div className="card relative mx-auto max-w-[1100px] overflow-hidden rounded-3xl">
              <Image
                src="/images/about-developer.png"
                alt={site.role}
                width={1672}
                height={941}
                priority
                className="h-auto w-full object-contain"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050811]/50 via-transparent to-transparent" />
            </div>

            <div className="absolute left-3 top-8 hidden rounded-lg border border-violet-500/20 bg-[#0c1220]/95 p-3 shadow-xl backdrop-blur-md lg:block">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <circle cx="12" cy="12" r="3" />
                    <circle cx="12" cy="12" r="8" />
                    <path d="M12 2v3" />
                    <path d="M12 19v3" />
                  </svg>
                </div>

                <div>
                  <p className="text-xs font-semibold text-white">
                    AI Engineering
                  </p>
                  <p className="mt-1 text-[11px] text-gray-500">
                    RAG · Agents · LLMs
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-8 right-3 hidden rounded-lg border border-violet-500/20 bg-[#0c1220]/95 p-3 shadow-xl backdrop-blur-md lg:block">
              <div className="font-mono text-xs">
                <span className="text-purple-400">&lt;</span>
                <span className="text-blue-300">AI</span>
                <span className="text-purple-400">/&gt;</span>
              </div>
              <p className="mt-1 text-[11px] text-gray-500">
                Python · TypeScript
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page homepage-container pb-10">
        <div className="card grid grid-cols-2 gap-6 rounded-3xl px-6 py-7 sm:gap-4 md:grid-cols-4">
          {siteStats.map((stat) => (
            <Stat
              key={stat.label}
              number={stat.number}
              label={stat.label}
            />
          ))}
        </div>
      </section>

      <section className="container-page homepage-container pb-12">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card rounded-3xl p-6">
            <p className="text-xs font-medium text-violet-400">
              Education
            </p>

            <h2 className="mt-2 text-lg font-bold text-white">
              {education.degree}
            </h2>

            <p className="mt-1 text-xs text-gray-400">
              {education.school}
            </p>

            <p className="mt-4 text-sm leading-7 text-gray-500">
              {education.summary}
            </p>

            <div className="mt-5 flex justify-between gap-4">
              <div>
                <p className="text-xs text-gray-500">
                  Location
                </p>
                <p className="mt-1 text-xs text-white">
                  {education.location}
                </p>
              </div>

              <div className="text-right">
                <p className="text-xs text-gray-500">
                  Period
                </p>
                <p className="mt-1 text-xs text-white">
                  {education.period}
                </p>
              </div>
            </div>
          </div>

          <div className="card rounded-3xl p-6">
            <p className="text-xs font-medium text-violet-400">
              Current Role
            </p>

            <h2 className="mt-2 text-lg font-bold text-white">
              {currentRole.role}
            </h2>

            <p className="mt-1 text-xs text-gray-400">
              {currentRole.company} · {currentRole.location} · {currentRole.period}
            </p>

            <p className="mt-4 text-sm leading-7 text-gray-500">
              {currentRole.description}{" "}
              {currentRole.achievements.slice(0, 3).join(" ")}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
