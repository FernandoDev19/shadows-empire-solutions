import Benefits from "../components/BenefitsComponent";
import FinalCTA from "../components/FinalCTAComponent";
import Hero from "../components/HeroComponent";
import Portfolio from "../components/portfolio/ProjectsComponent";
import Pricing from "../components/pricing/PrincingComponent";
import Team from "../components/TeamComponent";
import FloatingWhatsApp from "../components/ui/FloatingWhatsAppButton";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";

export default function Page() {
  return (
    <div className="min-h-screen scroll-smooth bg-zinc-950 text-zinc-100 antialiased selection:bg-violet-500/30">
      <Navbar />
      <main>
        <Hero />
        <Pricing />
        <Portfolio />
        <Benefits />
        <Team />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}