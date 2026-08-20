// ============================================================================
// ACÁ SUMÁS TUS PROYECTOS
// ============================================================================
// Cada objeto de la lista es un proyecto. Copiá un bloque, pegalo antes o
// después, y cambiá los valores. No hace falta tocar ningún otro archivo.
//
// category acepta uno de estos 3 valores (tienen que ir así, en minúscula):
//   "diseño"  -> Diseño Gráfico
//   "motion"  -> Motion Graphics
//   "engi"    -> Proyectos personales (tu categoría "Engi")
//
// image: poné la imagen dentro de /public/projects/ y referenciala como
//        "/projects/nombre-del-archivo.jpg"
// video: opcional. Si el proyecto tiene un video (ej. de motion graphics),
//        pegá el link de embed de YouTube o Vimeo acá. Si no tiene, dejalo
//        en null.
// ============================================================================

export const projects = [
  {
    slug: "proyecto-diseno-01",
    title: "Nombre del proyecto",
    category: "diseño",
    year: 2026,
    description:
      "Descripción corta del proyecto: qué es, para quién lo hiciste y qué resolviste con el diseño.",
    tags: ["Branding", "Identidad visual"],
    image: "/projects/placeholder-diseno.svg",
    video: null,
    link: null,
    featured: true,
  },
  {
    slug: "proyecto-motion-01",
    title: "Nombre del proyecto motion",
    category: "motion",
    year: 2026,
    description:
      "Descripción corta: qué tipo de pieza es (loop, spot, intro, etc.) y qué herramientas usaste.",
    tags: ["After Effects", "Animación 2D"],
    image: "/projects/placeholder-motion.svg",
    video: null, // ej: "https://www.youtube.com/embed/XXXXXXXXXXX"
    link: null,
    featured: true,
  },
  {
    slug: "proyecto-engi-01",
    title: "Nombre del proyecto personal",
    category: "engi",
    year: 2026,
    description:
      "Descripción corta de tu proyecto personal: qué probaste, qué aprendiste, por qué lo hiciste.",
    tags: ["Personal", "Experimental"],
    image: "/projects/placeholder-engi.svg",
    video: null,
    link: null,
    featured: false,
  },
];

export const categories = [
  { id: "todos", label: "Todos" },
  { id: "diseño", label: "Diseño Gráfico" },
  { id: "motion", label: "Motion Graphics" },
  { id: "engi", label: "Engi (proyectos personales)" },
];
