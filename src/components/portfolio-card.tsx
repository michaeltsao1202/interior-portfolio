import Link from "next/link";
import type { Project } from "@/data/projects";

export function PortfolioCard({ project }: { project: Project }) {
  return (
    <Link href={`/works/${project.id}`} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden border border-border bg-card">
        {/* Placeholder area */}
        <div className="absolute inset-0 flex items-center justify-center bg-muted/30">
          <div className="text-center">
            <div className="mb-2 text-3xl text-muted-foreground/40">
              {project.id.padStart(2, "0")}
            </div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground/50">
              作品照片
            </div>
          </div>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <p className="mb-1 text-xs uppercase tracking-widest text-muted-foreground">
            {project.category}
          </p>
          <h3 className="text-lg font-medium text-white">{project.title}</h3>
        </div>

        {/* Subtle scale on hover */}
        <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105" />
      </div>

      {/* Below-card info */}
      <div className="mt-3 flex items-center justify-between">
        <h3 className="text-sm font-medium">{project.title}</h3>
        <span className="font-mono text-xs text-muted-foreground">
          {project.year}
        </span>
      </div>
      <p className="mt-1 text-xs text-muted-foreground">{project.category}</p>
    </Link>
  );
}
