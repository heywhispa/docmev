"use client";
import { useEffect, useState } from "react";

/* Cronômetro evergreen persistido no localStorage: a pessoa que volta à
   página continua do ponto em que parou. Devolve null até o primeiro tick
   no cliente, pra não divergir do HTML do servidor. */
export function useContador(chave: string, minutos: number) {
  const [restanteMs, setRestanteMs] = useState<number | null>(null);

  useEffect(() => {
    let fim = 0;
    try { fim = Number(localStorage.getItem(chave)) || 0; } catch {}
    if (!fim || fim < Date.now()) {
      fim = Date.now() + minutos * 60_000;
      try { localStorage.setItem(chave, String(fim)); } catch {}
    }
    const tick = () => setRestanteMs(Math.max(0, fim - Date.now()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [chave, minutos]);

  return restanteMs;
}

export function formatarTempo(ms: number | null) {
  if (ms === null) return { h: "--", m: "--", s: "--" };
  const total = Math.floor(ms / 1000);
  const pad = (n: number) => String(n).padStart(2, "0");
  return {
    h: pad(Math.floor(total / 3600)),
    m: pad(Math.floor((total % 3600) / 60)),
    s: pad(total % 60),
  };
}
