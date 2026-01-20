import type { Metadata, Viewport } from "next";

import "./globals.css";

import { Toaster } from "@/components/ui/sonner";
import { siteConfig } from "@/site.config";
import { generateJsonLd } from "@/lib/jsonld";

import { Providers } from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.seo.author }],
  creator: siteConfig.seo.author,
  publisher: siteConfig.seo.publisher,
  category: siteConfig.seo.category,
  classification: siteConfig.seo.classification,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.seo.siteName,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - 김해시 진영읍 프리미엄 아파트 분양`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: "/그림1.png",
    apple: "/그림1.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // 나중에 구글/네이버 서치콘솔 등록 시 추가
    // google: "구글-사이트-인증-코드",
    // other: { "naver-site-verification": "네이버-인증-코드" },
  },
  other: {
    // 추가 SEO 메타
    "revisit-after": siteConfig.seo.revisitAfter,
    rating: siteConfig.seo.rating,
    distribution: siteConfig.seo.distribution,
    // 지역 타겟팅
    "geo.region": "KR-48",
    "geo.placename": "김해시 진영읍",
    "geo.position": "35.3089;128.8567",
    ICBM: "35.3089, 128.8567",
    // 모바일 최적화
    "format-detection": "telephone=yes",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": siteConfig.name,
  },
};

export const viewport: Viewport = {
  themeColor: "#d97706",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = generateJsonLd();

  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className="min-h-screen">
        <Providers>
          {children}
          <Toaster position="bottom-center" richColors />
        </Providers>
      </body>
    </html>
  );
}
