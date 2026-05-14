"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { Project } from "@/lib/projects";

export default function Header({ projects }: { projects: Project[] }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const activeSlug = pathname.startsWith("/projects/")
    ? pathname.split("/")[2]
    : null;
  const activeProject = projects.find((p) => p.slug === activeSlug);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    function onClick(e: MouseEvent) {
      if (!wrapperRef.current?.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 dark:border-white/10 bg-[var(--background)]/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          Design Projects
        </Link>

        <nav className="flex items-center gap-2">
          <Link
            href="/"
            className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
              pathname === "/"
                ? "bg-black/5 dark:bg-white/10"
                : "hover:bg-black/5 dark:hover:bg-white/10"
            }`}
          >
            Все проекты
          </Link>

          <div ref={wrapperRef} className="relative">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-haspopup="menu"
              aria-expanded={open}
              className="px-3 py-1.5 rounded-md text-sm flex items-center gap-1.5 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            >
              <span>{activeProject ? activeProject.title : "Проекты"}</span>
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                aria-hidden
                className={`transition-transform ${open ? "rotate-180" : ""}`}
              >
                <path
                  d="M1 3l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {open && (
              <div
                role="menu"
                className="absolute right-0 mt-1 min-w-56 rounded-lg border border-black/10 dark:border-white/10 bg-[var(--background)] shadow-lg overflow-hidden"
              >
                {projects.map((p) => {
                  const isActive = p.slug === activeSlug;
                  return (
                    <Link
                      key={p.slug}
                      href={`/projects/${p.slug}`}
                      role="menuitem"
                      className={`block px-3 py-2 text-sm transition-colors ${
                        isActive
                          ? "bg-black/5 dark:bg-white/10 font-medium"
                          : "hover:bg-black/5 dark:hover:bg-white/10"
                      }`}
                    >
                      {p.title}
                    </Link>
                  );
                })}
                {projects.length === 0 && (
                  <div className="px-3 py-2 text-sm opacity-60">
                    Проектов пока нет
                  </div>
                )}
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
