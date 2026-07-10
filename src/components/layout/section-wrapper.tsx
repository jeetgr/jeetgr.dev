import type React from "react";

import { cn } from "@/lib/utils";

export function SectionWrapper({
  className,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section
      className={cn("mx-auto max-w-5xl px-6 py-12 md:py-20", className)}
      {...props}
    />
  );
}
