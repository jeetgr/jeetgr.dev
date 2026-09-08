import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

const TICKS = Array.from({ length: 11 }, (_, i) => i * 10);

/**
 * A fixed survey-style elevation rail on the right edge: tick marks with a
 * marker that descends as the page scrolls, plus a live percentage readout.
 */
export function ScrollGauge() {
  const reduced = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });
  const value = reduced ? scrollYProgress : progress;

  const markerTop = useTransform(value, [0, 1], ["0%", "100%"]);
  const readout = useTransform(value, (v) =>
    String(Math.round(v * 100)).padStart(3, "0")
  );

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed top-1/2 right-5 z-40 hidden h-[42vh] -translate-y-1/2 lg:block"
    >
      <div className="bg-border relative mx-auto h-full w-px">
        {TICKS.map((tick) => {
          const isCardinal = tick % 50 === 0;
          return (
            <span
              key={tick}
              className="bg-border absolute right-0 h-px"
              style={{
                top: `${tick}%`,
                width: isCardinal ? 10 : 5,
              }}
            />
          );
        })}

        <motion.div
          className="absolute right-0 flex -translate-y-1/2 items-center gap-2"
          style={{ top: markerTop }}
        >
          <span className="text-accent-text font-mono text-[0.6rem] tracking-tight tabular-nums">
            ELEV <motion.span className="inline-block">{readout}</motion.span>
          </span>
          <span className="bg-accent size-1.5 rotate-45" />
        </motion.div>
      </div>
    </div>
  );
}
