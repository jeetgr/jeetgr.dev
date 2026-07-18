import { cn } from "@/lib/utils";

type SectionLabelProps = {
  index: number | string;
  label: string;
  className?: string;
};

export function SectionLabel({ index, label, className }: SectionLabelProps) {
  return (
    <span className={cn("legend-key", className)} data-section={index}>
      {label}
    </span>
  );
}
