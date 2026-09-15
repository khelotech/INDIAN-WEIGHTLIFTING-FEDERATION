'use client'

import { useMemo, useState } from 'react'
import { PageHeader } from '@/components/page-header'
import { FilterChips } from '@/components/filter-chips'
import { AthleteCard } from '@/components/athlete-card'
import { athletes } from '@/lib/data'

export default function AthletesPage() {
  const [gender, setGender] = useState('All')
  const [ageGroup, setAgeGroup] = useState('All')
  const [status, setStatus] = useState('All')

  const filtered = useMemo(
    () =>
      athletes.filter(
        (a) =>
          (gender === 'All' || a.gender === gender) &&
          (ageGroup === 'All' || a.ageGroup === ageGroup) &&
          (status === 'All' ||
            (status === 'Active' ? a.active : !a.active)),
      ),
    [gender, ageGroup, status],
  )

  return (
    <>
      <PageHeader
        title="Athletes"
        description="Explore the lifters registered with the federation across categories and states."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Athletes' }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-4 rounded-xl border border-border bg-secondary/40 p-5">
          <FilterChips
            label="Gender"
            options={['All', 'Men', 'Women']}
            value={gender}
            onChange={setGender}
          />
          <FilterChips
            label="Age Group"
            options={['All', 'Youth', 'Junior', 'Senior']}
            value={ageGroup}
            onChange={setAgeGroup}
          />
          <FilterChips
            label="Status"
            options={['All', 'Active', 'Retired']}
            value={status}
            onChange={setStatus}
          />
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          Showing <span className="font-semibold text-foreground">{filtered.length}</span> of{' '}
          {athletes.length} athletes
        </p>

        {filtered.length > 0 ? (
          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((a) => (
              <AthleteCard key={a.slug} athlete={a} />
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-xl border border-dashed border-border p-12 text-center text-muted-foreground">
            No athletes match the selected filters.
          </div>
        )}
      </section>
    </>
  )
}
