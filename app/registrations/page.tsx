'use client'

import { useState } from 'react'
import { CheckCircle2, IdCard, Building2, Users } from 'lucide-react'
import { PageHeader } from '@/components/page-header'

const registrationTypes = [
  {
    icon: IdCard,
    title: 'Athlete Registration',
    body: 'Individual lifters register to enter sanctioned competitions and join the national pool.',
  },
  {
    icon: Building2,
    title: 'State Unit Affiliation',
    body: 'State and UT associations apply for or renew affiliation with the federation.',
  },
  {
    icon: Users,
    title: 'Coach & Official',
    body: 'Coaches, technical officials and referees register for accreditation and certification.',
  },
]

const steps = [
  'Choose your registration category',
  'Complete the online form with accurate details',
  'Upload required documents (ID, photo, eligibility proof)',
  'Submit and receive a confirmation reference',
]

export default function RegistrationsPage() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      <PageHeader
        title="Registrations"
        description="Register as an athlete, affiliate a state unit, or apply for coach and official accreditation."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Registrations' }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {registrationTypes.map((t) => (
            <div key={t.title} className="rounded-xl border border-border bg-card p-6">
              <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <t.icon className="size-5" />
              </span>
              <h2 className="mt-4 font-display text-lg font-bold text-foreground">{t.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-foreground">
              How registration works
            </h2>
            <ol className="mt-6 space-y-4">
              {steps.map((s, i) => (
                <li key={s} className="flex gap-4">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary font-display font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <p className="pt-1 text-sm leading-relaxed text-muted-foreground">{s}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold text-foreground">
              Registration enquiry
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Submit your details and the federation office will get in touch. (Demo form — no data
              is stored.)
            </p>

            {submitted ? (
              <div className="mt-6 flex items-start gap-3 rounded-lg border border-chart-2/30 bg-chart-2/10 p-4 text-sm text-foreground">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-chart-2" />
                <p>
                  Thank you. Your enquiry has been received. A federation representative will
                  respond to you shortly.
                </p>
              </div>
            ) : (
              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field id="reg-name" label="Full name" required />
                  <Field id="reg-email" label="Email" type="email" required />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field id="reg-state" label="State / UT" required />
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="reg-type" className="text-sm font-medium text-foreground">
                      Registration type
                    </label>
                    <select
                      id="reg-type"
                      className="rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option>Athlete</option>
                      <option>State Unit</option>
                      <option>Coach / Official</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="reg-msg" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    id="reg-msg"
                    rows={4}
                    className="rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Submit enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

function Field({
  id,
  label,
  type = 'text',
  required,
}: {
  id: string
  label: string
  type?: string
  required?: boolean
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
        {required && <span className="text-destructive"> *</span>}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        className="rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
      />
    </div>
  )
}
