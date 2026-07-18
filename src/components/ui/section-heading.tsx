import type React from "react";

import { cn } from "@/lib/utils";

export function SectionHeading({
  className,
  children,
  ...props
}: React.ComponentProps<"h2">) {
  return (
    <h2
      className={cn(
        "font-display text-foreground mt-5 max-w-3xl text-4xl leading-[1.05] font-semibold tracking-[-0.015em] md:text-5xl",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}
