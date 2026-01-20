import { siteConfig } from "@/site.config";

type JsonLdGraph = {
  "@context": string;
  "@graph": object[];
};

export function generateJsonLd(): JsonLdGraph {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RealEstateAgent",
        "@id": `${siteConfig.url}/#organization`,
        name: `${siteConfig.name} 분양사무소`,
        telephone: siteConfig.contact.phone,
        url: siteConfig.url,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.contact.address,
          addressLocality: "김해시",
          addressRegion: "경상남도",
          addressCountry: "KR",
        },
      },
      {
        "@type": "Residence",
        "@id": `${siteConfig.url}/#residence`,
        name: siteConfig.property.name,
        description: siteConfig.description,
        url: siteConfig.url,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.property.location,
          addressLocality: "김해시",
          addressRegion: "경상남도",
          addressCountry: "KR",
        },
        floorSize: {
          "@type": "QuantitativeValue",
          minValue: siteConfig.property.areas.min,
          maxValue: siteConfig.property.areas.max,
          unitCode: "MTK",
          unitText: "㎡",
        },
        numberOfRooms: {
          "@type": "QuantitativeValue",
          value: siteConfig.property.totalUnits,
          unitText: "세대",
        },
        amenityFeature: [
          {
            "@type": "LocationFeatureSpecification",
            name: "주차",
            value: siteConfig.property.parking,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "난방방식",
            value: siteConfig.property.heating,
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteConfig.url}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "홈",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: siteConfig.name,
            item: siteConfig.url,
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: {
          "@id": `${siteConfig.url}/#organization`,
        },
        inLanguage: "ko-KR",
      },
      {
        "@type": "WebPage",
        "@id": `${siteConfig.url}/#webpage`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        isPartOf: {
          "@id": `${siteConfig.url}/#website`,
        },
        about: {
          "@id": `${siteConfig.url}/#residence`,
        },
        breadcrumb: {
          "@id": `${siteConfig.url}/#breadcrumb`,
        },
        inLanguage: "ko-KR",
      },
    ],
  };
}
