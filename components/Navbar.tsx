"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Download,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#050816]/90 backdrop-blur-xl">
      <div className="container-page flex h-[70px] items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setMobileOpen(false)}
        >
          <span className="text-2xl font-black text-violet-500">
            L
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => {
            const active =
              pathname === link.href ||
              (link.href !== "/" &&
                pathname.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-2 text-[11px] transition ${
                  active
                    ? "text-violet-400"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.name}

                {active && (
                  <span className="absolute bottom-0 left-0 right-0 mx-auto h-px bg-violet-500" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/LucasDoyleResume.pdf"
            download
            className="hidden items-center gap-2 rounded-lg bg-violet-600 px-4 py-2 text-[11px] font-semibold text-white transition hover:bg-violet-500 sm:flex"
          >
            <Download size={13} />
            Download CV
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-gray-300 lg:hidden"
          >
            {mobileOpen ? (
              <X size={18} />
            ) : (
              <Menu size={18} />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/[0.06] bg-[#050816] px-5 py-5 lg:hidden">
          <div className="container-page flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-gray-300"
              >
                {link.name}
              </Link>
            ))}

            <a
              href="/LucasDoyleResume.pdf"
              download
              className="mt-2 flex w-fit items-center gap-2 rounded-lg bg-violet-600 px-4 py-2 text-xs font-semibold"
            >
              <Download size={13} />
              Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
}