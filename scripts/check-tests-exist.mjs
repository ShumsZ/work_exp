#!/usr/bin/env node

/**
 * Ensures every production file under src/lib and src/components
 * has a matching unit test file. This is the gate that forces students
 * to write tests before their features can merge.
 */

import { existsSync, readdirSync, statSync } from "fs";
import { join, relative } from "path";

const ROOT = process.cwd();
const ENFORCE_DIRS = ["src/lib", "src/components"];
const TEST_SUFFIXES = [".test.ts", ".test.tsx", ".spec.ts", ".spec.tsx"];
const EXCLUDED_FILES = new Set(["src/test-utils.tsx"]);

function collectSourceFiles(dir) {
  const files = [];

  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      files.push(...collectSourceFiles(fullPath));
      continue;
    }

    if (!/\.(ts|tsx)$/.test(entry)) {
      continue;
    }

    if (TEST_SUFFIXES.some((suffix) => entry.endsWith(suffix))) {
      continue;
    }

    const relativePath = relative(ROOT, fullPath);
    if (!EXCLUDED_FILES.has(relativePath)) {
      files.push(relativePath);
    }
  }

  return files;
}

function hasMatchingTest(sourceFile) {
  const base = sourceFile.replace(/\.(ts|tsx)$/, "");
  return TEST_SUFFIXES.some((suffix) => existsSync(join(ROOT, `${base}${suffix}`)));
}

const sourceFiles = ENFORCE_DIRS.flatMap((dir) => {
  const absoluteDir = join(ROOT, dir);
  if (!existsSync(absoluteDir)) {
    return [];
  }
  return collectSourceFiles(absoluteDir);
});

const missingTests = sourceFiles.filter((file) => !hasMatchingTest(file));

if (missingTests.length > 0) {
  console.error("❌ The following source files are missing unit tests:\n");
  for (const file of missingTests) {
    const base = file.replace(/\.(ts|tsx)$/, "");
    console.error(`   ${file}`);
    console.error(`   → expected: ${base}.test.ts(x) or ${base}.spec.ts(x)\n`);
  }
  console.error(
    `${missingTests.length} file(s) without tests. Every file in src/lib/ and src/components/ must have a matching test.`,
  );
  process.exit(1);
}

console.log(`✅ All ${sourceFiles.length} enforceable source files have unit tests.`);
