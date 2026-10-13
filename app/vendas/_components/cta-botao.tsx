import { cn } from "@/lib/utils";
import { OFERTA } from "@/lib/oferta";

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
   contraste 5,9:1 com texto branco. Navy = gradiente do branding. */
export function CtaBotao({
  children,
  href = OFERTA.checkoutUrl,
  variante = "vermelho",
  pulsante = false,
  tamanho = "lg",
  className,
  id,
}: Props) {
  return (
    <a
      id={id}
      href={href}
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
