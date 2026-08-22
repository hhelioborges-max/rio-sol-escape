import { IMG } from "@/lib/images";
import { createFileRoute } from "@tanstack/react-router";


import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { Gallery } from "@/components/Gallery";
import { WhatsAppFloating, WhatsAppLink } from "@/components/WhatsAppButton";
import { ADDRESS, EMAIL, SITE_URL, MAPS_EMBED, MAPS_URL, WHATSAPP_DISPLAY, whatsappLink } from "@/lib/site";

const TITLE = "Pousada Rio e Sol | Hospedagem em Ilha Solteira - SP";
const DESCRIPTION =
  "Hospede-se na Pousada Rio e Sol em Ilha Solteira - SP. Conforto, tranquilidade, natureza e experiências próximas ao Rio Paraná. Consulte disponibilidade.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL + "/" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:image", content: SITE_URL + IMG.prainhaPorDoSol },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: SITE_URL + IMG.prainhaPorDoSol },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LodgingBusiness",
          name: "Pousada Rio e Sol",
          description: DESCRIPTION,
          url: "https://pousadarioesol.com.br",
          telephone: "+5519998844848",
          image: [SITE_URL + IMG.prainhaPorDoSol, SITE_URL + IMG.fachada, SITE_URL + IMG.patio],
          address: {
            "@type": "PostalAddress",
            streetAddress: "R. Praia do Forte, 31 - Portal da Praia",
            addressLocality: "Ilha Solteira",
            addressRegion: "SP",
            postalCode: "15385-000",
            addressCountry: "BR",
          },
          amenityFeature: [
            { "@type": "LocationFeatureSpecification", name: "Ar-condicionado", value: true },
            { "@type": "LocationFeatureSpecification", name: "TV", value: true },
            { "@type": "LocationFeatureSpecification", name: "Frigobar", value: true },
            { "@type": "LocationFeatureSpecification", name: "Banheiro privativo", value: true },
          ],
        }),
      },
    ],
  }),
  component: Home,
});

const experiencias = [
  {
    n: "01",
    title: "Rio Paraná",
    text: "Água, natureza e paisagens que fazem parte da identidade de Ilha Solteira.",
    img: IMG.rioNatureza,
    alt: "Rio Paraná ao anoitecer em Ilha Solteira",
  },
  {
    n: "02",
    title: "Pesca",
    text: "Um destino conhecido por quem aprecia pesca e experiências ligadas ao rio.",
    img: IMG.pescaRio,
    alt: "Pescador às margens do rio ao amanhecer",
  },
  {
    n: "03",
    title: "Família & descanso",
    text: "Dias mais tranquilos para aproveitar a cidade e criar bons momentos.",
    img: IMG.volei,
    alt: "Vôlei de praia na Prainha de Ilha Solteira",
  },
];

const quarto = {
  img: IMG.camas,
  alt: "Quarto da Pousada Rio e Sol com duas camas",
  name: "Quarto Rio e Sol",
  desc: "Ambiente simples e bem cuidado, pensado para uma estadia tranquila em Ilha Solteira.",
  features: ["Ar-condicionado", "TV", "Frigobar", "Armário", "Banheiro privativo"],
};

const detalhes = [
  { img: IMG.arCondicionado, alt: "Ar-condicionado no quarto", label: "Ar-condicionado" },
  { img: IMG.armario, alt: "Armário e TV no quarto", label: "Armário e TV" },
  { img: IMG.frigobar, alt: "Frigobar no quarto", label: "Frigobar" },
  { img: IMG.banheiro, alt: "Banheiro privativo do quarto", label: "Banheiro privativo" },
];

const galeria = [
  { src: IMG.fachada, alt: "Fachada da Pousada Rio e Sol", span: "aspect-[4/5] lg:col-span-2 lg:aspect-[16/11]" },
  { src: IMG.camas, alt: "Quarto com duas camas" },
  { src: IMG.patio, alt: "Pátio interno da pousada" },
  { src: IMG.prainhaPorDoSol, alt: "Pôr do sol na Prainha de Ilha Solteira" },
  { src: IMG.pescaDourado, alt: "Dourado pescado no Rio Paraná" },
  { src: IMG.banheiro, alt: "Armário e banheiro do quarto" },
  { src: IMG.portalIlha, alt: "Portal de entrada das praias de Ilha Solteira" },
  { src: IMG.patio2, alt: "Área interna com escada e jardim" },
  { src: IMG.pesca, alt: "Pesca ao pôr do sol" },
  { src: IMG.basquete, alt: "Basquete na Prainha de Ilha Solteira" },
  { src: IMG.rioAnoitecer, alt: "Vista do Rio Paraná ao anoitecer" },
];

