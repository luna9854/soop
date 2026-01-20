"use client";

import Image from "next/image";

import { siteConfig } from "@/site.config";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { SectionHeading } from "@/components/shared/SectionHeading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export function GallerySection() {
  return (
    <SectionWrapper id="gallery" className="bg-secondary/50">
      <SectionHeading
        id="gallery-heading"
        subtitle="진영 노르웨이 숲의 아름다운 모습을 미리 만나보세요"
      >
        갤러리
      </SectionHeading>

      <div className="max-w-5xl mx-auto px-12">
        <Carousel opts={{ loop: true }}>
          <CarouselContent>
            {siteConfig.gallery.map((image, index) => (
              <CarouselItem key={index}>
                <figure className="relative">
                  <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
                    />
                  </div>
                  <figcaption className="mt-4 text-center text-muted-foreground">
                    {image.caption}
                  </figcaption>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        * 상기 이미지는 소비자의 이해를 돕기 위한 것으로, 실제와 다를 수 있습니다.
      </p>
    </SectionWrapper>
  );
}
