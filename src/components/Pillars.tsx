import { pillars } from "@/lib/content";

export function Pillars() {
  return (
    <section id="pillars" className="border-t border-surface-border px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-accent-soft">
            Three pillars
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            What makes computing beautiful
          </h2>
          <p className="mt-4 text-muted">
            Software engineering is more than syntax—it is a way of thinking. These
            pillars guide everything we teach.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.id}
              className="group rounded-2xl border border-surface-border bg-surface p-8 transition hover:border-accent/30 hover:bg-accent/5"
            >
              <span className="text-3xl text-accent-soft">{pillar.icon}</span>
              <h3 className="mt-4 text-xl font-semibold">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {pillar.description}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {pillar.topics.map((topic) => (
                  <li
                    key={topic}
                    className="rounded-full border border-surface-border px-3 py-1 text-xs text-muted transition group-hover:border-accent/20 group-hover:text-foreground"
                  >
                    {topic}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
