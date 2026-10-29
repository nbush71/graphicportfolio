"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { projects, type Project } from "@/data/projects";
import Lightbox from "./Lightbox";

export default function Work() {
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <section id="work" className="mx-auto max-w-7xl px-6 py-24 md:px-12">
      <div className="mb-14 flex items-baseline gap-5 border-b border-line pb-4">
        <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">Selected Work</span>
        <h2 className="font-serif text-3xl font-bold">Projects</h2>
      </div>

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <li key={p.title}>
            <button
              onClick={() => setSelected(p)}
              className="group flex h-full w-full flex-col overflow-hidden border border-line bg-surface text-left transition hover:-translate-y-0.5 hover:border-accent hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] w-full bg-line/50">
                <Image
                  src={p.images[0].src}
                  alt={p.images[0].alt}
                  fill
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  className="object-contain p-4 transition duration-500 group-hover:scale-[1.03]"
                />
                {p.images.length > 1 && (
                  <span className="absolute bottom-2 right-2 bg-ink/80 px-2 py-0.5 text-[10px] uppercase tracking-wider text-bg">
                    {p.images.length} pages
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="mb-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                  {[p.year, p.type].filter(Boolean).join(" · ")}
                </p>
                <h3 className="mb-2 font-serif text-lg font-bold leading-snug">{p.title}</h3>
                <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-muted">{p.description}</p>
                {p.tools.length > 0 && (
                  <div className="mt-auto flex flex-wrap gap-1.5">
                    {p.tools.map((t) => (
                      <span key={t} className="border border-line px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </button>
          </li>
        ))}
      </ul>

      {selected && <Lightbox project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
