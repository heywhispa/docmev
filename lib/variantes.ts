/* Variantes da página de vendas para teste A/B.

   COMO USAR
   - Entrada sem parâmetro (docmev.com ou /vendas): o proxy.ts sorteia 50/50,
     grava cookie e redireciona pra /vendas?v=X. Quem voltar cai na mesma.
   - Forçar uma variante no anúncio: /vendas?v=a ou /vendas?v=b
   - Pré-visualizar direto (sem sorteio nem cookie): /vendas/a e /vendas/b

   O parâmetro ?v= é reescrito em next.config.ts para a rota /vendas/[variante],
   então cada variante é uma página estática (sem flicker e sem custo por request).
   Valor desconhecido ou ausente cai na variante padrão.

   RASTREIO
   - GTM: evento "variante_pagina" no dataLayer com { variante: "a" | "b" }.
   - <html data-variante="b">: dá pra usar em gatilhos/variáveis DOM do GTM.
   - Checkout: o script de UTMs do layout copia o ?v= da URL pro link da Hotmart
     e também pro parâmetro sck, então o relatório de vendas separa por variante.
     Por isso o anúncio deve usar a forma com ?v= (não /vendas/b).

   Pra criar uma nova variante: adicione a letra em VARIANTES e o bloco em CONTEUDO.
   Pra variar outra seção: acrescente o campo em ConteudoVariante e leia no componente. */

export const PARAM_VARIANTE = "v";
export const COOKIE_VARIANTE = "docmev_variante";
export const COOKIE_VARIANTE_DIAS = 30;
export const VARIANTES = ["a", "b"] as const;
export type Variante = (typeof VARIANTES)[number];
export const VARIANTE_PADRAO: Variante = "a";

export function ehVariante(valor: string | undefined): valor is Variante {
  return (VARIANTES as readonly string[]).includes(valor ?? "");
}

export type ConteudoVariante = {
  /** rótulo interno (aparece na faixa de DEV) */
  descricao: string;
  hero: {
    titulo: string;
    subtitulo: string;
    cta: string;
  };
};

export const CONTEUDO: Record<Variante, ConteudoVariante> = {
  a: {
    descricao: "Controle: headline AHA (copy original do briefing)",
    hero: {
      titulo:
        "A American Heart Association revelou os 8 fatores que determinam quem vive muito e quem morre cedo",
      subtitulo:
        "Descubra como milhares de brasileiros já usaram este protocolo para reduzir o risco de infarto, AVC e morte súbita, sem depender de remédios",
      cta: "Quero acessar o docMEV agora",
    },
  },
  b: {
    // TODO: copy proposta pelo Vinicius em 2026-10-14, aprovar com o Dr. Eraldo
    // antes de ligar o teste. Ângulo: resultado concreto em 8 semanas.
    descricao: "Teste: headline de resultado em 8 semanas",
    hero: {
      titulo:
        "Pressão, colesterol e glicemia sob controle em 8 semanas, com o protocolo dos 8 pilares da American Heart Association",
      subtitulo:
        "Um programa guiado por cardiologista para reduzir o risco de infarto e AVC e depender cada vez menos de remédios",
      cta: "Quero começar minhas 8 semanas",
    },
  },
};
