import { cn } from '../../lib/cn'

/** Small numbered eyebrow used to open each section, e.g. "01 — Despre noi". */
export function SectionLabel({ index, children, className, light }: { index?: string; children: string; className?: string; light?: boolean }) {
  return (
    <p className={cn('eyebrow flex items-center gap-4', light ? 'text-bronze-light' : 'text-bronze-deep', className)}>
      {index && <span className="tabular-nums">{index}</span>}
      <span aria-hidden="true" className="h-px w-10 bg-current opacity-60" />
      <span>{children}</span>
    </p>
  )
}
