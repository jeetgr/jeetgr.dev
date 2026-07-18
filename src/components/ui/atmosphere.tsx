/**
 * Ambient page backdrop. Composed of theme-scoped layers so light and dark
 * feel like different places: light is an airy daylight blueprint (faint
 * drafting grid, soft glow), dark is a moody night-ops console (strong glow,
 * deep vignette). Purely decorative and sits behind all content.
 */
export function Atmosphere() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
      <div className="atmosphere-glow absolute inset-0" />
      <div className="atmosphere-grid absolute inset-0" />
      <div className="atmosphere-vignette absolute inset-0" />
      <svg
        className="atmosphere-grain text-foreground absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="atmosphere-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.82"
            numOctaves={2}
            stitchTiles="stitch"
          />
        </filter>
        <rect
          width="100%"
          height="100%"
          fill="currentColor"
          filter="url(#atmosphere-grain)"
        />
      </svg>
    </div>
  );
}
