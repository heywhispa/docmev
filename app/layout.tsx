import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";

// Fonte oficial de texto da DocMev. Sem preload de propósito: com o CSS
// inline (next.config) o navegador descobre a fonte ao ler o HTML e o
// preload só atrasava o primeiro paint no 4G (medido no repo MFF-Paginas).
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
  preload: false,
});

const GTM_ID = "GTM-WRQ4KT98";

export const metadata: Metadata = {
  metadataBase: new URL("https://docmev.com.br"), // TODO: domínio final
  title: "docMEV | Os 8 pilares da longevidade com o Dr. Eraldo Moraes",
  description:
    "Programa de 8 semanas baseado nos 8 fatores de saúde cardiovascular da American Heart Association. Com o cardiologista Dr. Eraldo Moraes.",
  openGraph: {
    title: "docMEV | Os 8 pilares da longevidade",
    description:
      "Programa de 8 semanas baseado nos 8 fatores de saúde cardiovascular da American Heart Association.",
    type: "website",
    locale: "pt_BR",
  },
  robots: { index: false, follow: false }, // TODO: liberar quando a página for pública
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} h-full antialiased`}>
      <head>
        {/* Google Tag Manager */}
        <script
          id="gtm"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <Analytics />
        {/* Script de rastreio de UTMs (Comunidade Nova Ordem do Digital),
            inserido a pedido do Vinicius em 2026-10-13. Alterações: (1) links
            mailto:/tel: são pulados, porque new URL() neles devolve origin
            "null" e o href sairia como "nullsuporte@..." (bug visto no MFF);
            (2) virou função reaplicável, chamada pelo CtaBotao ao montar, pra
            o pop-up de saída também sair com UTMs e sck (2026-10-14). */}
        <Script
          id="rastreio-utms"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
console.log('%cScript de rastreio by Comunidade Nova Ordem do Digital - Dericson Calari e Samuel Choairy', 'color: purple; font-size: 20px;');

// Virou função nomeada e exposta em window.docmevAtualizarLinks pra ser
// chamada de novo quando um link nasce depois do carregamento (pop-up de
// saída). É idempotente: só acrescenta parâmetro que o link ainda não tem.
function docmevAtualizarLinks() {
    let parametros = ["utm_source"];
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);

    for (const [key] of params) {
        if (!parametros.includes(key)) {
            parametros.push(key);
        }
    }

    const urlParamsCapt = new URLSearchParams(window.location.search);
    const urlParamsCaptReferrer = new URLSearchParams(document.referrer.split('?')[1] || '');
    let utms = {};

    parametros.forEach(el => {
        if (el === "utm_source") {
            utms[el] = urlParamsCapt.get(el) ?? (document.referrer ? (urlParamsCaptReferrer.get(el) ?? new URL(document.referrer).hostname) : "direto");
        } else {
            utms[el] = urlParamsCapt.get(el) ?? (urlParamsCaptReferrer.get(el) ?? "");
        }
    });

    let scks = Object.values(utms).filter(value => value !== "");

    let currentSckValues = [];
    if (urlParamsCapt.get('sck')) {
        currentSckValues = urlParamsCapt.get('sck').split('|');
    }
    scks = scks.filter(value => !currentSckValues.includes(value));

    const updateLinks = (el, elURL) => {
        const elSearchParams = new URLSearchParams(elURL.search);
        let modified = false;
        for (let key in utms) {
            if (!elSearchParams.has(key)) {
                elSearchParams.append(key, utms[key]);
                modified = true;
            }
        }
        if (!elSearchParams.has('sck') && scks.length > 0) {
            elSearchParams.append('sck', scks.join('|'));
            modified = true;
        }
        if (modified) {
            return elURL.origin + elURL.pathname + "?" + elSearchParams.toString();
        }
        return el.href;
    };

    document.querySelectorAll('a').forEach(el => {
        if (el.protocol !== 'http:' && el.protocol !== 'https:') return;
        const elURL = new URL(el.href);
        if (!elURL.hash) {
            el.href = updateLinks(el, elURL);
        }
    });

    document.querySelectorAll('iframe').forEach(iframe => {
        let actualSrc = iframe.hasAttribute('data-src') ? iframe.getAttribute('data-src') : iframe.src;
        if (actualSrc) {
            const iframeURL = new URL(actualSrc);
            if (iframe.hasAttribute('data-src')) {
                iframe.setAttribute('data-src', updateLinks(iframe, iframeURL));
            } else {
                iframe.src = updateLinks(iframe, iframeURL);
            }
        }
    });

}
window.docmevAtualizarLinks = docmevAtualizarLinks;
docmevAtualizarLinks();
            `,
          }}
        />
      </body>
    </html>
  );
}
