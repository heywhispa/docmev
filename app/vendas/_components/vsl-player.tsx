"use client";
import { createElement, useEffect, useState } from "react";
import { Play } from "@phosphor-icons/react/dist/ssr";
import { OFERTA } from "@/lib/oferta";

/* Player da VSL (VTurb, vertical 3:4). Mostra o poster; só no clique monta o
   <vturb-smartplayer> e carrega o script do VTurb (~1 MB), que fica fora do
   carregamento inicial. Sem playerId, usa o iframe de NEXT_PUBLIC_VSL_EMBED_URL;
   sem os dois, mostra o poster com aviso (placeholder até a VSL ficar pronta). */
export function VslPlayer() {
  const [ativo, setAtivo] = useState(false);
  const playerId: string = OFERTA.vslVturb.playerId;
  const scriptUrl: string = OFERTA.vslVturb.scriptUrl;
  const temVturb = playerId !== "";
  const temIframe = OFERTA.vslEmbedUrl !== "";
  const temVideo = temVturb || temIframe;

  useEffect(() => {
    if (!ativo || !temVturb) return;
    if (document.querySelector(`script[src="${scriptUrl}"]`)) return;
    const script = document.createElement("script");
    script.src = scriptUrl;
    script.async = true;
    document.head.appendChild(script);
  }, [ativo, temVturb, scriptUrl]);

  return (
    <div
      className={`relative w-full overflow-hidden rounded-card bg-navy-esc shadow-[0_30px_80px_rgba(0,0,0,0.45)] ring-1 ring-white/10 ${
        temVturb ? "mx-auto aspect-[3/4] max-w-[400px]" : "aspect-video"
      }`}
    >
      {ativo && temVturb
        ? createElement("vturb-smartplayer", {
            id: playerId,
            style: { position: "absolute", inset: 0, display: "block", width: "100%", height: "100%" },
          })
        : ativo && temIframe ? (
          <iframe
            src={OFERTA.vslEmbedUrl}
            title="Vídeo: o método dos 8 pilares"
            className="absolute inset-0 size-full"
            allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => temVideo && setAtivo(true)}
            className="group absolute inset-0 flex flex-col items-center justify-center gap-5 text-white"
            aria-label={temVideo ? "Assistir ao vídeo" : "Vídeo em breve"}
          >
            <span className="flex size-20 items-center justify-center rounded-full bg-vermelho shadow-cta-vermelho transition-transform duration-300 ease-out group-hover:scale-105 sm:size-24">
              <Play weight="fill" className="ml-1 size-9 sm:size-11" aria-hidden />
            </span>
            <span className="text-sm font-semibold text-white/80">
              {temVideo ? "Toque para assistir" : "VSL em produção: player entra aqui"}
            </span>
          </button>
        )}
    </div>
  );
}
