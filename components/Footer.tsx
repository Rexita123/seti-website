import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/como-trabajamos", label: "Cómo trabajamos" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

const CONTACT_EMAIL = "salvadorrexadelrazo@outlook.com";
const CONTACT_PHONE_DISPLAY = "771 343 8109";
const CONTACT_PHONE_TEL = "+527713438109";

// Pon aquí el link real cuando exista la cuenta — mientras esté vacío, el ícono no se muestra.
const SOCIAL_LINKS = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/setisolucionesempresariales/",
    icon: <IconFacebook />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/setisolucionesempresariales/",
    icon: <IconInstagram />,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const activeSocial = SOCIAL_LINKS.filter((s) => s.href);

  return (
    <footer className="border-t border-tinta/10 bg-lienzo">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1.3fr_1fr_1fr]">
        <div className="flex flex-col gap-2">
          <span className="font-display text-xl font-bold text-jade">SETI</span>
          <span className="max-w-xs text-sm text-tinta/60">
            Soluciones Empresariales Tecnológicas y de Innovación.
          </span>
        </div>

        <nav className="flex flex-col gap-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-tinta/70 hover:text-tinta"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-2">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-sm text-tinta/70 hover:text-tinta"
          >
            {CONTACT_EMAIL}
          </a>
          <a
            href={`tel:${CONTACT_PHONE_TEL}`}
            className="text-sm text-tinta/70 hover:text-tinta"
          >
            {CONTACT_PHONE_DISPLAY}
          </a>

          {activeSocial.length > 0 && (
            <div className="mt-2 flex gap-3">
              {activeSocial.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="text-tinta/50 hover:text-jade"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-tinta/10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-6 text-xs leading-relaxed text-tinta/50">
          <span>
            Derechos Reservados © {year} SETI — Soluciones Empresariales
            Tecnológicas y de Innovación. Empresa en fase de fundación, aún
            sin constitución legal formal.
          </span>
          <Link href="/aviso-privacidad" className="shrink-0 hover:text-tinta">
            Aviso de privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
}

function IconFacebook() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M14 8.5h2.5V5.2h-2.7c-2.4 0-3.8 1.5-3.8 3.9V11H7.5v3.3H10V21h3.3v-6.7h2.6l.5-3.3h-3.1V9.4c0-.6.3-.9.9-.9Z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17" cy="7" r="1" fill="currentColor" />
    </svg>
  );
}
