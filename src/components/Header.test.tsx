import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { renderWithProviders } from "@/test-utils";
import { Header } from "@/components/Header";

describe("Header", () => {
  it("renders navigation links", () => {
    renderWithProviders(<Header />);
    expect(screen.getByText("Explore")).toBeInTheDocument();
    expect(screen.getByText("Paths")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Sign in" })).toBeInTheDocument();
  });
});
