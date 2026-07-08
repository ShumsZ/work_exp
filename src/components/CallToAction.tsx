import Link from "next/link";

export function CallToAction() {
  return (
    <section id="cta" className="border-t border-surface-border px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border border-accent/20 bg-gradient-to-br from-accent/20 via-background to-fuchsia-500/10 p-10 md:p-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/30 blur-[80px]" />

          <div className="relative max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Ready to see what you can build?
            </h2>
            <p className="mt-4 text-muted">
              Fork this repo, run it locally, and make it yours. Add lessons, labs,
              or your own AI experiments—the best way to learn is to create.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="https://github.com"
                className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-soft"
              >
                Clone &amp; customize
              </Link>
              <code className="inline-flex items-center rounded-full border border-surface-border bg-background/60 px-4 py-3 font-mono text-sm text-muted">
                npm run dev
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
