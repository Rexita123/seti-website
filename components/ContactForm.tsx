"use client";

import { useState, type FormEvent, type ReactNode } from "react";

const SERVICIOS = [
  "Desarrollo de sitios web",
  "Desarrollo de aplicaciones web",
  "Sistemas empresariales a la medida",
  "Automatización de procesos",
  "Integración de sistemas y APIs",
  "IA y asistentes virtuales",
  "Consultoría tecnológica",
  "Capacitación tecnológica",
  "No estoy seguro",
];

type Status = "idle" | "enviando" | "enviado" | "error";

const inputStyles =
  "w-full rounded-xl border border-tinta/15 bg-white py-3 pl-11 pr-4 text-sm text-tinta shadow-sm outline-none transition-all placeholder:text-tinta/35 focus:border-jade focus:ring-4 focus:ring-jade/15";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("enviando");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("request-failed");

      setStatus("enviado");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "enviado") {
    return (
      <div className="rounded-2xl border border-jade/20 bg-jade/[0.06] p-8 text-tinta shadow-sm">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-jade text-lienzo">
          <IconCheck />
        </div>
        <p className="mt-4 font-display text-lg font-semibold">
          Recibimos tu mensaje.
        </p>
        <p className="mt-1 text-sm text-tinta/70">
          Te respondemos directamente a tu correo en cuanto lo revisemos.
        </p>
      </div>
    );
  }

  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-jade/10 blur-3xl"
      />
      <form
        onSubmit={handleSubmit}
        className="relative rounded-2xl border border-tinta/10 bg-white/80 p-6 shadow-[0_1px_2px_rgba(27,36,32,0.04),0_16px_40px_-16px_rgba(27,36,32,0.12)] backdrop-blur-sm sm:p-8"
      >
        <div className="flex flex-col gap-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Nombre" name="nombre" required icon={<IconUser />} />
            <Field
              label="Negocio (opcional)"
              name="negocio"
              required={false}
              icon={<IconBriefcase />}
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              label="Correo"
              name="correo"
              type="email"
              required
              icon={<IconMail />}
            />
            <Field
              label="Teléfono (opcional)"
              name="telefono"
              type="tel"
              required={false}
              icon={<IconPhone />}
            />
          </div>

          <label className="flex flex-col gap-1.5 text-sm">
            <span className="font-medium text-tinta">Servicio de interés</span>
            <div className="relative">
              <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-tinta/40">
                <IconTag />
              </span>
              <select
                name="servicio"
                className={`${inputStyles} appearance-none pr-10`}
              >
                {SERVICIOS.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-tinta/40">
                <IconChevron />
              </span>
            </div>
          </label>

          <label className="flex flex-col gap-1.5 text-sm">
            <span className="font-medium text-tinta">
              Cuéntanos qué necesitas
            </span>
            <div className="relative">
              <span className="pointer-events-none absolute left-3.5 top-3.5 text-tinta/40">
                <IconMessage />
              </span>
              <textarea
                name="mensaje"
                required
                rows={5}
                className={`${inputStyles} resize-none`}
              />
            </div>
          </label>

          <button
            type="submit"
            disabled={status === "enviando"}
            className="mt-2 inline-flex w-fit items-center justify-center gap-2 rounded-full bg-azul px-7 py-3.5 text-sm font-semibold text-lienzo shadow-[0_8px_24px_-8px_rgba(47,128,237,0.55)] transition-all hover:-translate-y-0.5 hover:bg-azul/90 disabled:pointer-events-none disabled:opacity-60"
          >
            {status === "enviando" ? "Enviando…" : "Enviar"}
            {status !== "enviando" && <IconArrow />}
          </button>

          {status === "error" && (
            <p className="text-sm text-red-700">
              Algo falló al enviar tu mensaje. Escríbenos directo a{" "}
              <a
                href="mailto:salvadorrexadelrazo@outlook.com"
                className="underline"
              >
                salvadorrexadelrazo@outlook.com
              </a>{" "}
              mientras lo resolvemos.
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  icon,
}: {
  label: string;
  name: string;
  type?: string;
  required: boolean;
  icon: ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5 text-sm">
      <span className="font-medium text-tinta">{label}</span>
      <div className="relative">
        <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-tinta/40">
          {icon}
        </span>
        <input name={name} type={type} required={required} className={inputStyles} />
      </div>
    </label>
  );
}

function IconUser() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M4.5 20c1.4-3.6 4.4-5.5 7.5-5.5s6.1 1.9 7.5 5.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconBriefcase() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3.5" y="7.5" width="17" height="12" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path d="M3.5 13h17" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5.5" width="18" height="13" rx="2.2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 3.5h2.7l1.3 4-2 1.4a11 11 0 0 0 5.1 5.1l1.4-2 4 1.3V16a2.5 2.5 0 0 1-2.5 2.5C10.5 18.5 5.5 13.5 5.5 8A2.5 2.5 0 0 1 6 3.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconTag() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M11.5 3.5H6A2.5 2.5 0 0 0 3.5 6v5.5a2 2 0 0 0 .59 1.41l8.5 8.5a2 2 0 0 0 2.82 0l5.59-5.59a2 2 0 0 0 0-2.82l-8.5-8.5a2 2 0 0 0-1.41-.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="8.5" cy="8.5" r="1.3" fill="currentColor" />
    </svg>
  );
}

function IconMessage() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 5.5h16v10.5a1 1 0 0 1-1 1H9l-4 3.5v-3.5H4a1 1 0 0 1-1-1V6.5a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconChevron() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconArrow() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 13l4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
