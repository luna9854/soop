"use client";

import { useState } from "react";
import Image from "next/image";

import { siteConfig } from "@/site.config";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { cn } from "@/lib/utils";

type FloorPlanType = (typeof siteConfig.floorPlans)[number]["type"];

export function FloorPlanSection() {
  const [activeTab, setActiveTab] = useState<FloorPlanType>(
    siteConfig.floorPlans[0].type
  );

  const activePlan = siteConfig.floorPlans.find(
    (plan) => plan.type === activeTab
  );

  return (
    <SectionWrapper id="floor-plan">
      <SectionHeading
        id="floor-plan-heading"
        subtitle="세대별 평면도를 확인하세요"
      >
        평면도
      </SectionHeading>

      {/* Tab List */}
      <div
        role="tablist"
        aria-label="평면도 타입 선택"
        className="flex flex-wrap justify-center gap-2 mb-8"
      >
        {siteConfig.floorPlans.map((plan) => (
          <button
            key={plan.type}
            role="tab"
            aria-selected={activeTab === plan.type}
            aria-controls={`panel-${plan.type}`}
            id={`tab-${plan.type}`}
            onClick={() => setActiveTab(plan.type)}
            className={cn(
              "px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium text-sm md:text-base transition-all",
              activeTab === plan.type
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
            )}
          >
            {plan.type}
            <span className="hidden sm:inline text-xs ml-1 opacity-70">
              ({plan.area})
            </span>
          </button>
        ))}
      </div>

      {/* Tab Panels */}
      {siteConfig.floorPlans.map((plan) => (
        <div
          key={plan.type}
          role="tabpanel"
          id={`panel-${plan.type}`}
          aria-labelledby={`tab-${plan.type}`}
          hidden={activeTab !== plan.type}
          className="max-w-4xl mx-auto"
        >
          <figure>
            <div className="relative aspect-[3/4] md:aspect-[4/3] rounded-lg overflow-hidden shadow-lg border border-border bg-white">
              <Image
                src={plan.image}
                alt={`진영 유림 노르웨이숲 ${plan.type} 타입 평면도 - ${plan.area}`}
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 896px"
              />
            </div>
            <figcaption className="mt-4 text-center">
              <span className="text-lg font-semibold">{plan.type} 타입</span>
              <span className="mx-2 text-muted-foreground">|</span>
              <span className="text-muted-foreground">전용면적 {plan.area}</span>
            </figcaption>
          </figure>
        </div>
      ))}

      <p className="mt-6 text-center text-sm text-muted-foreground">
        * 상기 평면도는 소비자의 이해를 돕기 위한 것으로, 실제와 다를 수 있습니다.
      </p>
    </SectionWrapper>
  );
}
