import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { site, siteUrl } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: site.role,
    template: `%s | ${site.role}`,
  },
  description: site.description,
  authors: [{ name: "Lucas Doyle", url: site.githubUrl }],
  creator: "Lucas Doyle",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: siteUrl,
    siteName: site.role,
    title: site.role,
    description: site.description,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: site.role,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.role,
    description: site.description,
    images: ["/og.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Navbar />
        <CustomCursor />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
