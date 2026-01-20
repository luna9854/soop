/**
 * 사이트 설정
 */

export const siteConfig = {
  name: "진영 노르웨이 숲",
  description: "김해시 진영읍 프리미엄 주거단지, 진영 노르웨이 숲",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",

  keywords: [
    "진영 노르웨이 숲",
    "김해 아파트",
    "진영 아파트",
    "진영읍 분양",
    "김해시 분양",
    "프리미엄 아파트",
  ],

  contact: {
    phone: "010-905-2281",
    phoneFormatted: "010-905-2281",
    address: "경상남도 김해시 진영읍 진영리 258-4",
    addressShort: "김해시 진영읍 진영리 258-4",
    manager: "김혜수 실장",
    blog: "https://m.blog.naver.com/sooyoon74/224151904946",
  },

  author: {
    name: "진영 노르웨이 숲",
  },

  ogImage: "/og-image.png",
  locale: "ko_KR",

  // 단지 상세 정보
  property: {
    name: "진영 노르웨이 숲",
    location: "경상남도 김해시 진영읍 진영리 258-4번지 일원",
    totalUnits: 240,
    buildings: 4,
    floors: "지하 2층 ~ 지상 25층",
    types: ["59A", "59B", "59C", "84A", "84B", "84C"],
    areas: {
      min: 59,
      max: 84,
      unit: "㎡",
    },
    constructor: "유림E&C",
    moveInDate: "2027년 4월 예정",
    parking: "세대당 1.4대",
    heating: "지역난방",
  },

  // 입지 환경
  location: {
    transportation: [
      { name: "진영역", distance: "도보 5분", detail: "경전선 KTX 환승" },
      { name: "부산신항", distance: "차량 15분", detail: "" },
      { name: "김해공항", distance: "차량 20분", detail: "" },
      { name: "남해고속도로 진영IC", distance: "차량 5분", detail: "" },
    ],
    education: [
      { name: "진영초등학교", distance: "도보 10분", detail: "" },
      { name: "진영중학교", distance: "도보 12분", detail: "" },
      { name: "진영고등학교", distance: "도보 15분", detail: "" },
    ],
    amenities: [
      { name: "롯데마트 진영점", distance: "차량 5분", detail: "" },
      { name: "진영읍행정복지센터", distance: "도보 8분", detail: "" },
      { name: "김해시립 진영도서관", distance: "도보 10분", detail: "" },
      { name: "진영공설시장", distance: "도보 7분", detail: "" },
    ],
    development: [
      { name: "진영 도시재생 뉴딜사업", distance: "", detail: "2025년 완료 예정" },
      { name: "부산~마산 광역철도", distance: "", detail: "계획 중" },
      { name: "김해 테크노밸리 2단지", distance: "", detail: "조성 중" },
    ],
  },

  // 평면도 정보
  floorPlans: [
    { type: "59A", area: "59.99㎡", image: "/pdf-pages/page-11.png" },
    { type: "59B", area: "59.95㎡", image: "/pdf-pages/page-12.png" },
    { type: "59C", area: "59.97㎡", image: "/pdf-pages/page-13.png" },
    { type: "84A", area: "84.97㎡", image: "/pdf-pages/page-14.png" },
    { type: "84B", area: "84.99㎡", image: "/pdf-pages/page-15.png" },
    { type: "84C", area: "84.96㎡", image: "/pdf-pages/page-16.png" },
  ],

  // 갤러리 이미지
  gallery: [
    { src: "/조감도.png", alt: "진영 노르웨이 숲 조감도", caption: "조감도" },
    {
      src: "/조감도(아키픽셀).png",
      alt: "진영 노르웨이 숲 조감도 (아키픽셀)",
      caption: "조감도",
    },
    {
      src: "/조감도(야경)-02.png",
      alt: "진영 노르웨이 숲 야경 조감도",
      caption: "야경 조감도",
    },
    {
      src: "/투시도야경(아키픽셀).png",
      alt: "진영 노르웨이 숲 투시도 야경",
      caption: "투시도 야경",
    },
    {
      src: "/유림노르웨이숲 아이소.png",
      alt: "진영 노르웨이 숲 아이소메트릭",
      caption: "아이소메트릭",
    },
  ],

  // 법적 고지
  legal: {
    disclaimer:
      "본 홈페이지의 이미지, CG, 내용은 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있습니다.",
    copyright: "ⓒ 진영 노르웨이 숲. All rights reserved.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
