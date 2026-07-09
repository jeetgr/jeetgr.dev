export const themes = ["light", "dark", "system"] as const;

export type Theme = (typeof themes)[number];

export const THEME_STORAGE_KEY = "theme";
export const DEFAULT_THEME = "light";

function isTheme(theme: string): theme is Theme {
  // @ts-expect-error the includes function is narrowing the types here which we don't want
  return themes.includes(theme);
}

export function getStoredTheme(): Theme {
  if (typeof window === "undefined") {
    return DEFAULT_THEME;
  }
  const storedTheme = localStorage.getItem(THEME_STORAGE_KEY) ?? DEFAULT_THEME;
  return isTheme(storedTheme) ? storedTheme : DEFAULT_THEME;
}

export function getThemeScript() {
  const key = JSON.stringify(THEME_STORAGE_KEY);
  const fallback = JSON.stringify(DEFAULT_THEME);

  return `(function(){try{var t=localStorage.getItem(${key});if(t!=='light'&&t!=='dark'&&t!=='system'){t=${fallback}}var d=matchMedia('(prefers-color-scheme: dark)').matches;var r=t==='system'?(d?'dark':'light'):t;var e=document.documentElement;e.classList.add(r);e.style.colorScheme=r}catch(e){}})();`;
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
