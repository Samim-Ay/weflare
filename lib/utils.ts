import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Prefixes a /public asset path with the deployment basePath. next/image and
// <Link> get this rewrite for free; plain <img>/<video> src attributes do not,
// so they 404 on GitHub Pages without it. External URLs pass through untouched.
export function asset(path: string) {
  if (!path.startsWith("/")) return path
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`
}
