export const WHATSAPP_MESSAGE =
  "Olá! Encontrei a Pousada Rio e Sol pelo site e gostaria de consultar disponibilidade para hospedagem.";

export const WHATSAPP_NUMBER = "5519998844848";
export const WHATSAPP_DISPLAY = "(19) 99884-4848";
export const EMAIL = "contato@pousadarioesol.com.br";

export function whatsappLink(message: string = WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const ADDRESS = {
  street: "R. Praia do Forte, 31",
  district: "Portal da Praia",
  city: "Ilha Solteira",
  state: "SP",
  zip: "15385-000",
};

export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Pousada Rio e Sol, R. Praia do Forte, 31, Ilha Solteira - SP, 15385-000");

export const MAPS_EMBED =
  "https://www.google.com/maps?q=" +
  encodeURIComponent("R. Praia do Forte, 31, Portal da Praia, Ilha Solteira - SP, 15385-000") +
  "&output=embed";

export const DOMAIN = "pousadarioesol.com.br";

export const NAV = [
  { label: "A Pousada", href: "#a-pousada" },
  { label: "Acomodações", href: "#acomodacoes" },
  { label: "Experiências", href: "#experiencias" },
  { label: "Ilha Solteira", href: "#ilha-solteira" },
  { label: "Galeria", href: "#galeria" },
  { label: "Localização", href: "#localizacao" },
];
