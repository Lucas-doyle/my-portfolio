import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch — ${site.location}. Email ${site.email} or use the contact form.`,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: `Contact | ${site.role}`,
    description: `Get in touch — ${site.location}. Email ${site.email} or use the contact form.`,
    url: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
