import { describe, expect, it } from "vitest";
import { levelStyles } from "@/lib/level-styles";

describe("levelStyles", () => {
  it("defines styles for every learning level", () => {
    expect(levelStyles.Beginner).toContain("emerald");
    expect(levelStyles.Intermediate).toContain("amber");
    expect(levelStyles.Advanced).toContain("fuchsia");
  });
});
