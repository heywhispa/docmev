import { CreditCard, LockKey, X } from "@phosphor-icons/react/dist/ssr";
import { OFERTA, brl } from "@/lib/oferta";
import { CtaBotao } from "./cta-botao";

const CUSTOS = [
  { item: "Uma cirurgia cardíaca", valor: 100_000 },
  { item: "Internação por infarto", valor: 50_000 },
  { item: "Remédios por 10 anos", valor: 60_000 },
  { item: "Consultas e exames anuais", valor: 40_000 },
];
const TOTAL = CUSTOS.reduce((s, c) => s + c.valor, 0);

export function Investimento() {
  return (
    <section id="investimento" className="mx-auto max-w-7xl px-4 py-20 lg:py-28">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-6">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            Quanto vale adicionar 10 anos na sua vida?
          </h2>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {CUSTOS.map((c) => (
              <li key={c.item} className="flex items-start gap-3 rounded-card bg-white p-5 ring-1 ring-borda">
                <X weight="bold" className="mt-1 size-5 shrink-0 text-vermelho" aria-hidden />
                <div>
                  <p className="font-semibold leading-snug">{c.item}</p>
                  <p className="mt-1 text-xl font-extrabold tabular-nums text-cinza">{brl(c.valor)}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-lg font-semibold text-cinza">
            Total: <span className="text-navy">{brl(TOTAL)}</span> para tratar a doença
          </p>
        </div>

        <div className="rounded-card bg-navy p-7 text-white shadow-[0_30px_80px_rgba(10,39,64,0.35)] sm:p-10 lg:col-span-6">
          <p className="text-lg font-semibold text-azul-claro">O investimento no docMEV</p>
          <p className="mt-6 text-sm font-medium text-white/60">
            Preço regular: <span className="line-through">{brl(OFERTA.precoRegular)}</span>
          </p>
          <p className="mt-4 text-sm font-bold uppercase tracking-wide text-vermelho">Hoje apenas</p>
          <p className="mt-1 text-6xl font-extrabold leading-none tracking-tight tabular-nums sm:text-7xl">{brl(OFERTA.precoHoje)}</p>
          <p className="mt-3 text-xl font-semibold">
            ou {OFERTA.parcelas}x de <span className="tabular-nums">{brl(OFERTA.valorParcela, true)}</span>
          </p>
          <p className="mt-5 inline-block rounded-dm bg-azul-claro px-3 py-1.5 text-sm font-bold text-navy">
            Economia de {brl(OFERTA.economia)} ({OFERTA.descontoPct}% OFF)
          </p>
          <div className="mt-8">
            <CtaBotao className="w-full">Sim! Quero o docMEV com {OFERTA.descontoPct}% de desconto</CtaBotao>
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
