"use client";

import { Train, GraduationCap, ShoppingBag, Sparkles } from "lucide-react";

import { siteConfig } from "@/site.config";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { SectionHeading } from "@/components/shared/SectionHeading";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const categories = [
  {
    id: "transportation",
    icon: Train,
    title: "교통",
    items: siteConfig.location.transportation,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    id: "education",
    icon: GraduationCap,
    title: "교육",
    items: siteConfig.location.education,
    color: "text-green-500",
    bgColor: "bg-green-50",
  },
  {
    id: "amenities",
    icon: ShoppingBag,
    title: "생활편의",
    items: siteConfig.location.amenities,
    color: "text-purple-500",
    bgColor: "bg-purple-50",
  },
  {
    id: "development",
    icon: Sparkles,
    title: "개발호재",
    items: siteConfig.location.development,
    color: "text-amber-500",
    bgColor: "bg-amber-50",
  },
];

export function LocationSection() {
  return (
    <SectionWrapper id="location" variant="gradient">
      <SectionHeading
        id="location-heading"
        subtitle="진영역 도보 5분, 편리한 교통과 생활 인프라"
      >
        입지 환경
      </SectionHeading>

      <div className="max-w-3xl mx-auto">
        <Accordion defaultValue={["transportation"]} multiple>
          {categories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <AccordionItem key={category.id} value={category.id}>
                <AccordionTrigger className="text-base md:text-lg">
                  <span className={cn("p-2 rounded-lg", category.bgColor)}>
                    <Icon className={cn("size-5", category.color)} />
                  </span>
                  {category.title}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-1">
                    {category.items.map((item, index) => (
                      <li
                        key={index}
                        className={cn(
                          "flex items-center justify-between gap-4 p-3 rounded-lg",
                          "bg-gray-50/50 hover:bg-gray-100/80 transition-colors duration-200",
                          "animate-fade-in-up opacity-0"
                        )}
                        style={{
                          animationDelay: `${index * 80}ms`,
                          animationFillMode: "forwards",
                        }}
                      >
                        <span className="font-medium text-foreground">
                          {item.name}
                        </span>
                        <span className="text-muted-foreground text-sm text-right flex flex-col items-end">
                          <span className="font-medium text-amber-600">
                            {item.distance}
                          </span>
                          {item.detail && (
                            <span className="text-xs text-gray-500">
                              {item.detail}
                            </span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </SectionWrapper>
  );
}
