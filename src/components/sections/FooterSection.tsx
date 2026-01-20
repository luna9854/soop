import { Phone, MapPin, User } from "lucide-react";

import { siteConfig } from "@/site.config";

export function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="bg-zinc-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-bold mb-4">{siteConfig.name}</h2>
            <address className="not-italic space-y-3 text-zinc-300">
              <div className="flex items-center gap-2">
                <Phone className="size-4 text-amber-500" />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="hover:text-amber-500 transition-colors"
                >
                  대표전화: {siteConfig.contact.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <User className="size-4 text-amber-500" />
                <span>{siteConfig.contact.manager}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="size-4 text-amber-500 mt-0.5 shrink-0" />
                <span>분양사무소: {siteConfig.contact.address}</span>
              </div>
            </address>
          </div>

          {/* Quick Links */}
          <div className="md:text-right">
            <h3 className="text-lg font-semibold mb-4">바로가기</h3>
            <nav aria-label="푸터 네비게이션">
              <ul className="space-y-2 text-zinc-300">
                <li>
                  <a href="#overview" className="hover:text-amber-500 transition-colors">
                    단지 개요
                  </a>
                </li>
                <li>
                  <a href="#location" className="hover:text-amber-500 transition-colors">
                    입지 환경
                  </a>
                </li>
                <li>
                  <a href="#floor-plan" className="hover:text-amber-500 transition-colors">
                    평면도
                  </a>
                </li>
                <li>
                  <a href="#registration" className="hover:text-amber-500 transition-colors">
                    관심고객 등록
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-zinc-700 mb-8" />

        {/* Legal Notice */}
        <div className="text-sm text-zinc-400 space-y-2">
          <p>{siteConfig.legal.disclaimer}</p>
          <p>
            {siteConfig.legal.copyright.replace(
              "ⓒ",
              `ⓒ ${currentYear}`
            )}{" "}
            <time dateTime={String(currentYear)}>{currentYear}</time>
          </p>
        </div>
      </div>
    </footer>
  );
}
