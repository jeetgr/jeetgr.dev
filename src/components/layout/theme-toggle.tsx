import { Monitor, Moon02Icon, Sun03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { IconSvgElement } from "@hugeicons/react";

import { useTheme } from "./theme-provider";
import type { ThemeMode } from "./theme-provider";

const options: { value: ThemeMode; icon: IconSvgElement; label: string }[] = [
  { value: "light", icon: Sun03Icon, label: "Light" },
  { value: "dark", icon: Moon02Icon, label: "Dark" },
  { value: "auto", icon: Monitor, label: "Auto" },
];

export function ThemeToggle() {
  const { themeMode, resolvedTheme, setTheme } = useTheme();

  const activeTheme = themeMode === "auto" ? "auto" : resolvedTheme;

  return (
    <div
      role="radiogroup"
      aria-label="Theme"
      className="border-border bg-surface inline-flex max-w-fit items-center gap-1 rounded-lg border p-1"
    >
      {options.map(({ value, icon, label }) => (
        <button
          key={value}
          type="button"
          // oxlint-disable-next-line jsx-a11y/prefer-tag-over-role
          role="radio"
          aria-checked={activeTheme === value}
          aria-label={label}
          onClick={() => {
            setTheme(value);
          }}
          className={`rounded-md p-1.5 transition-colors ${
            activeTheme === value
              ? "bg-primary text-primary-foreground"
              : "text-muted hover:text-foreground"
          }`}
        >
          <HugeiconsIcon icon={icon} className="size-4" />
        </button>
      ))}
    </div>
  );
}
