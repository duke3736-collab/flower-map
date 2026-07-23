"use client";

import { useState, useRef, useEffect } from "react";
import Script from "next/script";
import Link from "next/link";
import AdBanner from "@/components/AdBanner";
import { FLOWERS } from "@/lib/flowers";
import { SPOTS, type Spot, REGIONS } from "@/lib/spots";

declare global { interface Window { kakao: any; } }

const KAKAO_APP_KEY = process.env.NEXT_PUBLIC_KAKAO_APP_KEY || "11032eefd7d0111cb94d93c0ab41eb01";

const STATUS_LABEL: Record<string, string> = {
  "없음": "미개화", "꽃봉오리": "🌱 봉오리", "개화시작": "🌸 개화 시작",
  "만개": "🌸 만개", "절정": "🌺 절정!", "낙화": "🍃 낙화",
};
const STATUS_CLASS: Record<string, string> = {
  "없음": "status-none", "꽃봉오리": "status-bud",
  "개화시작": "status-start", "만개": "status-bloom",
  "절정": "status-peak", "낙화": "status-fall",
};

export default function FlowerMapClient() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);

  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapLoadError, setMapLoadError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState<"list" | "map">("list");
  const [selectedFlowerId, setSelectedFlowerId] = useState<string>("all");
  const [selectedRegion, setSelectedRegion] = useState<string>("all");
  const [selectedSpot, setSelectedSpot] = useState<Spot | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(true);

  const filteredSpots = SPOTS.filter((spot) => {
    if (selectedFlowerId !== "all" && !spot.flowerIds.includes(selectedFlowerId)) return false;
    if (selectedRegion !== "all" && spot.region !== selectedRegion) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return spot.name.toLowerCase().includes(q) ||
        spot.address.toLowerCase().includes(q) ||
        spot.tags.some(t => t.includes(q));
    }
    return true;
  });

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const initMap = () => {
    if (!window.kakao?.maps || mapLoaded) return;
    window.kakao.maps.load(() => {
      if (!mapContainerRef.current) return;
      const map = new window.kakao.maps.Map(mapContainerRef.current, {
        center: new window.kakao.maps.LatLng(36.5, 127.8),
        level: 10,
      });
      mapRef.current = map;
      window.addEventListener("resize", () => mapRef.current?.relayout());
      setMapLoaded(true);
    });
  };

  useEffect(() => {
    if (mapLoaded) return;
    const timeout = setTimeout(() => { if (!mapLoaded) setMapLoadError(true); }, 6000);
    const interval = setInterval(() => {
      if (window.kakao?.maps) { clearInterval(interval); clearTimeout(timeout); initMap(); }
    }, 300);
    return () => { clearInterval(interval); clearTimeout(timeout); };
  }, [mapLoaded]);

  useEffect(() => {
    if (isMobile && activeTab === "map" && mapRef.current) {
      setTimeout(() => mapRef.current?.relayout(), 100);
    }
  }, [activeTab, isMobile]);

  // 마커 갱신
  useEffect(() => {
    if (!mapLoaded || !mapRef.current) return;
    markersRef.current.forEach(m => m.setMap(null));
    markersRef.current = [];

    filteredSpots.forEach((spot) => {
      const flower = FLOWERS.find(f => spot.flowerIds[0] === f.id);
      const emoji = flower?.emoji || "🌸";
      const isActive = spot.status !== "없음" && spot.status !== "낙화";
      const isSelected = selectedSpot?.id === spot.id;

      const content = document.createElement("div");
      content.innerHTML = `
        <div style="display:flex;flex-direction:column;align-items:center;cursor:pointer;transform:translateY(-10px);transition:all 0.2s">
          <div style="display:flex;align-items:center;gap:5px;padding:6px 14px;border-radius:50px;font-weight:900;font-size:13px;
            box-shadow:${isActive ? "0 4px 16px rgba(236,72,153,0.4)" : "0 2px 8px rgba(0,0,0,0.12)"};
            background:${isActive ? "linear-gradient(135deg,#EC4899,#F43F5E)" : "white"};
            color:${isActive ? "white" : "#64748b"};
            border:${isSelected ? "3px solid #7C3AED" : "none"};
            white-space:nowrap;margin-bottom:4px;font-family:'Noto Sans KR',sans-serif;">
            ${emoji} ${spot.name}
          </div>
          <div style="width:10px;height:10px;border-radius:50%;
            background:${isActive ? "#EC4899" : "#CBD5E1"};
            border:2px solid white;
            box-shadow:0 2px 6px rgba(0,0,0,0.15)"></div>
        </div>`;
      content.onclick = () => {
        setSelectedSpot(spot);
        if (isMobile) setActiveTab("list");
      };

      const overlay = new window.kakao.maps.CustomOverlay({
        position: new window.kakao.maps.LatLng(spot.lat, spot.lng),
        content,
        yAnchor: 1,
      });
      overlay.setMap(mapRef.current);
      markersRef.current.push(overlay);
    });
  }, [mapLoaded, filteredSpots, selectedSpot, isMobile]);

  useEffect(() => {
    if (selectedSpot && mapRef.current) {
      mapRef.current.panTo(new window.kakao.maps.LatLng(selectedSpot.lat, selectedSpot.lng));
      mapRef.current.setLevel(7);
      if (isMobile) setActiveTab("map");
    }
  }, [selectedSpot]);

  return (
    <>
      <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_APP_KEY}&autoload=false`}
        strategy="afterInteractive"
        onLoad={initMap}
      />

      {/* ====== 데스크탑 ====== */}
      <div className="hidden md:flex map-page-root">
        {/* 왼쪽 사이드 패널 */}
        <div className="w-[400px] shrink-0 flex flex-col h-full bg-white" style={{borderRight:"2px solid #FCE7F3", boxShadow:"4px 0 20px rgba(244,114,182,0.08)"}}>

          {/* 패널 헤더 */}
          <div className="px-5 py-4 shrink-0" style={{background:"linear-gradient(135deg, #FFF0F7, #FDF2F8)", borderBottom:"1.5px solid #FBCFE8"}}>
            <div className="flex items-center gap-2 mb-4">
              <Link href="/" className="flex items-center gap-1.5">
                <span className="text-xl">🌸</span>
                <span className="font-black text-rose-500 text-lg">꽃맵</span>
              </Link>
              <span className="ml-auto text-xs font-black text-rose-400 bg-rose-50 border border-rose-100 px-2 py-0.5 rounded-full">2026 봄</span>
            </div>

            {/* 검색바 */}
            <div className="relative mb-3">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-pink-300 material-symbols-outlined text-lg">search</span>
              <input
                type="text"
                placeholder="명소 이름, 지역 검색..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full bg-white border-2 border-pink-100 rounded-2xl pl-10 pr-4 py-2.5 text-sm text-slate-700 placeholder:text-slate-300 focus:outline-none focus:border-rose-300 transition-colors font-medium shadow-sm"
              />
            </div>

            {/* 지역 필터 */}
            <div className="flex gap-1.5 flex-wrap">
              <button onClick={() => setSelectedRegion("all")} className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${selectedRegion === "all" ? "bg-rose-500 text-white shadow-md" : "bg-white text-slate-500 border border-slate-200 hover:border-rose-200 hover:text-rose-400"}`}>전국</button>
              {REGIONS.map(r => (
                <button key={r} onClick={() => setSelectedRegion(r)} className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all ${selectedRegion === r ? "bg-rose-500 text-white shadow-md" : "bg-white text-slate-500 border border-slate-200 hover:border-rose-200 hover:text-rose-400"}`}>{r}</button>
              ))}
            </div>
          </div>

          {/* 꽃 종류 필터 */}
          <div className="px-4 py-3 shrink-0 bg-white" style={{borderBottom:"1.5px solid #FCE7F3"}}>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-2">🌸 꽃 종류 필터</p>
            <div className="flex gap-1.5 flex-wrap">
              <button onClick={() => setSelectedFlowerId("all")} className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${selectedFlowerId === "all" ? "bg-rose-100 text-rose-600 border border-rose-200" : "bg-slate-50 text-slate-500 border border-slate-200 hover:bg-rose-50 hover:text-rose-400"}`}>전체</button>
              {FLOWERS.map(f => (
                <button key={f.id} onClick={() => setSelectedFlowerId(f.id)} className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all ${selectedFlowerId === f.id ? "bg-rose-100 text-rose-600 border border-rose-200 shadow-sm" : "bg-slate-50 text-slate-500 border border-slate-200 hover:bg-rose-50 hover:text-rose-400"}`}>
                  {f.emoji} {f.name}
                </button>
              ))}
            </div>
          </div>

          {/* 결과 카운트 */}
          <div className="px-5 py-2.5 bg-rose-50 shrink-0 flex items-center justify-between">
            <span className="text-sm font-bold text-rose-500">🌸 {filteredSpots.length}개 명소</span>
            {selectedSpot && (
              <button onClick={() => setSelectedSpot(null)} className="text-xs text-slate-400 hover:text-rose-400 font-bold transition-colors">선택 해제 ×</button>
            )}
          </div>

          {/* 명소 목록 */}
          <div className="flex-1 overflow-y-auto custom-scrollbar px-3 py-3 space-y-2 bg-slate-50">
            {filteredSpots.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-5xl mb-3">🔍</div>
                <p className="text-slate-400 font-medium text-sm">검색 결과가 없습니다</p>
              </div>
            ) : filteredSpots.map(spot => {
              const flower = FLOWERS.find(f => spot.flowerIds[0] === f.id);
              const isSelected = selectedSpot?.id === spot.id;
              return (
                <div
                  key={spot.id}
                  onClick={() => setSelectedSpot(isSelected ? null : spot)}
                  className={`bg-white rounded-2xl cursor-pointer transition-all border-2 overflow-hidden ${isSelected ? "border-rose-300 shadow-lg" : "border-transparent hover:border-rose-100 hover:shadow-md"}`}
                >
                  <div className="p-4">
                    <div className="flex items-start gap-3">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shrink-0 ${isSelected ? "bg-rose-50" : "bg-slate-50"}`}>{flower?.emoji || "🌸"}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <h3 className="font-black text-slate-800 text-sm">{spot.name}</h3>
                          <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${STATUS_CLASS[spot.status]}`}>{STATUS_LABEL[spot.status]}</span>
                        </div>
                        <p className="text-xs text-slate-400 truncate mb-1">📍 {spot.address}</p>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] bg-pink-50 text-rose-500 px-2 py-0.5 rounded-full font-bold border border-rose-100">{spot.region}</span>
                          <span className="text-[11px] text-slate-400 font-bold">절정 {spot.peakStartDate}~{spot.peakEndDate}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {isSelected && (
                    <div className="px-4 pb-4 space-y-3 border-t-2 border-rose-50 pt-3 animate-fade-up">
                      <p className="text-sm text-slate-600 leading-relaxed">{spot.description}</p>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-rose-50 border border-rose-100 rounded-xl p-3">
                          <p className="text-[10px] text-rose-400 font-bold mb-1">🅿 주차 안내</p>
                          <p className="text-[11px] text-slate-600 leading-tight">{spot.parking}</p>
                        </div>
                        <div className="bg-amber-50 border border-amber-100 rounded-xl p-3">
                          <p className="text-[10px] text-amber-500 font-bold mb-1">💡 꿀팁</p>
                          <p className="text-[11px] text-slate-600 leading-tight">{spot.tip}</p>
                        </div>
                      </div>
                      {spot.festivalName && (
                        <div className="flex items-center gap-2 bg-violet-50 border border-violet-100 rounded-xl px-3 py-2">
                          <span>🎪</span>
                          <span className="text-xs text-violet-600 font-black">{spot.festivalName}</span>
                        </div>
                      )}

                      {/* 길찾기 버튼 */}
                      <div className="flex gap-2 pt-1">
                        <a
                          href={`https://map.kakao.com/link/to/${encodeURIComponent(spot.name)},${spot.lat},${spot.lng}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold text-xs py-2 px-3 rounded-xl flex items-center justify-center gap-1 transition-colors shadow-sm"
                        >
                          <span>🟡</span> 카카오맵 길찾기
                        </a>
                        <a
                          href={`https://map.naver.com/v5/search/${encodeURIComponent(spot.name)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs py-2 px-3 rounded-xl flex items-center justify-center gap-1 transition-colors shadow-sm"
                        >
                          <span>🟢</span> 네이버지도 길찾기
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* 광고 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-rose-100">
              <AdBanner dataAdSlot="flower-map-sidebar" dataAdFormat="rectangle" style={{ minHeight: 250 }} />
            </div>
          </div>

          {/* 하단 광고 */}
          <div className="px-3 py-2 shrink-0 border-t-2 border-rose-50 bg-white">
            <AdBanner dataAdSlot="flower-map-sidebar-bottom" dataAdFormat="auto" style={{ minHeight: 90 }} />
          </div>
        </div>

        {/* 지도 영역 */}
        <div className="flex-1 relative h-full">
          <div ref={mapContainerRef} className="w-full h-full" />

          {!mapLoaded && !mapLoadError && (
            <div className="absolute inset-0 flex items-center justify-center bg-rose-50">
              <div className="text-center">
                <div className="text-6xl mb-4 animate-bounce">🌸</div>
                <div className="w-8 h-8 border-4 border-rose-300 border-t-rose-500 rounded-full animate-spin mx-auto mb-3" />
                <p className="text-rose-500 font-bold">봄꽃 지도를 불러오는 중...</p>
              </div>
            </div>
          )}
          {mapLoadError && (
            <div className="absolute inset-0 flex items-center justify-center bg-rose-50">
              <div className="text-center spring-card p-8 max-w-sm">
                <div className="text-4xl mb-3">⚠️</div>
                <p className="font-black text-rose-600 mb-2">지도 로드 실패</p>
                <p className="text-sm text-slate-500">카카오맵 API 키 또는 도메인 설정을 확인해주세요.</p>
              </div>
            </div>
          )}

          {/* 하단 광고 오버레이 */}
          <div className="absolute bottom-4 right-4 w-[320px] z-10">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl border border-rose-100 shadow-lg p-2">
              <AdBanner dataAdSlot="flower-map-overlay" dataAdFormat="auto" style={{ minHeight: 90 }} />
            </div>
          </div>
        </div>
      </div>

      {/* ====== 모바일 ====== */}
      <div className="flex md:hidden map-page-root flex-col">
        {/* 모바일 헤더 */}
        <div className="shrink-0 px-4 pt-safe-top pt-3 pb-3 bg-white" style={{borderBottom:"2px solid #FCE7F3"}}>
          <div className="flex items-center gap-2 mb-3">
            <Link href="/" className="flex items-center gap-1.5">
              <span className="text-lg">🌸</span>
              <span className="font-black text-rose-500">꽃맵</span>
            </Link>
            <span className="ml-auto text-[10px] font-bold text-rose-400 bg-rose-50 border border-rose-100 px-2 py-0.5 rounded-full">2026 봄</span>
            <button onClick={() => setShowFilters(!showFilters)} className="text-slate-400 ml-1 p-1 rounded-full hover:bg-rose-50 transition-colors">
              <span className="material-symbols-outlined text-lg">{showFilters ? "expand_less" : "tune"}</span>
            </button>
          </div>

          {showFilters && (
            <div className="space-y-2">
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-pink-300 text-sm material-symbols-outlined">search</span>
                <input type="text" placeholder="명소 검색..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
                  className="w-full bg-rose-50 border border-rose-100 rounded-xl pl-8 pr-3 py-2 text-sm text-slate-700 placeholder:text-slate-300 focus:outline-none focus:border-rose-300 transition-colors" />
              </div>
              <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar">
                <button onClick={() => setSelectedFlowerId("all")} className={`shrink-0 px-3 py-1 rounded-full text-xs font-bold transition-all ${selectedFlowerId === "all" ? "bg-rose-500 text-white shadow-sm" : "bg-white text-slate-500 border border-slate-200"}`}>전체</button>
                {FLOWERS.map(f => (
                  <button key={f.id} onClick={() => setSelectedFlowerId(f.id)} className={`shrink-0 px-2.5 py-1 rounded-full text-xs font-bold transition-all ${selectedFlowerId === f.id ? "bg-rose-500 text-white shadow-sm" : "bg-white text-slate-500 border border-slate-200"}`}>
                    {f.emoji} {f.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 탭 */}
        <div className="flex shrink-0 bg-white" style={{borderBottom:"2px solid #FCE7F3"}}>
          {(["list", "map"] as const).map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 text-sm font-bold flex items-center justify-center gap-1.5 transition-all ${activeTab === tab ? "text-rose-500 border-b-2 border-rose-400 bg-rose-50" : "text-slate-400 hover:text-rose-400"}`}>
              <span className="material-symbols-outlined text-base">{tab === "list" ? "format_list_bulleted" : "map"}</span>
              {tab === "list" ? `명소 (${filteredSpots.length})` : "지도"}
            </button>
          ))}
        </div>

        {/* 목록 탭 */}
        {activeTab === "list" && (
          <div className="flex-1 overflow-y-auto custom-scrollbar px-3 py-3 space-y-2 bg-slate-50">
            <div className="bg-white rounded-2xl overflow-hidden border border-rose-100">
              <AdBanner dataAdSlot="flower-map-mobile-top" dataAdFormat="auto" style={{ minHeight: 60 }} />
            </div>

            {filteredSpots.map((spot, i) => {
              const flower = FLOWERS.find(f => spot.flowerIds[0] === f.id);
              const isSelected = selectedSpot?.id === spot.id;
              return (
                <div key={spot.id}>
                  <div onClick={() => setSelectedSpot(isSelected ? null : spot)}
                    className={`bg-white rounded-2xl cursor-pointer border-2 transition-all ${isSelected ? "border-rose-300 shadow-lg" : "border-transparent hover:border-rose-100"}`}>
                    <div className="p-3.5 flex items-center gap-3">
                      <div className="text-2xl">{flower?.emoji || "🌸"}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 mb-0.5 flex-wrap">
                          <h3 className="font-black text-slate-800 text-sm">{spot.name}</h3>
                          <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${STATUS_CLASS[spot.status]}`}>{STATUS_LABEL[spot.status]}</span>
                        </div>
                        <p className="text-xs text-slate-400 truncate">📍 {spot.region} · 절정 {spot.peakStartDate}~{spot.peakEndDate}</p>
                      </div>
                      <button onClick={e => { e.stopPropagation(); setSelectedSpot(spot); setActiveTab("map"); }}
                        className="shrink-0 bg-rose-50 hover:bg-rose-100 text-rose-400 p-2 rounded-xl transition-colors">
                        <span className="material-symbols-outlined text-lg">map</span>
                      </button>
                    </div>
                    {isSelected && (
                      <div className="px-3.5 pb-3.5 border-t-2 border-rose-50 pt-3 space-y-2 animate-fade-up">
                        <p className="text-xs text-slate-600 leading-relaxed">{spot.description}</p>
                        <div className="bg-amber-50 border border-amber-100 rounded-xl px-3 py-2">
                          <p className="text-[10px] text-amber-500 font-bold mb-0.5">💡 꿀팁</p>
                          <p className="text-xs text-slate-600">{spot.tip}</p>
                        </div>
                      </div>
                    )}
                  </div>
                  {(i + 1) % 4 === 0 && (
                    <div className="bg-white rounded-2xl overflow-hidden border border-rose-100">
                      <AdBanner dataAdSlot="flower-map-mobile-infeed" dataAdFormat="auto" style={{ minHeight: 60 }} />
                    </div>
                  )}
                </div>
              );
            })}

            <div className="bg-white rounded-2xl overflow-hidden border border-rose-100">
              <AdBanner dataAdSlot="flower-map-mobile-bottom" dataAdFormat="auto" style={{ minHeight: 60 }} />
            </div>
            <div className="h-4" />
          </div>
        )}

        {/* 지도 탭 */}
        {activeTab === "map" && (
          <div className="flex-1 relative overflow-hidden">
            <div ref={mapContainerRef} className="w-full h-full" />
            {!mapLoaded && !mapLoadError && (
              <div className="absolute inset-0 flex items-center justify-center bg-rose-50">
                <div className="text-center">
                  <div className="text-4xl mb-3 animate-bounce">🌸</div>
                  <p className="text-rose-500 text-sm font-bold">지도 로딩 중...</p>
                </div>
              </div>
            )}
            <div className="absolute bottom-0 left-0 right-0 z-10 bg-white/95 border-t border-rose-100">
              <AdBanner dataAdSlot="flower-map-mobile-map-bottom" dataAdFormat="auto" style={{ minHeight: 60 }} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
