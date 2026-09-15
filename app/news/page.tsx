'use client'

import { useMemo, useState } from 'react'
import { PageHeader } from '@/components/page-header'
import { FilterChips } from '@/components/filter-chips'
import { NewsCard } from '@/components/news-card'
import { news } from '@/lib/data'

export default function NewsPage() {
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(news.map((n) => n.category)))],
    [],
  )
  const [category, setCategory] = useState('All')

  const filtered = useMemo(
    () => (category === 'All' ? news : news.filter((n) => n.category === category)),
    [category],
  )

  return (
    <>
      <PageHeader
        title="News & Media"
        description="Press releases, announcements, tenders and federation notices."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'News' }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="rounded-xl border border-border bg-secondary/40 p-5">
          <FilterChips
            label="Category"
            options={categories}
            value={category}
            onChange={setCategory}
          />
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <NewsCard key={item.slug} item={item} />
          ))}
        </div>
      </section>
    </>
  )
}
