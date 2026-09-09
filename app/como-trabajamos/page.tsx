import type { Metadata } from "next";
import CtaButton from "@/components/CtaButton";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Cómo trabajamos",
  description:
    "El proceso de SETI de principio a fin: diagnóstico, cotización personalizada, desarrollo y capacitación.",
};

const PASOS = [
  {
    n: "01",
    titulo: "Diagnóstico",
    texto:
      "Entendemos qué te está costando tiempo o dinero, y por qué — antes de proponer nada.",
  },
  {
    n: "02",
    titulo: "Cotización personalizada",
    texto:
      "Te decimos qué se puede hacer, cómo, y qué necesita realmente tu caso. Sin montos fijos porque cada negocio es distinto.",
  },
  {
    n: "03",
    titulo: "Desarrollo",
    texto:
      "Construimos la solución priorizando que siga funcionando a largo plazo, no solo que se vea bien hoy.",
  },
  {
    n: "04",
    titulo: "Capacitación",
    texto:
      "Te dejamos sabiendo operar lo que construimos, para que dependas cada vez menos de un tercero.",
  },
];

export default function ComoTrabajamosPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 pt-32 pb-4 md:pt-40">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.14em] text-jade uppercase">
            Cómo trabajamos
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold text-balance md:text-5xl">
            Un proceso claro, de principio a fin.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-tinta/70">
            Nada de sorpresas a mitad de camino. Así se ve trabajar con
            nosotros, desde el primer mensaje hasta que te dejamos operando
            la solución por tu cuenta.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2">
          {PASOS.map((paso, i) => (
            <Reveal key={paso.n} delay={(i % 2) * 0.08}>
              <span className="font-mono text-xs text-jade">{paso.n}</span>
              <h2 className="mt-2 font-display text-xl font-semibold">
                {paso.titulo}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-tinta/70">
                {paso.texto}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-tinta/10 bg-jade">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-16 md:flex-row md:items-center md:justify-between md:py-20">
          <h2 className="max-w-xl text-balance font-display text-2xl font-bold text-lienzo md:text-3xl">
            ¿Listo para el primer paso?
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
