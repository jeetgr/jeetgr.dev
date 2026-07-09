import { cn } from "@/lib/utils";

export function Input({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "border-border bg-surface text-foreground focus:border-border-strong aria-invalid:border-destructive w-full rounded-md border px-4 py-2.5 text-sm transition-colors outline-none",
        className
      )}
      {...props}
    />
  );
}
