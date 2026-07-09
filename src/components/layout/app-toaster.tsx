import { Toaster } from "sonner";

import { useTheme } from "@/lib/theme-context";

export function AppToaster() {
  const { theme } = useTheme();
  return (
    <Toaster
      theme={theme === "system" ? "system" : theme}
      position="bottom-right"
      richColors
    />
  );
}
