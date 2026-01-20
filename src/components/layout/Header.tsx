"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";

import { siteConfig } from "@/site.config";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#overview", label: "단지개요" },
  { href: "#location", label: "입지환경" },
  { href: "#registration", label: "관심고객등록" },
  { href: "#site-plan", label: "배치도" },
  { href: "#floor-plan", label: "평면도" },
  { href: "#gallery", label: "갤러리" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="relative z-10 transition-transform duration-300 hover:scale-105"
          >
            <Image
              src="/그림1.png"
              alt={siteConfig.name}
              width={140}
              height={40}
              className={cn(
                "transition-all duration-300",
                isScrolled ? "brightness-100" : "brightness-100"
              )}
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="relative px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-all duration-300 group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 group-hover:w-3/4 transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className={cn(
              "hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300",
              "bg-gradient-to-r from-amber-500 to-amber-600 text-white",
              "hover:from-amber-400 hover:to-amber-500 hover:shadow-lg hover:shadow-amber-500/30",
              "hover:scale-105 active:scale-95"
            )}
          >
            <Phone className="size-4" />
            <span>{siteConfig.contact.phoneFormatted}</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative z-10 p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label={isMobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
          >
            {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 bg-black/95 backdrop-blur-xl transition-all duration-500",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-6">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={cn(
                "text-2xl font-medium text-white/80 hover:text-amber-400 transition-all duration-300",
                "transform",
                isMobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              )}
              style={{ transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : "0ms" }}
            >
              {item.label}
            </a>
          ))}
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className={cn(
              "mt-6 inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300",
              "bg-gradient-to-r from-amber-500 to-amber-600 text-white",
              "hover:from-amber-400 hover:to-amber-500"
            )}
          >
            <Phone className="size-5" />
            <span>상담문의</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
