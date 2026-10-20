import { OFERTA } from "@/lib/oferta";
import { CONTEUDO, type Variante } from "@/lib/variantes";

/* Lembrete visível SÓ em desenvolvimento: some no build de produção.
   Lista o que ainda é placeholder na página. */
export function AvisosDev({ variante }: { variante: Variante }) {
  if (process.env.NODE_ENV === "production") return null;
  const pendencias = [
    OFERTA.checkoutUrlCondicaoEspecial === OFERTA.checkoutUrl && "Link da condição especial 20% OFF / R$ 237 (NEXT_PUBLIC_CHECKOUT_URL_CUPOM); pop-up de saída desligado até lá",
    OFERTA.vslEmbedUrl === "" && "URL da VSL (NEXT_PUBLIC_VSL_EMBED_URL)",
    OFERTA.whatsapp.includes("99999") && "WhatsApp e e-mail de suporte",
    "Depoimentos reais com autorização (validar com jurídico: CFM 2.336/2023)",
  ].filter(Boolean) as string[];
  return (
    <div className="bg-amber-100 px-4 py-2 text-xs text-amber-900">
      <strong>DEV:</strong> variante <strong>{variante.toUpperCase()}</strong> ({CONTEUDO[variante].descricao}) · pendências antes
      de publicar: {pendencias.join(" · ")}
    </div>
  );
}
