"use client";

import { useState, type FormEvent } from "react";
import { useAccount } from "@/lib/accountContext";
import { DEMO_CREDENTIALS } from "@/lib/mockAccount";
import { accountSection } from "@/lib/content";

type AuthMode = "sign-in" | "create-account";

function ProgressBar({ completed, total }: { completed: number; total: number }) {
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div>
      <div className="flex items-center justify-between text-xs text-muted">
        <span>
          {completed} of {total} lessons
        </span>
        <span>{percent}%</span>
      </div>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-background">
        <div
          className="h-full rounded-full bg-accent transition-all"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

function GuestView() {
  const { signIn, signUp } = useAccount();
  const [mode, setMode] = useState<AuthMode>("sign-in");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    const formData = new FormData(event.currentTarget);

    if (mode === "sign-in") {
      const email = String(formData.get("email") ?? "");
      const password = String(formData.get("password") ?? "");
      const message = signIn(email, password);
      if (message) {
        setError(message);
      } else {
        setSuccess("Signed in successfully.");
      }
      return;
    }

    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const password = String(formData.get("password") ?? "");
    const message = signUp(name, email, password);
    if (message) {
      setError(message);
    } else {
      setSuccess("Account created. Welcome aboard!");
    }
  }

  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
      <div>
        <p className="text-sm font-medium uppercase tracking-widest text-accent-soft">
          {accountSection.eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
          {accountSection.heading}
        </h2>
        <p className="mt-4 text-muted">{accountSection.description}</p>

        <div className="mt-8 rounded-2xl border border-dashed border-accent/30 bg-accent/5 p-5">
          <p className="text-sm font-medium text-foreground">Demo credentials</p>
          <p className="mt-2 font-mono text-sm text-muted">
            {DEMO_CREDENTIALS.email} / {DEMO_CREDENTIALS.password}
          </p>
          <p className="mt-2 text-xs text-muted">
            Or try sam@learner.dev / demo456
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-surface-border bg-surface p-6">
        <div className="flex gap-2 rounded-full border border-surface-border bg-background p-1">
          <button
            type="button"
            onClick={() => {
              setMode("sign-in");
              setError(null);
              setSuccess(null);
            }}
            className={`flex-1 rounded-full px-4 py-2 text-sm font-medium transition ${
              mode === "sign-in"
                ? "bg-accent text-white"
                : "text-muted hover:text-foreground"
            }`}
          >
            Sign in
          </button>
          <button
            type="button"
            onClick={() => {
              setMode("create-account");
              setError(null);
              setSuccess(null);
            }}
            className={`flex-1 rounded-full px-4 py-2 text-sm font-medium transition ${
              mode === "create-account"
                ? "bg-accent text-white"
                : "text-muted hover:text-foreground"
            }`}
          >
            Create account
          </button>
        </div>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          {mode === "create-account" && (
            <label className="block">
              <span className="text-sm text-muted">Name</span>
              <input
                name="name"
                type="text"
                required
                placeholder="Alex Rivera"
                className="mt-2 w-full rounded-xl border border-surface-border bg-background px-4 py-3 text-sm outline-none transition focus:border-accent/50"
              />
            </label>
          )}

          <label className="block">
            <span className="text-sm text-muted">Email</span>
            <input
              name="email"
              type="email"
              required
              placeholder="you@learner.dev"
              className="mt-2 w-full rounded-xl border border-surface-border bg-background px-4 py-3 text-sm outline-none transition focus:border-accent/50"
            />
          </label>

          <label className="block">
            <span className="text-sm text-muted">Password</span>
            <input
              name="password"
              type="password"
              required
              minLength={mode === "create-account" ? 6 : 1}
              placeholder="••••••••"
              className="mt-2 w-full rounded-xl border border-surface-border bg-background px-4 py-3 text-sm outline-none transition focus:border-accent/50"
            />
          </label>

          {error && (
            <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
              {error}
            </p>
          )}
          {success && (
            <p className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
              {success}
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-soft"
          >
            {mode === "sign-in" ? "Sign in" : "Create account"}
          </button>
        </form>
      </div>
    </div>
  );
}

function SignedInView() {
  const { user, signOut } = useAccount();
  if (!user) {
    return null;
  }

  const initials = user.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const activePath = user.progress.find((entry) => entry.pathId === user.currentPath);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/20 text-lg font-semibold text-accent-soft ring-1 ring-accent/30">
            {initials}
          </span>
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-accent-soft">
              Signed in
            </p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight md:text-3xl">
              {user.name}
            </h2>
            <p className="mt-1 text-sm text-muted">{user.email}</p>
          </div>
        </div>

        <button
          type="button"
          onClick={signOut}
          className="rounded-full border border-surface-border px-5 py-2.5 text-sm font-medium transition hover:border-accent/40 hover:bg-accent/10"
        >
          Sign out
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { label: "Labs completed", value: user.stats.labsCompleted },
          { label: "Hours learned", value: user.stats.hoursLearned },
          { label: "Day streak", value: user.stats.streak },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-surface-border bg-surface p-5 text-center"
          >
            <p className="text-2xl font-bold">{stat.value}</p>
            <p className="mt-1 text-sm text-muted">{stat.label}</p>
          </div>
        ))}
      </div>

      {activePath && (
        <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6">
          <p className="text-sm font-medium text-accent-soft">Current path</p>
          <h3 className="mt-2 text-xl font-semibold">{activePath.label}</h3>
          <div className="mt-4">
            <ProgressBar completed={activePath.completed} total={activePath.total} />
          </div>
        </div>
      )}

      <div>
        <h3 className="text-lg font-semibold">All paths</h3>
        <ul className="mt-4 space-y-4">
          {user.progress.map((path) => (
            <li
              key={path.pathId}
              className="rounded-2xl border border-surface-border bg-surface p-5"
            >
              <div className="flex items-center justify-between gap-4">
                <p className="font-medium">{path.label}</p>
                {path.pathId === user.currentPath && (
                  <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-medium text-accent-soft">
                    Active
                  </span>
                )}
              </div>
              <div className="mt-4">
                <ProgressBar completed={path.completed} total={path.total} />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <p className="text-xs text-muted">
        Member since {new Date(user.joinedDate).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
        . Data is mock-only for testing.
      </p>
    </div>
  );
}

export function Account() {
  const { user, isLoading } = useAccount();

  return (
    <section id="account" className="border-t border-surface-border px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {isLoading ? (
          <p className="text-muted">Loading account...</p>
        ) : user ? (
          <SignedInView />
        ) : (
          <GuestView />
        )}
      </div>
    </section>
  );
}
