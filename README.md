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
- `/termos-de-uso`, `/politica-de-privacidade`, `/politica-de-reembolso`: placeholders.

## Onde mexer

- `lib/oferta.ts`: preço, parcelas, links, cronômetro, dados do Dr. Eraldo.
- `lib/notificacoes.ts`: pop-ups de prova social (só com dado real) e pop-up de saída.
- `app/globals.css`: tokens da marca (cópia de `01_BRANDING-E-IDENTIDADE/docmev-tokens.css` no projeto do cliente).
- `app/vendas/_components/`: uma seção por arquivo, na ordem de `app/vendas/page.tsx`.
- `public/marca/`: logo, selo e ícones oficiais (SVG).

Em desenvolvimento, uma faixa amarela no topo lista o que ainda é placeholder. Ela some no build de produção.
