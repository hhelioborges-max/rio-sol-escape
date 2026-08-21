import { IMG } from "@/lib/images";
import { useEffect, useState } from "react";
import { NAV } from "@/lib/site";
import { WhatsAppLink } from "@/components/WhatsAppButton";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-border/60 bg-background/85 py-2 backdrop-blur-xl"
          : "py-4"
      }`}
    >
      <div className="mx-auto flex max-w-[1220px] items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={IMG.logo}
            alt="Pousada Rio e Sol"
            width={56}
            height={56}
            className={`rounded-full bg-white object-contain transition-all duration-500 ${
              scrolled || open ? "h-11 w-11" : "h-14 w-14 shadow-lg"
            }`}
          />
          <span
            className={`hidden font-display text-lg leading-none tracking-tight sm:block ${
              scrolled || open ? "text-river-deep" : "text-white drop-shadow"
            }`}
          >
            Pousada Rio e Sol
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-[13px] font-medium transition-colors ${
                scrolled
                  ? "text-foreground/75 hover:text-river"
                  : "text-white/85 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
          <WhatsAppLink variant={scrolled ? "solid" : "glass"} className="!px-6 !py-3">
            Consultar disponibilidade
          </WhatsAppLink>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className={`flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-full transition-colors lg:hidden ${
            scrolled || open ? "text-river-deep" : "text-white"
          }`}
        >
          <span
            className={`h-[1.5px] w-5 bg-current transition-transform duration-300 ${open ? "translate-y-[6.5px] rotate-45" : ""}`}
          />
          <span className={`h-[1.5px] w-5 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-[1.5px] w-5 bg-current transition-transform duration-300 ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 lg:hidden ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 pb-7 pt-4">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-border/50 py-4 font-display text-2xl text-river-deep"
            >
              {item.label}
            </a>
          ))}
          <WhatsAppLink variant="solid" className="mt-6 w-full !py-4">
            Consultar disponibilidade
          </WhatsAppLink>
        </nav>
      </div>
    </header>
  );
}
