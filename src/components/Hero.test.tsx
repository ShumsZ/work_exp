import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Hero } from "@/components/Hero";

describe("Hero", () => {
  it("renders the main headline", () => {
    render(<Hero />);
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /beauty of computing/i,
      }),
    ).toBeInTheDocument();
  });

  it("renders landing page stats", () => {
    render(<Hero />);
    expect(screen.getByText("Core concepts")).toBeInTheDocument();
  });
});
