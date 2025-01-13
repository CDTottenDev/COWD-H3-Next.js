import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { Header } from './components/header'
import { Footer } from './components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Next.js SEO Boilerplate',
    template: '%s | Next.js SEO Boilerplate',
  },
  description: 'A SEO-optimized Next.js boilerplate with TypeScript, Tailwind CSS, and Prisma',
  openGraph: {
    title: 'Next.js SEO Boilerplate',
    description: 'A SEO-optimized Next.js boilerplate with TypeScript, Tailwind CSS, and Prisma',
    url: 'https://your-domain.com',
    siteName: 'Next.js SEO Boilerplate',
    images: [
      {
        url: 'https://your-domain.com/og.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Next.js SEO Boilerplate',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}