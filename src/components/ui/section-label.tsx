import { cn } from "@/lib/utils";

type SectionLabelProps = {
  index: number | string;
  label: string;
  className?: string;
};

function formatSectionIndex(index: number | string) {
  return typeof index === "number" ? String(index).padStart(2, "0") : index;
}

export function SectionLabel({ index, label, className }: SectionLabelProps) {
  return (
    <span
      className={cn("text-muted font-mono text-xs tracking-widest", className)}
    >
      SEC.{formatSectionIndex(index)} — {label}
    </span>
  );
}
