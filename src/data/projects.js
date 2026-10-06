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
// intro / tools / facts / sections: opcionales, para armar una página más
//          completa (ver "Juntada Inconformista" como ejemplo).
//          intro = párrafos extra del encabezado. tools = lista de
//          herramientas ("Herramientas utilizadas"). facts = datos rápidos
//          {label, value}. sections = bloques en orden, cada uno con title
//          y paragraphs, y opcionalmente video + poster (video vertical),
//          images [{image, caption, alt}], clips [{src, caption}] o "parts"
//          (bloques con subtitle, paragraphs, list, images y clips).
//          Si un proyecto no tiene "sections", la página usa
//          content / clips / gallery como siempre.
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
    // primer párrafo del encabezado (también es la descripción para buscadores)
    description:
      "Para la edición OPI 2.0 - 2026, trabajé en el desarrollo de videos para las pantallas del salón y las credenciales del staff.",
    // párrafos extra del encabezado, debajo de "description"
    intro: [
      "El objetivo fue llevar una misma línea gráfica a diferentes soportes, combinando color, tipografía, composición y movimiento para construir una experiencia visual coherente durante todo el evento de Franco Pisso.",
    ],
    tools: ["After Effects", "Illustrator"],
    tags: ["Diseño gráfico", "Motion Graphics", "Identidad visual"],
    hideEyebrow: true, // las categorías ya figuran como etiquetas debajo del título
    image: "/projects/proyecto-diseno-01.jpg",
    video: null,
    // la página se arma con estas secciones, en orden. Cada una puede tener:
    //   title, paragraphs (lista de textos), video + poster (video vertical),
    //   images (fotos con caption), clips (loops cortos con caption), o bien
    //   "parts": bloques con subtitle + paragraphs + list + images + clips.
    sections: [
      {
        title: "El proyecto",
        paragraphs: [
          "La idea fue mantener una línea visual reconocible en todos estos puntos de contacto. Para ello, trabajé principalmente con una paleta naranja, tipografías de gran presencia y composiciones pensadas para funcionar tanto en pantalla como en piezas físicas.",
          "El resultado fue un sistema gráfico que podía adaptarse a diferentes contenidos sin perder su identidad.",
        ],
      },
      {
        title: "Diseño en movimiento",
        video: "/projects/juntada-inconformista-vertical.mp4",
        poster: "/projects/juntada-inconformista-poster.jpg",
        parts: [
          {
            subtitle: "Las pantallas como parte de la experiencia",
            paragraphs: [
              "Una parte central del trabajo estuvo en las pantallas del salón. Diseñé y animé diferentes piezas para acompañar los distintos momentos del evento: la pantalla principal con el logo de OPI 2.0, el título de la juntada y la trivia.",
              "El movimiento no fue pensado como un elemento aislado, sino como una extensión de la identidad visual. Las piezas mantienen los mismos recursos gráficos y tipográficos para que el evento conserve una estética reconocible incluso cuando cambia el contenido.",
            ],
          },
          {
            subtitle: "Un sistema pensado para actualizarse",
            paragraphs: [
              "Las composiciones fueron desarrolladas en After Effects utilizando elementos de texto reutilizables. Esto permitió actualizar la información de las pantallas sin tener que reconstruir las animaciones desde cero.",
              "Además de facilitar el trabajo durante la producción, este sistema permitió mantener consistencia entre las diferentes piezas.",
              "Para los más curiosos les dejo una foto de la composición en el programa.",
            ],
            images: [
              {
                image: "/projects/juntada-after-effects.webp",
                alt: "Composición de la pantalla principal en After Effects",
              },
            ],
          },
          {
            subtitle: "Piezas desarrolladas:",
            list: [
              "Loop principal",
              "Loop de la trivia",
            ],
            clips: [
              { src: "/projects/juntada-inconformista-loop-1.mp4", caption: "Loop principal" },
              { src: "/projects/juntada-inconformista-loop-2.mp4", caption: "Loop de la trivia" },
            ],
          },
        ],
      },
      {
        title: "Identidad del staff",
        paragraphs: [
          "La identidad del evento no terminaba en las pantallas.",
          "También diseñé las credenciales de identificación del staff, buscando llevar los mismos recursos visuales del evento a una pieza física que acompañara al equipo durante la jornada y que, al mismo tiempo, quedara como un lindo recuerdo.",
          "Cada credencial incluye un avatar ilustrado (diseñado por un alumno de la cursada 2026; te mando un abrazo enorme, San <3), nombre y rol del integrante, utilizando el naranja como elemento común para mantener la conexión con el resto de la identidad.",
        ],
        images: [
          { image: "/projects/tarjetas.webp", caption: "Credenciales del staff — branding en Illustrator" },
        ],
      },
      {
        title: "El resultado final",
        paragraphs: [
          "Un evento increíble, lleno de alegría, personas que nunca me voy a olvidar, regalos y abrazos por parte del alumnado, y un equipo de trabajo impecable: Paw, Andy, Orne, Vi, Rodri, Paolo, Gonza, Lucas y, claramente, Franco.",
          "Gracias por esta oportunidad y gracias por el espacio :)",
        ],
        images: [
          { image: "/projects/foto-grupal.jpg", caption: "Foto grupal del evento" },
        ],
      },
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
