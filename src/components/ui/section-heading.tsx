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
        "font-display text-foreground mt-6 text-3xl font-medium md:text-4xl",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}
