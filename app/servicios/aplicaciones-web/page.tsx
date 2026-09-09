import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/servicios/ServiceDetailTemplate";
import { getServicio } from "@/lib/servicios";

const servicio = getServicio("aplicaciones-web")!;

export const metadata: Metadata = {
  title: servicio.nombre,
  description: servicio.resumen,
};

export default function Page() {
  return <ServiceDetailTemplate servicio={servicio} />;
}
