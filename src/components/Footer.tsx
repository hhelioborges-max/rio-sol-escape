import logo from "@/assets/LOGO.jpg.asset.json";
import { ADDRESS, DOMAIN, EMAIL, NAV, WHATSAPP_DISPLAY, whatsappLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-river-deep text-white/80">
      <div className="mx-auto grid max-w-[1220px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.2fr_1fr_1fr] lg:py-20">
        <div>
          <img
            src={logo.url}
            alt="Pousada Rio e Sol"
            width={72}
            height={72}
            loading="lazy"
            className="h-18 w-18 rounded-full bg-white object-contain"
          />
          <p className="mt-5 font-display text-2xl text-white">Pousada Rio e Sol</p>
          <p className="mt-3 max-w-[32ch] text-sm leading-relaxed">
            Hospedagem em Ilha Solteira – SP, perto do Rio Paraná.
          </p>
        </div>

        <div className="text-sm leading-relaxed">
          <p className="eyebrow mb-4 text-sun-soft">Endereço</p>
          <p>{ADDRESS.street}</p>
          <p>{ADDRESS.district}</p>
          <p>
            {ADDRESS.city} – {ADDRESS.state}
          </p>
          <p>CEP {ADDRESS.zip}</p>
          <p className="mt-5">
            WhatsApp:{" "}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline decoration-sun decoration-2 underline-offset-4"
            >
              {WHATSAPP_DISPLAY}
            </a>
          </p>
          <p className="mt-1">{DOMAIN}</p>
        </div>

        <div className="text-sm">
          <p className="eyebrow mb-4 text-sun-soft">Navegação</p>
          <ul className="space-y-2.5">
            {NAV.filter((n) => n.label !== "Experiências").map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-6 text-center text-xs tracking-wide text-white/55 sm:px-8">
        © 2026 Pousada Rio e Sol. Todos os direitos reservados.
      </div>
    </footer>
  );
}
