import { cn } from "@/lib/utils";

export function Textarea({
  className,
  ...props
}: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "border-border bg-surface text-foreground focus:border-border-strong aria-invalid:border-destructive w-full resize-none rounded-md border px-4 py-2.5 text-sm transition-colors outline-none",
        className
      )}
      {...props}
    />
  );
}
