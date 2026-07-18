import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import type React from "react";
import { useRef } from "react";

import { spring } from "@/lib/motion";

type MagneticProps = {
  children: React.ReactNode;
  /** How far the element leans toward the pointer, in px. */
  strength?: number;
  className?: string;
};

/** Wraps a child so it leans toward the pointer on hover, then springs back. */
export function Magnetic({
  children,
  strength = 16,
  className,
}: MagneticProps) {
  const reduced = useReducedMotion() ?? false;
  const ref = useRef<HTMLSpanElement>(null);
  const x = useSpring(useMotionValue(0), spring);
  const y = useSpring(useMotionValue(0), spring);

  if (reduced) {
    return <span className={className}>{children}</span>;
  }

  const onPointerMove = (event: React.PointerEvent<HTMLSpanElement>) => {
    const el = ref.current;
    if (!el) {
      return;
    }
    const rect = el.getBoundingClientRect();
    const relX = event.clientX - (rect.left + rect.width / 2);
    const relY = event.clientY - (rect.top + rect.height / 2);
    x.set((relX / (rect.width / 2)) * strength);
    y.set((relY / (rect.height / 2)) * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span
      ref={ref}
      className={className}
      style={{ x, y, display: "inline-flex" }}
      onPointerMove={onPointerMove}
      onPointerLeave={reset}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.span>
  );
}
