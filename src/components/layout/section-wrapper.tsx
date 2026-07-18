import type React from "react";

import { cn } from "@/lib/utils";

export function SectionWrapper({
  className,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section
      className={cn(
        "section-shell mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28 lg:px-12",
        className
      )}
      {...props}
    />
  );
}
