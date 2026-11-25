import { Menu, X } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useEffect, useRef, useState } from "react";

import { ThemeToggle } from "@/components/layout/theme-toggle";

const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const mobileNavId = "mobile-nav";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    // oxlint-disable-next-line typescript/consistent-return
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="bg-background/90 sticky top-0 z-50 backdrop-blur-md">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6"
      >
        <a
          href="#top"
          className="font-display text-[19px] font-semibold tracking-[-0.01em]"
        >
          Jeet Gangwar
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-body hover:text-foreground text-[15px] font-medium transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            ref={menuButtonRef}
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls={mobileNavId}
            className="hover:bg-panel grid size-11 place-items-center rounded-[10px] transition-colors duration-150"
            onClick={() => {
              setOpen((v) => !v);
            }}
          >
            <HugeiconsIcon
              icon={open ? X : Menu}
              className="size-5"
              strokeWidth={1.8}
            />
          </button>
        </div>
      </nav>

      {open && (
        <div
          id={mobileNavId}
          className="border-line bg-background border-b px-6 pb-4 md:hidden"
        >
          <div className="flex flex-col">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => {
                  setOpen(false);
                }}
                className="py-3 text-[17px] font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
