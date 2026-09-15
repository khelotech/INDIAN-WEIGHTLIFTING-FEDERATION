import Link from 'next/link'

type Crumb = { label: string; href?: string }

export function PageHeader({
  title,
  description,
  breadcrumbs,
}: {
  title: string
  description?: string
  breadcrumbs?: Crumb[]
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-primary text-primary-foreground">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 20%, oklch(0.62 0.15 152 / 0.5), transparent 45%), radial-gradient(circle at 85% 80%, oklch(0.78 0.15 66 / 0.5), transparent 45%)',
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-3">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-primary-foreground/70">
              {breadcrumbs.map((c, i) => (
                <li key={c.label} className="flex items-center gap-1.5">
                  {c.href ? (
                    <Link href={c.href} className="hover:text-primary-foreground">
                      {c.label}
                    </Link>
                  ) : (
                    <span>{c.label}</span>
                  )}
                  {i < breadcrumbs.length - 1 && <span aria-hidden>/</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-primary-foreground/85 sm:text-base">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
