import { paths } from "@/lib/content";

const levelStyles = {
  Beginner: "bg-emerald-500/15 text-emerald-300 ring-emerald-500/30",
  Intermediate: "bg-amber-500/15 text-amber-300 ring-amber-500/30",
  Advanced: "bg-fuchsia-500/15 text-fuchsia-300 ring-fuchsia-500/30",
} as const;

export function LearningPaths() {
  return (
    <section id="paths" className="border-t border-surface-border bg-surface/30 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-accent-soft">
            Learning paths
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Start where you are. Go as far as you dare.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {paths.map((path, index) => (
            <article
              key={path.id}
              className="relative flex flex-col rounded-2xl border border-surface-border bg-background p-8"
            >
              <span className="absolute right-6 top-6 font-mono text-4xl font-bold text-surface-border">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span
                className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset ${levelStyles[path.level]}`}
              >
                {path.level}
              </span>
              <h3 className="mt-4 text-xl font-semibold">{path.title}</h3>
              <p className="mt-2 text-sm text-muted">{path.duration}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                {path.summary}
              </p>
              <button
                type="button"
                className="mt-8 w-full rounded-xl border border-surface-border py-2.5 text-sm font-medium transition hover:border-accent/40 hover:bg-accent/10"
              >
                Preview syllabus
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
