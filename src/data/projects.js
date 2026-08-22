// ============================================================================
// ACÁ SUMÁS TUS PROYECTOS
// ============================================================================
// Cada objeto de la lista es un proyecto. Copiá un bloque, pegalo antes o
// después, y cambiá los valores. No hace falta tocar ningún otro archivo.
//
// Cada proyecto tiene su propia página en /trabajos/tu-slug — se genera
// sola a partir de este archivo. Ahí es donde se muestran las imágenes del
// "gallery" y los textos de "content".
//
// slug: es la parte de la URL (tuweb.com/trabajos/ESTO). Sin espacios, sin
//       tildes ni la letra ñ — todo en minúscula y separado por guiones.
//
// category acepta uno de estos 3 valores (tienen que ir así, en minúscula):
//   "diseño"  -> Diseño Gráfico
//   "motion"  -> Motion Graphics
//   "engi"    -> Proyectos personales (tu categoría "Engi")
//
// featured: true/false -> controla si aparece entre los 4 destacados de la
//           portada. La página /trabajos siempre los muestra todos.
//
// image: la imagen de portada del proyecto — aparece en la tarjeta de la
//        portada/listado, y también arriba de todo en la página del
//        proyecto (a menos que tenga "video", ver abajo). Poné el archivo
//        en /public/projects/ y referenciala como "/projects/archivo.jpg"
//
// video: opcional. Si el proyecto tiene un video (ej. de motion graphics),
//        pegá el link de embed de YouTube o Vimeo acá — se muestra en vez
//        de la imagen de portada, arriba de todo en la página del
//        proyecto. Si no tiene, dejalo en null.
//
// clips: opcional. Videos cortos en loop (mp4, cuadrados 1:1 — ej.
//        768x768), pensados para mostrar procesos, detalles o piezas de
//        motion chiquitas. Se muestran uno al lado del otro, en tamaño
//        chico (no ocupan toda la pantalla), y se reproducen solos en
//        loop sin sonido. Poné los archivos en /public/projects/ y listá
//        las rutas acá. Si no tenés, dejalo como [].
//        Ej: clips: ["/projects/mi-proyecto-loop-1.mp4", "/projects/mi-proyecto-loop-2.mp4"]
//
// gallery: opcional. Más fotos del proyecto para mostrar en su página
//          (bocetos, detalles, variantes, fotos del evento, etc.). Cada
//          foto es un objeto con "image" (obligatorio) y "caption"
//          (opcional, un texto corto debajo de la foto — dejalo en ""
//          si no querés texto). Poné los archivos en /public/projects/
//          igual que "image". Si no tenés más fotos todavía, dejalo
//          como [].
//          Ej: gallery: [{ image: "/projects/mi-proyecto-2.jpg", caption: "Boceto inicial" }]
//
// content: el texto explicando el proyecto en su propia página — el
//          proceso, el desafío, cómo lo resolviste, etc. Cada string del
//          array es un párrafo separado. Podés poner uno o varios.
//
// link: opcional. Si el proyecto tiene una web o red social donde se puede
//       ver en vivo, poné el link acá — aparece como botón en la página
//       del proyecto. Si no tiene, dejalo en null.
//
// photoCredit: opcional. Si las fotos del proyecto son de un fotógrafo,
//              poné acá su nombre — aparece como crédito abajo de la
//              galería ("Fotografía: Nombre"). Si no aplica, dejalo null.
// ============================================================================

export const projects = [
  {
    slug: "proyecto-diseno-01",
    title: "Juntada Inconformista",
    category: "diseño",
    year: 2026,
    description:
      "Descripción corta del proyecto: qué es, para quién lo hiciste y qué resolviste con el diseño.",
    tags: ["Motion Graphics", "Branding"],
    image: "/projects/proyecto-diseno-01.jpg",
    video: null,
    clips: [
      "/projects/juntada-inconformista-loop-1.mp4",
      "/projects/juntada-inconformista-loop-2.mp4",
    ],
    gallery: [
      { image: "/projects/tarjetas.webp", caption: "Tarjetas de identificación — branding en Illustrator" },
      { image: "/projects/foto-grupal.jpg", caption: "Foto grupal del evento" }, // TODO: cambiá el texto si querés otro
    ],
    content: [
      "TODO: contá acá el proceso — de dónde salió el proyecto, qué te pidió el cliente (o qué te propusiste vos) y cómo lo encaraste.",
      "TODO: podés sumar otro párrafo más contando el resultado final y qué aprendiste o qué destacarías de este trabajo.",
    ],
    link: null,
    photoCredit: "Lucas Scolari",
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
    clips: [],
    gallery: [],
    content: [
      "TODO: contá acá el proceso de este proyecto de motion — el brief, las referencias que usaste, y cómo fuiste armando la pieza.",
    ],
    link: null,
    photoCredit: null,
    featured: true,
  },
  {
    slug: "proyecto-diseno-02",
    title: "Otro proyecto de diseño",
    category: "diseño",
    year: 2025,
    description:
      "Descripción corta de otro proyecto de diseño gráfico o branding.",
    tags: ["Branding", "Packaging"],
    image: "/projects/placeholder-diseno.svg",
    video: null,
    clips: [],
    gallery: [],
    content: [
      "TODO: contá acá el proceso de este proyecto.",
    ],
    link: null,
    photoCredit: null,
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
    clips: [],
    gallery: [],
    content: [
      "TODO: contá acá qué te llevó a hacer este proyecto personal, qué probaste y qué te llevaste de la experiencia.",
    ],
    link: null,
    photoCredit: null,
    featured: true,
  },
];

export const categories = [
  { id: "todos", label: "Todos" },
  { id: "diseño", label: "Diseño Gráfico" },
  { id: "motion", label: "Motion Graphics" },
  { id: "engi", label: "Engi (proyectos personales)" },
];
