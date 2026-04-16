import { Link, useRouterState } from "@tanstack/react-router";
import { HugeiconsIcon } from "@hugeicons/react";
import { FileIcon } from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
] as const;

export function Navigation() {
  const {
    location: { pathname },
  } = useRouterState();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/70 backdrop-blur-xl supports-backdrop-filter:bg-background/50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link
          to="/"
          className="group flex items-center gap-2 text-sm font-bold tracking-tight"
        >
          <span className="flex size-8 items-center justify-center rounded-md border border-border bg-card text-primary shadow-xs transition-colors group-hover:border-primary/50">
            <span className="font-bold">E</span>
          </span>
          <span className="hidden sm:inline">
            edward<span className="text-primary">.dev</span>
          </span>
        </Link>

        <nav className="flex items-center gap-1 rounded-full border border-border bg-card/50 p-1 backdrop-blur">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.to === "/"
                ? pathname === "/"
                : pathname.startsWith(link.to);
            return (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "relative rounded-full px-4 py-1.5 text-xs font-medium transition-colors sm:text-sm",
                  isActive
                    ? "bg-primary/15 text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <a
          href="/Phyo-Pyae-Sone-CVFS.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/60 hover:text-primary sm:inline-flex"
        >
          <HugeiconsIcon icon={FileIcon} size={14} strokeWidth={2} />
          Resume
        </a>
      </div>
    </header>
  );
}
