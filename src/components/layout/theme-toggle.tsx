import { Monitor, Moon02Icon, Sun03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { IconSvgElement } from "@hugeicons/react";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

import { useTheme } from "./theme-provider";
import type { ThemeMode } from "./theme-provider";

const options: { value: ThemeMode; icon: IconSvgElement; label: string }[] = [
  { value: "light", icon: Sun03Icon, label: "Light" },
  { value: "dark", icon: Moon02Icon, label: "Dark" },
  { value: "auto", icon: Monitor, label: "Auto" },
];

export function ThemeToggle() {
  const { themeMode, resolvedTheme, setTheme } = useTheme();
  const reduced = useReducedMotion() ?? false;

  const activeTheme = themeMode === "auto" ? "auto" : resolvedTheme;

  return (
    <div
      role="radiogroup"
      aria-label="Theme"
      className="border-border bg-surface inline-flex max-w-fit items-center gap-1 rounded-lg border p-1"
    >
      {options.map(({ value, icon, label }) => {
        const isActive = activeTheme === value;
        return (
          <button
            key={value}
            type="button"
            // oxlint-disable-next-line jsx-a11y/prefer-tag-over-role
            role="radio"
            aria-checked={isActive}
            aria-label={label}
            onClick={() => {
              setTheme(value);
            }}
            className={cn(
              "relative rounded-md p-1.5 transition-colors",
              isActive
                ? "text-primary-foreground"
                : "text-muted hover:text-foreground"
            )}
          >
            {isActive && (
              <motion.span
                layoutId="theme-active"
                className="bg-primary absolute inset-0 rounded-md"
                transition={
                  reduced
                    ? { duration: 0 }
                    : { type: "spring", stiffness: 400, damping: 32 }
                }
              />
            )}
            <motion.span
              key={value}
              className="relative block"
              initial={reduced ? false : { rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.25 }}
            >
              <HugeiconsIcon icon={icon} className="size-4" />
            </motion.span>
          </button>
        );
      })}
    </div>
  );
}
