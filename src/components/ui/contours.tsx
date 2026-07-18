import { cn } from "@/lib/utils";

const CENTER_X = 560;
const CENTER_Y = 300;

// One wonky closed loop; nested at growing scales it reads as an
// elevation contour set plotted around a single peak.
const LOOP =
  "M 560 190 C 636 182 700 224 706 300 C 712 378 662 442 566 452 C 470 462 396 420 392 332 C 388 250 470 198 560 190 Z";

const SCALES = [0.42, 0.72, 1.02, 1.34, 1.68, 2.04, 2.42, 2.82];

export function Contours({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 900 600"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
      className={cn("contour-field", className)}
    >
      {SCALES.map((scale, i) => (
        <path
          key={scale}
          d={LOOP}
          stroke="currentColor"
          strokeWidth={1}
          transform={`translate(${CENTER_X} ${CENTER_Y}) scale(${scale}) translate(${-CENTER_X} ${-CENTER_Y})`}
          opacity={1 - i * 0.085}
        />
      ))}
      <circle cx={CENTER_X} cy={CENTER_Y} r={3} fill="currentColor" />
    </svg>
  );
}
