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
  flowerLanguage: string; // 꽃말
  description: string;
  features: string[];  // 감성 특징
  topSpots: string[];  // 대표 명소명 (최대 4개)
  photoTip: string;    // 사진 촬영 팁
  bestTime: string;    // 관람 추천 시간대
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
    flowerLanguage: "고결한 마음, 미덕, 품격",
    description: "봄의 전령사. 추운 겨울 눈 속에서도 가장 먼저 아침을 깨우며 피어나는 강인한 꽃으로, 은은하고 고혹적인 매화 향기와 순백·분홍빛 꽃잎이 가슴을 설레게 합니다.",
    features: ["은은하고 깊은 매화향", "봄을 알리는 가장 이른 꽃", "한옥과 매화의 고풍스러운 조화"],
    topSpots: ["광양 매화마을", "섬진강 매화길", "순천 선암사 매화", "양산 통도사 홍매화"],
    photoTip: "아침햇살이 스며드는 한옥 기와지붕을 배경으로 매화 가지를 사선으로 담아보세요.",
    bestTime: "오전 08:30 ~ 11:00 (이슬 머금은 맑은 묘미)",
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
    flowerLanguage: "영원불멸의 사랑, 지혜",
    description: "새노란 별모양 꽃들이 시골 마을 전체를 구름처럼 노랗게 물들이는 장관을 선사합니다. 지리산 자락 구례 산수유마을은 노란 산수유와 맑은 돌담길이 조화를 이루는 봄의 명소입니다.",
    features: ["마을 전체를 덮는 노란 구름", "시골 돌담길과의 조화", "봄 산책 및 드라이브 추천"],
    topSpots: ["구례 산수유마을", "이천 산수유 군락지", "양평 산수유 마을", "의성 산수유 마을"],
    photoTip: "돌담 너머로 흐드러지게 핀 노란 산수유를 인물과 함께 아웃포커싱하면 화사한 인생샷이 완성됩니다.",
    bestTime: "오후 02:00 ~ 04:30 (따스한 햇살에 노란색이 가장 선명)",
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
    flowerLanguage: "고귀함, 숭고한 정신, 우애",
    description: "커다란 붓끝 같은 꽃봉오리가 푸른 봄 하늘을 향해 기품 있게 벌어지는 백목련과 자목련. 탐스러운 꽃잎이 단아함과 웅장함을 동시에 선사합니다.",
    features: ["탐스럽고 대형인 흰 꽃잎", "청초하고 고귀한 감성", "봄 하늘 배경 감성 샷"],
    topSpots: ["서울 창경궁 목련", "고양 일산호수공원", "전주 덕진공원 목련길", "부산 어린이대공원"],
    photoTip: "파란 봄 하늘을 배경으로 위를 올려다보는 로우앵글 구도로 웅장한 백목련을 담아보세요.",
    bestTime: "오전 10:00 ~ 12:00 (파란 하늘과의 색상 대비 극대화)",
    coupangKeyword: "봄 원피스 여성"
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
    flowerLanguage: "쾌활, 명랑, 희망, 풍요",
    description: "제주도 바닷가와 육지의 강변을 황금빛 물결로 물들이는 봄의 대명사. 봄바람에 일렁이는 유채꽃밭 속을 거닐며 싱그러운 에너지를 만끽하세요.",
    features: ["끝없이 펼쳐지는 황금빛 지평선", "바다/강변 산책로와의 환상 조화", "화사한 인스타 인생샷 성지"],
    topSpots: ["제주 성산 유채꽃밭", "가평 자라섬 유채꽃축제", "고창 청보리밭 유채", "경주 첨성대 유채꽃"],
    photoTip: "유채꽃밭 한가운데 샛길에 서서 노란 꽃물결 속에 푹 묻힌 듯한 구도로 전신샷을 찍어보세요.",
    bestTime: "일몰 1시간 전 (골든아워 햇살에 황금빛 반짝임 극대화)",
    coupangKeyword: "봄 피크닉 매트"
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
    flowerLanguage: "사랑의 기쁨, 청렴, 신념",
    description: "한국의 대표 민속 봄꽃. 참꽃이라 부르며 산 능선 전체가 분홍빛과 진분홍빛 무릉도원으로 변하는 장관을 펼칩니다.",
    features: ["산 전체가 진분홍 무릉도원", "화전(花煎)을 해먹는 먹는 꽃", "봄 등산과 조화"],
    topSpots: ["북한산 진달래 능선", "강화 고려산 진달래", "여수 영취산 진달래", "창녕 화왕산"],
    photoTip: "등산로 능선 정상에 올라 산 아래로 펼쳐지는 붉은 진달래 군락을 왜곡 없이 담아보세요.",
    bestTime: "오전 09:00 ~ 11:30 (산안개 스쳐갈 때 환상적)",
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
    flowerLanguage: "순결, 절세미인, 삶의 봄날",
    description: "봄꽃 축제의 주인공. 하얀색과 분홍색 꽃송이가 터널을 이루고, 봄바람에 분홍빛 벚꽃 비가 내리는 화려한 순간은 대한민국 봄의 상징입니다.",
    features: ["하늘을 덮는 벚꽃 터널", "바람에 흩날리는 벚꽃비", "전국 최대 축제 메카"],
    topSpots: ["진해 군항제 벚꽃길", "서울 여의도 윤중로", "경주 보문단지 벚꽃", "하동 십리벚꽃길"],
    photoTip: "벚꽃 터널 산책로 중앙에서 망원 렌즈 느낌으로 뒤편 꽃길을 밀집되게 당겨서 찍어보세요.",
    bestTime: "오전 07:30 ~ 09:30 (인파 없을 때 쾌적한 피크닉)",
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
    flowerLanguage: "희망, 깊은 정, 기대",
    description: "샛노란 종 모양 꽃들이 울타리와 강변 산책로를 가득 채우는 친근하고 따뜻한 봄꽃. 동요 속에 자주 등장하며 순수한 희망의 기운을 전해줍니다.",
    features: ["샛노란 울타리와 가로수길", "친근하고 순수한 동심", "벚꽃과 만나는 봄 상징"],
    topSpots: ["서울 응봉산 개나리", "인천 개나리 동산", "수원 서호공원 개나리", "부산 수영강변"],
    photoTip: "응봉산 개나리 언덕 위에서 서울 도심과 한강이 어우러지는 배경으로 촬영해보세요.",
    bestTime: "오후 03:00 ~ 05:00 (노란 빛깔이 가장 매력적인 시각)",
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
    flowerLanguage: "사랑의 노예, 용기, 희망",
    description: "무릉도원의 상징인 복숭아나무 꽃. 연하고 짙은 분홍빛 구름이 과수원 들판에 드넓게 퍼지며 따뜻하고 몽환적인 분위기를 연출합니다.",
    features: ["과수원 지대의 핑크빛 바다", "동화 속 무릉도원 감성", "사진작가들이 사랑하는 핫스팟"],
    topSpots: ["충북 청주 조치원 복사꽃", "경북 영천 복사꽃 마을", "전북 완주 복숭아 과수원", "경기 이천 과수원"],
    photoTip: "과수원 이랑 사이 흙길에서 연분홍 복사꽃 가지를 프레임으로 활용해 포근함을 담으세요.",
    bestTime: "오전 09:00 ~ 11:00 (과수원 부드러운 순광 조건)",
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
    flowerLanguage: "정숙, 단아함, 붉은 미인",
    description: "'분홍 팝콘'이라는 애칭처럼 꽃잎이 겹겹이 포개진 탐스러운 탐라/카네이션 모양의 꽃. 일반 벚꽃이 진 뒤 4월 말에 피어 매력을 발산합니다.",
    features: ["풍성하고 묵직한 분홍 팝콘", "일반 벚꽃 직후 개화", "동화 같은 러블리 감성"],
    topSpots: ["경주 불국사 겹벚꽃동산", "서산 개심사 왕겹벚꽃", "전주 완산칠봉 꽃동산", "서울 성균관대 명륜당"],
    photoTip: "탐스러운 겹벚꽃 송이를 얼굴 바로 옆에 대고 하이앵글로 찍으면 얼짱 샷 완성!",
    bestTime: "오전 10:00 ~ 오후 02:00 (채도가 제일 예쁜 햇빛)",
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
    flowerLanguage: "첫사랑의 설렘, 우정, 젊은 날의 추억",
    description: "바람이 불 때마다 은은하게 퍼지는 달콤한 향기의 대명사 수수꽃다리. 신비로운 연보라빛 꽃송이가 골목길과 공원을 로맨틱하게 만듭니다.",
    features: ["가장 달콤하고 매혹적인 향기", "몽환적인 연보라빛 수놓음", "향수와 로맨스의 상징"],
    topSpots: ["서울 공원 라일락길", "과천 서울대공원 라일락", "양평 용문사 라일락", "담양 메타세쿼이아"],
    photoTip: "연보라 라일락 꽃송이에 코를 대는 동작과 함께 감성적인 클로즈업 사진을 연출해 보세요.",
    bestTime: "오후 04:00 ~ 06:00 (바람이 불어 향기가 퍼지는 시간)",
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
    flowerLanguage: "절세미인, 순결, 아련한 사랑",
    description: "제주도가 자생지인 한국 자생 품종. 일반 벚꽃보다 화형이 크고 풍성하며, 나무 한 그루 전체가 분홍빛 드레스를 입은 듯 웅장합니다.",
    features: ["볼륨감이 남다른 대형 꽃송이", "제주도 자생종의 위엄", "화려함의 극치"],
    topSpots: ["제주 전농로 왕벚꽃길", "제주 봉개동 왕벚꽃 자생지", "서울 홍릉수목원 왕벚꽃"],
    photoTip: "거대한 왕벚꽃 나무 아래에 서서 하늘을 가득 채운 분홍 꽃개울을 앵글에 담아보세요.",
    bestTime: "오전 09:00 ~ 11:30 (빛이 은은할 때 가장 우아함)",
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
    flowerLanguage: "헛수고, 단전한 노력, 노련하다",
    description: "가지마다 쌀알 같은 작고 귀여운 흰 꽃들이 빼곡히 박혀 싸락눈이 내린 듯 반짝이는 꽃. 녹음이 짙어지는 5월 길가를 순백으로 빛냅니다.",
    features: ["가지 전체에 쏟아지는 흰 눈송이", "싱그러운 녹색 잎과의 대비", "산책길 힐링 스팟"],
    topSpots: ["서울 올림픽공원 조팝나무", "양재천 조팝나무 길", "전주 덕진공원 수변"],
    photoTip: "초록 잎과 조팝나무 흰 꽃이 가득한 곡선 산책로를 따라 걸어가는 뒷모습을 찍어보세요.",
    bestTime: "오전 10:00 ~ 오후 01:00 (햇살에 순백색 꽃잎 반짝임)",
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
    flowerLanguage: "사랑의 고백, 영원한 애정, 명예",
    description: "빨강, 노랑, 보라, 주황 오색 정원이 동화나라를 만들어냅니다. 네덜란드 감성이 가득한 대규모 튤립 정원은 테마파크와 꽃축제의 핫플레이스입니다.",
    features: ["오색 칼라의 대규모 기하학 정원", "동화 같은 풍차와 어우러짐", "데이트 최적의 장소"],
    topSpots: ["태안 세계튤립꽃박람회", "에버랜드 튤립가든", "고양 국제꽃박람회", "서울 뚝섬 한강공원"],
    photoTip: "알록달록한 튤립 정원 중앙 벤치나 풍차 건물을 배경으로 화사하게 연출해 보세요.",
    bestTime: "오후 01:00 ~ 04:00 (컬러감이 가장 또렷하고 화사함)",
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
    flowerLanguage: "사랑의 즐거움, 줄기찬 노력",
    description: "산 능선 전체를 불타오르듯 진분홍빛과 자줏빛으로 수놓는 5월 등산의 꽃. 합천 황매산과 지리산 세석평전의 철쭉 군락은 압도적인壮觀을 형성합니다.",
    features: ["산 정상을 붉게 물들이는 장관", "봄 등산객의 피날레", "광활한 산책 데크"],
    topSpots: ["합천 황매산 철쭉제", "소백산 철쭉 군락지", "지리산 세석평전", "제주 한라산 철쭉"],
    photoTip: "황매산 철쭉 능선 하늘계단에 올라가 붉은 산 융단을 굽어보는 장엄한 구도를 잡아보세요.",
    bestTime: "일출 직후 (새벽 안개와 아침 일출 빛에 물든 진분홍)",
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
    flowerLanguage: "수줍음, 부귀, 정숙함",
    description: "'함박꽃'이라 불릴 만큼 주먹만 한 꽃송이가 겹겹이 터져 나오는 부귀와 고귀함의 결정체. 5월 중순 짧고 굵게 여왕의 자태를 자랑합니다.",
    features: ["주먹만한 탐스러운 화형", "부귀와 고귀함의 화신", "5월 중순 짧고 강렬한 만개"],
    topSpots: ["합천 핫들생태공원 작약", "전남 함평 작약꽃밭", "경기 안성 팜랜드 작약", "영천 한약재 작약"],
    photoTip: "큰 꽃송이에 얼굴을 가깝게 대고 미소를 지으며 화사한 뷰티 포트레이트를 남기세요.",
    bestTime: "오전 10:00 ~ 오후 01:00 (꽃잎이 활짝 벌어진 상태)",
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
    flowerLanguage: "기쁜 소식, 좋은 메시지, 신비한 사랑",
    description: "붓 모양의 기품 있는 보랏빛 꽃잎이 수변공원과 정원을 서정적으로 장식합니다. 프랑스 국화이자 고흐가 사랑했던 신비로운 봄꽃입니다.",
    features: ["서정적이고 고풍스러운 보라빛", "연못과 습지 수변과 조화", "예술가들이 사랑한 꽃"],
    topSpots: ["창녕 우포늪 붓꽃길", "서울 선유도공원 수생식원", "경기 가평 한택식물원", "순천만 붓꽃"],
    photoTip: "잔잔한 연못 물결에 반사된 보라빛 붓꽃 반영을 함께 프레임에 남겨보세요.",
    bestTime: "오후 04:00 ~ 06:00 (물가 노을빛과 어우러질 때)",
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
    flowerLanguage: "진심, 변덕, 보라빛 신비, 처녀의 꿈",
    description: "토양 산도에 따라 파랑, 보라, 핑크, 흰색으로 마법처럼 변하는 몽글몽글 풍성한 꽃. 봄의 끝자락부터 여름으로 이어지는 인스타 최강 감성꽃입니다.",
    features: ["토양에 따라 색깔이 마법처럼 변함", "풍성한 몽글몽글 꽃송이", "여름 시작을 알리는 최고의 꽃"],
    topSpots: ["제주 마노르블랑 수국", "부산 태종대 수국", "안동 하회마을 수국길", "포항 기청산 수목원"],
    photoTip: "파란색과 분홍색 수국이 빽빽하게 우거진 수국 벽 앞에서 인형처럼 서서 인생샷을 건지세요.",
    bestTime: "비 온 직후 또는 촉촉한 아침 (물방울이 보석처럼 영롱함)",
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
    flowerLanguage: "열렬한 사랑, 기쁨, 아름다움, 열정",
    description: "꽃의 여왕. 수천 종의 화려한 장미 덩굴이 아치와 터널을 가득 메우는 5~6월 장미 축제는 봄꽃 여행의 눈부신 피날레를 장식합니다.",
    features: ["꽃의 여왕다운 화려함과 향기", "유럽풍 장미 터널과 아치", "연인들의 데이트 코스 1위"],
    topSpots: ["서울대공원 장미원", "서울 올림픽공원 장미광장", "삼척 장미공원", "곡성 세계장미축제"],
    photoTip: "붉은 장미 아치 터널 아래에서 햇살을 받으며 걸어오는 설레는 데이트 샷을 연출해 보세요.",
    bestTime: "오후 03:30 ~ 05:30 (장미의 깊은 레드 컬러감이 가장 진함)",
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
