import type { TechStack } from "@/constant/technologies";
import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";
import { Icon } from "@iconify/react";

interface TechStackProps extends ComponentProps<"div"> {
  techs: TechStack[];
}
function TechStackContainer({ techs, className, ...props }: TechStackProps) {
  return (
    <section id="tech" className="space-y-4 container mx-auto px-4 py-16">
      <h2 className="text-3xl font-semibold">Technologies that I used</h2>
      <div
        className={cn(
          className,
          "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4",
        )}
        {...props}
      >
        {techs.map((t) => (
          <div
            key={t.id}
            className="flex items-center gap-2 border rounded-lg bg-card p-4"
          >
            <Icon icon={t.icon} className="size-8" />
            <span className="text-sm font-medium">{t.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export { TechStackContainer };
