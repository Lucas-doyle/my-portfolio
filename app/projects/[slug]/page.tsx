import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Check,
  ExternalLink,
} from "lucide-react";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return (
      <section className="page">
        <div className="container-page py-16">
          <h1 className="text-3xl font-bold text-white">
            Project not found
          </h1>
        </div>
      </section>
    );
  }

  return (
    <section className="page">
      <div className="container-page py-16">
        <Link
          href="/projects"
          className="mb-8 inline-flex items-center gap-2 text-xs text-gray-500 hover:text-white"
        >
          <ArrowLeft size={14} />
          Back to Projects
        </Link>

        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="section-eyebrow">
              {project.category}
            </p>

            <h1 className="mt-3 text-4xl font-bold leading-tight text-white sm:text-5xl">
              {project.title}
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-gray-400">
              {project.longDescription}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-[10px] text-gray-400"
                >
                  {technology}
                </span>
              ))}
            </div>

            <button className="mt-7 flex items-center gap-2 rounded-lg bg-violet-600 px-5 py-3 text-xs font-semibold text-white">
              <ExternalLink size={13} />
              View Demo
            </button>
          </div>

          <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-[#0b1123]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-center"
            />
          </div>
        </div>

        <div className="mt-16 grid gap-12 border-t border-white/[0.07] pt-10 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <h2 className="text-lg font-semibold text-white">
              Project Overview
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-500">
              {project.longDescription}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">
              Key Features
            </h2>

            <div className="mt-5 space-y-3">
              {project.features.map((feature) => (
                <div
                  key={feature}
                  className="flex gap-3 text-xs text-gray-500"
                >
                  <Check
                    size={14}
                    className="mt-0.5 text-violet-400"
                  />

                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/[0.07] pt-10">
          <h2 className="text-lg font-semibold text-white">
            Tech Stack
          </h2>

          <div className="mt-5 flex flex-wrap gap-3">
            {project.technologies.map((technology) => (
              <div
                key={technology}
                className="rounded-lg border border-white/10 bg-[#0b1123] px-4 py-3 text-xs text-gray-400"
              >
                {technology}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
