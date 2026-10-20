import { Star } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";

/* ATENÇÃO: os dois depoimentos abaixo são os casos que a VSL conta (23:40–25:20).
   Antes de publicar: substituir por relatos reais, com autorização escrita,
   e validar com o jurídico. A Resolução CFM 2.336/2023 restringe divulgação
   de depoimento de paciente e de antes/depois em publicidade médica. */

type Depoimento = {
  nome: string; idade: number; profissao: string; iniciais: string;
  texto: string; metricas?: { rotulo: string; antes: string; depois: string }[];
};

const DEPOIMENTOS: Depoimento[] = [
  {
    nome: "Roberto", idade: 52, profissao: "Executivo", iniciais: "R",
    texto: "Os remédios caíram de 5 pra 1 em 8 semanas. Hoje, um ano depois, não tomo nenhum. Meu cardiologista disse: “você ganhou 20 anos de vida”.",
    metricas: [
      { rotulo: "Pressão", antes: "15/10", depois: "12/8" },
      { rotulo: "Colesterol", antes: "280", depois: "180" },
      { rotulo: "Peso", antes: "102 kg", depois: "89 kg" },
      { rotulo: "Prazo", antes: "", depois: "8 semanas" },
    ],
  },
  {
    nome: "Maria", idade: 48, profissao: "Professora", iniciais: "M",
    texto: "Eu sentia que estava envelhecendo 3 anos a cada ano. Em 8 semanas voltei a ser eu mesma: durmo a noite inteira, perdi 9 quilos sem fazer dieta e meus alunos perguntam o que aconteceu comigo.",
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
          Pessoas que aplicam os 8 pilares relatam
        </h2>
        <ul className="mt-6 grid max-w-4xl gap-x-8 gap-y-2 text-[17px] font-medium text-cinza sm:grid-cols-2">
          <li>Mais energia e disposição nas primeiras 2 semanas</li>
          <li>Pressão normalizada em 4 semanas</li>
          <li>Perda de 2 a 8 quilos em menos de 2 meses</li>
          <li>Redução de até 30% no colesterol em 3 meses</li>
          <li className="sm:col-span-2">Diminuição ou eliminação de medicamentos em 6 meses, conforme o caso e com acompanhamento do seu médico</li>
        </ul>

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
