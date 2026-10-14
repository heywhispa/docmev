"use client";
import { useEffect } from "react";
import type { Variante } from "@/lib/variantes";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/* Avisa o GTM qual variante foi servida e marca o <html>, pra o teste A/B
   poder ser cruzado com cliques no CTA e conversões. Não renderiza nada. */
export function RastreioVariante({ variante }: { variante: Variante }) {
  useEffect(() => {
    document.documentElement.dataset.variante = variante;
    window.dataLayer = window.dataLayer ?? [];
    window.dataLayer.push({ event: "variante_pagina", variante });
  }, [variante]);
  return null;
}
