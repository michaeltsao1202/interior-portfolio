export function Contact() {
  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Get In Touch
          </p>
          <h2 className="text-3xl font-light tracking-tight">
            對我的作品有興趣？
          </h2>
          <p className="mt-4 text-muted-foreground">
            歡迎來信聊聊，無論是工作機會或設計交流，我都很期待。
          </p>

          {/* CTA Button */}
          <a
            href="mailto:designer@example.com"
            className="mt-8 inline-block bg-foreground px-10 py-4 text-sm font-medium tracking-wider text-background transition-opacity hover:opacity-90"
          >
            寄信給我 →
          </a>

          {/* Contact details */}
          <div className="mt-12 flex flex-wrap justify-center gap-10 text-sm text-muted-foreground">
            <div>
              <div className="mb-1 text-xs uppercase tracking-widest text-muted-foreground/60">
                Email
              </div>
              <div>designer@example.com</div>
            </div>
            <div>
              <div className="mb-1 text-xs uppercase tracking-widest text-muted-foreground/60">
                電話
              </div>
              <div>0912-345-678</div>
            </div>
            <div>
              <div className="mb-1 text-xs uppercase tracking-widest text-muted-foreground/60">
                所在地
              </div>
              <div>台北市</div>
            </div>
          </div>

          {/* Social links */}
          <div className="mt-8 flex justify-center gap-6 text-sm text-muted-foreground">
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

          {/* Resume download placeholder */}
          <div className="mt-10 border-t border-border pt-8">
            <a
              href="#"
              className="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                />
              </svg>
              下載完整履歷 (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
