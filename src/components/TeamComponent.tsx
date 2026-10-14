import Image from "next/image";
import { TEAM } from "../config/site-config";
import SectionHeading from "./SectionHeadingComponent";

export default function Team() {
  return (
    <section id="equipo" className="scroll-mt-20 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Nuestro equipo"
          title="Personas reales detrás de tu proyecto"
          subtitle="Un equipo pequeño y comprometido que trabaja contigo de principio a fin."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {TEAM.map((m) => (
            <article
              key={m.name}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 text-center shadow-xl shadow-black/20 backdrop-blur-xl"
            >
              {m.img ? (
                <Image
                  src={m.img}
                  alt={m.name}
                  width={100}
                  height={100}
                  className="mx-auto h-24 w-24 rounded-full object-cover ring-4 ring-white/10"
                />
              ) : (
                <div
                  className={`mx-auto grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br ${m.gradient} text-3xl font-bold text-zinc-950 ring-4 ring-white/10`}
                >
                  {m.initials}
                </div>
              )}
              <h3 className="mt-5 text-xl font-semibold text-zinc-50">
                {m.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-violet-300">
                {m.role}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                {m.bio}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
