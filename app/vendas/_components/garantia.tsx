import Image from "next/image";
import { ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import { OFERTA } from "@/lib/oferta";

/* Garantia Dupla do Cardiologista (VSL, 27:10–28:00).
   ATENÇÃO: a Hotmart devolve 100% automaticamente nos 30 dias. A devolução em
   dobro da garantia 2 é compromisso do Dr. Eraldo, paga por fora: precisa de
   regra escrita (prazo, prova de aplicação) na Política de Reembolso. */
export function Garantia() {
  return (
    <section className="dm-navy-textura relative overflow-hidden py-20 text-white lg:py-28">
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 lg:grid-cols-12 lg:items-center">
        <div className="flex flex-col items-start gap-6 lg:col-span-4">
          <Image src="/marca/docmev-selo.svg" alt="" width={160} height={150} className="size-36 sm:size-40" />
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">Garantia Dupla do Cardiologista</h2>
          <p className="text-lg font-semibold text-azul-claro">Você não tem nada a perder. Só a sua saúde e os seus anos de vida, se decidir continuar como está.</p>
        </div>

        <div className="grid gap-5 lg:col-span-8 lg:grid-cols-2">
          <article className="rounded-card border border-borda-clara bg-white/5 p-7 backdrop-blur-sm sm:p-8">
            <ShieldCheck weight="fill" className="size-10 text-azul-claro" aria-hidden />
            <h3 className="mt-5 text-xl font-extrabold">Garantia 1: {OFERTA.garantiaDias} dias incondicional</h3>
            <p className="mt-3 leading-relaxed text-white/80">
              Se em {OFERTA.garantiaDias} dias você achar, por qualquer motivo, que o docMEV não é pra você, é só mandar um e-mail. Devolvemos 100% do seu dinheiro. Sem perguntas.
            </p>
          </article>
          <article className="rounded-card border border-borda-clara bg-white/5 p-7 backdrop-blur-sm sm:p-8">
            <ShieldCheck weight="fill" className="size-10 text-azul-claro" aria-hidden />
            <h3 className="mt-5 text-xl font-extrabold">Garantia 2: devolução em dobro</h3>
            <p className="mt-3 leading-relaxed text-white/80">
              Faça o teste de autodiagnóstico no primeiro dia e aplique o protocolo por {OFERTA.programaSemanas} semanas, com os planos de ação e os materiais de apoio. Se no final você não sentir diferença na energia, no sono ou nos seus exames, o Dr. Eraldo devolve <strong className="text-white">o dobro do que você investiu</strong>.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
