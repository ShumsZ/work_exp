"use client";

import Link from "next/link";
import { useAccount } from "@/lib/accountContext";

const navLinks = [
  { href: "#pillars", label: "Explore" },
  { href: "#paths", label: "Paths" },
  { href: "#principles", label: "Philosophy" },
  { href: "#account", label: "Account" },
];

export function Header() {
  const { user } = useAccount();

  return (
    <header className="sticky top-0 z-50 border-b border-surface-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="group flex min-w-0 items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/20 text-lg text-accent-soft ring-1 ring-accent/30 transition group-hover:bg-accent/30">
            λ
          </span>
          <span className="min-w-0">
            <span className="block font-semibold tracking-tight">
              Compute<span className="text-accent-soft">Beauty</span>
            </span>
            <span className="block truncate text-xs text-muted">
              Contributor workspace · shums/features
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {user ? (
          <a
            href="#account"
            className="flex items-center gap-2 rounded-full border border-surface-border bg-surface px-4 py-2 text-sm font-medium transition hover:border-accent/40"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/20 text-xs text-accent-soft">
              {user.name
                .split(" ")
                .map((part) => part[0])
                .join("")
                .slice(0, 2)
                .toUpperCase()}
            </span>
            {user.name.split(" ")[0]}
          </a>
        ) : (
          <Link
            href="#account"
            className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition hover:bg-accent-soft"
          >
            Sign in
          </Link>
        )}
      </div>
    </header>
  );
}
