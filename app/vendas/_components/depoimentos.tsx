import { Star } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";

/* ATENÇÃO: os três depoimentos abaixo vieram do briefing como exemplo.
   Antes de publicar: substituir por relatos reais, com autorização escrita,
   e validar com o jurídico. A Resolução CFM 2.336/2023 restringe divulgação
   de depoimento de paciente e de antes/depois em publicidade médica. */

type Depoimento = {
  nome: string; idade: number; profissao: string; iniciais: string;
  texto: string; metricas?: { rotulo: string; antes: string; depois: string }[];
};

const DEPOIMENTOS: Depoimento[] = [
  {
    nome: "Roberto Silva", idade: 52, profissao: "Empresário", iniciais: "RS",
    texto: "Parei 4 dos 5 remédios. Meu cardiologista disse que ganhei 20 anos de vida.",
    metricas: [
      { rotulo: "Pressão", antes: "15/10", depois: "12/8" },
      { rotulo: "Colesterol", antes: "280", depois: "180" },
      { rotulo: "Peso", antes: "", depois: "-13 kg" },
      { rotulo: "Prazo", antes: "", depois: "8 semanas" },
    ],
  },
  {
    nome: "Maria Santos", idade: 48, profissao: "Professora", iniciais: "MS",
    texto: "Tinha síndrome metabólica, cansaço crônico e insônia. Hoje durmo a noite toda, tenho energia de sobra e perdi 9 kg sem fazer dieta.",
  },
  {
    nome: "José Carlos", idade: 57, profissao: "Engenheiro", iniciais: "JC",
    texto: "Pré-diabético, hipertenso, 108 kg. Hoje: glicose normal, pressão controlada, 89 kg. Zero remédios.",
  },
];

function Estrelas() {
  return (
    <span className="flex gap-0.5 text-vermelho" aria-label="5 de 5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => <Star key={i} weight="fill" className="size-4" aria-hidden />)}
    </span>
  );
}

function Autor({ d, claro }: { d: Depoimento; claro?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      {/* TODO: foto real autorizada no lugar das iniciais */}
      <span className={cn("flex size-11 shrink-0 items-center justify-center rounded-full text-sm font-bold", claro ? "bg-white/15 text-white" : "bg-navy text-white")}>
        {d.iniciais}
      </span>
      <div className="leading-tight">
        <p className="font-bold">{d.nome}, {d.idade} anos</p>
        <p className={cn("text-sm", claro ? "text-azul-claro/80" : "text-cinza-suave")}>{d.profissao}</p>
      </div>
    </div>
  );
}

export function Depoimentos() {
  const [destaque, ...outros] = DEPOIMENTOS;
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
          Veja quem já transformou a vida com o docMEV
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-5">
          <figure className="flex flex-col justify-between rounded-card bg-navy p-7 text-white lg:col-span-3 lg:p-10">
            <div>
              <Estrelas />
              <blockquote className="mt-5 text-xl font-semibold leading-snug sm:text-2xl">“{destaque.texto}”</blockquote>
              <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {destaque.metricas?.map((m) => (
                  <div key={m.rotulo} className="rounded-dm bg-white/8 p-4">
                    <dt className="text-xs font-semibold uppercase tracking-wide text-azul-claro/70">{m.rotulo}</dt>
                    <dd className="mt-1 text-lg font-extrabold leading-tight">
                      {m.antes && <span className="mr-1 text-sm font-medium text-white/50 line-through">{m.antes}</span>}
                      {m.depois}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <figcaption className="mt-8"><Autor d={destaque} claro /></figcaption>
          </figure>

          <div className="flex flex-col gap-5 lg:col-span-2">
            {outros.map((d) => (
              <figure key={d.nome} className="flex flex-1 flex-col justify-between rounded-card bg-azul-claro p-7">
                <div>
                  <Estrelas />
                  <blockquote className="mt-4 text-[17px] leading-relaxed">“{d.texto}”</blockquote>
                </div>
                <figcaption className="mt-6"><Autor d={d} /></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
