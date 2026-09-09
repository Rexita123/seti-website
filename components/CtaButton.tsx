import Link from "next/link";
import type { ReactNode } from "react";

type CtaButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function CtaButton({
  href,
  children,
  variant = "primary",
  className = "",
}: CtaButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-sm px-6 py-3 text-sm font-semibold tracking-wide transition-colors";

  const styles =
    variant === "primary"
      ? "bg-azul text-lienzo hover:bg-azul/90"
      : "border border-tinta/20 text-tinta hover:border-tinta/40";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
