import { cn } from "@/lib/utils";

export const fieldClasses =
  "border-field bg-background text-foreground focus:border-foreground aria-invalid:border-destructive w-full rounded-[10px] border px-3.5 text-base transition-[border-color] duration-150 outline-none focus-visible:outline-none focus:ring-1 focus:ring-foreground";

export function Input({ className, ...props }: React.ComponentProps<"input">) {
  return <input className={cn(fieldClasses, "h-12", className)} {...props} />;
}
