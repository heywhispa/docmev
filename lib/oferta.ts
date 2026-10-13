/* Dados da oferta docMEV. Tudo que é número, link ou texto sensível da
   página de vendas mora aqui, pra trocar sem caçar no JSX.

   PLACEHOLDERS a preencher antes de publicar (marcados com TODO). */

export const OFERTA = {
  nome: "docMEV",
  nomeCompleto: "docMEV: Medicina do Estilo de Vida",

  // TODO: link real do checkout (Greenn, Hotmart, Kiwify...).
  checkoutUrl: process.env.NEXT_PUBLIC_CHECKOUT_URL ?? "#checkout",
  // TODO: link do checkout com o cupom de 10% extra do pop-up de saída.
  checkoutUrlCupom: process.env.NEXT_PUBLIC_CHECKOUT_URL_CUPOM ?? "#checkout-cupom",

  // TODO: URL de embed da VSL (Vturb / YouTube / Vimeo). Vazio mostra o poster.
  vslEmbedUrl: process.env.NEXT_PUBLIC_VSL_EMBED_URL ?? "",
  vslDuracaoMin: 40,

  precoRegular: 1997,
  precoHoje: 447,
  parcelas: 12,
  valorParcela: 48.09,
  economia: 1500,
  descontoPct: 60,
  porDia: 6.5,

  garantiaDias: 30,
  programaSemanas: 8,

  // Cronômetro evergreen do desconto. Um único timer alimenta a barra do topo
  // e a seção de escassez, pra página não mostrar dois prazos diferentes.
  contadorMinutos: 15,
  contadorChave: "docmev_desconto_fim",

  suporteEmail: "suporte@docmev.com.br", // TODO: confirmar
  whatsapp: "(11) 99999-9999", // TODO: número real
  whatsappLink: "https://wa.me/5511999999999", // TODO: número real

  bonusValorTotal: 684,
} as const;

export const DR_ERALDO = {
  nome: "Dr. Eraldo Moraes",
  // TODO: todos os dados abaixo vieram como "XXXXX" no briefing.
  crm: "CRM-SP XXXXX",
  anosExperiencia: "XX anos de experiência clínica",
  pacientes: "Mais de XX.000 pacientes atendidos",
} as const;

export function brl(valor: number, centavos = false) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: centavos ? 2 : 0,
    maximumFractionDigits: centavos ? 2 : 0,
  });
}
