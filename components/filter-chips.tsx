'use client'

import { cn } from '@/lib/utils'

export function FilterChips({
  label,
  options,
  value,
  onChange,
}: {
  label: string
  options: string[]
  value: string
  onChange: (v: string) => void
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}:
      </span>
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          className={cn(
            'rounded-full border px-3 py-1 text-sm font-medium transition-colors',
            value === opt
              ? 'border-primary bg-primary text-primary-foreground'
              : 'border-border bg-background text-foreground/75 hover:bg-muted',
          )}
        >
          {opt}
        </button>
      ))}
    </div>
  )
}
