import { Check, X } from "@phosphor-icons/react/dist/ssr";
import { CtaBotao } from "./cta-botao";

const OPCAO_1 = [
  "Tomando cada vez mais remédios",
  "Sentindo o corpo piorar ano após ano",
  "Vivendo com medo do próximo exame",
  "Esperando o pior acontecer",
];
const OPCAO_2 = [
  "Energia renovada",
  "Exames normalizados",
  "Menos remédios (ou nenhum)",
  "10 a 20 anos a mais de vida com qualidade",
];

export function CtaFinal() {
  return (
    <section className="dm-navy-textura relative overflow-hidden py-20 text-white lg:py-28">
      <div className="relative mx-auto max-w-5xl px-4">
        <h2 className="text-center text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          A decisão que pode salvar sua vida
        </h2>
        <p className="mt-4 text-center text-lg text-azul-claro">Você tem duas opções agora:</p>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="rounded-card border border-borda-clara bg-white/5 p-7 sm:p-8">
            <p className="text-sm font-bold uppercase tracking-wide text-white/50">Opção 1</p>
            <h3 className="mt-1 text-2xl font-extrabold">Continuar como está</h3>
            <ul className="mt-6 space-y-3">
              {OPCAO_1.map((t) => (
                <li key={t} className="flex items-start gap-3 text-white/80">
                  <X weight="bold" className="mt-1 size-4 shrink-0 text-vermelho" aria-hidden />{t}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-card bg-azul-claro p-7 text-navy sm:p-8">
            <p className="text-sm font-bold uppercase tracking-wide text-vermelho">Opção 2</p>
            <h3 className="mt-1 text-2xl font-extrabold">Transformar sua saúde em 8 semanas</h3>
            <ul className="mt-6 space-y-3">
              {OPCAO_2.map((t) => (
                <li key={t} className="flex items-start gap-3 font-medium">
                  <Check weight="bold" className="mt-1 size-4 shrink-0 text-vermelho" aria-hidden />{t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center text-center">
          <p className="text-xl font-semibold">A escolha é sua. Mas lembre-se:</p>
          <p className="mt-2 max-w-xl text-balance text-2xl font-extrabold text-azul-claro sm:text-3xl">
            Cada dia sem os 8 pilares é um dia a menos de vida.
          </p>
          <div className="mt-10 w-full sm:w-auto">
            <CtaBotao className="w-full sm:whitespace-nowrap">Quero começar minha transformação agora</CtaBotao>
          </div>
        </div>
      </div>
    </section>
  );
}
