import { Moon02Icon, Sun03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={() => {
        setTheme(isDark ? "light" : "dark");
      }}
      className="text-body hover:text-foreground hover:bg-panel grid size-11 place-items-center rounded-[10px] transition-colors duration-150"
    >
      {/* Icon follows the html class so it is right before hydration. */}
      <HugeiconsIcon
        icon={Moon02Icon}
        className="size-5 dark:hidden"
        strokeWidth={1.8}
      />
      <HugeiconsIcon
        icon={Sun03Icon}
        className="hidden size-5 dark:block"
        strokeWidth={1.8}
      />
    </button>
  );
}
