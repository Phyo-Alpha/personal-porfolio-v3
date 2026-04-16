import type { TechStack } from "@/constant/technologies";
import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";
import { Icon } from "@iconify/react";
import { SectionHeader } from "@/components/ui/section-header";

interface TechStackProps extends ComponentProps<"div"> {
  techs: TechStack[];
}

function TechStackContainer({ techs, className, ...props }: TechStackProps) {
  const half = Math.ceil(techs.length / 2);
  const rowOne = techs.slice(0, half);
  const rowTwo = techs.slice(half);

  return (
    <section
      id="tech"
      className="relative border-y border-border/60 bg-muted/20 py-20 md:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-dot opacity-50 mask-radial-fade"
        aria-hidden
      />
      <div className="container relative mx-auto px-4 space-y-10">
        <SectionHeader
          number="02"
          subtitle="Tech stack"
          title="Tools I wield daily"
        />

        {/* Marquee rows */}
        <div className="space-y-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <TechMarquee techs={rowOne} />
          <TechMarquee techs={rowTwo} reverse />
        </div>

        {/* Grid — still visible as backup on large screens */}
        <div
          className={cn(
            "grid grid-cols-2 gap-3 pt-6 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6",
            className
          )}
          {...props}
        >
          {techs.map((t) => (
            <div
              key={`${t.id}-${t.name}`}
              className="group relative flex items-center gap-3 overflow-hidden rounded-xl border border-border bg-card/60 p-4 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-primary/0 opacity-0 transition-opacity group-hover:opacity-100" />
              <Icon
                icon={t.icon}
                className="size-7 shrink-0 transition-transform group-hover:scale-110"
              />
              <span className="text-sm font-medium truncate">{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechMarquee({
  techs,
  reverse = false,
}: {
  techs: TechStack[];
  reverse?: boolean;
}) {
  const items = [...techs, ...techs];
  return (
    <div
      className={cn(
        "flex w-max gap-3",
        reverse ? "animate-marquee-reverse" : "animate-marquee"
      )}
    >
      {items.map((t, i) => (
        <div
          key={`${t.id}-${t.name}-${i}`}
          className="flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 backdrop-blur"
        >
          <Icon icon={t.icon} className="size-5 shrink-0" />
          <span className="text-sm font-medium whitespace-nowrap">
            {t.name}
          </span>
        </div>
      ))}
    </div>
  );
}

export { TechStackContainer };
