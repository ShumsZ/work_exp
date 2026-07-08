import Link from "next/link";
import { paths, type LearningPath } from "@/lib/content";
import { levelStyles } from "@/lib/level-styles";

type PathCrossLinksProps = {
  currentPathId: string;
};

function pathLinkLabel(path: LearningPath, currentIndex: number, index: number): string {
  if (index < currentIndex) {
    return `← ${path.title}`;
  }
  if (index > currentIndex) {
    return `${path.title} →`;
  }
  return path.title;
}

export function PathCrossLinks({ currentPathId }: PathCrossLinksProps) {
  const currentIndex = paths.findIndex((path) => path.id === currentPathId);

  return (
    <section className="mt-12">
      <p className="font-mono text-xs font-medium uppercase tracking-widest text-accent-soft">
        Other paths
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {paths.map((path, index) => {
          const isCurrent = path.id === currentPathId;

          const card = (
            <div className="flex h-36 flex-col gap-2 rounded-2xl border p-4">
              <div className="h-3.5">
                {isCurrent && (
                  <p className="font-mono text-[10px] font-medium uppercase tracking-wide text-accent-soft">
                    You are here
                  </p>
                )}
              </div>
              <span
                className={`inline-flex w-fit rounded-full px-2 py-0.5 text-[10px] font-medium ring-1 ring-inset ${levelStyles[path.level]}`}
              >
                {path.level}
              </span>
              <p className="text-sm font-semibold leading-snug">
                {pathLinkLabel(path, currentIndex, index)}
              </p>
              <p className="mt-auto font-mono text-xs text-muted">{path.duration}</p>
            </div>
          );

          if (isCurrent) {
            return (
              <div
                key={path.id}
                className="rounded-2xl border border-accent/40 bg-accent/10"
              >
                {card}
              </div>
            );
          }

          return (
            <Link
              key={path.id}
              href={`/paths/${path.id}`}
              className="rounded-2xl border border-surface-border bg-surface/30 transition hover:border-accent/40 hover:bg-accent/10"
            >
              {card}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
