import { describe, expect, it } from "vitest";
import { accountSection, paths, pillars, principles, stats } from "@/lib/content";

describe("content data", () => {
  it("defines three learning pillars", () => {
    expect(pillars).toHaveLength(3);
    for (const pillar of pillars) {
      expect(pillar.id).toBeTruthy();
      expect(pillar.topics.length).toBeGreaterThan(0);
    }
  });

  it("defines three learning paths with syllabi", () => {
    expect(paths).toHaveLength(3);
    for (const path of paths) {
      expect(path.syllabus.modules.length).toBeGreaterThan(0);
      expect(path.syllabus.prerequisites.length).toBeGreaterThan(0);
    }
  });

  it("defines guiding principles", () => {
    expect(principles.length).toBeGreaterThanOrEqual(3);
  });

  it("defines landing page stats", () => {
    expect(stats.length).toBeGreaterThan(0);
  });

  it("defines account section copy", () => {
    expect(accountSection.heading).toBeTruthy();
    expect(accountSection.description).toBeTruthy();
  });
});
