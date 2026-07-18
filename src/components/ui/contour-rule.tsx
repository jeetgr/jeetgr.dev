import { motion, useReducedMotion } from "motion/react";

import { DURATION, EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * A dashed survey rule that draws itself in from the left as it scrolls into
 * view, with a small tick marker riding the leading edge.
 */
export function ContourRule({ className }: { className?: string }) {
  const reduced = useReducedMotion() ?? false;

  if (reduced) {
    return (
      <div
        className={cn("contour-rule w-full", className)}
        aria-hidden="true"
      />
    );
  }

  return (
    <div className={cn("relative w-full", className)} aria-hidden="true">
      <motion.div
        className="contour-rule origin-left"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: DURATION.slow, ease: EASE }}
      />
      <motion.span
        className="border-accent absolute top-1/2 size-1.5 border bg-transparent"
        style={{ translateY: "-50%", rotate: 45 }}
        initial={{ left: "0%", opacity: 0 }}
        whileInView={{ left: "100%", opacity: [0, 1, 1, 0] }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: DURATION.slow, ease: EASE }}
      />
    </div>
  );
}
