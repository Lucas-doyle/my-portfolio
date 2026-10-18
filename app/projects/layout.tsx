import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected case studies in Generative AI, full-stack SaaS, APIs, and cloud-native platforms.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: `Projects | ${site.role}`,
    description:
      "Selected case studies in Generative AI, full-stack SaaS, APIs, and cloud-native platforms.",
    url: "/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
