import { Fragment, ReactNode, createElement } from "react";

export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

// Split a string on *...* segments and render each as <em> for the
// section-title gold-italic emphasis used throughout the design.
export function formatEmphasis(str: string | undefined | null): ReactNode {
  if (!str) return null;
  const parts = str.split(/(\*[^*]+\*)/g);
  return parts.map((p, i) => {
    if (p.startsWith("*") && p.endsWith("*")) {
      return createElement("em", { key: i }, p.slice(1, -1));
    }
    return createElement(Fragment, { key: i }, p);
  });
}
