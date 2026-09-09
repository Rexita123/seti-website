import CtaButton from "@/components/CtaButton";
import Reveal from "@/components/motion/Reveal";

export default function FinalCta() {
  return (
    <section className="border-t border-tinta/10 bg-jade">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <Reveal className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-xl text-balance font-display text-2xl font-bold text-lienzo md:text-3xl">
            ¿Tienes un proceso que ya podría resolverse solo?
          </h2>
          <CtaButton
            href="/contacto"
            className="!bg-lienzo !text-tinta hover:!bg-white"
          >
            Cotización personalizada
          </CtaButton>
        </Reveal>
      </div>
    </section>
  );
}
