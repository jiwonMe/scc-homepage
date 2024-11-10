import React from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import { CTAButton } from "@/components/ui/cta-button";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <Navbar />
        <div className="absolute inset-0">
          <Image
            src="/images/staircrusher-hero-bg-image.png"
            width={1920}
            height={1080}
            alt="Hero background"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <p className="text-base md:text-2xl text-white/90 mb-4">
            이동약자와 그 친구들의 막힘없는 이동
          </p>
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-8">
            계단뿌셔클럽
          </h1>
          <div className="flex justify-center gap-4">
            <CTAButton>
              소개보기
            </CTAButton>
            <CTAButton>
              앱 다운로드
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}