## What this PR does

<!-- Briefly describe the feature or fix -->

## Checklist — your PR will not merge until every item passes CI

- [ ] I added **unit tests** for every file I created or changed under `src/lib/` or `src/components/`
- [ ] `npm run test:coverage` passes with **≥80% coverage**
- [ ] `npm run lint:strict` passes (no unused imports, no unused variables)
- [ ] `npm run typecheck` passes
- [ ] `npm run knip` passes (no dead exports or unused files)
- [ ] `npm run format:check` passes
- [ ] `npm run build` succeeds

## How to test locally

```bash
npm run ci
```

## Screenshots (if UI changed)

<!-- Add before/after screenshots if relevant -->
