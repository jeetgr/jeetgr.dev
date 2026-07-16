import { clsx } from "clsx";
import type { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Strip newlines from values used in email headers. */
export function sanitizeEmailHeaderValue(value: string): string {
  return value.replaceAll(/[\r\n]+/gu, " ").trim();
}
