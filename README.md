# docmev

Páginas do docMEV (Dr. Eraldo Moraes). Next.js 16 + Tailwind 4 + Manrope.

## Rodar

```bash
pnpm install
cp .env.example .env.local   # preencher checkout e VSL
pnpm dev                     # http://localhost:3000/vendas
```

## Rotas

- `/vendas`: página de vendas (VSL). `/` redireciona pra ela.
- `/vendas?v=a` e `/vendas?v=b`: variantes do teste A/B (ver abaixo). `/vendas/a` e `/vendas/b` servem pra pré-visualizar.
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

Cada variante é uma página estática em `app/vendas/[variante]`. O `?v=` da URL é reescrito pela rota certa no `next.config.ts`; a URL do visitante não muda e o script de UTMs leva o `v` pro checkout da Hotmart (e pro `sck`). No GTM, o evento `variante_pagina` traz `{ variante }` e o `<html>` recebe `data-variante`.

Nos anúncios, use sempre a forma com parâmetro (`/vendas?v=b`), não `/vendas/b`, pra variante chegar ao checkout.
