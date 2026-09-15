import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { officeBearers, stats } from '@/lib/data'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about the Indian Weightlifting Federation — its mission, vision, history and governance.',
}

const values = [
  {
    title: 'Excellence',
    body: 'Building a world-class high-performance pathway from grassroots to the global podium.',
  },
  {
    title: 'Integrity',
    body: 'Championing clean sport with a firm, education-first commitment to anti-doping.',
  },
  {
    title: 'Inclusion',
    body: 'Growing the sport across every state and union territory, for men and women alike.',
  },
  {
    title: 'Transparency',
    body: 'Open selection policies, published results and accountable governance.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About the Federation"
        description="The national controlling body for the sport of weightlifting in India."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-foreground">
              Who we are
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <p>
                The Indian Weightlifting Federation (IWLF) governs, promotes and develops the sport
                of Olympic weightlifting throughout India. Affiliated with the international and
                continental federations, the IWLF is responsible for national championships, team
                selection, athlete development, and the recognition of records.
              </p>
              <p>
                Working with state associations, the Sports Authority of India and other
                stakeholders, the federation nurtures talent from the grassroots level and provides
                a structured competition calendar and high-performance support to elite lifters.
              </p>
              <p>
                This website serves as the single authoritative digital destination for athletes,
                coaches, officials and fans to follow the sport — with events, results, rankings,
                documents and registrations all in one place.
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-display text-lg font-bold text-primary">Our Mission</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  To make India a leading weightlifting nation by developing athletes, coaches and
                  officials through a fair, transparent and modern sporting ecosystem.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-display text-lg font-bold text-primary">Our Vision</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Consistent Olympic and world-championship medals, powered by a deep, clean and
                  well-supported talent pipeline across the country.
                </p>
              </div>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-xl border border-border bg-secondary/40 p-6">
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-foreground">
                At a glance
              </h3>
              <dl className="mt-4 space-y-4">
                {stats.map((s) => (
                  <div key={s.label} className="flex items-baseline justify-between gap-3">
                    <dt className="text-sm text-muted-foreground">{s.label}</dt>
                    <dd className="font-display text-xl font-extrabold text-primary">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>

        <div className="mt-16">
          <h2 className="font-display text-2xl font-extrabold tracking-tight text-foreground">
            Our values
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-display text-lg font-bold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="font-display text-2xl font-extrabold tracking-tight text-foreground">
            Governance & office bearers
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            The federation is administered by an elected executive committee. Representative sample
            of office bearers shown below.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {officeBearers.map((o) => (
              <div
                key={o.name}
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-5"
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary font-display text-lg font-bold text-primary-foreground">
                  {o.name
                    .replace(/(Dr\.|Smt\.|Shri)\s/g, '')
                    .split(' ')
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join('')}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{o.name}</p>
                  <p className="text-sm text-muted-foreground">{o.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
