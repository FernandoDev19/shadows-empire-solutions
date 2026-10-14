import { waLink } from "@/src/config/site-config";
import { Plan } from "@/src/types/plan.type";
import { Check, MessageCircle, Sparkles } from "lucide-react";

export default function PricingCard({ plan }: { plan: Plan }) {
  const message = `Hola, me interesa el paquete "${plan.name}". ¿Me das más información?`;

  return (
    <article
      className={`relative flex flex-col rounded-2xl border p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 ${
        plan.recommended
          ? "border-violet-400/50 bg-gradient-to-b from-violet-500/15 to-white/[0.03] shadow-2xl shadow-violet-500/20"
          : "border-white/10 bg-white/[0.04] shadow-xl shadow-black/20 hover:border-white/20"
      }`}
    >
      {plan.recommended && (
        <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-3 py-1 text-xs font-semibold text-zinc-950">
          <Sparkles className="h-3 w-3" />
          Recomendado
        </span>
      )}

      <h3 className="text-lg font-semibold text-zinc-50">{plan.name}</h3>
      <p className="mt-2 min-h-[40px] text-sm text-zinc-400">{plan.description}</p>

      <p className="mt-6 flex items-baseline gap-1.5">
        {plan.prefix && <span className="text-sm text-zinc-400">{plan.prefix}</span>}
        <span className="text-4xl font-bold tracking-tight text-zinc-50">{plan.price}</span>
        <span className="text-sm text-zinc-500">COP</span>
      </p>

      <ul className="mt-6 flex-1 space-y-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-zinc-300">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
            {f}
          </li>
        ))}
      </ul>

      <a
        href={waLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-8 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition ${
          plan.recommended
            ? "bg-gradient-to-r from-violet-500 to-cyan-400 text-zinc-950 hover:opacity-90"
            : "border border-white/10 bg-white/5 text-zinc-100 hover:bg-white/10"
        }`}
      >
        <MessageCircle className="h-4 w-4" />
        Lo quiero
      </a>
    </article>
  );
}