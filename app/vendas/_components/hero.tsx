import { CreditCard, LockKey, ShieldCheck, Warning } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { OFERTA, brl } from "@/lib/oferta";
import { CtaBotao } from "./cta-botao";
import { VslPlayer } from "./vsl-player";

export function Hero() {
  return (
    <section className="dm-navy-textura relative overflow-hidden text-white">
      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 pb-16 pt-8 text-center sm:pt-10 lg:pb-24">
        <Image
          src="/marca/docmev-logo-branco.svg"
          alt="docMEV"
          width={132}
          height={28}
          priority
          className="mb-8 h-7 w-auto"
        />

        <p className="mb-5 flex max-w-3xl items-start gap-2 text-left text-sm font-semibold leading-snug text-azul-claro sm:text-center sm:text-base">
          <Warning weight="fill" className="mt-0.5 size-5 shrink-0 text-vermelho" aria-hidden />
          <span>
            <strong className="text-white">Atenção:</strong> se você tem pressão alta, colesterol elevado,
            glicemia alterada ou sente cansaço constante, esta pode ser a página mais importante que você vai ler este ano
          </span>
        </p>

        <h1 className="max-w-4xl text-balance text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-[3.25rem]">
          A American Heart Association revelou os 8 fatores que determinam quem vive muito e quem morre cedo
        </h1>

        <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-azul-claro sm:text-lg">
          Descubra como milhares de brasileiros já usaram este protocolo para reduzir o risco de infarto,
          AVC e morte súbita, sem depender de remédios
        </p>

        <div className="mt-10 w-full max-w-4xl">
          <VslPlayer />
          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/70 sm:text-base">
            Assista ao vídeo acima para descobrir o método completo dos 8 pilares que pode adicionar 10, 15 ou até 20 anos na sua vida
          </p>
        </div>

        <div id="hero-cta" className="mt-10 flex w-full flex-col items-center gap-4">
          <CtaBotao pulsante className="sm:whitespace-nowrap">Quero acessar o docMEV agora</CtaBotao>
          <p className="text-sm font-medium text-azul-claro">
            Menos de {brl(OFERTA.porDia, true)} por dia para transformar sua saúde
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-white/75 sm:text-sm">
            <li className="flex items-center gap-1.5"><ShieldCheck weight="fill" className="size-4 text-azul-claro" aria-hidden />Garantia de {OFERTA.garantiaDias} dias</li>
            <li className="flex items-center gap-1.5"><LockKey weight="fill" className="size-4 text-azul-claro" aria-hidden />Compra 100% segura</li>
            <li className="flex items-center gap-1.5"><CreditCard weight="fill" className="size-4 text-azul-claro" aria-hidden />Em até {OFERTA.parcelas}x</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
