"use client";

import Link from "next/link";
import Image from "next/image";
import { BriefcaseBusiness, Mail } from "lucide-react";
import { useState, useEffect } from "react";

function TypingEffect() {
  const phrases = [
    "AI Full Stack Developer",
    "Senior Software Engineer",
    "Creating AI-Powered Solutions",
    "Cloud-Native Applications"
  ];
  
  const [currentPhrase, setCurrentPhrase] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentFullPhrase = phrases[phraseIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentPhrase.length < currentFullPhrase.length) {
          setCurrentPhrase(currentFullPhrase.substring(0, currentPhrase.length + 1));
          setTypingSpeed(150);
        } else {
          setIsDeleting(true);
          setTypingSpeed(2000); // Pause before deleting
        }
      } else {
        if (currentPhrase.length > 0) {
          setCurrentPhrase(currentPhrase.substring(0, currentPhrase.length - 1));
          setTypingSpeed(75);
        } else {
          setIsDeleting(false);
          setPhraseIndex((phraseIndex + 1) % phrases.length);
          setTypingSpeed(500); // Pause before typing next phrase
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentPhrase, isDeleting, phraseIndex, phrases, typingSpeed]);

  return (
    <h1 className="mt-1 h-[100px] md:h-[120px] text-[48px] font-bold leading-[1.05] tracking-tight md:text-[65px] text-white">
      {currentPhrase}
    </h1>
  );
}

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

/* =========================================================
   Laptop / Developer Illustration
   ========================================================= */

function DeveloperLaptop() {
  return (
    <div className="relative mx-auto h-[550px] w-full max-w-[670px]">
      {/* Glow effect background */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-600/20 via-purple-500/10 to-transparent blur-3xl" />
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-violet-900/10 to-transparent" />
      
      {/* Image with subtle border and shadow */}
      <div className="relative h-full w-full rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm shadow-2xl shadow-violet-500/10">
        <Image
          src="/images/laptop-dev.png"
          alt="Developer laptop setup with code, plant, and coffee"
          fill
          className="object-contain"
          priority
        />
      </div>
      
      {/* Floating particles effect */}
      <div className="absolute -right-4 top-10 h-2 w-2 rounded-full bg-violet-400/60 blur-[2px] animate-pulse" />
      <div className="absolute -left-2 bottom-20 h-3 w-3 rounded-full bg-purple-400/50 blur-[3px] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute right-10 bottom-10 h-2 w-2 rounded-full bg-violet-300/70 blur-[2px] animate-pulse" style={{ animationDelay: '2s' }} />
    </div>
  );
}

/* =========================================================
   Statistic Card
   ========================================================= */

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
    <div className="flex h-[104px] items-center gap-4 rounded-2xl border border-white/[0.08] bg-[#0c1220] px-6">
      <SmallIcon>{icon}</SmallIcon>

      <div>
        <p className="text-xl font-bold text-white">{number}</p>
        <p className="text-[10px] text-gray-400">{label}</p>
      </div>
    </div>
  );
}

/* =========================================================
   Feature Card
   ========================================================= */

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
        <div className="absolute -left-4 top-7 h-40 border-l border-white/1 bg-violet-500/60" />
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-500/40 bg-violet-500/5 text-violet-400 mt-7">
          {icon}
        </div>
      </div>

      <h3 className="mt-4 text-[14px] font-semibold text-white">
        {title}
      </h3>

      <p className="mt-2 text-[12px] leading-5 text-gray-400">
        {description}
      </p>
    </div>
  );
}

