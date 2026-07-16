import {
  GithubIcon,
  Linkedin02Icon,
  NewTwitterIcon,
  Mail02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const socials = [
  { href: "https://github.com/jeetgr", icon: GithubIcon, label: "GitHub" },
  {
    href: "https://linkedin.com/in/jeetgr",
    icon: Linkedin02Icon,
    label: "LinkedIn",
  },
  { href: "https://twitter.com/jeetgr", icon: NewTwitterIcon, label: "X" },
  { href: "mailto:hello@jeetgr.dev", icon: Mail02Icon, label: "Email" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-border border-t">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-10 md:flex-row md:justify-between">
        <p className="text-muted font-mono text-xs">© {year} Jeet Gangwar</p>

        <div className="flex items-center gap-5">
          {socials.map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted hover:text-foreground transition-colors"
            >
              <HugeiconsIcon icon={icon} className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
