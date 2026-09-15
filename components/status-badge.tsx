import { Badge } from '@/components/ui/badge'
import type { EventStatus } from '@/lib/data'

export function StatusBadge({ status }: { status: EventStatus }) {
  const variant =
    status === 'Upcoming' ? 'default' : status === 'Ongoing' ? 'success' : 'muted'
  return <Badge variant={variant}>{status}</Badge>
}

export function MedalBadge({ medal }: { medal: 'Gold' | 'Silver' | 'Bronze' | '-' }) {
  if (medal === '-') return <span className="text-muted-foreground">—</span>
  const variant = medal === 'Gold' ? 'gold' : medal === 'Silver' ? 'silver' : 'bronze'
  return <Badge variant={variant}>{medal}</Badge>
}
