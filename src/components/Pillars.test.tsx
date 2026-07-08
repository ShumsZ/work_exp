import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Pillars } from "@/components/Pillars";

describe("Pillars", () => {
  it("renders all learning pillars", () => {
    render(<Pillars />);
    expect(screen.getByText("The Beauty of Computing")).toBeInTheDocument();
    expect(screen.getByText("Software Engineering Craft")).toBeInTheDocument();
    expect(screen.getByText("AI & Intelligent Systems")).toBeInTheDocument();
  });
});
