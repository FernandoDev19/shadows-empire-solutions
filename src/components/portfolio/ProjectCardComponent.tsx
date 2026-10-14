"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Images,
  MessageCircle,
  X,
} from "lucide-react";
import { Project } from "@/src/types/project.type";
import { CATEGORY_STYLES, waLink } from "@/src/config/site-config";

/* -------------------------------------------------------------------------- */
/*  Modal de capturas                                                         */
/* -------------------------------------------------------------------------- */

function ScreenshotModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(0);
  const [failed, setFailed] = useState<Record<number, boolean>>({});
  const total = project.screenshots.length;

  const prev = useCallback(
    () => setIndex((i) => (i - 1 + total) % total),
    [total],
  );
  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, prev, next]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Capturas de ${project.name}`}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-zinc-950/85 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4">
          <div className="min-w-0">
            <h3 className="truncate text-lg font-semibold text-zinc-50">
              {project.name}
            </h3>
            <p className="text-xs text-zinc-500">
              Captura {index + 1} de {total}
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar"
            className="rounded-lg border border-white/10 p-2 text-zinc-300 transition hover:bg-white/10"
          >
            <X className="h-4 w-4" />
          </button>
        </header>

        <div className="relative aspect-video bg-zinc-950">
          {failed[index] ? (
            <div className="grid h-full place-items-center px-6 text-center text-sm text-zinc-500">
              Captura no disponible todavía. Guarda la imagen en{" "}
              <code className="mx-1 rounded bg-white/5 px-1.5 py-0.5 text-zinc-300">
                public{project.screenshots[index]}
              </code>
            </div>
          ) : (
           <Image
              key={project.screenshots[index]}
              src={project.screenshots[index]}
              alt={`${project.name} captura ${index + 1}`}
              fill
              sizes="(min-width: 1024px) 896px, 100vw"
              className="object-contain"
              // La primera carga de una vez si está visible, las demás esperan
              priority={index === 0} 
              loading={index === 0 ? "eager" : "lazy"}
              onError={() => setFailed((f) => ({ ...f, [index]: true }))}
            />
          )}

          {total > 1 && (
            <>
              <button
                onClick={prev}
                aria-label="Captura anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-zinc-950/70 p-2 text-zinc-100 backdrop-blur transition hover:bg-zinc-950"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                aria-label="Captura siguiente"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-zinc-950/70 p-2 text-zinc-100 backdrop-blur transition hover:bg-zinc-950"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </div>

        {total > 1 && (
          <div className="flex justify-center gap-2 border-t border-white/10 px-5 py-4">
            {project.screenshots.map((src: string, i: number) => (
              <button
                key={src}
                onClick={() => setIndex(i)}
                aria-label={`Ir a la captura ${i + 1}`}
                aria-current={i === index}
                className={`h-2 rounded-full transition-all ${
                  i === index
                    ? "w-6 bg-cyan-300"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Tarjeta                                                                   */
/* -------------------------------------------------------------------------- */

const actionClasses =
  "mt-6 inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-zinc-100 transition hover:bg-white/10";

export default function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      <article className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/20">
        {/* Cabecera visual */}
        <div
          className={`relative h-36 bg-linear-to-br ${project.gradient}`}
        >
          {project.screenshots.length > 0 ? (
            <Image
              key={project.slug}
              src={project.screenshots[0]}
              alt={project.name}
              fill
              sizes="(min-width: 1024px) 896px, 100vw"
              className="object-cover"
               style={{ filter: "brightness(0.7) blur(2px)" }}
              priority={false}
              fetchPriority='low'
              loading='lazy'
            />
          ) : (
            <div
              aria-hidden
              className="absolute inset-0 opacity-30 bg-[linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] bg-size-[24px_24px]"
            />
          )}
          <span
            className={`absolute left-4 top-4 rounded-full border px-3 py-1 text-xs font-medium backdrop-blur ${CATEGORY_STYLES[project.category]}`}
          >
            {project.category}
          </span>
          <span className="absolute bottom-4 left-4 text-2xl font-bold tracking-tight text-zinc-50">
            {project.name}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <p className="text-sm leading-relaxed text-zinc-400">
            {project.description}
          </p>

          <ul className="mt-4 space-y-2">
            {project.highlights.map((h: string) => (
              <li
                key={h}
                className="flex items-center gap-2 text-sm text-zinc-300"
              >
                <Check className="h-4 w-4 shrink-0 text-emerald-400" />
                {h}
              </li>
            ))}
          </ul>

          <ul className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((t: string) => (
              <li
                key={t}
                className="rounded-md border border-white/10 bg-zinc-900/80 px-2.5 py-1 text-xs font-medium text-zinc-300"
              >
                {t}
              </li>
            ))}
          </ul>

          <div className="flex-1" />

          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={actionClasses}
            >
              Ver Demo
              <ExternalLink className="h-4 w-4" />
            </a>
          ) : (
            <button
              type="button"
              onClick={() => setOpen(true)}
              className={actionClasses}
            >
              Ver Capturas
              <Images className="h-4 w-4" />
            </button>
          )}

          <a
            href={waLink(project.callAction)}
            className={actionClasses}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
            <MessageCircle className="h-4 w-4" />
          </a>
        </div>
      </article>

      {open && <ScreenshotModal project={project} onClose={close} />}
    </>
  );
}
