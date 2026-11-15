import { site, type SocialNetwork } from '../../config/site'
import { cn } from '../../lib/cn'

const ICONS: Record<SocialNetwork, React.ReactNode> = {
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
    </>
  ),
  facebook: <path d="M14.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.6-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H9v3h2.5V21" />,
  linkedin: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2" />
      <path d="M8 10.5V16.5M8 7.6v.01M11.5 16.5v-3.4a2 2 0 0 1 4 0v3.4M11.5 10.5v6" />
    </>
  ),
}

const LABELS: Record<SocialNetwork, string> = {
  instagram: 'Instagram',
  facebook: 'Facebook',
  linkedin: 'LinkedIn',
}

export function SocialLinks({ className, itemClassName }: { className?: string; itemClassName?: string }) {
  const entries = (Object.entries(site.social) as [SocialNetwork, string | null][]).filter(([, url]) => url)
  return (
    <ul className={cn('flex items-center gap-2', className)}>
      {entries.map(([network, url]) => (
        <li key={network}>
          <a
            href={url!}
            aria-label={LABELS[network]}
            target={url!.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            className={cn(
              'grid h-11 w-11 place-items-center border border-current/20 transition-colors duration-500 hover:border-current/70',
              itemClassName,
            )}
          >
            <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              {ICONS[network]}
            </svg>
          </a>
        </li>
      ))}
    </ul>
  )
}
