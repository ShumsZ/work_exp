import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { paths } from "@/lib/content";
import { PathCrossLinks } from "@/components/PathCrossLinks";

describe("PathCrossLinks", () => {
  it("highlights the current path and links to the others", () => {
    render(<PathCrossLinks currentPathId={paths[1].id} />);

    expect(screen.getByText("Other paths")).toBeInTheDocument();
    expect(screen.getByText("You are here")).toBeInTheDocument();
    expect(screen.getByText(paths[1].title)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Your First Program/i })).toHaveAttribute(
      "href",
      `/paths/${paths[0].id}`,
    );
    expect(screen.getByRole("link", { name: /AI-Augmented Builder/i })).toHaveAttribute(
      "href",
      `/paths/${paths[2].id}`,
    );
  });
});
