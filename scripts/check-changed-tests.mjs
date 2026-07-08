#!/usr/bin/env node

/**
 * On pull requests, verifies that every changed production file
 * in src/lib/ or src/components/ has a corresponding test file.
 */

import { execSync } from "child_process";
import { existsSync } from "fs";
import { join } from "path";

const ROOT = process.cwd();
const BASE_BRANCH = process.env.BASE_BRANCH ?? "origin/main";
const ENFORCE_PREFIXES = ["src/lib/", "src/components/"];
const TEST_SUFFIXES = [".test.ts", ".test.tsx", ".spec.ts", ".spec.tsx"];
const EXCLUDED_FILES = new Set(["src/test-utils.tsx"]);

function getChangedFiles() {
  try {
    const output = execSync(`git diff --name-only ${BASE_BRANCH}...HEAD`, {
      encoding: "utf8",
    });
    return output
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);
  } catch {
    console.warn("⚠️  Could not diff against base branch — skipping changed-file check.");
    return [];
  }
}

function isEnforceableSource(file) {
  if (EXCLUDED_FILES.has(file)) {
    return false;
  }

  if (!ENFORCE_PREFIXES.some((prefix) => file.startsWith(prefix))) {
    return false;
  }

  if (!/\.(ts|tsx)$/.test(file)) {
    return false;
  }

  return !TEST_SUFFIXES.some((suffix) => file.endsWith(suffix));
}

function hasMatchingTest(sourceFile) {
  const base = sourceFile.replace(/\.(ts|tsx)$/, "");
  return TEST_SUFFIXES.some((suffix) => existsSync(join(ROOT, `${base}${suffix}`)));
}

const changedFiles = getChangedFiles();
const changedSourceFiles = changedFiles.filter(isEnforceableSource);
const missingTests = changedSourceFiles.filter((file) => !hasMatchingTest(file));

if (changedSourceFiles.length === 0) {
  console.log("✅ No enforceable source files changed in this PR.");
  process.exit(0);
}

if (missingTests.length > 0) {
  console.error("❌ Changed files in this PR are missing unit tests:\n");
  for (const file of missingTests) {
    const base = file.replace(/\.(ts|tsx)$/, "");
    console.error(`   ${file}`);
    console.error(`   → add: ${base}.test.ts(x)\n`);
  }
  process.exit(1);
}

console.log(
  `✅ All ${changedSourceFiles.length} changed source file(s) in this PR have unit tests.`,
);
