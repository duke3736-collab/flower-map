import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "꽃맵 | 2026 전국 봄꽃 개화 시기 & 명소 지도 – 벚꽃·매화·유채꽃·수국 100곳",
  description: "2026년 전국 봄꽃 개화 시기를 지도로 한눈에 확인하세요! 벚꽃 개화시기, 진해 군항제, 매화꽃 광양, 산수유꽃 구례, 유채꽃 제주, 겹벚꽃·철쭉·수국·장미꽃 등 18종 봄꽃 100개 명소를 무료로 제공합니다.",
  keywords: "2026 벚꽃 개화시기, 벚꽃 명소, 봄꽃 지도, 매화꽃 개화시기, 산수유꽃 개화, 유채꽃 제주, 진달래꽃 개화, 겹벚꽃 개화시기, 라일락꽃 개화, 철쭉꽃 개화시기, 작약꽃 개화, 수국꽃 개화시기, 장미꽃 개화, 개나리꽃 개화시기, 튤립꽃 개화, 목련꽃 개화시기, 왕벚꽃 개화, 복사꽃 개화시기, 진해 군항제, 황매산 철쭉, 봄 나들이 명소, 당일치기 봄꽃 여행, 봄꽃 드라이브 코스, 전국 봄꽃 축제 2026",
  openGraph: {
    title: "꽃맵 | 2026 전국 봄꽃 개화 시기 & 명소 지도",
    description: "18종 봄꽃 100개 명소를 지도 한 곳에서! 벚꽃·매화꽃·유채꽃·수국꽃 개화 시기부터 진해 군항제·황매산 철쭉꽃까지 봄꽃 여행 모든 정보.",
    url: "https://flower.weknews.com",
    siteName: "꽃맵 (Flower Map)",
    locale: "ko_KR",
    type: "website",
  },
  verification: {
    google: "M2v9DVUow4HYMRiyu346mcAkEvvWwMpq51dPk0upQbc",
    other: {
      "naver-site-verification": "eaefac08c22cc3895cbc14fdbe7908cc269698b4",
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const ADSENSE_CLIENT_ID = "ca-pub-6635245275061755";
const GA4_MEASUREMENT_ID = "G-HXGF6RRRQT";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <head>
        <meta name="google-site-verification" content="M2v9DVUow4HYMRiyu346mcAkEvvWwMpq51dPk0upQbc" />
        <meta name="naver-site-verification" content="eaefac08c22cc3895cbc14fdbe7908cc269698b4" />
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`} />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA4_MEASUREMENT_ID}');`,
          }}
        />
        <link rel="canonical" href="https://flower.weknews.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "꽃맵 (Flower Map)",
              url: "https://flower.weknews.com",
              description: "2026 전국 봄꽃 개화 시기, 벚꽃 명소, 드라이브 코스 정보 제공 지도",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://flower.weknews.com/?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700;900&family=Outfit:wght@400;700;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning className="font-sans antialiased bg-white">
        {children}
      </body>
    </html>
  );
}
