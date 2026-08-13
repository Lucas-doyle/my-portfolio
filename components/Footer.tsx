import Link from "next/link";
import {
  Link as LinkIcon,
  Mail,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-[#040713]">
      <div className="container-page py-5">
        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-center">
          <div>
            <Link
              href="/"
              className="text-lg font-bold text-white"
            >
              Lucas<span className="text-violet-500">.</span>
            </Link>

            <p className="mt-2 text-xs text-gray-500">
              AI Full Stack Software Engineer
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="mailto:bruno.silva.94410@gmail.com"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition hover:border-violet-500/40 hover:text-violet-400"
            >
              <Mail size={15} />
            </a>

            <a
              href="https://github.com/Lucas-doyle/my-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition hover:border-violet-500/40 hover:text-violet-400"
            >
              <FaGithub size={15} />
            </a>

            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition hover:border-violet-500/40 hover:text-violet-400"
            >
              <LinkIcon size={15} />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-white/6 pt-6 text-center text-[11px] text-gray-600">
          © {new Date().getFullYear()} Lucas Doyle. All rights reserved.
        </div>
      </div>
    </footer>
  );
}