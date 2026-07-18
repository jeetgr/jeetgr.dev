import type React from "react";

import { cn } from "@/lib/utils";

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-md font-mono text-xs tracking-wide uppercase transition-colors disabled:pointer-events-none disabled:opacity-50";

const variantClasses = {
  primary:
    "bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground",
  outline:
    "border-border-strong text-foreground hover:border-accent hover:text-accent border",
} as const;

const sizeClasses = {
  default: "px-5 py-3",
  md: "px-6 py-3.5",
} as const;

type ButtonVariant = keyof typeof variantClasses;
type ButtonSize = keyof typeof sizeClasses;

type ButtonVariantsProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

export function buttonVariants({
  variant = "primary",
  size = "default",
  className,
}: ButtonVariantsProps = {}) {
  return cn(baseClasses, variantClasses[variant], sizeClasses[size], className);
}

type ButtonProps = React.ComponentProps<"button"> & ButtonVariantsProps;

export function Button({
  className,
  variant = "primary",
  size = "default",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonVariants({ variant, size, className })}
      {...props}
    />
  );
}
