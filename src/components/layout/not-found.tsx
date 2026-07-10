import { Link } from "@tanstack/react-router";

export function NotFound() {
  return (
    <div className="mx-auto flex min-h-[80vh] max-w-5xl flex-col items-center justify-center px-6 text-center">
      <span className="text-muted font-mono text-xs tracking-widest">
        SEC.404 — NOT FOUND
      </span>

      <h1 className="font-display text-foreground mt-6 text-6xl font-medium md:text-8xl">
        404
      </h1>

      <p className="text-muted mt-4 max-w-sm">
        This route doesn't exist. It either moved, or it was never built —
        unlike everything else on this site.
      </p>

      <Link
        to="/"
        className="bg-primary text-primary-foreground mt-8 rounded-md px-6 py-2.5 text-sm font-medium transition-opacity hover:opacity-90"
      >
        Back to home
      </Link>
    </div>
  );
}
