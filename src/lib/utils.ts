import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}

// Additional font utility function
export function fontUtility(size: string, weight: string): string {
  return `text-${size} font-${weight}`;
}
