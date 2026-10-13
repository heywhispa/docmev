import Image from "next/image";
import Link from "next/link";
import { Bank, CreditCard, DeviceMobile, EnvelopeSimple, LockKey, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { OFERTA } from "@/lib/oferta";

export function Rodape() {
  const ano = 2026; // fixo: new Date() quebra o prerender com cacheComponents
  return (
    <footer className="bg-navy-esc py-16 text-white/75">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 md:grid-cols-3">
        <div>
          <Image src="/marca/docmev-logo-branco.svg" alt="docMEV" width={120} height={26} className="h-6 w-auto" />
          <p className="mt-5 flex items-start gap-2 text-sm leading-relaxed">
            <LockKey weight="fill" className="mt-0.5 size-4 shrink-0 text-azul-claro" aria-hidden />
            <span><strong className="text-white">Compra 100% segura.</strong> Site protegido com certificado SSL 256-bit. Seus dados estão completamente seguros.</span>
          </p>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-white">Formas de pagamento</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex items-center gap-2"><CreditCard weight="fill" className="size-4 text-azul-claro" aria-hidden />Cartão (até {OFERTA.parcelas}x)</li>
            <li className="flex items-center gap-2"><DeviceMobile weight="fill" className="size-4 text-azul-claro" aria-hidden />PIX</li>
            <li className="flex items-center gap-2"><Bank weight="fill" className="size-4 text-azul-claro" aria-hidden />Boleto</li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-white">Dúvidas?</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href={`mailto:${OFERTA.suporteEmail}`} className="flex items-center gap-2 hover:text-white"><EnvelopeSimple weight="fill" className="size-4 text-azul-claro" aria-hidden />{OFERTA.suporteEmail}</a></li>
            <li><a href={OFERTA.whatsappLink} className="flex items-center gap-2 hover:text-white"><WhatsappLogo weight="fill" className="size-4 text-azul-claro" aria-hidden />WhatsApp: {OFERTA.whatsapp}</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 px-4 pt-8 text-xs leading-relaxed">
        <p>© {ano} {OFERTA.nomeCompleto}. Todos os direitos reservados.</p>
        <p className="mt-2">Este produto não substitui o acompanhamento médico. Sempre consulte seu médico.</p>
        <nav className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
          <Link href="/termos-de-uso" className="hover:text-white">Termos de Uso</Link>
          <Link href="/politica-de-privacidade" className="hover:text-white">Política de Privacidade</Link>
          <Link href="/politica-de-reembolso" className="hover:text-white">Política de Reembolso</Link>
        </nav>
      </div>
    </footer>
  );
}
