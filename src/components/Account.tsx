import { accountOptions, accountSection } from "@/lib/content";

export function Account() {
  return (
    <section id="account" className="border-t border-surface-border px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-accent-soft">
              {accountSection.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              {accountSection.heading}
            </h2>
            <p className="mt-4 text-muted">{accountSection.description}</p>
          </div>

          <ul className="space-y-4">
            {accountOptions.map((option) => (
              <li
                key={option.id}
                className="rounded-2xl border border-surface-border bg-surface p-6"
              >
                <h3 className="font-semibold">{option.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {option.description}
                </p>
                <button
                  type="button"
                  className="mt-4 rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white transition hover:bg-accent-soft"
                >
                  {option.buttonLabel}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
