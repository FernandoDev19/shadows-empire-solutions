import { Code2, Gauge, Headphones, LifeBuoy } from "lucide-react";
import { Plan } from "../types/plan.type";
import { Category } from "../types/category.type";
import { Project } from "../types/project.type";

export const WHATSAPP_NUMBER = "573005025695";
export const BRAND = "Shadow's Empire Solutions";

export const waLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const NAV_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Trabajos", href: "#trabajos" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Equipo", href: "#equipo" },
  { label: "Contacto", href: "#contacto" },
];

export const PLANS: Plan[] = [
  {
    name: "Invitación Digital",
    price: "$120.000",
    description: "Para eventos: rápida, elegante e interactiva.",
    features: [
      "Diseño personalizado",
      "Confirmación de asistencia",
      "Mapa y cuenta regresiva",
      "Lista para compartir por WhatsApp",
    ],
  },
  {
    name: "Portafolio Web",
    price: "$200.000",
    description: "Para profesionales que quieren destacar su marca personal.",
    features: [
      "Diseño moderno y responsive",
      "Galería de proyectos",
      "Sección sobre ti y contacto",
      "Optimizado para SEO básico",
    ],
  },
  {
    name: "Landing Page",
    price: "$300.000",
    description: "Alta conversión, ultra rápida y con diseño único.",
    recommended: true,
    features: [
      "Diseño 100% único, sin plantillas",
      "Estructura enfocada en ventas",
      "Botones directos a WhatsApp",
      "Analítica y SEO incluidos",
      "Carga en menos de 2 segundos",
    ],
  },
  {
    name: "Tienda E-commerce",
    price: "$650.000",
    description: "Catálogo, carrito y pasarela de pago o pedido por WhatsApp.",
    features: [
      "Catálogo de productos ilimitado",
      "Carrito de compras",
      "Pasarela de pago o pedido a WhatsApp",
      "Panel para gestionar productos",
    ],
  },
  {
    name: "Sistema Web a Medida",
    prefix: "Desde",
    price: "$1.000.000",
    description: "Paneles administrativos, bases de datos y lógica compleja.",
    features: [
      "Análisis y arquitectura a tu medida",
      "Panel administrativo y roles",
      "Base de datos e integraciones",
      "Escalable y documentado",
    ],
  },
];

export const BENEFITS = [
  {
    icon: Gauge,
    title: "Carga ultra rápida",
    text: "Optimizamos cada detalle para que tu sitio cargue en segundos y Google lo premie.",
  },
  {
    icon: Code2,
    title: "Código a medida",
    text: "Sin plantillas lentas ni plugins innecesarios. Cada línea se escribe pensando en tu negocio.",
  },
  {
    icon: Headphones,
    title: "Atención directa",
    text: "Hablas directamente con quienes diseñan y programan tu proyecto, sin intermediarios.",
  },
  {
    icon: LifeBuoy,
    title: "Soporte continuo",
    text: "Te acompañamos después de la entrega para resolver dudas, ajustes y mejoras.",
  },
];

export const TEAM = [
  {
    name: "Fernando Cano",
    role: "CTO & Lead Software Engineer",
    initials: "FC",
    bio: "Lidera la arquitectura y el desarrollo de cada proyecto, cuidando el rendimiento, la calidad y la escalabilidad del código.",
    gradient: "from-violet-500 to-cyan-400",
    img: "/imgs/team/fernando.webp",
  },
  {
    name: "Samir",
    role: "Director Comercial & Business Developer",
    initials: "S",
    bio: "Entiende tus objetivos de negocio y los traduce en soluciones digitales claras, con propuestas a la medida de tu presupuesto.",
    gradient: "from-cyan-400 to-emerald-400",
  },
];

export const PORTFOLIO_URL = "https://fernando-dev-19.netlify.app/projects";

export const CATEGORIES: ("Todos" | Category)[] = [
  "Todos",
  "Landing Pages",
  "E-commerce / Ventas",
  "Sistemas a Medida",
  "Invitaciones Digitales",
] as const;

export type ProjectFilter = (typeof CATEGORIES)[number];

const shots = (slug: string, count: number, ext = "png") =>
  Array.from({ length: count }, (_, i) => `/portfolio/${slug}/${i + 1}.${ext}`);

