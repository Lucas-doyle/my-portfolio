import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <section className="page">
      <div className="container-page py-16">
        <p className="section-eyebrow">
          Selected Work
        </p>

        <h1 className="section-heading mt-2">
          My Projects
        </h1>

        <p className="section-description">
          Things I&apos; ve built with passion and purpose, ranging from
          Generative AI systems to scalable SaaS platforms and
          full-stack applications.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {[
            "All",
            "AI",
            "Web Apps",
            "Full Stack",
            "Tools",
          ].map((item, index) => (
            <button
              key={item}
              className={`rounded-lg px-4 py-2 text-[10px] ${
                index === 0
                  ? "bg-violet-600 text-white"
                  : "border border-white/10 text-gray-500 hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}
        </div>

        {/* VIEW ALL */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/projects"
            className="flex items-center gap-2 rounded-lg border border-violet-500/30 bg-violet-500/5 px-5 py-3 text-xs font-semibold text-violet-300 transition hover:bg-violet-500/10"
          >
            View All Projects
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}