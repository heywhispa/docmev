import { OFERTA, DR_ERALDO } from "@/lib/oferta";

/* Lembrete visível SÓ em desenvolvimento: some no build de produção.
   Lista o que ainda é placeholder na página. */
export function AvisosDev() {
  if (process.env.NODE_ENV === "production") return null;
  const pendencias = [
    OFERTA.checkoutUrl.startsWith("#") && "Link do checkout (NEXT_PUBLIC_CHECKOUT_URL)",
    OFERTA.vslEmbedUrl === "" && "URL da VSL (NEXT_PUBLIC_VSL_EMBED_URL)",
    DR_ERALDO.crm.includes("X") && "CRM, anos de experiência e nº de pacientes do Dr. Eraldo",
    OFERTA.whatsapp.includes("99999") && "WhatsApp e e-mail de suporte",
    "Depoimentos reais com autorização (validar com jurídico: CFM 2.336/2023)",
    "Foto do Dr. Eraldo na seção Sobre",
  ].filter(Boolean) as string[];
  return (
    <div className="bg-amber-100 px-4 py-2 text-xs text-amber-900">
      <strong>DEV:</strong> pendências antes de publicar: {pendencias.join(" · ")}
    </div>
  );
}
