import { notFound } from "next/navigation";
import Link from "next/link";
import AdBanner from "@/components/AdBanner";
import FlowerCoupangBanner from "@/components/FlowerCoupangBanner";
import { SPOTS } from "@/lib/spots";
import { FLOWERS } from "@/lib/flowers";

// 정적 경로 생성 (SSG)
export function generateStaticParams() {
  return SPOTS.map((spot) => ({
    id: spot.id.toString(),
  }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const spot = SPOTS.find((s) => s.id.toString() === params.id);
  if (!spot) return { title: "명소 정보를 찾을 수 없습니다 | 꽃맵" };

  return {
    title: `${spot.name} 2026 봄꽃 개화 시기 및 주차 정보 | 꽃맵`,
    description: `${spot.address}에 위치한 ${spot.name}의 2026년 봄꽃 개화 시기, 주차장 정보, 꿀팁을 확인하세요. ${spot.description}`,
    keywords: `${spot.name}, ${spot.name} 개화시기, ${spot.region} 봄꽃, ${spot.tags.join(", ")}`,
  };
}

export default function SpotDetailPage({ params }: { params: { id: string } }) {
  const spot = SPOTS.find((s) => s.id.toString() === params.id);
  
  if (!spot) {
    notFound();
  }

  // 대표 꽃 정보 찾기
  const mainFlower = FLOWERS.find((f) => f.id === spot.flowerIds[0]);

  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden w-full">
      {/* ====== 내비게이션 ====== */}
      <nav className="nav-bar sticky top-0 z-50 px-4 md:px-8">
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

      {/* ====== 상단 광고 ====== */}
      <div className="bg-white border-b border-rose-100">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <AdBanner dataAdSlot="spot-detail-top" dataAdFormat="auto" style={{ minHeight: 60 }} />
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* ====== 헤더 영역 ====== */}
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-slate-200 mb-6">
          <div className="flex flex-col md:flex-row gap-6 md:items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-rose-50 text-rose-600 font-black px-2.5 py-1 rounded-md text-xs border border-rose-100">
                  {spot.region}
                </span>
                {spot.festivalName && (
                  <span className="bg-violet-50 text-violet-600 font-black px-2.5 py-1 rounded-md text-xs border border-violet-100">
                    🎪 {spot.festivalName}
                  </span>
                )}
              </div>
              <h1 className="text-3xl md:text-4xl font-black text-slate-800 mb-2">
                {spot.name}
              </h1>
              <p className="text-slate-500 font-medium">📍 {spot.address}</p>
            </div>
            
            <div className="shrink-0 text-center bg-slate-50 p-4 rounded-2xl border border-slate-100 min-w-[140px]">
              <p className="text-xs text-slate-400 font-bold mb-1">현재 상태</p>
              <div className="text-2xl font-black text-rose-500 mb-1">{spot.status}</div>
              <p className="text-[11px] text-slate-500">절정: {spot.peakStartDate} ~ {spot.peakEndDate}</p>
            </div>
          </div>

          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            {spot.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {spot.tags.map((tag) => (
              <span key={tag} className="text-sm font-bold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* ====== 상세 정보 2단 그리드 ====== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* 주요 봄꽃 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
            <h3 className="text-lg font-black text-slate-800 mb-4 flex items-center gap-2">
              <span>🌸</span> 만날 수 있는 주요 봄꽃
            </h3>
            {mainFlower ? (
              <Link href={`/flowers/${mainFlower.id}`} className="flex items-center gap-4 bg-rose-50/50 p-4 rounded-xl border border-rose-100 hover:bg-rose-50 transition-colors group">
                <div className="text-4xl group-hover:scale-110 transition-transform">{mainFlower.emoji}</div>
                <div>
                  <p className="font-black text-rose-600 text-lg mb-1">{mainFlower.name}</p>
                  <p className="text-xs text-slate-500">꽃 정보 자세히 보기 →</p>
                </div>
              </Link>
            ) : (
              <p className="text-slate-500 text-sm">등록된 꽃 정보가 없습니다.</p>
            )}
          </div>

          {/* 방문 정보 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
            <h3 className="text-lg font-black text-slate-800 mb-4 flex items-center gap-2">
              <span>🚘</span> 방문 및 주차 정보
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 text-lg">🅿️</div>
                <div>
                  <p className="text-sm font-bold text-slate-700 mb-1">주차장 현황</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{spot.parking}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 text-lg">💡</div>
                <div>
                  <p className="text-sm font-bold text-slate-700 mb-1">방문 꿀팁</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{spot.tip}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ====== 인피드 광고 ====== */}
        <div className="mb-8">
          <div className="bg-white p-4 rounded-2xl border border-slate-100">
            <AdBanner dataAdSlot="spot-detail-infeed" dataAdFormat="fluid" style={{ minHeight: 120 }} />
          </div>
        </div>

        {/* ====== 지도 보기 버튼 ====== */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 text-center mb-8">
          <div className="text-4xl mb-4">🗺️</div>
          <h2 className="text-xl font-black text-slate-800 mb-2">실시간 지도로 더 정확하게</h2>
          <p className="text-slate-500 text-sm mb-6">지도에서 {spot.name} 주변의 다른 명소들과 혼잡도를 확인하세요.</p>
          <Link href="/map" className="btn-primary inline-flex items-center gap-2 px-10 py-4 text-lg font-black rounded-full">
            지도에서 위치 확인하기
          </Link>
        </div>

        {/* ====== 하단 쿠팡 배너 ====== */}
        <div className="mb-8">
          <FlowerCoupangBanner ids={[2, 3]} layout="grid" />
        </div>

        {/* ====== 하단 광고 ====== */}
        <div className="bg-white p-4 rounded-2xl border border-slate-100 mb-8">
          <AdBanner dataAdSlot="spot-detail-bottom" dataAdFormat="auto" style={{ minHeight: 90 }} />
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
