'use client'

import { useMemo, useState } from 'react'
import { cn } from '@/lib/utils'
import { PageHeader } from '@/components/page-header'
import { FilterChips } from '@/components/filter-chips'
import { Badge } from '@/components/ui/badge'
import { MedalBadge } from '@/components/status-badge'
import { results, rankings } from '@/lib/data'

type Tab = 'results' | 'rankings'

export default function ResultsPage() {
  const [tab, setTab] = useState<Tab>('results')
  const [gender, setGender] = useState('All')

  const filteredResults = useMemo(
    () => (gender === 'All' ? results : results.filter((r) => r.gender === gender)),
    [gender],
  )
  const filteredRankings = useMemo(
    () => (gender === 'All' ? rankings : rankings.filter((r) => r.gender === gender)),
    [gender],
  )

  return (
    <>
      <PageHeader
        title="Results & Rankings"
        description="Official competition results, medal tables and the national ranking list."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Results & Rankings' }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div
            role="tablist"
            aria-label="Results and rankings"
            className="inline-flex rounded-lg border border-border bg-secondary/40 p-1"
          >
            {(['results', 'rankings'] as Tab[]).map((t) => (
              <button
                key={t}
                role="tab"
                aria-selected={tab === t}
                onClick={() => setTab(t)}
                className={cn(
                  'rounded-md px-4 py-2 text-sm font-semibold capitalize transition-colors',
                  tab === t
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground/70 hover:text-foreground',
                )}
              >
                {t === 'results' ? 'Competition Results' : 'National Rankings'}
              </button>
            ))}
          </div>
          <FilterChips
            label="Gender"
            options={['All', 'Men', 'Women']}
            value={gender}
            onChange={setGender}
          />
        </div>

        <div className="mt-8 overflow-x-auto rounded-xl border border-border">
          {tab === 'results' ? (
            <table className="w-full min-w-[720px] border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-left text-primary-foreground">
                  <th className="px-4 py-3 font-semibold">Rank</th>
                  <th className="px-4 py-3 font-semibold">Athlete</th>
                  <th className="px-4 py-3 font-semibold">Category</th>
                  <th className="px-4 py-3 text-right font-semibold">Snatch</th>
                  <th className="px-4 py-3 text-right font-semibold">C&amp;J</th>
                  <th className="px-4 py-3 text-right font-semibold">Total</th>
                  <th className="px-4 py-3 font-semibold">Medal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-card">
                {filteredResults.map((r, i) => (
                  <tr key={`${r.athlete}-${r.weightCategory}-${i}`} className="hover:bg-muted/40">
                    <td className="px-4 py-3 font-display font-bold text-primary">{r.rank}</td>
                    <td className="px-4 py-3">
                      <div className="font-medium text-foreground">{r.athlete}</div>
                      <div className="text-xs text-muted-foreground">{r.state}</div>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {r.gender} · {r.weightCategory}
                    </td>
                    <td className="px-4 py-3 text-right tabular-nums">{r.snatch}</td>
                    <td className="px-4 py-3 text-right tabular-nums">{r.cleanJerk}</td>
                    <td className="px-4 py-3 text-right font-semibold tabular-nums">
                      {r.total}
                      {r.record && (
                        <Badge variant="accent" className="ml-2">
                          NR
                        </Badge>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <MedalBadge medal={r.medal} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-left text-primary-foreground">
                  <th className="px-4 py-3 font-semibold">Rank</th>
                  <th className="px-4 py-3 font-semibold">Athlete</th>
                  <th className="px-4 py-3 font-semibold">Category</th>
                  <th className="px-4 py-3 text-right font-semibold">Best Total</th>
                  <th className="px-4 py-3 text-right font-semibold">Points</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-card">
                {filteredRankings.map((r) => (
                  <tr key={r.athlete} className="hover:bg-muted/40">
                    <td className="px-4 py-3 font-display font-bold text-primary">{r.rank}</td>
                    <td className="px-4 py-3">
                      <div className="font-medium text-foreground">{r.athlete}</div>
                      <div className="text-xs text-muted-foreground">{r.state}</div>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {r.gender} · {r.weightCategory}
                    </td>
                    <td className="px-4 py-3 text-right font-semibold tabular-nums">
                      {r.bestTotal} kg
                    </td>
                    <td className="px-4 py-3 text-right tabular-nums">{r.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          NR = National Record. Figures shown are illustrative sample data.
        </p>
      </section>
    </>
  )
}
