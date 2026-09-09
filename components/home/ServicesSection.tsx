import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { SERVICIOS } from "@/lib/servicios";

export default function ServicesSection() {
  return (
    <section id="servicios" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <Reveal>
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-jade">
              Servicios
            </p>
            <h2 className="mt-4 max-w-xl text-balance font-display text-3xl font-bold md:text-4xl">
              Lo que hacemos hoy
            </h2>
          </div>
          <a
            href="/servicios"
            className="text-sm font-semibold text-jade hover:underline"
          >
            Ver todos los servicios →
          </a>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICIOS.map((servicio, i) => (
          <Reveal key={servicio.slug} delay={i * 0.05}>
            <Link
              href={`/servicios/${servicio.slug}`}
              className="group relative block rounded-xl border border-tinta/10 bg-white shadow-sm transition-all duration-300 ease-out hover:z-10 hover:scale-[1.05] hover:shadow-2xl hover:shadow-tinta/15"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-xl">
                <Image
                  src={servicio.imagen}
                  alt={servicio.nombre}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 ease-out group-hover:scale-110"
                />
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${servicio.gradient} opacity-35 mix-blend-multiply`}
                />
              </div>
              <div className="p-4">
                <p className="text-sm font-medium leading-snug">
                  {servicio.nombre}
                </p>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-2 ring-jade opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
