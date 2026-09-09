import type { IconKey } from "@/lib/servicios";

export function ServiceIcon({ icon, size = 34 }: { icon: IconKey; size?: number }) {
  switch (icon) {
    case "browser":
      return <IconBrowser size={size} />;
    case "app":
      return <IconApp size={size} />;
    case "gear":
      return <IconGear size={size} />;
    case "bolt":
      return <IconBolt size={size} />;
    case "link":
      return <IconLink size={size} />;
    case "spark":
      return <IconSpark size={size} />;
    case "compass":
      return <IconCompass size={size} />;
    case "cap":
      return <IconCap size={size} />;
    default:
      return null;
  }
}

function IconBrowser({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="4.5" width="18" height="15" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 8.5h18" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="6" cy="6.5" r="0.6" fill="currentColor" />
      <circle cx="8" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

function IconApp({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="3.5" width="12" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <rect x="8.5" y="7" width="12" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function IconGear({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 3.5v2.3M12 18.2v2.3M20.5 12h-2.3M5.8 12H3.5M17.8 6.2l-1.6 1.6M7.8 16.2l-1.6 1.6M17.8 17.8l-1.6-1.6M7.8 7.8 6.2 6.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconBolt({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M13 3 5 13.5h5.5L11 21l8-11.5h-5.5L13 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconLink({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M9.5 14.5 14.5 9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path
        d="M11 6.5 12.8 4.7a3.3 3.3 0 1 1 4.6 4.6L15.5 11"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M13 17.5 11.2 19.3a3.3 3.3 0 1 1-4.6-4.6L8.5 13"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconSpark({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3c.6 3.4 2.1 4.9 5.5 5.5C14.1 9.1 12.6 10.6 12 14c-.6-3.4-2.1-4.9-5.5-5.5C9.9 7.9 11.4 6.4 12 3Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M18 14.5c.3 1.7 1 2.4 2.7 2.7-1.7.3-2.4 1-2.7 2.7-.3-1.7-1-2.4-2.7-2.7 1.7-.3 2.4-1 2.7-2.7Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconCompass({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="m14.5 9.5-1.7 5.2a1 1 0 0 1-.6.6L6.9 17l1.7-5.2a1 1 0 0 1 .6-.6L14.5 9.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconCap({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M2.5 9 12 5l9.5 4-9.5 4-9.5-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M6.5 11v4c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5v-4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M21.5 9v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
