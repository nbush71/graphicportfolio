"use client";

import { useEffect, useRef } from "react";
import type { Project } from "@/data/projects";

export default function Lightbox({ project, onClose }: { project: Project; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const n = project.images.length;
  // Full class names so Tailwind can detect them at build time.
  const cols = n === 1 ? "grid-cols-1" : n === 2 ? "grid-cols-2" : "grid-cols-2 md:grid-cols-4";

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-night/90 p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto bg-surface"
      >
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center bg-ink text-lg text-bg transition hover:bg-accent"
        >
          ✕
        </button>

        <div className={`grid gap-0.5 bg-line ${cols}`}>
          {project.images.map((im) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={im.src}
              src={im.src}
              alt={im.alt}
              className="max-h-[60vh] w-full bg-bg object-contain"
            />
          ))}
        </div>

        <div className="p-6 md:p-9">
          <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
            {[project.year, project.type].filter(Boolean).join(" · ")}
          </p>
          <h2 className="mb-3 font-serif text-2xl font-bold">{project.title}</h2>
          <p className="mb-5 max-w-2xl leading-relaxed text-muted">{project.description}</p>
          {project.tools.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.tools.map((t) => (
                <span key={t} className="border border-line px-2.5 py-1 text-[10px] uppercase tracking-wider text-muted">
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
