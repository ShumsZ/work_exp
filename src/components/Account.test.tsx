import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { renderWithProviders } from "@/test-utils";
import { Account } from "@/components/Account";
import { DEMO_CREDENTIALS } from "@/lib/mockAccount";

function getSubmitButton(label = "Sign in") {
  return screen
    .getAllByRole("button", { name: label })
    .find((button) => button.getAttribute("type") === "submit");
}

describe("Account", () => {
  it("renders the sign-in form for guests", async () => {
    renderWithProviders(<Account />);

    await waitFor(() => {
      expect(getSubmitButton()).toBeInTheDocument();
    });
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  });

  it("signs in with demo credentials and shows progress", async () => {
    const user = userEvent.setup();
    renderWithProviders(<Account />);

    await waitFor(() => {
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    });

    await user.type(screen.getByLabelText(/email/i), DEMO_CREDENTIALS.email);
    await user.type(screen.getByLabelText(/password/i), DEMO_CREDENTIALS.password);

    const submitButton = getSubmitButton();
    expect(submitButton).toBeDefined();
    await user.click(submitButton!);

    expect(await screen.findByText("Alex Rivera")).toBeInTheDocument();
    expect(screen.getByText("Current path")).toBeInTheDocument();
    expect(screen.getByText("All paths")).toBeInTheDocument();
  });

  it("shows an error for invalid credentials", async () => {
    const user = userEvent.setup();
    renderWithProviders(<Account />);

    await waitFor(() => {
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    });

    await user.type(screen.getByLabelText(/email/i), "wrong@example.com");
    await user.type(screen.getByLabelText(/password/i), "bad-password");
    await user.click(getSubmitButton()!);

    expect(await screen.findByText(/Invalid email or password/i)).toBeInTheDocument();
  });

  it("creates a new account", async () => {
    const user = userEvent.setup();
    renderWithProviders(<Account />);

    await waitFor(() => {
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    });

    await user.click(screen.getByRole("button", { name: "Create account" }));
    await user.type(screen.getByLabelText(/^name$/i), "Jordan Lee");
    await user.type(screen.getByLabelText(/email/i), "jordan@example.com");
    await user.type(screen.getByLabelText(/password/i), "secure123");
    await user.click(getSubmitButton("Create account")!);

    expect(await screen.findByText("Jordan Lee")).toBeInTheDocument();
  });

  it("signs out after authentication", async () => {
    const user = userEvent.setup();
    renderWithProviders(<Account />);

    await waitFor(() => {
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    });

    await user.type(screen.getByLabelText(/email/i), DEMO_CREDENTIALS.email);
    await user.type(screen.getByLabelText(/password/i), DEMO_CREDENTIALS.password);
    await user.click(getSubmitButton()!);
    expect(await screen.findByText("Alex Rivera")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Sign out" }));
    expect(await screen.findByLabelText(/email/i)).toBeInTheDocument();
  });
});
