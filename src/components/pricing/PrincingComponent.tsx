import { PLANS } from "@/src/config/site-config";
import SectionHeading from "../SectionHeadingComponent";
import PricingCard from "./PricingCardComponent";

export default function Pricing() {
  return (
    <section id="servicios" className="scroll-mt-20 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Servicios y precios"
          title="Paquetes claros, sin sorpresas"
          subtitle="Elige el que mejor se adapta a tu proyecto. Todos los precios están en pesos colombianos (COP)."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}