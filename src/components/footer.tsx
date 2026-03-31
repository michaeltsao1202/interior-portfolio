export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 text-xs text-muted-foreground">
        <div>&copy; {new Date().getFullYear()} 陳設計. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="#" className="transition-colors hover:text-foreground">
            LinkedIn
          </a>
          <a href="#" className="transition-colors hover:text-foreground">
            Instagram
          </a>
          <a href="#" className="transition-colors hover:text-foreground">
            Behance
          </a>
        </div>
      </div>
    </footer>
  );
}
