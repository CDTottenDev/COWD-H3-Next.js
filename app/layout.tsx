import { Inter } from 'next/font/google'
import './globals.css'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { Header } from './components/header'
import dynamic from 'next/dynamic'
import { ThemeProvider } from 'next-themes'
import { ContactFormProvider } from './components/contact-form-controller'

// Dynamic import for footer
const COWDfooter = dynamic(() => import('./components/COWDfooter'))

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next.js SEO Boilerplate',
  description: 'A high-performance, SEO-optimized Next.js starter template',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} relative`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ContactFormProvider>
            <Header />
            <main className="min-h-screen pt-20">
              {children}
            </main>
            <COWDfooter />
          </ContactFormProvider>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}