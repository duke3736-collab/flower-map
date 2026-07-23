// 봄꽃 18종 데이터 — 꽃맵 (flower.weknews.com)

export type FlowerStatus = "없음" | "꽃봉오리" | "개화시작" | "만개" | "낙화";

export interface Flower {
  id: string;
  name: string;
  emoji: string;
  color: string;       // HEX 대표 색상
  bgClass: string;     // Tailwind bg 클래스
  textClass: string;   // Tailwind text 클래스
  bloomStart: string;  // 예: "2월 하순"
  bloomPeak: string;   // 예: "3월 초"
  bloomEnd: string;    // 예: "3월 중순"
  monthRange: [number, number]; // [시작월, 종료월] (1~12)
  description: string;
  features: string[];  // 감성 특징
  topSpots: string[];  // 대표 명소명 (최대 4개)
  coupangKeyword: string; // 관련 쿠팡 검색 키워드
}

export const FLOWERS: Flower[] = [
  {
    id: "maehwa",
    name: "매화",
    emoji: "🌸",
    color: "#F9A8D4",
    bgClass: "bg-pink-200",
    textClass: "text-pink-700",
    bloomStart: "2월 하순",
    bloomPeak: "3월 초",
    bloomEnd: "3월 중순",
    monthRange: [2, 3],
    description: "봄의 전령사. 눈 속에서도 피어나는 강인한 꽃으로, 은은한 향기와 순백·분홍의 꽃잎이 특징입니다.",
    features: ["향기가 진함", "이른 봄 개화", "사진 감성 최고"],
    topSpots: ["광양 매화마을", "섬진강 매화", "순천 선암사 매화", "양산 통도사 홍매화"],
    coupangKeyword: "봄 나들이 피크닉"
  },
  {
    id: "sansuyu",
    name: "산수유",
    emoji: "🌼",
    color: "#FCD34D",
    bgClass: "bg-yellow-200",
    textClass: "text-yellow-700",
    bloomStart: "3월 초",
    bloomPeak: "3월 중순",
    bloomEnd: "3월 하순",
    monthRange: [3, 3],
    description: "노란 별 꽃이 군락을 이루는 장관. 구례 산수유마을은 온 마을이 노랗게 물드는 절경을 자랑합니다.",
    features: ["노란 군락", "마을 전체 뒤덮음", "드라이브 코스 최고"],
    topSpots: ["구례 산수유마을", "이천 산수유 군락지", "양평 산수유", "의성 산수유"],
    coupangKeyword: "봄 드라이브 피크닉"
  },
  {
    id: "mokryeon",
    name: "목련",
    emoji: "🤍",
    color: "#E2E8F0",
    bgClass: "bg-slate-200",
    textClass: "text-slate-700",
    bloomStart: "3월 중순",
    bloomPeak: "3월 하순",
    bloomEnd: "4월 초",
    monthRange: [3, 4],
    description: "크고 하얀 꽃잎이 하늘을 향해 활짝 피는 꽃. 자목련(보라)과 백목련(흰색) 두 가지가 있습니다.",
    features: ["대형 꽃잎", "향기 진함", "백목련·자목련 두 종류"],
    topSpots: ["서울 창경궁 목련", "고양 일산호수공원", "전주 목련길", "부산 어린이대공원"],
    coupangKeyword: "봄 나들이 준비물"
  },
  {
    id: "yuche",
    name: "유채꽃",
    emoji: "🌻",
    color: "#FDE047",
    bgClass: "bg-yellow-300",
    textClass: "text-yellow-800",
    bloomStart: "3월 중순",
    bloomPeak: "4월 초",
    bloomEnd: "5월 초",
    monthRange: [3, 5],
    description: "제주도는 1~2월, 중부지방은 4월이 절정. 새노란 물결이 드넓게 펼쳐지는 봄꽃의 아이콘입니다.",
    features: ["광활한 군락지", "인스타 성지", "제주·육지 시차 큰 편"],
    topSpots: ["제주 성산 유채꽃밭", "가평 유채꽃축제", "고창 청보리밭 유채", "경주 유채꽃"],
    coupangKeyword: "봄 원피스 여성"
  },
  {
    id: "jindalrae",
    name: "진달래",
    emoji: "🌺",
    color: "#FB7185",
    bgClass: "bg-rose-300",
    textClass: "text-rose-700",
    bloomStart: "3월 하순",
    bloomPeak: "4월 초",
    bloomEnd: "4월 중순",
    monthRange: [3, 4],
    description: "한국의 대표적인 봄꽃. 산 전체가 붉은빛으로 물드는 장관을 연출하며, 먹을 수 있는 꽃으로도 유명합니다.",
    features: ["산 전체 군락", "먹을 수 있는 꽃", "등산과 함께"],
    topSpots: ["북한산 진달래", "강화 진달래", "여수 영취산", "창녕 화왕산"],
    coupangKeyword: "등산 스틱 경량"
  },
  {
    id: "beotkkot",
    name: "벚꽃",
    emoji: "🌸",
    color: "#FCA5A5",
    bgClass: "bg-red-200",
    textClass: "text-red-700",
    bloomStart: "3월 말",
    bloomPeak: "4월 초",
    bloomEnd: "4월 중순",
    monthRange: [3, 4],
    description: "봄꽃의 왕. 분홍빛 꽃비가 쏟아지는 순간은 한국 봄의 상징입니다. 전국에서 연간 최고 검색량을 자랑합니다.",
    features: ["꽃비 연출", "터널 명소 多", "전국 동시 개화"],
    topSpots: ["진해 군항제", "서울 여의도 윤중로", "경주 보문단지", "하동 십리벚꽃길"],
    coupangKeyword: "벚꽃 피크닉 매트"
  },
  {
    id: "gaenari",
    name: "개나리",
    emoji: "💛",
    color: "#FACC15",
    bgClass: "bg-yellow-400",
    textClass: "text-yellow-900",
    bloomStart: "3월 하순",
    bloomPeak: "4월 초",
    bloomEnd: "4월 중순",
    monthRange: [3, 4],
    description: "노란빛으로 봄을 알리는 꽃. 담장과 도로변에 줄지어 피는 친근한 봄꽃으로, 벚꽃과 함께 가장 먼저 핍니다.",
    features: ["도시 곳곳에 분포", "벚꽃과 같은 시기", "군락보다 가로수길"],
    topSpots: ["서울 북한산 개나리", "인천 개나리길", "수원 개나리", "부산 수영강변"],
    coupangKeyword: "봄 나들이 도시락"
  },
  {
    id: "boksakkhot",
    name: "복사꽃",
    emoji: "🌸",
    color: "#FBCFE8",
    bgClass: "bg-pink-100",
    textClass: "text-pink-600",
    bloomStart: "4월 초",
    bloomPeak: "4월 중순",
    bloomEnd: "4월 하순",
    monthRange: [4, 4],
    description: "복숭아꽃. 연한 분홍빛이 포근하고 따뜻한 느낌을 주며, 과수원 지대에서 드넓게 펼쳐집니다.",
    features: ["과수원 군락", "연한 분홍 감성", "조용한 명소"],
    topSpots: ["충북 청주 복사꽃", "경북 영천 복사꽃", "전북 완주 복숭아꽃", "경기 이천 복숭아"],
    coupangKeyword: "봄 나들이 선크림"
  },
  {
    id: "kyupbeotkkot",
    name: "겹벚꽃",
    emoji: "🌸",
    color: "#F472B6",
    bgClass: "bg-pink-400",
    textClass: "text-white",
    bloomStart: "4월 중순",
    bloomPeak: "4월 하순",
    bloomEnd: "5월 초",
    monthRange: [4, 5],
    description: "'분홍 팝콘'이라는 별명처럼 꽃잎이 겹겹이 풍성한 꽃. 벚꽃이 진 후 새롭게 검색량이 폭발합니다.",
    features: ["분홍 팝콘", "꽃잎이 풍성함", "벚꽃 이후 대타"],
    topSpots: ["경주 불국사 겹벚꽃", "서산 개심사", "전주 완산공원", "서울 성균관대"],
    coupangKeyword: "삼각대 셀카봉"
  },
  {
    id: "rairak",
    name: "라일락",
    emoji: "💜",
    color: "#C084FC",
    bgClass: "bg-purple-300",
    textClass: "text-purple-800",
    bloomStart: "4월 중순",
    bloomPeak: "5월 초",
    bloomEnd: "5월 중순",
    monthRange: [4, 5],
    description: "달콤하고 진한 향기로 가득 채우는 꽃. 보라빛 꽃송이가 가득 달리며 향수 원료로도 유명합니다.",
    features: ["향기 최고", "보라빛 감성", "도심 공원 多"],
    topSpots: ["서울 어린이대공원", "과천 서울대공원", "경기 양평 라일락", "전남 담양"],
    coupangKeyword: "봄 향수 디퓨저"
  },
  {
    id: "wangbeotkkot",
    name: "왕벚꽃",
    emoji: "🌸",
    color: "#FECDD3",
    bgClass: "bg-rose-100",
    textClass: "text-rose-600",
    bloomStart: "4월 중순",
    bloomPeak: "4월 하순",
    bloomEnd: "5월 초",
    monthRange: [4, 5],
    description: "일반 벚꽃보다 꽃이 크고 화려한 품종. 제주도가 원산지이며, 나무 한 그루가 만드는 볼륨감이 압도적입니다.",
    features: ["꽃이 크고 탐스러움", "제주 원산지", "일반 벚꽃보다 늦게 핌"],
    topSpots: ["제주 왕벚꽃", "서울 홍릉수목원", "전국 왕벚꽃 가로수길"],
    coupangKeyword: "봄 나들이 피크닉"
  },
  {
    id: "jopap",
    name: "조팝나무",
    emoji: "🤍",
    color: "#E0F2FE",
    bgClass: "bg-sky-100",
    textClass: "text-sky-600",
    bloomStart: "4월 중순",
    bloomPeak: "5월 초",
    bloomEnd: "5월 중순",
    monthRange: [4, 5],
    description: "작은 흰 꽃이 가지 전체를 뒤덮어 마치 팝콘처럼 보이는 봄꽃. 산책로와 공원에서 쉽게 만날 수 있습니다.",
    features: ["흰 팝콘", "산책로 흔함", "군락 시 장관"],
    topSpots: ["올림픽공원 조팝나무", "양재천 조팝나무", "전주 덕진공원"],
    coupangKeyword: "봄 산책 운동화"
  },
  {
    id: "tulip",
    name: "튤립",
    emoji: "🌷",
    color: "#F87171",
    bgClass: "bg-red-300",
    textClass: "text-red-700",
    bloomStart: "4월 중순",
    bloomPeak: "5월 초",
    bloomEnd: "5월 중순",
    monthRange: [4, 5],
    description: "오색찬란한 색깔로 대규모 군락을 이루는 꽃. 고양 꽃박람회, 태안 세계꽃박람회는 방문객 수가 압도적입니다.",
    features: ["화려한 색상", "대규모 군락", "꽃박람회 메인"],
    topSpots: ["고양 꽃박람회", "태안 세계꽃박람회", "에버랜드 튤립", "서울 뚝섬한강공원"],
    coupangKeyword: "꽃 축제 입장권"
  },
  {
    id: "cheonjuk",
    name: "철쭉",
    emoji: "🌺",
    color: "#EC4899",
    bgClass: "bg-pink-500",
    textClass: "text-white",
    bloomStart: "4월 말",
    bloomPeak: "5월 초",
    bloomEnd: "5월 중순",
    monthRange: [4, 5],
    description: "산 전체를 진분홍빛으로 물들이는 장관. 황매산 철쭉제는 매년 전국에서 수십만 명이 찾는 5월의 핫스팟입니다.",
    features: ["산 전체 군락", "진분홍 장관", "황매산이 전국 최대"],
    topSpots: ["황매산 철쭉제", "소백산 철쭉", "지리산 세석평전", "한라산 철쭉"],
    coupangKeyword: "등산화 가벼운"
  },
  {
    id: "jakak",
    name: "작약",
    emoji: "🌹",
    color: "#BE123C",
    bgClass: "bg-rose-700",
    textClass: "text-white",
    bloomStart: "5월 초",
    bloomPeak: "5월 중순",
    bloomEnd: "5월 하순",
    monthRange: [5, 5],
    description: "꽃 중의 꽃. 풍성하고 탐스러운 꽃잎이 겹겹이 쌓여 화려한 모습을 뽐냅니다. 5월 봄꽃 여행의 마지막 주자.",
    features: ["꽃잎 풍성함", "5월 여행 마지막 주자", "컬러풀한 군락"],
    topSpots: ["합천 핫들생태공원 작약", "전남 함평 작약", "경기 안성 팜랜드"],
    coupangKeyword: "봄 꽃다발 조화"
  },
  {
    id: "bootkkot",
    name: "붓꽃 (아이리스)",
    emoji: "💜",
    color: "#7C3AED",
    bgClass: "bg-violet-600",
    textClass: "text-white",
    bloomStart: "5월 초",
    bloomPeak: "5월 중순",
    bloomEnd: "6월 초",
    monthRange: [5, 6],
    description: "붓 모양을 닮은 보라빛 꽃. 연못과 습지 주변에 군락을 이루며 5~6월을 보랏빛으로 물들입니다.",
    features: ["보라빛 감성", "수변 명소", "튤립 이후 관심"],
    topSpots: ["창녕 우포늪 붓꽃", "서울 선유도공원", "한택식물원", "순천만 붓꽃"],
    coupangKeyword: "꽃 사진 보정 앱"
  },
  {
    id: "suguk",
    name: "수국",
    emoji: "💙",
    color: "#60A5FA",
    bgClass: "bg-blue-400",
    textClass: "text-white",
    bloomStart: "5월 하순",
    bloomPeak: "6월 중순",
    bloomEnd: "7월 초",
    monthRange: [5, 7],
    description: "파란빛, 보라빛, 분홍빛으로 피어나는 꽃. 토양의 산도에 따라 색이 달라지는 신비한 꽃입니다.",
    features: ["토양에 따라 색 변함", "장마철까지 지속", "인스타 최강"],
    topSpots: ["안동 수국길", "포항 기청산 수국", "서울 광진구 수국", "경남 창원 수국"],
    coupangKeyword: "여름 나들이 양산"
  },
  {
    id: "jangmi",
    name: "장미",
    emoji: "🌹",
    color: "#DC2626",
    bgClass: "bg-red-600",
    textClass: "text-white",
    bloomStart: "5월 중순",
    bloomPeak: "6월 초",
    bloomEnd: "6월 중순",
    monthRange: [5, 6],
    description: "꽃의 여왕. 다양한 품종과 색상으로 5~6월 장미 축제가 전국에서 열립니다.",
    features: ["다양한 품종", "장미 축제 多", "데이트 명소"],
    topSpots: ["서울대공원 장미원", "올림픽공원 장미광장", "부산 보수동 장미", "성남 장미공원"],
    coupangKeyword: "장미 꽃다발 프로포즈"
  }
];

// 특정 월에 피는 꽃 목록 반환
export function getFlowersByMonth(month: number): Flower[] {
  return FLOWERS.filter(f => f.monthRange[0] <= month && f.monthRange[1] >= month);
}

// 슬러그로 꽃 검색
export function getFlowerById(id: string): Flower | undefined {
  return FLOWERS.find(f => f.id === id);
}

// 현재 날짜 기준으로 현재 개화 중인 꽃 목록 반환
export function getCurrentFlowers(): Flower[] {
  const now = new Date();
  const month = now.getMonth() + 1;
  return getFlowersByMonth(month);
}
