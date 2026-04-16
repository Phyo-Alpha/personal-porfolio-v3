import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps extends ComponentProps<"div"> {
  number: string;
  title: string;
  subtitle?: string;
  action?: ReactNode;
}

export function SectionHeader({
  number,
  title,
  subtitle,
  action,
  className,
  ...props
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
        className
      )}
      {...props}
    >
      <div className="space-y-2">
        <div className="flex items-center gap-3 text-xs font-medium tracking-widest text-primary uppercase">
          <span className="tabular-nums">{number}</span>
          <span className="h-px w-8 bg-primary/50" aria-hidden />
          <span>{subtitle ?? "section"}</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gradient-primary">
          {title}
        </h2>
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
