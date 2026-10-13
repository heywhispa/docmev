import { AvisosDev } from "./_components/avisos-dev";
import { BarraUrgencia } from "./_components/barra-urgencia";
import { Bonus } from "./_components/bonus";
import { CtaFinal } from "./_components/cta-final";
import { CtaFlutuante } from "./_components/cta-flutuante";
import { Depoimentos } from "./_components/depoimentos";
import { Entregaveis } from "./_components/entregaveis";
import { Escassez } from "./_components/escassez";
import { Faq } from "./_components/faq";
import { Garantia } from "./_components/garantia";
import { Hero } from "./_components/hero";
import { Investimento } from "./_components/investimento";
import { Notificacoes } from "./_components/notificacoes";
import { Pilares } from "./_components/pilares";
import { Rodape } from "./_components/rodape";
import { Sobre } from "./_components/sobre";

export default function PaginaVendas() {
  return (
    <main className="pb-20 md:pb-0">
      <AvisosDev />
      <BarraUrgencia />
      <Hero />
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
