import { cn } from "@/lib/utils";

export type IconeMarca =
  | "estetoscopio" | "capsulas" | "coracao-pulso" | "maleta"
  | "dna" | "curativo" | "pulso" | "atomo";

/* Ícones oficiais do branding (SVG com fill fixo em /public/marca/icones),
   aplicados por máscara CSS pra herdar a cor do texto. */
export function IconeMarca({ nome, className }: { nome: IconeMarca; className?: string }) {
  return (
    <span
      aria-hidden
      className={cn("dm-icone size-10", className)}
      style={{ ["--icone" as string]: `url(/marca/icones/docmev-icone-${nome}.svg)` }}
    />
  );
}
