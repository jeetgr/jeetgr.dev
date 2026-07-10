import { useRouteContext } from "@tanstack/react-router";
import { Toaster } from "sonner";

export function AppToaster() {
  const { theme } = useRouteContext({ from: "__root__" });
  return (
    <Toaster
      theme={theme === "auto" ? "system" : theme}
      position="bottom-right"
      richColors
    />
  );
}
