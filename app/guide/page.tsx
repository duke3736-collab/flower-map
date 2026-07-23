import Link from "next/link";
import AdBanner from "@/components/AdBanner";
import FlowerCoupangBanner from "@/components/FlowerCoupangBanner";

export const metadata = {
  title: "봄꽃 구경 완전 정복 가이드 | 꽃맵",
  description: "인생샷 찍는 꿀팁부터 주차 지옥 피하는 법, 준비물 리스트까지. 꽃맵이 알려주는 완벽한 봄 나들이 가이드라인.",
  keywords: "봄꽃 가이드, 꽃구경 꿀팁, 봄꽃 사진 찍는법, 진해 군항제 주차, 피크닉 준비물, 봄꽃 축제 팁",
};

export default function GuidePage() {
  const guides = [
    {
      emoji: "📸",
      title: "인생샷을 남기는 사진 꿀팁",
      items: [
        "역광을 피하세요! 해가 등 뒤에 있을 때 가장 색감이 예쁘게 나옵니다.",
        "인물 사진은 스마트폰 카메라의 '망원(2x, 3x)' 모드를 활용하면 배경이 압축되어 꽃이 더 풍성해 보입니다.",
        "옷차림은 흰색, 연노랑, 파스텔 톤 등 밝은 색상을 입으면 사진이 화사해집니다.",
      ]
    },
    {
      emoji: "🚘",
      title: "주차 지옥을 피하는 3가지 법칙",
      items: [
        "가장 중요한 것은 '시간'입니다. 주말이라면 무조건 오전 9시 이전에 도착해야 합니다.",
        "주요 명소는 셔틀버스를 운영하는 경우가 많습니다. 인근 대형 임시주차장에 차를 대고 셔틀을 이용하는 것이 훨씬 빠릅니다.",
        "출발 전 실시간 교통 앱(T맵, 카카오내비)에서 '00 주차장'을 검색해 '현재 가는 차량' 수를 꼭 확인하세요.",
      ]
    },
    {
      emoji: "🍱",
      title: "봄 나들이 완벽 준비물 리스트",
      items: [
        "방수 피크닉 매트: 아침 이슬이나 전날 비로 땅이 젖어있을 수 있습니다.",
        "물티슈와 쓰레기봉투: 축제장 주변은 쓰레기통이 금방 차거나 찾기 어렵습니다.",
        "가벼운 겉옷: 봄날의 아침저녁은 일교차가 매우 큽니다. 가디건은 필수입니다.",
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden w-full">
      {/* ====== 내비게이션 ====== */}
      <nav className="nav-bar sticky top-0 z-50 px-4 md:px-8 bg-white border-b border-rose-100">
        <div className="max-w-6xl mx-auto h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🌸</span>
            <span className="text-xl font-black text-rose-500 tracking-tight">꽃맵</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/map" className="btn-primary inline-flex items-center gap-1.5 px-4 py-2 text-sm">
              <span>🗺️</span> 지도 보기
            </Link>
          </div>
        </div>
      </nav>

      {/* ====== 헤더 ====== */}
      <header className="px-4 py-12 md:py-16 text-center bg-white border-b border-rose-100 section-purple">
        <div className="flower-badge mb-4" style={{background:"#F5F3FF",color:"#7C3AED",borderColor:"#DDD6FE"}}>💡 SMART GUIDE</div>
        <h1 className="text-3xl md:text-5xl font-black text-slate-800 mb-4">
          봄꽃 나들이 완전 정복 가이드
        </h1>
        <p className="text-slate-600 font-medium md:text-lg max-w-2xl mx-auto">
          알고 가면 두 배로 즐거운 봄꽃 여행! <br className="hidden md:block" />
          사진 찍는 팁부터 교통 체증 피하는 방법까지 꿀팁을 대방출합니다.
        </p>
      </header>

      {/* ====== 상단 광고 ====== */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="ad-slot bg-white shadow-sm border border-slate-200 rounded-2xl flex items-center justify-center">
          <AdBanner dataAdSlot="guide-top" dataAdFormat="auto" style={{ minHeight: 90, width: "100%" }} />
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-4 py-8">
        <div className="space-y-8 mb-12">
          {guides.map((guide, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-slate-200">
              <h2 className="text-2xl md:text-3xl font-black text-slate-800 mb-6 flex items-center gap-3">
                <span className="text-4xl">{guide.emoji}</span>
                {guide.title}
              </h2>
              <ul className="space-y-4">
                {guide.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-black shrink-0">
                      {itemIdx + 1}
                    </div>
                    <p className="text-slate-600 leading-relaxed mt-0.5 font-medium">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ====== 인피드 광고 ====== */}
        <div className="my-8">
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
            <AdBanner dataAdSlot="guide-infeed" dataAdFormat="fluid" style={{ minHeight: 120 }} />
          </div>
        </div>

        {/* ====== 하단 쿠팡 배너 ====== */}
        <div className="mb-8">
          <FlowerCoupangBanner ids={[3, 4]} layout="grid" />
        </div>
      </main>

      {/* ====== 푸터 ====== */}
      <footer className="bg-white border-t border-pink-100 px-4 py-8 text-center mt-auto">
        <div className="max-w-4xl mx-auto space-y-3">
          <p className="text-xs text-slate-300">© 2026 꽃맵 | flower.weknews.com</p>
        </div>
      </footer>
    </div>
  );
}
