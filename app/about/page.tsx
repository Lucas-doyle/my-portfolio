import Link from "next/link";

// function FeatureIcon({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10 text-violet-400">
//       {children}
//     </div>
//   );
// }

// function CodeMonitor() {
//   return (
//     <div className="relative mx-auto w-full max-w-[500px]">
//       {/* Glow */}
//       <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-700/20 blur-[100px]" />

//       <div className="relative">
//         {/* Monitor */}
//         <div className="rounded-2xl border border-white/10 bg-[#0d1221] p-3 shadow-2xl shadow-violet-950/40">
//           {/* Monitor header */}
//           <div className="flex h-9 items-center gap-2 border-b border-white/10 px-3">
//             <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
//             <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
//             <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />

//             <div className="ml-4 flex h-5 flex-1 items-center rounded-md bg-white/[0.03] px-3 text-[8px] text-gray-600">
//               lucasdoyle.dev / about
//             </div>
//           </div>

//           {/* Screen */}
//           <div className="grid min-h-[300px] grid-cols-[42px_1fr] overflow-hidden rounded-b-xl bg-[#080c17]">
//             {/* Line numbers */}
//             <div className="border-r border-white/5 bg-white/[0.015] px-2 py-5 text-right font-mono text-[9px] leading-6 text-gray-600">
//               {Array.from({ length: 12 }, (_, index) => (
//                 <div key={index}>{index + 1}</div>
//               ))}
//             </div>

//             {/* Code */}
//             <div className="overflow-hidden p-5 font-mono text-[10px] leading-6">
//               <div>
//                 <span className="text-purple-400">import</span>{" "}
//                 <span className="text-blue-300">AIEngineer</span>{" "}
//                 <span className="text-purple-400">from</span>{" "}
//                 <span className="text-green-300">
//                   &quot;@lucas/ai&quot;
//                 </span>
//               </div>

//               <div className="mt-3">
//                 <span className="text-purple-400">class</span>{" "}
//                 <span className="text-yellow-300">LucasDoyle</span>{" "}
//                 <span className="text-gray-400">{"{"}</span>
//               </div>

//               <div className="pl-5">
//                 <span className="text-blue-300">experience</span>
//                 <span className="text-gray-500"> = </span>
//                 <span className="text-purple-300">7</span>
//               </div>

//               <div className="pl-5">
//                 <span className="text-blue-300">location</span>
//                 <span className="text-gray-500"> = </span>
//                 <span className="text-green-300">
//                   &quot;Dublin, Ireland&quot;
//                 </span>
//               </div>

//               <div className="pl-5">
//                 <span className="text-blue-300">focus</span>
//                 <span className="text-gray-500"> = [</span>
//               </div>

//               <div className="pl-10 text-green-300">
//                 &quot;Generative AI&quot;,
//               </div>

//               <div className="pl-10 text-green-300">
//                 &quot;RAG&quot;,
//               </div>

//               <div className="pl-10 text-green-300">
//                 &quot;AI Agents&quot;,
//               </div>

//               <div className="pl-10 text-green-300">
//                 &quot;Full Stack&quot;
//               </div>

//               <div className="pl-5 text-gray-300">]</div>

//               <div className="text-gray-400">{"}"}</div>

//               <div className="mt-4">
//                 <span className="text-purple-400">return</span>{" "}
//                 <span className="text-blue-300">
//                   scalableSolutions
//                 </span>
//                 <span className="text-gray-400">();</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Monitor stand */}
//         <div className="mx-auto h-9 w-24 border-x border-violet-500/20 bg-[#101628]" />

//         <div className="mx-auto h-2 w-40 rounded-full bg-white/10" />

//         {/* Floating TypeScript */}
//         <div className="absolute -right-4 top-14 rounded-xl border border-blue-400/20 bg-[#111729]/95 p-3 shadow-xl backdrop-blur">
//           <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-sm font-bold text-blue-400">
//             TS
//           </div>
//         </div>

