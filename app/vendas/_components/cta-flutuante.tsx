"use client";
import { useEffect, useState } from "react";
import { OFERTA, brl } from "@/lib/oferta";
import { CtaBotao } from "./cta-botao";

/* Barra fixa no rodapé do celular. Aparece depois que o CTA do hero sai da
   tela (IntersectionObserver, sem listener de scroll). */
export function CtaFlutuante() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const alvo = document.getElementById("hero-cta");
    if (!alvo) return;
    const obs = new IntersectionObserver(
      ([e]) => setVisivel(!e.isIntersecting && e.boundingClientRect.top < 0),
      { threshold: 0 },
    );
    obs.observe(alvo);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      aria-hidden={!visivel}
      className={`fixed inset-x-0 bottom-0 z-30 border-t border-borda bg-white/95 p-3 backdrop-blur transition-transform duration-300 ease-out md:hidden ${visivel ? "translate-y-0" : "translate-y-full"}`}
    >
      <div className="flex items-center gap-3">
        <div className="shrink-0 leading-tight">
          <p className="text-xs text-cinza-suave line-through">{brl(OFERTA.precoRegular)}</p>
          <p className="text-lg font-extrabold tabular-nums">{brl(OFERTA.precoHoje)}</p>
        </div>
        <CtaBotao tamanho="md" className="flex-1">Quero acessar agora</CtaBotao>
      </div>
    </div>
  );
}
