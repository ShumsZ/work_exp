import { principles } from "@/lib/content";

export function Principles() {
  return (
    <section id="principles" className="border-t border-surface-border px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-accent-soft">
              Our philosophy
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Engineering is a human craft
            </h2>
            <p className="mt-4 text-muted">
              AI can accelerate your work, but judgment, empathy, and clarity still
              belong to you. We teach both—the tools and the thinking.
            </p>
          </div>

          <ul className="space-y-4">
            {principles.map((principle) => (
              <li
                key={principle.title}
                className="rounded-2xl border border-surface-border bg-surface p-6"
              >
                <h3 className="font-semibold">{principle.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{principle.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
