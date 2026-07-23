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

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const flower = FLOWERS.find((f) => f.id === id);
  if (!flower) return { title: "꽃 정보를 찾을 수 없습니다 | 꽃맵" };

  return {
    title: `${flower.name} 개화 시기 및 전국 명소 | 2026 꽃맵`,
    description: `${flower.name}의 2026년 개화 시기(${flower.bloomStart})와 전국 명소를 지도로 확인하세요. ${flower.description.slice(0, 80)}...`,
  };
}

export default async function FlowerDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const flower = FLOWERS.find((f) => f.id === id);
  
  if (!flower) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-rose-50/30 overflow-x-hidden w-full flex flex-col">
      {/* ====== 상단 통합 메뉴바 ====== */}
      <header className="w-full bg-white/95 backdrop-blur-md border-b-2 border-pink-100 px-4 h-14 flex items-center justify-between shrink-0 z-30 shadow-xs sticky top-0">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span className="text-2xl">🌸</span>
            <span className="text-xl font-black text-rose-500 tracking-tight">꽃맵</span>
          </Link>
          <span className="hidden sm:inline-block text-xs font-bold text-rose-400 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-100">
            {flower.name} 개화 백서
          </span>
        </div>

        {/* 패밀리 사이트 버튼들 */}
        <nav className="hidden lg:flex items-center gap-2 overflow-x-auto max-w-[55%] py-1 custom-scrollbar">
          <a href="https://tools.weknews.com" target="_blank" rel="noopener noreferrer" className="shrink-0 px-3 py-1 rounded-full text-xs font-bold bg-slate-50 hover:bg-rose-50 text-slate-700 hover:text-rose-500 border border-slate-200 hover:border-rose-200 transition-all shadow-2xs">💰 금융/세금 계산</a>
          <a href="https://map.weknews.com" target="_blank" rel="noopener noreferrer" className="shrink-0 px-3 py-1 rounded-full text-xs font-bold bg-slate-50 hover:bg-rose-50 text-slate-700 hover:text-rose-500 border border-slate-200 hover:border-rose-200 transition-all shadow-2xs">🏄‍♂️ 피서지 지도</a>
          <a href="https://drive.weknews.com" target="_blank" rel="noopener noreferrer" className="shrink-0 px-3 py-1 rounded-full text-xs font-bold bg-slate-50 hover:bg-rose-50 text-slate-700 hover:text-rose-500 border border-slate-200 hover:border-rose-200 transition-all shadow-2xs">🚗 드라이브 코스</a>
          <a href="https://mystic.weknews.com" target="_blank" rel="noopener noreferrer" className="shrink-0 px-3 py-1 rounded-full text-xs font-bold bg-slate-50 hover:bg-rose-50 text-slate-700 hover:text-rose-500 border border-slate-200 hover:border-rose-200 transition-all shadow-2xs">🔮 AI 사주/타로</a>
          <a href="https://maple.weknews.com" target="_blank" rel="noopener noreferrer" className="shrink-0 px-3 py-1 rounded-full text-xs font-bold bg-slate-50 hover:bg-rose-50 text-slate-700 hover:text-rose-500 border border-slate-200 hover:border-rose-200 transition-all shadow-2xs">🍁 단풍 명소</a>
          <a href="https://download.weknews.com" target="_blank" rel="noopener noreferrer" className="shrink-0 px-3 py-1 rounded-full text-xs font-bold bg-slate-50 hover:bg-rose-50 text-slate-700 hover:text-rose-500 border border-slate-200 hover:border-rose-200 transition-all shadow-2xs">💻 필수 SW 다운</a>
          <a href="https://vacation.weknews.com" target="_blank" rel="noopener noreferrer" className="shrink-0 px-3 py-1 rounded-full text-xs font-bold bg-slate-50 hover:bg-rose-50 text-slate-700 hover:text-rose-500 border border-slate-200 hover:border-rose-200 transition-all shadow-2xs">🎒 방학 체험학습</a>
          <a href="https://doc.weknews.com" target="_blank" rel="noopener noreferrer" className="shrink-0 px-3 py-1 rounded-full text-xs font-bold bg-slate-50 hover:bg-rose-50 text-slate-700 hover:text-rose-500 border border-slate-200 hover:border-rose-200 transition-all shadow-2xs">📋 서식 자료실</a>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/flowers" className="text-xs font-bold text-slate-600 hover:text-rose-500 px-3 py-1.5 rounded-full hover:bg-rose-50 transition-colors">
            ← 목록으로
          </Link>
          <Link href="/map" className="btn-primary inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm">
            <span>🗺️</span> 지도 보기
          </Link>
        </div>
      </header>

      {/* ====== 상단 광고 ====== */}
      <div className="bg-white border-b border-rose-100">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <AdBanner dataAdSlot="flower-detail-top" dataAdFormat="auto" style={{ minHeight: 60 }} />
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 py-10 flex-1">
        {/* ====== 히어로 영역 ====== */}
        <div className="spring-card p-8 md:p-12 text-center mb-8 relative overflow-hidden section-pink rounded-3xl border-2 border-pink-100 shadow-md">
          <div className="absolute top-0 right-0 p-8 text-9xl opacity-10 pointer-events-none transform rotate-12">
            {flower.emoji}
          </div>
          <div className="absolute bottom-0 left-0 p-6 text-7xl opacity-10 pointer-events-none transform -rotate-12">
            {flower.emoji}
          </div>
          
          <div className="relative z-10">
            <div className="text-6xl md:text-8xl mb-4 inline-block animate-bounce">{flower.emoji}</div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-3 tracking-tight">
              {flower.name}
            </h1>

            {/* 꽃말 뱃지 */}
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full border border-pink-200 shadow-sm mb-6">
              <span className="text-base">💐</span>
              <span className="text-sm font-black text-rose-600">꽃말: {flower.flowerLanguage}</span>
            </div>

            <p className="text-lg md:text-xl text-slate-700 font-bold max-w-2xl mx-auto leading-relaxed">
              {flower.description}
            </p>
          </div>
        </div>

        {/* ====== 핵심 가이드 카드 3종 ====== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-6 rounded-3xl border-2 border-rose-100 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-500 text-xl font-bold mb-3">
                📅
              </div>
              <p className="text-xs font-black text-slate-400 uppercase mb-1">개화 & 절정 시기</p>
              <p className="text-base font-black text-slate-900">{flower.bloomStart} 개화</p>
              <p className="text-xs font-bold text-rose-500 mt-1">절정: {flower.bloomPeak} ~ {flower.bloomEnd}</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border-2 border-amber-100 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-500 text-xl font-bold mb-3">
                📸
              </div>
              <p className="text-xs font-black text-slate-400 uppercase mb-1">인생샷 구도 팁</p>
              <p className="text-xs text-slate-700 font-bold leading-relaxed">{flower.photoTip}</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border-2 border-sky-100 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-sky-50 flex items-center justify-center text-sky-500 text-xl font-bold mb-3">
                ⏰
              </div>
              <p className="text-xs font-black text-slate-400 uppercase mb-1">추천 관람 시간대</p>
              <p className="text-xs text-slate-700 font-bold leading-relaxed">{flower.bestTime}</p>
            </div>
          </div>
        </div>

        {/* ====== 중간 광고 ====== */}
        <div className="my-8">
          <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xs">
            <AdBanner dataAdSlot="flower-detail-mid" dataAdFormat="auto" style={{ minHeight: 90 }} />
          </div>
        </div>

        {/* ====== 상세 설명 & 대표 명소 ====== */}
        <div className="bg-white rounded-3xl p-6 md:p-10 border-2 border-rose-100 shadow-sm mb-10 space-y-8">
          <div>
            <h2 className="text-2xl font-black text-slate-900 mb-4 flex items-center gap-2">
              <span>✨</span> {flower.name} 감성 포인트
            </h2>
            <div className="flex gap-2 flex-wrap mb-6">
              {flower.features.map((feature, idx) => (
                <span key={idx} className="bg-rose-50 text-rose-700 text-xs font-black px-3 py-1.5 rounded-full border border-rose-200">
                  #{feature}
                </span>
              ))}
            </div>
          </div>

          {/* 대표 명소 박스 */}
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
            <h3 className="text-lg font-black text-slate-900 mb-4 flex items-center gap-2">
              <span>📍</span> {flower.name} 전국 3대 명소
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {flower.topSpots.map((spot, idx) => (
                <div key={idx} className="bg-white p-3.5 rounded-xl border border-slate-200 flex items-center gap-2">
                  <span className="text-rose-500 text-base">🌸</span>
                  <span className="text-sm font-black text-slate-800">{spot}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 명소 보러가기 CTA */}
          <div className="pt-4 text-center">
            <Link href="/map" className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-black rounded-full w-full sm:w-auto shadow-lg hover:scale-105 transition-transform">
              <span>🗺️</span> {flower.name} 전국 명소 위치 지도로 한눈에 보기
            </Link>
          </div>
        </div>

        {/* ====== 쿠팡 배너 ====== */}
        <div className="mb-10">
          <FlowerCoupangBanner ids={[1, 4]} layout="grid" />
        </div>

        {/* ====== 하단 광고 ====== */}
        <div className="bg-white p-4 rounded-2xl border border-slate-100 mb-10 shadow-xs">
          <AdBanner dataAdSlot="flower-detail-bottom" dataAdFormat="auto" style={{ minHeight: 90 }} />
        </div>
      </main>
      
      {/* ====== 푸터 ====== */}
      <footer className="bg-white border-t border-pink-100 px-4 py-8 text-center mt-auto">
        <div className="max-w-4xl mx-auto space-y-3">
          <p className="text-xs text-slate-400 font-bold">© 2026 꽃맵 | flower.weknews.com</p>
        </div>
      </footer>
    </div>
  );
}
