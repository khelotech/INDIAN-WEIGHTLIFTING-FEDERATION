import { Badge } from '@/components/ui/badge'
import type { Athlete } from '@/lib/data'

function initials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
}

export function AthleteCard({ athlete }: { athlete: Athlete }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-lg">
      <div className="relative flex h-32 items-center justify-center bg-gradient-to-br from-primary via-primary to-[oklch(0.35_0.13_255)]">
        <span
          aria-hidden
          className="font-display text-4xl font-extrabold text-primary-foreground/95"
        >
          {initials(athlete.name)}
        </span>
        <div className="absolute right-3 top-3">
          <Badge variant={athlete.active ? 'success' : 'muted'}>
            {athlete.active ? 'Active' : 'Retired'}
          </Badge>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-display text-lg font-bold text-foreground">{athlete.name}</h3>
        <p className="text-sm text-muted-foreground">{athlete.state}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          <Badge variant="default">{athlete.weightCategory}</Badge>
          <Badge variant="accent">{athlete.ageGroup}</Badge>
          <Badge variant="muted">{athlete.gender}</Badge>
        </div>
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {athlete.bio}
        </p>
        <dl className="mt-4 grid grid-cols-2 gap-2 border-t border-border pt-4 text-center">
          <div>
            <dt className="text-xs text-muted-foreground">Best Total</dt>
            <dd className="font-display text-xl font-bold text-primary">{athlete.bestTotal} kg</dd>
          </div>
          <div>
            <dt className="text-xs text-muted-foreground">Medals</dt>
            <dd className="font-display text-xl font-bold text-primary">{athlete.medals}</dd>
          </div>
        </dl>
      </div>
    </article>
  )
}
