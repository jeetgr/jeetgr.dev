import { Link } from "@tanstack/react-router";

import { buttonVariants } from "@/components/ui/button";

export function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70svh] max-w-5xl flex-col justify-center px-6 py-20">
      <h1 className="font-display text-[clamp(2.5rem,6vw,4rem)] leading-none font-semibold tracking-[-0.03em]">
        Page not found
      </h1>
      <p className="text-body mt-5 max-w-[46ch] text-[17px] leading-relaxed">
        This address doesn’t match any page. Check the link, or head back to the
        home page.
      </p>
      <Link to="/" className={buttonVariants({ className: "mt-8 w-fit" })}>
        Go to home page
      </Link>
    </div>
  );
}
