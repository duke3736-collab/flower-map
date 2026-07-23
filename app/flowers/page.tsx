import Link from "next/link";
import AdBanner from "@/components/AdBanner";
import FlowerCoupangBanner from "@/components/FlowerCoupangBanner";
import { FLOWERS } from "@/lib/flowers";

export const metadata = {
  title: "전국 봄꽃 종류 18종 안내 | 꽃맵",
  description: "매화, 벚꽃, 유채꽃부터 수국까지! 2월부터 7월까지 피어나는 18종의 봄꽃 개화 시기와 특징을 한눈에 확인하세요.",
};

export default function FlowersPage() {
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
            봄꽃 18종 사전
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
          <Link href="/map" className="btn-primary inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm">
            <span>🗺️</span> 지도 보기
          </Link>
        </div>
      </header>

      {/* ====== 히어로 타이틀 ====== */}
      <header className="px-4 pt-12 pb-10 text-center bg-white border-b border-rose-100">
        <div className="flower-badge mb-3">🌸 18 SPRING FLOWERS ENCYCLOPEDIA</div>
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
          봄꽃 종류 완벽 가이드 💐
        </h1>
        <p className="text-slate-600 font-bold max-w-2xl mx-auto text-base leading-relaxed">
          매화부터 장미까지, 2월에서 6월까지 대한민국을 화사하게 물들이는 18가지 대표 봄꽃의 꽃말과 특징, 인생샷 명소를 확인해 보세요.
        </p>
      </header>

      {/* ====== 메인 콘텐츠 ====== */}
      <main className="max-w-6xl mx-auto px-4 py-10 flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {FLOWERS.map((flower, i) => (
            <div key={flower.id} className="flex flex-col">
              <Link href={`/flowers/${flower.id}`} className="flower-card block p-6 h-full flex flex-col group bg-white rounded-3xl border-2 border-pink-100 hover:border-rose-300 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-5xl group-hover:scale-125 transition-transform duration-300 transform origin-left inline-block">
                    {flower.emoji}
                  </span>
                  <span className="text-xs font-black bg-rose-50 text-rose-600 px-3 py-1 rounded-full border border-rose-200">
                    {flower.bloomStart} ~ {flower.bloomEnd}
                  </span>
                </div>

                <h2 className="text-2xl font-black text-slate-900 mb-1 group-hover:text-rose-500 transition-colors">{flower.name}</h2>
                <p className="text-xs font-bold text-rose-500 mb-3 flex items-center gap-1">
                  <span>💐</span> 꽃말: {flower.flowerLanguage}
                </p>

                <p className="text-xs text-slate-600 font-medium leading-relaxed line-clamp-3 mb-4 flex-grow">
                  {flower.description}
                </p>

                {/* 대표 명소 태그 릴레이 */}
                <div className="flex gap-1 flex-wrap mb-4">
                  {flower.topSpots.slice(0, 2).map((spot, idx) => (
                    <span key={idx} className="text-[10px] bg-slate-100 text-slate-700 font-extrabold px-2 py-0.5 rounded-full border border-slate-200">
                      📍 {spot}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-3 border-t border-pink-50 flex items-center justify-between text-xs font-black text-rose-500 group-hover:text-rose-600 transition-colors">
                  <span>꽃말 & 명소 상세 보기</span>
                  <span className="text-base group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>

              {/* 중간 광고 */}
              {(i + 1) % 8 === 0 && (
                <div className="col-span-full mt-6 mb-6">
                  <div className="ad-slot rounded-2xl flex items-center justify-center bg-white border border-rose-100 p-2 shadow-xs">
                    <AdBanner dataAdSlot="flower-list-infeed" dataAdFormat="fluid" style={{ width: "100%" }} />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      {/* ====== 하단 쿠팡 배너 ====== */}
      <section className="px-4 py-10 bg-white border-t border-rose-100">
        <div className="max-w-5xl mx-auto">
          <FlowerCoupangBanner ids={[1, 3]} layout="grid" />
        </div>
      </section>
      
      {/* ====== 푸터 ====== */}
      <footer className="bg-white border-t border-pink-100 px-4 py-8 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <p className="text-xs text-slate-300">© 2026 꽃맵 | flower.weknews.com</p>
        </div>
      </footer>
    </div>
  );
}
