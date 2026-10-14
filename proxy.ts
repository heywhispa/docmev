import { NextResponse, type NextRequest } from "next/server";
import {
  COOKIE_VARIANTE,
  COOKIE_VARIANTE_DIAS,
  PARAM_VARIANTE,
  VARIANTES,
  ehVariante,
  type Variante,
} from "@/lib/variantes";

/* Sorteio do teste A/B. Roda em "/" e "/vendas".

   1. Se a URL já traz ?v= válido (link de anúncio), respeita e grava no cookie,
      pra pessoa continuar na mesma variante se voltar sem o parâmetro.
   2. Sem ?v=: usa o cookie; sem cookie, sorteia 50/50 e grava.
   3. Redireciona pra /vendas?v=X mantendo os outros parâmetros (UTMs). A URL
      fica com o v explícito pro script de UTMs levar a variante até o checkout.

   A página em si continua estática: quem serve /vendas?v=X é o rewrite do
   next.config.ts pra /vendas/X. */

function sortear(): Variante {
  return VARIANTES[Math.floor(Math.random() * VARIANTES.length)];
}

export function proxy(request: NextRequest) {
  const url = request.nextUrl;
  const daUrl = url.searchParams.get(PARAM_VARIANTE) ?? undefined;
  const doCookie = request.cookies.get(COOKIE_VARIANTE)?.value;

  const variante: Variante = ehVariante(daUrl) ? daUrl : ehVariante(doCookie) ? doCookie : sortear();

  let resposta: NextResponse;
  if (url.pathname === "/vendas" && daUrl === variante) {
    resposta = NextResponse.next();
  } else {
    const destino = url.clone();
    destino.pathname = "/vendas";
    destino.searchParams.set(PARAM_VARIANTE, variante);
    resposta = NextResponse.redirect(destino, 307);
  }

  if (doCookie !== variante) {
    resposta.cookies.set(COOKIE_VARIANTE, variante, {
      path: "/",
      maxAge: 60 * 60 * 24 * COOKIE_VARIANTE_DIAS,
      sameSite: "lax",
    });
  }
  return resposta;
}

export const config = {
  matcher: ["/", "/vendas"],
};
