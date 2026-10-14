"use client";
import { createContext, useContext } from "react";
import { VARIANTE_PADRAO, type Variante } from "@/lib/variantes";

/* Deixa a variante do teste A/B acessível a qualquer componente cliente da
   página (hoje: CtaBotao, pra montar o src da Hotmart) sem passar prop por
   todas as seções. Renderiza igual no servidor e no cliente. */

const VarianteContexto = createContext<Variante>(VARIANTE_PADRAO);

export function VarianteProvider({ variante, children }: { variante: Variante; children: React.ReactNode }) {
  return <VarianteContexto.Provider value={variante}>{children}</VarianteContexto.Provider>;
}

export function useVariante() {
  return useContext(VarianteContexto);
}
