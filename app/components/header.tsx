import Link from 'next/link'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Next.js SEO Boilerplate</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/about" className="transition-colors hover:text-foreground/80">
              About
            </Link>
            <Link href="/blog" className="transition-colors hover:text-foreground/80">
              Blog
            </Link>
            <Link href="/contact" className="transition-colors hover:text-foreground/80">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}