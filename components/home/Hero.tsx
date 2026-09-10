"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useRef, useState } from "react";
import CtaButton from "@/components/CtaButton";

const Hero3D = dynamic(() => import("./Hero3D"), { ssr: false });

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const sleepTimer = useRef<number | undefined>(undefined);

  const [showCanvas, setShowCanvas] = useState(false);
  const [mounted3d, setMounted3d] = useState(false);
  const [onScreen, setOnScreen] = useState(true);
  const [tabVisible, setTabVisible] = useState(true);
  const [awake, setAwake] = useState(false);

  // Reanima el blob y programa que "repose" 6 s después de la última
  // interacción. En reposo el Canvas deja de dibujar (hilo principal libre).
  const wake = useCallback(() => {
    setAwake(true);
    window.clearTimeout(sleepTimer.current);
    sleepTimer.current = window.setTimeout(() => setAwake(false), 6000);
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    setShowCanvas(!reduced);
    if (reduced) return;

    // El hero 3D (Three.js) no se monta en la carga: hasta que el visitante
    // interactúa se ve solo el degradado. Así la carga inicial no paga el
    // coste del WebGL y el score de rendimiento no se hunde.
    const start = () => {
      setMounted3d(true);
      wake();
    };
    const opts = { passive: true, once: true } as const;
    window.addEventListener("pointerdown", start, opts);
    window.addEventListener("pointermove", start, opts);
    window.addEventListener("touchstart", start, opts);
    window.addEventListener("keydown", start, opts);

    return () => {
      window.clearTimeout(sleepTimer.current);
      window.removeEventListener("pointerdown", start);
      window.removeEventListener("pointermove", start);
      window.removeEventListener("touchstart", start);
      window.removeEventListener("keydown", start);
    };
  }, [wake]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      ([entry]) => setOnScreen(entry.isIntersecting),
      { threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onVis = () => setTabVisible(!document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  const active = showCanvas && mounted3d && onScreen && tabVisible && awake;

  function scrollToServicios(e: React.MouseEvent) {
    e.preventDefault();
    document
      .getElementById("servicios")
      ?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section
      ref={sectionRef}
      onPointerMove={wake}
      className="relative flex min-h-screen items-center overflow-hidden bg-tinta text-lienzo"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_30%,rgba(46,158,110,0.35),transparent_60%)]" />
        {showCanvas && mounted3d && (
          <div className="absolute inset-0 [animation:hero-fade-in_600ms_ease-out]">
            <Hero3D active={active} />
          </div>
        )}
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-32">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-menta">
          SETI · Soluciones Empresariales Tecnológicas y de Innovación
        </p>
        <h1 className="mt-6 max-w-3xl text-balance font-display text-5xl font-bold leading-[1.05] md:text-7xl">
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
