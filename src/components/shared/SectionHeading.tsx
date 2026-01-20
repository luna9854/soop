import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  subtitle?: string;
  accent?: boolean;
}

export function SectionHeading({
  id,
  children,
  className,
  subtitle,
  accent = true,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 md:mb-16 text-center", className)}>
      {accent && (
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-amber-500" />
          <span className="w-2 h-2 rounded-full bg-amber-500" />
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-amber-500" />
        </div>
      )}
      <h2
        id={id}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight"
      >
        {children}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
