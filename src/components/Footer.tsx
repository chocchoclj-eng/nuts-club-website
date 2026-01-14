import { SITE } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-10 md:flex-row md:items-center md:justify-between">
        <div className="text-sm text-zinc-400">
          © {new Date().getFullYear()} {SITE.brand}. All rights reserved.
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm">
          {SITE.email && (
            <a className="text-zinc-300 hover:text-zinc-100" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
          )}
          <a
            className="text-amber-200/90 hover:text-amber-200"
            href={SITE.calendlyUrl}
            target="_blank"
            rel="noreferrer"
          >
            Book a Call
          </a>
        </div>
      </div>
    </footer>
  );
}