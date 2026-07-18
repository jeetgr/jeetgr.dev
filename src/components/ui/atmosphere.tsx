/**
 * Ambient page backdrop: a soft primary-tinted glow, a gentle edge vignette,
 * and a fine film grain for depth. Purely decorative, sits behind all content,
 * and reads theme tokens so it adapts to light/dark.
 */
export function Atmosphere() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 45% at 50% -5%, color-mix(in oklab, var(--color-primary) 20%, transparent), transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 110% at 50% 42%, transparent 58%, rgb(0 0 0 / 0.22) 100%)",
        }}
      />
      <svg
        className="text-foreground absolute inset-0 h-full w-full opacity-[0.045]"
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
