import { Monitor, Moon02Icon, Sun03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { IconSvgElement } from "@hugeicons/react";
import { useRouteContext, useRouter } from "@tanstack/react-router";

import { setThemeServerFn } from "@/lib/theme";
import type { Theme } from "@/lib/theme";

const options: { value: Theme; icon: IconSvgElement; label: string }[] = [
  { value: "light", icon: Sun03Icon, label: "Light" },
  { value: "dark", icon: Moon02Icon, label: "Dark" },
  { value: "auto", icon: Monitor, label: "Auto" },
];

export function ThemeToggle() {
  const { theme } = useRouteContext({ from: "__root__" });
  const router = useRouter();

  async function setTheme(newTheme: Theme) {
    await setThemeServerFn({
      data: newTheme,
    });

    await router.invalidate();
  }

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
          aria-checked={theme === value}
          aria-label={label}
          onClick={() => {
            void setTheme(value);
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
