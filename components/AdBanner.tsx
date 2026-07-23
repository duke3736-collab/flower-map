"use client";

import { useEffect, useRef } from "react";

interface AdBannerProps {
  dataAdSlot: string;
  dataAdFormat?: string;
  dataFullWidthResponsive?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default function AdBanner({
  dataAdSlot,
  dataAdFormat = "auto",
  dataFullWidthResponsive = true,
  className = "",
  style = {},
}: AdBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isPushed = useRef(false);

  // 개발자 에러 오버레이 억제 (adsbygoogle 비동기 예외가 Next.js 에러창 띄우는 현상 방지)
  useEffect(() => {
    const handleGlobalError = (event: ErrorEvent) => {
      if (
        event.message &&
        (event.message.includes("adsbygoogle") ||
          event.message.includes("No slot size") ||
          event.message.includes("availableWidth"))
      ) {
        event.preventDefault();
        console.warn("[AdSense Dev Filter] Suppressed layout error:", event.message);
      }
    };
    window.addEventListener("error", handleGlobalError);
    return () => window.removeEventListener("error", handleGlobalError);
  }, []);

  useEffect(() => {
    if (isPushed.current || typeof window === "undefined") return;

    const adContainer = containerRef.current;
    if (!adContainer) return;

    let resizeObserver: ResizeObserver | null = null;
    let intervalId: ReturnType<typeof setInterval> | null = null;
    let animationFrameId: number | null = null;

    const pushAd = () => {
      if (isPushed.current) return;
      try {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        isPushed.current = true;
      } catch (error) {
        console.error("AdSense error:", error);
      }
      cleanup();
    };

    const cleanup = () => {
      if (resizeObserver) resizeObserver.disconnect();
      if (intervalId) clearInterval(intervalId);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };

    const checkSizeAndPush = () => {
      if (adContainer.offsetWidth >= 250) {
        animationFrameId = requestAnimationFrame(() => {
          if (adContainer && adContainer.offsetWidth >= 250) pushAd();
        });
      }
    };

    checkSizeAndPush();

    if (!isPushed.current) {
      if (typeof ResizeObserver !== "undefined") {
        resizeObserver = new ResizeObserver((entries) => {
          for (const entry of entries) {
            if (entry.contentRect.width >= 250) { pushAd(); break; }
          }
        });
        resizeObserver.observe(adContainer);
      }
      intervalId = setInterval(checkSizeAndPush, 200);
    }

    return () => cleanup();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`w-full overflow-hidden flex items-center justify-center ${className}`}
      style={{ minHeight: 90, ...style }}
    >
      <ins
        className="adsbygoogle"
        style={{ display: "block", width: "100%", height: "100%" }}
        data-ad-client="ca-pub-6635245275061755"
        data-ad-slot={dataAdSlot}
        data-ad-format={dataAdFormat}
        data-full-width-responsive={dataFullWidthResponsive.toString()}
      />
    </div>
  );
}
