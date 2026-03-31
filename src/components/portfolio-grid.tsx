import { projects } from "@/data/projects";
import { PortfolioCard } from "./portfolio-card";

export function PortfolioGrid() {
  return (
    <section id="works" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12 text-center">
        <p className="mb-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Portfolio
        </p>
        <h2 className="text-3xl font-light tracking-tight">精選作品</h2>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <PortfolioCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
