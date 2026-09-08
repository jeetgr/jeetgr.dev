import { Menu, X } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

import { ThemeToggle } from "@/components/layout/theme-toggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const sectionIds = ["home", ...links.map((link) => link.href.slice(1))];

const mobileNavId = "mobile-nav";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const reduced = useReducedMotion() ?? false;

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.querySelector(`#${id}`))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        let best: IntersectionObserverEntry | null = null;
        for (const entry of entries) {
          if (
            entry.isIntersecting &&
            (best === null || entry.intersectionRatio > best.intersectionRatio)
          ) {
            best = entry;
          }
        }
        if (best !== null) {
          setActive(best.target.id);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    for (const section of sections) {
      observer.observe(section);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

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
          {links.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={`relative font-mono text-xs tracking-wide uppercase transition-colors ${
                  isActive
                    ? "text-accent-text"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute -bottom-2 left-1/2 ml-[-3px] block size-1.5"
                    transition={
                      reduced
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 400, damping: 30 }
                    }
                  >
                    <span className="bg-accent block size-1.5 rotate-45" />
                  </motion.span>
                )}
              </a>
            );
          })}
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
                className={`font-mono text-xs tracking-wide uppercase ${
                  active === link.href.slice(1)
                    ? "text-accent-text"
                    : "text-muted hover:text-accent-text"
                }`}
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
