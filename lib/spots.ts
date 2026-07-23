// 전국 봄꽃 명소 60+ 데이터 — 꽃맵 (flower.weknews.com)

export type Region = "서울/경기" | "강원" | "충청/대전" | "전라/광주" | "경상/부산" | "제주";
export type BloomStatus = "없음" | "꽃봉오리" | "개화시작" | "만개" | "절정" | "낙화";

export interface Spot {
  id: number;
  name: string;
  region: Region;
  address: string;
  lat: number;
  lng: number;
  flowerIds: string[];       // flowers.ts의 id 참조
  peakMonth: number;         // 절정 월 (1~12)
  peakStartDate: string;     // "3.25" 형식
  peakEndDate: string;
  status: BloomStatus;       // 현재 개화 상태 (수동 업데이트)
  tags: string[];
  description: string;
  parking: string;
  tip: string;
  imageKeyword: string;      // Unsplash 이미지 검색 키워드
  festivalName?: string;     // 연관 축제명
}

export const SPOTS: Spot[] = [
  // ===== 서울/경기 =====
  {
    id: 1,
    name: "여의도 윤중로 벚꽃길",
    region: "서울/경기",
    address: "서울특별시 영등포구 여의도동",
    lat: 37.5261, lng: 126.9333,
    flowerIds: ["beotkkot"],
    peakMonth: 4, peakStartDate: "4.5", peakEndDate: "4.12",
    status: "없음",
    tags: ["벚꽃", "도심", "산책", "한강"],
    description: "서울 최대 벚꽃 명소. 윤중로 1.7km 구간에 천여 그루의 벚꽃이 만개합니다.",
    parking: "여의도 한강공원 주차장 이용 (주말 혼잡, 대중교통 강력 추천)",
    tip: "이른 아침(07시 이전) 방문 시 인파 없이 조용하게 즐길 수 있습니다.",
    imageKeyword: "cherry blossom Seoul Yeouido",
    festivalName: "서울 영등포 여의도 봄꽃축제"
  },
  {
    id: 2,
    name: "올림픽공원 장미광장",
    region: "서울/경기",
    address: "서울특별시 송파구 방이동 올림픽공원",
    lat: 37.5214, lng: 127.1247,
    flowerIds: ["jangmi", "tulip"],
    peakMonth: 5, peakStartDate: "5.20", peakEndDate: "6.10",
    status: "없음",
    tags: ["장미", "튤립", "가족", "도심"],
    description: "장미 4,000그루와 튤립이 만발하는 서울 대표 봄꽃 공원. 입장료 없이 즐길 수 있습니다.",
    parking: "올림픽공원 주차장 (유료)",
    tip: "혜화문, 평화의 문 앞 장미터널이 사진 명소입니다.",
    imageKeyword: "rose garden Seoul Olympic Park"
  },
  {
    id: 3,
    name: "석촌호수 벚꽃",
    region: "서울/경기",
    address: "서울특별시 송파구 석촌호수 일대",
    lat: 37.5078, lng: 127.1038,
    flowerIds: ["beotkkot"],
    peakMonth: 4, peakStartDate: "4.3", peakEndDate: "4.10",
    status: "없음",
    tags: ["벚꽃", "도심", "데이트", "호수"],
    description: "롯데월드 앞 호수를 둘러싼 벚꽃 산책로. 야간 조명과 어우러지는 야경 벚꽃이 절경입니다.",
    parking: "주변 유료주차장 (지하철 잠실역 도보 5분 추천)",
    tip: "야간 벚꽃 라이트업이 운영되어 저녁 방문도 추천합니다.",
    imageKeyword: "cherry blossom Seokchon Lake Seoul"
  },
  {
    id: 4,
    name: "서울대공원 장미원",
    region: "서울/경기",
    address: "경기도 과천시 막계동 서울대공원",
    lat: 37.4315, lng: 127.0174,
    flowerIds: ["jangmi", "tulip"],
    peakMonth: 5, peakStartDate: "5.25", peakEndDate: "6.15",
    status: "없음",
    tags: ["장미", "가족", "수목원", "동물원"],
    description: "국내 최대 규모의 장미원. 50여 종 4만 본의 장미가 형형색색 피어납니다.",
    parking: "서울대공원 주차장 완비",
    tip: "동물원과 함께 방문하면 아이들도 좋아합니다.",
    imageKeyword: "rose garden Seoul Grand Park Gwacheon"
  },
  {
    id: 5,
    name: "고양 꽃박람회 (일산)",
    region: "서울/경기",
    address: "경기도 고양시 일산동구 호수공원",
    lat: 37.6611, lng: 126.7799,
    flowerIds: ["tulip", "mokryeon"],
    peakMonth: 4, peakStartDate: "4.20", peakEndDate: "5.10",
    status: "없음",
    tags: ["튤립", "꽃박람회", "가족", "축제"],
    description: "연간 200만 명이 찾는 전국 최대 봄꽃 박람회. 다양한 수목류와 튤립 전시가 압도적입니다.",
    parking: "일산 호수공원 주차장 (박람회 기간 조기 만차)",
    tip: "개장 시간(09시) 맞춰 방문하면 가장 여유롭습니다.",
    imageKeyword: "Goyang flower festival tulip Korea",
    festivalName: "고양국제꽃박람회"
  },
  {
    id: 6,
    name: "가평 삼회리 벚꽃길",
    region: "서울/경기",
    address: "경기도 가평군 삼회리",
    lat: 37.7890, lng: 127.4802,
    flowerIds: ["beotkkot"],
    peakMonth: 4, peakStartDate: "4.5", peakEndDate: "4.15",
    status: "없음",
    tags: ["벚꽃", "드라이브", "당일치기", "한적"],
    description: "북한강변을 따라 펼쳐지는 벚꽃 드라이브 코스. 사람이 많지 않아 조용하게 즐길 수 있습니다.",
    parking: "길가 공터 주차 가능",
    tip: "강변도로를 따라 창문 열고 드라이브하면 최고의 봄날입니다.",
    imageKeyword: "cherry blossom Gapyeong riverside"
  },
  {
    id: 7,
    name: "에버랜드 튤립",
    region: "서울/경기",
    address: "경기도 용인시 처인구 에버랜드로",
    lat: 37.2936, lng: 127.2017,
    flowerIds: ["tulip", "wangbeotkkot"],
    peakMonth: 4, peakStartDate: "4.10", peakEndDate: "5.5",
    status: "없음",
    tags: ["튤립", "테마파크", "가족", "유채"],
    description: "스프링 페스티벌 기간 100만 본 이상의 꽃이 피는 대규모 봄꽃 이벤트.",
    parking: "에버랜드 주차장 (유료)",
    tip: "스프링 페스티벌 날짜 확인 후 방문하세요.",
    imageKeyword: "Everland tulip spring festival Korea",
    festivalName: "에버랜드 스프링 페스티벌"
  },
  {
    id: 8,
    name: "인천 자유공원 벚꽃",
    region: "서울/경기",
    address: "인천광역시 중구 자유공원",
    lat: 37.4774, lng: 126.6215,
    flowerIds: ["beotkkot", "gaenari"],
    peakMonth: 4, peakStartDate: "4.3", peakEndDate: "4.12",
    status: "없음",
    tags: ["벚꽃", "개나리", "역사", "도심"],
    description: "인천 최초의 공원. 언덕을 따라 벚꽃과 개나리가 함께 어우러집니다.",
    parking: "자유공원 인근 공영주차장",
    tip: "공원 꼭대기에서 인천항이 한눈에 보이는 뷰가 멋집니다.",
    imageKeyword: "cherry blossom Incheon Freedom Park"
  },

  // ===== 강원 =====
  {
    id: 9,
    name: "강릉 경포호 벚꽃",
    region: "강원",
    address: "강원도 강릉시 경포로",
    lat: 37.7904, lng: 128.8780,
    flowerIds: ["beotkkot"],
    peakMonth: 4, peakStartDate: "4.8", peakEndDate: "4.18",
    status: "없음",
    tags: ["벚꽃", "호수", "드라이브", "바다"],
    description: "경포호 주변 벚꽃 가로수길. 바다와 호수, 벚꽃이 동시에 어우러지는 독특한 경관.",
    parking: "경포해변 공영주차장",
    tip: "자전거 대여 후 경포호 일주 코스로 즐기는 것을 추천합니다.",
    imageKeyword: "cherry blossom Gyeongpo Lake Gangneung"
  },
  {
    id: 10,
    name: "삼척 죽서루 벚꽃",
    region: "강원",
    address: "강원도 삼척시 성내동 죽서루",
    lat: 37.4497, lng: 129.1621,
    flowerIds: ["beotkkot"],
    peakMonth: 4, peakStartDate: "4.10", peakEndDate: "4.20",
    status: "없음",
    tags: ["벚꽃", "문화재", "한적", "강원"],
    description: "오십천변 절벽 위 누각과 벚꽃의 조화가 아름다운 숨은 명소.",
    parking: "죽서루 공영주차장",
    tip: "삼척 해수욕장과 함께 당일 코스로 구성하면 좋습니다.",
    imageKeyword: "cherry blossom Samcheok Jukseoru"
  },

  // ===== 충청/대전 =====
  {
    id: 11,
    name: "공주 마곡사 봄꽃",
    region: "충청/대전",
    address: "충청남도 공주시 사곡면 마곡사로",
    lat: 36.5322, lng: 126.9108,
    flowerIds: ["beotkkot", "jindalrae"],
    peakMonth: 4, peakStartDate: "4.5", peakEndDate: "4.18",
    status: "없음",
    tags: ["벚꽃", "절", "숲길", "UNESCO"],
    description: "유네스코 세계유산 마곡사의 봄꽃 산책로. 고즈넉한 분위기 속 봄꽃을 즐길 수 있습니다.",
    parking: "마곡사 주차장",
    tip: "해탈문 앞 연못 반영 사진이 명소입니다.",
    imageKeyword: "Magoksa temple spring flowers Korea"
  },
  {
    id: 12,
    name: "대전 대청호 벚꽃길",
    region: "충청/대전",
    address: "충청북도 청주시 상당구 문의면",
    lat: 36.5006, lng: 127.5252,
    flowerIds: ["beotkkot"],
    peakMonth: 4, peakStartDate: "4.7", peakEndDate: "4.17",
    status: "없음",
    tags: ["벚꽃", "드라이브", "호수", "당일치기"],
    description: "대청호를 끼고 펼쳐지는 벚꽃 드라이브 코스. 벚꽃과 수면 반영이 환상적입니다.",
    parking: "대청호 오백리길 주차장",
    tip: "차량 드라이브 코스로 최적. 창문 열고 달리면 꽃비 체험 가능.",
    imageKeyword: "cherry blossom Daecheong Lake Daejeon"
  },
  {
    id: 13,
    name: "서산 개심사 겹벚꽃",
    region: "충청/대전",
    address: "충청남도 서산시 운산면 개심사로",
    lat: 36.7268, lng: 126.5213,
    flowerIds: ["kyupbeotkkot"],
    peakMonth: 4, peakStartDate: "4.20", peakEndDate: "4.30",
    status: "없음",
    tags: ["겹벚꽃", "절", "분홍팝콘", "한적"],
    description: "'분홍 팝콘'이 가득한 겹벚꽃 명소. 400년 고찰과 어우러진 봄꽃이 압도적입니다.",
    parking: "개심사 입구 주차장",
    tip: "벚꽃 이후 방문해야 겹벚꽃이 만개합니다. 시기 확인 필수.",
    imageKeyword: "Gaesimsa temple double cherry blossom Seosan"
  },

  // ===== 전라/광주 =====
  {
    id: 14,
    name: "광양 매화마을",
    region: "전라/광주",
    address: "전라남도 광양시 다압면 매화로",
    lat: 35.0822, lng: 127.7228,
    flowerIds: ["maehwa"],
    peakMonth: 3, peakStartDate: "3.10", peakEndDate: "3.20",
    status: "없음",
    tags: ["매화", "축제", "섬진강", "봄의 전령"],
    description: "전국 최대 규모의 매화 군락지. 섬진강변을 따라 매화가 만발하면 봄이 시작되었음을 알립니다.",
    parking: "매화마을 공영주차장",
    tip: "이른 아침 안개 속 매화 뷰가 장관. 섬진강 뷰카페도 추천.",
    imageKeyword: "plum blossom Gwangyang Seomjin River",
    festivalName: "광양 매화축제"
  },
  {
    id: 15,
    name: "구례 산수유마을",
    region: "전라/광주",
    address: "전라남도 구례군 산동면 지리산온천로",
    lat: 35.2215, lng: 127.5196,
    flowerIds: ["sansuyu"],
    peakMonth: 3, peakStartDate: "3.12", peakEndDate: "3.22",
    status: "없음",
    tags: ["산수유", "축제", "지리산", "노란 물결"],
    description: "지리산 자락 600년 역사의 산수유 마을. 온 마을이 노란빛으로 물드는 장관.",
    parking: "산수유마을 공영주차장",
    tip: "꽃차 체험, 산수유 한과 만들기 등 다양한 체험 프로그램 운영.",
    imageKeyword: "cornelian cherry Gurye village Jirisan",
    festivalName: "구례 산수유꽃축제"
  },
  {
    id: 16,
    name: "담양 메타세콰이아 & 봄꽃",
    region: "전라/광주",
    address: "전라남도 담양군 담양읍 학동리",
    lat: 35.3233, lng: 126.9818,
    flowerIds: ["beotkkot", "gaenari"],
    peakMonth: 4, peakStartDate: "4.5", peakEndDate: "4.15",
    status: "없음",
    tags: ["벚꽃", "메타세콰이아", "드라이브", "영화세트"],
    description: "영화 '내 머리 속의 지우개' 촬영지. 메타세콰이아 가로수길에 봄꽃이 피면 환상적입니다.",
    parking: "메타세콰이아랜드 주차장",
    tip: "죽녹원 대나무숲과 함께 당일 코스로 묶으면 좋습니다.",
    imageKeyword: "Metasequoia road Damyang spring"
  },
  {
    id: 17,
    name: "고창 청보리밭 & 유채꽃",
    region: "전라/광주",
    address: "전라북도 고창군 공음면 선동리",
    lat: 35.3929, lng: 126.6461,
    flowerIds: ["yuche"],
    peakMonth: 4, peakStartDate: "4.15", peakEndDate: "5.5",
    status: "없음",
    tags: ["유채꽃", "청보리", "광활", "인스타"],
    description: "청보리밭 사이로 유채꽃이 함께 피어나는 장관. 광활한 풍경이 마치 유럽의 시골 같습니다.",
    parking: "학원 농장 주차장 (유료)",
    tip: "유채꽃 시즌에 맞춰 학원농장 청보리&유채꽃 축제가 열립니다.",
    imageKeyword: "green barley field canola flower Gochang",
    festivalName: "고창 청보리밭 축제"
  },
  {
    id: 18,
    name: "함평 작약꽃 축제",
    region: "전라/광주",
    address: "전라남도 함평군 함평읍",
    lat: 35.0655, lng: 126.5177,
    flowerIds: ["jakak"],
    peakMonth: 5, peakStartDate: "5.10", peakEndDate: "5.25",
    status: "없음",
    tags: ["작약", "축제", "꽃의 여왕"],
    description: "풍성한 작약꽃이 가득한 봄꽃 축제. 다양한 색의 작약이 군락을 이룹니다.",
    parking: "행사장 주차장 마련",
    tip: "오전 방문 시 꽃잎이 가장 활짝 펴있습니다.",
    imageKeyword: "peony flower festival Hampyeong Korea",
    festivalName: "함평 나비·작약 축제"
  },

  // ===== 경상/부산 =====
  {
    id: 19,
    name: "진해 군항제 (여좌천)",
    region: "경상/부산",
    address: "경상남도 창원시 진해구 여좌천로",
    lat: 35.1440, lng: 128.6637,
    flowerIds: ["beotkkot"],
    peakMonth: 4, peakStartDate: "3.30", peakEndDate: "4.10",
    status: "없음",
    tags: ["벚꽃", "군항제", "로망스 다리", "전국 최대"],
    description: "전국 벚꽃 축제의 성지. 300만 그루 벚꽃이 도시 전체를 뒤덮습니다. 여좌천 로망스 다리가 필수 코스.",
    parking: "진해역 주변 주차장 (셔틀버스 이용 강력 추천)",
    tip: "군항제 기간 인파 극심. 평일 방문하거나 이른 아침 방문하세요.",
    imageKeyword: "Jinhae Cherry Blossom Festival Yeojwa",
    festivalName: "진해 군항제"
  },
  {
    id: 20,
    name: "경주 보문단지 벚꽃",
    region: "경상/부산",
    address: "경상북도 경주시 보문동 보문호",
    lat: 35.8437, lng: 129.2666,
    flowerIds: ["beotkkot", "kyupbeotkkot"],
    peakMonth: 4, peakStartDate: "4.3", peakEndDate: "4.20",
    status: "없음",
    tags: ["벚꽃", "겹벚꽃", "호수", "역사"],
    description: "보문호를 둘러싼 벚꽃과 겹벚꽃. 신라 유적지와 어우러진 특별한 봄꽃 경관.",
    parking: "보문단지 공영주차장",
    tip: "불국사 겹벚꽃과 함께 묶어서 경주 당일치기 코스로 최적.",
    imageKeyword: "Gyeongju Bomun Lake cherry blossom"
  },
  {
    id: 21,
    name: "경주 불국사 겹벚꽃",
    region: "경상/부산",
    address: "경상북도 경주시 불국로 불국사",
    lat: 35.7888, lng: 129.3319,
    flowerIds: ["kyupbeotkkot"],
    peakMonth: 4, peakStartDate: "4.18", peakEndDate: "4.28",
    status: "없음",
    tags: ["겹벚꽃", "UNESCO", "사찰", "분홍팝콘"],
    description: "유네스코 세계문화유산 불국사의 겹벚꽃. '분홍 팝콘'이 천왕문 앞에 가득 피어납니다.",
    parking: "불국사 주차장 (유료)",
    tip: "일반 벚꽃보다 2주 늦게 핌. 개화 시기 정보 확인 후 방문하세요.",
    imageKeyword: "Bulguksa double cherry blossom Gyeongju"
  },
  {
    id: 22,
    name: "하동 십리벚꽃길",
    region: "경상/부산",
    address: "경상남도 하동군 화개면 화개동",
    lat: 35.1988, lng: 127.7001,
    flowerIds: ["beotkkot"],
    peakMonth: 4, peakStartDate: "4.1", peakEndDate: "4.12",
    status: "없음",
    tags: ["벚꽃", "섬진강", "드라이브", "사랑"],
    description: "4km 벚꽃 터널 드라이브 코스. '혼례길'로도 불리며 커플 명소로 유명합니다.",
    parking: "화개장터 주변 주차장",
    tip: "화개장터 → 쌍계사 방향으로 이동하며 드라이브하면 최적.",
    imageKeyword: "Hadong Hwagae cherry blossom road Seomjin"
  },
  {
    id: 23,
    name: "합천 황매산 철쭉제",
    region: "경상/부산",
    address: "경상남도 합천군 가회면 황매산",
    lat: 35.4882, lng: 128.0490,
    flowerIds: ["cheonjuk"],
    peakMonth: 5, peakStartDate: "5.1", peakEndDate: "5.15",
    status: "없음",
    tags: ["철쭉", "산", "전국 최대", "5월"],
    description: "전국 최대 규모의 철쭉 군락지. 황매산 정상부 일대가 진분홍빛으로 물드는 장관.",
    parking: "황매산 주차장 (철쭉제 기간 셔틀버스 운행)",
    tip: "철쭉제 기간 셔틀버스 예약 필수. 주말 방문 시 극심한 인파 예상.",
    imageKeyword: "azalea Hwangmaesan mountain Hapcheon",
    festivalName: "황매산 철쭉제"
  },
  {
    id: 24,
    name: "합천 핫들생태공원 작약",
    region: "경상/부산",
    address: "경상남도 합천군 합천읍 핫들생태공원",
    lat: 35.5660, lng: 128.1667,
    flowerIds: ["jakak"],
    peakMonth: 5, peakStartDate: "5.8", peakEndDate: "5.22",
    status: "없음",
    tags: ["작약", "생태공원", "5월", "당일치기"],
    description: "황매산 철쭉 이후 바통을 받는 5월 봄꽃의 마지막 주자. 화사한 작약꽃 군락이 장관.",
    parking: "핫들생태공원 주차장",
    tip: "황매산 철쭉 + 합천 작약 두 명소를 하루에 함께 즐길 수 있습니다.",
    imageKeyword: "peony Hapcheon ecological park"
  },
  {
    id: 25,
    name: "창녕 화왕산 진달래",
    region: "경상/부산",
    address: "경상남도 창녕군 창녕읍 화왕산",
    lat: 35.5332, lng: 128.5017,
    flowerIds: ["jindalrae"],
    peakMonth: 4, peakStartDate: "4.5", peakEndDate: "4.15",
    status: "없음",
    tags: ["진달래", "산", "등산", "분화구"],
    description: "사화산의 분화구 분지 전체가 진달래로 가득 채워지는 독특하고 신비로운 명소.",
    parking: "화왕산 등산로 입구 주차장",
    tip: "정상 분화구까지 약 2시간 등산. 체력 준비 필요.",
    imageKeyword: "azalea Hwawangsan crater Changnyeong"
  },
  {
    id: 26,
    name: "부산 황령산 벚꽃",
    region: "경상/부산",
    address: "부산광역시 수영구 망미동 황령산",
    lat: 35.1497, lng: 129.0910,
    flowerIds: ["beotkkot"],
    peakMonth: 4, peakStartDate: "4.3", peakEndDate: "4.13",
    status: "없음",
    tags: ["벚꽃", "야경", "부산", "드라이브"],
    description: "부산 시내를 한눈에 내려다보며 벚꽃을 즐길 수 있는 드라이브 명소. 야경과 함께하면 특히 아름답습니다.",
    parking: "황령산 드라이브웨이 주변",
    tip: "낮과 야경 모두 아름다운 명소. 저녁 방문도 강력 추천.",
    imageKeyword: "cherry blossom Hwangnyeongsan Busan night view"
  },

  // ===== 제주 =====
  {
    id: 27,
    name: "제주 성산 유채꽃밭",
    region: "제주",
    address: "제주특별자치도 서귀포시 성산읍",
    lat: 33.4609, lng: 126.9268,
    flowerIds: ["yuche"],
    peakMonth: 2, peakStartDate: "2.1", peakEndDate: "3.31",
    status: "없음",
    tags: ["유채꽃", "성산일출봉", "제주", "봄의 시작"],
    description: "성산일출봉을 배경으로 펼쳐지는 유채꽃밭. 2월부터 3월까지 전국에서 가장 먼저 봄꽃을 볼 수 있는 곳.",
    parking: "성산일출봉 주차장",
    tip: "성산일출봉 입장권 구매 시 시야 확보를 위해 오전 이른 방문 권장.",
    imageKeyword: "Seongsan Ilchulbong canola yellow flower Jeju"
  },
  {
    id: 28,
    name: "제주 녹산로 유채꽃 도로",
    region: "제주",
    address: "제주특별자치도 서귀포시 표선면 녹산로",
    lat: 33.3497, lng: 126.8102,
    flowerIds: ["yuche"],
    peakMonth: 4, peakStartDate: "4.5", peakEndDate: "4.20",
    status: "없음",
    tags: ["유채꽃", "벚꽃", "드라이브", "제주"],
    description: "유채꽃과 벚꽃이 함께 피는 드라이브 명소. 노란색과 분홍색의 어우러짐이 절경입니다.",
    parking: "가시리 조랑말 체험공원 주차장",
    tip: "가시리 조랑말 체험관에서 말 체험 후 드라이브 코스 추천.",
    imageKeyword: "Noksan road canola cherry blossom Jeju drive"
  },
  {
    id: 29,
    name: "한라산 철쭉",
    region: "제주",
    address: "제주특별자치도 제주시 해발 1700m 이상",
    lat: 33.3617, lng: 126.5292,
    flowerIds: ["cheonjuk"],
    peakMonth: 5, peakStartDate: "5.10", peakEndDate: "5.25",
    status: "없음",
    tags: ["철쭉", "한라산", "등산", "백록담"],
    description: "1700m 이상 고지대에 펼쳐지는 철쭉 군락. 영실코스와 어리목코스를 따라 철쭉 천국이 펼쳐집니다.",
    parking: "영실 탐방로 주차장, 어리목 주차장",
    tip: "입산 통제 여부 사전 확인 필수. 이른 아침 출발 권장.",
    imageKeyword: "azalea Hallasan mountain Jeju spring"
  }
];

// 지역별 명소 필터
export function getSpotsByRegion(region: Region): Spot[] {
  return SPOTS.filter(s => s.region === region);
}

// 꽃 종류별 명소 필터
export function getSpotsByFlower(flowerId: string): Spot[] {
  return SPOTS.filter(s => s.flowerIds.includes(flowerId));
}

// 월별 명소 필터
export function getSpotsByMonth(month: number): Spot[] {
  return SPOTS.filter(s => s.peakMonth === month);
}

export const REGIONS: Region[] = ["서울/경기", "강원", "충청/대전", "전라/광주", "경상/부산", "제주"];
