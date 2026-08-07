import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";

export default function ProjectCard({
  project,
}: {
  project: Project;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group card overflow-hidden rounded-xl transition duration-300 hover:-translate-y-1 hover:border-violet-500/30"
    >
      <div className="relative aspect-[1.55] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-transparent to-transparent" />
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-violet-400">
            {project.category}
          </span>

          <ArrowUpRight
            size={15}
            className="text-gray-600 transition group-hover:text-violet-400"
          />
        </div>

        <h3 className="mt-2 text-base font-semibold text-white">
          {project.title}
        </h3>

        <p className="mt-2 line-clamp-2 text-xs leading-5 text-gray-500">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-white/10 bg-white/[0.02] px-2 py-1 text-[9px] text-gray-500"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}