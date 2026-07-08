import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { LearningPaths } from "@/components/LearningPaths";

describe("LearningPaths", () => {
  it("renders every configured path", () => {
    render(<LearningPaths />);
    expect(screen.getByText("Your First Program")).toBeInTheDocument();
    expect(screen.getByText("Build & Ship")).toBeInTheDocument();
    expect(screen.getByText("AI-Augmented Builder")).toBeInTheDocument();
  });
});
