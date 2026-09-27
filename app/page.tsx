import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BriefcaseBusiness, Mail } from "lucide-react";
import TypingEffect from "@/components/TypingEffect";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: site.role,
  description:
    "Portfolio of an AI Full Stack Software Engineer specializing in Generative AI, Python, TypeScript, React and Next.js.",
};

function SmallIcon({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-violet-500/20 bg-violet-500/10 text-violet-400">
      {children}
    </div>
  );
}

function DeveloperLaptop() {
  return (
    <div className="relative mx-auto h-[360px] w-full max-w-[1100px] sm:h-[420px] lg:h-[500px]">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-600/20 via-purple-500/10 to-transparent blur-3xl" />
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-violet-900/10 to-transparent" />

      <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl shadow-violet-500/10 backdrop-blur-sm">
        <Image
          src="/images/laptop-dev.png"
          alt="Developer laptop setup with code, plant, and coffee"
          fill
          className="object-contain"
          priority
        />
      </div>

      <div className="absolute -right-4 top-10 h-2 w-2 rounded-full bg-violet-400/60 blur-[2px] animate-pulse" />
      <div
        className="absolute -left-2 bottom-20 h-3 w-3 rounded-full bg-purple-400/50 blur-[3px] animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute right-10 bottom-10 h-2 w-2 rounded-full bg-violet-300/70 blur-[2px] animate-pulse"
        style={{ animationDelay: "2s" }}
      />
    </div>
  );
}

function StatCard({
  icon,
  number,
  label,
}: {
  icon: React.ReactNode;
  number: string;
  label: string;
}) {
  return (
    <div className="flex h-[76px] items-center gap-3 rounded-xl border border-white/[0.1] bg-gradient-to-br from-[#121a30]/95 to-[#0c1220]/95 px-3.5 shadow-xl shadow-black/25 backdrop-blur-md">
      <SmallIcon>{icon}</SmallIcon>

      <div>
        <p className="text-xl font-bold leading-none text-white">{number}</p>
        <p className="text-[11px] text-gray-400">{label}</p>
      </div>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div>
      <div className="relative inline-block">
        <div className="absolute -left-4 top-7 h-40 w-px bg-violet-500/60" />
        <div className="mt-7 flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-500/40 bg-violet-500/5 text-violet-400">
          {icon}
        </div>
      </div>

      <h3 className="mt-4 text-[15px] font-semibold text-white">
        {title}
      </h3>

      <p className="mt-2 text-[13px] leading-6 text-gray-400">
        {description}
      </p>
    </div>
  );
}

const stats = [
  {
    number: "7+",
    label: "Years Experience",
    icon: (
      <svg
        width="16"
        height="16"
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
    ),
  },
  {
    number: "20+",
    label: "Projects Delivered",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      >
        <path d="M8 8h8" />
        <path d="M8 12h5" />
        <path d="M8 16h4" />
        <path d="M5 3h14v18H5z" />
      </svg>
    ),
  },
  {
    number: "10K+",
    label: "Monthly Users",
    icon: (
      <svg
        width="16"
        height="16"
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
    ),
  },
] as const;

export default function HomePage() {
  return (
    <div className="page">
      <section className="container-page homepage-container py-12">
        <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
          <div className="relative z-10">
            <TypingEffect />

            <p
              className="mt-6 max-w-[600px] text-[14px] leading-8 text-gray-400 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              I build scalable SaaS platforms, cloud-native applications,
              and AI-powered products that solve real-world problems and
              deliver measurable business impact.
            </p>

            <p
              className="mt-4 text-[15px] text-gray-400 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <span className="cursor-default text-gray-300 transition-colors hover:text-violet-400">
                Python
              </span>
              <span className="mx-2 text-violet-500">·</span>
              <span className="cursor-default text-gray-300 transition-colors hover:text-violet-400">
                TypeScript
              </span>
              <span className="mx-2 text-violet-500">·</span>
              <span className="cursor-default text-gray-300 transition-colors hover:text-violet-400">
                React
              </span>
              <span className="mx-2 text-violet-500">·</span>
              <span className="cursor-default text-gray-300 transition-colors hover:text-violet-400">
                Next.js
              </span>
              <span className="mx-2 text-violet-500">·</span>
              <span className="cursor-default text-gray-300 transition-colors hover:text-violet-400">
                Node.js
              </span>
              <span className="mx-2 text-violet-500">·</span>
              <span className="cursor-default text-gray-300 transition-colors hover:text-violet-400">
                AI
              </span>
              <span className="mx-2 text-violet-500">·</span>
              <span className="cursor-default text-gray-300 transition-colors hover:text-violet-400">
                AWS
              </span>
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-violet-500"
              >
                <BriefcaseBusiness size={18} />
                View My Work
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/5"
              >
                <Mail size={18} />
                Get in Touch
              </Link>
            </div>
          </div>

          <div className="relative min-w-0">
            <DeveloperLaptop />

            <div className="pointer-events-none absolute bottom-4 right-4 z-10 hidden w-[200px] space-y-3 2xl:block">
              {stats.map((stat) => (
                <StatCard
                  key={stat.label}
                  number={stat.number}
                  label={stat.label}
                  icon={stat.icon}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3 2xl:hidden">
          {stats.map((stat) => (
            <StatCard
              key={stat.label}
              number={stat.number}
              label={stat.label}
              icon={stat.icon}
            />
          ))}
        </div>
      </section>

      <section className="container-page homepage-container pb-8">
        <div className="card rounded-3xl px-6 py-7 md:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr_0.9fr_0.9fr]">
            <div>
              <p className="text-[13px] font-medium text-violet-400">
                About Me
              </p>

              <h2 className="mt-2 text-[24px] font-bold leading-tight text-white">
                Building AI-Powered Solutions
                <br />
                That Make an Impact
              </h2>

              <p className="mt-3 max-w-[400px] text-[13px] leading-6 text-gray-500">
                I&apos;m an AI Full Stack Software Engineer with 7 years
                of experience designing and developing modern web and
                AI applications. I turn complex ideas into scalable
                products through clean architecture, intuitive UX, and
                reliable engineering.
              </p>
            </div>

            <FeatureCard
              title="Problem Solver"
              description="I enjoy tackling complex engineering challenges with practical and scalable solutions."
              icon={
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                >
                  <circle cx="12" cy="12" r="8" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              }
            />

            <FeatureCard
              title="Continuous Learner"
              description="Always exploring Generative AI, emerging technologies, and better engineering approaches."
              icon={
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                >
                  <path d="M12 3 4 7l8 4 8-4-8-4Z" />
                  <path d="m4 12 8 4 8-4" />
                  <path d="m4 17 8 4 8-4" />
                </svg>
              }
            />

            <FeatureCard
              title="User Focused"
              description="I build products that are intuitive for users and valuable for the businesses behind them."
              icon={
                <svg
                  width="16"
                  height="16"
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
          </div>
        </div>
      </section>
    </div>
  );
}
