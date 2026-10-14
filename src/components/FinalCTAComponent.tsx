import { MessageCircle } from "lucide-react";
import { waLink } from "../config/site-config";

export default function FinalCTA() {
  return (
    <section id="contacto" className="scroll-mt-20 px-4 py-24 sm:px-6">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-600/20 via-zinc-900 to-cyan-500/10 p-10 text-center backdrop-blur-xl sm:p-16">
        <div aria-hidden className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-violet-500/30 blur-[90px]" />
        <h2 className="relative text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
          ¿Listo para llevar tu idea al siguiente nivel?
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-zinc-400">
          Cuéntanos qué necesitas y te respondemos con una propuesta clara, sin compromiso.
        </p>
        <a
          href={waLink("Hola, quiero hablar sobre mi proyecto.")}
          target="_blank"
          rel="noopener noreferrer"
          className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-4 text-base font-semibold text-zinc-950 shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-400"
        >
          <MessageCircle className="h-5 w-5" />
          Hablar por WhatsApp
        </a>
      </div>
    </section>
  );
}