// ============================================================================
// SERVICIOS
// ============================================================================
// Editá título, descripción e ítems de cada servicio. "highlight: true"
// marca la tarjeta destacada (se agranda y queda al medio de la grilla).
//
// price: opcional. Si le ponés un valor (ej. "$15.000") aparece grande en
// la tarjeta, como un plan con precio. Si lo dejás en null, la tarjeta
// muestra "Consultar" en el botón y no inventa ningún número.
//
// icon: uno de "flash" | "star" | "trend" | "crown"
//
// color: opcional. "gold" tiñe la tarjeta de dorado (Branding), "cyan" la
// tiñe de cian (Motion). Dejalo en null/sin definir para que la tarjeta
// use el violeta genérico de siempre — así quedó el Plan Premium, sin
// tocar.
//
// note: opcional. Línea corta que aparece debajo de la tarjeta (fuera del
// panel de color), para aclarar algo puntual. Dejalo en null si no hace
// falta.
// ============================================================================

export const services = [
  {
    title: "Diseño de marca",
    description:
      "Creamos tu identidad visual desde cero o renovamos la que ya tenés para que tu marca se vea profesional, reconocible y diferente.",
    items: [
      "Logo e identidad visual",
      "Paleta de colores",
      "Tipografía",
      "Aplicaciones de la marca",
      "Manual de marca",
    ],
    // línea breve debajo de la tarjeta, aclarando uno de los ítems.
    note: "Aplicaciones de marca: cómo se ve tu identidad en redes, tarjetas, packaging, indumentaria y otros soportes.",
    icon: "star",
    price: null, // TODO: ej. "$80.000"
    priceUnit: "por proyecto",
    highlight: false,
    color: "gold",
  },
  {
    title: "Plan Premium",
    description:
      "La opción más completa para construir una marca sólida, desde su identidad visual hasta la forma en que se comunica y se destaca frente a la competencia.",
    items: [
      "Identidad visual completa",
      "Aplicaciones de marca",
      "Animaciones y contenido audiovisual",
      "Seguimiento personalizado de 3 a 6 meses",
    ],
    note: null,
    icon: "crown",
    price: null, // TODO: ej. "$120.000"
    priceUnit: "por proyecto",
    highlight: true,
    color: null,
  },
  {
    title: "Diseño en movimiento",
    description:
      "Damos movimiento a tu marca con animaciones y piezas audiovisuales para redes sociales, presentaciones y eventos.",
    items: ["Animación de logo", "Piezas para redes (reels, stories)", "Videos para eventos"],
    note: null,
    icon: "trend",
    price: null, // TODO: ej. "$60.000"
    priceUnit: "por proyecto",
    highlight: false,
    color: "cyan",
  },
];
