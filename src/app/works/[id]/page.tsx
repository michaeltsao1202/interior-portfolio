import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return { title: "作品未找到" };
  return {
    title: `${project.title} | INTERIOR STUDIO`,
    description: project.description,
  };
}

export default async function WorkDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link
            href="/"
            className="text-lg font-semibold tracking-wider"
          >
            INTERIOR<span className="text-muted-foreground">STUDIO</span>
          </Link>
          <Link
            href="/#works"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            &larr; 返回作品集
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 pt-32 pb-24">
        {/* Project header */}
        <div className="mb-12">
          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            {project.category}
          </p>
          <h1 className="mb-4 text-4xl font-light tracking-tight sm:text-5xl">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <span>{project.location}</span>
            <span>{project.area}</span>
            <span className="font-mono">{project.year}</span>
          </div>
        </div>

        {/* Main image placeholder */}
        <div className="mb-12 aspect-[16/9] border border-border bg-card">
          <div className="flex h-full items-center justify-center">
            <div className="text-center">
              <div className="mb-2 text-5xl text-muted-foreground/30">
                {project.id.padStart(2, "0")}
              </div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground/40">
                主要作品照片
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="grid gap-12 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="mb-4 text-lg font-medium">設計概念</h2>
            <p className="leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          </div>
          <div className="space-y-6 border-t border-border pt-6 md:border-t-0 md:border-l md:pt-0 md:pl-12">
            <div>
              <div className="mb-1 text-xs uppercase tracking-widest text-muted-foreground">
                類別
              </div>
              <div className="text-sm">{project.category}</div>
            </div>
            <div>
              <div className="mb-1 text-xs uppercase tracking-widest text-muted-foreground">
                地點
              </div>
              <div className="text-sm">{project.location}</div>
            </div>
            <div>
              <div className="mb-1 text-xs uppercase tracking-widest text-muted-foreground">
                面積
              </div>
              <div className="text-sm">{project.area}</div>
            </div>
            <div>
              <div className="mb-1 text-xs uppercase tracking-widest text-muted-foreground">
                年份
              </div>
              <div className="font-mono text-sm">{project.year}</div>
            </div>
          </div>
        </div>

        {/* Additional image placeholders */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {[1, 2, 3, 4].map((n) => (
            <div
              key={n}
              className="aspect-[4/3] border border-border bg-card"
            >
              <div className="flex h-full items-center justify-center">
                <div className="text-xs uppercase tracking-widest text-muted-foreground/40">
                  更多照片 {n}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Back link */}
        <div className="mt-16 border-t border-border pt-8">
          <Link
            href="/#works"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            &larr; 返回所有作品
          </Link>
        </div>
      </main>
    </div>
  );
}
