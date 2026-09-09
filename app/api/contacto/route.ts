import { NextResponse } from "next/server";
import { Resend } from "resend";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Cuerpo inválido." }, { status: 400 });
  }

  const nombre = String(body.nombre ?? "").trim();
  const correo = String(body.correo ?? "").trim();
  const mensaje = String(body.mensaje ?? "").trim();
  const negocio = String(body.negocio ?? "").trim();
  const telefono = String(body.telefono ?? "").trim();
  const servicio = String(body.servicio ?? "").trim();

  if (!nombre || !correo || !mensaje) {
    return NextResponse.json(
      { error: "Nombre, correo y mensaje son obligatorios." },
      { status: 400 },
    );
  }

  if (!EMAIL_REGEX.test(correo)) {
    return NextResponse.json(
      { error: "El correo no tiene un formato válido." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL_TO;

  if (!apiKey || !to) {
    console.error(
      "Falta configurar RESEND_API_KEY o CONTACT_EMAIL_TO en las variables de entorno.",
    );
    return NextResponse.json(
      { error: "El formulario aún no está configurado. Inténtalo por correo directo." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "SETI — Sitio web <onboarding@resend.dev>",
    to,
    replyTo: correo,
    subject: `Nuevo contacto de ${nombre}${negocio ? ` (${negocio})` : ""}`,
    text: [
      `Nombre: ${nombre}`,
      negocio && `Negocio: ${negocio}`,
      `Correo: ${correo}`,
      telefono && `Teléfono: ${telefono}`,
      servicio && `Servicio de interés: ${servicio}`,
      "",
      "Mensaje:",
      mensaje,
    ]
      .filter(Boolean)
      .join("\n"),
  });

  if (error) {
    console.error("Error al enviar correo con Resend:", error);
    return NextResponse.json(
      { error: "No se pudo enviar el mensaje." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
