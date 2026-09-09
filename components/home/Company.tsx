import Reveal from "@/components/motion/Reveal";

export default function Company() {
  return (
    <section className="border-t border-tinta/10 bg-white">
      <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-jade">
            Compañía
          </p>
          <h2 className="mt-4 max-w-2xl text-balance font-display text-3xl font-bold md:text-4xl">
            Nacimos de una brecha, no de una moda tecnológica.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-tinta/70">
            Un número significativo de negocios enfrenta problemas operativos
            que la tecnología ya podría resolver, pero no lo hacen por falta
            de recursos, conocimiento técnico o acceso a soluciones
            adecuadas a su realidad. SETI existe para cerrar esa brecha, sin
            limitarse a un sector o tamaño de negocio en particular.
          </p>
          <a
            href="/nosotros"
            className="mt-6 inline-block text-sm font-semibold text-jade hover:underline"
          >
            Conoce más sobre SETI →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
