import { cn } from "@/lib/utils";

export function FieldGroup({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className={cn("flex flex-col gap-6", className)} {...props} />;
}

export function Field({
  className,
  ...props
}: React.ComponentProps<"div"> & { "data-invalid"?: boolean }) {
  return (
    <div
      // oxlint-disable-next-line jsx-a11y/prefer-tag-over-role
      role="group"
      className={cn(
        "data-[invalid=true]:text-destructive flex flex-col gap-2",
        className
      )}
      {...props}
    />
  );
}

export function FieldLabel({
  className,
  htmlFor,
  ...props
}: React.ComponentProps<"label">) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn("text-muted text-sm", className)}
      {...props}
    />
  );
}

export function FieldDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return <p className={cn("text-muted text-xs", className)} {...props} />;
}

export function FieldError({
  errors,
  className,
}: {
  errors?: ({ message?: string } | string | undefined)[];
  className?: string;
}) {
  if (!errors || errors.length === 0) {
    return null;
  }

  return (
    <p role="alert" className={cn("text-destructive text-xs", className)}>
      {errors
        .map((e) => (typeof e === "string" ? e : e?.message))
        .filter(Boolean)
        .join(", ")}
    </p>
  );
}
