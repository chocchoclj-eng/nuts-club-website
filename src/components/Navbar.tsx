"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/content";

const nav = [
  { id: "story", label: "Story" },
  { id: "who", label: "Who We Are" },
  { id: "pain", label: "Pain Points" },
  { id: "solutions", label: "Solutions" },
  { id: "method", label: "Methodology" },
  { id: "matrix", label: "Matrix" },
  { id: "pricing", label: "Pricing" },
  { id: "why", label: "Why Us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 transition",
        scrolled
          ? "border-b border-zinc-800/50 bg-zinc-950/45 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-3">
          <span
            className={[
              "flex h-9 w-9 items-center justify-center rounded-xl text-lg",
              "border border-amber-300/25 bg-amber-300/10 shadow-inner",
              scrolled ? "opacity-100" : "opacity-95",
            ].join(" ")}
          >
            🌰
          </span>
          <span className="font-semibold tracking-wide text-zinc-100">
            Nuts Club
          </span>
        </a>

        {/* Nav */}
        <nav className="hidden gap-6 text-sm text-zinc-200/85 md:flex">
          {nav.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="transition hover:text-zinc-100"
            >
              {n.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="https://calendly.com/choccc/choc-meeting-room"
          target="_blank"
          rel="noreferrer"
          className={[
            "rounded-xl px-4 py-2 text-sm font-medium transition",
            "border border-amber-300/45 text-amber-200",
            scrolled ? "bg-amber-300/12 hover:bg-amber-300/18" : "bg-amber-300/10 hover:bg-amber-300/16",
          ].join(" ")}
        >
          Book a Call
        </a>
      </div>
    </header>
  );
}