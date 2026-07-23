import { Suspense } from "react";
import FlowerMapClient from "@/components/FlowerMapClient";

export default function MapPage() {
  return (
    <div className="fixed inset-0 w-full h-full spring-bg">
      <Suspense fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center space-y-3 animate-pulse">
            <div className="text-5xl">🌸</div>
            <p className="text-pink-300 font-bold">봄꽃 지도를 불러오는 중...</p>
          </div>
        </div>
      }>
        <FlowerMapClient />
      </Suspense>
    </div>
  );
}
