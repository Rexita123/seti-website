import type { Metadata } from "next";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Por qué existe SETI, qué busca lograr y los principios que rigen cada decisión que toma.",
};

const VALORES = [
  {
    titulo: "Solidez a largo plazo sobre rapidez",
    texto:
      "Ante dos alternativas, la pregunta no es cuál se entrega más rápido, sino cuál seguirá siendo válida dentro de varios años.",
  },
  {
    titulo: "Honestidad e integridad",
    texto:
      "Nunca promocionamos una capacidad que no existe o que no podemos cumplir, aunque exagerar diera una ventaja comercial inmediata.",
  },
  {
    titulo: "Toda decisión, justificada",
    texto:
      'Ninguna decisión se toma "porque sí" o "porque es lo que se hace". Toda propuesta debe poder responder por qué esta opción y no otra.',
  },
  {
    titulo: "Sostenibilidad y escalabilidad",
    texto:
      "Una solución que funciona hoy pero no puede sostenerse o crecer no se considera una solución completa.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 pt-32 pb-4 md:pt-40">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.14em] text-jade uppercase">
            Nosotros
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold text-balance md:text-5xl">
            Por qué existe SETI
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-tinta/70">
            Un número significativo de negocios enfrenta problemas operativos
            o administrativos que la tecnología ya podría resolver, pero no lo
            hacen por falta de recursos, conocimiento técnico o acceso a
            soluciones adecuadas a su realidad. Esa brecha les cuesta tiempo,
            dinero y oportunidades. SETI existe para cerrarla, con soluciones
            tecnológicas accesibles, sin limitarse a un sector o tamaño de
            negocio en particular.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-xl font-semibold text-jade">
              Misión
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-tinta/70">
              Diseñar e implementar soluciones tecnológicas accesibles que
              permitan a nuestros clientes optimizar sus operaciones,
              reducir pérdidas de tiempo y dinero, y adoptar niveles de
              digitalización que de otra forma estarían fuera de su alcance.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-xl font-semibold text-jade">
              Visión
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-tinta/70">
              Consolidarnos como la empresa de referencia en México para
              negocios que buscan resolver sus limitaciones operativas y
              tecnológicas mediante soluciones accesibles y confiables.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-tinta/10 bg-white">
        <div className="mx-auto max-w-3xl px-6 py-14 md:py-20">
          <Reveal>
            <h2 className="font-display text-2xl font-bold">
              Cómo decidimos
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {VALORES.map((valor, i) => (
              <Reveal key={valor.titulo} delay={(i % 2) * 0.08}>
                <h3 className="font-semibold">{valor.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-tinta/70">
                  {valor.texto}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-14 md:py-20">
        <Reveal>
          <h2 className="font-display text-2xl font-bold">Quién está detrás</h2>
          <p className="mt-5 text-sm leading-relaxed text-tinta/70">
            SETI está fundada y dirigida por{" "}
            <span className="font-semibold text-tinta">
              I.S.C. Salvador Rexa del Razo
            </span>
            , quien ejerce como Fundador y CEO. A la fecha, SETI opera en fase
            de fundación y aún no se encuentra constituida legalmente como
            entidad — lo decimos así de claro porque preferimos ser precisos
            antes que aparentar una estructura que todavía no existe.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-tinta/70">
            Tampoco nos casamos con una tecnología, plataforma o metodología
            como sello distintivo: cada solución se elige en función del
            problema real del cliente, priorizando lo que mejor funcione sobre
            lo que esté de moda.
          </p>
        </Reveal>
      </section>
    </>
  );
}
