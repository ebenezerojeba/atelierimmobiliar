export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

/** Shared easing curves (mirrors the CSS tokens in index.css). */
export const EASE_LUXE = [0.22, 1, 0.36, 1] as const
export const EASE_CURTAIN = [0.76, 0, 0.24, 1] as const
