import { Menu, X } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useEffect, useState } from "react";

import { ThemeToggle } from "@/components/layout/theme-toggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const mobileNavId = "mobile-nav";

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    // oxlint-disable-next-line typescript/consistent-return
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="bg-background/90 border-border sticky top-0 z-50 border-b backdrop-blur-lg">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8 lg:px-10">
        <a
          href="#home"
          className="font-display text-foreground text-lg font-medium tracking-tight"
        >
          Jeet Gangwar
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted hover:text-accent font-mono text-xs tracking-wide uppercase transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <ThemeToggle />
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls={mobileNavId}
          className="text-foreground grid size-9 place-items-center md:hidden"
          onClick={() => {
            setOpen((v) => !v);
          }}
        >
          {open ? (
            <HugeiconsIcon icon={X} className="size-5" />
          ) : (
            <HugeiconsIcon icon={Menu} className="size-5" />
          )}
        </button>
      </nav>

      {open && (
        <div
          id={mobileNavId}
          className="border-border bg-background border-b px-5 py-5 sm:px-8 md:hidden"
        >
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => {
                  setOpen(false);
                }}
                className="text-muted hover:text-accent font-mono text-xs tracking-wide uppercase"
              >
                {link.label}
              </a>
            ))}
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
}
