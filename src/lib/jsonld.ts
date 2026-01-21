import { siteConfig } from "@/site.config";

type JsonLdGraph = {
  "@context": string;
  "@graph": object[];
};

export function generateJsonLd(): JsonLdGraph {
  return {
    "@context": "https://schema.org",
    "@graph": [
      // 부동산 에이전트/분양사무소
      {
        "@type": "RealEstateAgent",
        "@id": `${siteConfig.url}/#organization`,
        name: `${siteConfig.name} 분양사무소`,
        telephone: siteConfig.contact.phone,
        url: siteConfig.url,
        logo: `${siteConfig.url}/그림1.png`,
        image: `${siteConfig.url}${siteConfig.ogImage}`,
        description: "진영 유림 노르웨이숲 공식 분양 안내 - 김해시 진영읍 프리미엄 아파트",
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.contact.address,
          addressLocality: "김해시",
          addressRegion: "경상남도",
          postalCode: "50875",
          addressCountry: "KR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 35.3089,
          longitude: 128.8567,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "09:00",
          closes: "18:00",
        },
        sameAs: [siteConfig.contact.blog],
        areaServed: {
          "@type": "City",
          name: "김해시",
          containedInPlace: {
            "@type": "State",
            name: "경상남도",
          },
        },
      },
      // 아파트 단지 정보
      {
        "@type": "ApartmentComplex",
        "@id": `${siteConfig.url}/#residence`,
        name: siteConfig.property.name,
        alternateName: ["진영 유림 노르웨이숲", "유림 노르웨이 숲", "진영 유림 노르웨이 숲"],
        description: siteConfig.description,
        url: siteConfig.url,
        image: [
          `${siteConfig.url}/조감도.png`,
          `${siteConfig.url}/조감도(야경)-02.png`,
          `${siteConfig.url}/투시도야경(아키픽셀).png`,
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.property.location,
          addressLocality: "김해시",
          addressRegion: "경상남도",
          postalCode: "50875",
          addressCountry: "KR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 35.3089,
          longitude: 128.8567,
        },
        floorSize: {
          "@type": "QuantitativeValue",
          minValue: siteConfig.property.areas.min,
          maxValue: siteConfig.property.areas.max,
          unitCode: "MTK",
          unitText: "㎡",
        },
        numberOfAvailableAccommodationUnits: siteConfig.property.totalUnits,
        numberOfBedrooms: "2-3",
        petsAllowed: true,
        amenityFeature: [
          { "@type": "LocationFeatureSpecification", name: "진영역 도보 5분 역세권" },
          { "@type": "LocationFeatureSpecification", name: "지하주차장 세대당 1.4대" },
          { "@type": "LocationFeatureSpecification", name: "지역난방" },
          { "@type": "LocationFeatureSpecification", name: "커뮤니티 시설" },
          { "@type": "LocationFeatureSpecification", name: "어린이 놀이터" },
          { "@type": "LocationFeatureSpecification", name: "피트니스 센터" },
        ],
      },
      // 상품 정보 (분양 매물)
      {
        "@type": "Product",
        "@id": `${siteConfig.url}/#product`,
        name: "진영 유림 노르웨이숲 아파트 분양",
        description: `김해시 진영읍 프리미엄 아파트 진영 유림 노르웨이숲. ${siteConfig.property.areas.min}~${siteConfig.property.areas.max}㎡, 총 ${siteConfig.property.totalUnits}세대, ${siteConfig.property.buildings}개동. 2027년 4월 입주 예정.`,
        image: `${siteConfig.url}${siteConfig.ogImage}`,
        brand: {
          "@type": "Brand",
          name: siteConfig.property.constructor,
        },
        manufacturer: {
          "@type": "Organization",
          name: siteConfig.property.constructor,
        },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/PreOrder",
          priceCurrency: "KRW",
          validFrom: "2024-01-01",
          validThrough: "2027-04-30",
          seller: {
            "@id": `${siteConfig.url}/#organization`,
          },
        },
        category: "아파트 분양",
        keywords: "진영 아파트, 김해 분양, 진영 유림 노르웨이숲, 진영역 아파트",
      },
      // 웹사이트 정보
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.title,
        alternateName: siteConfig.name,
        description: siteConfig.description,
        publisher: {
          "@id": `${siteConfig.url}/#organization`,
        },
        inLanguage: "ko-KR",
        potentialAction: {
          "@type": "SearchAction",
          target: `${siteConfig.url}/?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      // 웹페이지 정보
      {
        "@type": "WebPage",
        "@id": `${siteConfig.url}/#webpage`,
        url: siteConfig.url,
        name: siteConfig.title,
        description: siteConfig.description,
        isPartOf: {
          "@id": `${siteConfig.url}/#website`,
        },
        about: {
          "@id": `${siteConfig.url}/#residence`,
        },
        mainEntity: {
          "@id": `${siteConfig.url}/#residence`,
        },
        breadcrumb: {
          "@id": `${siteConfig.url}/#breadcrumb`,
        },
        inLanguage: "ko-KR",
        datePublished: "2024-01-01",
        dateModified: new Date().toISOString().split("T")[0],
        keywords: siteConfig.keywords.slice(0, 20).join(", "),
      },
      // 브레드크럼
      {
        "@type": "BreadcrumbList",
        "@id": `${siteConfig.url}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "경상남도 아파트 분양",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "김해시 아파트 분양",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "진영읍 아파트",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: siteConfig.name,
            item: siteConfig.url,
          },
        ],
      },
      // FAQ 구조화 데이터
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.url}/#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "진영 유림 노르웨이숲 위치는 어디인가요?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "경상남도 김해시 진영읍 진영리 258-4번지에 위치하며, 진영역에서 도보 5분 거리의 역세권 아파트입니다.",
            },
          },
          {
            "@type": "Question",
            name: "진영 유림 노르웨이숲 입주 예정일은 언제인가요?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "2027년 4월 입주 예정입니다.",
            },
          },
          {
            "@type": "Question",
            name: "진영 유림 노르웨이숲 평형은 어떻게 되나요?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "59㎡(약 18평, 전용면적 기준)과 84㎡(약 25평, 전용면적 기준) 두 가지 평형으로 구성되어 있으며, 총 6개 타입(59A, 59B, 59C, 84A, 84B, 84C)이 있습니다.",
            },
          },
          {
            "@type": "Question",
            name: "진영 유림 노르웨이숲 시공사는 어디인가요?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "유림E&C(유림이앤씨)에서 시공합니다.",
            },
          },
          {
            "@type": "Question",
            name: "진영 유림 노르웨이숲 총 세대수는 몇 세대인가요?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "총 240세대, 4개동, 지하 2층~지상 25층 규모입니다.",
            },
          },
          {
            "@type": "Question",
            name: "진영 유림 노르웨이숲 주차는 몇 대인가요?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "세대당 1.4대의 주차 공간이 제공됩니다.",
            },
          },
          {
            "@type": "Question",
            name: "진영 유림 노르웨이숲 분양 문의는 어디로 하나요?",
            acceptedAnswer: {
              "@type": "Answer",
              text: `분양사무소 전화번호 ${siteConfig.contact.phoneFormatted}로 문의하시거나, 홈페이지에서 관심고객 등록을 하시면 상담을 받으실 수 있습니다.`,
            },
          },
        ],
      },
      // 로컬 비즈니스
      {
        "@type": "LocalBusiness",
        "@id": `${siteConfig.url}/#localbusiness`,
        name: "진영 유림 노르웨이숲 분양사무소",
        description: "진영 유림 노르웨이숲 아파트 분양 상담 및 안내",
        url: siteConfig.url,
        telephone: siteConfig.contact.phone,
        priceRange: "$$",
        image: `${siteConfig.url}${siteConfig.ogImage}`,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.contact.address,
          addressLocality: "김해시",
          addressRegion: "경상남도",
          postalCode: "50875",
          addressCountry: "KR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 35.3089,
          longitude: 128.8567,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "09:00",
          closes: "18:00",
        },
      },
    ],
  };
}
