// ============================================================================
// BLOG
// ============================================================================
// Cada objeto es un post. Copiá un bloque, pegalo antes o después, y cambiá
// los valores. No hace falta tocar ningún otro archivo.
//
// date: mostralo como quieras leerlo, ej. "12 Mar 2026".
// image: poné la imagen dentro de /public/blog/ y referenciala como
//        "/blog/nombre-del-archivo.jpg". Si todavía no tenés imagen, dejá
//        el placeholder que ya está puesto.
// excerpt: 1-2 líneas cortas, se recorta visualmente si es muy largo.
// link: opcional. Si el post ya está publicado en algún lado (ej. Medium,
//       Notion público, etc.) poné el link acá. Si no, dejalo en "#".
// ============================================================================

export const posts = [
  {
    slug: "post-01",
    title: "Cómo armo una identidad visual desde cero",
    excerpt:
      "El proceso que sigo con cada cliente nuevo: de la primera charla al manual de marca terminado.",
    date: "TODO: fecha",
    image: "/blog/placeholder-post-01.svg",
    link: "#",
  },
  {
    slug: "post-02",
    title: "Un mini proyecto personal de motion graphics",
    excerpt:
      "Una pieza que hice para probar un estilo nuevo de animación — qué aprendí y qué usaría de nuevo.",
    date: "TODO: fecha",
    image: "/blog/placeholder-post-02.svg",
    link: "#",
  },
  {
    slug: "post-03",
    title: "Herramientas que uso todos los días",
    excerpt:
      "Un repaso rápido del software y los plugins que tengo siempre a mano para diseño y edición.",
    date: "TODO: fecha",
    image: "/blog/placeholder-post-03.svg",
    link: "#",
  },
];
