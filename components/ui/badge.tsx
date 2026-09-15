import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium whitespace-nowrap',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary/10 text-primary',
        accent: 'border-transparent bg-accent/25 text-accent-foreground',
        success: 'border-transparent bg-chart-2/15 text-chart-2',
        muted: 'border-border bg-muted text-muted-foreground',
        gold: 'border-transparent bg-[oklch(0.85_0.14_88)]/25 text-[oklch(0.45_0.1_75)]',
        silver: 'border-transparent bg-[oklch(0.85_0_0)]/40 text-[oklch(0.4_0_0)]',
        bronze: 'border-transparent bg-[oklch(0.7_0.1_50)]/25 text-[oklch(0.42_0.09_45)]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<'span'> & VariantProps<typeof badgeVariants>) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
