import type { ReactNode } from "react";
import { whatsappLink } from "@/lib/site";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 active:scale-[0.98]";

const variants = {
  solid:
    "bg-river text-white px-7 py-3.5 text-sm shadow-[0_10px_30px_-12px_oklch(0.32_0.07_245/0.6)] hover:bg-river-deep hover:shadow-[0_16px_40px_-14px_oklch(0.32_0.07_245/0.7)]",
  sun: "bg-sun text-accent-foreground px-8 py-4 text-sm hover:brightness-105 shadow-[0_14px_36px_-14px_oklch(0.79_0.13_76/0.75)]",
  glass:
    "border border-white/50 bg-white/10 text-white px-7 py-3.5 text-sm backdrop-blur-md hover:bg-white/20",
  outline:
    "border border-river/30 text-river px-7 py-3.5 text-sm hover:border-river hover:bg-river/5",
  ghostLine:
    "text-river text-sm font-semibold underline decoration-sun decoration-2 underline-offset-[6px] hover:decoration-river",
};

export function WhatsAppLink({
  children,
  variant = "solid",
  message,
  className = "",
}: {
  children: ReactNode;
  variant?: keyof typeof variants;
  message?: string;
  className?: string;
}) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

export function WhatsAppFloating() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Pousada Rio e Sol no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_12px_28px_-8px_oklch(0.62_0.15_150/0.65)] transition-transform duration-300 hover:scale-105 sm:bottom-7 sm:right-7"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0 0 12.04 2Zm5.8 14.06c-.25.7-1.44 1.34-1.98 1.39-.54.05-1.05.24-3.5-.73s-4.03-3.5-4.15-3.66c-.12-.17-.98-1.3-.98-2.49s.62-1.77.84-2.01c.22-.25.48-.31.64-.31.17 0 .34 0 .49.01.16.01.37-.06.57.44.2.5.7 1.71.76 1.83.06.13.1.28.02.44-.08.17-.13.27-.25.42-.13.14-.27.32-.38.43-.12.12-.25.26-.11.5.14.25.62 1.03 1.34 1.67.92.82 1.7 1.08 1.94 1.2.25.13.39.11.53-.07.15-.17.62-.72.79-.97.17-.25.34-.2.57-.12.23.09 1.45.69 1.7.81.25.13.41.19.47.29.06.1.06.61-.19 1.31Z" />
      </svg>
    </a>
  );
}
