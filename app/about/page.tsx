import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";


/* =========================================================
   ICON
   ========================================================= */

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

/* =========================================================
   FEATURE ITEM
   ========================================================= */

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
        <h3 className="text-[13px] font-semibold text-white">
          {title}
        </h3>

        <p className="mt-1 text-[11px] leading-5 text-gray-500">
          {description}
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   STATISTIC
   ========================================================= */

function Stat({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="text-center">
      <p className="text-[30px] font-bold text-violet-500">
        {number}
      </p>

      <p className="mt-1 text-[9px] text-gray-500">
        {label}
      </p>
    </div>
  );
}

/* =========================================================
   ABOUT PAGE
   ========================================================= */

export default function AboutPage() {
  return (
    <main className="page">

      {/* =====================================================
          ABOUT HERO
          ===================================================== */}

      <section className="container-page homepage-container py-12">

        <div className="grid items-center gap-6 lg:grid-cols-[0.85fr_1.15fr]">


          {/* =================================================
              LEFT SIDE
              ================================================= */}

          <div>

            {/* Small heading */}

            <p className="text-[11px] font-medium text-violet-400">
              About Me
            </p>

            {/* Main title */}

            <h1 className="mt-3 max-w-[520px] text-[34px] font-bold leading-[1.15] md:text-[42px]">

              Building products and
              <br />

              <span className="text-violet-500">
                experiences that matter.
              </span>

            </h1>


            {/* Description */}

            <p className="mt-5 max-w-[520px] text-[12px] leading-6 text-gray-400">

              I&apos;m an AI Full Stack Software Engineer with 7 years
              of experience designing, building, and scaling SaaS
              platforms, cloud-native applications, and AI-powered
              products.

            </p>

            <p className="mt-3 max-w-[520px] text-[12px] leading-6 text-gray-500">

              I specialize in Python, TypeScript, React, Next.js,
              Node.js, Generative AI, Retrieval-Augmented Generation,
              AI agents, vector databases, and workflow automation.

            </p>


            {/* =================================================
                FEATURES
                ================================================= */}

            <div className="mt-7 space-y-5">


              {/* Experience */}

              <FeatureItem
                title="7+ Years Experience"
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
                    <rect
                      x="4"
                      y="5"
                      width="16"
                      height="15"
                      rx="2"
                    />

                    <path d="M8 3v4" />

                    <path d="M16 3v4" />

                    <path d="M4 10h16" />
                  </svg>
                }
              />


              {/* AI */}

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
                    <circle
                      cx="12"
                      cy="12"
                      r="3"
                    />

                    <circle
                      cx="12"
                      cy="12"
                      r="8"
                    />

                    <path d="M12 2v3" />

                    <path d="M12 19v3" />

                    <path d="M2 12h3" />

                    <path d="M19 12h3" />
                  </svg>
                }
              />


              {/* Scalable */}

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


              {/* Team */}

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
                    <circle
                      cx="9"
                      cy="8"
                      r="3"
                    />

                    <circle
                      cx="17"
                      cy="9"
                      r="2"
                    />

                    <path d="M3 20a6 6 0 0 1 12 0" />

                    <path d="M14 17a5 5 0 0 1 7 3" />
                  </svg>
                }
              />

            </div>


            {/* =================================================
                BUTTON
                ================================================= */}

            <div className="mt-8">

              <Link
                href="/contact"
                className="inline-flex gap-1 rounded-md bg-violet-600 px-5 py-3 text-[10px] font-semibold text-white shadow-lg shadow-violet-900/20 transition hover:bg-violet-500"
              >
                <Mail size={14} />
                Let&apos;s work together
              </Link>

            </div>

          </div>


          {/* =================================================
              RIGHT SIDE IMAGE
              ================================================= */}

          <div className="relative">

            {/* Purple glow */}

            <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-700/20 blur-[100px]" />


            {/* Image container */}

            <div className="card relative mx-auto max-w-[1100px] overflow-hidden rounded-3xl">

              <Image
                src="/images/about-developer.png"
                alt="AI Full Stack Software Engineer"
                width={1672}
                height={941}
                priority
                className="h-auto w-full object-contain"
              />

              {/* Dark gradient */}

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050811]/50 via-transparent to-transparent" />

            </div>


            {/* Floating AI card */}

            <div className="absolute -left-5 top-10 hidden rounded-lg border border-violet-500/20 bg-[#0c1220]/95 p-3 shadow-xl backdrop-blur-md md:block">

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
                    <circle
                      cx="12"
                      cy="12"
                      r="3"
                    />

                    <circle
                      cx="12"
                      cy="12"
                      r="8"
                    />

                    <path d="M12 2v3" />

                    <path d="M12 19v3" />
                  </svg>

                </div>

                <div>

                  <p className="text-[10px] font-semibold text-white">
                    AI Engineering
                  </p>

                  <p className="mt-1 text-[8px] text-gray-500">
                    RAG · Agents · LLMs
                  </p>

                </div>

              </div>

            </div>


            {/* Floating code card */}

            <div className="absolute -right-4 bottom-10 hidden rounded-lg border border-violet-500/20 bg-[#0c1220]/95 p-3 shadow-xl backdrop-blur-md md:block">

              <div className="font-mono text-[9px]">

                <span className="text-purple-400">
                  &lt;
                </span>

                <span className="text-blue-300">
                  AI
                </span>

                <span className="text-purple-400">
                  /&gt;
                </span>

              </div>

              <p className="mt-1 text-[8px] text-gray-500">
                Python · TypeScript
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          STATISTICS
          ===================================================== */}

      <section className="container-page homepage-container pb-10">

        <div className="card grid grid-cols-2 rounded-3xl px-6 py-7 md:grid-cols-4">

          <Stat
            number="20+"
            label="Projects Completed"
          />

          <Stat
            number="10K+"
            label="Monthly Users"
          />

          <Stat
            number="7+"
            label="Years Experience"
          />

          <Stat
            number="60%"
            label="Workflow Automation"
          />

        </div>

      </section>


      {/* =====================================================
          EDUCATION / CAREER
          ===================================================== */}

      <section className="container-page homepage-container pb-12">

        <div className="grid gap-6 md:grid-cols-2">


          {/* Education */}

          <div className="card rounded-3xl p-6">

            <p className="text-[10px] font-medium text-violet-400">
              Education
            </p>

            <h2 className="mt-2 text-[18px] font-bold text-white">
              Computer Science
            </h2>

            <p className="mt-1 text-[11px] text-gray-400">
              BSc in Computer Science
            </p>

            <p className="mt-4 text-[12px] leading-6 text-gray-500">
              University College Dublin is a leading research university in
              Ireland. During my BSc, I built a strong foundation in software
              engineering, algorithms, and systems design, while learning to
              turn complex problems into practical solutions.
            </p>

            <div className="mt-5 flex justify-between">

              <div>
                <p className="text-[10px] text-gray-500">
                  University
                </p>

                <p className="mt-1 text-[11px] text-white">
                  University College Dublin
                </p>
              </div>

              <div className="text-right">
                <p className="text-[10px] text-gray-500">
                  Period
                </p>

                <p className="mt-1 text-[11px] text-white">
                  2014 — 2018
                </p>
              </div>

            </div>

          </div>


          {/* Current role */}

          <div className="card rounded-3xl p-6">

            <p className="text-[10px] font-medium text-violet-400">
              Current Role
            </p>

            <h2 className="mt-2 text-[18px] font-bold text-white">
              AI Full Stack Software Engineer
            </h2>

            <p className="mt-1 text-[11px] text-gray-400">
              Tines · Dublin, Ireland
            </p>

            <p className="mt-4 max-w-[800px] text-[12px] leading-6 text-gray-500">
              Designing and deploying production AI applications with OpenAI,
              FastAPI, Next.js, and TypeScript for 10,000+ monthly users.
              Building enterprise RAG systems and multi-agent workflows with
              LangChain, LangGraph, OpenAI embeddings, and Pinecone, while
              developing scalable APIs and optimizing AI inference through
              caching, prompt engineering, and response streaming.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}
