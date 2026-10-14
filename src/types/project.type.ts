import { Category } from "./category.type";

export type Project = {
  slug: string;
  name: string;
  category: Category;
  description: string;
  highlights: string[];
  tech: string[];
  /**
   * Si el proyecto tiene una demo viva, pon aquí la URL: la tarjeta mostrará
   * "Ver Demo" y abrirá el sitio directamente.
   * Si lo dejas vacío, la tarjeta abre un modal con las capturas.
   */
  demoUrl?: string;
  /** Capturas guardadas en /public (ruta pública, empieza con "/") */
  screenshots: string[];
  gradient: string;
  callAction: string;
};