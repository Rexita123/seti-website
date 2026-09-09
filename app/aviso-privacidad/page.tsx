import type { Metadata } from "next";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Aviso de Privacidad",
  description:
    "Qué datos recolecta SETI a través de su formulario de contacto y cómo se usan.",
};

export default function AvisoPrivacidadPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 pt-32 pb-20 md:pt-40">
      <Reveal>
        <p className="font-mono text-xs tracking-[0.14em] text-jade uppercase">
          Aviso de privacidad
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold text-balance md:text-5xl">
          Cómo tratamos tus datos
        </h1>

        <div className="mt-8 flex flex-col gap-6 text-sm leading-relaxed text-tinta/70">
          <p>
            SETI está fundada y dirigida por I.S.C. Salvador Rexa del Razo, y
            a la fecha opera en fase de fundación, sin constitución legal
            formal como entidad. Este aviso describe, de forma honesta y
            acorde a ese estado actual, cómo se tratan los datos que nos
            compartes a través del formulario de contacto de este sitio.
          </p>

          <div>
            <h2 className="font-display text-lg font-semibold text-tinta">
              Qué datos recolectamos
            </h2>
            <p className="mt-2">
              Únicamente los que tú decides escribir en el formulario de{" "}
              <a href="/contacto" className="text-jade hover:underline">
                Contacto
              </a>
              : nombre, nombre de tu negocio (opcional), correo electrónico,
              teléfono (opcional), el servicio de tu interés, y el mensaje
              que nos envíes. Este sitio no usa cookies de rastreo ni
              recolecta datos de navegación de forma automática.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-tinta">
              Para qué los usamos
            </h2>
            <p className="mt-2">
              Exclusivamente para responder tu solicitud y, si procede,
              elaborar una cotización personalizada. No se usan para ningún
              otro fin.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-tinta">
              Con quién los compartimos
            </h2>
            <p className="mt-2">
              Con nadie. Tus datos no se venden, rentan ni comparten con
              terceros. El único intermediario técnico es el servicio que
              usamos para procesar el envío del formulario a nuestro correo
              (Resend), que actúa únicamente como mensajero del correo que
              tú nos escribes.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-tinta">
              Cuánto tiempo los conservamos
            </h2>
            <p className="mt-2">
              El tiempo necesario para atender tu solicitud y dar seguimiento
              comercial razonable a partir de ella.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-tinta">
              Tus derechos
            </h2>
            <p className="mt-2">
              Puedes pedirnos en cualquier momento que corrijamos o
              eliminemos la información que nos compartiste, escribiendo a{" "}
              <a
                href="mailto:salvadorrexadelrazo@outlook.com"
                className="text-jade hover:underline"
              >
                salvadorrexadelrazo@outlook.com
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-tinta">
              Cambios a este aviso
            </h2>
            <p className="mt-2">
              Este aviso se actualizará cuando SETI complete su constitución
              legal formal, para reflejar su razón social y domicilio
              fiscal.
            </p>
          </div>

          <p className="text-xs text-tinta/50">
            Última actualización: septiembre de 2026.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
