import type { Metadata } from "next";
import Link from "next/link";
import { TARJETA, ENLACES } from "@/lib/tarjeta";
import { CardIcon } from "@/components/tarjeta/icons";
import ShareButton from "@/components/tarjeta/ShareButton";

const nombreCompleto = `${TARJETA.prenominal} ${TARJETA.nombre}`;

export const metadata: Metadata = {
  title: "Tarjeta de contacto",
  description: `${nombreCompleto} — ${TARJETA.cargo}, ${TARJETA.empresa}.`,
  robots: { index: false, follow: false },
  openGraph: {
    title: `${nombreCompleto} — ${TARJETA.empresa}`,
    description: TARJETA.resumen,
    type: "profile",
  },
};

export default function TarjetaPage() {
  return (
    <div className="min-h-dvh bg-lienzo">
      <div className="mx-auto max-w-md px-5 pb-16">
        {/* Encabezado */}
        <header className="relative -mx-5 overflow-hidden bg-tinta px-5 pt-12 pb-16 text-center text-lienzo">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.13] [background:radial-gradient(circle_at_30%_-10%,var(--color-menta),transparent_55%)]"
          />
          <div className="relative">
            <img
              src="/logo-seti.png"
              alt="SETI"
              className="mx-auto h-7 w-auto brightness-0 invert"
            />
            <div className="mx-auto mt-9 flex h-24 w-24 items-center justify-center rounded-full border border-lienzo/15 bg-lienzo/5 font-display text-3xl font-bold text-menta">
              {TARJETA.iniciales}
            </div>
            <h1 className="mt-5 font-display text-2xl font-bold">
              <span className="block font-mono text-[0.7rem] font-normal tracking-[0.22em] text-lienzo/50 uppercase">
                {TARJETA.prenominal}
              </span>
              {TARJETA.nombre}
            </h1>
            <p className="mt-2 text-sm font-medium text-menta">{TARJETA.cargo}</p>
            <p className="mt-1 text-xs text-lienzo/55">{TARJETA.empresaLarga}</p>
          </div>
        </header>

        {/* Guardar contacto */}
        <a
          href="/tarjeta/vcard"
          download="Salvador Rexa del Razo - SETI.vcf"
          className="relative z-10 -mt-6 mb-6 flex items-center justify-center gap-2 rounded-xl bg-azul px-6 py-4 text-sm font-semibold text-lienzo shadow-lg shadow-tinta/20 transition-colors hover:bg-azul/90"
        >
          <CardIcon name="contact" />
          Guardar contacto
        </a>

        <p className="mb-4 px-1 text-sm leading-relaxed text-tinta/70">
          {TARJETA.resumen}
        </p>

        {/* Enlaces */}
        <ul className="flex flex-col gap-2.5">
          {ENLACES.map((enlace) => (
            <li key={enlace.label}>
              <a
                href={enlace.href}
                {...(enlace.externo
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex items-center gap-4 rounded-xl border border-tinta/10 bg-white px-4 py-3.5 transition-colors hover:border-jade/40 hover:bg-jade/[0.03]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-lienzo text-jade">
                  <CardIcon name={enlace.icon} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold text-tinta">
                    {enlace.label}
                  </span>
                  <span className="block truncate text-xs text-tinta/55">
                    {enlace.sub}
                  </span>
                </span>
                <span
                  aria-hidden
                  className="text-tinta/25 transition-transform group-hover:translate-x-0.5 group-hover:text-jade"
                >
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-col gap-3">
          <ShareButton titulo={`${nombreCompleto} — ${TARJETA.empresa}`} />
          <Link
            href="/"
            className="text-center text-xs font-medium text-tinta/50 transition-colors hover:text-jade"
          >
            Conoce SETI →
          </Link>
        </div>
      </div>
    </div>
  );
}
