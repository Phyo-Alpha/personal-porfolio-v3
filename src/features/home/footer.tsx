import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { LinkedinIcon, GithubIcon, MailIcon } from "@hugeicons/core-free-icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex gap-4">
            <Button variant="ghost" size="sm" className="gap-2" asChild>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HugeiconsIcon icon={LinkedinIcon} strokeWidth={2} />
                LinkedIn
              </a>
            </Button>
            <Button variant="ghost" size="sm" className="gap-2" asChild>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HugeiconsIcon icon={GithubIcon} strokeWidth={2} />
                GitHub
              </a>
            </Button>
            <Button variant="ghost" size="sm" className="gap-2" asChild>
              <a href="mailto:email@example.com">
                <HugeiconsIcon icon={MailIcon} strokeWidth={2} />
                Email
              </a>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            © {currentYear} personal-portfolio.com | privacy?
          </p>
        </div>
      </div>
    </footer>
  );
}
