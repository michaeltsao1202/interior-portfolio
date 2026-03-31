import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-lg font-semibold tracking-wider">
          陳<span className="text-muted-foreground">設計</span>
        </Link>
        <nav className="flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#works" className="transition-colors hover:text-foreground">
            作品
          </a>
          <a
            href="#experience"
            className="transition-colors hover:text-foreground"
          >
            經歷
          </a>
          <a href="#skills" className="transition-colors hover:text-foreground">
            技能
          </a>
          <a href="#about" className="transition-colors hover:text-foreground">
            關於我
          </a>
          <a
            href="#contact"
            className="inline-flex items-center border border-border px-4 py-1.5 text-foreground transition-colors hover:bg-accent"
          >
            聯絡我
          </a>
        </nav>
      </div>
    </header>
  );
}
