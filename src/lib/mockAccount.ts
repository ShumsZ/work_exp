export type PathProgress = {
  pathId: string;
  label: string;
  completed: number;
  total: number;
};

export type UserStats = {
  labsCompleted: number;
  hoursLearned: number;
  streak: number;
};

export type MockUser = {
  id: string;
  name: string;
  email: string;
  password: string;
  joinedDate: string;
  currentPath: string;
  progress: PathProgress[];
  stats: UserStats;
};

export const DEMO_CREDENTIALS = {
  email: "alex@learner.dev",
  password: "learn123",
};

export const mockUsers: MockUser[] = [
  {
    id: "user-alex",
    name: "Alex Rivera",
    email: "alex@learner.dev",
    password: "learn123",
    joinedDate: "2025-09-12",
    currentPath: "build-and-ship",
    progress: [
      { pathId: "first-program", label: "Your First Program", completed: 8, total: 8 },
      { pathId: "build-and-ship", label: "Build & Ship", completed: 5, total: 12 },
      { pathId: "ai-builder", label: "AI-Augmented Builder", completed: 0, total: 16 },
    ],
    stats: { labsCompleted: 6, hoursLearned: 24, streak: 5 },
  },
  {
    id: "user-sam",
    name: "Sam Chen",
    email: "sam@learner.dev",
    password: "demo456",
    joinedDate: "2026-01-04",
    currentPath: "first-program",
    progress: [
      { pathId: "first-program", label: "Your First Program", completed: 3, total: 8 },
      { pathId: "build-and-ship", label: "Build & Ship", completed: 0, total: 12 },
      { pathId: "ai-builder", label: "AI-Augmented Builder", completed: 0, total: 16 },
    ],
    stats: { labsCompleted: 2, hoursLearned: 7, streak: 2 },
  },
];

export function findUserByCredentials(
  users: MockUser[],
  email: string,
  password: string,
): MockUser | undefined {
  const normalizedEmail = email.trim().toLowerCase();
  return users.find(
    (user) => user.email.toLowerCase() === normalizedEmail && user.password === password,
  );
}

export function createMockUser(name: string, email: string, password: string): MockUser {
  return {
    id: `user-${Date.now()}`,
    name: name.trim(),
    email: email.trim().toLowerCase(),
    password,
    joinedDate: new Date().toISOString().slice(0, 10),
    currentPath: "first-program",
    progress: [
      { pathId: "first-program", label: "Your First Program", completed: 0, total: 8 },
      { pathId: "build-and-ship", label: "Build & Ship", completed: 0, total: 12 },
      { pathId: "ai-builder", label: "AI-Augmented Builder", completed: 0, total: 16 },
    ],
    stats: { labsCompleted: 0, hoursLearned: 0, streak: 0 },
  };
}

export function toPublicUser(user: MockUser): Omit<MockUser, "password"> {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    joinedDate: user.joinedDate,
    currentPath: user.currentPath,
    progress: user.progress,
    stats: user.stats,
  };
}
