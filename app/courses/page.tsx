import Link from "next/link";
import AdBanner from "@/components/AdBanner";
import FlowerCoupangBanner from "@/components/FlowerCoupangBanner";

export const metadata = {
  title: "전국 봄꽃 드라이브 코스 추천 | 꽃맵",
  description: "당일치기로 떠나기 좋은 전국 5대 봄꽃 드라이브 코스 추천! 벚꽃 터널, 해안도로 유채꽃 등 완벽한 봄 나들이 코스를 지도로 확인하세요.",
  keywords: "봄꽃 드라이브, 당일치기 드라이브, 벚꽃 드라이브 코스, 제주 유채꽃 도로, 섬진강 매화길, 하동 십리벚꽃길",
};

export default function CoursesPage() {
  const courses = [
    {
      id: "course-1",
      title: "하동 십리벚꽃길 & 섬진강 매화 드라이브",
      region: "경남/전남",
      season: "3월 중순 ~ 4월 초",
      tags: ["벚꽃", "매화", "강변도로", "커플추천"],
      description: "화개장터에서 쌍계사로 이어지는 환상적인 벚꽃 터널과 섬진강을 따라 달리는 드라이브 명소입니다.",
      spots: ["광양 매화마을", "화개장터", "쌍계사 십리벚꽃길"],
      emoji: "🌸",
      color: "bg-rose-50 border-rose-100",
    },
    {
      id: "course-2",
      title: "제주 남부 해안 유채꽃 드라이브",
      region: "제주도",
      season: "3월 초 ~ 4월 중순",
      tags: ["유채꽃", "바다", "해안도로", "사진명소"],
      description: "산방산의 유채꽃밭과 송악산 해안도로를 따라 노란 물결과 푸른 바다를 동시에 즐기는 완벽한 코스.",
      spots: ["산방산 유채꽃밭", "용머리해안", "송악산 둘레길"],
      emoji: "🌼",
      color: "bg-yellow-50 border-yellow-100",
    },
    {
      id: "course-3",
      title: "경주 보문단지 & 불국사 겹벚꽃 코스",
      region: "경북 경주",
      season: "4월 초 ~ 4월 하순",
      tags: ["왕벚꽃", "겹벚꽃", "역사유적", "가족여행"],
      description: "보문호수 둘레길의 벚꽃 야경부터 불국사의 탐스러운 겹벚꽃까지 경주의 봄을 만끽하는 코스입니다.",
      spots: ["대릉원", "보문호수", "불국사"],
      emoji: "🌺",
      color: "bg-fuchsia-50 border-fuchsia-100",
    },
    {
      id: "course-4",
      title: "충주호 벚꽃 & 단양 도담삼봉 코스",
      region: "충북",
      season: "4월 중순",
      tags: ["늦벚꽃", "호수", "드라이브", "힐링"],
      description: "내륙의 바다 충주호의 눈부신 벚꽃길을 달리고 단양팔경까지 이어지는 중부권 최고의 드라이브 코스.",
      spots: ["충주호 벚꽃길", "단양 만천하스카이워크", "도담삼봉"],
      emoji: "🌸",
      color: "bg-blue-50 border-blue-100",
    },
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
      <header className="px-4 py-12 md:py-16 text-center bg-white border-b border-rose-100 section-yellow">
        <div className="flower-badge mb-4" style={{background:"#FFFBEB",color:"#92400E",borderColor:"#FDE68A"}}>🚗 DRIVE COURSES</div>
        <h1 className="text-3xl md:text-5xl font-black text-slate-800 mb-4">
          전국 봄꽃 드라이브 코스
        </h1>
        <p className="text-slate-600 font-medium md:text-lg max-w-2xl mx-auto">
          창문만 열어도 흩날리는 꽃잎! 당일치기로 떠나기 좋은 전국 최고의 봄꽃 드라이브 코스 4곳을 엄선했습니다.
        </p>
      </header>

      {/* ====== 상단 광고 ====== */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="ad-slot bg-white shadow-sm border border-slate-200 rounded-2xl flex items-center justify-center">
          <AdBanner dataAdSlot="courses-top" dataAdFormat="auto" style={{ minHeight: 90, width: "100%" }} />
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md hover:border-rose-300 transition-all group flex flex-col h-full">
              <div className={`h-32 ${course.color} relative p-6 flex flex-col justify-end`}>
                <div className="absolute top-4 right-4 text-5xl opacity-80 group-hover:scale-110 transition-transform">
                  {course.emoji}
                </div>
                <div className="flex gap-2">
                  <span className="bg-white/80 backdrop-blur-sm text-slate-700 font-black text-xs px-2.5 py-1 rounded-md shadow-sm">
                    {course.region}
                  </span>
                  <span className="bg-white/80 backdrop-blur-sm text-slate-700 font-bold text-xs px-2.5 py-1 rounded-md shadow-sm">
                    {course.season}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h2 className="text-xl font-black text-slate-800 mb-3 leading-snug">
                  {course.title}
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                  {course.description}
                </p>
                
                <div className="space-y-3 mb-6 bg-slate-50 p-4 rounded-2xl">
                  <p className="text-xs font-bold text-slate-400 mb-2">경유지 코스</p>
                  {course.spots.map((spot, idx) => (
                    <div key={spot} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[10px] font-black text-slate-500 shrink-0 shadow-sm">
                        {idx + 1}
                      </div>
                      <span className="text-sm font-bold text-slate-700">{spot}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {course.tags.map(tag => (
                    <span key={tag} className="text-[11px] font-bold text-slate-500 bg-white border border-slate-200 px-2.5 py-1 rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>

                <Link href="/map" className="w-full text-center py-3 bg-white border-2 border-rose-100 text-rose-500 font-black rounded-xl hover:bg-rose-50 transition-colors mt-auto">
                  지도로 코스 확인하기 →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* ====== 인피드 광고 ====== */}
        <div className="my-8">
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
            <AdBanner dataAdSlot="courses-infeed" dataAdFormat="fluid" style={{ minHeight: 120 }} />
          </div>
        </div>

        {/* ====== 하단 쿠팡 배너 ====== */}
        <div className="mb-8">
          <FlowerCoupangBanner ids={[1, 2]} layout="grid" />
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
