import { Check } from "@phosphor-icons/react/dist/ssr";
import { IconeMarca, type IconeMarca as NomeIcone } from "./icone-marca";
import { cn } from "@/lib/utils";

type Bloco = { titulo: string; itens: string[]; icone: NomeIcone; tom: "navy" | "claro" | "branco" | "vermelho"; largo?: boolean };

const BLOCOS: Bloco[] = [
  { titulo: "8 módulos progressivos", icone: "estetoscopio", tom: "navy", largo: true, itens: [
    "Aulas em vídeo direto ao ponto",
    "Um pilar por semana para não sobrecarregar",
    "Linguagem simples, sem termos médicos complexos",
  ]},
  { titulo: "Aplicativo de acompanhamento", icone: "pulso", tom: "claro", itens: [
    "Monitore seus 8 pilares diariamente",
    "Gráficos de evolução em tempo real",
    "Lembretes e motivação personalizada",
  ]},
  { titulo: "Ferramentas práticas", icone: "maleta", tom: "branco", itens: [
    "Planilhas de controle de indicadores",
    "Checklists semanais de implementação",
    "Guias rápidos de consulta",
    "Receitas que curam",
    "Cardápios de 30 dias",
  ]},
  { titulo: "Comunidade exclusiva", icone: "coracao-pulso", tom: "vermelho", largo: true, itens: [
    "Grupo privado no WhatsApp",
    "Lives quinzenais com o Dr. Eraldo",
    "Suporte direto para dúvidas",
    "Troca de experiências com outros alunos",
  ]},
];

export function Entregaveis() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:py-28">
      <h2 className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
        O programa completo docMEV inclui
      </h2>

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
              <h3 className="mt-5 text-xl font-extrabold leading-snug sm:text-2xl">{b.titulo}</h3>
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
