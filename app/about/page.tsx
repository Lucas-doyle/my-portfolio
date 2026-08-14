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
      <p className="text-[28px] font-bold text-violet-500">
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
    <main className="min-h-screen bg-[#050811] text-white">

      {/* =====================================================
          NAVBAR
          ===================================================== */}

      <header className="border-b border-white/[0.06]">
        <div className="mx-auto flex h-[58px] max-w-[1180px] items-center justify-between px-6">

          {/* Logo */}

          <Link
            href="/"
            className="flex items-center gap-2"
          >
            <span className="text-[22px] font-bold leading-none text-violet-500">
              Λ
            </span>

            <span className="text-[10px] font-semibold tracking-wide text-white">
              Lucas Doyle
            </span>
          </Link>

          {/* Navigation */}

          <nav className="hidden items-center gap-7 md:flex">

            <Link
              href="/"
              className="text-[9px] text-gray-400 transition hover:text-white"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="border-b border-violet-500 pb-1 text-[9px] font-medium text-violet-400"
            >
              About
            </Link>

            <Link
              href="/skills"
              className="text-[9px] text-gray-400 transition hover:text-white"
            >
              Skills
            </Link>

            <Link
              href="/projects"
              className="text-[9px] text-gray-400 transition hover:text-white"
            >
              Projects
            </Link>

            <Link
              href="/experience"
              className="text-[9px] text-gray-400 transition hover:text-white"
            >
              Experience
            </Link>

            <Link
              href="/contact"
              className="text-[9px] text-gray-400 transition hover:text-white"
            >
              Contact
            </Link>

          </nav>

          {/* Right side */}

          <div className="flex items-center gap-3">

            <div className="hidden items-center gap-1.5 text-[8px] text-gray-500 sm:flex">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              Available
            </div>

            <a
              href="/Lucas-Doyle-Resume.pdf"
              download
              className="rounded-md bg-violet-600 px-3 py-1.5 text-[8px] font-semibold text-white shadow-lg shadow-violet-900/20 transition hover:bg-violet-500"
            >
              ↓ Download CV
            </a>

          </div>
        </div>
      </header>


      {/* =====================================================
          ABOUT HERO
          ===================================================== */}

      <section className="mx-auto max-w-[1180px] px-6 pb-8 pt-10">

        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr]">


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

            <div className="relative mx-auto max-w-[530px]  overflow-hidden rounded-xl border border-white/[0.08] bg-[#090e1b]">

              <Image
                src="/images/about-developer.png"
                alt="Lucas Doyle - AI Full Stack Software Engineer"
                width={900}
                height={900}
                priority
                className="h-[420px] w-full object-cover"
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

      <section className="mx-auto max-w-[1180px] px-6 pb-10">

        <div className="grid grid-cols-2 rounded-xl border border-white/[0.06] bg-[#090e1b] px-6 py-6 md:grid-cols-4">

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

      <section className="mx-auto max-w-[1180px] px-6 pb-12">

        <div className="grid gap-5 md:grid-cols-2">


          {/* Education */}

          <div className="rounded-xl border border-white/[0.06] bg-[#090e1b] p-6">

            <p className="text-[10px] font-medium text-violet-400">
              Education
            </p>

            <h2 className="mt-2 text-[18px] font-bold text-white">
              Computer Science
            </h2>

            <p className="mt-1 text-[11px] text-gray-400">
              BSc in Computer Science
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

          <div className="rounded-xl border border-white/[0.06] bg-[#090e1b] p-6">

            <p className="text-[10px] font-medium text-violet-400">
              Current Role
            </p>

            <h2 className="mt-2 text-[18px] font-bold text-white">
              AI Full Stack Software Engineer
            </h2>

            <p className="mt-1 text-[11px] text-gray-400">
              Tines · Dublin, Ireland
            </p>

            <p className="mt-4 text-[10px] leading-5 text-gray-500">
              Building production AI applications, RAG systems,
              multi-agent workflows, scalable APIs, and AI-powered
              user experiences serving thousands of users.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
          ===================================================== */}

      <footer className="mx-auto max-w-[1180px] px-6 pb-5">

        <div className="flex items-center justify-between border-t border-white/[0.04] pt-4">

          <p className="text-[8px] text-gray-600">
            © {new Date().getFullYear()} Lucas Doyle
          </p>

          <p className="text-[8px] text-gray-600">
            AI · Full Stack · Software Engineering
          </p>

        </div>

      </footer>

    </main>
  );
}
