import { cn } from "@/lib/utils";

type SectionLabelProps = {
  index: number | string;
  label: string;
  className?: string;
};

export function SectionLabel({ index, label, className }: SectionLabelProps) {
  return (
    <span
      className={cn(
        "text-primary inline-flex items-center gap-3 font-mono text-xs",
        className
      )}
      data-section={index}
    >
      <span className="text-border-strong" aria-hidden="true">
        /
      </span>
      {label}
    </span>
  );
}
