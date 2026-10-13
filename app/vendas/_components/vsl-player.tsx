"use client";
import { useState } from "react";
import { Play } from "@phosphor-icons/react/dist/ssr";
import { OFERTA } from "@/lib/oferta";

/* Player da VSL. Com URL de embed configurada, o iframe só é criado depois
   do clique no poster: economiza ~1 MB de player no carregamento. Sem URL,
   mostra o poster com aviso (placeholder até a VSL ficar pronta). */
export function VslPlayer() {
  const [ativo, setAtivo] = useState(false);
  const temVideo = OFERTA.vslEmbedUrl !== "";

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-card bg-navy-esc shadow-[0_30px_80px_rgba(0,0,0,0.45)] ring-1 ring-white/10">
      {ativo && temVideo ? (
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
