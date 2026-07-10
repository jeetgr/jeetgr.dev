import { createServerFn } from "@tanstack/react-start";
import { getCookie, setCookie } from "@tanstack/react-start/server";
import * as v from "valibot";

const storageKey = "app-theme";

const ThemeSchema = v.picklist(["light", "dark", "auto"]);

export type Theme = v.InferOutput<typeof ThemeSchema>;

export const getThemeServerFn = createServerFn().handler(() => {
  const storedTheme = getCookie(storageKey) ?? "auto";
  return v.parse(ThemeSchema, storedTheme);
});

export const setThemeServerFn = createServerFn()
  .validator(ThemeSchema)
  .handler(({ data }) => {
    setCookie(storageKey, data);
  });
