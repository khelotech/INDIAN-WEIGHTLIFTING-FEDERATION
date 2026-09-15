'use client'

import { useMemo, useState } from 'react'
import { CalendarDays, MapPin } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { FilterChips } from '@/components/filter-chips'
import { Badge } from '@/components/ui/badge'
import { StatusBadge } from '@/components/status-badge'
import { formatDateRange } from '@/lib/format'
import { events } from '@/lib/data'

export default function EventsPage() {
  const [status, setStatus] = useState('All')
  const [level, setLevel] = useState('All')

  const filtered = useMemo(
    () =>
      events.filter(
        (e) =>
          (status === 'All' || e.status === status) &&
          (level === 'All' || e.level === level),
      ),
    [status, level],
  )

  return (
    <>
      <PageHeader
        title="Events"
        description="The official competition calendar — national, zonal and international events."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Events' }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-4 rounded-xl border border-border bg-secondary/40 p-5">
          <FilterChips
            label="Status"
            options={['All', 'Upcoming', 'Ongoing', 'Completed']}
            value={status}
            onChange={setStatus}
          />
          <FilterChips
            label="Level"
            options={['All', 'National', 'International', 'Zonal', 'State']}
            value={level}
            onChange={setLevel}
          />
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((e) => (
            <article
              key={e.slug}
              className="flex flex-col rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <Badge variant="accent">{e.level}</Badge>
                <StatusBadge status={e.status} />
              </div>
              <h2 className="mt-4 font-display text-lg font-bold leading-snug text-foreground">
                {e.title}
              </h2>
              <dl className="mt-4 space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CalendarDays className="size-4 shrink-0 text-primary" />
                  <dd>{formatDateRange(e.startDate, e.endDate)}</dd>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                  <dd>
                    {e.venue}, {e.city}, {e.state}
                  </dd>
                </div>
              </dl>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {e.description}
              </p>
              <div className="mt-4 border-t border-border pt-4">
                <Badge variant="muted">{e.category} category</Badge>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-10 rounded-xl border border-dashed border-border p-12 text-center text-muted-foreground">
            No events match the selected filters.
          </div>
        )}
      </section>
    </>
  )
}
