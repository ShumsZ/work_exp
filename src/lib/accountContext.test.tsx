import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { AccountProvider, useAccount } from "@/lib/accountContext";
import { DEMO_CREDENTIALS } from "@/lib/mockAccount";

function AccountProbe() {
  const { user, isLoading, signIn, signUp, signOut } = useAccount();

  if (isLoading) {
    return <p>Loading account</p>;
  }

  return (
    <div>
      <p>{user ? `Signed in as ${user.name}` : "Signed out"}</p>
      <button
        type="button"
        onClick={() => signIn(DEMO_CREDENTIALS.email, DEMO_CREDENTIALS.password)}
      >
        Sign in
      </button>
      <button type="button" onClick={() => signIn("wrong@example.com", "nope")}>
        Bad sign in
      </button>
      <button
        type="button"
        onClick={() => signUp("Taylor Learner", "taylor@example.com", "secret123")}
      >
        Sign up
      </button>
      <button type="button" onClick={() => signUp("", "taylor@example.com", "secret123")}>
        Bad signup name
      </button>
      <button type="button" onClick={() => signUp("Taylor", "", "secret123")}>
        Bad signup email
      </button>
      <button type="button" onClick={() => signUp("Taylor", "taylor@example.com", "abc")}>
        Bad signup password
      </button>
      <button
        type="button"
        onClick={() => signUp("Taylor", DEMO_CREDENTIALS.email, "secret123")}
      >
        Duplicate signup
      </button>
      <button type="button" onClick={signOut}>
        Sign out
      </button>
    </div>
  );
}

describe("AccountProvider", () => {
  it("signs in with valid demo credentials", async () => {
    const user = userEvent.setup();
    render(
      <AccountProvider>
        <AccountProbe />
      </AccountProvider>,
    );

    await waitFor(() => {
      expect(screen.getByText("Signed out")).toBeInTheDocument();
    });

    await user.click(screen.getByRole("button", { name: "Sign in" }));

    expect(await screen.findByText("Signed in as Alex Rivera")).toBeInTheDocument();
  });

  it("rejects invalid credentials", async () => {
    const user = userEvent.setup();
    render(
      <AccountProvider>
        <AccountProbe />
      </AccountProvider>,
    );

    await waitFor(() => {
      expect(screen.getByText("Signed out")).toBeInTheDocument();
    });

    await user.click(screen.getByRole("button", { name: "Bad sign in" }));
    expect(screen.getByText("Signed out")).toBeInTheDocument();
  });

  it("creates a new account with valid details", async () => {
    const user = userEvent.setup();
    render(
      <AccountProvider>
        <AccountProbe />
      </AccountProvider>,
    );

    await waitFor(() => {
      expect(screen.getByText("Signed out")).toBeInTheDocument();
    });

    await user.click(screen.getByRole("button", { name: "Sign up" }));
    expect(await screen.findByText("Signed in as Taylor Learner")).toBeInTheDocument();
  });

  it("validates sign-up input", async () => {
    const user = userEvent.setup();
    render(
      <AccountProvider>
        <AccountProbe />
      </AccountProvider>,
    );

    await waitFor(() => {
      expect(screen.getByText("Signed out")).toBeInTheDocument();
    });

    await user.click(screen.getByRole("button", { name: "Bad signup name" }));
    await user.click(screen.getByRole("button", { name: "Bad signup email" }));
    await user.click(screen.getByRole("button", { name: "Bad signup password" }));
    await user.click(screen.getByRole("button", { name: "Duplicate signup" }));

    expect(screen.getByText("Signed out")).toBeInTheDocument();
  });

  it("signs out an authenticated user", async () => {
    const user = userEvent.setup();
    render(
      <AccountProvider>
        <AccountProbe />
      </AccountProvider>,
    );

    await waitFor(() => {
      expect(screen.getByText("Signed out")).toBeInTheDocument();
    });

    await user.click(screen.getByRole("button", { name: "Sign in" }));
    expect(await screen.findByText("Signed in as Alex Rivera")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Sign out" }));
    expect(screen.getByText("Signed out")).toBeInTheDocument();
  });

  it("restores a saved session from localStorage", async () => {
    localStorage.setItem(
      "compute-beauty-account",
      JSON.stringify({ userId: "user-alex", customUsers: [] }),
    );

    render(
      <AccountProvider>
        <AccountProbe />
      </AccountProvider>,
    );

    expect(await screen.findByText("Signed in as Alex Rivera")).toBeInTheDocument();
  });

  it("throws when useAccount is used outside the provider", () => {
    const consoleError = vi.spyOn(console, "error").mockImplementation(() => {});

    expect(() => render(<AccountProbe />)).toThrow(
      "useAccount must be used within AccountProvider",
    );

    consoleError.mockRestore();
  });
});
