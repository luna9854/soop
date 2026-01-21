"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Phone, ChevronDown } from "lucide-react";

import { siteConfig } from "@/site.config";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/투시도야경(아키픽셀).png"
          alt="진영 유림 노르웨이숲 투시도 야경"
          fill
          priority
          className="object-cover scale-105 animate-slow-zoom"
          sizes="100vw"
        />
        {/* Premium Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
        {/* Subtle gold tint overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 via-transparent to-transparent" />
      </div>

      {/* Animated particles/stars effect */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        {/* Logo */}
        <div
          className={cn(
            "mb-8 transition-all duration-1000 delay-300",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <Image
            src="/그림1.png"
            alt="유림 노르웨이 숲 로고"
            width={200}
            height={70}
            className="mx-auto drop-shadow-2xl"
            priority
          />
        </div>

        {/* Premium Badge */}
        <div
          className={cn(
            "mb-6 transition-all duration-1000 delay-500",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm text-white/90">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            2029년 9월 입주 예정
          </span>
        </div>

        {/* Main Heading */}
        <h1
          className={cn(
            "text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight transition-all duration-1000 delay-700",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <span className="bg-gradient-to-r from-white via-white to-amber-200 bg-clip-text text-transparent">
            {siteConfig.name}
          </span>
        </h1>

        {/* Tagline */}
        <p
          className={cn(
            "text-xl md:text-2xl lg:text-3xl text-white/90 mb-4 font-light tracking-wide transition-all duration-1000 delay-900",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <span className="text-amber-300">진영의 새로운 랜드마크</span>
        </p>

        <p
          className={cn(
            "text-lg md:text-xl text-white/70 mb-4 transition-all duration-1000 delay-1000",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {siteConfig.contact.addressShort}
        </p>

        {/* Property Info Pills */}
        <div
          className={cn(
            "flex flex-wrap justify-center gap-3 mb-10 transition-all duration-1000 delay-1100",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-sm text-white/80">
            {siteConfig.property.constructor} 시공
          </span>
          <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-sm text-white/80">
            총 {siteConfig.property.totalUnits}세대
          </span>
          <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-sm text-white/80">
            {siteConfig.property.areas.min}~{siteConfig.property.areas.max}
            {siteConfig.property.areas.unit}
          </span>
        </div>

        {/* CTA Button */}
        <div
          className={cn(
            "transition-all duration-1000 delay-[1200ms]",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className={cn(
              "group relative inline-flex items-center justify-center gap-3 px-10 py-5 text-xl font-bold rounded-full",
              "bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 bg-[length:200%_100%]",
              "text-black shadow-2xl shadow-amber-500/30",
              "hover:shadow-amber-500/50 hover:scale-105",
              "active:scale-95 transition-all duration-300",
              "animate-gradient-x"
            )}
          >
            <Phone className="size-6 group-hover:animate-shake" />
            상담문의 {siteConfig.contact.phoneFormatted}
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={cn(
          "absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-[1500ms]",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
      >
        <button
          onClick={() => {
            document.querySelector("#overview")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors group"
          aria-label="아래로 스크롤"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="size-6 animate-bounce" />
        </button>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-20 left-8 w-20 h-20 border-l-2 border-t-2 border-white/20 opacity-50" />
      <div className="absolute top-20 right-8 w-20 h-20 border-r-2 border-t-2 border-white/20 opacity-50" />
      <div className="absolute bottom-20 left-8 w-20 h-20 border-l-2 border-b-2 border-white/20 opacity-50" />
      <div className="absolute bottom-20 right-8 w-20 h-20 border-r-2 border-b-2 border-white/20 opacity-50" />
    </section>
  );
}
