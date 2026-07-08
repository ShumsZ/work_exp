import { describe, expect, it } from "vitest";
import { getAllPathIds, getPathById } from "@/lib/paths";

describe("getPathById", () => {
  it("returns a path when the id exists", () => {
    const path = getPathById("first-program");
    expect(path).toBeDefined();
    expect(path?.title).toBe("Your First Program");
  });

  it("returns undefined when the id does not exist", () => {
    expect(getPathById("nonexistent-path")).toBeUndefined();
  });
});

describe("getAllPathIds", () => {
  it("returns every configured learning path id", () => {
    const ids = getAllPathIds();
    expect(ids).toContain("first-program");
    expect(ids).toContain("build-and-ship");
    expect(ids).toContain("ai-builder");
    expect(ids).toHaveLength(3);
  });
});
