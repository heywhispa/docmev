/* Dados da oferta docMEV. Tudo que é número, link ou texto sensível da
   página de vendas mora aqui, pra trocar sem caçar no JSX.

   PLACEHOLDERS a preencher antes de publicar (marcados com TODO). */

export const OFERTA = {
  nome: "docMEV",
  nomeCompleto: "docMEV: Medicina do Estilo de Vida",

  // Checkout Hotmart (oferta d9jlpmi3). A variável de ambiente, se existir, sobrepõe.
  checkoutUrl: process.env.NEXT_PUBLIC_CHECKOUT_URL ?? "https://pay.hotmart.com/Y108012325N?off=d9jlpmi3",
  // TODO: cupom de 10% extra do pop-up de saída. Na Hotmart é o mesmo link com
  // &coupon=CODIGO; enquanto não houver cupom, cai no checkout normal.
  checkoutUrlCupom:
    process.env.NEXT_PUBLIC_CHECKOUT_URL_CUPOM ??
    process.env.NEXT_PUBLIC_CHECKOUT_URL ??
    "https://pay.hotmart.com/Y108012325N?off=d9jlpmi3",

  // TODO: URL de embed da VSL (Vturb / YouTube / Vimeo). Vazio mostra o poster.
  vslEmbedUrl: process.env.NEXT_PUBLIC_VSL_EMBED_URL ?? "",
  vslDuracaoMin: 40,

  // A página dá ênfase ao 12x; o à vista aparece como alternativa.
  // valorParcela = R$ 297 a 3,49% a.m. (taxa que o próprio checkout da Hotmart
  // carrega no estado da página, tabela Price em 12x). Conferir no checkout
  // com um cartão real, pois a Hotmart só mostra as parcelas depois dos dados do cartão.
  precoRegular: 1997,
  precoHoje: 297,
  parcelas: 12,
  valorParcela: 30.72,
  economia: 1700,
  descontoPct: 85,
  porDia: 1.05, // 30,72 / 30 dias ≈ R$ 1,02

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
  // Dados lidos da tarja de credenciais da própria VSL (ver análise em
  // 02_Anuncios/EM_TRAF_ANALISE_2026-10-19_Padrao-Edicao-VSL-8-Pilares_v1.md).
  crm: "CRM-GO 16898",
  rqe: "RQE 8449 · 8450 · 13300",
  anosExperiencia: "Mais de 20 anos de consultório",
  doutorado: "Doutorado pela UNIFESP",
  foto: "/fotos/dr-eraldo-moraes.jpg",
} as const;

export function brl(valor: number, centavos = false) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: centavos ? 2 : 0,
    maximumFractionDigits: centavos ? 2 : 0,
  });
}
