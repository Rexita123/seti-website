import type { Metadata } from "next";
import CtaButton from "@/components/CtaButton";

export const metadata: Metadata = {
  title: "Página no encontrada",
};

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-6 pt-32 pb-20 text-center">
      <div className="flex items-center justify-center gap-3 text-tinta md:gap-5">
        <span className="font-display text-7xl font-bold md:text-8xl">4</span>

        <svg
          viewBox="0 0 230 130"
          fill="none"
          role="img"
          aria-label="Cable desconectado"
          className="h-24 w-auto md:h-28"
        >
          {/* cable y conectores */}
          <g stroke="currentColor" strokeWidth="5" strokeLinecap="round">
            <path d="M6 116 C 48 116, 56 66, 92 66" />
            <rect x="92" y="50" width="30" height="32" rx="7" />
            <path d="M122 60 h14 M122 72 h14" />
            <rect x="150" y="50" width="30" height="32" rx="7" />
            <path d="M158 60 h10 M158 72 h10" />
            <path d="M180 66 C 210 66, 220 92, 224 118" />
          </g>

          {/* chispa */}
          <g className="text-jade" stroke="currentColor" strokeWidth="4" strokeLinecap="round">
            <path d="M143 58 v-15" />
            <path d="M131 62 l-10 -12" />
            <path d="M155 62 l10 -12" />
          </g>
          <g className="text-jade" fill="currentColor">
            <circle cx="143" cy="38" r="3" />
            <circle cx="122" cy="53" r="2.5" />
            <circle cx="164" cy="53" r="2.5" />
          </g>
        </svg>

        <span className="font-display text-7xl font-bold md:text-8xl">4</span>
      </div>

      <h1 className="mt-8 font-display text-2xl font-semibold text-balance md:text-3xl">
        Se perdió la conexión
      </h1>
      <p className="mt-4 leading-relaxed text-tinta/70">
        La página que buscas no existe, cambió de dirección o el enlace está roto.
        Desde el inicio puedes llegar a donde necesitas.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <CtaButton href="/">Volver al inicio</CtaButton>
        <CtaButton href="/servicios" variant="secondary">
          Ver servicios
        </CtaButton>
      </div>
    </section>
  );
}
