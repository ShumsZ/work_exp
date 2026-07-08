import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { PathCrossLinks } from "@/components/PathCrossLinks";

describe("PathCrossLinks", () => {
  it("renders other paths and marks the current one", () => {
    render(<PathCrossLinks currentPathId="first-program" />);

    expect(screen.getByText("Other paths")).toBeInTheDocument();
    expect(screen.getByText("You are here")).toBeInTheDocument();
    expect(screen.getByText("Your First Program")).toBeInTheDocument();
    expect(screen.getByText("Build & Ship →")).toBeInTheDocument();
    expect(screen.getByText("AI-Augmented Builder →")).toBeInTheDocument();
  });
});
