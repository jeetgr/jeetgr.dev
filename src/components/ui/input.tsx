import { cn } from "@/lib/utils";

export function Input({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "border-border text-foreground focus:border-primary aria-invalid:border-destructive w-full rounded-none border-0 border-b bg-transparent px-0 py-3 text-sm transition-colors outline-none",
        className
      )}
      {...props}
    />
  );
}
