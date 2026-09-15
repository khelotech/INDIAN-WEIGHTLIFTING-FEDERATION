import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin, Phone } from 'lucide-react'
import { mainNav } from '@/lib/nav'
import { quickLinks } from '@/lib/data'

export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-16 border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3">
            <Image
              src="/iwlf-logo.png"
              alt="Indian Weightlifting Federation logo"
              width={36}
              height={60}
              className="h-10 w-auto"
            />
            <span className="font-display text-lg font-extrabold text-primary">IWLF</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            The Indian Weightlifting Federation is the national controlling body for the sport of
            weightlifting in India, promoting the sport from grassroots to the international podium.
          </p>
          <address className="mt-4 space-y-2 text-sm not-italic text-muted-foreground">
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              Federation House, New Delhi, India
            </p>
            <p className="flex items-center gap-2">
              <Phone className="size-4 shrink-0 text-primary" />
              +91 11 0000 0000
            </p>
            <p className="flex items-center gap-2">
              <Mail className="size-4 shrink-0 text-primary" />
              info@iwlf.example
            </p>
          </address>
        </div>

        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-wider text-foreground">
            Explore
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-wider text-foreground">
            Sports Bodies
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-wider text-foreground">
            Stay Updated
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Subscribe for federation news, event alerts and results.
          </p>
          <form className="mt-4 flex gap-2" aria-label="Newsletter signup">
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>
            <input
              id="footer-email"
              type="email"
              required
              placeholder="you@example.com"
              className="min-w-0 flex-1 rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
            <button
              type="submit"
              className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:px-6">
          <p>&copy; {year} Indian Weightlifting Federation. All rights reserved.</p>
          <p>Demo website built for illustration — sample content only.</p>
        </div>
      </div>
    </footer>
  )
}
