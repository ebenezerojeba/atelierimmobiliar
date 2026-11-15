import { images, type ImageKey } from '../../lib/images'
import { cn } from '../../lib/cn'

const MIME: Record<string, string> = { avif: 'image/avif', webp: 'image/webp', jpg: 'image/jpeg', jpeg: 'image/jpeg' }

type PictureProps = {
  image: ImageKey
  alt: string
  sizes?: string
  className?: string
  imgClassName?: string
  /** CSS object-position */
  focus?: string
  /** Above-the-fold image: load eagerly with high priority */
  priority?: boolean
}

/** Responsive <picture> with AVIF/WebP/JPEG sources and intrinsic dimensions (no layout shift). */
export function Picture({ image, alt, sizes = '100vw', className, imgClassName, focus, priority }: PictureProps) {
  const pic = images[image]
  return (
    <picture className={cn('block h-full w-full', className)}>
      {Object.entries(pic.sources).map(([format, srcSet]) => (
        <source key={format} type={MIME[format] ?? `image/${format}`} srcSet={srcSet} sizes={sizes} />
      ))}
      <img
        src={pic.img.src}
        width={pic.img.w}
        height={pic.img.h}
        alt={alt}
        sizes={sizes}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
        draggable={false}
        className={cn('h-full w-full object-cover', imgClassName)}
        style={focus ? { objectPosition: focus } : undefined}
      />
    </picture>
  )
}
