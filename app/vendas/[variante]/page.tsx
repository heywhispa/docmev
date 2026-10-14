import { notFound } from "next/navigation";
import { CONTEUDO, VARIANTES, ehVariante } from "@/lib/variantes";
import { AvisosDev } from "../_components/avisos-dev";
import { BarraUrgencia } from "../_components/barra-urgencia";
import { Bonus } from "../_components/bonus";
import { CtaFinal } from "../_components/cta-final";
import { CtaFlutuante } from "../_components/cta-flutuante";
import { Depoimentos } from "../_components/depoimentos";
import { Entregaveis } from "../_components/entregaveis";
import { Escassez } from "../_components/escassez";
import { Faq } from "../_components/faq";
import { Garantia } from "../_components/garantia";
import { Hero } from "../_components/hero";
import { Investimento } from "../_components/investimento";
import { Notificacoes } from "../_components/notificacoes";
import { Pilares } from "../_components/pilares";
import { RastreioVariante } from "../_components/rastreio-variante";
import { Rodape } from "../_components/rodape";
import { Sobre } from "../_components/sobre";

/* Uma página estática por variante do teste A/B. O usuário chega por
   /vendas?v=b (reescrito em next.config.ts) ou direto por /vendas/b. */

export const ensureStatic = "navigation";

export function generateStaticParams() {
  return VARIANTES.map((variante) => ({ variante }));
}

export default async function PaginaVendas({ params }: { params: Promise<{ variante: string }> }) {
  const { variante } = await params;
  if (!ehVariante(variante)) notFound();
  const conteudo = CONTEUDO[variante];

  return (
    <main className="pb-20 md:pb-0" data-variante={variante}>
      <RastreioVariante variante={variante} />
      <AvisosDev variante={variante} />
      <BarraUrgencia />
      <Hero conteudo={conteudo.hero} />
      <Pilares />
      <Depoimentos />
      <Entregaveis />
      <Bonus />
      <Garantia />
      <Investimento />
      <Escassez />
      <Faq />
      <Sobre />
      <CtaFinal />
      <Rodape />
      <CtaFlutuante />
      <Notificacoes />
    </main>
  );
}
