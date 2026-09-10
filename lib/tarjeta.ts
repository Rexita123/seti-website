// Fuente única de la tarjeta digital de contacto.
//
// Ruta pública: /tarjeta  — es la URL que se graba en los stickers NFC (o en un QR).
// El archivo .vcf que descarga el botón "Guardar contacto" se genera a partir de
// ESTOS mismos datos en app/tarjeta/vcard/route.ts, así que solo se edita aquí.
//
// Datos de contacto: se usan los públicos que ya muestra el sitio (ver Footer.tsx
// y SITEMAP.md §5) — correo outlook y teléfono temporal. Actualizar cuando exista
// dominio/correo corporativo.

export type IconoEnlace =
  | "web"
  | "whatsapp"
  | "mail"
  | "phone"
  | "facebook"
  | "instagram";

export type EnlaceTarjeta = {
  label: string;
  sub: string;
  href: string;
  icon: IconoEnlace;
  externo?: boolean;
};

export const TARJETA = {
  prenominal: "I.S.C.",
  nombre: "Salvador Rexa del Razo",
  cargo: "Fundador y CEO",
  empresa: "SETI",
  empresaLarga: "Soluciones Empresariales Tecnológicas y de Innovación",
  iniciales: "SR",
  resumen:
    "Soluciones tecnológicas a la medida para negocios en México: sitios y aplicaciones web, sistemas, automatización e integración.",
  telefono: "+527713438109",
  telefonoDisplay: "771 343 8109",
  correo: "salvadorrexadelrazo@outlook.com",
  sitio: "https://sitio-omega-two.vercel.app",
  sitioDisplay: "sitio-omega-two.vercel.app",
  facebook: "https://www.facebook.com/setisolucionesempresariales/",
  instagram: "https://www.instagram.com/setisolucionesempresariales/",
} as const;

export const ENLACES: EnlaceTarjeta[] = [
  {
    label: "Sitio web",
    sub: TARJETA.sitioDisplay,
    href: TARJETA.sitio,
    icon: "web",
    externo: true,
  },
  {
    label: "WhatsApp",
    sub: TARJETA.telefonoDisplay,
    href: `https://wa.me/${TARJETA.telefono.replace("+", "")}`,
    icon: "whatsapp",
    externo: true,
  },
  {
    label: "Correo",
    sub: TARJETA.correo,
    href: `mailto:${TARJETA.correo}`,
    icon: "mail",
  },
  {
    label: "Teléfono",
    sub: TARJETA.telefonoDisplay,
    href: `tel:${TARJETA.telefono}`,
    icon: "phone",
  },
  {
    label: "Facebook",
    sub: "SETI Soluciones Empresariales",
    href: TARJETA.facebook,
    icon: "facebook",
    externo: true,
  },
  {
    label: "Instagram",
    sub: "@setisolucionesempresariales",
    href: TARJETA.instagram,
    icon: "instagram",
    externo: true,
  },
];
