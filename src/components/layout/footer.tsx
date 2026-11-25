export function Footer() {
  return (
    <footer className="border-line text-muted mx-6 flex max-w-[61rem] flex-wrap justify-between gap-4 border-t py-8 text-[15px] lg:mx-auto">
      <p>© {new Date().getFullYear()} Jeet Gangwar</p>
      <a href="#top" className="hover:text-foreground transition-colors">
        Back to top
      </a>
    </footer>
  );
}
