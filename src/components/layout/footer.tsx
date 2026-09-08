import {
  GithubIcon,
  Linkedin02Icon,
  NewTwitterIcon,
  Mail02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { motion, useReducedMotion } from "motion/react";

import { DURATION, EASE } from "@/lib/motion";
import { useSpotlight } from "@/lib/use-spotlight";

const wordmarkClasses =
  "font-display text-[clamp(3rem,17vw,15rem)] leading-[0.78] font-semibold tracking-[-0.045em]";

const socials = [
  { href: "https://github.com/jeetgr", icon: GithubIcon, label: "GitHub" },
  {
    href: "https://linkedin.com/in/jeetgr",
    icon: Linkedin02Icon,
    label: "LinkedIn",
  },
  { href: "https://twitter.com/jeetgr", icon: NewTwitterIcon, label: "X" },
  { href: "mailto:hello@jeetgr.dev", icon: Mail02Icon, label: "Email" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="contour-rule mx-auto max-w-6xl" aria-hidden="true" />
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-end md:justify-between lg:px-10">
        <div>
          <p className="font-display text-lg font-medium">Jeet Gangwar</p>
          <p className="coord mt-1.5">Uttarakhand, India · © {year}</p>
        </div>

        <div className="flex items-center gap-5">
          {socials.map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted hover:text-foreground transition-colors"
            >
              <HugeiconsIcon icon={icon} className="size-4" />
            </a>
          ))}
        </div>
      </div>

      <Wordmark />
    </footer>
  );
}

/** Oversized wordmark that lights up in accent where the cursor passes. */
function Wordmark() {
  const reduced = useReducedMotion() ?? false;
  const onSpotlight = useSpotlight();

  return (
    <div
      onPointerMove={reduced ? undefined : onSpotlight}
      className="relative mx-auto max-w-6xl overflow-hidden px-5 pt-6 pb-8 select-none sm:px-8 lg:px-10"
      aria-hidden="true"
    >
      <motion.p
        className={`text-foreground/[0.07] ${wordmarkClasses}`}
        initial={reduced ? { opacity: 1 } : { opacity: 0, y: "16%" }}
        whileInView={{ opacity: 1, y: "0%" }}
        viewport={{ once: true, margin: "-12% 0px" }}
        transition={{ duration: DURATION.slow, ease: EASE }}
      >
        jeetgr.dev
      </motion.p>
      {!reduced && (
        <p
          className={`text-accent-text pointer-events-none absolute inset-0 px-5 pt-6 sm:px-8 lg:px-10 ${wordmarkClasses} mask-[radial-gradient(circle_14rem_at_var(--mx,-300px)_var(--my,50%),#000_0%,transparent_70%)]`}
        >
          jeetgr.dev
        </p>
      )}
    </div>
  );
}
