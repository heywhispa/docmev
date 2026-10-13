import { Plus } from "@phosphor-icons/react/dist/ssr";
import { OFERTA } from "@/lib/oferta";

const FAQ = [
  { p: "Preciso parar meus remédios?", r: "Não. O docMEV trabalha junto com seu tratamento atual. Conforme você melhora, seu médico poderá ajustar ou reduzir medicações." },
  { p: "Quanto tempo preciso dedicar?", r: "Apenas 15 minutos por dia. Os vídeos são curtos e as práticas são incorporadas na sua rotina normal." },
  { p: "E se eu não conseguir seguir?", r: "O programa é progressivo e adaptável. Você avança no seu ritmo. Além disso, tem suporte completo na comunidade." },
  { p: "Funciona na minha idade?", r: "Sim. Temos alunos de 35 a 78 anos. Os 8 pilares funcionam em qualquer idade, com adaptações específicas." },
  { p: "E se não funcionar para mim?", r: `Por isso temos garantia de ${OFERTA.garantiaDias} dias. Se não sentir diferença, devolvemos 100% do valor.` },
  { p: "Preciso comprar suplementos caros?", r: "Não. O foco são mudanças de estilo de vida. Suplementos são opcionais e ensinamos os mais baratos e eficazes." },
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
