import Link from "next/link";
import AdBanner from "@/components/AdBanner";
import FlowerCoupangBanner from "@/components/FlowerCoupangBanner";
import { FLOWERS } from "@/lib/flowers";

export const metadata = {
  title: "2026 전국 봄꽃 월별 개화 캘린더 | 꽃맵",
  description: "2월부터 7월까지 한눈에 보는 2026 봄꽃 개화 달력. 매화, 벚꽃, 겹벚꽃, 수국 등 매월 피어나는 봄꽃 릴레이를 확인하고 여행 일정을 세워보세요.",
  keywords: "봄꽃 캘린더, 벚꽃 개화시기 달력, 월별 봄꽃, 2월 꽃, 3월 꽃, 4월 꽃, 5월 꽃, 6월 수국, 봄꽃 여행 일정",
};

export default function CalendarPage() {
  const months = [2, 3, 4, 5, 6, 7];

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
      <header className="px-4 py-12 md:py-16 text-center bg-white border-b border-rose-100 section-pink">
        <div className="flower-badge mb-4">📅 BLOOM CALENDAR</div>
        <h1 className="text-3xl md:text-5xl font-black text-slate-800 mb-4">
          2026 봄꽃 개화 캘린더
        </h1>
        <p className="text-slate-600 font-medium md:text-lg max-w-2xl mx-auto">
          2월부터 7월까지 이어지는 아름다운 봄꽃 릴레이. <br className="hidden md:block" />
          가장 여행하기 좋은 "절정" 시기를 기준으로 월별 일정을 정리했습니다.
        </p>
      </header>

      {/* ====== 상단 광고 ====== */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="ad-slot bg-white shadow-sm border border-rose-100 rounded-2xl flex items-center justify-center">
          <AdBanner dataAdSlot="calendar-top" dataAdFormat="auto" style={{ minHeight: 90, width: "100%" }} />
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-12">
          {months.map((month) => {
            // 해당 월에 절정(peak)을 맞이하는 꽃들
            const peakFlowers = FLOWERS.filter(f => f.monthRange[0] <= month && f.monthRange[1] >= month);
            
            if (peakFlowers.length === 0) return null;

            return (
              <section key={month} className="relative">
                {/* 월 표시 선 */}
                <div className="absolute left-[27px] top-12 bottom-0 w-1 bg-rose-100 -z-10 rounded-full hidden sm:block"></div>
                
                <div className="flex flex-col sm:flex-row gap-6">
                  {/* 월 마커 */}
                  <div className="shrink-0 flex sm:flex-col items-center sm:w-16 z-10">
                    <div className="w-14 h-14 rounded-2xl bg-rose-500 text-white flex flex-col items-center justify-center shadow-md">
                      <span className="text-xl font-black leading-none">{month}</span>
                      <span className="text-[10px] font-bold">월</span>
                    </div>
                    <div className="ml-4 sm:ml-0 sm:mt-4 font-black text-slate-400 text-sm">
                      {month === 3 ? "초봄" : month === 4 ? "완연한 봄" : month === 5 ? "늦봄" : month === 6 ? "초여름" : "이른 봄"}
                    </div>
                  </div>

                  {/* 해당 월의 꽃 카드들 */}
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {peakFlowers.map(flower => (
                      <Link href={`/flowers/${flower.id}`} key={flower.id} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md hover:border-rose-300 transition-all group flex items-start gap-4">
                        <div className="text-4xl group-hover:scale-110 transition-transform shrink-0">
                          {flower.emoji}
                        </div>
                        <div>
                          <h3 className="font-black text-slate-800 text-lg mb-1 group-hover:text-rose-500 transition-colors">
                            {flower.name}
                          </h3>
                          <p className="text-xs font-bold text-rose-500 mb-2">절정: {flower.bloomPeak} ~ {flower.bloomEnd}</p>
                          <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed">
                            {flower.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* ====== 중간 광고 ====== */}
        <div className="my-12">
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
            <AdBanner dataAdSlot="calendar-mid" dataAdFormat="fluid" style={{ minHeight: 120 }} />
          </div>
        </div>

        <div className="bg-rose-50 rounded-3xl p-8 border border-rose-100 text-center mb-8">
          <h2 className="text-xl font-black text-slate-800 mb-3">여행 날짜가 정해지셨나요?</h2>
          <p className="text-slate-600 mb-6">지도에서 해당 시기에 방문하기 좋은 추천 명소를 바로 찾아보세요!</p>
          <Link href="/map" className="btn-primary inline-flex px-8 py-3.5 rounded-full font-black text-lg shadow-md hover:shadow-lg transition-all">
            지도로 추천 명소 찾기
          </Link>
        </div>

        {/* ====== 하단 쿠팡 배너 ====== */}
        <div className="mb-8">
          <FlowerCoupangBanner ids={[1, 4]} layout="grid" />
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
