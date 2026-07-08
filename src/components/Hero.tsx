import Link from "next/link";
import { stats } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-16 md:pb-32 md:pt-24">
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px] animate-pulse-glow" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface px-4 py-1.5 text-sm text-muted">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Open for learners everywhere
        </div>

        <h1 className="max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl md:leading-[1.05]">
          Learn the{" "}
          <span className="bg-gradient-to-r from-indigo-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
            beauty
          </span>{" "}
          of computing &amp; AI
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          A gentle, ambitious path into software engineering—where elegant ideas meet
          practical craft, and AI becomes a thoughtful partner in how you build.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="#paths"
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition hover:bg-accent-soft"
          >
            Choose your path
          </Link>
          <Link
            href="#pillars"
            className="rounded-full border border-surface-border bg-surface px-6 py-3 text-sm font-semibold transition hover:border-accent/40 hover:bg-accent/10"
          >
            See what you&apos;ll learn
          </Link>
        </div>

        <dl className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-surface-border bg-surface p-6"
            >
              <dt className="text-sm text-muted">{stat.label}</dt>
              <dd className="mt-1 text-3xl font-bold text-accent-soft">{stat.value}</dd>
            </div>
          ))}
        </dl>

        <div className="animate-float mt-16 hidden rounded-xl border border-surface-border bg-[#0d1117] p-4 font-mono text-sm text-emerald-300/90 shadow-2xl md:block md:max-w-lg">
          <p className="text-muted"># Your journey starts here</p>
          <p>
            <span className="text-violet-300">def</span>{" "}
            <span className="text-sky-300">learn</span>
            <span className="text-muted">(</span>
            <span className="text-amber-200">curiosity</span>
            <span className="text-muted">):</span>
          </p>
          <p className="pl-4">
            <span className="text-violet-300">while</span> curiosity.alive():{" "}
            <span className="text-muted"># keep going</span>
          </p>
          <p className="pl-8">
            build<span className="text-muted">(</span>
            <span className="text-amber-200">something</span>
            <span className="text-muted">)</span>
          </p>
          <p className="pl-8">
            reflect<span className="text-muted">()</span>
          </p>
          <p className="pl-4">
            <span className="text-violet-300">return</span>{" "}
            <span className="text-fuchsia-300">&quot;beauty discovered&quot;</span>
          </p>
        </div>
      </div>
    </section>
  );
}
