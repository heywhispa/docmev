import { Check, CreditCard, LockKey, X } from "@phosphor-icons/react/dist/ssr";
import { OFERTA, VALOR_TOTAL_PILHA, brl } from "@/lib/oferta";
import { CtaBotao } from "./cta-botao";

/* Bloco "Quanto vale sua vida?" + empilhamento + preço (VSL, blocos 7, 8 e 12–13).
   Custo da doença em 10 anos, âncora dos R$ 8 mil do acompanhamento presencial,
   pilha de valor e o preço com ênfase no 12x. */
const CUSTOS = [
  { item: "Uma cirurgia cardíaca", valor: 100_000, nota: "pode custar mais de" },
  { item: "Uma internação por infarto", valor: 50_000 },
  { item: "Remédios, por ano", valor: 6_000 },
  { item: "Consultas e exames, por ano", valor: 4_000 },
];

export function Investimento() {
  return (
    <section id="investimento" className="mx-auto max-w-7xl px-4 py-20 lg:py-28">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-6">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            Quanto você gastaria para adicionar 10 anos na sua vida?
          </h2>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {CUSTOS.map((c) => (
              <li key={c.item} className="flex items-start gap-3 rounded-card bg-white p-5 ring-1 ring-borda">
                <X weight="bold" className="mt-1 size-5 shrink-0 text-vermelho" aria-hidden />
                <div>
                  <p className="font-semibold leading-snug">{c.item}</p>
                  <p className="mt-1 text-xl font-extrabold tabular-nums text-cinza">
                    {c.nota && <span className="mr-1 text-sm font-medium text-cinza-suave">{c.nota}</span>}
                    {brl(c.valor)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-lg font-semibold text-cinza">
            Em 10 anos, <span className="text-navy">mais de {brl(100_000)}</span> só para manter a doença sob controle. Sem contar o medo e a limitação de vida.
          </p>
          <div className="mt-8 rounded-card bg-azul-claro p-6">
            <p className="text-sm font-bold uppercase tracking-wide text-vermelho">O acompanhamento presencial</p>
            <p className="mt-2 text-lg leading-snug text-navy">
              Os pacientes que o Dr. Eraldo acompanha de perto investem <strong className="tabular-nums">{brl(OFERTA.ancoraAcompanhamentoAnual)}</strong> por um ano com ele e a equipe, evoluindo os 8 pilares passo a passo.
            </p>
            <p className="mt-2 text-cinza">
              O docMEV leva o mesmo método, os mesmos 8 pilares, para você aplicar da sua casa.
            </p>
          </div>
        </div>

        <div className="rounded-card bg-navy p-7 text-white shadow-[0_30px_80px_rgba(10,39,64,0.35)] sm:p-10 lg:col-span-6">
          <p className="text-lg font-semibold text-azul-claro">Tudo o que você recebe hoje</p>
          <ul className="mt-5 space-y-2.5 text-[15px]">
            {OFERTA.pilha.map((p) => (
              <li key={p.item} className="flex items-start justify-between gap-4 border-b border-white/10 pb-2.5">
                <span className="flex items-start gap-2 text-white/85">
                  <Check weight="bold" className="mt-1 size-4 shrink-0 text-azul-claro" aria-hidden />
                  {p.item}
                </span>
                <span className="shrink-0 tabular-nums text-white/60">{brl(p.valor)}</span>
              </li>
            ))}
            <li className="flex items-start gap-2 pt-1 text-white/85">
              <Check weight="bold" className="mt-1 size-4 shrink-0 text-azul-claro" aria-hidden />
              Garantia Dupla do Cardiologista, com devolução em dobro
            </li>
          </ul>
          <p className="mt-5 text-sm font-medium text-white/60">
            Valor total: <span className="tabular-nums line-through">{brl(VALOR_TOTAL_PILHA)}</span>
          </p>
          <p className="mt-5 text-sm font-bold uppercase tracking-wide text-vermelho">Hoje você leva tudo por</p>
          <p className="mt-1 flex flex-wrap items-baseline gap-x-3">
            <span className="text-3xl font-extrabold sm:text-4xl">{OFERTA.parcelas}x de</span>
            <span className="text-6xl font-extrabold leading-none tracking-tight tabular-nums sm:text-7xl">{brl(OFERTA.valorParcela, true)}</span>
          </p>
          <p className="mt-3 text-lg font-medium text-white/75">
            ou <span className="font-semibold tabular-nums text-white">{brl(OFERTA.precoHoje)}</span> à vista
          </p>
          <p className="mt-3 text-base text-azul-claro">
            Menos do que você gasta, ou gastaria, em remédios em um único mês.
          </p>
          <div className="mt-8">
            <CtaBotao className="w-full">Quero entrar no docMEV por {OFERTA.parcelas}x de {brl(OFERTA.valorParcela, true)}</CtaBotao>
          </div>
          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/75">
            <li className="flex items-center gap-1.5"><LockKey weight="fill" className="size-4 text-azul-claro" aria-hidden />Pagamento 100% seguro</li>
            <li className="flex items-center gap-1.5"><CreditCard weight="fill" className="size-4 text-azul-claro" aria-hidden />Todos os cartões e PIX</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
