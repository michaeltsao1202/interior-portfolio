export function About() {
  return (
    <section id="about" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              About Us
            </p>
            <h2 className="text-3xl font-light tracking-tight">關於我們</h2>
          </div>
          <div className="space-y-4 text-muted-foreground">
            <p>
              INTERIOR STUDIO
              成立於台北，是一間專注於住宅與商業空間的室內設計工作室。我們相信好的設計不只是美觀，更是一種生活態度。
            </p>
            <p>
              從空間規劃、材質選配到軟裝佈置，我們的團隊以細膩的觀察力與豐富的實務經驗，為每位業主量身打造獨一無二的空間體驗。
            </p>
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div>
                <div className="font-mono text-2xl font-semibold text-foreground">
                  50+
                </div>
                <div className="mt-1 text-xs">完成案例</div>
              </div>
              <div>
                <div className="font-mono text-2xl font-semibold text-foreground">
                  8
                </div>
                <div className="mt-1 text-xs">年經驗</div>
              </div>
              <div>
                <div className="font-mono text-2xl font-semibold text-foreground">
                  12
                </div>
                <div className="mt-1 text-xs">設計師</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
