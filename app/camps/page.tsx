import type { Metadata } from 'next'
import { CalendarDays, MapPin, Users } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { Badge } from '@/components/ui/badge'
import { StatusBadge } from '@/components/status-badge'
import { formatDateRange } from '@/lib/format'
import { camps } from '@/lib/data'

export const metadata: Metadata = {
  title: 'National Camps',
  description:
    'National coaching camps for the preparation of India’s weightlifting squads across age groups.',
}

export default function CampsPage() {
  return (
    <>
      <PageHeader
        title="National Camps"
        description="Preparatory and high-performance coaching camps for the national pool of lifters."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'National Camps' }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {camps.map((c) => (
            <article
              key={c.slug}
              className="flex flex-col rounded-xl border border-border bg-card p-6"
            >
              <div className="flex items-center justify-between">
                <Badge variant="accent">{c.category}</Badge>
                <StatusBadge status={c.status} />
              </div>
              <h2 className="mt-4 font-display text-lg font-bold text-foreground">{c.title}</h2>
              <dl className="mt-4 space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CalendarDays className="size-4 shrink-0 text-primary" />
                  <dd>{formatDateRange(c.startDate, c.endDate)}</dd>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="size-4 shrink-0 text-primary" />
                  <dd>{c.location}</dd>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="size-4 shrink-0 text-primary" />
                  <dd>{c.athletes} athletes in attendance</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
