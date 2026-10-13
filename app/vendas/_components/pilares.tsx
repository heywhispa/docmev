import type { Icon } from "@phosphor-icons/react";
import {
  Cigarette, Drop, ForkKnife, Heartbeat, MoonStars, PersonSimpleRun, Scales, TestTube,

} from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";

type Pilar = { titulo: string; texto: string; Icone: Icon; tom: "branco" | "claro" | "navy" };

const PILARES: Pilar[] = [
  { titulo: "Nutrição Estratégica", texto: "Reequilibre hormônios e elimine inflamação com ajustes simples na alimentação.", Icone: ForkKnife, tom: "navy" },
  { titulo: "Movimento Inteligente", texto: "22 minutos por dia para reduzir 35% do risco cardíaco, sem academia.", Icone: PersonSimpleRun, tom: "branco" },
  { titulo: "Sono Restaurador", texto: "Regule 12 hormônios diferentes com 7 a 8 horas de sono de qualidade.", Icone: MoonStars, tom: "claro" },
  { titulo: "Libertação da Nicotina", texto: "Cada cigarro rouba 11 minutos de vida. Aprenda a parar definitivamente.", Icone: Cigarette, tom: "branco" },
  { titulo: "Composição Corporal", texto: "Perca 5% do peso e reduza 20% do risco cardíaco.", Icone: Scales, tom: "claro" },
  { titulo: "Controle de Lipídios", texto: "Reduza o colesterol em 30% sem estatinas.", Icone: Drop, tom: "navy" },
  { titulo: "Equilíbrio Glicêmico", texto: "Previna o diabetes controlando os picos de insulina.", Icone: TestTube, tom: "branco" },
  { titulo: "Pressão Arterial", texto: "Reduza 5 pontos e corte pela metade o risco de AVC.", Icone: Heartbeat, tom: "claro" },
];

export function Pilares() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:py-28">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
          Os 8 pilares que salvam vidas
        </h2>
        <p className="mt-4 max-w-[60ch] text-lg leading-relaxed text-cinza">
          Descubra os 8 sistemas que controlam sua longevidade. Um pilar por semana, do jeito que seu corpo consegue acompanhar.
        </p>
      </div>

      <ol className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PILARES.map(({ titulo, texto, Icone, tom }, i) => (
          <li
            key={titulo}
            className={cn(
              "flex flex-col rounded-card p-6 sm:p-7",
              tom === "navy" && "bg-navy text-white",
              tom === "claro" && "bg-azul-claro text-navy",
              tom === "branco" && "bg-white text-navy shadow-card ring-1 ring-borda",
            )}
          >
            <div className="flex items-center justify-between">
              <span className={cn("flex size-12 items-center justify-center rounded-dm", tom === "navy" ? "bg-white/10 text-azul-claro" : "bg-navy/8 text-vermelho")}>
                <Icone weight="fill" className="size-6" aria-hidden />
              </span>
              <span className={cn("text-sm font-bold tabular-nums", tom === "navy" ? "text-white/50" : "text-cinza-suave")}>
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="mt-6 text-lg font-bold leading-snug">{titulo}</h3>
            <p className={cn("mt-2 text-[15px] leading-relaxed", tom === "navy" ? "text-azul-claro/90" : "text-cinza")}>{texto}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
