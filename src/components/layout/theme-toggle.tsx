import { Monitor, Moon02Icon, Sun03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { IconSvgElement } from "@hugeicons/react";

import type { Theme } from "@/lib/theme";
import { useTheme } from "@/lib/theme-context";

const options: { value: Theme; icon: IconSvgElement; label: string }[] = [
  { value: "light", icon: Sun03Icon, label: "Light" },
  { value: "dark", icon: Moon02Icon, label: "Dark" },
  { value: "system", icon: Monitor, label: "System" },
];

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      role="radiogroup"
      aria-label="Theme"
      className="border-border bg-surface inline-flex items-center gap-1 rounded-lg border p-1"
    >
      {options.map(({ value, icon, label }) => (
        <button
          key={value}
          type="button"
          // oxlint-disable-next-line jsx-a11y/prefer-tag-over-role
          role="radio"
          aria-checked={theme === value}
          aria-label={label}
          onClick={() => {
            setTheme(value);
          }}
          className={`rounded-md p-1.5 transition-colors ${
            theme === value
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
