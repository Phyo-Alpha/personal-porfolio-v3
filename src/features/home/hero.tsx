import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  LinkedinIcon,
  GithubIcon,
  MailIcon,
  FileIcon,
} from "@hugeicons/core-free-icons";
import { PixelImage } from "@/components/ui/pixel-image";
import { Page } from "@/components/ui/page";

export function Hero() {
  const currentYear = new Date().getFullYear();
  const age = currentYear - 2002;

  return (
    <Page id="home">
      <h1 className="text-4xl md:text-5xl font-bold">
        Salutations, Visitor. Name's Edward
      </h1>
      <div className="flex flex-col md:flex-row items-start gap-8">
        <div className="flex-1 space-y-4">
          <p className="text-lg text-muted-foreground">
            {age}yo software engineer from Myanmar 🇲🇲
          </p>
          <p className="text-muted-foreground max-w-2xl">
            Primarily full-stack by profession, but when occasion call, I
            handled mobile development and DevOps tasks as well. I specialized
            in Javascript and Typescript, along with its eco-system of tools,
            frameworks, and libraries.
          </p>
          <p className="text-muted-foreground max-w-2xl">
            While working as a professional, I have contributed in development
            of dashboard web applications, mobile app, and websites, ranging
            from logistics dashboard, sport websites and enterprise-grade
            strategic assessment tool to measure how business are ready for
            digital transformation for the future economy.
          </p>
          <p className="text-muted-foreground max-w-2xl">
            Clients that I worked with includes Singapore Business Federation,
            Football Associate of Singapore, Care Channel International, and
            Malaysian Government Education Sector.
          </p>
          <p>I am a huge fan of Tanner works and shadcn ui.</p>

          <div className="flex flex-wrap gap-3 pt-4">
            <Button variant="outline" size="sm" className="gap-2" asChild>
              <a
                href="/Phyo-Pyae-Sone-CVFS.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HugeiconsIcon icon={FileIcon} strokeWidth={2} />
                Resume
              </a>
            </Button>
            <Button variant="outline" size="sm" className="gap-2" asChild>
              <a
                href="https://www.linkedin.com/in/edward-phyo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HugeiconsIcon icon={LinkedinIcon} strokeWidth={2} />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="sm" className="gap-2" asChild>
              <a
                href="https://github.com/Phyo-Alpha"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HugeiconsIcon icon={GithubIcon} strokeWidth={2} />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="sm" className="gap-2" asChild>
              <a href="mailto:edwardphyo115@gmail.com">
                <HugeiconsIcon icon={MailIcon} strokeWidth={2} />
                Email
              </a>
            </Button>
          </div>
        </div>
        <PixelImage
          src="/profile.png"
          customGrid={{ rows: 4, cols: 6 }}
          grayscaleAnimation={true}
        />
      </div>
    </Page>
  );
}
