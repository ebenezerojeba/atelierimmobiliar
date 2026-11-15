import { useTranslation } from 'react-i18next'
import { Picture } from '../components/ui/Picture'
import { Button } from '../components/ui/Button'
import { RevealText } from '../components/motion/RevealText'

export default function NotFound({ property }: { property?: boolean }) {
  const { t } = useTranslation()
  return (
    <section className="relative grid min-h-[100svh] place-items-center overflow-hidden bg-ink px-6 text-center text-ivory">
      <div className="absolute inset-0 opacity-30">
        <Picture image="lakeView" alt="" priority />
      </div>
      <div className="relative z-10 max-w-2xl">
        <p className="eyebrow text-bronze-light">404</p>
        <RevealText
          as="h1"
          onMount
          text={property ? t('detail.notFoundTitle') : t('notFound.title')}
          className="display mt-6 text-[clamp(2.6rem,6vw,5.5rem)]"
        />
        <p className="mt-6 text-lg text-ivory/80">{property ? t('detail.notFoundText') : t('notFound.text')}</p>
        <Button to="/" variant="light" className="mt-10">
          {t('detail.backHome')}
        </Button>
      </div>
    </section>
  )
}
