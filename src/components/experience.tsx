const experiences = [
  {
    period: "2021 — 至今",
    role: "資深室內設計師",
    company: "某知名設計事務所",
    description:
      "主導住宅與商業空間設計專案，帶領 3-5 人設計團隊。負責從概念提案、3D 渲染到施工監督的完整流程，累計完成 30+ 件專案。",
    highlights: ["年度最佳專案獎", "客戶滿意度 98%", "團隊管理"],
  },
  {
    period: "2018 — 2021",
    role: "室內設計師",
    company: "某室內設計公司",
    description:
      "獨立負責中小型住宅設計案，從丈量、平面規劃到材質選配。期間完成 20+ 件住宅改造專案，培養出紮實的施工圖繪製能力。",
    highlights: ["獨立完案能力", "施工圖繪製", "客戶溝通"],
  },
  {
    period: "2016 — 2018",
    role: "初階設計師",
    company: "某建築設計事務所",
    description:
      "協助資深設計師執行商業空間與飯店設計專案，負責 3D 效果圖渲染、材料樣板製作與現場丈量。",
    highlights: ["3D 渲染", "材料研究", "現場經驗"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Experience
          </p>
          <h2 className="text-3xl font-light tracking-tight">工作經歷</h2>
        </div>

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="group grid gap-6 border-b border-border py-8 md:grid-cols-[200px_1fr] md:gap-12"
            >
              <div>
                <div className="font-mono text-sm text-muted-foreground">
                  {exp.period}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium">{exp.role}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {exp.company}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.highlights.map((tag) => (
                    <span
                      key={tag}
                      className="border border-border px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
