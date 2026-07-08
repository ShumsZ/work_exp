export type LearningPillar = {
  id: string;
  title: string;
  description: string;
  topics: string[];
  icon: string;
};

export type SyllabusModule = {
  title: string;
  duration: string;
  topics: string[];
  outcome: string;
};

export type Syllabus = {
  overview: string;
  prerequisites: string[];
  modules: SyllabusModule[];
};

export type LearningPath = {
  id: string;
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  summary: string;
  syllabus: Syllabus;
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
    syllabus: {
      overview:
        "A gentle introduction to programming. You will learn by writing small programs, reading error messages, and building confidence one run at a time.",
      prerequisites: [
        "No prior coding experience required",
        "A computer with internet access",
        "Curiosity and patience",
      ],
      modules: [
        {
          title: "Hello, Code",
          duration: "Week 1 · 3 days",
          topics: ["Variables", "Output", "Running programs"],
          outcome: "Write and run your first program that produces output.",
        },
        {
          title: "Logic & Loops",
          duration: "Week 1 · 4 days",
          topics: ["Conditionals", "Iteration", "Boolean logic"],
          outcome: "Solve problems using if/else and loops.",
        },
        {
          title: "Functions & Errors",
          duration: "Week 2 · 3 days",
          topics: ["Functions", "Stack traces", "Debugging basics"],
          outcome: "Read errors without fear and reuse code with functions.",
        },
        {
          title: "Mini Project",
          duration: "Week 2 · 4 days",
          topics: ["CLI", "Problem solving", "Putting it together"],
          outcome: "Ship a small command-line program you can show off.",
        },
      ],
    },
  },
  {
    id: "build-and-ship",
    title: "Build & Ship",
    level: "Intermediate",
    duration: "4 weeks",
    summary:
      "Design a small app, write tests, open pull requests, and deploy with GitHub Actions—just like professional teams.",
    syllabus: {
      overview:
        "Move from solo coding to team-ready engineering. You will design, test, collaborate, and ship a real application using industry workflows.",
      prerequisites: [
        "Comfortable writing basic programs",
        "Familiar with variables, functions, and loops",
        "GitHub account recommended",
      ],
      modules: [
        {
          title: "Design a Small App",
          duration: "Week 1 · 5 days",
          topics: ["Requirements", "Architecture", "Project structure"],
          outcome: "Plan and scaffold a small app with clear boundaries.",
        },
        {
          title: "Tests First",
          duration: "Week 2 · 5 days",
          topics: ["Unit tests", "TDD", "Assertions"],
          outcome: "Write tests that give you confidence to refactor.",
        },
        {
          title: "Git & Pull Requests",
          duration: "Week 3 · 5 days",
          topics: ["Branches", "Code review", "CI basics"],
          outcome: "Open a PR and respond to review feedback.",
        },
        {
          title: "Deploy",
          duration: "Week 4 · 5 days",
          topics: ["GitHub Actions", "Production checklist", "Monitoring"],
          outcome: "Ship your app with automated CI/CD.",
        },
      ],
    },
  },
  {
    id: "ai-builder",
    title: "AI-Augmented Builder",
    level: "Advanced",
    duration: "6 weeks",
    summary:
      "Combine solid engineering with AI tools: evaluate outputs, design guardrails, and ship features that are fast and trustworthy.",
    syllabus: {
      overview:
        "Learn to use AI as a force multiplier without sacrificing engineering discipline. You will evaluate model outputs, design guardrails, and ship production-quality features.",
      prerequisites: [
        "Completed an intermediate project with tests and CI",
        "Comfortable with Git workflows",
        "Open to experimenting with AI coding tools",
      ],
      modules: [
        {
          title: "Solid Foundations",
          duration: "Week 1–2 · 6 days",
          topics: ["Architecture", "Guardrails", "Code quality"],
          outcome: "Establish engineering patterns before adding AI to the mix.",
        },
        {
          title: "AI-Assisted Development",
          duration: "Week 3–4 · 8 days",
          topics: ["Prompts", "Code generation", "Output evaluation"],
          outcome: "Use AI tools effectively while verifying every output.",
        },
        {
          title: "Responsible AI",
          duration: "Week 5 · 5 days",
          topics: ["Hallucinations", "Privacy", "Verification"],
          outcome: "Design guardrails that keep AI-assisted code trustworthy.",
        },
        {
          title: "Capstone",
          duration: "Week 6 · 7 days",
          topics: ["Full-stack feature", "AI + engineering", "Ship it"],
          outcome:
            "Ship a production feature combining AI tools and solid engineering.",
        },
      ],
    },
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

export const stats = [
  { label: "Core concepts", value: "40+" },
  { label: "Hands-on labs", value: "12" },
  { label: "Community learners", value: "∞" },
];
