import { HugeiconsIcon } from "@hugeicons/react";
import {
  LinkedinIcon,
  GithubIcon,
  MailIcon,
  FileIcon,
  ArrowRight01Icon,
  Location01Icon,
} from "@hugeicons/core-free-icons";
import { PixelImage } from "@/components/ui/pixel-image";

export function Hero() {
  const currentYear = new Date().getFullYear();
  const age = currentYear - 2002;

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-border/60"
    >
      {/* Decorative background */}
      <div
        className="pointer-events-none absolute inset-0 bg-grid mask-radial-fade opacity-70"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[420px] w-[820px] rounded-full bg-primary/25 blur-[120px]"
        aria-hidden
      />

      <div className="container relative mx-auto px-4 py-20 md:py-28">
        <div className="flex flex-col-reverse items-start gap-12 md:flex-row md:items-center md:justify-between">
          <div className="flex-1 space-y-7">
            {/* Availability chip */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary backdrop-blur animate-reveal">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              Available for new opportunities
            </div>

            <div className="space-y-3 animate-reveal" style={{ animationDelay: "80ms" }}>
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="text-primary">$</span>
                <span className="animate-shimmer">whoami</span>
              </p>
              <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Salutations.
                <br />
                Name's{" "}
                <span className="text-gradient-primary">Edward</span>
                <span className="ml-1 inline-block h-[0.85em] w-[3px] translate-y-1 bg-primary animate-pulse align-middle" />
              </h1>
              <p className="text-base text-muted-foreground sm:text-lg">
                <span className="text-primary">&gt;</span> {age}yo software engineer{" "}
                <span className="inline-flex items-center gap-1 text-foreground">
                  <HugeiconsIcon icon={Location01Icon} size={14} strokeWidth={2} />
                  Myanmar 🇲🇲
                </span>
              </p>
            </div>

            <div
              className="max-w-2xl space-y-4 text-muted-foreground leading-relaxed animate-reveal"
              style={{ animationDelay: "160ms" }}
            >
              <p>
                Primarily <span className="text-foreground">full-stack</span> by
                profession, but when the occasion calls, I handle{" "}
                <span className="text-foreground">mobile development</span> and{" "}
                <span className="text-foreground">DevOps</span> tasks as well. I
                specialize in JavaScript and TypeScript, along with its
                ecosystem of tools, frameworks, and libraries.
              </p>
              <p>
                While working as a professional, I've contributed to dashboard
                web applications, mobile apps, and websites — ranging from
                logistics dashboards, sport websites, and enterprise-grade
                strategic assessment tools that measure how businesses are
                ready for digital transformation.
              </p>
              <p>
                Clients I've worked with include{" "}
                <span className="text-foreground">Singapore Business Federation</span>,{" "}
                <span className="text-foreground">Football Association of Singapore</span>,{" "}
                <span className="text-foreground">Care Channel International</span>, and the{" "}
                <span className="text-foreground">Malaysian Government Education Sector</span>.
              </p>
              <p className="text-sm">
                <span className="text-primary">//</span> Huge fan of Tanner's
                works and shadcn/ui.
              </p>
            </div>

            <div
              className="flex flex-wrap items-center gap-2 pt-2 animate-reveal"
              style={{ animationDelay: "240ms" }}
            >
              <a
                href="/Phyo-Pyae-Sone-CVFS.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:shadow-primary/40 hover:-translate-y-0.5"
              >
                <HugeiconsIcon icon={FileIcon} size={16} strokeWidth={2} />
                Download Resume
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  size={14}
                  strokeWidth={2}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
              <SocialPill
                href="https://www.linkedin.com/in/edward-phyo/"
                icon={LinkedinIcon}
                label="LinkedIn"
              />
              <SocialPill
                href="https://github.com/Phyo-Alpha"
                icon={GithubIcon}
                label="GitHub"
              />
              <SocialPill
                href="mailto:edwardphyo115@gmail.com"
                icon={MailIcon}
                label="Email"
              />
            </div>
          </div>

          <div className="relative shrink-0 animate-reveal" style={{ animationDelay: "120ms" }}>
            <div className="absolute -inset-6 rounded-[3rem] bg-primary/20 blur-3xl opacity-60" aria-hidden />
            <div className="relative">
              <PixelImage
                src="/profile.png"
                customGrid={{ rows: 4, cols: 6 }}
                grayscaleAnimation={true}
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-2 -left-4 flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium shadow-lg animate-float">
              <span className="size-1.5 rounded-full bg-primary" />
              currently building stuff
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialPill({
  href,
  icon,
  label,
}: {
  href: string;
  icon: Parameters<typeof HugeiconsIcon>[0]["icon"];
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground transition-all hover:border-primary/50 hover:text-foreground hover:-translate-y-0.5"
    >
      <HugeiconsIcon icon={icon} size={15} strokeWidth={2} />
      {label}
    </a>
  );
}
