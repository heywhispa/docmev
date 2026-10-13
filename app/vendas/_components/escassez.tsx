"use client";
import { Warning } from "@phosphor-icons/react/dist/ssr";
import { OFERTA } from "@/lib/oferta";
import { formatarTempo, useContador } from "./use-contador";

/* Mesmo cronômetro da barra do topo: a página mostra um único prazo. */
export function Escassez() {
  const ms = useContador(OFERTA.contadorChave, OFERTA.contadorMinutos);
  const { h, m, s } = formatarTempo(ms);
  return (
    <section className="bg-vermelho py-14 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center lg:flex-row lg:justify-between lg:text-left">
        <div>
          <p className="flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wide lg:justify-start">
            <Warning weight="fill" className="size-5" aria-hidden /> Atenção: oferta limitada
          </p>
          <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">Esta oferta especial termina em</h2>
        </div>
        <div className="flex items-center gap-2 font-mono text-5xl font-bold tabular-nums sm:text-6xl" aria-live="off">
          {[h, m, s].map((v, i) => (
            <span key={i} className="flex items-center gap-2">
              <span className="rounded-dm bg-white/15 px-3 py-2">{v}</span>
              {i < 2 && <span className="text-white/60">:</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
