import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CallToAction } from "@/components/CallToAction";

describe("CallToAction", () => {
  it("renders the call to action headline", () => {
    render(<CallToAction />);
    expect(screen.getByText("Ready to see what you can build?")).toBeInTheDocument();
  });
});
