import { cn } from "@/lib/utils";

export function Textarea({
  className,
  ...props
}: React.ComponentProps<"textarea">) {
  return (
    <span className="relative block">
      <textarea
        className={cn(
          "peer border-border text-foreground focus:border-primary aria-invalid:border-destructive block w-full resize-none rounded-none border-0 border-b bg-transparent px-0 py-3 text-sm transition-colors outline-none",
          className
        )}
        {...props}
      />
      <span
        aria-hidden="true"
        className="bg-accent absolute -bottom-px left-0 h-0.5 w-full origin-left scale-x-0 transition-transform duration-300 ease-out peer-focus:scale-x-100"
      />
    </span>
  );
}
