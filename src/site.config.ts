/**
 * 사이트 설정
 */

export const siteConfig = {
  name: "진영 노르웨이 숲",
  title: "진영 노르웨이 숲 - 김해시 진영읍 프리미엄 아파트 분양",
  description:
    "진영역 도보 5분! 김해시 진영읍 프리미엄 아파트 진영 노르웨이 숲. 59㎡~84㎡, 총 240세대. 유림E&C 시공, 2027년 4월 입주 예정. 진영 신규 분양, 진영 아파트, 김해 부동산 정보. 관심고객 등록 시 특별 혜택!",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",

  // SEO 키워드 - 공격적으로 확장
  keywords: [
    // 메인 키워드
    "진영 노르웨이 숲",
    "진영 노르웨이숲",
    "노르웨이 숲 진영",
    "진영 유림 노르웨이 숲",

    // 지역 + 아파트
    "진영 아파트",
    "진영읍 아파트",
    "진영 신규 아파트",
    "진영 새 아파트",
    "김해 아파트",
    "김해시 아파트",
    "김해 진영 아파트",
    "김해시 진영읍 아파트",

    // 분양 관련
    "진영 분양",
    "진영 아파트 분양",
    "진영읍 분양",
    "진영 신규 분양",
    "진영 분양 정보",
    "김해 분양",
    "김해시 분양",
    "김해 아파트 분양",
    "김해 신규 분양",
    "2024 진영 분양",
    "2025 진영 분양",

    // 부동산 정보
    "진영 부동산",
    "진영 부동산 정보",
    "진영읍 부동산",
    "김해 부동산",
    "김해 부동산 정보",
    "진영역 부동산",
    "진영역 아파트",
    "진영역세권",
    "진영역세권 아파트",

    // 프리미엄/브랜드
    "진영 프리미엄 아파트",
    "진영 브랜드 아파트",
    "유림 아파트",
    "유림 노르웨이 숲",
    "유림E&C",
    "유림이앤씨",

    // 평형 관련
    "진영 59평형",
    "진영 84평형",
    "진영 24평",
    "진영 34평",
    "진영 중소형 아파트",

    // 입주/청약
    "진영 입주",
    "진영 입주 예정",
    "진영 2027 입주",
    "진영 청약",
    "진영 아파트 청약",
    "김해 청약",

    // 주변 키워드
    "진영역 도보",
    "진영역 역세권",
    "진영 교통",
    "진영 학군",
    "진영초등학교",
    "진영중학교",
    "진영고등학교",

    // 롱테일 키워드
    "진영 아파트 추천",
    "진영 살기 좋은 아파트",
    "진영 신혼부부 아파트",
    "진영 투자 아파트",
    "김해 투자",
    "경남 아파트 분양",
    "경남 신규 분양",
    "부산 근교 아파트",
    "부산 출퇴근 아파트",
  ],

  // 추가 SEO 메타
  seo: {
    siteName: "진영 노르웨이 숲 공식 분양 안내",
    author: "진영 노르웨이 숲 분양사무소",
    publisher: "유림E&C",
    category: "부동산, 아파트, 분양",
    classification: "아파트 분양 정보",
    rating: "General",
    distribution: "Global",
    revisitAfter: "3 days",
  },

  contact: {
    phone: "905-2281",
    phoneFormatted: "905-2281",
    address: "경상남도 김해시 진영읍 진영리 258-4",
    addressShort: "김해시 진영읍 진영리 258-4",
    manager: "김혜수 실장",
    blog: "https://m.blog.naver.com/sooyoon74/224151904946",
  },

  author: {
    name: "진영 노르웨이 숲",
  },

  ogImage: "/조감도.png",
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
    { src: "/조감도.png", alt: "진영 노르웨이 숲 조감도 - 김해시 진영읍 프리미엄 아파트", caption: "조감도" },
    {
      src: "/조감도(아키픽셀).png",
      alt: "진영 노르웨이 숲 조감도 전경 - 진영역세권 아파트",
      caption: "조감도",
    },
    {
      src: "/조감도(야경)-02.png",
      alt: "진영 노르웨이 숲 야경 조감도 - 진영 신규 분양 아파트",
      caption: "야경 조감도",
    },
    {
      src: "/투시도야경(아키픽셀).png",
      alt: "진영 노르웨이 숲 투시도 야경 - 유림E&C 프리미엄",
      caption: "투시도 야경",
    },
    {
      src: "/유림노르웨이숲 아이소.png",
      alt: "진영 노르웨이 숲 단지 배치 - 240세대 4개동",
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
