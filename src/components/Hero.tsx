import { useEffect, useState } from "react";
import m1 from "@/assets/MOSAICO_1.jpg.asset.json";
import m2 from "@/assets/MOSAICO_2.jpg.asset.json";
import m3 from "@/assets/MOSAICO_3.jpg.asset.json";
import { WhatsAppLink } from "@/components/WhatsAppButton";

const frames = [
  {
    src: m2.url,
    alt: "Pôr do sol na Prainha de Ilha Solteira, às margens do Rio Paraná",
    position: "22% 42%",
  },
  { src: m1.url, alt: "Lazer em família junto à natureza em Ilha Solteira", position: "50% 45%" },
  { src: m3.url, alt: "Hospede-se às margens do Rio Paraná, em Ilha Solteira", position: "45% 40%" },
];

export function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setActive((i) => (i + 1) % frames.length), 6500);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden bg-river-deep">
      {frames.map((frame, i) => (
        <img
          key={frame.src}
          src={frame.src}
          alt={frame.alt}
          fetchPriority={i === 0 ? "high" : "low"}
          loading={i === 0 ? "eager" : "lazy"}
          decoding="async"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[2000ms] ease-in-out ${
            active === i ? "opacity-100" : "opacity-0"
          }`}
          style={{
            objectPosition: frame.position,
            transform: active === i ? "scale(1.05)" : "scale(1)",
            transition: "opacity 2s ease-in-out, transform 9s ease-out",
          }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-river-deep/90 via-river-deep/30 to-river-deep/55" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-river-deep/55 to-transparent" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1220px] flex-col justify-end px-5 pb-20 pt-32 sm:px-8 sm:pb-24 lg:pb-28">
        <p className="eyebrow text-sun-soft">Pousada Rio e Sol</p>
        <h1 className="mt-5 max-w-[19ch] text-[clamp(2.6rem,8.5vw,5.6rem)] leading-[0.98] text-white">
          Entre o rio, o sol e o seu descanso.
        </h1>
        <p className="mt-6 max-w-[46ch] text-[0.98rem] leading-relaxed text-white/85 sm:text-lg">
          Uma hospedagem acolhedora em Ilha Solteira para quem busca tranquilidade, natureza e bons
          momentos.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <WhatsAppLink variant="sun" className="w-full sm:w-auto">
            Consultar disponibilidade
          </WhatsAppLink>
          <a
            href="#a-pousada"
            className="inline-flex w-full items-center justify-center rounded-full border border-white/50 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/15 sm:w-auto"
          >
            Conhecer a pousada
          </a>
        </div>

        <div className="mt-12 flex items-center gap-4">
          <span className="h-[1px] w-10 bg-sun/80" />
          <span className="text-[11px] font-medium tracking-[0.22em] text-white/70 uppercase">
            Ilha Solteira • São Paulo
          </span>
        </div>
      </div>
    </section>
  );
}
