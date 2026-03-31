export function Hero() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      {/* Avatar placeholder */}
      <div className="mb-8 flex h-28 w-28 items-center justify-center rounded-full border border-border bg-card">
        <span className="text-3xl text-muted-foreground/50">照片</span>
      </div>

      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-muted-foreground">
        Interior Designer
      </p>
      <h1 className="mb-4 text-4xl font-light tracking-tight sm:text-5xl md:text-6xl">
        嗨，我是<span className="font-semibold">陳設計</span>
      </h1>
      <p className="mb-2 max-w-lg text-lg text-muted-foreground">
        資深室內設計師・8 年經驗
      </p>
      <p className="max-w-md text-sm text-muted-foreground/80">
        擅長住宅與商業空間設計，從概念發想到工地落地，
        <br />
        用設計為每個空間說一個好故事。
      </p>

      <div className="mt-10 flex gap-4">
        <a
          href="#works"
          className="border border-border px-8 py-3 text-sm tracking-wider transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          瀏覽作品
        </a>
        <a
          href="#contact"
          className="bg-foreground px-8 py-3 text-sm tracking-wider text-background transition-opacity hover:opacity-90"
        >
          與我聯繫
        </a>
      </div>

      {/* Quick stats */}
      <div className="mt-16 flex gap-12 text-center">
        <div>
          <div className="font-mono text-2xl font-semibold">50+</div>
          <div className="mt-1 text-xs text-muted-foreground">完成專案</div>
        </div>
        <div>
          <div className="font-mono text-2xl font-semibold">8</div>
          <div className="mt-1 text-xs text-muted-foreground">年資歷</div>
        </div>
        <div>
          <div className="font-mono text-2xl font-semibold">3</div>
          <div className="mt-1 text-xs text-muted-foreground">設計獎項</div>
        </div>
      </div>
    </section>
  );
}
