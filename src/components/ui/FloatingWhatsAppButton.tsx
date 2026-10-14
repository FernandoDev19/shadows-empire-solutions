import { waLink } from "@/src/config/site-config";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href={waLink("Hola, quiero cotizar un proyecto web.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-emerald-500 text-zinc-950 shadow-xl shadow-emerald-500/30 transition hover:scale-110 hover:bg-emerald-400 sm:bottom-8 sm:right-8"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500/40" />
      <MessageCircle className="relative h-6 w-6" />
    </a>
  );
}
