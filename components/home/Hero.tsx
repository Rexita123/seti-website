"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import CtaButton from "@/components/CtaButton";

const Hero3D = dynamic(() => import("./Hero3D"), { ssr: false });

export default function Hero() {
  const [showCanvas, setShowCanvas] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    setShowCanvas(!reduced);
  }, []);

  function scrollToServicios(e: React.MouseEvent) {
    e.preventDefault();
    document
      .getElementById("servicios")
      ?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-tinta text-lienzo">
      <div className="pointer-events-none absolute inset-0">
        {showCanvas ? (
          <Hero3D />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_30%,rgba(46,158,110,0.35),transparent_60%)]" />
        )}
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-32">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-menta">
          SETI · Soluciones Empresariales Tecnológicas y de Innovación
        </p>
        <h1
          ref={titleRef}
          className="mt-6 max-w-3xl text-balance font-display text-5xl font-bold leading-[1.05] md:text-7xl"
        >
          Tecnología accesible para negocios que quieren resolver problemas
          reales.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-lienzo/70">
          Diseñamos soluciones a la medida, honestas sobre lo que pueden
          lograr, y acompañadas de la capacitación necesaria para que no
          vuelvas a depender por completo de un tercero.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <CtaButton href="/contacto">Cotización personalizada</CtaButton>
          <button
            type="button"
            onClick={scrollToServicios}
            className="inline-flex items-center justify-center rounded-sm border border-lienzo/30 px-6 py-3 text-sm font-semibold text-lienzo transition-colors hover:border-lienzo/60"
          >
            Ver servicios
          </button>
        </div>
      </div>
    </section>
  );
}
