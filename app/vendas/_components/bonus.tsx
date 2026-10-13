import { Gift } from "@phosphor-icons/react/dist/ssr";
import { OFERTA, brl } from "@/lib/oferta";

const BONUS = [
  { n: 1, titulo: "Guia de Suplementação Inteligente", texto: "Os únicos 5 suplementos que realmente funcionam.", valor: 297 },
  { n: 2, titulo: "Masterclass “Longevidade Sem Limites”", texto: "Como viver até os 100 com qualidade.", valor: 397 },
];

export function Bonus() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-2xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            Bônus exclusivos para quem entra hoje
          </h2>
          <p className="text-lg font-semibold text-cinza">
            Valor total dos bônus: <span className="text-navy line-through decoration-vermelho decoration-2">{brl(OFERTA.bonusValorTotal, true)}</span>{" "}
            <span className="text-vermelho">Grátis</span>
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {BONUS.map((b) => (
            <article key={b.n} className="relative overflow-hidden rounded-card bg-azul-claro p-7 sm:p-9">
              <span className="absolute right-6 top-6 rounded-dm bg-white px-3 py-1 text-sm font-bold text-navy">
                Valor {brl(b.valor)}
              </span>
              <span className="flex size-12 items-center justify-center rounded-dm bg-navy text-white">
                <Gift weight="fill" className="size-6" aria-hidden />
              </span>
              <p className="mt-6 text-sm font-bold uppercase tracking-wide text-vermelho">Bônus {b.n}</p>
              <h3 className="mt-1 text-2xl font-extrabold leading-snug">{b.titulo}</h3>
              <p className="mt-2 text-[17px] text-cinza">{b.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
