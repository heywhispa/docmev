import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  // "/" é tratado no proxy.ts (sorteia a variante e redireciona pra /vendas?variante=X).
  // Teste A/B: /vendas?variante=b vira /vendas/b por baixo dos panos (a URL do
  // visitante não muda). Sem ?variante= ou com valor desconhecido, serve a padrão.
  // Mantém em sincronia com VARIANTES / VARIANTE_PADRAO em lib/variantes.ts.
  async rewrites() {
    return [
      {
        source: "/vendas",
        has: [{ type: "query", key: "variante", value: "(?<variante>a|b)" }],
        destination: "/vendas/:variante",
      },
      { source: "/vendas", destination: "/vendas/a" },
    ];
  },
  images: {
    // AVIF/WebP + srcset: o celular baixa a foto no tamanho da tela dele.
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    // CSS da rota injetado no HTML. Elimina o <link rel=stylesheet> que
    // bloqueia a renderização (padrão herdado do repo MFF-Paginas).
    inlineCss: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
