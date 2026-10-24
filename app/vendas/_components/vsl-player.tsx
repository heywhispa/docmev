"use client";
import { createElement, useEffect } from "react";
import { OFERTA } from "@/lib/oferta";

/* Player da VSL (VTurb, vertical 3:4). Sem poster nem placeholder: monta o
   <vturb-smartplayer> e carrega o script da VTurb assim que a página abre.
   Sem playerId, usa o iframe de NEXT_PUBLIC_VSL_EMBED_URL; sem os dois, não renderiza nada. */
export function VslPlayer() {
  const playerId: string = OFERTA.vslVturb.playerId;
  const scriptUrl: string = OFERTA.vslVturb.scriptUrl;
  const temVturb = playerId !== "";
  const temIframe = OFERTA.vslEmbedUrl !== "";

  useEffect(() => {
    if (!temVturb) return;
    if (document.querySelector(`script[src="${scriptUrl}"]`)) return;
    const script = document.createElement("script");
    script.src = scriptUrl;
    script.async = true;
    document.head.appendChild(script);
  }, [temVturb, scriptUrl]);

  if (temVturb) {
    return (
      <div className="mx-auto w-full max-w-[400px]">
        {createElement("vturb-smartplayer", {
          id: playerId,
          style: { display: "block", margin: "0 auto", width: "100%" },
        })}
      </div>
    );
  }

  if (temIframe) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-card bg-navy-esc shadow-[0_30px_80px_rgba(0,0,0,0.45)] ring-1 ring-white/10">
        <iframe
          src={OFERTA.vslEmbedUrl}
          title="Vídeo: o método dos 8 pilares"
          className="absolute inset-0 size-full"
          allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
          allowFullScreen
        />
      </div>
    );
  }

  return null;
}
