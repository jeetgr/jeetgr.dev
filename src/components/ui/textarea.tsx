import { cn } from "@/lib/utils";

import { fieldClasses } from "./input";

export function Textarea({
  className,
  ...props
}: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(fieldClasses, "block resize-y py-3", className)}
      {...props}
    />
  );
}
