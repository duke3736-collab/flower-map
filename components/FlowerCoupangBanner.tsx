"use client";

import React from "react";

export interface FlowerCoupangBanner {
  id: number;
  badge: string;
  badgeBg: string;
  title: string;
  linkText: string;
  imageUrl: string;
  link: string;
}

// 봄 나들이·꽃구경 테마 쿠팡 파트너스 기획전 배너
const SPRING_BANNERS: FlowerCoupangBanner[] = [
  {
    id: 1,
    badge: "PICNIC",
    badgeBg: "bg-pink-500",
    title: "봄 나들이 필수템! 감성 피크닉 매트·도시락·보냉백 특가",
    linkText: "피크닉 용품 최저가 보러가기 →",
    imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=500&auto=format&fit=crop&q=60",
    link: "https://link.coupang.com/a/fCIFqWgDee"
  },
  {
    id: 2,
    badge: "FASHION",
    badgeBg: "bg-rose-500",
    title: "벚꽃 나들이 패션! 봄 원피스·가디건·모자 트렌드 모음",
    linkText: "봄 패션 기획전 보러가기 →",
    imageUrl: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500&auto=format&fit=crop&q=60",
    link: "https://link.coupang.com/a/fCIFqWgDee"
  },
  {
    id: 3,
    badge: "PHOTO",
    badgeBg: "bg-violet-500",
    title: "인생샷 필수! 꽃구경 삼각대·셀카봉·미니 카메라 추천",
    linkText: "포토/카메라 용품 보러가기 →",
    imageUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=60",
    link: "https://link.coupang.com/a/fCKu1sevv2"
  },
  {
    id: 4,
    badge: "HEALTH",
    badgeBg: "bg-emerald-500",
    title: "봄 알레르기 대비! 선크림·마스크·항히스타민제 특가",
    linkText: "봄철 건강용품 보러가기 →",
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=60",
    link: "https://link.coupang.com/a/fCIFqWgDee"
  },
  {
    id: 5,
    badge: "DRIVE",
    badgeBg: "bg-amber-500",
    title: "벚꽃 드라이브 준비! 차량용 방향제·선바이저·트렁크 정리함",
    linkText: "드라이브 용품 보러가기 →",
    imageUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&auto=format&fit=crop&q=60",
    link: "https://link.coupang.com/a/fCIFqWgDee"
  },
  {
    id: 6,
    badge: "KIDS",
    badgeBg: "bg-sky-500",
    title: "아이와 봄나들이! 유아 돗자리·유모차 쿠션·어린이 방수 신발",
    linkText: "키즈 나들이 용품 →",
    imageUrl: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=500&auto=format&fit=crop&q=60",
    link: "https://link.coupang.com/a/fCIFqWgDee"
  },
  {
    id: 7,
    badge: "CAMPING",
    badgeBg: "bg-teal-500",
    title: "봄꽃 캠핑 시즌! 경량 텐트·캠핑 의자·버너 세트 최저가",
    linkText: "캠핑 용품 기획전 →",
    imageUrl: "https://images.unsplash.com/photo-1478827536114-da961b7f86d2?w=500&auto=format&fit=crop&q=60",
    link: "https://link.coupang.com/a/fCIFqWgDee"
  },
  {
    id: 8,
    badge: "FOOD",
    badgeBg: "bg-orange-500",
    title: "꽃구경 도시락 용기! 인스타 감성 도시락통·밀폐 반찬통 모음",
    linkText: "도시락 용기 특가전 →",
    imageUrl: "https://images.unsplash.com/photo-1547592180-85f173990554?w=500&auto=format&fit=crop&q=60",
    link: "https://link.coupang.com/a/fCIFqWgDee"
  }
];

interface FlowerCoupangBannerProps {
  ids?: number[];
  limit?: number;
  layout?: "grid" | "vertical" | "horizontal";
  className?: string;
}

export default function FlowerCoupangBanner({
  ids,
  limit = 2,
  layout = "grid",
  className = "",
}: FlowerCoupangBannerProps) {
  const banners = ids
    ? SPRING_BANNERS.filter((b) => ids.includes(b.id))
    : SPRING_BANNERS.slice(0, limit);

  const containerClasses = {
    grid: "grid grid-cols-1 md:grid-cols-2 gap-4 w-full",
    vertical: "flex flex-col gap-4 w-full",
    horizontal: "flex flex-col md:flex-row gap-4 w-full",
  };

  return (
    <div className={`w-full ${className}`}>
      <div className={containerClasses[layout]}>
        {banners.map((banner) => {
          const isVertical = layout === "vertical";
          const cardHeight = isVertical ? "h-64" : "h-52";
          const badgeSize = isVertical ? "text-xs px-3 py-1" : "text-[10px] px-2.5 py-0.5";
          const titleSize = isVertical ? "text-base md:text-lg" : "text-sm md:text-base";
          const paddingClass = isVertical ? "p-6 gap-3" : "p-5 gap-2";

          return (
            <a
              key={banner.id}
              href={banner.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex flex-col justify-end overflow-hidden rounded-2xl w-full shadow-md hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 border border-black/10 cursor-pointer ${cardHeight}`}
            >
              {/* 배경 이미지 */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${banner.imageUrl})` }}
              />
              {/* 그라데이션 오버레이 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10 transition-opacity duration-300 group-hover:opacity-95" />

              {/* 콘텐츠 */}
              <div className={`relative z-10 flex flex-col items-start text-left ${paddingClass}`}>
                <span className={`font-black text-white rounded shadow-sm tracking-wider uppercase ${badgeSize} ${banner.badgeBg}`}>
                  {banner.badge}
                </span>
                <h4 className={`font-black text-white leading-snug drop-shadow-sm tracking-tight line-clamp-3 ${titleSize}`}>
                  {banner.title}
                </h4>
                <span className="font-bold text-pink-300 group-hover:text-pink-200 transition-colors drop-shadow-sm flex items-center gap-1 text-xs">
                  {banner.linkText}
                </span>
              </div>
            </a>
          );
        })}
      </div>
      {/* 법적 고지 */}
      <p className="text-[9px] text-slate-400 text-center mt-3 leading-relaxed">
        ※ 이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
      </p>
    </div>
  );
}
