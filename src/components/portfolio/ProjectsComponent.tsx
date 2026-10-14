"use client"

import { useState } from "react";
import { CATEGORIES, PORTFOLIO_URL, PROJECTS } from "../../config/site-config";
import SectionHeading from "../SectionHeadingComponent";
import ProjectCard from "./ProjectCardComponent";
import { ArrowRight } from "lucide-react";

export default function Portfolio() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("Todos");
 
  const visible =
    active === "Todos" ? PROJECTS : PROJECTS.filter((p) => p.category === active);
 
  return (
    <section id="trabajos" className="scroll-mt-20 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Nuestros trabajos"
          title="Proyectos reales, resultados reales"
          subtitle="Una muestra de lo que construimos para negocios como el tuyo."
        />
 
        {/* Filtros */}
        <div
          role="tablist"
          aria-label="Filtrar proyectos por categoría"
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
          {CATEGORIES.map((c) => {
            const selected = c === active;
            return (
              <button
                key={c}
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(c)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  selected
                    ? "border-transparent bg-gradient-to-r from-violet-500 to-cyan-400 text-zinc-950"
                    : "border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>
 
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
 
        {/* <div className="mt-12 text-center">
          <a
            href={PORTFOLIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
          >
            Ver todos los proyectos
            <ArrowRight className="h-4 w-4" />
          </a>
        </div> */}
      </div>
    </section>
  );
}