import { ScriptOnce } from "@tanstack/react-router";
import React, { createContext, use, useEffect, useState } from "react";

import {
  applyTheme,
  DEFAULT_THEME,
  getStoredTheme,
  getThemeScript,
  setTheme as persistTheme,
  THEME_STORAGE_KEY,
} from "./theme";
import type { Theme } from "./theme";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(getStoredTheme);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    setThemeState(
      stored === "light" || stored === "dark" || stored === "system"
        ? stored
        : DEFAULT_THEME
    );
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) {
      return;
    }
    applyTheme(theme);
  }, [theme, mounted]);

  useEffect(() => {
    if (!mounted || theme !== "system") {
      return;
    }

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      applyTheme("system");
    };
    media.addEventListener("change", onChange);
    // oxlint-disable-next-line typescript/consistent-return
    return () => {
      media.removeEventListener("change", onChange);
    };
  }, [theme, mounted]);

  function setTheme(next: Theme) {
    persistTheme(next);
    setThemeState(next);
  }

  return (
    <ThemeContext value={{ theme, setTheme }}>
      <ScriptOnce>{getThemeScript()}</ScriptOnce>
      {children}
    </ThemeContext>
  );
}

export function useTheme() {
  const ctx = use(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
}
