"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
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
          <svg viewBox="0 0 100 100" className="h-10 w-10">
            <defs>
              <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor:"#8B5CF6",stopOpacity:1}} />
                <stop offset="100%" style={{stopColor:"#10B981",stopOpacity:1}} />
              </linearGradient>
            </defs>
            <path d="M50,5 L90,20 L90,60 C90,80 70,95 50,95 C30,95 10,80 10,60 L10,20 Z" fill="url(#shieldGrad)" />
            <path d="M50,15 L80,28 L80,60 C80,75 65,88 50,88 C35,88 20,75 20,60 L20,28 Z" fill="rgba(255,255,255,0.2)" />
            <circle cx="50" cy="50" r="15" fill="#F59E0B" />
            <path d="M50,40 L55,48 L63,48 L57,54 L59,62 L50,57 L41,62 L43,54 L37,48 L45,48 Z" fill="white" />
          </svg>
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
          </div>
        </div>
      )}
    </header>
  );
}