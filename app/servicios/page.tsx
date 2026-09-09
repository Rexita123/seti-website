import type { Metadata } from "next";
import Link from "next/link";
import CtaButton from "@/components/CtaButton";
import Reveal from "@/components/motion/Reveal";
import { ServiceIcon } from "@/components/servicios/icons";
import { SERVICIOS } from "@/lib/servicios";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Los servicios activos de SETI: desarrollo web, sistemas a la medida, automatización, integraciones, IA, consultoría y capacitación tecnológica.",
};

export default function ServiciosPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-32 pb-4 md:pt-40">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.14em] text-jade uppercase">
            Servicios
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold text-balance md:text-5xl">
            Lo que hacemos hoy
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-tinta/70">
            Este es el catálogo activo de SETI — sin montos fijos, porque cada
            negocio necesita algo distinto. Cada proyecto se cotiza según lo
            que realmente se requiere.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {SERVICIOS.map((servicio, i) => (
            <Reveal key={servicio.slug} delay={(i % 2) * 0.08}>
              <Link
                href={`/servicios/${servicio.slug}`}
                className="group flex h-full items-start gap-4 rounded-xl border border-tinta/10 bg-white p-7 transition-all duration-300 hover:shadow-xl hover:shadow-tinta/10"
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${servicio.gradient} text-lienzo transition-transform duration-300 group-hover:scale-110`}
                >
                  <ServiceIcon icon={servicio.icon} size={22} />
                </div>
                <div>
                  <h2 className="font-display text-xl font-semibold group-hover:text-jade">
                    {servicio.nombre}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-tinta/70">
                    {servicio.resumen}
                  </p>
                  <span className="mt-3 inline-block text-sm font-semibold text-jade">
                    Ver detalle →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-tinta/10 bg-jade">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-16 md:flex-row md:items-center md:justify-between md:py-20">
          <h2 className="max-w-xl font-display text-2xl font-bold text-lienzo md:text-3xl">
            ¿No estás seguro cuál de estos necesitas?
          </h2>
          <CtaButton
            href="/contacto"
            className="!bg-lienzo !text-tinta hover:!bg-white"
          >
            Cotización personalizada
          </CtaButton>
        </div>
      </section>
    </>
  );
}
