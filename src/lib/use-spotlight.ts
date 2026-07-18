import { useCallback } from "react";
import type React from "react";

/**
 * Tracks the pointer within an element and exposes its position as `--mx`/`--my`
 * CSS variables, which the `.spotlight` class uses to render a cursor-following
 * glow. Attach the returned handler to `onPointerMove` on a `.spotlight` element.
 */
export function useSpotlight() {
  return useCallback((event: React.PointerEvent<HTMLElement>) => {
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }, []);
}
