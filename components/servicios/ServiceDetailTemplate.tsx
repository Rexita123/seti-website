import Link from "next/link";
import CtaButton from "@/components/CtaButton";
import Reveal from "@/components/motion/Reveal";
import { ServiceIcon } from "./icons";
import type { Servicio } from "@/lib/servicios";

export default function ServiceDetailTemplate({ servicio }: { servicio: Servicio }) {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 pt-32 pb-4 md:pt-40">
        <Reveal>
          <Link
            href="/servicios"
            className="text-sm font-medium text-tinta/60 hover:text-jade"
          >
            ← Todos los servicios
          </Link>
          <p className="mt-6 font-mono text-xs tracking-[0.14em] text-jade uppercase">
            Servicios
          </p>
          <div className="mt-4 flex items-start gap-4">
            <div
              className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${servicio.gradient} text-lienzo`}
            >
              <ServiceIcon icon={servicio.icon} size={26} />
            </div>
            <h1 className="pt-1 font-display text-3xl font-bold text-balance md:text-4xl">
              {servicio.nombre}
            </h1>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-tinta/70">
            {servicio.resumen}
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-10">
        <Reveal className="flex flex-col gap-4">
          {servicio.descripcionLarga.map((parrafo) => (
            <p key={parrafo} className="text-sm leading-relaxed text-tinta/70">
              {parrafo}
            </p>
          ))}
        </Reveal>
      </section>

      <section className="border-t border-tinta/10 bg-white">
        <div className="mx-auto max-w-3xl px-6 py-14">
          <Reveal>
            <h2 className="font-display text-xl font-semibold">Qué incluye</h2>
            <ul className="mt-5 flex flex-col gap-3">
              {servicio.queIncluye.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-tinta/70">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-jade" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="mt-10">
            <h2 className="font-display text-xl font-semibold">Para quién es</h2>
            <p className="mt-3 text-sm leading-relaxed text-tinta/70">
              {servicio.paraQuienEs}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-tinta/10 bg-jade">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-16 md:flex-row md:items-center md:justify-between md:py-20">
          <h2 className="max-w-xl text-balance font-display text-2xl font-bold text-lienzo md:text-3xl">
            ¿Esto es lo que tu negocio necesita?
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
