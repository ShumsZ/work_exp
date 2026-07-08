import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AccountProvider } from "@/components/AccountProvider";

describe("AccountProvider wrapper", () => {
  it("renders children inside the account context", () => {
    render(
      <AccountProvider>
        <p>Child content</p>
      </AccountProvider>,
    );

    expect(screen.getByText("Child content")).toBeInTheDocument();
  });
});
