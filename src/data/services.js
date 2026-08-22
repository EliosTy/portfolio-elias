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
// ============================================================================

export const services = [
  {
    title: "Branding y diseño de marca",
    description:
      "Identidad visual completa: desde el logo hasta el sistema de marca que vas a usar en todos tus canales.",
    items: ["Logo e identidad visual", "Paleta de colores y tipografía", "Manual de marca"],
    icon: "star",
    price: null, // TODO: ej. "$80.000"
    priceUnit: "por proyecto",
    highlight: false,
  },
  {
    title: "Plan Premium",
    description:
      "Branding + Motion en un solo paquete: tu marca completa, en estático y en movimiento.",
    items: ["Todo lo de Branding", "Todo lo de Motion", "Seguimiento y ajustes incluidos"],
    icon: "crown",
    price: null, // TODO: ej. "$120.000"
    priceUnit: "por proyecto",
    highlight: true,
  },
  {
    title: "Motion para eventos y redes",
    description:
      "Animación y piezas en movimiento pensadas para redes sociales, presentaciones y eventos en vivo.",
    items: ["Animación de logo", "Piezas para redes (reels, stories)", "Videos para eventos"],
    icon: "trend",
    price: null, // TODO: ej. "$60.000"
    priceUnit: "por proyecto",
    highlight: false,
  },
];
