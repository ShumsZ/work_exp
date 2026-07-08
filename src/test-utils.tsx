import { render, type RenderOptions } from "@testing-library/react";
import type { ReactElement, ReactNode } from "react";
import { AccountProvider } from "@/components/AccountProvider";

function AllProviders({ children }: { children: ReactNode }) {
  return <AccountProvider>{children}</AccountProvider>;
}

export function renderWithProviders(
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) {
  return render(ui, { wrapper: AllProviders, ...options });
}
