export type IconKey =
  | "browser"
  | "app"
  | "gear"
  | "bolt"
  | "link"
  | "spark"
  | "compass"
  | "cap";

export type Servicio = {
  slug: string;
  nombre: string;
  resumen: string;
  descripcionLarga: string[];
  queIncluye: string[];
  paraQuienEs: string;
  icon: IconKey;
  gradient: string;
  imagen: string;
};

export const SERVICIOS: Servicio[] = [
  {
    slug: "desarrollo-web",
    nombre: "Desarrollo de sitios web",
    resumen:
      "Sitios que representan bien a tu negocio y funcionan como deben: rápidos, claros y fáciles de encontrar.",
    descripcionLarga: [
      "Un sitio web no es una tarjeta de presentación digital nada más — es el lugar donde un cliente potencial decide si confiar en tu negocio antes de escribirte. Lo construimos pensando en eso: que cargue rápido, que se vea bien en cualquier pantalla, y que sea fácil de encontrar en Google.",
      "Desde una página de presentación de una sola pantalla hasta un sitio con varias secciones y un formulario de contacto — el alcance se ajusta a lo que tu negocio realmente necesita, no al revés.",
    ],
    queIncluye: [
      "Diseño a la medida de tu marca",
      "Sitio responsivo (se ve bien en celular y computadora)",
      "Optimización básica para buscadores (SEO técnico)",
      "Formulario de contacto conectado a tu correo",
    ],
    paraQuienEs:
      "Negocios que todavía no tienen presencia web, o que la tienen pero ya no representa lo que son hoy.",
    icon: "browser",
    gradient: "from-jade to-tinta",
    imagen: "/servicios/desarrollo-web.jpg",
  },
  {
    slug: "aplicaciones-web",
    nombre: "Desarrollo de aplicaciones web",
    resumen:
      "Herramientas a la medida que corren en el navegador, sin instalar nada, para procesos que ya le quedaron chicos a una hoja de cálculo.",
    descripcionLarga: [
      "Cuando un proceso de tu negocio ya se volvió demasiado complejo para manejarlo en Excel o WhatsApp, pero tampoco necesitas un sistema empresarial completo, una aplicación web a la medida suele ser el punto intermedio correcto.",
      "Se construye para resolver ese proceso específico — sin funciones de más que nunca vas a usar, y sin depender de que cada usuario instale algo en su computadora.",
    ],
    queIncluye: [
      "Análisis del proceso actual antes de construir nada",
      "Interfaz simple, pensada para quien la va a usar todos los días",
      "Acceso desde cualquier navegador",
      "Capacitación incluida para tu equipo",
    ],
    paraQuienEs:
      "Negocios con un proceso repetitivo que hoy se maneja manualmente entre varias personas.",
    icon: "app",
    gradient: "from-menta to-jade",
    imagen: "/servicios/aplicaciones-web.jpg",
  },
  {
    slug: "sistemas-a-la-medida",
    nombre: "Sistemas empresariales a la medida",
    resumen:
      "Cuando ningún software genérico se ajusta a cómo realmente trabaja tu negocio, construimos algo que sí se ajusta.",
    descripcionLarga: [
      "El software genérico está diseñado para el negocio promedio — no para el tuyo. Cuando eso empieza a generar más trabajo del que ahorra (adaptar tu proceso al sistema, en vez de al revés), es momento de construir algo propio.",
      "Un sistema a la medida se diseña alrededor de cómo tu negocio realmente opera hoy, con espacio para crecer sin tener que rehacerlo desde cero.",
    ],
    queIncluye: [
      "Levantamiento a fondo de tu operación actual",
      "Arquitectura pensada para crecer, no solo para funcionar hoy",
      "Documentación técnica del sistema",
      "Acompañamiento después de la entrega",
    ],
    paraQuienEs:
      "Negocios que ya intentaron con software genérico y siguen forzando su operación para que quepa en él.",
    icon: "gear",
    gradient: "from-jade to-tinta",
    imagen: "/servicios/sistemas-a-la-medida.jpg",
  },
  {
    slug: "automatizacion",
    nombre: "Automatización de procesos",
    resumen:
      "Identificamos las tareas repetitivas que le quitan tiempo a tu equipo y las resolvemos con tecnología, no con más personal.",
    descripcionLarga: [
      "Hay tareas que se repiten exactamente igual todos los días — capturar datos, mandar el mismo correo, mover información entre dos programas. Ahí es donde la automatización tiene sentido: no reemplaza a tu equipo, le quita lo repetitivo para que se enfoque en lo que sí requiere criterio humano.",
      "Empezamos identificando qué tarea específica te está costando más tiempo, y resolvemos esa antes de pensar en automatizar todo lo demás.",
    ],
    queIncluye: [
      "Diagnóstico de qué automatizar primero (y qué no vale la pena)",
      "Automatización conectada a las herramientas que ya usas",
      "Monitoreo para detectar cuando algo falla",
      "Documentación de cómo funciona, para que no dependa solo de nosotros",
    ],
    paraQuienEs:
      "Negocios donde una o dos personas pierden horas cada semana en tareas que se repiten igual.",
    icon: "bolt",
    gradient: "from-menta to-jade",
    imagen: "/servicios/automatizacion.jpg",
  },
  {
    slug: "integraciones",
    nombre: "Integración de sistemas y APIs",
    resumen:
      "Conectamos las herramientas que ya usas entre sí, para que la información fluya sola en vez de capturarse dos veces.",
    descripcionLarga: [
      "Es común que un negocio termine usando varias herramientas — una para ventas, otra para inventario, otra para contabilidad — que no se hablan entre sí. El resultado: alguien captura la misma información dos o tres veces, y los datos casi nunca cuadran entre sistemas.",
      "Conectamos esas herramientas directamente, para que la información se mueva automáticamente entre ellas.",
    ],
    queIncluye: [
      "Revisión de qué sistemas necesitas conectar",
      "Integración vía las APIs que cada plataforma ofrezca",
      "Validación de que los datos lleguen correctos",
      "Alertas si una conexión llega a fallar",
    ],
    paraQuienEs:
      "Negocios que ya usan varias herramientas digitales, pero funcionan como islas separadas.",
    icon: "link",
    gradient: "from-jade to-tinta",
    imagen: "/servicios/integraciones.jpg",
  },
  {
    slug: "ia-asistentes-virtuales",
    nombre: "Soluciones con inteligencia artificial y asistentes virtuales",
    resumen: "IA donde realmente aporta valor a tu operación diaria, no porque esté de moda.",
    descripcionLarga: [
      "No toda tarea necesita inteligencia artificial, y te lo decimos así de claro si es tu caso. Donde sí aporta — responder preguntas frecuentes de clientes, clasificar información, generar primeros borradores de algo repetitivo — la implementamos de forma que realmente ahorre tiempo, no que solo se vea impresionante en una demo.",
      "Siempre partimos del problema real de tu negocio, no de la tecnología que queremos usar.",
    ],
    queIncluye: [
      "Evaluación honesta de si tu caso realmente necesita IA",
      "Asistente virtual conectado a la información real de tu negocio",
      "Ajustes basados en cómo lo usan tus clientes o tu equipo",
      "Capacitación para que tu equipo sepa operarlo y ajustarlo",
    ],
    paraQuienEs:
      "Negocios con un volumen de preguntas o tareas repetitivas que hoy responde una persona manualmente.",
    icon: "spark",
    gradient: "from-menta to-jade",
    imagen: "/servicios/ia-asistentes-virtuales.jpg",
  },
  {
    slug: "consultoria-tecnologica",
    nombre: "Consultoría tecnológica",
    resumen:
      "Antes de construir algo, te ayudamos a decidir si de verdad lo necesitas y cuál es la mejor forma de resolverlo.",
    descripcionLarga: [
      "A veces la respuesta correcta no es construir algo nuevo — es ajustar una herramienta que ya tienes, o simplemente cambiar un proceso. La consultoría existe para esa decisión: entender el problema a fondo antes de recomendar una solución.",
      "El resultado es una recomendación clara, con las ventajas y desventajas de cada opción, para que decidas con información real.",
    ],
    queIncluye: [
      "Diagnóstico del problema u oportunidad concreta",
      "Comparación honesta de alternativas (incluyendo no hacer nada, si aplica)",
      "Recomendación por escrito",
      "Sin compromiso de que el siguiente paso sea contratarnos",
    ],
    paraQuienEs:
      "Negocios que no están seguros de qué necesitan, o que quieren una segunda opinión antes de invertir.",
    icon: "compass",
    gradient: "from-jade to-tinta",
    imagen: "/servicios/consultoria-tecnologica.jpg",
  },
  {
    slug: "capacitacion-tecnologica",
    nombre: "Capacitación tecnológica",
    resumen:
      "Te dejamos sabiendo operar lo que construimos, para que tu negocio dependa cada vez menos de un tercero.",
    descripcionLarga: [
      "De poco sirve una solución que nadie en tu equipo sabe usar sin llamarnos cada vez. Por eso la capacitación no es un extra — es parte de cómo entregamos cualquier proyecto.",
      "También la ofrecemos por separado, para equipos que ya tienen una herramienta pero nunca aprendieron a sacarle provecho real.",
    ],
    queIncluye: [
      "Sesiones prácticas con tu equipo, no solo un manual",
      "Material de referencia para consultar después",
      "Enfoque en lo que tu equipo realmente va a usar",
      "Espacio para preguntas específicas de tu operación",
    ],
    paraQuienEs:
      "Equipos que ya tienen una herramienta o sistema, pero no lo usan a su máximo potencial.",
    icon: "cap",
    gradient: "from-menta to-jade",
    imagen: "/servicios/capacitacion-tecnologica.jpg",
  },
];

export function getServicio(slug: string): Servicio | undefined {
  return SERVICIOS.find((s) => s.slug === slug);
}
