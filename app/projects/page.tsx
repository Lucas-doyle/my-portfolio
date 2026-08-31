"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ChevronUp } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const filterCategories = [
  { name: "All", filter: "all" },
  { name: "AI & ML", filter: "ai" },
  { name: "Full Stack", filter: "fullstack" },
  { name: "Backend", filter: "backend" },
  { name: "DevOps", filter: "devops" },
];

const getCategoryFilter = (category: string): string => {
  const aiCategories = ["AI / RAG", "AI Agents", "AI / Agents", "AI/SaaS", "AI / Optimization", "AI / Search", "AI / Integration", "AI / LLM", "AI / Document Intelligence"];
  const fullStackCategories = ["Web Apps", "Full Stack", "Frontend / UX", "Full Stack / SaaS", "Full Stack / AI", "Full Stack / Analytics"];
  const backendCategories = ["Backend", "Backend / APIs", "Backend / Integration", "Backend / Microservices", "Backend / Data"];
  const devOpsCategories = ["Cloud / DevOps", "Architecture", "Security / SaaS", "Monitoring / Operations", "Testing / DevOps", "Engineering / Leadership"];

  if (aiCategories.includes(category)) return "ai";
  if (fullStackCategories.includes(category)) return "fullstack";
  if (backendCategories.includes(category)) return "backend";
  if (devOpsCategories.includes(category)) return "devops";
  return "other";
};

export default function ProjectsPage() {
  const [selectedFilter, setSelectedFilter] = useState(() => {
    // Initialize from sessionStorage if available
    if (typeof window !== 'undefined') {
      const savedFilter = sessionStorage.getItem('projectsSelectedFilter');
      return savedFilter || "all";
    }
    return "all";
  });
  const [showScrollTop, setShowScrollTop] = useState(false);
  const isInitialMount = useRef(true);

  const filteredProjects = selectedFilter === "all"
    ? projects
    : projects.filter(project => getCategoryFilter(project.category) === selectedFilter);

  // Save scroll position and filter before navigation
  const handleProjectClick = () => {
    sessionStorage.setItem('projectsScrollPosition', window.scrollY.toString());
    sessionStorage.setItem('projectsSelectedFilter', selectedFilter);
  };

  // Restore scroll position on mount
  useEffect(() => {
    const savedPosition = sessionStorage.getItem('projectsScrollPosition');

    if (savedPosition) {
      window.scrollTo(0, parseInt(savedPosition, 10));
      sessionStorage.removeItem('projectsScrollPosition');
    }

    // Clear the saved filter after initial restoration
    if (isInitialMount.current) {
      isInitialMount.current = false;
      sessionStorage.removeItem('projectsSelectedFilter');
    }
  }, []);

  // Clear saved filter when user manually changes filter
  useEffect(() => {
    if (!isInitialMount.current) {
      sessionStorage.removeItem('projectsSelectedFilter');
    }
  }, [selectedFilter]);

  // Show/hide scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
          {filterCategories.map((category) => (
            <button
              key={category.filter}
              onClick={() => setSelectedFilter(category.filter)}
              className={`rounded-lg px-4 py-2 text-[10px] transition ${
                selectedFilter === category.filter
                  ? "bg-violet-600 text-white"
                  : "border border-white/10 text-gray-500 hover:text-white hover:border-white/20"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              onClick={handleProjectClick}
              className="block"
            >
              <ProjectCard project={project} />
            </Link>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="mt-8 text-center text-gray-500 text-sm">
            No projects found in this category.
          </div>
        )}

        {/* VIEW ALL */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-lg border border-violet-500/30 bg-violet-500/5 px-5 py-3 text-xs font-semibold text-violet-300 transition hover:bg-violet-500/10"
          >
            Back to Home
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 flex h-12 w-12 items-center justify-center rounded-full bg-violet-600 text-white shadow-lg shadow-violet-600/30 transition hover:bg-violet-500 hover:shadow-violet-500/40"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} />
        </button>
      )}
    </section>
  );
}