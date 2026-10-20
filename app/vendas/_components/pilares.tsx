import type { Icon } from "@phosphor-icons/react";
import {
  Cigarette, Drop, ForkKnife, Heartbeat, MoonStars, PersonSimpleRun, Scales, TestTube,
} from "@phosphor-icons/react/dist/ssr";
import { OFERTA } from "@/lib/oferta";
import { cn } from "@/lib/utils";

/* Os 8 sistemas da AHA na ordem em que a VSL os organiza (12:15–17:45):
   3 pilares essenciais (os "dominós") e 5 estratégicos. Os textos usam só
   números que a VSL fala. */
type Pilar = { titulo: string; texto: string; Icone: Icon; tom: "branco" | "claro" | "navy"; grupo: "essencial" | "estrategico" };

const PILARES: Pilar[] = [
  { grupo: "essencial", titulo: "Sono", texto: "No sono o corpo regula 12 hormônios. Ronco e pausas na respiração são uma das causas mais comuns de pressão que não baixa nem com remédio.", Icone: MoonStars, tom: "navy" },
  { grupo: "essencial", titulo: "Alimentação", texto: "A ordem em que você come e o que faz nos minutos depois mudam o pico de açúcar, sem tirar nada do prato.", Icone: ForkKnife, tom: "navy" },
  { grupo: "essencial", titulo: "Movimento e Estresse", texto: `${OFERTA.minutosPorDia} a 20 minutos por dia já reduzem o risco cardíaco em até 35%. E o exercício que mais baixa a pressão não é a caminhada.`, Icone: PersonSimpleRun, tom: "navy" },
  { grupo: "estrategico", titulo: "Colesterol", texto: "O triglicérides alto vem mais do açúcar do que da gordura. Existe uma fibra que leva o colesterol embora pelo intestino.", Icone: Drop, tom: "branco" },
  { grupo: "estrategico", titulo: "Pressão Arterial", texto: "Técnicas de redução imediata, o papel do potássio e o jeito certo de medir em casa.", Icone: Heartbeat, tom: "claro" },
  { grupo: "estrategico", titulo: "Açúcar no Sangue", texto: "Sair da zona de risco do “pré-diabético” controlando os picos depois das refeições.", Icone: TestTube, tom: "branco" },
  { grupo: "estrategico", titulo: "Peso e Cintura", texto: "Perder 5% do peso, da gordura certa, pode reduzir o risco cardíaco em até 20%. A fita métrica diz mais que a balança.", Icone: Scales, tom: "claro" },
  { grupo: "estrategico", titulo: "Vícios: cigarro e álcool", texto: "Largar e controlar sem sofrimento. A cervejinha da noite quebra o sono profundo e derruba o dominó.", Icone: Cigarette, tom: "branco" },
];

export function Pilares() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:py-28">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
          Os 8 pilares que explicam quem vive muito e quem morre cedo
        </h2>
        <p className="mt-4 max-w-[62ch] text-lg leading-relaxed text-cinza">
          Pressão, glicose, colesterol e cansaço não são problemas separados. São a mesma coisa acontecendo em lugares diferentes: quando um dos 8 sistemas falha, os outros caem em cascata, como peças de dominó. O docMEV levanta a primeira peça e deixa o <strong className="text-navy">Efeito Dominó Reverso</strong> fazer o resto.
        </p>
      </div>

      <ol className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PILARES.map(({ titulo, texto, Icone, tom, grupo }, i) => (
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
            <p className={cn("mt-6 text-xs font-bold uppercase tracking-wide", tom === "navy" ? "text-azul-claro/80" : "text-vermelho")}>
              {grupo === "essencial" ? "Pilar essencial" : "Plano estratégico"}
            </p>
            <h3 className="mt-1 text-lg font-bold leading-snug">{titulo}</h3>
            <p className={cn("mt-2 text-[15px] leading-relaxed", tom === "navy" ? "text-azul-claro/90" : "text-cinza")}>{texto}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
