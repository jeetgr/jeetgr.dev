import type React from "react";

import { useSpotlight } from "@/lib/use-spotlight";
import { cn } from "@/lib/utils";

import { RevealItem } from "./reveal";

/** A bento tile: bordered surface with the cursor-following spotlight glow. */
export function Tile({
  className,
  children,
  ...props
}: React.ComponentProps<typeof RevealItem>) {
  const onSpotlight = useSpotlight();

  return (
    <RevealItem
      onPointerMove={onSpotlight}
      className={cn(
        "spotlight border-border bg-surface/50 relative rounded-lg border p-6",
        className
      )}
      {...props}
    >
      {children}
    </RevealItem>
  );
}
