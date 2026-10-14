# docmev

Páginas do docMEV (Dr. Eraldo Moraes). Next.js 16 + Tailwind 4 + Manrope.

## Rodar

```bash
pnpm install
cp .env.example .env.local   # preencher checkout e VSL
pnpm dev                     # http://localhost:3000/vendas
```

## Rotas

- `/vendas`: página de vendas (VSL). `/` e `/vendas` sem parâmetro sorteiam a variante do teste A/B e redirecionam pra `/vendas?variante=X`.
- `/vendas?variante=a` e `/vendas?variante=b`: forçam a variante (ver abaixo). `/vendas/a` e `/vendas/b` servem pra pré-visualizar sem mexer no cookie.
- `/termos-de-uso`, `/politica-de-privacidade`, `/politica-de-reembolso`: placeholders.

## Onde mexer

- `lib/oferta.ts`: preço, parcelas, links, cronômetro, dados do Dr. Eraldo.
- `lib/variantes.ts`: variantes do teste A/B (hoje: título, subtítulo e CTA do hero). Nova letra ali + no `rewrites` do `next.config.ts`.
- `lib/notificacoes.ts`: pop-ups de prova social (só com dado real) e pop-up de saída.
- `app/globals.css`: tokens da marca (cópia de `01_BRANDING-E-IDENTIDADE/docmev-tokens.css` no projeto do cliente).
- `app/vendas/_components/`: uma seção por arquivo, na ordem de `app/vendas/page.tsx`.
- `public/marca/`: logo, selo e ícones oficiais (SVG).

Em desenvolvimento, uma faixa amarela no topo lista o que ainda é placeholder. Ela some no build de produção.

## Teste A/B

O `proxy.ts` sorteia 50/50 quem chega sem `?variante=`, grava o cookie `docmev_variante` (30 dias) e redireciona pra `/vendas?variante=X`, mantendo UTMs. Quem chega com `?variante=` válido fica nele e o cookie é atualizado.

Cada variante é uma página estática em `app/vendas/[variante]`. O `?variante=` da URL é reescrito pela rota certa no `next.config.ts`; a URL do visitante não muda. Todo botão de checkout sai com `src=variante-a` ou `src=variante-b`, que a Hotmart mostra como origem no relatório de vendas (as UTMs continuam indo pro `sck` pelo script do layout). No GTM, o evento `variante_pagina` traz `{ variante }` e o `<html>` recebe `data-variante`.

Nos anúncios, pode mandar pra `/vendas` (sorteio) ou forçar com `/vendas?variante=b`. `/vendas/b` direto pula o sorteio, mas o checkout ainda recebe o `src`.
