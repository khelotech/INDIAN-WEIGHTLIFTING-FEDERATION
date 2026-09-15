import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CalendarDays, MapPin, Trophy } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { NewsCard } from '@/components/news-card'
import { AthleteCard } from '@/components/athlete-card'
import { StatusBadge } from '@/components/status-badge'
import { formatDateRange } from '@/lib/format'
import { news, events, athletes, stats, quickLinks } from '@/lib/data'

export default function HomePage() {
  const latestNews = news.slice(0, 3)
  const upcomingEvents = events
    .filter((e) => e.status !== 'Completed')
    .slice(0, 3)
  const featuredAthletes = athletes.filter((a) => a.active).slice(0, 4)

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
        <Image
          src="/hero-weightlifting.png"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/40" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-6 px-4 py-20 sm:px-6 sm:py-28 lg:py-32">
          <Badge className="w-fit bg-accent/90 text-accent-foreground">
            Official National Federation
          </Badge>
          <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Powering the future of weightlifting in India
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
            From grassroots talent to the Olympic podium — the Indian Weightlifting Federation is
            the single home for athletes, events, results and rankings across the nation.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/events"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
            >
              View Events <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/results"
              className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 bg-primary-foreground/10 px-5 py-3 text-sm font-semibold text-primary-foreground backdrop-blur transition-colors hover:bg-primary-foreground/20"
            >
              Results & Rankings
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl font-extrabold text-primary sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Latest news */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              Latest News
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Announcements, press releases and federation updates.
            </p>
          </div>
          <Link
            href="/news"
            className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-primary hover:underline"
          >
            All news <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latestNews.map((item) => (
            <Link key={item.slug} href={`/news`}>
              <NewsCard item={item} />
            </Link>
          ))}
        </div>
      </section>

      {/* Upcoming events */}
      <section className="bg-secondary/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                Upcoming Events
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Championships and competitions across the calendar.
              </p>
            </div>
            <Link
              href="/events"
              className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-primary hover:underline"
            >
              Full calendar <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {upcomingEvents.map((e) => (
              <article
                key={e.slug}
                className="flex flex-col rounded-xl border border-border bg-card p-6"
              >
                <div className="flex items-center justify-between">
                  <Badge variant="accent">{e.level}</Badge>
                  <StatusBadge status={e.status} />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold leading-snug text-foreground">
                  {e.title}
                </h3>
                <dl className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="size-4 text-primary" />
                    <dd>{formatDateRange(e.startDate, e.endDate)}</dd>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="size-4 text-primary" />
                    <dd>
                      {e.venue}, {e.city}
                    </dd>
                  </div>
                </dl>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {e.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured athletes */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              Featured Athletes
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Meet the lifters representing India on the platform.
            </p>
          </div>
          <Link
            href="/athletes"
            className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-primary hover:underline"
          >
            All athletes <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredAthletes.map((a) => (
            <AthleteCard key={a.slug} athlete={a} />
          ))}
        </div>
      </section>

      {/* CTA + quick links */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <Trophy className="size-10 text-accent" />
            <h2 className="mt-4 font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
              Register as an athlete or state unit
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-primary-foreground/85">
              Join the national pool, enter competitions and track your progress through the
              federation&apos;s official registration channels.
            </p>
            <Link
              href="/registrations"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
            >
              Start registration <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-6">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-primary-foreground/80">
              Quick Links
            </h3>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-primary-foreground/90 transition-colors hover:bg-primary-foreground/10"
                  >
                    <ArrowRight className="size-3.5 text-accent" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
