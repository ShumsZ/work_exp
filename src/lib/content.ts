export type LearningPillar = {
  id: string;
  title: string;
  description: string;
  topics: string[];
  icon: string;
};

export type LearningPath = {
  id: string;
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  summary: string;
};

export type Principle = {
  title: string;
  body: string;
};

export const pillars: LearningPillar[] = [
  {
    id: "computing",
    title: "The Beauty of Computing",
    description:
      "Discover how elegant ideas—recursion, abstraction, and composition—turn raw logic into systems that scale from a single function to the internet.",
    topics: ["Algorithms", "Data structures", "Systems thinking", "Clean code"],
    icon: "◈",
  },
  {
    id: "software-engineering",
    title: "Software Engineering Craft",
    description:
      "Learn to build software that lasts: testing, collaboration, version control, and the habits that separate prototypes from products people trust.",
    topics: ["Git & CI/CD", "Testing", "Architecture", "Code review"],
    icon: "⬡",
  },
  {
    id: "ai",
    title: "AI & Intelligent Systems",
    description:
      "Explore how machines learn patterns, reason with data, and pair with human creativity—from neural networks to the tools reshaping how we build.",
    topics: ["Machine learning", "LLMs", "Prompt design", "Responsible AI"],
    icon: "✦",
  },
];

export const paths: LearningPath[] = [
  {
    id: "first-program",
    title: "Your First Program",
    level: "Beginner",
    duration: "2 weeks",
    summary:
      "Write code that solves real problems, read errors without fear, and understand what happens when you press Run.",
  },
  {
    id: "build-and-ship",
    title: "Build & Ship",
    level: "Intermediate",
    duration: "4 weeks",
    summary:
      "Design a small app, write tests, open pull requests, and deploy with GitHub Actions—just like professional teams.",
  },
  {
    id: "ai-builder",
    title: "AI-Augmented Builder",
    level: "Advanced",
    duration: "6 weeks",
    summary:
      "Combine solid engineering with AI tools: evaluate outputs, design guardrails, and ship features that are fast and trustworthy.",
  },
];

export const principles: Principle[] = [
  {
    title: "Curiosity over memorization",
    body: "Great engineers ask why. We teach you to explore systems, not just copy answers.",
  },
  {
    title: "Clarity is a feature",
    body: "Readable code and clear thinking are force multipliers—for you, your teammates, and future you.",
  },
  {
    title: "Build in public, learn in loops",
    body: "Ship small, get feedback, iterate. Every commit is a lesson; every bug is a teacher.",
  },
];

export type AccountOption = {
  id: string;
  title: string;
  description: string;
  buttonLabel: string;
};

export const accountSection = {
  eyebrow: "Your account",
  heading: "Track your learning journey",
  description:
    "Create an account to save your progress, bookmark paths, and pick up right where you left off.",
};

export const accountOptions: AccountOption[] = [
  {
    id: "sign-in",
    title: "Sign in",
    description: "Welcome back. Continue your paths and revisit labs you've started.",
    buttonLabel: "Sign in",
  },
  {
    id: "create-account",
    title: "Create account",
    description: "New here? Join learners building real skills in computing and AI.",
    buttonLabel: "Get started",
  },
];

export const stats = [
  { label: "Core concepts", value: "40+" },
  { label: "Hands-on labs", value: "12" },
  { label: "Community learners", value: "∞" },
];
