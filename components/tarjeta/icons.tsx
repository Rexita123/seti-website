import type { IconoEnlace } from "@/lib/tarjeta";

type Name = IconoEnlace | "contact" | "share";

export function CardIcon({ name, size = 20 }: { name: Name; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true",
  } as const;

  switch (name) {
    case "web":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
          <path
            d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21C9.5 18.4 8.2 15.3 8.2 12S9.5 5.6 12 3Z"
            stroke="currentColor"
            strokeWidth="1.7"
          />
        </svg>
      );
    case "whatsapp":
      return (
        <svg {...common}>
          <path
            d="M12 3a9 9 0 0 0-7.7 13.7L3 21l4.5-1.2A9 9 0 1 0 12 3Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="M9.2 8.4c-.3 1.9 1 3.7 2 4.7s2.8 2.3 4.7 2c.6-.1 1-.8.8-1.4l-.3-.9a.9.9 0 0 0-1-.6l-1 .2-1.8-1.8.2-1a.9.9 0 0 0-.6-1l-.9-.3a1 1 0 0 0-1.3.9Z"
            fill="currentColor"
          />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.7" />
          <path d="m4 7.5 8 5.5 8-5.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path
            d="M6.5 4h3L11 8l-2 1.5a12 12 0 0 0 5 5L15.5 12l4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4.5 6.2 2 2 0 0 1 6.5 4Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "facebook":
      return (
        <svg {...common}>
          <path
            d="M14 8.5h2.5V5.2h-2.7c-2.4 0-3.8 1.5-3.8 3.9V11H7.5v3.3H10V21h3.3v-6.7h2.6l.5-3.3h-3.1V9.4c0-.6.3-.9.9-.9Z"
            fill="currentColor"
          />
        </svg>
      );
    case "instagram":
      return (
        <svg {...common}>
          <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="17" cy="7" r="1" fill="currentColor" />
        </svg>
      );
    case "contact":
      return (
        <svg {...common}>
          <circle cx="12" cy="8.5" r="3.2" stroke="currentColor" strokeWidth="1.7" />
          <path d="M5.5 19.5a6.5 6.5 0 0 1 13 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case "share":
      return (
        <svg {...common}>
          <circle cx="6" cy="12" r="2.4" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="17" cy="6" r="2.4" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="17" cy="18" r="2.4" stroke="currentColor" strokeWidth="1.7" />
          <path d="m8.2 10.9 6.6-3.7M8.2 13.1l6.6 3.7" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      );
    default:
      return null;
  }
}
