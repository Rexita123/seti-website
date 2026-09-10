"use client";

import { useState } from "react";
import { CardIcon } from "./icons";

export default function ShareButton({ titulo }: { titulo: string }) {
  const [copiado, setCopiado] = useState(false);

  async function compartir() {
    const url = window.location.href;

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title: titulo, url });
      } catch {
        // el usuario canceló el diálogo de compartir — sin acción
      }
      return;
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch {
      // navegador sin clipboard API — sin acción
    }
  }

  return (
    <button
      type="button"
      onClick={compartir}
      className="flex w-full items-center justify-center gap-2 rounded-xl border border-tinta/20 px-6 py-3.5 text-sm font-semibold text-tinta transition-colors hover:border-tinta/40"
    >
      <CardIcon name="share" />
      {copiado ? "Enlace copiado" : "Compartir tarjeta"}
    </button>
  );
}
