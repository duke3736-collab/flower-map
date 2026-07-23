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
    <div className="min-h-screen bg-rose-50/30 overflow-x-hidden w-full">
      {/* ====== 내비게이션 ====== */}
      <nav className="nav-bar sticky top-0 z-50 px-4 md:px-8">
        <div className="max-w-6xl mx-auto h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🌸</span>
            <span className="text-xl font-black text-rose-500 tracking-tight">꽃맵</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/map" className="btn-primary inline-flex items-center gap-1.5 px-5 py-2.5 text-sm">
              <span>🗺️</span> 지도 보기
            </Link>
          </div>
        </div>
      </nav>

      {/* ====== 헤더 ====== */}
      <header className="px-4 pt-10 pb-8 text-center bg-white border-b border-rose-100">
        <div className="flower-badge mb-3">🌸 18 SPRING FLOWERS</div>
        <h1 className="text-3xl md:text-4xl font-black text-slate-800 mb-4">
          봄꽃 종류 알아보기
        </h1>
        <p className="text-slate-500 font-medium">
          매화부터 수국까지, 봄을 알리는 18가지 꽃들을 만나보세요.
        </p>
      </header>

      {/* ====== 메인 콘텐츠 ====== */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {FLOWERS.map((flower, i) => (
            <div key={flower.id}>
              <Link href={`/flowers/${flower.id}`} className="flower-card block p-6 h-full flex flex-col group">
                <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300 transform origin-left inline-block">
                  {flower.emoji}
                </div>
                <h2 className="text-xl font-black text-slate-800 mb-2">{flower.name}</h2>
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <span className="bg-rose-50 text-rose-500 text-xs font-bold px-2 py-0.5 rounded border border-rose-100">
                    {flower.bloomStart} 개화
                  </span>
                  <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-0.5 rounded">
                    절정 {flower.bloomPeak}
                  </span>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed line-clamp-3 mb-4 flex-grow">
                  {flower.description}
                </p>
                <div className="mt-auto flex items-center justify-between text-sm font-bold text-rose-400 group-hover:text-rose-500 transition-colors">
                  <span>자세히 보기</span>
                  <span>→</span>
                </div>
              </Link>

              {/* 중간 광고 (매 8번째 항목 뒤에 추가) */}
              {(i + 1) % 8 === 0 && (
                <div className="col-span-full mt-6 mb-6">
                  <div className="ad-slot rounded-2xl flex items-center justify-center bg-white border border-rose-100">
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
