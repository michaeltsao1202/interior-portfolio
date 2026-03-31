const skillGroups = [
  {
    title: "設計能力",
    skills: [
      { name: "空間規劃", level: 95 },
      { name: "色彩搭配", level: 90 },
      { name: "材質選配", level: 92 },
      { name: "燈光設計", level: 85 },
      { name: "軟裝陳設", level: 88 },
    ],
  },
  {
    title: "軟體工具",
    skills: [
      { name: "AutoCAD", level: 95 },
      { name: "SketchUp", level: 90 },
      { name: "3ds Max / V-Ray", level: 85 },
      { name: "Adobe Photoshop", level: 88 },
      { name: "Enscape", level: 80 },
    ],
  },
  {
    title: "專業技能",
    skills: [
      { name: "施工圖繪製", level: 92 },
      { name: "預算編列", level: 85 },
      { name: "工地監督", level: 88 },
      { name: "客戶提案", level: 90 },
      { name: "團隊管理", level: 82 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Skills
          </p>
          <h2 className="text-3xl font-light tracking-tight">專業技能</h2>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-6 text-sm font-medium uppercase tracking-widest">
                {group.title}
              </h3>
              <div className="space-y-4">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span>{skill.name}</span>
                      <span className="font-mono text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1 w-full bg-border">
                      <div
                        className="h-full bg-foreground/70 transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="mt-20 border-t border-border pt-12">
          <h3 className="mb-8 text-center text-sm font-medium uppercase tracking-widest">
            學歷與證照
          </h3>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            <div className="border border-border p-6">
              <div className="mb-1 font-mono text-xs text-muted-foreground">
                2012 — 2016
              </div>
              <div className="text-sm font-medium">室內設計學系 學士</div>
              <div className="mt-1 text-xs text-muted-foreground">
                某知名大學
              </div>
            </div>
            <div className="border border-border p-6">
              <div className="mb-1 font-mono text-xs text-muted-foreground">
                2019
              </div>
              <div className="text-sm font-medium">室內裝修專業技術人員</div>
              <div className="mt-1 text-xs text-muted-foreground">
                內政部營建署
              </div>
            </div>
            <div className="border border-border p-6">
              <div className="mb-1 font-mono text-xs text-muted-foreground">
                2022
              </div>
              <div className="text-sm font-medium">TID Award 金獎</div>
              <div className="mt-1 text-xs text-muted-foreground">
                台灣室內設計大獎
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
