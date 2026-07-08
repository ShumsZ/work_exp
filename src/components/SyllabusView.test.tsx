import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { paths } from "@/lib/content";
import { SyllabusView } from "@/components/SyllabusView";

describe("SyllabusView", () => {
  it("renders syllabus details for a path", () => {
    render(<SyllabusView path={paths[0]} />);

    expect(
      screen.getByRole("heading", { level: 1, name: paths[0].title }),
    ).toBeInTheDocument();
    expect(screen.getByText("Overview")).toBeInTheDocument();
    expect(screen.getByText("← All paths")).toBeInTheDocument();
  });
});
