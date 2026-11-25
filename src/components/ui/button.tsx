import type React from "react";

import { cn } from "@/lib/utils";

const baseClasses =
  "inline-flex h-12 items-center justify-center gap-2 rounded-[10px] px-5.5 text-[15px] font-semibold transition-[scale,background-color,opacity] duration-150 ease-out not-disabled:active:scale-[0.96] disabled:opacity-60 [-webkit-tap-highlight-color:transparent]";

const variantClasses = {
  primary: "bg-foreground text-background hover:opacity-85",
  secondary: "bg-panel text-foreground hover:bg-panel-hover",
} as const;

type ButtonVariantsProps = {
  variant?: keyof typeof variantClasses;
  className?: string;
};

export function buttonVariants({
  variant = "primary",
  className,
}: ButtonVariantsProps = {}) {
  return cn(baseClasses, variantClasses[variant], className);
}

type ButtonProps = React.ComponentProps<"button"> & ButtonVariantsProps;

export function Button({
  className,
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonVariants({ variant, className })}
      {...props}
    />
  );
}
