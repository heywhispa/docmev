import { Check, X } from "@phosphor-icons/react/dist/ssr";
import { OFERTA } from "@/lib/oferta";
import { CtaBotao } from "./cta-botao";

/* "A escolha" (VSL, 29:55–30:40): três opções, como no roteiro. */
const OPCAO_1 = [
  "Voltar pra rotina, pros remédios, pro cansaço",
  "Esperar o pior acontecer",
  "Daqui a 5 anos, pensar: “por que eu não agi quando tive a chance?”",
];
const OPCAO_2 = [
  "Mais uma segunda-feira",
  "Resolvendo o problema de forma errada",
  "Começando pela peça errada do dominó",
];
const OPCAO_3 = [
  "Descobrir a primeira peça do seu dominó",
  "Energia renovada e exames melhores",
  "Menos remédios",
  "Mais qualidade e perspectiva de vida",
];

export function CtaFinal() {
  return (
    <section className="dm-navy-textura relative overflow-hidden py-20 text-white lg:py-28">
      <div className="relative mx-auto max-w-6xl px-4">
        <h2 className="text-center text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          Você tem três opções agora
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          <div className="rounded-card border border-borda-clara bg-white/5 p-7 sm:p-8">
            <p className="text-sm font-bold uppercase tracking-wide text-white/50">Opção 1</p>
            <h3 className="mt-1 text-2xl font-extrabold">Fechar esta página</h3>
            <ul className="mt-6 space-y-3">
              {OPCAO_1.map((t) => (
                <li key={t} className="flex items-start gap-3 text-white/80">
                  <X weight="bold" className="mt-1 size-4 shrink-0 text-vermelho" aria-hidden />{t}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-card border border-borda-clara bg-white/5 p-7 sm:p-8">
            <p className="text-sm font-bold uppercase tracking-wide text-white/50">Opção 2</p>
            <h3 className="mt-1 text-2xl font-extrabold">Tentar sozinho mais uma vez</h3>
            <ul className="mt-6 space-y-3">
              {OPCAO_2.map((t) => (
                <li key={t} className="flex items-start gap-3 text-white/80">
                  <X weight="bold" className="mt-1 size-4 shrink-0 text-vermelho" aria-hidden />{t}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-card bg-azul-claro p-7 text-navy sm:p-8">
            <p className="text-sm font-bold uppercase tracking-wide text-vermelho">Opção 3</p>
            <h3 className="mt-1 text-2xl font-extrabold">Entrar no docMEV e, em {OFERTA.programaSemanas} semanas...</h3>
            <ul className="mt-6 space-y-3">
              {OPCAO_3.map((t) => (
                <li key={t} className="flex items-start gap-3 font-medium">
                  <Check weight="bold" className="mt-1 size-4 shrink-0 text-vermelho" aria-hidden />{t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center text-center">
          <p className="text-xl font-semibold">Seu coração bate 100 mil vezes por dia. Cada batida é uma chance de mudar.</p>
          <p className="mt-2 max-w-xl text-balance text-2xl font-extrabold text-azul-claro sm:text-3xl">
            Mas ele não vai esperar pra sempre.
          </p>
          <div className="mt-10 w-full sm:w-auto">
            <CtaBotao className="w-full sm:whitespace-nowrap">Quero acessar o docMEV agora</CtaBotao>
          </div>
        </div>
      </div>
    </section>
  );
}
