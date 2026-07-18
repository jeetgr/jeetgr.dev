import {
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "motion/react";
import { useEffect, useState } from "react";

/**
 * A survey-scope cursor: full-viewport crosshair guides that track the pointer
 * with a live coordinate readout. Desktop pointers only; disabled for touch and
 * reduced-motion users.
 */
export function CursorCrosshair() {
  const reduced = useReducedMotion() ?? false;
  const [enabled, setEnabled] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const opacity = useMotionValue(0);

  const xLabel = useTransform(x, (v) => `X ${Math.round(v)}`.padEnd(6, " "));
  const yLabel = useTransform(y, (v) => `Y ${Math.round(v)}`.padEnd(6, " "));

  useEffect(() => {
    if (reduced || !window.matchMedia("(pointer: fine)").matches) {
      return;
    }
    setEnabled(true);

    const onMove = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      opacity.set(1);
    };
    const onLeave = (event: PointerEvent) => {
      if (!event.relatedTarget) {
        opacity.set(0);
      }
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerout", onLeave, { passive: true });
    // oxlint-disable-next-line typescript/consistent-return
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerout", onLeave);
    };
  }, [reduced, x, y, opacity]);

  if (!enabled) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-100"
      style={{ opacity }}
    >
      <motion.div
        className="bg-accent/15 absolute top-0 h-full w-px"
        style={{ x }}
      />
      <motion.div
        className="bg-accent/15 absolute left-0 h-px w-full"
        style={{ y }}
      />
      <motion.div className="absolute top-0 left-0" style={{ x, y }}>
        <span className="border-accent absolute top-[-3px] left-[-3px] size-1.5 rotate-45 border" />
        <div className="text-accent bg-background/70 border-border absolute top-3 left-3 border px-1.5 py-0.5 font-mono text-[0.6rem] leading-tight tracking-tight tabular-nums backdrop-blur-sm">
          <motion.span className="block">{xLabel}</motion.span>
          <motion.span className="block">{yLabel}</motion.span>
        </div>
      </motion.div>
    </motion.div>
  );
}
