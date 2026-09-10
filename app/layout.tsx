import type { Metadata } from "next";
import { Fraunces, Karla, IBM_Plex_Mono } from "next/font/google";
import Header from "@/components/Header";
import ChromeFooter from "@/components/ChromeFooter";
import SmoothScrollProvider from "@/components/motion/SmoothScrollProvider";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "SETI — Soluciones Empresariales Tecnológicas y de Innovación",
    template: "%s · SETI",
  },
  description:
    "SETI es la opción tecnológica accesible y confiable para negocios pequeños que quieren resolver problemas reales de operación, con soluciones a la medida y acompañamiento honesto.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${karla.variable} ${plexMono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col font-sans antialiased">
        <SmoothScrollProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <ChromeFooter />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