/* =========================================================
   HOME PAGE
   ========================================================= */

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050811] text-white">
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="border-b border-white/[0.06]">
        <div className="mx-auto flex h-[58px] max-w-[1180px] items-center justify-between px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-[22px] font-bold leading-none text-violet-500">
              Λ
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden items-center gap-7 md:flex">
            <Link
              href="/"
              className="border-b border-violet-500 pb-1 text-[9px] font-medium text-violet-400"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-[9px] text-gray-400 transition hover:text-white"
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

          {/* Right controls */}
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-1.5 text-[8px] text-gray-500 sm:flex">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              Available
            </div>
          </div>
        </div>
      </header>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="mx-auto max-w-[1280px] px-8 pb-10 pt-12">
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_1fr]">
          {/* LEFT SIDE */}
          <div className="relative z-10">
            <TypingEffect />

            <p className="mt-15 max-w-[600px] text-[14px] leading-8 text-gray-400 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              I build scalable SaaS platforms, cloud-native applications,
              and AI-powered products that solve real-world problems and
              deliver measurable business impact.
            </p>

            <p className="mt-4 text-[15px] text-gray-400 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <span className="text-gray-300 hover:text-violet-400 transition-colors cursor-default">Python</span>
              <span className="mx-2 text-violet-500">·</span>
              <span className="text-gray-300 hover:text-violet-400 transition-colors cursor-default">TypeScript</span>
              <span className="mx-2 text-violet-500">·</span>
              <span className="text-gray-300 hover:text-violet-400 transition-colors cursor-default">React</span>
              <span className="mx-2 text-violet-500">·</span>
              <span className="text-gray-300 hover:text-violet-400 transition-colors cursor-default">Next.js</span>
              <span className="mx-2 text-violet-500">·</span>
              <span className="text-gray-300 hover:text-violet-400 transition-colors cursor-default">Node.js</span>
              <span className="mx-2 text-violet-500">·</span>
              <span className="text-gray-300 hover:text-violet-400 transition-colors cursor-default">AI</span>
              <span className="mx-2 text-violet-500">·</span>
              <span className="text-gray-300 hover:text-violet-400 transition-colors cursor-default">AWS</span>
            </p>

            {/* Buttons */}
            <div className="mt-7 flex gap-3">
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

          {/* RIGHT SIDE */}
          <div className="relative">
            <DeveloperLaptop />

            {/* Statistics */}
            <div className="absolute right-[-10px] top-[52%] hidden w-[220px] -translate-y-1/2 space-y-5 xl:block">
              <StatCard
                number="7+"
                label="Years Experience"
                icon={
                  <svg
                    width="16"
                    height="16"
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

              <StatCard
                number="20+"
                label="Projects Delivered"
                icon={
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
                }
              />

              <StatCard
                number="10K+"
                label="Monthly Users"
                icon={
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
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ABOUT PREVIEW
      ===================================================== */}

      <section className="mx-auto max-w-[1280px] px-6 pb-8">
        <div className="rounded-xl border border-white/[0.06] bg-[#090e1b] px-5 py-5 md:px-6">
          <div className="grid gap-3 lg:grid-cols-[1.4fr_0.9fr_0.9fr_0.9fr]">
            {/* About text */}
            <div>
              <p className="text-[12px] font-medium text-violet-400">
                About Me
              </p>

              <h2 className="mt-2 text-[22px] font-bold leading-tight text-white">
                Building AI-Powered Solutions
                <br />
                That Make an Impact
              </h2>

              <p className="mt-3 max-w-[380px] text-[12px] leading-6 text-gray-500">
                I&apos;m an AI Full Stack Software Engineer with 7 years
                of experience designing and developing modern web and
                AI applications. I turn complex ideas into scalable
                products through clean architecture, intuitive UX, and
                reliable engineering.
              </p>
            </div>

            {/* Problem Solver */}
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

            {/* Continuous Learner */}
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

            {/* User Focused */}
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

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="mx-auto max-w-[1180px] px-6 pb-5 pt-2">
        <div className="flex items-center justify-between border-t border-white/[0.04] pt-4">
          <p className="text-[8px] text-gray-600">
            © {new Date().getFullYear()}
          </p>

          <p className="text-[8px] text-gray-600">
            AI · Full Stack · Software Engineering
          </p>
        </div>
      </footer>
    </main>
  );
}