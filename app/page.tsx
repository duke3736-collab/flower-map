import Link from "next/link";
import AdBanner from "@/components/AdBanner";
import FlowerCoupangBanner from "@/components/FlowerCoupangBanner";
import { FLOWERS } from "@/lib/flowers";
import PetalRain from "@/components/PetalRain";

export default function HomePage() {
  const currentMonth = new Date().getMonth() + 1;

  // 현재 달에 피는 꽃 우선, 없으면 다음달, 없으면 전체 8종
  const seasonal = FLOWERS.filter(f => f.monthRange[0] <= currentMonth && f.monthRange[1] >= currentMonth);
  const nextMonthSeasonal = FLOWERS.filter(f => f.monthRange[0] <= currentMonth + 1 && f.monthRange[1] >= currentMonth + 1);
  const featuredFlowers = seasonal.length > 0 ? seasonal : nextMonthSeasonal.length > 0 ? nextMonthSeasonal : FLOWERS.slice(0, 8);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden w-full">
      <PetalRain />

      {/* ====== 내비게이션 ====== */}
      <nav className="nav-bar sticky top-0 z-50 px-4 md:px-8">
        <div className="max-w-6xl mx-auto h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🌸</span>
            <span className="text-xl font-black text-rose-500 tracking-tight">꽃맵</span>
            <span className="hidden sm:inline text-xs font-bold text-pink-400 bg-pink-50 px-2 py-0.5 rounded-full border border-pink-100">2026 봄</span>
          </Link>
          <div className="flex items-center gap-2 md:gap-3">
            <Link href="/flowers" className="hidden md:flex items-center gap-1 text-sm font-bold text-slate-600 hover:text-pink-500 transition-colors px-3 py-2 rounded-full hover:bg-pink-50">
              <span className="text-base">🌸</span> 봄꽃 종류
            </Link>
            <Link href="/calendar" className="hidden md:flex items-center gap-1 text-sm font-bold text-slate-600 hover:text-pink-500 transition-colors px-3 py-2 rounded-full hover:bg-pink-50">
              <span className="text-base">📅</span> 개화 캘린더
            </Link>
            <Link href="/guide" className="hidden md:flex items-center gap-1 text-sm font-bold text-slate-600 hover:text-pink-500 transition-colors px-3 py-2 rounded-full hover:bg-pink-50">
              <span className="text-base">💡</span> 꽃구경 가이드
            </Link>
            <Link href="/map" className="btn-primary inline-flex items-center gap-1.5 px-5 py-2.5 text-sm">
              <span>🗺️</span> 지도 보기
            </Link>
          </div>
        </div>
      </nav>

      {/* ====== HERO ====== */}
      <section className="hero-bg relative px-4 pt-16 pb-20 md:pt-24 md:pb-28 text-center overflow-hidden">
        {/* 배경 꽃 장식 */}
        <div className="absolute top-10 left-6 text-5xl md:text-7xl opacity-20 animate-float pointer-events-none" style={{animationDelay:"0s"}}>🌸</div>
        <div className="absolute top-20 right-8 text-4xl md:text-6xl opacity-15 animate-float pointer-events-none" style={{animationDelay:"1s"}}>🌺</div>
        <div className="absolute bottom-10 left-12 text-3xl md:text-5xl opacity-20 animate-float pointer-events-none" style={{animationDelay:"2s"}}>🌼</div>
        <div className="absolute bottom-16 right-10 text-4xl md:text-6xl opacity-15 animate-float pointer-events-none" style={{animationDelay:"0.5s"}}>🌷</div>
        <div className="absolute top-1/2 left-4 text-2xl opacity-10 animate-float pointer-events-none" style={{animationDelay:"1.5s"}}>💐</div>

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* 뱃지 */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-pink-200 rounded-full px-5 py-2 text-sm font-bold text-rose-500 shadow-sm mb-6">
            <span className="animate-pulse">🌸</span>
            2026 전국 봄꽃 개화 시기 안내
            <span className="animate-pulse">🌸</span>
          </div>

          {/* 헤드라인 */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.15] mb-6">
            <span className="text-spring">봄꽃 명소</span>
            <br />
            <span className="text-slate-800">지도로 한눈에 🗺️</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-10 font-medium">
            <strong className="text-rose-400">18종 봄꽃</strong>의 개화 시기부터 전국 명소·드라이브 코스까지<br className="hidden md:block"/>
            매화(2월)에서 수국(6월)까지, 봄꽃 여행의 모든 것
          </p>

          {/* CTA 버튼 */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/map" className="btn-primary inline-flex items-center justify-center gap-2 px-10 py-4 text-lg font-black rounded-full">
              <span className="text-2xl">🗺️</span>
              봄꽃 지도 보기
            </Link>
            <Link href="/flowers" className="btn-secondary inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold rounded-full">
              <span className="text-xl">🌸</span>
              꽃 종류 알아보기
            </Link>
          </div>

          {/* 통계 */}
          <div className="flex flex-wrap justify-center gap-6 mt-12 pt-8 border-t border-pink-100">
            {[
              { num: "18종", label: "봄꽃 종류", emoji: "🌸" },
              { num: "30+", label: "전국 명소", emoji: "📍" },
              { num: "2~7월", label: "시즌 안내", emoji: "📅" },
              { num: "무료", label: "이용 가능", emoji: "💝" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-lg mb-0.5">{s.emoji}</div>
                <div className="text-2xl font-black text-rose-500">{s.num}</div>
                <div className="text-xs text-slate-400 font-bold">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 상단 광고 (빈 공간 문제로 임시 주석 처리) ====== 
      <div className="bg-rose-50 border-y border-rose-100">
        <div className="max-w-5xl mx-auto px-4 py-3">
          <AdBanner dataAdSlot="flower-landing-top" dataAdFormat="auto" style={{ minHeight: 60, width: "100%" }} />
        </div>
      </div>
      */}

      {/* ====== 이달의 봄꽃 ====== */}
      <section className="px-4 py-14 section-pink">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="flower-badge mb-3">🌸 FLOWER GUIDE</div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-2">
              <span className="text-sakura">{currentMonth}월</span> 피는 봄꽃
            </h2>
            <p className="text-slate-500 font-medium">이번 달 가장 아름다운 봄꽃을 만나보세요</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {featuredFlowers.map((flower, i) => (
              <Link
                key={flower.id}
                href={`/flowers/${flower.id}`}
                className="flower-card p-5 text-center group block"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300 inline-block">{flower.emoji}</div>
                <h3 className="font-black text-slate-800 text-base mb-1">{flower.name}</h3>
                <p className="text-xs text-rose-400 font-bold mb-2">{flower.bloomStart}</p>
                <div className="text-[11px] text-slate-400 leading-relaxed line-clamp-2">{flower.description.slice(0, 40)}...</div>
                <div className="mt-3 pt-3 border-t border-pink-50">
                  <span className="text-[11px] font-bold text-pink-400">자세히 보기 →</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/flowers" className="btn-secondary inline-flex items-center gap-2 px-8 py-3 text-sm font-bold">
              18종 봄꽃 전체 보기 →
            </Link>
          </div>
        </div>
      </section>

      {/* ====== 개화 타임라인 ====== */}
      <section className="px-4 py-14 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="flower-badge mb-3">📅 BLOOM CALENDAR</div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-800">봄꽃 개화 타임라인</h2>
            <p className="text-slate-500 mt-2 font-medium">2월부터 7월까지 이어지는 봄꽃 릴레이</p>
          </div>

          <div className="spring-card p-6 md:p-8 space-y-4">
            {[
              { month: 2, flowers: ["매화"], color: "bg-pink-100 text-pink-700" },
              { month: 3, flowers: ["산수유", "목련", "유채꽃", "진달래", "개나리"], color: "bg-yellow-100 text-yellow-700" },
              { month: 4, flowers: ["벚꽃", "복사꽃", "겹벚꽃", "라일락", "왕벚꽃", "튤립"], color: "bg-rose-100 text-rose-700" },
              { month: 5, flowers: ["철쭉", "작약", "조팝나무", "붓꽃"], color: "bg-purple-100 text-purple-700" },
              { month: 6, flowers: ["수국", "장미"], color: "bg-blue-100 text-blue-700" },
            ].map(({ month, flowers, color }) => (
              <div key={month} className={`flex flex-col sm:flex-row gap-3 sm:items-center rounded-2xl p-4 ${month === currentMonth ? "ring-2 ring-rose-300 bg-rose-50" : "bg-slate-50"}`}>
                <div className={`shrink-0 w-14 h-14 rounded-2xl flex flex-col items-center justify-center font-black ${month === currentMonth ? "bg-rose-500 text-white shadow-lg" : color}`}>
                  <span className="text-lg font-black">{month}</span>
                  <span className="text-[10px] font-bold">월</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {flowers.map(name => {
                    const f = FLOWERS.find(fl => fl.name === name);
                    return (
                      <Link key={name} href={f ? `/flowers/${f.id}` : "/flowers"} className="inline-flex items-center gap-1 bg-white px-3 py-1.5 rounded-full text-sm font-bold text-slate-700 shadow-sm border border-slate-100 hover:border-rose-200 hover:text-rose-600 transition-colors">
                        {f?.emoji} {name}
                      </Link>
                    );
                  })}
                </div>
                {month === currentMonth && (
                  <span className="shrink-0 text-[11px] font-black text-rose-500 bg-rose-100 px-2 py-1 rounded-full sm:ml-auto">이번 달 🌸</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 중간 광고 ====== */}
      <div className="max-w-5xl mx-auto px-4 py-4">
        <div className="ad-slot ad-slot-tall rounded-2xl flex items-center justify-center">
          <AdBanner dataAdSlot="flower-landing-mid" dataAdFormat="auto" style={{ minHeight: 250, width: "100%" }} />
        </div>
      </div>

      {/* ====== 쿠팡 배너 1 ====== */}
      <section className="px-4 py-10 section-yellow">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <div className="flower-badge mb-2" style={{background:"#FFFBEB",color:"#92400E",borderColor:"#FDE68A"}}>🛍️ SHOPPING</div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-800">봄 나들이 준비물 특가</h2>
          </div>
          <FlowerCoupangBanner ids={[1, 3]} layout="grid" />
        </div>
      </section>

      {/* ====== 인기 명소 TOP ====== */}
      <section className="px-4 py-14 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="flower-badge mb-3">📍 TOP SPOTS</div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-800">전국 인기 봄꽃 명소</h2>
            <p className="text-slate-500 mt-2 font-medium">검색량이 가장 높은 봄꽃 여행지 TOP 6</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {[
              { 
                name: "진해 군항제", 
                emoji: "🌸", 
                region: "경남 창원", 
                desc: "300만 그루 벚꽃의 성지. 여좌천 로망스 다리가 필수 코스.", 
                badge: "전국 최대", 
                month: "3월 말 ~ 4월 초",
                imageUrl: "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800&auto=format&fit=crop&q=80"
              },
              { 
                name: "광양 매화마을", 
                emoji: "🤍", 
                region: "전남 광양", 
                desc: "섬진강변 따라 펼쳐지는 하얀 매화 군락지의 장관.", 
                badge: "2~3월", 
                month: "2월 하순 ~ 3월 초",
                imageUrl: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=800&auto=format&fit=crop&q=80"
              },
              { 
                name: "황매산 철쭉제", 
                emoji: "🌺", 
                region: "경남 합천", 
                desc: "산 전체를 진분홍빛으로 물들이는 전국 최대 철쭉 군락.", 
                badge: "5월 절정", 
                month: "5월 초 ~ 중순",
                imageUrl: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=800&auto=format&fit=crop&q=80"
              },
              { 
                name: "고양 꽃박람회", 
                emoji: "🌷", 
                region: "경기 고양", 
                desc: "연 200만 명 방문하는 전국 최대 봄꽃 박람회.", 
                badge: "4~5월", 
                month: "4월 하순 ~ 5월 초",
                imageUrl: "https://images.unsplash.com/photo-1520763185298-1b434c919102?w=800&auto=format&fit=crop&q=80"
              },
              { 
                name: "구례 산수유마을", 
                emoji: "🌼", 
                region: "전남 구례", 
                desc: "온 마을이 노란빛으로 물드는 600년 전통의 산수유 마을.", 
                badge: "3월 절정", 
                month: "3월 초 ~ 하순",
                imageUrl: "https://images.unsplash.com/photo-1508672019048-805479767385?w=800&auto=format&fit=crop&q=80"
              },
              { 
                name: "경주 불국사 겹벚꽃", 
                emoji: "🌸", 
                region: "경북 경주", 
                desc: "'분홍 팝콘' 겹벚꽃이 유네스코 세계유산과 어우러지는 명소.", 
                badge: "4월 하순", 
                month: "4월 중순 ~ 5월 초",
                imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&auto=format&fit=crop&q=80"
              },
            ].map((spot, i) => (
              <Link key={i} href="/map" className="spring-card overflow-hidden block group bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-rose-300 transition-all">
                <div className="h-44 relative overflow-hidden flex items-end p-4">
                  <img
                    src={spot.imageUrl}
                    alt={spot.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-transparent"></div>
                  <span className="relative z-10 text-[11px] font-black px-3 py-1 rounded-full bg-rose-500 text-white shadow-md">
                    {spot.badge}
                  </span>
                  <span className="relative z-10 ml-auto text-2xl drop-shadow-md group-hover:scale-125 transition-transform duration-300">
                    {spot.emoji}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-black text-slate-800 text-base group-hover:text-rose-500 transition-colors">{spot.name}</h3>
                    <span className="text-[11px] text-pink-500 font-black whitespace-nowrap bg-rose-50 px-2 py-0.5 rounded-full">{spot.month}</span>
                  </div>
                  <p className="text-xs text-slate-400 font-bold mb-2">📍 {spot.region}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{spot.desc}</p>
                  <div className="mt-4 flex items-center gap-1 text-rose-500 text-sm font-black group-hover:gap-2 transition-all">
                    <span>지도에서 보기</span>
                    <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/map" className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-base font-black">
              🗺️ 전체 명소 지도로 보기
            </Link>
          </div>
        </div>
      </section>

      {/* ====== 쿠팡 배너 2 ====== */}
      <section className="px-4 py-10 section-green">
        <div className="max-w-5xl mx-auto">
          <FlowerCoupangBanner ids={[2, 4]} layout="grid" />
        </div>
      </section>

      {/* ====== 꽃맵 기능 소개 ====== */}
      <section className="px-4 py-14 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="flower-badge mb-3">✨ FEATURES</div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-800">꽃맵이 특별한 이유</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { emoji: "🗺️", title: "실시간 개화 지도", desc: "카카오맵 기반 지도에서 전국 명소의 현재 개화 상태를 핀으로 확인하세요.", bg: "section-pink" },
              { emoji: "🌸", title: "18종 봄꽃 정보", desc: "매화부터 수국까지 18종의 개화 시기, 특징, 대표 명소를 상세히 안내합니다.", bg: "section-blue" },
              { emoji: "🚗", title: "드라이브 코스 추천", desc: "꽃 명소 → 감성 카페 → 맛집을 잇는 당일치기 봄꽃 드라이브 코스.", bg: "section-yellow" },
              { emoji: "📅", title: "월별 개화 캘린더", desc: "2~7월 봄꽃 릴레이 캘린더로 놓치는 봄꽃 없이 여행 계획을 세우세요.", bg: "section-green" },
              { emoji: "🅿️", title: "실전 방문 꿀팁", desc: "주차 정보, 혼잡 회피 팁, 사진 명소 등 실제 방문에 꼭 필요한 정보 제공.", bg: "section-purple" },
              { emoji: "🎪", title: "전국 축제 정보", desc: "진해 군항제, 황매산 철쭉제 등 전국 봄꽃 축제 일정을 한눈에 확인.", bg: "section-pink" },
            ].map((f, i) => (
              <div key={i} className={`spring-card p-6 ${f.bg}`}>
                <div className="text-3xl mb-4">{f.emoji}</div>
                <h3 className="font-black text-slate-800 text-base mb-2">{f.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 하단 광고 ====== */}
      <div className="max-w-5xl mx-auto px-4 py-4">
        <div className="ad-slot rounded-2xl flex items-center justify-center">
          <AdBanner dataAdSlot="flower-landing-bottom" dataAdFormat="auto" style={{ minHeight: 90, width: "100%" }} />
        </div>
      </div>

      {/* ====== 패밀리 사이트 ====== */}
      <section className="px-4 py-12 section-pink">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-xl font-black text-slate-600 mb-6">🌍 더 많은 테마 지도를 만나보세요</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { href: "https://maple.weknews.com", emoji: "🍁", name: "단풍 맵", desc: "가을 단풍 명소" },
              { href: "https://map.weknews.com", emoji: "🌊", name: "씨 맵", desc: "해수욕장·수영장" },
              { href: "https://drive.weknews.com", emoji: "🚗", name: "드라이브 맵", desc: "드라이브 코스" },
              { href: "https://download.weknews.com", emoji: "💻", name: "소프트웨어 금고", desc: "유용한 SW 추천" },
            ].map(site => (
              <a key={site.href} href={site.href} target="_blank" rel="noopener noreferrer"
                className="spring-card bg-white p-4 text-center hover:-translate-y-2 transition-all">
                <div className="text-3xl mb-2">{site.emoji}</div>
                <p className="font-black text-slate-700 text-sm">{site.name}</p>
                <p className="text-xs text-slate-400 mt-0.5">{site.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 푸터 ====== */}
      <footer className="bg-white border-t border-pink-100 px-4 py-8 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-xl">🌸</span>
            <span className="font-black text-rose-500">꽃맵</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400 font-medium">
            <Link href="/map" className="hover:text-rose-400 transition-colors">봄꽃 지도</Link>
            <Link href="/flowers" className="hover:text-rose-400 transition-colors">꽃 종류</Link>
            <Link href="/calendar" className="hover:text-rose-400 transition-colors">개화 캘린더</Link>
            <Link href="/guide" className="hover:text-rose-400 transition-colors">꽃구경 가이드</Link>
            <Link href="/courses" className="hover:text-rose-400 transition-colors">드라이브 코스</Link>
          </div>
          <p className="text-xs text-slate-300">© 2026 꽃맵 | flower.weknews.com</p>
        </div>
      </footer>
    </div>
  );
}
