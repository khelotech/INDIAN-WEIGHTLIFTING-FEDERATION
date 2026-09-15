import type { Metadata } from 'next'
import { Award } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { Badge } from '@/components/ui/badge'
import { awardees } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Awardees',
  description:
    'Athletes and coaches recognised with national sporting honours for their contribution to weightlifting.',
}

export default function AwardeesPage() {
  const sorted = [...awardees].sort((a, b) => b.year - a.year)

  return (
    <>
      <PageHeader
        title="Awardees & Honours"
        description="Celebrating athletes and coaches recognised with national sporting awards."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Awardees' }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sorted.map((a) => (
            <article
              key={`${a.name}-${a.year}`}
              className="flex flex-col rounded-xl border border-border bg-card p-6"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-full bg-accent/25 text-accent-foreground">
                  <Award className="size-5" />
                </span>
                <Badge variant="muted">{a.year}</Badge>
              </div>
              <h2 className="mt-4 font-display text-lg font-bold text-foreground">{a.name}</h2>
              <p className="mt-1 font-semibold text-primary">{a.award}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.achievement}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