//         {/* Floating AI */}
//         <div className="absolute -left-4 bottom-16 rounded-xl border border-violet-500/20 bg-[#111729]/95 p-3 shadow-xl backdrop-blur">
//           <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10 text-sm font-bold text-violet-400">
//             AI
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function Statistic({
//   number,
//   label,
// }: {
//   number: string;
//   label: string;
// }) {
//   return (
//     <div>
//       <p className="text-2xl font-bold text-violet-400">{number}</p>
//       <p className="mt-1 text-[10px] text-gray-500">{label}</p>
//     </div>
//   );
// }

// export default function AboutPage() {
//   return (
//     <main className="min-h-screen bg-[#050811] text-white">
//       {/* NAVIGATION */}
//       <header className="border-b border-white/[0.06]">
//         <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-2">
//             <span className="text-xl font-bold text-violet-500">Λ</span>
//             <span className="text-xs font-semibold text-white">
//               Lucas Doyle
//             </span>
//           </Link>

//           {/* Navigation */}
//           <nav className="hidden items-center gap-8 md:flex">
//             <Link
//               href="/"
//               className="py-5 text-[11px] text-gray-400 transition hover:text-white"
//             >
//               Home
//             </Link>

//             <Link
//               href="/about"
//               className="border-b border-violet-500 py-5 text-[11px] font-medium text-violet-400"
//             >
//               About
//             </Link>

//             <Link
//               href="/skills"
//               className="py-5 text-[11px] text-gray-400 transition hover:text-white"
//             >
//               Skills
//             </Link>

//             <Link
//               href="/projects"
//               className="py-5 text-[11px] text-gray-400 transition hover:text-white"
//             >
//               Projects
//             </Link>

//             <Link
//               href="/experience"
//               className="py-5 text-[11px] text-gray-400 transition hover:text-white"
//             >
//               Experience
//             </Link>

//             <Link
//               href="/contact"
//               className="py-5 text-[11px] text-gray-400 transition hover:text-white"
//             >
//               Contact
//             </Link>
//           </nav>

//           {/* Right */}
//           <div className="flex items-center gap-3">
//             <div className="flex items-center gap-2 text-xs text-gray-500">
//               <span className="h-2 w-2 rounded-full bg-green-400" />
//               <span className="hidden sm:inline">Available</span>
//             </div>

//             <a
//               href="/Lucas-Doyle-Resume.pdf"
//               download
//               className="rounded-lg bg-violet-600 px-4 py-2 text-[10px] font-semibold text-white transition hover:bg-violet-500"
//             >
//               ↓ Download CV
//             </a>
//           </div>
//         </div>
//       </header>

//       {/* ABOUT HERO */}
//       <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
//         <div className="grid items-center gap-14 lg:grid-cols-[1fr_1fr]">
//           {/* LEFT - CONTENT */}
//           <div>
//             <p className="text-sm font-medium text-violet-400">
//               About Me
//             </p>

//             <h1 className="mt-4 max-w-xl text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
//               Building AI-powered products
//               <br />
//               and experiences that matter.
//             </h1>

//             <p className="mt-6 max-w-xl text-sm leading-6 text-gray-400">
//               I&apos;m an AI Full Stack Software Engineer with 7 years of
//               experience building scalable SaaS platforms, cloud-native
//               applications, and intelligent products.
//             </p>

//             <p className="mt-4 max-w-xl text-sm leading-6 text-gray-500">
//               I specialize in Generative AI, Large Language Models,
//               Retrieval-Augmented Generation, AI agents, distributed
//               systems, and modern full-stack development.
//             </p>

//             {/* FEATURES */}
//             <div className="mt-8 space-y-5">
//               {/* AI & Full Stack */}
//               <div className="flex gap-4">
//                 <FeatureIcon>
//                   <svg
//                     width="18"
//                     height="18"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="1.7"
//                   >
//                     <path d="M12 2v4" />
//                     <path d="M12 18v4" />
//                     <path d="M4.93 4.93 7.76 7.76" />
//                     <path d="m16.24 16.24 2.83 2.83" />
//                     <path d="M2 12h4" />
//                     <path d="M18 12h4" />
//                     <path d="m4.93 19.07 2.83-2.83" />
//                     <path d="m16.24 7.76 2.83-2.83" />
//                     <circle cx="12" cy="12" r="4" />
//                   </svg>
//                 </FeatureIcon>

//                 <div>
//                   <h3 className="text-xs font-semibold text-white">
//                     AI & Full Stack
//                   </h3>

//                   <p className="mt-1 max-w-md text-[10px] leading-5 text-gray-500">
//                     Building intelligent products from frontend
//                     experiences to AI-powered backend services.
//                   </p>
//                 </div>
//               </div>

//               {/* Scalable systems */}
//               <div className="flex gap-4">
//                 <FeatureIcon>
//                   <svg
//                     width="18"
//                     height="18"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="1.7"
//                   >
//                     <rect x="4" y="4" width="16" height="6" rx="2" />
//                     <rect x="4" y="14" width="16" height="6" rx="2" />
//                     <path d="M8 7h.01" />
//                     <path d="M8 17h.01" />
//                   </svg>
//                 </FeatureIcon>

//                 <div>
//                   <h3 className="text-xs font-semibold text-white">
//                     Scalable Systems
//                   </h3>

//                   <p className="mt-1 max-w-md text-[10px] leading-5 text-gray-500">
//                     Designing reliable APIs, distributed systems,
//                     databases, and cloud-native infrastructure.
//                   </p>
//                 </div>
//               </div>

//               {/* Problem Solver */}
//               <div className="flex gap-4">
//                 <FeatureIcon>
//                   <svg
//                     width="18"
//                     height="18"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="1.7"
//                   >
//                     <circle cx="12" cy="12" r="8" />
//                     <path d="m9 12 2 2 4-4" />
//                   </svg>
//                 </FeatureIcon>

//                 <div>
//                   <h3 className="text-xs font-semibold text-white">
//                     Problem Solver
//                   </h3>

//                   <p className="mt-1 max-w-md text-[10px] leading-5 text-gray-500">
//                     Turning complex engineering problems into simple,
//                     maintainable, and measurable solutions.
//                   </p>
//                 </div>
//               </div>

//               {/* Product Focused */}
//               <div className="flex gap-4">
//                 <FeatureIcon>
//                   <svg
//                     width="18"
//                     height="18"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="1.7"
//                   >
//                     <path d="M12 3 4 7v6c0 4.5 3.4 7 8 8 4.6-1 8-3.5 8-8V7l-8-4Z" />
//                     <path d="m9 12 2 2 4-4" />
//                   </svg>
//                 </FeatureIcon>

//                 <div>
//                   <h3 className="text-xs font-semibold text-white">
//                     Product Focused
//                   </h3>

//                   <p className="mt-1 max-w-md text-[10px] leading-5 text-gray-500">
//                     Combining engineering excellence with business
//                     goals to create products users love.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Button */}
//             <div className="mt-8">
//               <Link
//                 href="/contact"
//                 className="inline-flex rounded-lg bg-violet-600 px-5 py-3 text-xs font-semibold text-white transition hover:bg-violet-500"
//               >
//                 Let&apos;s work together
//               </Link>
//             </div>
//           </div>

//           {/* RIGHT - NEW CODE MONITOR */}
//           <div className="relative py-6 lg:py-0">
//             <CodeMonitor />
//           </div>
//         </div>
//       </section>

//       {/* STATISTICS */}
//       <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-10">
//         <div className="grid grid-cols-2 gap-6 rounded-2xl border border-white/[0.06] bg-[#090e1b] p-6 md:grid-cols-4 md:p-8">
//           <Statistic
//             number="20+"
//             label="Projects Completed"
//           />

//           <Statistic
//             number="10K+"
//             label="Monthly Users"
//           />

//           <Statistic
//             number="7+"
//             label="Years Experience"
//           />

//           <Statistic
//             number="40%"
//             label="Faster AI Responses"
//           />
//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer className="border-t border-white/[0.06]">
//         <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
//           <p className="text-[10px] text-gray-600">
//             © {new Date().getFullYear()} Lucas Doyle. All rights reserved.
//           </p>

//           <p className="text-[10px] text-gray-600">
//             AI · Full Stack · Software Engineering
//           </p>
//         </div>
//       </footer>
//     </main>
//   );
// } import Link from "next/link";
import Image from "next/image";

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
                className="inline-flex rounded-md bg-violet-600 px-5 py-3 text-[10px] font-semibold text-white shadow-lg shadow-violet-900/20 transition hover:bg-violet-500"
              >
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
