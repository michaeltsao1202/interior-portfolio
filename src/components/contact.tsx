export function Contact() {
  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Contact
            </p>
            <h2 className="text-3xl font-light tracking-tight">聯絡我們</h2>
            <p className="mt-4 text-muted-foreground">
              歡迎預約諮詢，讓我們一起討論您的空間夢想。
            </p>
          </div>
          <div className="space-y-6 text-sm">
            <div>
              <div className="mb-1 text-xs uppercase tracking-widest text-muted-foreground">
                地址
              </div>
              <div>台北市大安區敦化南路一段 100 號 8 樓</div>
            </div>
            <div>
              <div className="mb-1 text-xs uppercase tracking-widest text-muted-foreground">
                電話
              </div>
              <div>02-2700-0000</div>
            </div>
            <div>
              <div className="mb-1 text-xs uppercase tracking-widest text-muted-foreground">
                Email
              </div>
              <div>hello@interiorstudio.tw</div>
            </div>
            <div>
              <div className="mb-1 text-xs uppercase tracking-widest text-muted-foreground">
                營業時間
              </div>
              <div>週一至週五 10:00 - 19:00</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