function SunWave({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 24" aria-hidden="true" className={className}>
      <path
        d="M0 14c12-9 24-9 36 0s24 9 36 0 24-9 36 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <Hero />

        {/* APRESENTAÇÃO */}
        <section id="a-pousada" className="mx-auto max-w-[1220px] px-5 py-24 sm:px-8 lg:py-36">
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            <Reveal>
              <p className="eyebrow text-river">Bem-vindo à Rio e Sol</p>
              <h2 className="mt-6 text-[clamp(2.1rem,5.4vw,3.6rem)] leading-[1.03] text-river-deep">
                Um lugar para desacelerar.
              </h2>
              <SunWave className="mt-7 h-4 w-28 text-sun" />
              <div className="mt-7 space-y-5 text-[0.98rem] leading-[1.85] text-muted-foreground sm:text-[1.05rem]">
                <p>
                  Em Ilha Solteira, a Pousada Rio e Sol recebe quem procura uma hospedagem tranquila,
                  acolhedora e próxima às experiências que tornam a região especial.
                </p>
                <p>
                  Seja para descansar, passar alguns dias com a família, conhecer Ilha Solteira ou
                  aproveitar a pesca e as paisagens do Rio Paraná, aqui você encontra um ponto de
                  apoio para aproveitar a cidade no seu ritmo.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120} className="relative">
              <img
                src={IMG.fachada}
                alt="Fachada da Pousada Rio e Sol, em Ilha Solteira"
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
              />
              <img
                src={IMG.patio}
                alt="Pátio interno da Pousada Rio e Sol"
                loading="lazy"
                decoding="async"
                className="absolute -bottom-8 -left-6 hidden w-[42%] border-8 border-background object-cover lg:block"
              />
            </Reveal>
          </div>
        </section>

        {/* ACOMODAÇÕES */}
        <section id="acomodacoes" className="bg-secondary py-24 lg:py-36">
          <div className="mx-auto max-w-[1220px] px-5 sm:px-8">
            <Reveal className="max-w-[52ch]">
              <p className="eyebrow text-river">Acomodações</p>
              <h2 className="mt-6 text-[clamp(2.1rem,5.4vw,3.6rem)] leading-[1.03] text-river-deep">
                Seu espaço para descansar.
              </h2>
              <p className="mt-6 text-[1.02rem] leading-relaxed text-muted-foreground">
                Ambientes preparados para proporcionar uma estadia tranquila em Ilha Solteira.
              </p>
            </Reveal>

            <Reveal className="mt-14 grid gap-10 bg-card lg:grid-cols-2 lg:gap-0">
              <img
                src={quarto.img}
                alt={quarto.alt}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover lg:aspect-auto lg:h-full"
              />
              <div className="flex flex-col justify-center px-6 pb-10 lg:px-14 lg:py-16">
                <h3 className="font-display text-3xl text-river-deep lg:text-4xl">{quarto.name}</h3>
                <p className="mt-4 text-[0.98rem] leading-relaxed text-muted-foreground">
                  {quarto.desc}
                </p>
                <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-river-deep">
                  {quarto.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-sun" />
                      {f}
                    </li>
                  ))}
                </ul>
                <WhatsAppLink
                  variant="solid"
                  className="mt-10 self-start"
                  message="Olá! Encontrei a Pousada Rio e Sol pelo site e gostaria de consultar disponibilidade para hospedagem."
                >
                  Consultar este quarto
                </WhatsAppLink>
              </div>
            </Reveal>

            <div className="mt-3 grid grid-cols-2 gap-3 lg:grid-cols-4">
              {detalhes.map((d, i) => (
                <Reveal key={d.label} delay={i * 90} as="figure" className="group bg-card">
                  <img
                    src={d.img}
                    alt={d.alt}
                    loading="lazy"
                    decoding="async"
                    className="aspect-square w-full object-cover"
                  />
                  <figcaption className="px-4 py-4 text-xs font-semibold tracking-[0.14em] text-river-deep uppercase">
                    {d.label}
                  </figcaption>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* TRANSIÇÃO VISUAL */}
        <section className="relative h-[78svh] overflow-hidden lg:h-[88svh]">
          <div
            className="absolute inset-0 bg-cover bg-center lg:bg-fixed"
            style={{ backgroundImage: `url(${IMG.rioAnoitecer})` }}
            role="img"
            aria-label="Pôr do sol às margens do Rio Paraná, em Ilha Solteira"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-river-deep/80 via-river-deep/20 to-transparent" />
          <div className="relative mx-auto flex h-full max-w-[1220px] flex-col justify-end px-5 pb-16 sm:px-8 lg:pb-24">
            <Reveal>
              <h2 className="max-w-[16ch] text-[clamp(2.4rem,7.5vw,5rem)] leading-[1] text-white">
                Ilha Solteira começa aqui.
              </h2>
              <p className="mt-5 max-w-[44ch] text-[0.98rem] leading-relaxed text-white/80">
                Natureza, lazer e uma das paisagens mais especiais do interior paulista.
              </p>
            </Reveal>
          </div>
        </section>

        {/* EXPERIÊNCIAS */}
        <section id="experiencias" className="mx-auto max-w-[1220px] px-5 py-24 sm:px-8 lg:py-36">
          <Reveal>
            <h2 className="max-w-[24ch] text-[clamp(2.1rem,5.4vw,3.6rem)] leading-[1.03] text-river-deep">
              Muito além da hospedagem.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-x-8 gap-y-14 lg:grid-cols-3">
            {experiencias.map((e, i) => (
              <Reveal key={e.n} delay={i * 130}>
                <img
                  src={e.img}
                  alt={e.alt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover"
                />
                <p className="mt-6 font-display text-sm text-sun">{e.n}</p>
                <h3 className="mt-2 font-display text-3xl text-river-deep">{e.title}</h3>
                <p className="mt-3 max-w-[34ch] text-[0.96rem] leading-relaxed text-muted-foreground">
                  {e.text}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* PESCA */}
        <section className="bg-river-deep text-white">
          <div className="grid lg:grid-cols-2">
            <img
              src={IMG.pescaDourado}
              alt="Pescador com dourado pescado no Rio Paraná"
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full object-cover sm:aspect-[16/10] lg:aspect-auto lg:h-full"
            />
            <div className="flex items-center px-5 py-20 sm:px-10 lg:px-16 lg:py-32">
              <Reveal>
                <p className="eyebrow text-sun-soft">Pesca em Ilha Solteira</p>
                <h2 className="mt-6 max-w-[20ch] text-[clamp(2.1rem,5.4vw,3.4rem)] leading-[1.05] text-white">
                  Para quem vem atrás de boas histórias.
                </h2>
                <p className="mt-6 max-w-[46ch] text-[0.98rem] leading-[1.85] text-white/80">
                  Ilha Solteira é um destino muito procurado por quem aprecia pesca e o contato com o
                  Rio Paraná. A Rio e Sol pode ser o seu ponto de apoio para aproveitar tudo isso com
                  tranquilidade.
                </p>
                <WhatsAppLink variant="sun" className="mt-9">
                  Falar com a pousada
                </WhatsAppLink>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ILHA SOLTEIRA */}
        <section id="ilha-solteira" className="mx-auto max-w-[1220px] px-5 py-24 sm:px-8 lg:py-36">
          <Reveal className="max-w-[54ch]">
            <p className="eyebrow text-river">Ilha Solteira – SP</p>
            <h2 className="mt-6 text-[clamp(2.1rem,5.4vw,3.6rem)] leading-[1.03] text-river-deep">
              Descubra Ilha Solteira.
            </h2>
            <p className="mt-6 text-[1.02rem] leading-relaxed text-muted-foreground">
              Uma cidade marcada pela água, natureza, lazer e pelas paisagens do Rio Paraná.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <Reveal className="sm:col-span-2">
              <img
                src={IMG.prainhaPorDoSol}
                alt="Pôr do sol na Prainha de Ilha Solteira"
                loading="lazy"
                decoding="async"
                className="aspect-[16/11] w-full object-cover"
              />
              <p className="mt-3 text-xs font-semibold tracking-[0.16em] text-river uppercase">
                Prainha & pôr do sol
              </p>
            </Reveal>
            <Reveal delay={100}>
              <img
                src={IMG.portalIlha}
                alt="Portal de entrada das praias de Ilha Solteira"
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover"
              />
              <p className="mt-3 text-xs font-semibold tracking-[0.16em] text-river uppercase">
                Entrada das praias
              </p>
            </Reveal>
            <Reveal delay={60}>
              <img
                src={IMG.basquete}
                alt="Basquete na Prainha de Ilha Solteira"
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover"
              />
              <p className="mt-3 text-xs font-semibold tracking-[0.16em] text-river uppercase">
                Lazer & esporte
              </p>
            </Reveal>
            <Reveal delay={120} className="sm:col-span-2">
              <img
                src={IMG.pesca}
                alt="Pesca ao pôr do sol em Ilha Solteira"
                loading="lazy"
                decoding="async"
                className="aspect-[16/11] w-full object-cover"
              />
              <p className="mt-3 text-xs font-semibold tracking-[0.16em] text-river uppercase">
                Pesca & Rio Paraná
              </p>
            </Reveal>
          </div>
        </section>

        {/* GALERIA */}
        <section id="galeria" className="bg-secondary py-24 lg:py-36">
          <div className="mx-auto max-w-[1220px] px-5 sm:px-8">
            <Reveal className="max-w-[46ch]">
              <p className="eyebrow text-river">Galeria</p>
              <h2 className="mt-6 text-[clamp(2.1rem,5.4vw,3.6rem)] leading-[1.03] text-river-deep">
                Momentos Rio e Sol
              </h2>
            </Reveal>
            <div className="mt-12">
              <Gallery items={galeria} />
            </div>
          </div>
        </section>

        {/* DEPOIMENTOS */}
        <section className="mx-auto max-w-[1220px] px-5 py-24 sm:px-8 lg:py-32">
          <Reveal className="mx-auto max-w-[46ch] text-center">
            <p className="eyebrow text-river">Avaliações</p>
            <h2 className="mt-6 text-[clamp(2rem,5vw,3.2rem)] leading-[1.05] text-river-deep">
              Quem conhece, recomenda.
            </h2>
            <p className="mt-6 text-[0.98rem] leading-relaxed text-muted-foreground">
              A Pousada Rio e Sol tem avaliações positivas de hóspedes no Google. Em breve os
              depoimentos reais aparecerão aqui.
            </p>
            <SunWave className="mx-auto mt-8 h-4 w-24 text-sun" />
          </Reveal>
        </section>

        {/* LOCALIZAÇÃO */}
        <section id="localizacao" className="bg-secondary py-24 lg:py-32">
          <div className="mx-auto grid max-w-[1220px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <Reveal>
              <p className="eyebrow text-river">Localização</p>
              <h2 className="mt-6 text-[clamp(2rem,5vw,3.2rem)] leading-[1.05] text-river-deep">
                Em Ilha Solteira, perto de tudo que importa.
              </h2>
              <address className="mt-8 text-[1.02rem] leading-[1.9] text-muted-foreground not-italic">
                {ADDRESS.street} – {ADDRESS.district}
                <br />
                {ADDRESS.city} – {ADDRESS.state}
                <br />
                CEP {ADDRESS.zip}
              </address>
              <p className="mt-6 text-[1.02rem] text-river-deep">
                WhatsApp:{" "}
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline decoration-sun decoration-2 underline-offset-4"
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </p>
              <p className="mt-2 text-[1.02rem] text-river-deep">
                E-mail:{" "}
                <a
                  href={`mailto:${EMAIL}`}
                  className="font-semibold underline decoration-sun decoration-2 underline-offset-4"
                >
                  {EMAIL}
                </a>
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-river/30 px-7 py-3.5 text-sm font-semibold text-river transition-colors hover:border-river hover:bg-river/5"
                >
                  Abrir no Google Maps
                </a>
                <WhatsAppLink variant="solid">Consultar disponibilidade</WhatsAppLink>
              </div>
            </Reveal>

            <Reveal delay={100} className="overflow-hidden bg-card shadow-[0_20px_50px_-30px_oklch(0.32_0.07_245/0.5)]">
              <iframe
                src={MAPS_EMBED}
                title="Mapa da Pousada Rio e Sol em Ilha Solteira"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[340px] w-full border-0 lg:h-[460px]"
              />
            </Reveal>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="relative overflow-hidden">
          <img
            src={IMG.rioNatureza}
            alt="Pôr do sol sobre o Rio Paraná em Ilha Solteira"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-river-deep/70" />
          <div className="relative mx-auto max-w-[1220px] px-5 py-28 text-center sm:px-8 lg:py-40">
            <Reveal>
              <h2 className="mx-auto max-w-[22ch] text-[clamp(2.2rem,6.4vw,4.2rem)] leading-[1.02] text-white">
                Sua próxima estadia pode começar aqui.
              </h2>
              <p className="mx-auto mt-6 max-w-[48ch] text-[0.98rem] leading-relaxed text-white/85">
                Fale diretamente com a Pousada Rio e Sol e consulte disponibilidade para sua data.
              </p>
              <WhatsAppLink variant="sun" className="mt-10 !px-10 !py-5 !text-base">
                Consultar disponibilidade no WhatsApp
              </WhatsAppLink>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloating />
    </div>
  );
}
