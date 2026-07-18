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
    <footer>
      <div className="border-border mx-auto flex max-w-7xl flex-col gap-8 border-t px-5 py-10 sm:px-8 md:flex-row md:items-end md:justify-between lg:px-12">
        <div>
          <p className="font-display text-lg font-semibold">Jeet Gangwar</p>
          <p className="text-muted mt-1 text-sm">
            Made in Uttarakhand · © {year}
          </p>
        </div>

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
