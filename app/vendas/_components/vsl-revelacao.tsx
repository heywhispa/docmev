"use client";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { OFERTA } from "@/lib/oferta";

/* Revela a tarja vermelha e tudo que está abaixo da VSL quando o vídeo chega
   ao segundo da variante sorteada no teste A/B (OFERTA.vslRevelarEmPorVariante;
   sem variante conhecida, OFERTA.vslRevelarEm). Usa a API do smartplayer da VTurb
   (window.smartplayer.instances, evento "timeupdate" com o tempo em segundos).
   Sem player VTurb configurado ou com OFERTA.vslComDelay = false, revela na hora. Depois de revelado, fica revelado. */

type InstanciaVturb = { on: (evento: "timeupdate", fn: (tempo: number) => void) => void };
type JanelaVturb = Window & { smartplayer?: { instances?: InstanciaVturb[] } };

const RevelacaoContext = createContext(false);

export function VslRevelacao({ children }: { children: ReactNode }) {
  const playerId: string = OFERTA.vslVturb.playerId;
  const comDelay: boolean = OFERTA.vslComDelay;
  const [revelado, setRevelado] = useState(!comDelay || playerId === "");

  useEffect(() => {
    if (!comDelay || playerId === "") return;
    let inscrito = false;
    const timer = window.setInterval(() => {
      const instancias = (window as JanelaVturb).smartplayer?.instances;
      if (inscrito || !instancias || instancias.length === 0) return;
      inscrito = true;
      window.clearInterval(timer);
      // O script do teste A/B troca o id do elemento para "vid-<id da variante>".
      const variante = document.querySelector("vturb-smartplayer")?.id.replace(/^vid-/, "") ?? "";
      const revelarEm = OFERTA.vslRevelarEmPorVariante[variante] ?? OFERTA.vslRevelarEm;
      instancias[0].on("timeupdate", (tempo) => {
        if (tempo >= revelarEm) setRevelado(true);
      });
    }, 500);
    return () => window.clearInterval(timer);
  }, [comDelay, playerId]);

  return <RevelacaoContext.Provider value={revelado}>{children}</RevelacaoContext.Provider>;
}

export function Revelado({ children }: { children: ReactNode }) {
  return useContext(RevelacaoContext) ? <>{children}</> : null;
}
