"use client";

import { AccountProvider as Provider } from "@/lib/accountContext";
import type { ReactNode } from "react";

export function AccountProvider({ children }: { children: ReactNode }) {
  return <Provider>{children}</Provider>;
}
