# ComputeBeauty

A Next.js boilerplate for teaching and learning software engineering — an app that celebrates the beauty of computing and AI.

## What's inside

- **Next.js 15** with App Router and TypeScript
- **Tailwind CSS v4** for styling
- A polished landing page with sections for:
  - Computing fundamentals
  - Software engineering craft
  - AI & intelligent systems
  - Learning paths and philosophy

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project structure

```
src/
├── app/              # App Router pages and layout
├── components/       # UI sections (Hero, Pillars, Paths, etc.)
└── lib/content.ts    # Editable content — update copy and paths here
```

## Learning path syllabi

Each path card links to a syllabus preview page:

| Path                            | URL                     |
| ------------------------------- | ----------------------- |
| Your First Program (Beginner)   | `/paths/first-program`  |
| Build & Ship (Intermediate)     | `/paths/build-and-ship` |
| AI-Augmented Builder (Advanced) | `/paths/ai-builder`     |

## Customize for your class

1. Edit `src/lib/content.ts` to change pillars, learning paths, syllabi, and principles
2. Add new routes under `src/app/` for lessons and labs
3. Wire up GitHub Actions for CI (great for student assignments)

## Scripts

| Command                 | Description                               |
| ----------------------- | ----------------------------------------- |
| `npm run dev`           | Start dev server                          |
| `npm run build`         | Production build                          |
| `npm run start`         | Start production server                   |
| `npm run lint`          | Run ESLint                                |
| `npm run lint:strict`   | ESLint with zero warnings                 |
| `npm run test`          | Run unit tests                            |
| `npm run test:coverage` | Tests with 80% coverage gate              |
| `npm run test:exist`    | Verify every lib/component file has tests |
| `npm run typecheck`     | TypeScript type checking                  |
| `npm run knip`          | Dead code & unused export detection       |
| `npm run format:check`  | Prettier formatting check                 |
| `npm run ci`            | Run the full CI pipeline locally          |

## License

MIT — use freely for teaching and learning.
