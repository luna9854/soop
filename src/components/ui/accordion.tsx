"use client";

import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { ChevronDownIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Accordion({ className, ...props }: AccordionPrimitive.Root.Props) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn("flex w-full flex-col gap-2", className)}
      {...props}
    />
  );
}

function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        "group rounded-xl border border-gray-200 bg-white overflow-hidden transition-all duration-300",
        "hover:border-amber-200 hover:shadow-md",
        "data-[open]:border-amber-300 data-[open]:shadow-lg data-[open]:bg-gradient-to-br data-[open]:from-white data-[open]:to-amber-50/30",
        className
      )}
      {...props}
    />
  );
}

function AccordionTrigger({
  children,
  className,
  ...props
}: AccordionPrimitive.Trigger.Props) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "flex w-full items-center justify-between gap-3 px-5 py-4 text-left font-semibold",
          "transition-all duration-300 outline-none",
          "hover:bg-gray-50 group-data-[open]:hover:bg-transparent",
          "disabled:pointer-events-none disabled:opacity-50",
          className
        )}
        {...props}
      >
        <span className="flex items-center gap-3">{children}</span>
        <ChevronDownIcon
          className={cn(
            "size-5 text-gray-400 shrink-0 transition-all duration-300",
            "group-data-[open]:rotate-180 group-data-[open]:text-amber-500"
          )}
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  children,
  className,
  ...props
}: AccordionPrimitive.Panel.Props) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-content"
      className={cn(
        "overflow-hidden transition-all duration-300 ease-out",
        "data-[open]:animate-accordion-down data-[closed]:animate-accordion-up"
      )}
      {...props}
    >
      <div
        className={cn(
          "px-5 pb-5 pt-0",
          className
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Panel>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
