import { HugeiconsIcon } from "@hugeicons/react";
import {
  LinkedinIcon,
  GithubIcon,
  MailIcon,
  ArrowUpRight01Icon,
} from "@hugeicons/core-free-icons";

const SOCIALS = [
  {
    href: "https://www.linkedin.com/in/edward-phyo/",
    label: "LinkedIn",
    icon: LinkedinIcon,
  },
  {
    href: "https://github.com/Phyo-Alpha",
    label: "GitHub",
    icon: GithubIcon,
  },
  {
    href: "mailto:edwardphyo115@gmail.com",
    label: "Email",
    icon: MailIcon,
  },
] as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="relative mt-24 overflow-hidden border-t border-border/60"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-grid mask-fade-bottom opacity-40"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-40 left-1/2 -translate-x-1/2 h-[320px] w-[640px] rounded-full bg-primary/20 blur-[120px]"
        aria-hidden
      />

      <div className="container relative mx-auto px-4 py-20">
        <div className="mx-auto max-w-3xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Let's build something great
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Have a project in mind?
          </h2>
          <p className="text-muted-foreground">
            I'm currently open to new opportunities and collaborations. Drop a
            line — I'll get back to you.
          </p>
          <a
            href="mailto:edwardphyo115@gmail.com"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-primary/40"
          >
            <HugeiconsIcon icon={MailIcon} size={16} strokeWidth={2} />
            edwardphyo115@gmail.com
            <HugeiconsIcon
              icon={ArrowUpRight01Icon}
              size={14}
              strokeWidth={2}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        <div className="mx-auto mt-16 flex max-w-5xl flex-col items-center justify-between gap-6 border-t border-border/60 pt-8 sm:flex-row">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="flex size-7 items-center justify-center rounded-md border border-border bg-card text-primary text-xs font-bold">
              E
            </span>
            <span>
              © {currentYear} Edward Phyo · Built with{" "}
              <span className="text-primary">React</span> &{" "}
              <span className="text-primary">Tailwind</span>
            </span>
          </div>

          <div className="flex items-center gap-1">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex size-9 items-center justify-center rounded-full border border-transparent text-muted-foreground transition-colors hover:border-border hover:bg-card hover:text-foreground"
              >
                <HugeiconsIcon icon={s.icon} size={16} strokeWidth={2} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
