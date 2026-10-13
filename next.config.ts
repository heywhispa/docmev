import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    return [{ source: "/", destination: "/vendas", permanent: false }];
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
