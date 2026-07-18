import { cn } from "@/lib/utils";

export function Textarea({
  className,
  ...props
}: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "border-border text-foreground focus:border-primary aria-invalid:border-destructive w-full resize-none rounded-none border-0 border-b bg-transparent px-0 py-3 text-sm transition-colors outline-none",
        className
      )}
      {...props}
    />
  );
}
