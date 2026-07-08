import React, { createContext, use, useEffect, useState } from "react";

import { applyTheme, getStoredTheme, setTheme as persistTheme } from "./theme";
import type { Theme } from "./theme";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(getStoredTheme);

  useEffect(() => {
    applyTheme(theme);

    if (theme !== "system") {
      return;
    }

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = () => {
      applyTheme("system");
    };
    media.addEventListener("change", listener);
    // oxlint-disable-next-line typescript/consistent-return
    return () => {
      media.removeEventListener("change", listener);
    };
  }, [theme]);

  function setTheme(next: Theme) {
    persistTheme(next);
    setThemeState(next);
  }

  return <ThemeContext value={{ theme, setTheme }}>{children}</ThemeContext>;
}

export function useTheme() {
  const ctx = use(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
}
