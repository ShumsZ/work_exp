import { paths, type LearningPath } from "@/lib/content";

export function getPathById(id: string): LearningPath | undefined {
  return paths.find((path) => path.id === id);
}

export function getAllPathIds(): string[] {
  return paths.map((path) => path.id);
}
