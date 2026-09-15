import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Barlow_Semi_Condensed } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const barlow = Barlow_Semi_Condensed({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-barlow',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Indian Weightlifting Federation (IWLF)',
    template: '%s | IWLF',
  },
  description:
    'Official website of the Indian Weightlifting Federation (IWLF) — news, athletes, events, competitions, results, rankings, documents and registrations for weightlifting in India.',
  keywords: [
    'IWLF',
    'Indian Weightlifting Federation',
    'weightlifting India',
    'snatch',
    'clean and jerk',
    'athlete rankings',
    'national championships',
  ],
  generator: 'v0.app',
  metadataBase: new URL('https://iwlf.example'),
  openGraph: {
    title: 'Indian Weightlifting Federation (IWLF)',
    description:
      'One authoritative digital destination for Indian weightlifting — athletes, events, results and rankings.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1b3a8f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${barlow.variable}`}>
      <body className="antialiased font-sans flex min-h-dvh flex-col bg-background text-foreground">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
