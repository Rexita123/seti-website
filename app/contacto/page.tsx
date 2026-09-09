import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Cuéntanos qué necesita tu negocio. Te respondemos con una cotización personalizada.",
};

export default function ContactoPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 pt-32 pb-16 md:pt-40 md:pb-24">
      <Reveal>
        <p className="font-mono text-xs tracking-[0.14em] text-jade uppercase">
          Contacto
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold text-balance md:text-5xl">
          Cotización personalizada
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-tinta/70">
          No manejamos precios fijos porque cada negocio necesita algo
          distinto. Cuéntanos qué te está costando tiempo o dinero, y te
          respondemos directamente.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-10">
        <ContactForm />
        <p className="mt-4 text-xs text-tinta/50">
          Al enviar este formulario aceptas nuestro{" "}
          <Link href="/aviso-privacidad" className="text-jade hover:underline">
            aviso de privacidad
          </Link>
          .
        </p>
      </Reveal>
    </section>
  );
}
