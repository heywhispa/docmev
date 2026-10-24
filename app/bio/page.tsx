import { CONTEUDO } from "@/lib/variantes";
import { AvisosDev } from "../vendas/_components/avisos-dev";
import { BarraUrgencia } from "../vendas/_components/barra-urgencia";
import { Bonus } from "../vendas/_components/bonus";
import { CtaFinal } from "../vendas/_components/cta-final";
import { CtaFlutuante } from "../vendas/_components/cta-flutuante";
import { Depoimentos } from "../vendas/_components/depoimentos";
import { Entregaveis } from "../vendas/_components/entregaveis";
import { Escassez } from "../vendas/_components/escassez";
import { Faq } from "../vendas/_components/faq";
import { Garantia } from "../vendas/_components/garantia";
import { Hero } from "../vendas/_components/hero";
import { Investimento } from "../vendas/_components/investimento";
import { Notificacoes } from "../vendas/_components/notificacoes";
import { Pilares } from "../vendas/_components/pilares";
import { RastreioVariante } from "../vendas/_components/rastreio-variante";
import { Rodape } from "../vendas/_components/rodape";
import { Sobre } from "../vendas/_components/sobre";
import { VarianteProvider } from "../vendas/_components/variante-contexto";

/* Cópia da página de vendas (variante a) sem o delay da VSL: tudo aparece desde o começo.
   Se mudar algo em /vendas, replicar aqui (ou extrair um componente compartilhado). */

export const ensureStatic = "navigation";

export default function PaginaBio() {
  const variante = "a" as const;
  const conteudo = CONTEUDO[variante];

  return (
    <VarianteProvider variante={variante}>
    <main className="pb-20 md:pb-0" data-variante={variante}>
      <RastreioVariante variante={variante} />
      <AvisosDev variante={variante} />
      <BarraUrgencia />
      <Hero conteudo={conteudo.hero} comDelay={false} />
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
    </VarianteProvider>
  );
}
