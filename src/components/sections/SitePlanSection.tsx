import Image from "next/image";

import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function SitePlanSection() {
  return (
    <SectionWrapper id="site-plan" className="bg-secondary/50">
      <SectionHeading
        id="site-plan-heading"
        subtitle="입주민의 편의를 고려한 합리적인 단지 배치"
      >
        단지 배치도
      </SectionHeading>

      <figure className="max-w-5xl mx-auto">
        <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg border border-border">
          <Image
            src="/유림노르웨이숲 단지배치도.png"
            alt="진영 유림 노르웨이숲 단지 배치도 - 4개동 배치 및 주차장, 조경 계획"
            fill
            className="object-contain bg-white"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
          />
        </div>
        <figcaption className="mt-4 text-center text-sm text-muted-foreground">
          * 상기 이미지는 소비자의 이해를 돕기 위한 것으로, 실제와 다를 수 있습니다.
        </figcaption>
      </figure>
    </SectionWrapper>
  );
}
