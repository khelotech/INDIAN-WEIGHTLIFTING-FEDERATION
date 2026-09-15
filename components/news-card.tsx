import { Badge } from '@/components/ui/badge'
import { formatDate } from '@/lib/format'
import type { NewsItem } from '@/lib/data'

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-lg">
      <div className="flex h-24 items-end bg-gradient-to-br from-[oklch(0.35_0.13_255)] to-primary p-4">
        <Badge className="bg-primary-foreground/90 text-primary">{item.category}</Badge>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <time dateTime={item.date} className="text-xs font-medium text-muted-foreground">
          {formatDate(item.date)}
        </time>
        <h3 className="mt-2 font-display text-lg font-bold leading-snug text-foreground group-hover:text-primary">
          {item.title}
        </h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {item.excerpt}
        </p>
        <span className="mt-4 text-sm font-semibold text-primary">Read more →</span>
      </div>
    </article>
  )
}
