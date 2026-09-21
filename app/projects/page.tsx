"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import Link from "next/link";
import { ArrowRight, ChevronUp } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { projects, projectFilters } from "@/data/projects";

const FILTER_KEY = "projectsSelectedFilter";
const SHOW_ALL_KEY = "projectsShowAll";
const SCROLL_KEY = "projectsScrollPosition";
const SLUG_KEY = "projectsScrollSlug";

const listStateListeners = new Set<() => void>();

function subscribeListState(onStoreChange: () => void) {
  listStateListeners.add(onStoreChange);
  return () => {
    listStateListeners.delete(onStoreChange);
  };
}

function persistListState(filter: string, showAll: boolean) {
  sessionStorage.setItem(FILTER_KEY, filter);
  sessionStorage.setItem(SHOW_ALL_KEY, String(showAll));
  listStateListeners.forEach((listener) => listener());
}

function getStoredFilter() {
  return sessionStorage.getItem(FILTER_KEY) ?? "all";
}

function getStoredShowAll() {
  return sessionStorage.getItem(SHOW_ALL_KEY) === "true";
}

function clearScrollRestore() {
  sessionStorage.removeItem(SCROLL_KEY);
  sessionStorage.removeItem(SLUG_KEY);
}

function restoreProjectsViewport() {
  const slug = sessionStorage.getItem(SLUG_KEY);
  const savedPosition = sessionStorage.getItem(SCROLL_KEY);
  const target = slug
    ? document.getElementById(`project-${slug}`)
    : null;

  const html = document.documentElement;
  const body = document.body;
  html.style.scrollBehavior = "auto";
  body.style.scrollBehavior = "auto";

  if (target) {
    target.scrollIntoView({ block: "center", behavior: "auto" });
  } else if (savedPosition) {
    const scrollY = parseInt(savedPosition, 10);
    if (!Number.isNaN(scrollY)) {
      window.scrollTo({ top: scrollY, behavior: "auto" });
    }
  }

  html.style.scrollBehavior = "";
  body.style.scrollBehavior = "";

  return Boolean(target) || savedPosition !== null;
}

export default function ProjectsPage() {
  const selectedFilter = useSyncExternalStore(
    subscribeListState,
    getStoredFilter,
    () => "all",
  );
  const showAllProjects = useSyncExternalStore(
    subscribeListState,
    getStoredShowAll,
    () => false,
  );
  const [showScrollTop, setShowScrollTop] = useState(false);

  const filteredProjects = selectedFilter === "all"
    ? projects
    : projects.filter((project) => project.filter === selectedFilter);

  const displayedProjects = showAllProjects ? filteredProjects : filteredProjects.slice(0, 12);

  const handleProjectClick = (slug: string) => {
    sessionStorage.setItem(SCROLL_KEY, window.scrollY.toString());
    sessionStorage.setItem(SLUG_KEY, slug);
    persistListState(selectedFilter, showAllProjects);
  };

  // Restore list position after Next.js resets scroll on navigation.
  useEffect(() => {
    const hasRestore =
      sessionStorage.getItem(SCROLL_KEY) !== null ||
      sessionStorage.getItem(SLUG_KEY) !== null;

    if (!hasRestore) {
      return;
    }

    if (
      getStoredFilter() !== selectedFilter ||
      getStoredShowAll() !== showAllProjects
    ) {
      return;
    }

    const previousRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    let cancelled = false;
    let attempts = 0;
    let retryTimer = 0;

    const tryRestore = () => {
      if (cancelled) {
        return;
      }

      const slug = sessionStorage.getItem(SLUG_KEY);
      const targetReady = !slug || Boolean(document.getElementById(`project-${slug}`));

      if (targetReady && restoreProjectsViewport()) {
        clearScrollRestore();
        return;
      }

      attempts += 1;
      if (attempts < 30) {
        retryTimer = window.setTimeout(tryRestore, 50);
        return;
      }

      restoreProjectsViewport();
      clearScrollRestore();
    };

    const frame = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(tryRestore);
    });

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frame);
      window.clearTimeout(retryTimer);
      window.history.scrollRestoration = previousRestoration;
    };
  }, [showAllProjects, selectedFilter]);

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
          Things I&apos;ve built with passion and purpose, ranging from
          Generative AI systems to scalable SaaS platforms and
          full-stack applications.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {projectFilters.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                persistListState(category.id, showAllProjects);
              }}
              className={`rounded-lg px-4 py-2 text-[10px] transition ${
                selectedFilter === category.id
                  ? "bg-violet-600 text-white"
                  : "border border-white/10 text-gray-500 hover:text-white hover:border-white/20"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {displayedProjects.map((project) => (
            <Link
              id={`project-${project.slug}`}
              key={project.slug}
              href={`/projects/${project.slug}`}
              onClick={() => handleProjectClick(project.slug)}
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

        {/* VIEW ALL / SHOW LESS */}
        {filteredProjects.length > 12 && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => {
                persistListState(selectedFilter, !showAllProjects);
              }}
              className="flex items-center gap-2 rounded-lg border border-violet-500/30 bg-violet-500/5 px-5 py-3 text-xs font-semibold text-violet-300 transition hover:bg-violet-500/10"
            >
              {showAllProjects ? "Show Less" : "View All Projects"}
              <ArrowRight size={14} className={showAllProjects ? "rotate-180" : ""} />
            </button>
          </div>
        )}
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 flex h-12 w-12 items-center justify-center rounded-xl border border-violet-500/30 bg-violet-600/10 text-violet-400 shadow-lg shadow-violet-600/20 backdrop-blur-sm transition-all duration-300 hover:bg-violet-600 hover:text-white hover:shadow-violet-600/40 hover:-translate-y-1"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} />
        </button>
      )}
    </section>
  );
}