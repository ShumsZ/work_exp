import { describe, expect, it } from "vitest";
import {
  createMockUser,
  DEMO_CREDENTIALS,
  findUserByCredentials,
  mockUsers,
  toPublicUser,
} from "@/lib/mockAccount";

describe("findUserByCredentials", () => {
  it("finds a user with matching credentials", () => {
    const user = findUserByCredentials(
      mockUsers,
      DEMO_CREDENTIALS.email,
      DEMO_CREDENTIALS.password,
    );
    expect(user?.name).toBe("Alex Rivera");
  });

  it("normalizes email before matching", () => {
    const user = findUserByCredentials(mockUsers, "  ALEX@LEARNER.DEV ", "learn123");
    expect(user?.id).toBe("user-alex");
  });

  it("returns undefined for invalid credentials", () => {
    expect(findUserByCredentials(mockUsers, "alex@learner.dev", "wrong")).toBeUndefined();
  });
});

describe("createMockUser", () => {
  it("creates a new user with default progress", () => {
    const user = createMockUser("Taylor", "Taylor@Example.com", "secret123");
    expect(user.name).toBe("Taylor");
    expect(user.email).toBe("taylor@example.com");
    expect(user.currentPath).toBe("first-program");
    expect(user.progress).toHaveLength(3);
    expect(user.stats.labsCompleted).toBe(0);
  });
});

describe("toPublicUser", () => {
  it("removes the password from the returned user", () => {
    const publicUser = toPublicUser(mockUsers[0]);
    expect(publicUser).not.toHaveProperty("password");
    expect(publicUser.email).toBe(mockUsers[0].email);
  });
});
