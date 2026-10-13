import Image from "next/image";
import Link from "next/link";

/* TODO: textos jurídicos reais. Páginas existem pra os links do rodapé não
   quebrarem enquanto o jurídico não entrega o conteúdo. */
export function PaginaLegal({ titulo }: { titulo: string }) {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <Link href="/vendas"><Image src="/marca/docmev-logo-navy.svg" alt="docMEV" width={120} height={26} className="h-6 w-auto" /></Link>
      <h1 className="mt-10 text-3xl font-extrabold tracking-tight">{titulo}</h1>
      <p className="mt-6 leading-relaxed text-cinza">Conteúdo em elaboração. Dúvidas: suporte@docmev.com.br.</p>
    </main>
  );
}
