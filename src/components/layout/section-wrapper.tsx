import type React from "react";

import { cn } from "@/lib/utils";

export function SectionWrapper({
  className,
  divider = true,
  children,
  ...props
}: React.ComponentProps<"section"> & { divider?: boolean }) {
  return (
    <section
      className={cn(
        "mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28 lg:px-10",
        className
      )}
      {...props}
    >
      {divider && (
        <div className="contour-rule mb-14 w-full" aria-hidden="true" />
      )}
      {children}
    </section>
  );
}
