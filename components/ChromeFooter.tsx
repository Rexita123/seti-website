"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

// Rutas que se presentan solas, sin el header/footer del sitio.
const SIN_CHROME = ["/tarjeta"];

export default function ChromeFooter() {
  const pathname = usePathname();
  if (SIN_CHROME.includes(pathname)) return null;
  return <Footer />;
}
