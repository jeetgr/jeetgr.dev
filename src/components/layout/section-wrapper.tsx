import type React from "react";

import { cn } from "@/lib/utils";

/** Page-width section; `title` renders as a left-column heading on wide screens. */
export function SectionWrapper({
  title,
  className,
  children,
  ...props
}: React.ComponentProps<"section"> & { title: string }) {
  const headingId = `${props.id}-heading`;

  return (
    <section
      aria-labelledby={headingId}
      className={cn(
        "border-line mx-6 grid max-w-[61rem] gap-x-16 gap-y-10 border-t py-20 md:grid-cols-[13rem_1fr] md:py-24 lg:mx-auto",
        className
      )}
      {...props}
    >
      <h2
        id={headingId}
        className="font-display text-[28px] leading-tight font-semibold tracking-[-0.02em] md:text-[32px]"
      >
        {title}
      </h2>
      <div className="min-w-0">{children}</div>
    </section>
  );
}
