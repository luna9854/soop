"use client";

import { useState, useEffect } from "react";
import { Phone, X, MessageCircle, ExternalLink } from "lucide-react";

import { siteConfig } from "@/site.config";
import { cn } from "@/lib/utils";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 transition-all duration-500",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      )}
    >
      {/* Popup Menu */}
      <div
        className={cn(
          "flex flex-col gap-2 transition-all duration-300",
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        {/* Phone Call Button */}
        <a
          href={`tel:${siteConfig.contact.phone}`}
          className={cn(
            "flex items-center gap-3 px-5 py-3 rounded-full",
            "bg-white shadow-lg border border-gray-100",
            "hover:shadow-xl hover:scale-105 transition-all duration-300",
            "group"
          )}
        >
          <span className="p-2 rounded-full bg-amber-100 group-hover:bg-amber-200 transition-colors">
            <Phone className="size-5 text-amber-600" />
          </span>
          <span className="font-semibold text-gray-800">
            {siteConfig.contact.phoneFormatted}
          </span>
        </a>

        {/* Naver Blog Link */}
        <a
          href={siteConfig.contact.blog}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "flex items-center gap-3 px-5 py-3 rounded-full",
            "bg-white shadow-lg border border-gray-100",
            "hover:shadow-xl hover:scale-105 transition-all duration-300",
            "group"
          )}
        >
          <span className="p-2 rounded-full bg-green-100 group-hover:bg-green-200 transition-colors">
            <ExternalLink className="size-5 text-green-600" />
          </span>
          <span className="font-semibold text-gray-800">네이버 블로그</span>
        </a>

        {/* Quick Registration Link */}
        <button
          onClick={() => {
            document.querySelector("#registration")?.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false);
          }}
          className={cn(
            "flex items-center gap-3 px-5 py-3 rounded-full",
            "bg-white shadow-lg border border-gray-100",
            "hover:shadow-xl hover:scale-105 transition-all duration-300",
            "group"
          )}
        >
          <span className="p-2 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors">
            <MessageCircle className="size-5 text-blue-600" />
          </span>
          <span className="font-semibold text-gray-800">관심고객 등록</span>
        </button>
      </div>

      {/* Main FAB Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "relative flex items-center justify-center size-16 rounded-full",
          "bg-gradient-to-br from-amber-500 to-amber-600",
          "shadow-lg shadow-amber-500/30",
          "hover:shadow-xl hover:shadow-amber-500/40 hover:scale-110",
          "active:scale-95 transition-all duration-300",
          isOpen && "rotate-90"
        )}
        aria-label="상담문의 열기"
      >
        {/* Pulse animation */}
        <span className="absolute inset-0 rounded-full bg-amber-400 animate-ping opacity-30" />

        {isOpen ? (
          <X className="size-7 text-white relative z-10" />
        ) : (
          <Phone className="size-7 text-white relative z-10" />
        )}
      </button>
    </div>
  );
}
