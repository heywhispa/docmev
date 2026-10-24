/* Dados da oferta docMEV. Tudo que é número, link ou texto sensível da
   página de vendas mora aqui, pra trocar sem caçar no JSX.

   Fonte da oferta: roteiro da VSL v5 Final (bloco 4, 20:30–31:30), salvo em
   01_ALICERCE/04_PRODUTOS-E-OFERTAS/EM_PROD_ROTEIRO_2026-10-19_VSL-DocMev-v5-Final_v1.md.
   A página repete o que a VSL fala: mesmos entregáveis, mesmos valores de
   ancoragem, mesma garantia dupla, mesmos 3 bônus.

   PLACEHOLDERS a preencher antes de publicar (marcados com TODO). */

export const OFERTA = {
  nome: "docMEV",
  nomeCompleto: "docMEV: O Documento da Medicina do Estilo de Vida",

  // Checkout Hotmart (oferta x8g64q7d). A variável de ambiente, se existir, sobrepõe.
  checkoutUrl: process.env.NEXT_PUBLIC_CHECKOUT_URL ?? "https://pay.hotmart.com/Y108012325N?off=x8g64q7d",
  // Condição especial da VSL (20% OFF, R$ 237 à vista), que a VTurb mostra por
  // volta de 28:50 pra quem ainda não clicou. Oferta Hotmart 3ret8gsy. Se este
  // link for igual ao checkout normal, o pop-up de saída NÃO aparece (ver notificacoes.tsx).
  checkoutUrlCondicaoEspecial:
    process.env.NEXT_PUBLIC_CHECKOUT_URL_CUPOM ?? "https://pay.hotmart.com/Y108012325N?off=3ret8gsy",

  // VSL hospedada na VTurb (smartplayer, formato vertical 3:4). Se playerId estiver
  // vazio, cai no iframe de vslEmbedUrl e a página aparece sem esperar.
  vslVturb: {
    playerId: "vid-6adbe298d8ab5ce9041d5e53",
    scriptUrl:
      "https://scripts.converteai.net/86c1ada0-8f16-48cd-ab77-c21c6c2292bc/players/6adbe298d8ab5ce9041d5e53/v4/player.js",
  },
  vslEmbedUrl: process.env.NEXT_PUBLIC_VSL_EMBED_URL ?? "",
  // Segundo do vídeo em que a página revela a tarja vermelha e tudo abaixo da VSL:
  // 26:50 = 1º CTA do roteiro (1610 s). Confirmar com a gravação publicada.
  vslRevelarEm: 1610,
  vslDuracaoMin: 31,

  // PREÇO. A página dá ênfase ao 12x; o à vista aparece como alternativa.
  // valorParcela = R$ 297 a 3,49% a.m. (taxa que o próprio checkout da Hotmart
  // carrega no estado da página, tabela Price em 12x). Conferir no checkout
  // com um cartão real, pois a Hotmart só mostra as parcelas depois dos dados do cartão.
  precoHoje: 297,
  parcelas: 12,
  valorParcela: 30.72,
  porMes: 31, // "menos de R$ 31 por mês", fala da VSL: "30 reais por mês"
  // Condição especial da VSL (VTurb ~28:50): 20% OFF, à vista.
  precoCondicaoEspecial: 237,
  descontoCondicaoEspecialPct: 20,

  // ANCORAGEM (VSL, blocos 7 e 12–13).
  // Pacientes do acompanhamento presencial com o Dr. Eraldo investem isto por ano:
  ancoraAcompanhamentoAnual: 8000,
  // Empilhamento do que a pessoa recebe hoje, com o valor que a VSL atribui a cada item:
  pilha: [
    { item: "Teste de Autodiagnóstico + 8 planos de ação do docMEV", valor: 1997 },
    { item: "Material completo de acompanhamento", valor: 497 },
    { item: "Comunidade docMEV, suporte do time e encontros ao vivo", valor: 1200 },
    { item: "Bônus 1: Protocolo de Ação Rápida", valor: 297 },
    { item: "Bônus 2: Guia de Suplementação Inteligente", valor: 197 },
    { item: "Bônus 3: Masterclass “Longevidade Sem Limites”", valor: 497 },
  ],
  bonusValorTotal: 991, // 297 + 197 + 497

  garantiaDias: 30,
  programaSemanas: 8,
  minutosPorDia: 10,

  // Cronômetro evergreen. Um único timer alimenta a barra do topo e a seção
  // de escassez, pra página não mostrar dois prazos diferentes. O que vence
  // no prazo são os 3 bônus ("quem entra hoje ainda recebe três bônus").
  contadorMinutos: 15,
  contadorChave: "docmev_desconto_fim",

  suporteEmail: "suporte@docmev.com.br", // TODO: confirmar
  whatsapp: "(11) 99999-9999", // TODO: número real
  whatsappLink: "https://wa.me/5511999999999", // TODO: número real
} as const;

/** Soma do empilhamento (a VSL fala "passa de R$ 4.600"; dá R$ 4.685). */
export const VALOR_TOTAL_PILHA = OFERTA.pilha.reduce((s, p) => s + p.valor, 0);

export const DR_ERALDO = {
  nome: "Dr. Eraldo Moraes",
  // CRM/RQE: tarja da VSL (checklist do roteiro). Anos: fala do bloco 2 da VSL v5
  // ("cardiologista há mais de 15 anos"); a VSL anterior dizia "20 anos de consultório".
  crm: "CRM-GO 16898",
  rqe: "RQE 8449 · 8450 · 13300",
  anosExperiencia: "Cardiologista há mais de 15 anos",
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
