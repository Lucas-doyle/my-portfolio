/** Public origin for canonicals, sitemap, and Open Graph. Override at build time. */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://lucas-doyle.vercel.app"
).replace(/\/$/, "");

export const site = {
  role: "AI Full Stack Software Engineer",
  email: "bruno.silva.94410@gmail.com",
  phone: "+353 86 274 5183",
  location: "Dublin, Ireland",
  githubUrl: "https://github.com/Lucas-doyle",
  availability: "Open for new opportunities",
  yearsExperience: "7+",
  summary:
    "AI Full Stack Software Engineer with 7 years of experience designing, building, and scaling SaaS platforms, cloud-native applications, and AI-powered products.",
  focus:
    "I specialize in Python, TypeScript, React, Next.js, Node.js, Generative AI, Retrieval-Augmented Generation, AI agents, vector databases, and workflow automation.",
  description:
    "Portfolio of an AI Full Stack Software Engineer specializing in Generative AI, Python, TypeScript, React and Next.js.",
} as const;

export const siteStats = [
  { number: "7+", label: "Years Experience" },
  { number: "20+", label: "Projects Delivered" },
  { number: "10K+", label: "Monthly Users" },
  { number: "60%", label: "Workflow Automation" },
] as const;

export const siteLinks = {
  email: `mailto:${site.email}`,
  phone: `tel:${site.phone.replace(/[^\d+]/g, "")}`,
  github: site.githubUrl,
} as const;
