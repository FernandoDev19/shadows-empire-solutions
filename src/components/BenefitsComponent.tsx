import { BENEFITS } from "../config/site-config";
import SectionHeading from "./SectionHeadingComponent";

export default function Benefits() {
  return (
    <section id="beneficios" className="scroll-mt-20 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="¿Por qué nosotros?"
          title="Hecho para rendir, hecho para vender"
          subtitle="Nos obsesiona que tu sitio sea rápido, único y que realmente te traiga clientes."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition hover:border-cyan-400/30 hover:bg-white/[0.06]"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-400/20 text-cyan-300 ring-1 ring-white/10">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-zinc-50">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
