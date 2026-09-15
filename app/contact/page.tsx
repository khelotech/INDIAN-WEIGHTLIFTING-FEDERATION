'use client'

import { useState } from 'react'
import { CheckCircle2, Mail, MapPin, Phone, Clock } from 'lucide-react'
import { PageHeader } from '@/components/page-header'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      <PageHeader
        title="Contact Us"
        description="Get in touch with the federation office for any queries or assistance."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-foreground">
              Federation Office
            </h2>
            <ul className="mt-6 space-y-5">
              <ContactRow icon={MapPin} title="Address">
                Indian Weightlifting Federation, Federation House, New Delhi, India
              </ContactRow>
              <ContactRow icon={Phone} title="Phone">
                +91 11 0000 0000
              </ContactRow>
              <ContactRow icon={Mail} title="Email">
                info@iwlf.example
              </ContactRow>
              <ContactRow icon={Clock} title="Office hours">
                Monday to Friday, 10:00 AM – 5:00 PM IST
              </ContactRow>
            </ul>

            <div className="mt-8 flex h-56 items-center justify-center rounded-xl border border-border bg-secondary/40 text-sm text-muted-foreground">
              Map location (illustrative)
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold text-foreground">Send a message</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Demo form — submissions are not stored on this static website.
            </p>

            {submitted ? (
              <div className="mt-6 flex items-start gap-3 rounded-lg border border-chart-2/30 bg-chart-2/10 p-4 text-sm text-foreground">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-chart-2" />
                <p>Thank you for reaching out. We will respond to your message soon.</p>
              </div>
            ) : (
              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
              >
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="c-name" className="text-sm font-medium text-foreground">
                    Full name <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="c-name"
                    required
                    className="rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="c-email" className="text-sm font-medium text-foreground">
                    Email <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="c-email"
                    type="email"
                    required
                    className="rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="c-subject" className="text-sm font-medium text-foreground">
                    Subject
                  </label>
                  <input
                    id="c-subject"
                    className="rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="c-message" className="text-sm font-medium text-foreground">
                    Message <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    id="c-message"
                    rows={5}
                    required
                    className="rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

function ContactRow({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  children: React.ReactNode
}) {
  return (
    <li className="flex gap-4">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="size-5" />
      </span>
      <div>
        <p className="font-semibold text-foreground">{title}</p>
        <p className="mt-0.5 text-sm text-muted-foreground">{children}</p>
      </div>
    </li>
  )
}
