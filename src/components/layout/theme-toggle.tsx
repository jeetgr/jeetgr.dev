import { Monitor, Moon, Sun } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import type { Theme } from "@/lib/theme";
import { useTheme } from "@/lib/theme-context";

const options: { value: Theme; icon: LucideIcon; label: string }[] = [
  { value: "light", icon: Sun, label: "Light" },
  { value: "dark", icon: Moon, label: "Dark" },
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
      {options.map(({ value, icon: Icon, label }) => (
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
          <Icon className="size-4" />
        </button>
      ))}
    </div>
  );
}
