import { AnimatePresence, motion } from 'motion/react'
import { AlertCircle, Check, ChevronDown, Clock, Loader2, Mail, MapPin, Phone } from 'lucide-react'
import { useEffect, useId, useRef, useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router'
import { site } from '../../config/site'
import { properties } from '../../data/properties'
import type { NavState } from '../../hooks/useSectionNav'
import { submitEnquiry } from '../../lib/submitEnquiry'
import { Button } from '../ui/Button'
import { SectionLabel } from '../ui/SectionLabel'
import { SocialLinks } from '../ui/SocialLinks'
import { Reveal } from '../motion/Reveal'
import { RevealText } from '../motion/RevealText'
import { EASE_LUXE, cn } from '../../lib/cn'

type Fields = { name: string; email: string; phone: string; property: string; message: string; consent: boolean; company: string }
type FieldName = 'name' | 'email' | 'phone' | 'message' | 'consent'
type Status = 'idle' | 'submitting' | 'success' | 'error'

const EMPTY: Fields = { name: '', email: '', phone: '', property: '', message: '', consent: false, company: '' }
const ORDER: FieldName[] = ['name', 'email', 'phone', 'message', 'consent']

function validate(f: Fields): Partial<Record<FieldName, true>> {
  const e: Partial<Record<FieldName, true>> = {}
  if (f.name.trim().length < 2) e.name = true
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim())) e.email = true
  if (!/^\+?[\d\s().-]{7,20}$/.test(f.phone.trim()) || f.phone.replace(/\D/g, '').length < 7) e.phone = true
  if (f.message.trim().length < 10) e.message = true
  if (!f.consent) e.consent = true
  return e
}

