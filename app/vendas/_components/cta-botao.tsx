"use client";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { OFERTA } from "@/lib/oferta";
import { comSrcHotmart } from "@/lib/variantes";
import { useVariante } from "./variante-contexto";

declare global {
  interface Window {
    /** definida pelo script de UTMs em app/layout.tsx */
    docmevAtualizarLinks?: () => void;
  }
}

type Props = {
  children: React.ReactNode;
  href?: string;
  variante?: "vermelho" | "navy";
  pulsante?: boolean;
  tamanho?: "md" | "lg";
  className?: string;
  id?: string;
};

/* Único botão de ação da página. Vermelho = "energia vital" da paleta e
   contraste 5,9:1 com texto branco. Navy = gradiente do branding.
   O link sempre sai com src=variante-X pra Hotmart atribuir a venda ao teste A/B. */
export function CtaBotao({
  children,
  href = OFERTA.checkoutUrl,
  variante = "vermelho",
  pulsante = false,
  tamanho = "lg",
  className,
  id,
}: Props) {
  const varianteTeste = useVariante();

  // Botão que nasce depois do carregamento (pop-up de saída) não foi visto
  // pelo script de UTMs do layout; reaplica. Nos botões iniciais o script
  // ainda não carregou aqui e cuida sozinho logo em seguida.
  useEffect(() => {
    window.docmevAtualizarLinks?.();
  }, []);

  return (
    <a
      id={id}
      href={comSrcHotmart(href, varianteTeste)}
      className={cn(
        "inline-flex w-full items-center justify-center rounded-dm text-center font-bold text-white transition-transform duration-200 ease-out sm:w-auto",
        "active:translate-y-px active:scale-[0.985] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vermelho",
        tamanho === "lg" ? "px-8 py-5 text-lg sm:px-10" : "px-6 py-3.5 text-base",
        variante === "vermelho" &&
          "bg-vermelho shadow-cta-vermelho hover:bg-vermelho-esc",
        variante === "navy" &&
          "bg-[linear-gradient(135deg,var(--dm-azul-medio),var(--dm-navy))] shadow-cta hover:bg-[linear-gradient(135deg,var(--dm-navy),var(--dm-azul-medio))]",
        pulsante && "animate-pulso-cta",
        className,
      )}
    >
      {children}
    </a>
  );
}
