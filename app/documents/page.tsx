'use client'

import { useMemo, useState } from 'react'
import { Download, FileText } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { FilterChips } from '@/components/filter-chips'
import { Badge } from '@/components/ui/badge'
import { documents } from '@/lib/data'

export default function DocumentsPage() {
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(documents.map((d) => d.category)))],
    [],
  )
  const [category, setCategory] = useState('All')

  const filtered = useMemo(
    () =>
      (category === 'All'
        ? documents
        : documents.filter((d) => d.category === category)
      ).sort((a, b) => b.year - a.year),
    [category],
  )

  return (
    <>
      <PageHeader
        title="Documents & Downloads"
        description="Circulars, policies, forms, tenders and official federation records."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Documents' }]}
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

        <ul className="mt-8 divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
          {filtered.map((d) => (
            <li
              key={d.title}
              className="flex flex-col gap-3 p-4 transition-colors hover:bg-muted/50 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:p-5"
            >
              <div className="flex items-start gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <FileText className="size-5" />
                </span>
                <div>
                  <p className="font-medium text-foreground">
                    {d.title}
                    {d.important && (
                      <Badge variant="accent" className="ml-2 align-middle">
                        Important
                      </Badge>
                    )}
                  </p>
                  <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                    <span>{d.category}</span>
                    <span aria-hidden>•</span>
                    <span>{d.year}</span>
                    <span aria-hidden>•</span>
                    <span>
                      {d.type} · {d.size}
                    </span>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Download className="size-4" />
                Download
              </button>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-muted-foreground">
          Note: download links are illustrative on this demo website.
        </p>
      </section>
    </>
  )
}
