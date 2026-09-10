import { TARJETA } from "@/lib/tarjeta";

// Se genera en build y se sirve como archivo estático.
export const dynamic = "force-static";

function construirVCard(): string {
  // "Salvador Rexa del Razo" -> nombre de pila: Salvador / apellidos: Rexa del Razo
  const [pila, ...resto] = TARJETA.nombre.split(" ");
  const apellidos = resto.join(" ");

  const lineas = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${apellidos};${pila};;${TARJETA.prenominal};`,
    `FN:${TARJETA.prenominal} ${TARJETA.nombre}`,
    `ORG:${TARJETA.empresa} — ${TARJETA.empresaLarga}`,
    `TITLE:${TARJETA.cargo}`,
    `TEL;TYPE=CELL,VOICE:${TARJETA.telefono}`,
    `EMAIL;TYPE=WORK,INTERNET:${TARJETA.correo}`,
    `URL:${TARJETA.sitio}`,
    `X-SOCIALPROFILE;TYPE=facebook:${TARJETA.facebook}`,
    `X-SOCIALPROFILE;TYPE=instagram:${TARJETA.instagram}`,
    `NOTE:${TARJETA.resumen}`,
    "END:VCARD",
  ];

  // vCard exige CRLF entre líneas.
  return lineas.join("\r\n") + "\r\n";
}

export function GET() {
  return new Response(construirVCard(), {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition":
        'attachment; filename="Salvador Rexa del Razo - SETI.vcf"',
      "Cache-Control": "public, max-age=3600",
    },
  });
}
