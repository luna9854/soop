"use client";

import { Building2, MapPin, Home, Layers, Ruler, Grid3X3, HardHat, Calendar, Car, Flame } from "lucide-react";

import { siteConfig } from "@/site.config";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { cn } from "@/lib/utils";

const overviewItems = [
  { label: "사업명", value: siteConfig.property.name, icon: Building2 },
  { label: "위치", value: siteConfig.property.location, icon: MapPin },
  { label: "규모", value: siteConfig.property.floors, icon: Layers },
  {
    label: "세대수",
    value: `총 ${siteConfig.property.totalUnits}세대 (${siteConfig.property.buildings}개동)`,
    icon: Home,
  },
  {
    label: "전용면적",
    value: `${siteConfig.property.areas.min}~${siteConfig.property.areas.max}${siteConfig.property.areas.unit}`,
    icon: Ruler,
  },
  { label: "타입", value: siteConfig.property.types.join(", "), icon: Grid3X3 },
  { label: "시공사", value: siteConfig.property.constructor, icon: HardHat },
  { label: "입주예정", value: siteConfig.property.moveInDate, icon: Calendar },
  { label: "주차", value: siteConfig.property.parking, icon: Car },
  { label: "난방방식", value: siteConfig.property.heating, icon: Flame },
];

export function OverviewSection() {
  return (
    <SectionWrapper id="overview" variant="gradient">
      <SectionHeading
        id="overview-heading"
        subtitle="진영 유림 노르웨이숲의 상세 정보를 확인하세요"
      >
        단지 개요
      </SectionHeading>

      <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-5 max-w-7xl mx-auto">
        {overviewItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className={cn(
                "group relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100",
                "hover:shadow-xl hover:border-amber-200 hover:-translate-y-1",
                "transition-all duration-300"
              )}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* Decorative gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-gray-100 group-hover:bg-amber-100 transition-colors duration-300">
                    <Icon className="size-4 text-gray-600 group-hover:text-amber-600 transition-colors duration-300" />
                  </div>
                  <dt className="text-sm text-muted-foreground font-medium">
                    {item.label}
                  </dt>
                </div>
                <dd className="text-base md:text-lg font-semibold text-foreground leading-snug">
                  {item.value}
                </dd>
              </div>
            </div>
          );
        })}
      </dl>
    </SectionWrapper>
  );
}
