import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Trophy } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { Badge } from '@/components/ui/badge'
import { StatusBadge } from '@/components/status-badge'
import { competitions } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Competitions',
  description:
    'National and international weightlifting competitions organised or contested by India.',
}

export default function CompetitionsPage() {
  return (
    <>
      <PageHeader
        title="Competitions"
        description="National championships and international meets across the season."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Competitions' }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {competitions.map((c) => (
            <article
              key={c.slug}
              className="flex flex-col rounded-xl border border-border bg-card p-6 sm:flex-row sm:items-center sm:gap-6"
            >
              <span className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Trophy className="size-7" />
              </span>
              <div className="mt-4 flex-1 sm:mt-0">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant={c.level === 'International' ? 'accent' : 'default'}>
                    {c.level}
                  </Badge>
                  <StatusBadge status={c.status} />
                </div>
                <h2 className="mt-2 font-display text-lg font-bold text-foreground">{c.title}</h2>
                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                  <span>{c.ageGroup}</span>
                  <span>Season {c.season}</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="size-4 text-primary" />
                    {c.venue}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-border bg-secondary/40 p-6 text-center">
          <p className="text-sm text-muted-foreground">
            Looking for full standings and medal tables?
          </p>
          <Link
            href="/results"
            className="mt-3 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            View Results & Rankings
          </Link>
        </div>
      </section>
    </>
  )
}
