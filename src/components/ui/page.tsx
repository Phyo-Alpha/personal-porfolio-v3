import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

function Page({ className, children, ...props }: ComponentProps<"section">) {
  return (
    <section
      className={cn(
        className,
        "container mx-auto px-4 py-16 md:py-24 space-y-8",
      )}
      {...props}
    >
      {children}
    </section>
  );
}

export { Page };
