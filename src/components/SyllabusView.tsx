import Link from "next/link";
import type { LearningPath } from "@/lib/content";
import { levelStyles } from "@/lib/level-styles";

type SyllabusViewProps = {
  path: LearningPath;
};

export function SyllabusView({ path }: SyllabusViewProps) {
  const { syllabus } = path;

  return (
    <main className="px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/#paths"
          className="text-sm text-muted transition hover:text-foreground"
        >
          ← All paths
        </Link>

        <div className="mt-8">
          <span
            className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset ${levelStyles[path.level]}`}
          >
            {path.level}
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            {path.title}
          </h1>
          <p className="mt-2 font-mono text-sm text-muted">{path.duration}</p>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            {path.summary}
          </p>
        </div>

        <section className="mt-12">
          <p className="font-mono text-xs font-medium uppercase tracking-widest text-accent-soft">
            Overview
          </p>
          <p className="mt-3 leading-relaxed text-muted">{syllabus.overview}</p>
        </section>

        {syllabus.prerequisites.length > 0 && (
          <section className="mt-10">
            <p className="font-mono text-xs font-medium uppercase tracking-widest text-accent-soft">
              Prerequisites
            </p>
            <ul className="mt-3 space-y-2 text-muted">
              {syllabus.prerequisites.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-accent-soft">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mt-12">
          <p className="font-mono text-xs font-medium uppercase tracking-widest text-accent-soft">
            Modules
          </p>
          <div className="mt-6 space-y-4">
            {syllabus.modules.map((module, index) => (
              <article
                key={module.title}
                className="flex gap-5 rounded-2xl border border-surface-border bg-surface/30 p-6"
              >
                <span className="font-mono text-3xl font-bold text-surface-border">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="text-lg font-semibold">{module.title}</h2>
                  <p className="mt-1 font-mono text-xs text-muted">{module.duration}</p>
                  <p className="mt-2 text-sm text-muted">{module.topics.join(" · ")}</p>
                  <p className="mt-3 text-sm leading-relaxed">
                    <span className="text-muted">Outcome: </span>
                    {module.outcome}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
