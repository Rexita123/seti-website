# Sitio web SETI

Sitio corporativo de SETI: presenta la empresa, su catálogo de servicios y un formulario
de contacto funcional de punta a punta. No es una tienda en línea ni requiere autenticación.

**En producción:** https://sitio-omega-two.vercel.app (Vercel, URL temporal hasta que exista dominio propio).

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **Lenis** + **GSAP ScrollTrigger** para el smooth scroll y los scroll-reveal
- **React Three Fiber** + **three.js** para el objeto 3D del Hero (carga diferida, `ssr: false`)
- **Resend** para el envío del formulario de contacto

## Puesta en marcha

```bash
npm install
cp .env.local.example .env.local   # y llena los valores (ver la plantilla)
npm run dev                        # http://localhost:3000
```

`npm run build` genera la build de producción; `npm run start` la sirve.

## Variables de entorno

| Variable | Para qué |
|---|---|
| `RESEND_API_KEY` | Envío del formulario de contacto (cuenta gratuita en resend.com) |
| `CONTACT_EMAIL_TO` | Correo que recibe los mensajes del formulario |

Sin estas variables el formulario responde con un error controlado: el sitio no se cae,
solo no puede enviar el correo.

## Estructura

```
app/
  page.tsx                     Inicio: narrativa de una sola pantalla (ver components/home/*)
  servicios/page.tsx           Listado de servicios
  servicios/<slug>/page.tsx    Una página por cada servicio (datos en lib/servicios.ts)
  como-trabajamos/page.tsx     Cómo trabajamos
  nosotros/page.tsx            Nosotros
  contacto/page.tsx            Contacto
  aviso-privacidad/page.tsx    Aviso de Privacidad
  api/contacto/route.ts        Recibe el formulario y envía el correo (Resend)
  icon.tsx, apple-icon.tsx     Favicon generado dinámicamente con next/og (wordmark "S")
  layout.tsx                   Tipografías, metadata, SmoothScrollProvider + Header/Footer
  globals.css                  Tokens de color de marca + CSS base de Lenis
lib/
  servicios.ts                 Fuente única de datos de los servicios
components/
  Header.tsx, Footer.tsx, CtaButton.tsx, ContactForm.tsx
  motion/
    SmoothScrollProvider.tsx   Envuelve la app en Lenis y lo conecta con GSAP ScrollTrigger
    Reveal.tsx                 Wrapper reutilizable de scroll-reveal
  servicios/
    icons.tsx, ServiceDetailTemplate.tsx
  home/
    Hero.tsx, Hero3D.tsx, Company.tsx, ServicesSection.tsx,
    TechSection.tsx, WhyUsSection.tsx, FinalCta.tsx
```

El copy de cada página vive en constantes al inicio de su archivo
(`SERVICIOS`, `DIFERENCIADORES`, `VALORES`, `PASOS`, `CATEGORIAS`): para cambiar texto
no hace falta tocar el layout de los componentes.

## Movimiento y accesibilidad

Todo el movimiento (Lenis, GSAP ScrollTrigger y el Canvas 3D del Hero) respeta
`prefers-reduced-motion: reduce`: se desactiva por completo y el contenido se muestra
directo, sin animación. Verificado con Playwright emulando esa preferencia, incluida
una pasada contra la build de producción (`next build && next start`), no solo `next dev`.

## Estado

Sitio desplegado y en revisión. Pendiente: SEO técnico (`sitemap.xml`, `robots.txt`,
Open Graph) y medición de Lighthouse — tiene más sentido cerrarlo cuando exista el
dominio definitivo.

---

Autor: Salvador Rexa Del Razo
