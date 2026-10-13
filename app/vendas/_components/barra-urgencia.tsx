"use client";
import { Timer } from "@phosphor-icons/react/dist/ssr";
import { OFERTA } from "@/lib/oferta";
import { formatarTempo, useContador } from "./use-contador";

export function BarraUrgencia() {
  const ms = useContador(OFERTA.contadorChave, OFERTA.contadorMinutos);
  const { m, s } = formatarTempo(ms);
  return (
    <div className="sticky top-0 z-30 bg-vermelho text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-2.5 text-sm font-semibold sm:text-base">
        <Timer weight="bold" className="size-5 shrink-0" aria-hidden />
        <span>Desconto de {OFERTA.descontoPct}% liberado por</span>
        <span className="rounded-md bg-white/15 px-2.5 py-0.5 font-mono text-base tabular-nums tracking-wider sm:text-lg" aria-live="off">
          {m}:{s}
        </span>
      </div>
    </div>
  );
}
