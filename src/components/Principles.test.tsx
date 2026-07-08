import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Principles } from "@/components/Principles";

describe("Principles", () => {
  it("renders the philosophy section", () => {
    render(<Principles />);
    expect(screen.getByText("Engineering is a human craft")).toBeInTheDocument();
  });
});
