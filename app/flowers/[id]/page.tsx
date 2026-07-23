import { notFound } from "next/navigation";
import Link from "next/link";
import AdBanner from "@/components/AdBanner";
import FlowerCoupangBanner from "@/components/FlowerCoupangBanner";
import { FLOWERS } from "@/lib/flowers";

// 정적 경로 생성 (SSG)
export function generateStaticParams() {
  return FLOWERS.map((flower) => ({
    id: flower.id,
  }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const flower = FLOWERS.find((f) => f.id === params.id);
  if (!flower) return { title: "꽃 정보를 찾을 수 없습니다 | 꽃맵" };

  return {
    title: `${flower.name} 개화 시기 및 전국 명소 | 2026 꽃맵`,
    description: `${flower.name}의 2026년 개화 시기(${flower.bloomStart})와 전국 명소를 지도로 확인하세요. ${flower.description.slice(0, 80)}...`,
  };
}

export default function FlowerDetailPage({ params }: { params: { id: string } }) {
  const flower = FLOWERS.find((f) => f.id === params.id);
  
  if (!flower) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-rose-50/30 overflow-x-hidden w-full">
      {/* ====== 내비게이션 ====== */}
      <nav className="nav-bar sticky top-0 z-50 px-4 md:px-8">
        <div className="max-w-6xl mx-auto h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🌸</span>
            <span className="text-xl font-black text-rose-500 tracking-tight">꽃맵</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/flowers" className="text-sm font-bold text-slate-600 hover:text-rose-500 transition-colors">
              목록으로
            </Link>
            <Link href="/map" className="btn-primary inline-flex items-center gap-1.5 px-4 py-2 text-sm">
              <span>🗺️</span> 지도 보기
            </Link>
          </div>
        </div>
      </nav>

      {/* ====== 상단 광고 ====== */}
      <div className="bg-white border-b border-rose-100">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <AdBanner dataAdSlot="flower-detail-top" dataAdFormat="auto" style={{ minHeight: 60 }} />
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 py-10">
        {/* ====== 헤더 영역 ====== */}
        <div className="spring-card p-8 md:p-12 text-center mb-8 relative overflow-hidden section-pink">
          <div className="absolute top-0 right-0 p-8 text-8xl opacity-10 pointer-events-none transform rotate-12">
            {flower.emoji}
          </div>
          <div className="absolute bottom-0 left-0 p-6 text-6xl opacity-10 pointer-events-none transform -rotate-12">
            {flower.emoji}
          </div>
          
          <div className="relative z-10">
            <div className="text-6xl md:text-8xl mb-6 inline-block animate-bounce">{flower.emoji}</div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-800 mb-4">
              {flower.name}
            </h1>
            <p className="text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
              {flower.description}
            </p>
          </div>
        </div>

        {/* ====== 개화 정보 카드 ====== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-white p-6 rounded-2xl border border-rose-100 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center text-rose-500 text-2xl shrink-0">
              🌱
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 mb-1">첫 개화 시기</p>
              <p className="text-lg font-black text-slate-800">{flower.bloomStart}</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-rose-100 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center text-pink-500 text-2xl shrink-0">
              🌸
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 mb-1">절정 (만개) 시기</p>
              <p className="text-lg font-black text-slate-800">{flower.bloomPeak} ~ {flower.bloomEnd}</p>
            </div>
          </div>
        </div>

        {/* ====== 중간 광고 ====== */}
        <div className="my-8">
          <div className="bg-white p-4 rounded-2xl border border-slate-100">
            <AdBanner dataAdSlot="flower-detail-mid" dataAdFormat="auto" style={{ minHeight: 90 }} />
          </div>
        </div>

        {/* ====== 상세 내용 영역 ====== */}
        <div className="bg-white rounded-3xl p-6 md:p-10 border border-rose-100 shadow-sm mb-10">
          <h2 className="text-2xl font-black text-slate-800 mb-6 flex items-center gap-2">
            <span>✨</span> {flower.name} 특징 및 즐기기
          </h2>
          
          <div className="prose prose-pink max-w-none">
            <p className="text-slate-600 leading-loose text-lg">
              {flower.name}은(는) 주로 <strong>{flower.monthRange[0]}월부터 {flower.monthRange[1]}월까지</strong> 만날 수 있는 대표적인 봄꽃입니다. 
              가장 아름다운 모습을 볼 수 있는 절정 시기는 <strong>{flower.bloomPeak}부터 {flower.bloomEnd}</strong> 사이이며, 
              이 시기에는 전국 각지의 명소에서 축제가 열리기도 합니다.
            </p>
            
            <div className="my-8 p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
                <span>💡</span> {flower.name} 여행 꿀팁
              </h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 mt-1">•</span>
                  <span>개화 현황은 날씨와 지역에 따라 매년 조금씩 달라지므로, 방문 전 <strong>지도에서 실시간 개화 상태</strong>를 꼭 확인하세요.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 mt-1">•</span>
                  <span>대부분의 봄꽃 명소는 주말에 주차장이 혼잡합니다. 오전 9시 이전 방문을 추천합니다.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 명소 보러가기 CTA */}
          <div className="mt-10 text-center">
            <Link href="/map" className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-lg font-black rounded-full w-full sm:w-auto">
              <span>🗺️</span> {flower.name} 전국 명소 지도로 보기
            </Link>
          </div>
        </div>

        {/* ====== 쿠팡 배너 ====== */}
        <div className="mb-10">
          <FlowerCoupangBanner ids={[1, 4]} layout="grid" />
        </div>

        {/* ====== 하단 광고 ====== */}
        <div className="bg-white p-4 rounded-2xl border border-slate-100 mb-10">
          <AdBanner dataAdSlot="flower-detail-bottom" dataAdFormat="auto" style={{ minHeight: 90 }} />
        </div>
      </main>
      
      {/* ====== 푸터 ====== */}
      <footer className="bg-white border-t border-pink-100 px-4 py-8 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <p className="text-xs text-slate-300">© 2026 꽃맵 | flower.weknews.com</p>
        </div>
      </footer>
    </div>
  );
}
