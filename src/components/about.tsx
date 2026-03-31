export function About() {
  return (
    <section id="about" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              About Me
            </p>
            <h2 className="text-3xl font-light tracking-tight">關於我</h2>
          </div>
          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              我是一名擁有 8
              年實務經驗的室內設計師，從住宅到商業空間、從日式禪風到現代簡約，我相信每個空間都有自己的故事，而設計師的工作就是把這個故事說好。
            </p>
            <p>
              我擅長在美學與機能之間找到平衡點，重視與業主的深度溝通，確保最終成果不只是「好看」，更是「好住」。工地經驗讓我能在設計階段就預見施工問題，大幅降低變更成本。
            </p>
            <p>
              目前正在尋找能發揮所長的下一個舞台，希望加入一個重視設計品質、願意給設計師空間發揮的團隊。
            </p>

            <div className="pt-4">
              <h3 className="mb-3 text-xs font-medium uppercase tracking-widest text-foreground">
                我在找的機會
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-foreground/50" />
                  資深設計師 / 主任設計師
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-foreground/50" />
                  能主導專案、帶領小型團隊
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-foreground/50" />
                  重視設計品質而非純粹跑量的公司
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-foreground/50" />
                  台北市 / 新北市（可面議）
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
