import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { waLink } from "../config/site-config";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden px-4 pb-24 pt-36 sm:px-6 sm:pt-44">
      {/* Glow de fondo */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="absolute right-0 top-40 h-[320px] w-[420px] rounded-full bg-cyan-500/10 blur-[110px]" />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-zinc-300 backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
          Estudio de desarrollo web en Colombia
        </span>

        <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-zinc-50 sm:text-6xl lg:text-7xl">
          Transformamos ideas en{" "}
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
            software que vende
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
          Desarrollamos sitios web, tiendas e-commerce y sistemas a medida: rápidos, modernos y pensados
          para convertir visitantes en clientes.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={waLink("Hola, quiero cotizar un proyecto web.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 py-3.5 text-base font-semibold text-zinc-950 shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-400 sm:w-auto"
          >
            <MessageCircle className="h-5 w-5" />
            Cotizar por WhatsApp
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#servicios"
            className="inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-base font-medium text-zinc-200 backdrop-blur transition hover:bg-white/10 sm:w-auto"
          >
            Ver servicios y precios
          </a>
        </div>

        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/10 pt-8">
          {[
            ["< 2s", "Tiempo de carga"],
            ["100%", "Código a medida"],
            ["24/7", "Atención directa"],
          ].map(([value, label]) => (
            <div key={label}>
              <dt className="text-2xl font-bold text-zinc-50 sm:text-3xl">{value}</dt>
              <dd className="mt-1 text-xs text-zinc-500 sm:text-sm">{label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
