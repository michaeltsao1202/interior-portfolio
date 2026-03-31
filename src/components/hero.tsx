export function Hero() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="mb-4 text-sm uppercase tracking-[0.3em] text-muted-foreground">
        Interior Design Studio
      </p>
      <h1 className="mb-6 text-4xl font-light tracking-tight sm:text-5xl md:text-6xl">
        打造您的
        <br />
        <span className="font-semibold">理想空間</span>
      </h1>
      <p className="max-w-md text-muted-foreground">
        我們用心為每個空間注入靈魂，從概念到落地，陪您走過每一步。
      </p>
      <a
        href="#works"
        className="mt-10 border border-border px-8 py-3 text-sm tracking-wider transition-colors hover:bg-accent hover:text-accent-foreground"
      >
        瀏覽作品
      </a>
    </section>
  );
}
