"use client"

import { Menu, MessageCircle, X, Zap } from "lucide-react";
import { useState } from "react";
import { BRAND, NAV_LINKS, waLink } from "../config/site-config";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-22 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#inicio" className="flex items-center gap-2 font-semibold tracking-tight">
          <Image src="/imgs/logo.webp" width={64} height={64} alt="Logo" className="w-auto h-16 drop-shadow-[0_0px_8px_rgba(150,242,255,0.25)]" priority></Image>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-zinc-400 transition-colors hover:text-zinc-50">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={waLink("Hola, quiero cotizar un proyecto web.")}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-sm font-medium text-zinc-950 transition hover:bg-emerald-400 md:inline-flex"
        >
          <MessageCircle className="h-4 w-4" />
          Cotizar
        </a>

        <button
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg border border-white/10 p-2 text-zinc-300 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-zinc-950/95 px-4 pb-4 md:hidden">
          <ul className="flex flex-col py-2">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-zinc-300 hover:bg-white/5"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={waLink("Hola, quiero cotizar un proyecto web.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-3 font-medium text-zinc-950"
          >
            <MessageCircle className="h-4 w-4" />
            Cotizar por WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}