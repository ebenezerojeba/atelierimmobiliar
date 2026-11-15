/**
 * Responsive images generated at build time (AVIF + WebP + JPEG, several widths)
 * from the supplied photographs in /assets.
 */
import seaSunset from '../assets/images/sea-sunset.jpg?w=640;960;1280;1600&format=avif;webp;jpg&as=picture'
import lakeView from '../assets/images/lake-view.jpg?w=640;960;1280;1600&format=avif;webp;jpg&as=picture'
import beachfront from '../assets/images/beachfront.jpg?w=640;960;1280;1600&format=avif;webp;jpg&as=picture'
import lakesideResidences from '../assets/images/lakeside-residences.jpg?w=640;960;1280;1600&format=avif;webp;jpg&as=picture'
import livingRoom from '../assets/images/living-room.jpg?w=640;960;1280;1600&format=avif;webp;jpg&as=picture'
import bedroom from '../assets/images/bedroom.jpg?w=480;800;1200&format=avif;webp;jpg&as=picture'

export type Picture = {
  sources: Record<string, string>
  img: { src: string; w: number; h: number }
}

export const images = {
  seaSunset,
  lakeView,
  beachfront,
  lakesideResidences,
  livingRoom,
  bedroom,
} satisfies Record<string, Picture>

export type ImageKey = keyof typeof images
