"use client"

import { BRAND, NAV_LINKS } from "../config/site-config";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-zinc-500 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {BRAND}. Todos los derechos reservados.
        </p>
        <ul className="flex gap-6">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-zinc-200">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