export const PROJECTS: Project[] = [
  {
    slug: "consultorio-psicologico",
    name: "Consultorio Psicológico",
    category: "Landing Pages",
    description:
      "Sitio moderno y cálido para un consultorio psicológico, pensado para generar confianza y facilitar el agendamiento de citas.",
    highlights: ["Diseño moderno y sereno", "Captura de citas"],
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    screenshots: shots("consultorio-psicologico", 7),
    gradient: "from-violet-500/40 to-fuchsia-400/20",
    callAction: "Hola, me gustaría cotizar un sitio como el del consultorio psicológico"
  },
  {
    slug: "agencia-seguros",
    name: "Agencia de Seguros",
    category: "Landing Pages",
    description:
      "Landing de alta conversión que captura leads y los envía automáticamente al CRM para que el equipo comercial les haga seguimiento.",
    highlights: ["Integración con CRM Kommo", "Captura de leads"],
    tech: ["Next.js", "Tailwind CSS", "Kommo API"],
    gradient: "from-cyan-400/40 to-violet-500/20",
    screenshots: shots("agencia-seguros", 4),
    callAction: "Hola, me gustaría cotizar una landing con un CRM como la de la agencia de seguros"
  },
  {
    slug: "rentcheck",
    name: "RentCheck B2B",
    category: "Sistemas a Medida",
    description:
      "Plataforma full-stack para gestionar alquileres y propiedades: contratos, inquilinos y seguimiento en un panel centralizado.",
    highlights: ["Gestión de propiedades", "Control de alquileres"],
    tech: ["Angular", "NestJS", "PostgreSQL"],
    screenshots: shots("rentcheck", 10),
    gradient: "from-violet-500/40 to-cyan-400/20",
    callAction: "Hola, me gustaría cotizar un sistema como el de RentCheck B2B"
  },
  {
    slug: "sabor-espress",
    name: "SaborEspress POS & Menu",
    category: "E-commerce / Ventas",
    description:
      "Punto de venta completo para negocios: control de caja, inventario en tiempo real y facturación en una sola herramienta.",
    highlights: ["Control de caja", "Inventario y facturación"],
    tech: ["React", "React Native", "PostgreSQL", "Node.js"],
    screenshots: shots("sistema-pos", 8, "jpeg"),
    gradient: "from-fuchsia-400/30 to-emerald-400/20",
    callAction: "Hola, me gustaría cotizar un sistema como el del sistema POS"
  },
  {
    slug: "tienda-de-ropa",
    name: "Tienda de Ropa",
    category: "E-commerce / Ventas",
    description: "Tienda de ropa con pasarela de pago y carrito de compras.",
    highlights: ["Carrito de compras", "Pagos"],
    tech: ["Next.js", "Tailwind CSS"],
    screenshots: shots("tienda-ropa", 2),
    gradient: "from-fuchsia-400/30 to-emerald-400/20",
    callAction: "Hola, me gustaría cotizar una tienda como la de ropa"
  },
  {
    slug: "tienda-de-postres",
    name: "Tienda de postres",
    category: "E-commerce / Ventas",
    description: "Tienda de postres con pasarela de pago y carrito de compras.",
    highlights: ["Carrito de compras", "Pagos"],
    tech: ["Next.js", "Tailwind CSS"],
    screenshots: shots("tienda-postres", 6),
    gradient: "from-fuchsia-400/30 to-emerald-400/20",
    callAction: "Hola, me gustaría cotizar una tienda como la de postres"
  },
  {
    slug: "cocktail-bartending",
    name: "Cocktail & Bartending Demo",
    category: "Landing Pages",
    description:
      "Sitio web interactivo para reservas de eventos, catálogo de tragos y contratación de servicios de coctelería.",
    highlights: ["Agendamiento de eventos", "Catálogo interactivo"],
    tech: ["Next.js", "Tailwind CSS"],
    screenshots: shots("cocktail-bartending", 1),
    gradient: "from-fuchsia-400/30 to-emerald-400/20",
    demoUrl: "https://bar-landing-shadows-empire-solutions.netlify.app/",
    callAction: "Hola, me gustaría cotizar un sitio como el del bar"
  },
  {
    slug: "invitacion-boda",
    name: "Invitación Boda",
    category: "Invitaciones Digitales",
    description:
      "Invitación de boda interactiva con galería de fotos, lista de regalos, música, cuenta atrás y confirmación de asistencia.",
    highlights: [
      "Diseño moderno",
      "Lista de regalos",
      "Confirmación de asistencia",
    ],
    tech: ["HTML", "CSS", "JS"],
    screenshots: shots("invitacion-boda", 1),
    gradient: "from-rose-400/30 to-fuchsia-400/20",
    demoUrl: "https://boda-v1.netlify.app/",
    callAction: "Hola, me gustaría cotizar una invitación como la de la boda"
  },
  {
    slug: "invitacion-boda-2",
    name: "Invitación Boda V2",
    category: "Invitaciones Digitales",
    description:
      "Invitación de boda interactiva, lista de regalos, confirmación de asistencia, música y cuenta atrás.",
    highlights: [
      "Diseño moderno",
      "Lista de regalos",
      "Confirmación de asistencia",
    ],
    tech: ["HTML", "CSS", "JS"],
    screenshots: shots("invitacion-boda-2", 1),
    gradient: "from-rose-400/30 to-fuchsia-400/20",
    demoUrl: "https://boda-v2.netlify.app/",
    callAction: "Hola, me gustaría cotizar una invitación como la de la boda"
  },
];

export const CATEGORY_STYLES: Record<Category, string> = {
  "Landing Pages": "border-violet-400/30 bg-violet-500/10 text-violet-300",
  "E-commerce / Ventas":
    "border-emerald-400/30 bg-emerald-500/10 text-emerald-300",
  "Sistemas a Medida": "border-cyan-400/30 bg-cyan-500/10 text-cyan-300",
  "Portafolios Web": "border-fuchsia-400/30 bg-fuchsia-500/10 text-fuchsia-300",
  "Invitaciones Digitales": "border-rose-400/30 bg-rose-500/10 text-rose-300",
};
