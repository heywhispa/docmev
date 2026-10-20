"use client";
import { useEffect, useState } from "react";
import { Fire, X } from "@phosphor-icons/react/dist/ssr";
import { NOTIFICACOES, POPUP_SAIDA_ATIVO } from "@/lib/notificacoes";
import { OFERTA, brl } from "@/lib/oferta";
import { CtaBotao } from "./cta-botao";

const CHAVE_SAIDA = "docmev_popup_saida";

/* Toasts agendados (só com dado real em lib/notificacoes.ts) e pop-up de
   saída com a condição especial da VSL (20% OFF, à vista), uma vez por
   sessão, só no desktop (o celular não tem "mouse saindo da janela").
   Só liga quando existe um link próprio pra condição especial: prometer
   desconto e mandar pro checkout cheio é propaganda enganosa. */
const CONDICAO_ESPECIAL_DISPONIVEL = OFERTA.checkoutUrlCondicaoEspecial !== OFERTA.checkoutUrl;
export function Notificacoes() {
  const [toast, setToast] = useState<string | null>(null);
  const [saida, setSaida] = useState(false);

  useEffect(() => {
    const timers = NOTIFICACOES.flatMap((n) => [
      window.setTimeout(() => setToast(n.texto), n.aposSegundos * 1000),
      window.setTimeout(() => setToast((t) => (t === n.texto ? null : t)), n.aposSegundos * 1000 + 6000),
    ]);
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (!POPUP_SAIDA_ATIVO || !CONDICAO_ESPECIAL_DISPONIVEL) return;
    // Só em dispositivo com mouse: no toque não existe "cursor saindo da janela".
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const jaViu = () => { try { return sessionStorage.getItem(CHAVE_SAIDA) === "1"; } catch { return false; } };
    const marcar = () => { try { sessionStorage.setItem(CHAVE_SAIDA, "1"); } catch {} };
    const aoSair = (e: MouseEvent) => {
      if (e.clientY > 0 || jaViu()) return;
      marcar();
      setSaida(true);
    };
    document.addEventListener("mouseleave", aoSair);
    return () => document.removeEventListener("mouseleave", aoSair);
  }, []);

  useEffect(() => {
    if (!saida) return;
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setSaida(false);
    document.addEventListener("keydown", esc);
    return () => document.removeEventListener("keydown", esc);
  }, [saida]);

  return (
    <>
      {toast && (
        <div role="status" className="fixed bottom-24 left-4 z-40 flex max-w-xs items-center gap-3 rounded-card bg-white p-4 text-sm font-semibold text-navy shadow-card ring-1 ring-borda md:bottom-6">
          <Fire weight="fill" className="size-5 shrink-0 text-vermelho" aria-hidden />
          {toast}
        </div>
      )}

      {saida && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy-esc/80 p-4 backdrop-blur-sm" onClick={() => setSaida(false)}>
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="popup-saida-titulo"
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-card bg-white p-8 text-navy shadow-[0_40px_100px_rgba(0,0,0,0.5)]"
          >
            <button type="button" onClick={() => setSaida(false)} aria-label="Fechar" className="absolute right-4 top-4 rounded-full p-2 text-cinza-suave hover:bg-azul-claro hover:text-navy">
              <X weight="bold" className="size-5" />
            </button>
            <p className="text-sm font-bold uppercase tracking-wide text-vermelho">Condição especial liberada</p>
            <h2 id="popup-saida-titulo" className="mt-2 text-2xl font-extrabold leading-tight">
              docMEV completo com {OFERTA.descontoCondicaoEspecialPct}% OFF: {brl(OFERTA.precoCondicaoEspecial)} à vista
            </h2>
            <p className="mt-3 text-cinza">Válida só nesta visita. Os 3 bônus continuam inclusos.</p>
            <div className="mt-6">
              <CtaBotao href={OFERTA.checkoutUrlCondicaoEspecial} tamanho="md" className="w-full">Quero a condição especial</CtaBotao>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
