import Reveal from "@/components/motion/Reveal";

const CATEGORIAS = [
  {
    titulo: "Web y aplicaciones",
    texto: "Sitios y herramientas a la medida, pensados para tu proceso real.",
  },
  {
    titulo: "Sistemas y automatización",
    texto:
      "Sistemas empresariales y automatización de tareas que hoy le quitan tiempo a tu equipo.",
  },
  {
    titulo: "Integraciones y APIs",
    texto: "Conectamos las herramientas que ya usas para que no captures dos veces.",
  },
  {
    titulo: "IA aplicada",
    texto: "Inteligencia artificial donde de verdad aporta valor a tu operación.",
  },
];

export default function TechSection() {
  return (
    <section className="border-t border-tinta/10 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-jade">
            Tecnologías
          </p>
          <h2 className="mt-4 max-w-2xl text-balance font-display text-3xl font-bold md:text-4xl">
            Elegimos la herramienta según el problema, no al revés.
          </h2>
          <p className="mt-5 max-w-2xl text-tinta/70">
            No nos casamos con una tecnología, plataforma o metodología como
            sello distintivo. Estas son las categorías donde trabajamos hoy.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {CATEGORIAS.map((cat, i) => (
            <Reveal key={cat.titulo} delay={i * 0.06}>
              <h3 className="font-display text-lg font-semibold text-jade">
                {cat.titulo}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-tinta/70">
                {cat.texto}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
