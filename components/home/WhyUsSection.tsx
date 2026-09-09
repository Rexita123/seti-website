import Reveal from "@/components/motion/Reveal";

const DIFERENCIADORES = [
  {
    titulo: "Precio accesible",
    texto:
      "La accesibilidad no es un descuento de venta: es parte de cómo diseñamos cada solución.",
  },
  {
    titulo: "Solidez a largo plazo",
    texto:
      "Entregamos lo que sigue funcionando dentro de varios años, aunque tome un poco más de tiempo.",
  },
  {
    titulo: "Honestidad, siempre",
    texto:
      "Nunca prometemos una capacidad que no existe. Si algo no aplica a tu negocio, te lo decimos claro.",
  },
  {
    titulo: "Capacitación real",
    texto:
      "Te dejamos sabiendo usar lo que construimos, para que dependas cada vez menos de un tercero.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-jade">
          Por qué elegir SETI
        </p>
        <h2 className="mt-4 max-w-xl text-balance font-display text-3xl font-bold md:text-4xl">
          No competimos por ser los más baratos ni los más grandes.
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        {DIFERENCIADORES.map((item, i) => (
          <Reveal key={item.titulo} delay={i * 0.06}>
            <h3 className="font-display text-lg font-semibold text-jade">
              {item.titulo}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-tinta/70">
              {item.texto}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
