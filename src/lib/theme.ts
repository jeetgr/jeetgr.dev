export const themes = ["light", "dark", "system"] as const;

export type Theme = (typeof themes)[number];

export const THEME_STORAGE_KEY = "theme";

function isTheme(theme: string): theme is Theme {
  // @ts-expect-error the includes function is narrowing the types here which we don't want
  return themes.includes(theme);
}

export function getStoredTheme(): Theme {
  if (typeof window === "undefined") {
    return "system";
  }
  const storedTheme = localStorage.getItem(THEME_STORAGE_KEY) ?? "system";
  return isTheme(storedTheme) ? storedTheme : "system";
}

export function resolveTheme(theme: Theme): "light" | "dark" {
  if (theme === "system") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  return theme;
}

export function applyTheme(theme: Theme) {
  const resolved = resolveTheme(theme);
  document.documentElement.classList.toggle("dark", resolved === "dark");
  document.documentElement.style.colorScheme = resolved;
}

export function setTheme(theme: Theme) {
  localStorage.setItem(THEME_STORAGE_KEY, theme);
  applyTheme(theme);
}
