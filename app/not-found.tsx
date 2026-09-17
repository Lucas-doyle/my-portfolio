import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page">
      <div className="container-page py-24">
        <p className="section-eyebrow">404</p>

        <h1 className="section-heading mt-2">
          Page not found
        </h1>

        <p className="section-description">
          That page does not exist, or the project slug is not in the
          portfolio. Check the URL, or go back to a page that does.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex items-center rounded-lg bg-violet-600 px-5 py-3 text-xs font-semibold text-white transition hover:bg-violet-500"
          >
            Back to Home
          </Link>

          <Link
            href="/projects"
            className="inline-flex items-center rounded-lg border border-white/10 px-5 py-3 text-xs font-semibold text-white transition hover:bg-white/5"
          >
            View Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