export function Contact() {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const formId = useId()
  const formRef = useRef<HTMLFormElement>(null)
  const [fields, setFields] = useState<Fields>(EMPTY)
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({})
  const [submitted, setSubmitted] = useState(false)
  const [status, setStatus] = useState<Status>('idle')
  const statusRef = useRef<HTMLDivElement>(null)

  // Preselect a property when arriving from a property page
  const navProperty = (location.state as NavState | null)?.property
  useEffect(() => {
    if (navProperty) setFields((f) => ({ ...f, property: navProperty }))
  }, [navProperty])

  const errors = validate(fields)
  const showError = (name: FieldName) => Boolean(errors[name] && (touched[name] || submitted))

  const update = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const v = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    setFields((f) => ({ ...f, [name]: v }))
    if (status === 'error') setStatus('idle')
  }
  const blur = (name: FieldName) => setTouched((s) => ({ ...s, [name]: true }))

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    const firstInvalid = ORDER.find((n) => errors[n])
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus()
      return
    }
    if (fields.company) return // honeypot: silently drop bots

    setStatus('submitting')
    try {
      const propertyName = fields.property ? t(`properties.items.${fields.property as (typeof properties)[number]['id']}`).name : ''
      await submitEnquiry({
        name: fields.name.trim(),
        email: fields.email.trim(),
        phone: fields.phone.trim(),
        property: propertyName,
        message: fields.message.trim(),
        language: i18n.resolvedLanguage ?? 'ro',
      })
      setStatus('success')
      setFields(EMPTY)
      setTouched({})
      setSubmitted(false)
    } catch {
      setStatus('error')
    }
  }

  useEffect(() => {
    if (status === 'success' || status === 'error') statusRef.current?.focus()
  }, [status])

  const info: Array<{ icon: typeof Phone; label: string; value: string | null; href?: string }> = [
    { icon: Phone, label: t('contact.phone'), value: site.contact.phone, href: site.contact.phone ? `tel:${site.contact.phone.replace(/\s/g, '')}` : undefined },
    { icon: Mail, label: t('contact.email'), value: site.contact.email, href: site.contact.email ? `mailto:${site.contact.email}` : undefined },
    { icon: MapPin, label: t('contact.address'), value: site.contact.address },
    { icon: Clock, label: t('contact.hours'), value: site.contact.hours },
  ]

  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-ivory py-28 sm:py-36 lg:py-44">
      <div className="container-site grid gap-16 lg:grid-cols-12 lg:gap-8">
        {/* Intro + details */}
        <div className="lg:col-span-5">
          <Reveal>
            <SectionLabel index="04">{t('contact.label')}</SectionLabel>
          </Reveal>
          <RevealText as="h2" id="contact-title" text={t('contact.title')} className="heading mt-8 text-[clamp(2.3rem,4vw,3.6rem)]" />
          <Reveal delay={0.15}>
            <p className="lede mt-8 max-w-md">{t('contact.subtitle')}</p>
          </Reveal>

          <Reveal delay={0.25}>
            <dl className="mt-14 space-y-7">
              {info.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center border border-ink/15">
                    <Icon aria-hidden="true" className="h-[18px] w-[18px] text-bronze-deep" strokeWidth={1.4} />
                  </span>
                  <div>
                    <dt className="text-[0.68rem] font-semibold tracking-[0.2em] text-taupe uppercase">{label}</dt>
                    <dd className="mt-1 text-[1.02rem]">
                      {value ? (
                        href ? (
                          <a href={href} className="link-line">
                            {value}
                          </a>
                        ) : (
                          value
                        )
                      ) : (
                        <span className="text-taupe italic">{t('contact.toBeCompleted')}</span>
                      )}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
            <div className="mt-12">
              <p className="eyebrow mb-4 text-ash">{t('contact.follow')}</p>
              <SocialLinks className="text-ink" />
            </div>
          </Reveal>
        </div>

        {/* Form */}
        <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
          <div className="relative bg-paper p-6 shadow-[0_40px_80px_-50px_rgba(28,26,23,0.35)] sm:p-12">
            <AnimatePresence mode="wait" initial={false}>
              {status === 'success' ? (
                <motion.div
                  key="success"
                  ref={statusRef}
                  tabIndex={-1}
                  role="status"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.8, ease: EASE_LUXE }}
                  className="flex min-h-[520px] flex-col items-start justify-center outline-none"
                >
                  <span className="grid h-16 w-16 place-items-center rounded-full border border-bronze text-bronze-deep">
                    <Check aria-hidden="true" className="h-7 w-7" strokeWidth={1.25} />
                  </span>
                  <h3 className="heading mt-8 text-5xl">{t('contact.form.successTitle')}</h3>
                  <p className="lede mt-4 max-w-sm">{t('contact.form.successText')}</p>
                  <Button variant="outline-dark" className="mt-10" icon={false} onClick={() => setStatus('idle')}>
                    {t('contact.form.sendAnother')}
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  ref={formRef}
                  noValidate
                  onSubmit={onSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  aria-describedby={`${formId}-req`}
                  className="space-y-7"
                >
                  <div className="grid gap-7 sm:grid-cols-2">
                    <Field id={`${formId}-name`} label={t('contact.form.name')} required error={showError('name') ? t('contact.errors.name') : undefined}>
                      {(p) => <input {...p} name="name" type="text" autoComplete="name" value={fields.name} onChange={update} onBlur={() => blur('name')} />}
                    </Field>
                    <Field id={`${formId}-phone`} label={t('contact.form.phone')} required error={showError('phone') ? t('contact.errors.phone') : undefined}>
                      {(p) => <input {...p} name="phone" type="tel" autoComplete="tel" inputMode="tel" value={fields.phone} onChange={update} onBlur={() => blur('phone')} />}
                    </Field>
                  </div>
                  <Field id={`${formId}-email`} label={t('contact.form.email')} required error={showError('email') ? t('contact.errors.email') : undefined}>
                    {(p) => <input {...p} name="email" type="email" autoComplete="email" value={fields.email} onChange={update} onBlur={() => blur('email')} />}
                  </Field>

                  <div className="relative">
                    <select
                      id={`${formId}-property`}
                      name="property"
                      value={fields.property}
                      onChange={update}
                      className="field-input field-select cursor-pointer appearance-none pr-8"
                    >
                      <option value="">{t('contact.form.propertyNone')}</option>
                      {properties.map((p) => (
                        <option key={p.id} value={p.id}>
                          {t(`properties.items.${p.id}`).name}
                        </option>
                      ))}
                    </select>
                    <ChevronDown aria-hidden="true" className="pointer-events-none absolute right-0 bottom-3 h-4 w-4 text-ash" strokeWidth={1.5} />
                    <label htmlFor={`${formId}-property`} className="field-label">
                      {t('contact.form.property')}
                    </label>
                  </div>

                  <Field id={`${formId}-message`} label={t('contact.form.message')} required error={showError('message') ? t('contact.errors.message') : undefined}>
                    {(p) => <textarea {...p} name="message" rows={4} value={fields.message} onChange={update} onBlur={() => blur('message')} className={cn(p.className, 'resize-none')} />}
                  </Field>

                  {/* Honeypot — hidden from people, tempting for bots */}
                  <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
                    <label>
                      Company
                      <input name="company" tabIndex={-1} autoComplete="off" value={fields.company} onChange={update} />
                    </label>
                  </div>

                  <div>
                    <label className="flex cursor-pointer items-start gap-4 text-[0.88rem] leading-relaxed text-ash">
                      <span className="relative mt-0.5 grid h-5 w-5 shrink-0 place-items-center">
                        <input
                          type="checkbox"
                          name="consent"
                          checked={fields.consent}
                          onChange={update}
                          onBlur={() => blur('consent')}
                          aria-invalid={showError('consent')}
                          aria-describedby={showError('consent') ? `${formId}-consent-err` : undefined}
                          className="peer h-5 w-5 cursor-pointer appearance-none border border-ink/35 bg-transparent transition-colors checked:border-ink checked:bg-ink aria-[invalid=true]:border-red-700"
                        />
                        <Check aria-hidden="true" className="pointer-events-none absolute h-3.5 w-3.5 text-ivory opacity-0 peer-checked:opacity-100" strokeWidth={2.5} />
                      </span>
                      <span>
                        {t('contact.form.consent')} <span aria-hidden="true">*</span>
                      </span>
                    </label>
                    <FieldError id={`${formId}-consent-err`} message={showError('consent') ? t('contact.errors.consent') : undefined} />
                  </div>

                  <AnimatePresence>
                    {status === 'error' && (
                      <motion.div
                        ref={statusRef}
                        tabIndex={-1}
                        role="alert"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden outline-none"
                      >
                        <div className="flex gap-3 border-l-2 border-red-700 bg-red-50 px-4 py-3 text-sm text-red-900">
                          <AlertCircle aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.75} />
                          <div>
                            <p className="font-semibold">{t('contact.form.errorTitle')}</p>
                            <p>{t('contact.form.errorText')}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex flex-col gap-5 pt-2 sm:flex-row sm:items-center sm:justify-between">
                    <p id={`${formId}-req`} className="text-[0.8rem] text-taupe">
                      {t('contact.form.required')}
                    </p>
                    <Button type="submit" variant="dark" disabled={status === 'submitting'} icon={status !== 'submitting'}>
                      {status === 'submitting' ? (
                        <span className="flex items-center gap-3">
                          <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin" strokeWidth={1.75} />
                          {t('contact.form.sending')}
                        </span>
                      ) : (
                        t('contact.form.submit')
                      )}
                    </Button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

type InputProps = {
  id: string
  className: string
  placeholder: string
  required: boolean
  'aria-required': boolean
  'aria-invalid': boolean
  'aria-describedby'?: string
}

/** Floating-label field with accessible error wiring. */
function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string
  label: string
  required?: boolean
  error?: string
  children: (props: InputProps) => ReactNode
}) {
  const errId = `${id}-err`
  return (
    <div>
      <div className="relative">
        {children({
          id,
          className: 'field-input',
          placeholder: ' ',
          required: Boolean(required),
          'aria-required': Boolean(required),
          'aria-invalid': Boolean(error),
          'aria-describedby': error ? errId : undefined,
        })}
        <label htmlFor={id} className="field-label">
          {label}
          {required && <span aria-hidden="true"> *</span>}
        </label>
      </div>
      <FieldError id={errId} message={error} />
    </div>
  )
}

function FieldError({ id, message }: { id: string; message?: string }) {
  return (
    <AnimatePresence initial={false}>
      {message && (
        <motion.p
          id={id}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.35, ease: EASE_LUXE }}
          className="overflow-hidden pt-2 text-[0.8rem] text-red-800"
        >
          {message}
        </motion.p>
      )}
    </AnimatePresence>
  )
}
