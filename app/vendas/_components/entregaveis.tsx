import { Check } from "@phosphor-icons/react/dist/ssr";
import { IconeMarca, type IconeMarca as NomeIcone } from "./icone-marca";
import { OFERTA } from "@/lib/oferta";
import { cn } from "@/lib/utils";

/* "O que está incluído" (VSL, 21:25–23:00). Segue o roteiro ao pé da letra:
   teste de autodiagnóstico no dia 1 → 3 pilares essenciais → 5 planos
   estratégicos → material de acompanhamento → comunidade. Sem aplicativo,
   sem "um pilar por semana": a ordem das aulas vem do teste. */
type Bloco = { titulo: string; sub?: string; itens: string[]; icone: NomeIcone; tom: "navy" | "claro" | "branco" | "vermelho"; largo?: boolean };

const BLOCOS: Bloco[] = [
  { titulo: "Teste de Autodiagnóstico docMEV", sub: "Tudo começa no primeiro dia", icone: "estetoscopio", tom: "navy", largo: true, itens: [
    "O mesmo teste que o Dr. Eraldo aplica com os pacientes dele",
    "Descobre com precisão qual é a primeira peça do seu dominó",
    "Define em que ordem levantar as outras: sem achismo, sem tentativa e erro",
  ]},
  { titulo: "Os 3 Pilares Essenciais", sub: "As peças que derrubam todas as outras", icone: "coracao-pulso", tom: "claro", itens: [
    "Plano Sono: dormir o que o seu corpo precisa, mesmo com ansiedade ou insônia, e o que fazer se você ronca",
    "Plano Má Alimentação: receitas de 15 minutos, lista de compras pronta e a ordem certa de comer",
    `Plano Sedentarismo e Estresse: ${OFERTA.minutosPorDia} minutos por dia, sem academia, e formas naturais de baixar a pressão`,
  ]},
  { titulo: "Os 5 Planos Estratégicos", sub: "Um para cada problema que mais tira anos de vida", icone: "capsulas", tom: "branco", itens: [
    "Plano de Controle do Colesterol",
    "Plano de Pressão Alta",
    "Plano Diabetes",
    "Plano Obesidade",
    "Plano Vícios: cigarro e álcool",
  ]},
  { titulo: "Material de acompanhamento + Comunidade docMEV", sub: "Você não vai fazer isso sozinho", icone: "maleta", tom: "vermelho", largo: true, itens: [
    "O material de acompanhamento que o Dr. Eraldo usa no dia a dia com os pacientes",
    "Suporte direto com o time dele",
    "Encontros ao vivo com o Dr. Eraldo ao longo do ano",
    "Aulas programadas de acordo com a sua necessidade e o seu momento de vida",
  ]},
];

const PARA_QUEM = [
  "já toma remédio e vê a dose aumentar a cada consulta",
  "ouviu a palavra “pré-diabético” ou “pré-hipertenso” e sentiu um frio na barriga",
  "sabe que precisa mudar, mas nunca conseguiu sustentar a mudança",
];

export function Entregaveis() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:py-28">
      <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <h2 className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            O docMEV é um programa completo de {OFERTA.programaSemanas} semanas, feito para levantar o seu dominó peça por peça
          </h2>
        </div>
        <div className="lg:col-span-5">
          <p className="text-sm font-bold uppercase tracking-wide text-vermelho">É pra você que</p>
          <ul className="mt-3 space-y-2">
            {PARA_QUEM.map((t) => (
              <li key={t} className="flex items-start gap-2.5 text-cinza">
                <Check weight="bold" className="mt-1 size-4 shrink-0 text-vermelho" aria-hidden />{t}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
        {BLOCOS.map((b) => {
          const escuro = b.tom === "navy" || b.tom === "vermelho";
          return (
            <article
              key={b.titulo}
              className={cn(
                "rounded-card p-7 sm:p-8",
                b.largo && "md:col-span-2",
                b.tom === "navy" && "bg-navy text-white",
                b.tom === "vermelho" && "bg-vermelho text-white",
                b.tom === "claro" && "bg-azul-claro text-navy",
                b.tom === "branco" && "bg-white text-navy shadow-card ring-1 ring-borda",
              )}
            >
              <IconeMarca nome={b.icone} className={cn("size-10", escuro ? "text-white/80" : "text-vermelho")} />
              {b.sub && <p className={cn("mt-5 text-sm font-bold uppercase tracking-wide", escuro ? "text-white/60" : "text-vermelho")}>{b.sub}</p>}
              <h3 className="mt-1 text-xl font-extrabold leading-snug sm:text-2xl">{b.titulo}</h3>
              <ul className={cn("mt-5 grid gap-2.5 text-[15px] leading-snug", b.largo && "sm:grid-cols-2")}>
                {b.itens.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check weight="bold" className={cn("mt-0.5 size-4 shrink-0", escuro ? "text-white" : "text-vermelho")} aria-hidden />
                    <span className={escuro ? "text-white/90" : "text-cinza"}>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}
