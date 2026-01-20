"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id: string;
  labelledBy?: string;
  className?: string;
  children: React.ReactNode;
  as?: "section" | "article";
  variant?: "default" | "dark" | "gradient";
}

export function SectionWrapper({
  id,
  labelledBy,
  className,
  children,
  as: Component = "section",
  variant = "default",
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const variantStyles = {
    default: "bg-white",
    dark: "bg-gray-900 text-white",
    gradient: "bg-gradient-to-b from-gray-50 to-white",
  };

  return (
    <Component
      ref={ref}
      id={id}
      aria-labelledby={labelledBy || `${id}-heading`}
      className={cn(
        "py-20 md:py-28 relative overflow-hidden",
        variantStyles[variant],
        className
      )}
    >
      <div
        className={cn(
          "container mx-auto px-4 md:px-6 transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        {children}
      </div>
    </Component>
  );
}
