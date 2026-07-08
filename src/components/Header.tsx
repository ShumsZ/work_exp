import Link from "next/link";

const navLinks = [
  { href: "#pillars", label: "Explore" },
  { href: "#paths", label: "Paths" },
  { href: "#principles", label: "Philosophy" },
  { href: "#contributor", label: "This branch" },
];

export function Header() {
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

        <div className="flex shrink-0 items-center gap-3">
          <span className="hidden rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300 sm:inline-flex">
            Preview build
          </span>
          <Link
            href="#paths"
            className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition hover:bg-accent-soft"
          >
            Explore paths
          </Link>
        </div>
      </div>
    </header>
  );
}
