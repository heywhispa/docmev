/* Notificações de prova social da página de vendas.

   REGRA: só entra aqui evento real (compra confirmada, vagas reais). Mostrar
   compra de pessoa inventada é propaganda enganosa (CDC art. 37) e pode
   derrubar a conta de anúncios. Enquanto a lista estiver vazia, o componente
   não mostra nada além do pop-up de saída. */

export type Notificacao = {
  texto: string;
  /** segundos depois do carregamento */
  aposSegundos: number;
};

export const NOTIFICACOES: Notificacao[] = [
  // Exemplos do briefing (desligados até terem dado real):
  // { texto: "Maria, de São Paulo, acabou de garantir a vaga", aposSegundos: 10 },
  // { texto: "17 pessoas estão vendo esta página agora", aposSegundos: 30 },
  // { texto: "Últimas 27 vagas disponíveis este mês", aposSegundos: 60 },
];

/** Pop-up de saída com 10% extra. Independe da lista acima. */
export const POPUP_SAIDA_ATIVO = true;
