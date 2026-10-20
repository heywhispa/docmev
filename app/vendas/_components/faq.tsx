import { Plus } from "@phosphor-icons/react/dist/ssr";
import { OFERTA } from "@/lib/oferta";

const FAQ = [
  { p: "Preciso parar meus remédios?", r: "Não. O docMEV trabalha junto com o seu tratamento atual. Conforme os seus exames melhoram, o seu médico pode ajustar ou reduzir as medicações. Nunca pare um remédio por conta própria." },
  { p: "Quanto tempo preciso dedicar por dia?", r: `Cerca de ${OFERTA.minutosPorDia} minutos por dia. As práticas entram na sua rotina normal: sem dieta extrema, sem academia.` },
  { p: "Por onde eu começo?", r: "Pelo Teste de Autodiagnóstico, no primeiro dia. Ele mostra qual é a primeira peça do seu dominó e em que ordem levantar as outras. As aulas são liberadas de acordo com a sua necessidade e o seu momento de vida." },
  { p: "Funciona na minha idade?", r: "Não importa a sua idade, se você nunca pisou numa academia ou se já toma 3, 4, 5 remédios. O docMEV começa do seu nível." },
  { p: "E se não funcionar para mim?", r: `Você tem duas garantias. ${OFERTA.garantiaDias} dias incondicional: devolvemos 100% do valor, sem perguntas. E a Garantia do Cardiologista: se você aplicar o protocolo por ${OFERTA.programaSemanas} semanas e não sentir diferença na energia, no sono ou nos exames, o Dr. Eraldo devolve o dobro do que você investiu.` },
  { p: "Como recebo o acesso?", r: "Depois do pagamento, o acesso chega na hora no seu e-mail. No cartão, a liberação é imediata; no boleto, após a compensação." },
  { p: "Preciso comprar suplementos caros?", r: "Não. O foco são mudanças de estilo de vida. O Guia de Suplementação Inteligente (bônus) mostra quais suplementos realmente funcionam e quais são dinheiro jogado fora." },
];

export function Faq() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">Suas dúvidas respondidas</h2>
        <div className="mt-10 divide-y divide-borda">
          {FAQ.map((f) => (
            <details key={f.p} className="group py-5">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg font-bold leading-snug focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vermelho">
                {f.p}
                <Plus weight="bold" className="size-5 shrink-0 text-vermelho transition-transform duration-200 group-open:rotate-45" aria-hidden />
              </summary>
              <p className="mt-3 max-w-[65ch] leading-relaxed text-cinza">{f.r}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
